import {newInstance, ChaCha20Poly1305} from "@chainsafe/as-chacha20poly1305";
import {ICryptoInterface, pureJsCrypto} from "@chainsafe/libp2p-noise";
import {Uint8ArrayList} from "uint8arraylist";

const ctx = newInstance();
const asImpl = new ChaCha20Poly1305(ctx);

export const bunNoiseCrypto: ICryptoInterface = {
  ...pureJsCrypto,
  hashSHA256: (data: Uint8Array | Uint8ArrayList): Uint8Array => {
    if (data instanceof Uint8ArrayList) {
      return new globalThis.Bun.CryptoHasher("sha256").update(data.subarray()).digest();
    }
    return new globalThis.Bun.CryptoHasher("sha256").update(data).digest();
  },
  chaCha20Poly1305Encrypt(plaintext, nonce, ad, k) {
    return asImpl.seal(k, nonce, plaintext.subarray(), ad);
  },
  chaCha20Poly1305Decrypt(ciphertext, nonce, ad, k, dst) {
    const plaintext = asImpl.open(k, nonce, ciphertext.subarray(), ad, dst);
    if (!plaintext) {
      throw new Error("Invalid chacha20poly1305 decryption");
    }
    return plaintext;
  },
};
