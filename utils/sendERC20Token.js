// Ethereum javascript libraries needed
var Tx = require('ethereumjs-tx')
// Rather than using a local copy of geth, interact with the ethereum blockchain via infura.io
// The key for infura.io is in .env

// Fixed-point notation for number of MFIL which is divisible to 3 decimal places
function financialMfil(numMfil) {
  return Number.parseFloat(numMfil / 1e3).toFixed(3)
}
// Create an async function so I can use the "await" keyword to wait for things to finish
export const sendERC20Token = async (
  web3,
  amount,
  dest,
  contract,
  contractAddress,
  owner,
) => {
  contract.methods.transfer(dest, amount).send({ from: owner })
}
