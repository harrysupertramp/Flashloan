require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();  
require("hardhat-deploy");

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://eth-rinkeby/example"  //set an OR option
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || process.env.ALCHEMY_MAINNET_RPC_URL 

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
        chainId: 31337,
        forking: {
        url: MAINNET_RPC_URL,
      },
    },
    localhost: {
      chainId: 31337,
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],  //metamask account 3 !!!!!
      chainId: 4,
      blockConfirmations: 2,
    },
    localhost:{
      url: "http://127.0.0.1:8545/",  // --network localhost
      chainId: 31337,
    }
  },
  solidity: {
    compilers: [{ version: "0.8.5 "}, { version: "0.6.4 "}, { version: "0.7.0 "}, { version: "0.6.6 "}]
  },// we can add differente solidity versions
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {   //const { deployer } = await getNamedAccounts()
    deployer: {      // need to add the hardhat-deploy plug in for namedAccounts
      default: 0,
    },
    users: {
      default: 1
    },
  },
  gasReporter: {
    enabled: true,   
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
};
