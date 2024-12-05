import {Db, encodeKey} from "@lodestar/db";
import {Root, Slot} from "@lodestar/types";
import {intToBytes} from "@lodestar/utils";
import {Bucket, getBucketNameByValue} from "../buckets.js";

export const rootIndexBucket = getBucketNameByValue(Bucket.index_stateArchiveRootIndex);

export function storeRootIndex(db: Db, slot: Slot, stateRoot: Root): Promise<void> {
  return db.put(getRootIndexKey(stateRoot), intToBytes(slot, 8, "be"), {bucketId: rootIndexBucket});
}

export function getRootIndexKey(root: Root): Uint8Array {
  return encodeKey(Bucket.index_stateArchiveRootIndex, root);
}
