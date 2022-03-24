// Ethereum javascript libraries needed
var Tx = require('ethereumjs-tx').Transaction
// Rather than using a local copy of geth, interact with the ethereum blockchain via infura.io
// The key for infura.io is in .env
import PolygonToken from '../public/contracts/PolygonToken.json'

// Fixed-point notation for number of MFIL which is divisible to 3 decimal places
function financialMfil(numMfil) {
  return Number.parseFloat(numMfil / 1e3).toFixed(3)
}
// Create an async function so I can use the "await" keyword to wait for things to finish
export const sendSignedTransaction = async (web3) => {
  // This code was written and tested using web3 version 1.0.0-beta.29
  console.log(`web3 version: ${web3.version}`)
  // Who holds the token now?
  var myAddress = '0xD53FB57BDe9A2Fe3c11C9820Da17592518D19892'
  // Who are we trying to send this token to?
  var destAddress = '0x7212eEef1eC89AE2123E7b98Eb5aAa4bA8127a61'
  // MineFIL Token (MFIL) is divisible to 3 decimal places, 1 = 0.001 of MFIL
  var transferAmount = 30
  // Determine the nonce
  var count = await web3.eth.getTransactionCount(myAddress)
  console.log(`num transactions so far: ${count}`)
  // MineFILToekn contract ABI Array

  // The address of the contract which created MFIL
  var contractAddress = '0xc3640bEF805117173d6d611a4775F95b2fA63060'
  var contract = new web3.eth.Contract(PolygonToken.abi, contractAddress, {
    from: myAddress,
  })
  // How many tokens do I have before sending?
  var balance = await contract.methods.balanceOf(myAddress).call()
  console.log(
    `Balance before send: ${financialMfil(
      balance,
    )} MFIL\n------------------------`,
  )
  // I chose gas price and gas limit based on what ethereum wallet was recommending for a similar transaction. You may need to change the gas price!
  // Use Gwei for the unit of gas price
  var gasPriceGwei = 3
  var gasLimit = 3000000
  // Chain ID of Ropsten Test Net is 3, replace it to 1 for Main Net
  var chainId = 3
  var rawTransaction = {
    from: myAddress,
    nonce: '0x' + count.toString(16),
    gasPrice: web3.utils.toHex(gasPriceGwei * 1e9),
    gasLimit: web3.utils.toHex(gasLimit),
    to: contractAddress,
    value: '0x0',
    data: contract.methods.transfer(destAddress, '200000000000000000000').encodeABI(),
    chainId: chainId,
  }
  console.log(
    `Raw of Transaction: \n${JSON.stringify(
      rawTransaction,
      null,
      '\t',
    )}\n------------------------`,
  )
  // The private key for myAddress in .env
  var privKey = new Buffer(
    '78e20ad1aaf2807594d689596be844feab2e954e7d3bbe4da2894031101624a7',
    'hex',
  )
  var tx = new Tx(rawTransaction)
  tx.sign(privKey)
  var serializedTx = tx.serialize()
  // Comment out these four lines if you don't really want to send the TX right now
  console.log(
    `Attempting to send signed tx:  ${serializedTx.toString(
      'hex',
    )}\n------------------------`,
  )
  var receipt = await web3.eth.sendSignedTransaction(
    '0x' + serializedTx.toString('hex'),
  )
  // The receipt info of transaction, Uncomment for debug
  console.log(
    `Receipt info: \n${JSON.stringify(
      receipt,
      null,
      '\t',
    )}\n------------------------`,
  )
  // The balance may not be updated yet, but let's check
  balance = await contract.methods.balanceOf(myAddress).call()
  console.log(`Balance after send: ${financialMfil(balance)} MFIL`)
}