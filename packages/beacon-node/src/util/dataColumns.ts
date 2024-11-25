import {digest} from "@chainsafe/as-sha256";
import {NUMBER_OF_COLUMNS, DATA_COLUMN_SIDECAR_SUBNET_COUNT} from "@lodestar/params";
import {ColumnIndex} from "@lodestar/types";
import {ChainForkConfig} from "@lodestar/config";
import {ssz} from "@lodestar/types";
import {bytesToBigInt} from "@lodestar/utils";
import {NodeId} from "../network/subnets/index.js";
import {BlockInputCacheType} from "../chain/seenCache/types.js";
import {CachedData, CachedDataColumns} from "../chain/blocks/types.js";
import {ckzg} from "./kzg.js";

export type CustodyConfig = {
  custodyColumnsIndex: Uint8Array;
  custodyColumnsLen: number;
  custodyColumns: ColumnIndex[];
  sampledColumns: ColumnIndex[];
};

export function getCustodyConfig(nodeId: NodeId, config: ChainForkConfig): CustodyConfig {
  const custodyColumns = getDataColumns(nodeId, Math.max(config.CUSTODY_REQUIREMENT, config.NODE_CUSTODY_REQUIREMENT));
  const sampledColumns = getDataColumns(
    nodeId,
    Math.max(config.CUSTODY_REQUIREMENT, config.NODE_CUSTODY_REQUIREMENT, config.SAMPLES_PER_SLOT)
  );
  const custodyMeta = getCustodyColumnsMeta(custodyColumns);
  return {...custodyMeta, custodyColumns, sampledColumns};
}

export function getCustodyColumnsMeta(custodyColumns: ColumnIndex[]): {
  custodyColumnsIndex: Uint8Array;
  custodyColumnsLen: number;
} {
  // custody columns map which column maps to which index in the array of columns custodied
  // with zero representing it is not custodied
  const custodyColumnsIndex = new Uint8Array(NUMBER_OF_COLUMNS);
  let custodyAtIndex = 1;
  for (const columnIndex of custodyColumns) {
    custodyColumnsIndex[columnIndex] = custodyAtIndex;
    custodyAtIndex++;
  }
  return {custodyColumnsIndex, custodyColumnsLen: custodyColumns.length};
}

// optimize by having a size limited index/map
export function getDataColumns(nodeId: NodeId, custodySubnetCount: number): ColumnIndex[] {
  const subnetIds = getDataColumnSubnets(nodeId, custodySubnetCount);
  const columnsPerSubnet = Number(NUMBER_OF_COLUMNS / DATA_COLUMN_SIDECAR_SUBNET_COUNT);

  const columnIndexes = [];
  for (const subnetId of subnetIds) {
    for (let i = 0; i < columnsPerSubnet; i++) {
      const columnIndex = DATA_COLUMN_SIDECAR_SUBNET_COUNT * i + subnetId;
      columnIndexes.push(columnIndex);
    }
  }

  columnIndexes.sort((a, b) => a - b);
  return columnIndexes;
}

export function getDataColumnSubnets(nodeId: NodeId, custodySubnetCount: number): number[] {
  const subnetIds: number[] = [];
  if (custodySubnetCount > DATA_COLUMN_SIDECAR_SUBNET_COUNT) {
    custodySubnetCount = DATA_COLUMN_SIDECAR_SUBNET_COUNT;
  }

  // nodeId is in bigendian and all computes are in little endian
  let currentId = bytesToBigInt(nodeId, "be");
  while (subnetIds.length < custodySubnetCount) {
    // could be optimized
    const currentIdBytes = ssz.UintBn256.serialize(currentId);
    const subnetId = Number(
      ssz.UintBn64.deserialize(digest(currentIdBytes).slice(0, 8)) % BigInt(DATA_COLUMN_SIDECAR_SUBNET_COUNT)
    );
    if (!subnetIds.includes(subnetId)) {
      subnetIds.push(subnetId);
    }

    const willOverflow = currentIdBytes.reduce((acc, elem) => acc && elem === 0xff, true);
    if (willOverflow) {
      currentId = BigInt(0);
    } else {
      currentId++;
    }
  }

  return subnetIds;
}

export function reconstructColumnMatrix(columnIndices: number[], columns: Uint8Array[][]): Uint8Array[] {
  if (columnIndices.length !== columns.length) {
    throw new Error("Invalid number of columnIndices or columns");
  }
  if (columns.length >= NUMBER_OF_COLUMNS / 2) {
    throw new Error("Invalid matrix reconstruction. Insufficient columns");
  }
  const partialBlobs: Uint8Array[][] = Array.from(
    {length: columns[0].length},
    () => new Array<Uint8Array>(columns.length)
  );
  for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
    const column = columns[columnIndex];
    if (column.length !== columns[0].length) {
      throw new Error("All columns must have the same number of cells when reconstructing matrix");
    }
    column.forEach((cell, blobIndex) => (partialBlobs[blobIndex][columnIndex] = cell));
  }

  const blobs: Uint8Array[][] = [];
  const kzgProofs: Uint8Array[][] = [];
  for (const partialBlob of partialBlobs) {
    const [reconstructedBlob, reconstructedProofs] = ckzg.recoverCellsAndKzgProofs(columnIndices, partialBlob);
    blobs.push(reconstructedBlob);
    kzgProofs.push(reconstructedProofs);
  }
}

export async function asyncReconstructColumnMatrix(cachedData: CachedData): Promise<Uint8Array[]> {
  const {} = cachedData;
  if (columnIndices.length !== columns.length) {
    throw new Error("Invalid number of columnIndices or columns");
  }
  if (columns.length >= NUMBER_OF_COLUMNS / 2) {
    throw new Error("Invalid matrix reconstruction. Insufficient columns");
  }
  const partialBlobs: Uint8Array[][] = Array.from(
    {length: columns[0].length},
    () => new Array<Uint8Array>(columns.length)
  );
  for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
    const column = columns[columnIndex];
    if (column.length !== columns[0].length) {
      throw new Error("All columns must have the same number of cells when reconstructing matrix");
    }
    column.forEach((cell, blobIndex) => (partialBlobs[blobIndex][columnIndex] = cell));
  }

  const blobs: Uint8Array[][] = [];
  const kzgProofs: Uint8Array[][] = [];
  for (const partialBlob of partialBlobs) {
    const [reconstructedBlob, reconstructedProofs] = ckzg.recoverCellsAndKzgProofs(columnIndices, partialBlob);
    blobs.push(reconstructedBlob);
    kzgProofs.push(reconstructedProofs);
  }
}
