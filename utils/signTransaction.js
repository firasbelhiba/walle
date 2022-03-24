var Tx = require('ethereumjs-tx').Transaction
var privateKey = Buffer.from(
  '78e20ad1aaf2807594d689596be844feab2e954e7d3bbe4da2894031101624a7',
  'hex',
)

export const signTransaction = async (web3, contract) => {
  const networkId = await web3.eth.net.getId()
  
  const tx = contract.methods.transfer(
    '0x7212eEef1eC89AE2123E7b98Eb5aAa4bA8127a61',
    '200000000000000000000',
  )

  const gas = await tx.estimateGas({
    from: '0xD53FB57BDe9A2Fe3c11C9820Da17592518D19892',
  })
  //console.log(gas)
  const gasPrice = await web3.eth.getGasPrice()
  const data = tx.encodeABI()
  const nonce = await web3.eth.getTransactionCount(
    '0xD53FB57BDe9A2Fe3c11C9820Da17592518D19892',
  )
  const signedTx = await web3.eth.accounts.signTransaction(
    {
      from : "0xD53FB57BDe9A2Fe3c11C9820Da17592518D19892",
      to: '0x7212eEef1eC89AE2123E7b98Eb5aAa4bA8127a61',
      data,
      gas,
      gasPrice,
      nonce,
      chainId: networkId,
    },
    '78e20ad1aaf2807594d689596be844feab2e954e7d3bbe4da2894031101624a7',
  )
  console.log(signedTx.rawTransaction)
  await web3.eth.sendSignedTransaction(signedTx.rawTransaction, () =>
    console.log('yay'),
  )
}