import {phase0, ssz, ValidatorIndex} from "@lodestar/types";
import {IChainForkConfig} from "@lodestar/config";
import {Db, Bucket, Repository} from "@lodestar/db";

export class VoluntaryExitRepository extends Repository<ValidatorIndex, phase0.SignedVoluntaryExit> {
  constructor(config: IChainForkConfig, db: Db) {
    super(config, db, Bucket.phase0_exit, ssz.phase0.SignedVoluntaryExit);
  }

  getId(value: phase0.SignedVoluntaryExit): ValidatorIndex {
    return value.message.validatorIndex;
  }
}
