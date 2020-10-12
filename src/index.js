'use strict';

import crypto from 'crypto';
import {serialize, unserialize} from 'php-serialize';

export default class SrcCrypto {
  constructor (secretKey = 's3cr3tK3y') {
    const hashKey = crypto.createHash('sha256').update(secretKey).digest('hex');

    this.cryptoKey = hashKey.substr(0, 32);
    this.cryptoIv = hashKey.substr(0, 16);
  }

  encrypt(plaintext) {
    let cipher = crypto.createCipheriv('AES-256-CBC', this.cryptoKey, this.cryptoIv);

    return Buffer.from(Buffer.concat([
      cipher.update(serialize(plaintext)),
      cipher.final()
    ]).toString('base64')).toString('base64');
  }

  decrypt(chiperText) {
    if (chiperText === null || typeof chiperText === 'undefined' || chiperText === '') {
      return chiperText;
    }
  
    chiperText = Buffer.from(chiperText, 'base64').toString();
  
    let decipher = crypto.createDecipheriv('AES-256-CBC', this.cryptoKey, this.cryptoIv);
  
    return unserialize(Buffer.concat([
      decipher.update(chiperText, 'base64'),
      decipher.final()
    ]).toString());
  }
}