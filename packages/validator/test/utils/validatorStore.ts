import {SecretKey} from "@chainsafe/blst";
import {ApiClient} from "@lodestar/api";
import {ChainConfig, createBeaconConfig} from "@lodestar/config";
import {chainConfig} from "@lodestar/config/default";
import {Signer, SignerType, ValidatorStore} from "../../src/index.js";
import {IndicesService} from "../../src/services/indices.js";
import {ValidatorProposerConfig} from "../../src/services/validatorStore.js";
import {testLogger} from "./logger.js";
import {SlashingProtectionMock} from "./slashingProtectionMock.js";

/**
 * Initializes an actual ValidatorStore without stubs
 */
export async function initValidatorStore(
  secretKeys: SecretKey[],
  api: ApiClient,
  customChainConfig: ChainConfig = chainConfig,
  valProposerConfig: ValidatorProposerConfig = {defaultConfig: {builder: {}}, proposerConfig: {}}
): Promise<ValidatorStore> {
  const logger = testLogger();
  const genesisValidatorsRoot = Buffer.alloc(32, 0xdd);

  const signers: Signer[] = secretKeys.map((sk) => ({
    type: SignerType.Local,
    secretKey: sk,
  }));

  const metrics = null;

  return ValidatorStore.init(
    {
      config: createBeaconConfig(customChainConfig, genesisValidatorsRoot),
      slashingProtection: new SlashingProtectionMock(),
      indicesService: new IndicesService(logger, api, metrics),
      doppelgangerService: null,
      metrics,
    },
    signers,
    valProposerConfig
  );
}
