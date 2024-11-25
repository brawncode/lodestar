import {SignedBeaconBlock, deneb, peerdas} from "@lodestar/types";
import {ForkName} from "@lodestar/params";
import {BlockInput, CachedData, GossipedInputType} from "../blocks/types.js";

export enum BlockInputAvailabilitySource {
  GOSSIP = "gossip",
  UNKNOWN_SYNC = "unknown_sync",
}

export type GossipedBlockInput =
  | {type: GossipedInputType.block; signedBlock: SignedBeaconBlock; blockBytes: Uint8Array | null}
  | {type: GossipedInputType.blob; blobSidecar: deneb.BlobSidecar; blobBytes: Uint8Array | null}
  | {
      type: GossipedInputType.dataColumn;
      dataColumnSidecar: peerdas.DataColumnSidecar;
      dataColumnBytes: Uint8Array | null;
    };

export type BlockInputCacheType = {
  fork: ForkName;
  block?: SignedBeaconBlock;
  blockBytes?: Uint8Array | null;
  cachedData?: CachedData;
  // block promise and its callback cached for delayed resolution
  blockInputPromise: Promise<BlockInput>;
  resolveBlockInput: (blockInput: BlockInput) => void;
};
