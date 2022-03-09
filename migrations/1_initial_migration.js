const Migrations = artifacts.require("Migrations");
const DaiToken = artifacts.require("DaiToken");

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  // await deployer.deploy(DaiToken);
  // const token = await DaiToken.deployed();

  // // Mint 1000000000000000000000
  // await token.mint(
  //   "0x7212eEef1eC89AE2123E7b98Eb5aAa4bA8127a61",
  //   "1000000000000000000000"
  // );
  await deployer.deploy(DaiToken, "1000000000000000000000");
  await DaiToken.deployed();
};
