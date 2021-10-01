async function main() {
  // Rename Greeter to your contract name
  const contract = await ethers.getContractFactory("Greeter");

  // "Hello" is our constructor arguments, change it to what do you need
  const deployedContract = await contract.deploy("Hello");

  await deployedContract.deployed();
  console.log("Contract deployed to: ", deployedContract.address);
}

main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
})
