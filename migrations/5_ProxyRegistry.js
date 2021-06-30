const ProxyRegistry = artifacts.require('ProxyRegistry');
const DSProxyFactory = artifacts.require('DSProxyFactory');

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(DSProxyFactory)
    await deployer.deploy(ProxyRegistry, DSProxyFactory.address);
};
