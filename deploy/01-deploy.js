
const { network } = require("hardhat")
const {verify} = require("../utils/verify")
const { networkConfig } = require("../helper-hardhat-config")


module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy,log } = deployments
  const { deployer } = await getNamedAccounts()  // in hardhat.config we can insert different accounts, in the networks part 
                                                // or create a namedAccounts part
  //const chainId = network.config.chainId
  // address _addressProvider,
  //       address _uniswapRouterAddress,
  //       address _sushiswapRouterAddress,
  //       address _weth,
  //       address _dai
  //when we work for localhost or hardhatnetwork we want to use a mock
  const arg = [
    networkConfig[network.config.chainId].provider, 
    networkConfig[network.config.chainId].uniswaprouter,
    networkConfig[network.config.chainId].sushiswaprouter,
    networkConfig[network.config.chainId].wethtoken,
    networkConfig[network.config.chainId].daitoken]

  const flashLoan = await deploy ("flashLoanArbitrage",{
    from: deployer,
    args: [],
    log: true,
    args: [""], // this "Chainfy" is _contractName for the Constructor
    waitConfirmations: network.config.blockConfirmations || 1,
  }) 
  verify

  const verify = async (contractAddress, args) => {
    console.log("Verifying contract...");
    try {
      await run("verify:verify", {  // in this way we are verifing the contract in etherscan
        address: contractAddress,
        constructorArguments: args,
      });
    } catch (e) {
      if (e.message.toLowerCase().includes("already verified")) {
        console.log("Already Verified!");
      } else {
        console.log(e);
      }
    }
  }
}

module.exports.tags = ["all", "chainfy"] 

//yarn hardhat deploy --network rinkeby --tags chainfy