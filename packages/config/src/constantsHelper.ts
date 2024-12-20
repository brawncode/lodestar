import {ForkName, isForkPostElectra} from "@lodestar/params";
import {ChainConfig} from "./index.js";
/**
 * A collection of functions that retrieve the correct config/preset constants from the given hard fork
 */

export function getMaxBlobsPerBlock(fork: ForkName, config: ChainConfig): number {
  return isForkPostElectra(fork) ? config.MAX_BLOBS_PER_BLOCK_ELECTRA : config.MAX_BLOBS_PER_BLOCK;
}

export function getBlobSidecarSubnetCount(fork: ForkName, config: ChainConfig): number {
  return isForkPostElectra(fork) ? config.BLOB_SIDECAR_SUBNET_COUNT_ELECTRA : config.BLOB_SIDECAR_SUBNET_COUNT;
}
