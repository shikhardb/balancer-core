const TMath = artifacts.require('TMath');
const BFactory = artifacts.require('BFactory');
const ExchangeProxy = artifacts.require('ExchangeProxy');
const Multicall = artifacts.require('Multicall');

const WMATIC = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";

module.exports = async function (deployer, network, accounts) {
    if (network === 'development' || network === 'coverage') {
        await deployer.deploy(TMath);
    }
    await deployer.deploy(BFactory);
    await deployer.deploy(ExchangeProxy, WMATIC);
    await deployer.deploy(Multicall);
};
