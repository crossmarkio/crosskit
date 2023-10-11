/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import CryptoJS from "crypto-js";
import { generateMnemonic, mnemonicToSeed } from "bip39";
import * as Bip32 from "bip32";

const generateVector = (iv?: string) =>
  CryptoJS.enc.Utf8.parse(iv || "8080808080808080");

export const crypto = {
  generateRandomMnuemonic: () => {
    const mnemonic = generateMnemonic();
    return mnemonic;
  },

  hash256: (message: string) => CryptoJS.SHA256(message).toString(),

  hash512: (message: string) => CryptoJS.SHA512(message).toString(),

  hmac256: (message: string, key: string) =>
    CryptoJS.HmacSHA256(message, key).toString(),

  hmac512: (message: string, key: string) =>
    CryptoJS.HmacSHA512(message, key).toString(),

  deriveSeedFromMnemonic: (muemonic: string) =>
    mnemonicToSeed(muemonic).then((bytes: Buffer) => bytes.toString("hex")),

  deriveMfromMnemonic: (muemonic: string) =>
    mnemonicToSeed(muemonic).then((bytes: Buffer) => Bip32.fromSeed(bytes)),

  encrypt: (message: any, privateKey: string, iv?: string) =>
    CryptoJS.AES.encrypt(JSON.stringify({ message }), privateKey, {
      keySize: 128 / 8,
      iv: generateVector(iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(),

  decrypt: (ciphertext: string, privateKey: string, iv?: string) =>
    JSON.parse(
      CryptoJS.enc.Utf8.stringify(
        CryptoJS.AES.decrypt(ciphertext, privateKey, {
          keySize: 128 / 8,
          iv: generateVector(iv),
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        })
      )
    ).message,
};

export default crypto;
