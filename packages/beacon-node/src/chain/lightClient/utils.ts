import {
  FINALIZED_ROOT_DEPTH,
  FINALIZED_ROOT_DEPTH_ELECTRA,
  ForkName,
  ForkPostElectra,
  ForkSeq,
  isForkPostElectra,
  NEXT_SYNC_COMMITTEE_DEPTH,
  NEXT_SYNC_COMMITTEE_DEPTH_ELECTRA,
  SYNC_COMMITTEE_SIZE,
  ZERO_HASH,
} from "@lodestar/params";
import {computeSyncPeriodAtSlot} from "@lodestar/state-transition";
import {LightClientUpdateSummary} from "./types.js";
import {LightClientHeader, LightClientUpdate, ssz} from "@lodestar/types";
import {BitArray} from "@chainsafe/ssz";
import {byteArrayEquals} from "../../util/bytes.js";
import {ChainForkConfig} from "@lodestar/config";

/**
 * Returns the update with more bits. On ties, prevUpdate is the better
 *
 * https://github.com/ethereum/consensus-specs/blob/be3c774069e16e89145660be511c1b183056017e/specs/altair/light-client/sync-protocol.md#is_better_update
 */
export function isBetterUpdate(newUpdate: LightClientUpdateSummary, oldUpdate: LightClientUpdateSummary): boolean {
  // Compare supermajority (> 2/3) sync committee participation
  const newNumActiveParticipants = newUpdate.activeParticipants;
  const oldNumActiveParticipants = oldUpdate.activeParticipants;
  const newHasSupermajority = newNumActiveParticipants * 3 >= SYNC_COMMITTEE_SIZE * 2;
  const oldHasSupermajority = oldNumActiveParticipants * 3 >= SYNC_COMMITTEE_SIZE * 2;
  if (newHasSupermajority !== oldHasSupermajority) {
    return newHasSupermajority;
  }
  if (!newHasSupermajority && newNumActiveParticipants !== oldNumActiveParticipants) {
    return newNumActiveParticipants > oldNumActiveParticipants;
  }

  // Compare presence of relevant sync committee
  const newHasRelevantSyncCommittee =
    newUpdate.isSyncCommitteeUpdate &&
    computeSyncPeriodAtSlot(newUpdate.attestedHeaderSlot) === computeSyncPeriodAtSlot(newUpdate.signatureSlot);
  const oldHasRelevantSyncCommittee =
    oldUpdate.isSyncCommitteeUpdate &&
    computeSyncPeriodAtSlot(oldUpdate.attestedHeaderSlot) === computeSyncPeriodAtSlot(oldUpdate.signatureSlot);
  if (newHasRelevantSyncCommittee !== oldHasRelevantSyncCommittee) {
    return newHasRelevantSyncCommittee;
  }

  // Compare indication of any finality
  const newHasFinality = newUpdate.isFinalityUpdate;
  const oldHasFinality = oldUpdate.isFinalityUpdate;
  if (newHasFinality !== oldHasFinality) {
    return newHasFinality;
  }

  // Compare sync committee finality
  if (newHasFinality) {
    const newHasSyncCommitteeFinality =
      computeSyncPeriodAtSlot(newUpdate.finalizedHeaderSlot) === computeSyncPeriodAtSlot(newUpdate.attestedHeaderSlot);
    const oldHasSyncCommitteeFinality =
      computeSyncPeriodAtSlot(oldUpdate.finalizedHeaderSlot) === computeSyncPeriodAtSlot(oldUpdate.attestedHeaderSlot);
    if (newHasSyncCommitteeFinality !== oldHasSyncCommitteeFinality) {
      return newHasSyncCommitteeFinality;
    }
  }

  // Tiebreaker 1: Sync committee participation beyond supermajority
  if (newNumActiveParticipants !== oldNumActiveParticipants) {
    return newNumActiveParticipants > oldNumActiveParticipants;
  }

  // Tiebreaker 2: Prefer older data (fewer changes to best)
  if (newUpdate.attestedHeaderSlot !== oldUpdate.attestedHeaderSlot) {
    return newUpdate.attestedHeaderSlot < oldUpdate.attestedHeaderSlot;
  }
  return newUpdate.signatureSlot < oldUpdate.signatureSlot;
}

export function toLightClientUpdateSummary(update: LightClientUpdate): LightClientUpdateSummary {
  return {
    activeParticipants: sumBits(update.syncAggregate.syncCommitteeBits),
    attestedHeaderSlot: update.attestedHeader.beacon.slot,
    signatureSlot: update.signatureSlot,
    finalizedHeaderSlot: update.finalizedHeader.beacon.slot,
    isSyncCommitteeUpdate: isSyncCommitteeUpdate(update),
    isFinalityUpdate: isFinalityUpdate(update),
  };
}

export function isSyncCommitteeUpdate(update: LightClientUpdate): boolean {
  return (
    // Fast return for when constructing full LightClientUpdate from partial updates
    update.nextSyncCommitteeBranch !==
      getZeroSyncCommitteeBranch(isElectraLightClientUpdate(update) ? ForkName.electra : ForkName.altair) &&
    update.nextSyncCommitteeBranch.some((branch) => !byteArrayEquals(branch, ZERO_HASH))
  );
}

export function isFinalityUpdate(update: LightClientUpdate): boolean {
  return (
    // Fast return for when constructing full LightClientUpdate from partial updates
    update.finalityBranch !==
      getZeroFinalityBranch(isElectraLightClientUpdate(update) ? ForkName.electra : ForkName.altair) &&
    update.finalityBranch.some((branch) => !byteArrayEquals(branch, ZERO_HASH))
  );
}

export function sumBits(bits: BitArray): number {
  return bits.getTrueBitIndexes().length;
}

export function getZeroSyncCommitteeBranch(fork: ForkName): Uint8Array[] {
  const nextSyncCommitteeDepth = isForkPostElectra(fork)
    ? NEXT_SYNC_COMMITTEE_DEPTH_ELECTRA
    : NEXT_SYNC_COMMITTEE_DEPTH;

  return Array.from({length: nextSyncCommitteeDepth}, () => ZERO_HASH);
}

export function getZeroFinalityBranch(fork: ForkName): Uint8Array[] {
  const finalizedRootDepth = isForkPostElectra(fork) ? FINALIZED_ROOT_DEPTH_ELECTRA : FINALIZED_ROOT_DEPTH;

  return Array.from({length: finalizedRootDepth}, () => ZERO_HASH);
}

export function isElectraLightClientUpdate(update: LightClientUpdate): update is LightClientUpdate<ForkPostElectra> {
  const updatePostElectra = update as LightClientUpdate<ForkPostElectra>;
  return (
    updatePostElectra.finalityBranch !== undefined &&
    updatePostElectra.finalityBranch.length === FINALIZED_ROOT_DEPTH_ELECTRA
  );
}

export function upgradeLightClientHeader(
  config: ChainForkConfig,
  targetFork: ForkName,
  header: LightClientHeader
): LightClientHeader {
  const headerFork = config.getForkName(header.beacon.slot);
  if (ForkSeq[headerFork] >= ForkSeq[targetFork]) {
    throw Error(`Invalid upgrade request from headerFork=${headerFork} to targetFork=${targetFork}`);
  }

  // We are modifying the same header object, may be we could create a copy, but its
  // not required as of now
  const upgradedHeader = header;
  const startUpgradeFromFork = Object.values(ForkName)[ForkSeq[headerFork] + 1];

  switch (startUpgradeFromFork) {
    // biome-ignore lint/suspicious/useDefaultSwitchClauseLast: We want default to evaluate at first to throw error early
    default:
      throw Error(
        `Invalid startUpgradeFromFork=${startUpgradeFromFork} for headerFork=${headerFork} in upgradeLightClientHeader to targetFork=${targetFork}`
      );

    case ForkName.altair:
    // biome-ignore lint/suspicious/noFallthroughSwitchClause: We need fall-through behavior here
    case ForkName.bellatrix:
      // Break if no further upgradation is required else fall through
      if (ForkSeq[targetFork] <= ForkSeq.bellatrix) break;

    // biome-ignore lint/suspicious/noFallthroughSwitchClause: We need fall-through behavior here
    case ForkName.capella:
      (upgradedHeader as LightClientHeader<ForkName.capella>).execution =
        ssz.capella.LightClientHeader.fields.execution.defaultValue();
      (upgradedHeader as LightClientHeader<ForkName.capella>).executionBranch =
        ssz.capella.LightClientHeader.fields.executionBranch.defaultValue();

      // Break if no further upgradation is required else fall through
      if (ForkSeq[targetFork] <= ForkSeq.capella) break;

    // biome-ignore lint/suspicious/noFallthroughSwitchClause: We need fall-through behavior here
    case ForkName.deneb:
      (upgradedHeader as LightClientHeader<ForkName.deneb>).execution.blobGasUsed =
        ssz.deneb.LightClientHeader.fields.execution.fields.blobGasUsed.defaultValue();
      (upgradedHeader as LightClientHeader<ForkName.deneb>).execution.excessBlobGas =
        ssz.deneb.LightClientHeader.fields.execution.fields.excessBlobGas.defaultValue();

      // Break if no further upgradation is required else fall through
      if (ForkSeq[targetFork] <= ForkSeq.deneb) break;

    case ForkName.electra:
      // No changes to LightClientHeader in Electra

      // Break if no further upgrades is required else fall through
      if (ForkSeq[targetFork] <= ForkSeq.electra) break;
  }
  return upgradedHeader;
}
