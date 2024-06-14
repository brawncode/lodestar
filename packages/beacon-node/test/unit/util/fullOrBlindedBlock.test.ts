import {describe, it, expect} from "vitest";
import {ForkInfo} from "@lodestar/config";
import {allForks, capella} from "@lodestar/types";
import {isForkExecution} from "@lodestar/params";
import {
  blindedOrFullBlockToBlinded,
  blindedOrFullBlockToFull,
  deserializeFullOrBlindedSignedBeaconBlock,
  isBlindedBytes,
  serializeFullOrBlindedSignedBeaconBlock,
} from "../../../src/util/fullOrBlindedBlock.js";
import {chainConfig, mockBlocks} from "../../mocks/block.js";
import {byteArrayEquals} from "../../../src/util/bytes.js";

type FullOrBlind = "full" | "blinded";
type FullOrBlindBlock = [FullOrBlind, ForkInfo, allForks.FullOrBlindedSignedBeaconBlock, Uint8Array];

const fullOrBlindedBlocks = Object.values(mockBlocks)
  .map(({forkInfo, full, fullSerialized, blinded, blindedSerialized}) => {
    const fullOrBlindBlock: FullOrBlindBlock[] = [["full", forkInfo, full, fullSerialized]];
    if (blinded && blindedSerialized) {
      fullOrBlindBlock.push(["blinded", forkInfo, blinded, blindedSerialized]);
    }
    return fullOrBlindBlock;
  })
  .flat();

describe("isBlindedBytes", () => {
  for (const [fullOrBlinded, {seq, name}, , block] of fullOrBlindedBlocks) {
    it(`should return ${fullOrBlinded === "blinded"} for ${fullOrBlinded} ${name} blocks`, () => {
      expect(isBlindedBytes(seq, block)).toEqual(isForkExecution(name) && fullOrBlinded === "blinded");
    });
  }
});

describe("serializeFullOrBlindedSignedBeaconBlock", () => {
  for (const [fullOrBlinded, {name}, block, expected] of fullOrBlindedBlocks) {
    it(`should serialize ${fullOrBlinded} ${name} block`, () => {
      const serialized = serializeFullOrBlindedSignedBeaconBlock(chainConfig, block);
      expect(byteArrayEquals(serialized, expected)).toBeTruthy();
    });
  }
});

describe("deserializeFullOrBlindedSignedBeaconBlock", () => {
  for (const [fullOrBlinded, {name}, block, serialized] of fullOrBlindedBlocks) {
    it(`should deserialize ${fullOrBlinded} ${name} block`, () => {
      const deserialized = deserializeFullOrBlindedSignedBeaconBlock(chainConfig, serialized);
      const type =
        isForkExecution(name) && fullOrBlinded === "blinded"
          ? chainConfig.getBlindedForkTypes(block.message.slot).SignedBeaconBlock
          : chainConfig.getForkTypes(block.message.slot).SignedBeaconBlock;
      expect(type.equals(deserialized as any, block as any)).toBeTruthy();
    });
  }
});

describe("blindedOrFullBlockToBlinded", function () {
  for (const {
    forkInfo: {name},
    full,
    blinded,
  } of mockBlocks) {
    it(`should convert full ${name} to blinded block`, () => {
      const result = blindedOrFullBlockToBlinded(chainConfig, full);
      const isExecution = isForkExecution(name);
      const isEqual = isExecution
        ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          chainConfig.getBlindedForkTypes(full.message.slot).SignedBeaconBlock.equals(result, blinded!)
        : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          chainConfig.getForkTypes(full.message.slot).SignedBeaconBlock.equals(result, isExecution ? blinded! : full);
      expect(isEqual).toBeTruthy();
    });
    if (!blinded) continue;
    it(`should convert blinded ${name} to blinded block`, () => {
      const result = blindedOrFullBlockToBlinded(chainConfig, blinded);
      const isEqual = isForkExecution(name)
        ? chainConfig.getBlindedForkTypes(full.message.slot).SignedBeaconBlock.equals(result, blinded)
        : chainConfig.getForkTypes(full.message.slot).SignedBeaconBlock.equals(result, blinded);
      expect(isEqual).toBeTruthy();
    });
  }
});

describe("blindedOrFullBlockToFull", function () {
  for (const {
    forkInfo: {name, seq},
    full,
    blinded,
  } of mockBlocks) {
    const transactionsAndWithdrawals = {
      transactions: (full as capella.SignedBeaconBlock).message.body.executionPayload?.transactions ?? [],
      withdrawals: (full as capella.SignedBeaconBlock).message.body.executionPayload?.withdrawals ?? [],
    };
    it(`should convert full ${name} to full block`, () => {
      const result = blindedOrFullBlockToFull(chainConfig, seq, full, transactionsAndWithdrawals);
      expect(chainConfig.getForkTypes(full.message.slot).SignedBeaconBlock.equals(result, full)).toBeTruthy();
    });
    if (!blinded) continue;
    it(`should convert blinded ${name} to full block`, () => {
      const result = blindedOrFullBlockToFull(chainConfig, seq, blinded, transactionsAndWithdrawals);
      expect(chainConfig.getForkTypes(full.message.slot).SignedBeaconBlock.equals(result, full)).toBeTruthy();
    });
  }
});
