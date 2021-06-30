
<h1 align=center><code>Wazirx</code></h1>

**Wazrix** is an automated **portfolio manager**, **liquidity provider**, and **price sensor** on **matic network**.

Wazirx turns the concept of an index fund on its head: instead of a paying fees
to portfolio managers to rebalance your portfolio, you collect fees from traders, who rebalance
your portfolio by following arbitrage opportunities.

Wazirx is based on an N-dimensional invariant surface which is a generalization of the constant product formula described by Vitalik Buterin and proven viable by the popular Uniswap dapp.

## Development

Most users will want to consume the ABI definitions for BFactory and BPool.

This project follows the standard Truffle project structure. 

```
yarn compile   # build artifacts to `build/contracts`
yarn testrpc # run ganache
yarn test    # run the tests
```