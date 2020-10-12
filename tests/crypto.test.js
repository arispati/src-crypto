import SrcCrypto from '../src/index'

const crypto = new SrcCrypto('zLbFftHXGCdDZM5ceV1wCbny7YBr70GY');

test('Encrypt', () => {
    expect(crypto.encrypt('@arispati/src-crypto')).toBe('S0NQaXYwVFhIdi9wNnd3Q0UrK3BmOWNGRmFmWFJ4Q3BIUlVLakhnQysvUT0=')
});

test('Decrypt', () => {
    expect(crypto.decrypt('S0NQaXYwVFhIdi9wNnd3Q0UrK3BmOWNGRmFmWFJ4Q3BIUlVLakhnQysvUT0=')).toBe('@arispati/src-crypto')
});