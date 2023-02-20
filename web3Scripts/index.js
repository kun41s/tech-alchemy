const Web3 = require('web3');
require("dotenv").config();
const factory = require("../artifacts/contracts/Factory.sol/Factory.json");
const HDWalletProvider = require('@truffle/hdwallet-provider');

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const ABI = factory.abi;
const CONTRACT_ADDRESS = '0x191715eF660835bcf2dC854EecD05D245d2B4517'; // Insert your ERC721 contract address here
const PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY; // Insert your private key here
console.log("private key",PRIVATE_KEY);
const RPC_ENDPOINT = `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`; // Insert your RPC endpoint here
const PROVIDER = new HDWalletProvider(PRIVATE_KEY, RPC_ENDPOINT);
const web3 = new Web3(PROVIDER);

const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

async function mintNFT(name, symbol) {
  try {
    // console.log("contrct ", contract)

    const accounts = await web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
    // console.log(accounts);
    const minter = accounts.address; // Replace with the address of your minter role
    console.log(minter);

    const tx = await contract.methods
      .createERC721(name, symbol)
      .send({ from: minter });

    console.log(`Transaction hash: ${tx}`);
  } catch (error) {
    console.log(error);
  }
}

mintNFT('abc', 'ABC');
