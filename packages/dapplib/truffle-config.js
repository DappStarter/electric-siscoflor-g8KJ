require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remind honey inflict bread sunset sunny'; 
let testAccounts = [
"0x8824cbf6a044c54a0fe4d5e99a37558b0c5f21027a0cf4dd09b57a93ce410481",
"0x64114f324c31d57ee9d30fe6c298edd362b9cb046d7bce57513812b7d18c3c61",
"0x7d2b2398d72387c0d7d604fa1766b2098930d916c0315dfb2c8582c8ff366696",
"0x49a5d5624b4054f714db1200f9e4d6210a358fd241ac68284d1224139620a5fd",
"0xd46ce53ad8d98422dbfcf9c593f8e3d4bfe9b3993522939fde7252166d808305",
"0x82bbc155f00f55abf02fbe59baaed2486684f7194ab8f85f64f16a9c05b08e0a",
"0xb932ef98e8038bac22989cdd84130e6869ad9e7262c8469ede7759db5e0f9c71",
"0xe15b51b3c555c82329a841483b196f6d80e6dcb844f90170bf50e2ad808110be",
"0x3a28a5ae6d5ebaac4ce6401997b0b1fb1d92fc5cdac9a5b821fe7a65fc0a0a0a",
"0x4264119ff9a19f5ade90f6c99567eb91c14073033e0c45fd5650391b3dc89a2e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

