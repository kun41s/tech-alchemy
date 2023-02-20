require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
      saveDeployments: true,
    }
  }
};