const networkConfig = {
  31337: {
    uniswaprouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    sushiswaprouter: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
    provider: "0xb53c1a33016b2dc2ff3653530bff1848a515c8c5",
    wethtoken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    daitoken: "0x6b175474e89094c44da98b954eedeac495271d0f",
  },
  4: {
    named: "rinkeby",
  },
  137: {
    named: "polygon",
  },
}

const developmentChains = ["hardhat", "localhost"] 
const constructor = "constructor"

module.exports = {
  networkConfig,
  developmentChains,
  constructor,
}
