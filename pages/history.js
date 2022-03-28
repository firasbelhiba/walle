import React, { useEffect } from 'react'
import { useWeb3Hook } from '../components/providers/index'

const History = () => {
  const {
    web3,
    cryptoData,
    polygonTokenContract,
    polkadotTokenContract,
    avalancheTokenContract,
    axieInfinityTokenContract,
    bitcoinTokenContract,
    cardanoTokenContract,
    chainlinkTokenContract,
    daiTokenContract,
    decentralandTokenContract,
    dodgecoinTokenContract,
    ethereumTokenContract,
    fileCoinTokenContract,
    ethereumClassicTokenContract,
    liteCoinTokenContract,
    moneroTokenContract,
    rippleTokenContract,
    shibaInuTokenContract,
    solanaTokenContract,
    stellarTokenContract,
    terraTokenContract,
    tronTokenContract,
    uniswapTokenContract,
    wrappedBitcoinTokenContract,
  } = useWeb3Hook()

  useEffect(() => {
    const x = async () => {
      const accounts = await web3.eth.getAccounts()
      const transactions = await ethereumTokenContract.getPastEvents(
        'Transfer',
        { fromBlock: 0, toBlock: "latest" },
        { from: accounts[0] },
      )
      console.log('dgdg', transactions)
    }
    web3 && x()
  }, [])
  return <div>History</div>
}

export default History
