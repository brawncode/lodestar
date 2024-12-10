import {ContainerType, ListCompositeType} from "@chainsafe/ssz";
import {MAX_TRANSACTIONS_PER_INCLUSION_LIST} from "@lodestar/params";
import {ssz as bellatrixSsz} from "../bellatrix/index.js";
import {ssz as electraSsz} from "../electra/index.js";
import {ssz as primitiveSsz} from "../primitive/index.js";

const {Slot, Root, BLSSignature, ValidatorIndex} = primitiveSsz;

export const InclusionList = new ContainerType({
  slot: Slot,
  validatorIndex: ValidatorIndex,
  inclusionListCommitteeRoot: Root,
  transactions: new ListCompositeType(bellatrixSsz.Transaction, MAX_TRANSACTIONS_PER_INCLUSION_LIST),
});

export const SignedInclusionlist = new ContainerType({
  message: InclusionList,
  signature: BLSSignature,
});

export const BeaconState = new ContainerType({
  ...electraSsz.BeaconState.fields,
});

export const BeaconBlockBody = new ContainerType({
  ...electraSsz.BeaconBlockBody.fields,
});

export const SignedBeaconBlock = new ContainerType({
  ...electraSsz.SignedBeaconBlock.fields,
});

export const SignedBlindedBeaconBlock = new ContainerType({
  ...electraSsz.SignedBlindedBeaconBlock.fields,
});

export const ExecutionPayload = new ContainerType({
  ...electraSsz.ExecutionPayload.fields,
});
