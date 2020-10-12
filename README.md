# @arispati/src-crypto
SRC Crypto Library for node.js

## How to Install
- Install with npm
```bash
npm install @arispati/src-crypto
```

## How to Use
```javascript
import SrcCrypto from '@arispati/src-crypto'

// Set the secret key
let secretKey = 's3cr3tK3y' // default secret key

// Initilize CryptoAES Class
let crypto = new SrcCrypto(secretKey)

// Encrypt
let encrypt = crypto.encrypt('@arispati/src-crypto')
// di92SjlPSnFab3JhclI2U0Q5K1k3SVFncTV4VTVzdDlkZTNZT09TV21Jcz0=

// Decrypt
let decrypt = crypto.decrypt(encrypted)
// "@arispati/src-crypto"
```

## Tests

- Install the dev dependencies
```bash
npm install
```

- Run the test command
```bash
npm test
```