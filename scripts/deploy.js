const {ethers, run} = require("hardhat");

async function main() {

    const Factory = await ethers.getContractFactory("Factory");
    const factory =  await Factory.deploy();

    // const ERC721Contract = await ethers.getContractFactory("ERC721Contract");
    // const erc721 = await ERC721Contract.deploy("Task", "task", "");

    console.log("Factory address:", factory.address);
    // console.log("ERC721 address:", erc721.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });