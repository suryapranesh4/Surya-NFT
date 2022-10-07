const { ethers } = require("hardhat");

async function main(){
  const contract = await ethers.getContractFactory("Surya_NFT");

  const NFT_contract = await contract.deploy();
  await NFT_contract.deployed();

  const contractAddress = NFT_contract.address;
  console.log("Surya_NFT contract deployed to address :",contractAddress);
}

main()
  .then(()=> process.exit(0))
  .catch((err) => {
    console.log("Error :",err);
    process.exit(1);
  })