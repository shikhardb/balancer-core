const HDWalletProvider = require("truffle-hdwallet-provider");

require('dotenv').config();  // Store environment-specific variable from '.env' to process.env

module.exports = {
    networks: {
        development: {
            host: 'localhost', // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: '*', // Any network (default: none)
            gas: 10000000,
        },
        coverage: {
            host: 'localhost',
            network_id: '*',
            port: 8555,
            gas: 0xfffffffffff,
            gasPrice: 0x01,
        },
        mumbai: {
            provider: () => new HDWalletProvider(process.env.PK, `https://rpc-mumbai.matic.today`),
            network_id: 80001,
            gasPrice: 10000000000,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        matic: {
            provider: () => new HDWalletProvider(process.env.PK, `https://rpc-mainnet.matic.network`),
            network_id: 137,
            gasPrice: 1000000000,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    // Configure your compilers
    compilers: {
        solc: {
            version: '0.5.12',
            settings: { // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 200,
                }
            },
        },
    },
};
