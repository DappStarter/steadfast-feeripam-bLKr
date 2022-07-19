require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn proud grace clog olympic thought'; 
let testAccounts = [
"0xb6f65ab34bbfb8c1a5dfd3e90e38ff9d56b8f1083536b533d24252004d9a8057",
"0xfff53f172c9e7c3cc0b3cf1ba3403a02bc0e7444680d22233d657b3cd1999fda",
"0x4eaf3542ebf20dfd2eeb7fdb06f601a66a6088394a93f0e194abea5cefd3ad98",
"0xc0f4802602b2288b6bde2ac21ff30585fcf4dbcde38ff508e0bf686f79308c52",
"0x838c3a832280053e3762bc4b25eaa4878e725197431ac81a44f83212400574b0",
"0x6020484191c2d74bd26420e60cbb7677770700c6431363e33fdb8b1be8595603",
"0xe436a349f826c36c707672d8acca04a22b729d1b7a7666df65a48c08d67f44ec",
"0x0333151951456c26cfa6b753edd088c338fc6f62fa2f7e2e8728c6aea7a76fc3",
"0x7221d439f0b59fcb1978237230c36bc31e82ca349e98015a923359d4faba94f5",
"0xab86e86a2bc707969e1ef1de8910d78981252c72e4fa2bb8de4924c66dc79117"
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

