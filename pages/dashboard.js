import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useAccount } from '../components/web3/hooks/useAccount'
import { useBalance } from '../components/web3/hooks/useBalance'

import { useWeb3Hook } from '../components/providers'
import SalesChart from '../src/components/dashboard/SalesChart'

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    '4ee854f3b39f337c0345bb0258ec4755d37a71f7dd7048654af050a7e57c2491',
    ethers.getDefaultProvider(
      'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    ),
  ),
)

const Dashboard = () => {
  const { account } = useAccount()
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
  const [walletBalance, setWalletBalance] = useState(0)

  //crypto assets balances
  const [polygonBalance, setPolygonBalance] = useState(0)
  const [polkadotBalance, setPolkadotBalance] = useState(0)
  const [avalancheBalance, setAvalancheBalance] = useState(0)
  const [axieInfinityBalance, setAxieInfinityBalance] = useState(0)
  const [bitcoinBalance, setBitcoinBalance] = useState(0)
  const [cardanoBalance, setCardanoBalance] = useState(0)
  const [chainlinkBalance, setChainlinkBalance] = useState(0)
  const [daiBalance, setDaiBalance] = useState(0)
  const [decentralandBalance, setDecentralandBalance] = useState(0)
  const [dodgecoinBalance, setDodgecoinBalance] = useState(0)
  const [ethereumBalance, setEthereumBalance] = useState(0)
  const [fileCoinBalance, setFileCoinBalance] = useState(0)
  const [ethereumClassicBalance, setEthereumClassicBalance] = useState(0)
  const [liteCoinBalance, setLiteCoinBalance] = useState(0)
  const [moneroBalance, setMoneroBalance] = useState(0)
  const [rippleBalance, setRippleBalance] = useState(0)
  const [shibaInuBalance, setShibaInuBalance] = useState(0)
  const [solanaBalance, setSolanaBalance] = useState(0)
  const [stellarBalance, setStellarBalance] = useState(0)
  const [terraBalance, setTerraBalance] = useState(0)
  const [tronBalance, setTronBalance] = useState(0)
  const [uniswapBalance, setUniswapBalance] = useState(0)
  const [wrappedBitcoinBalance, setWrappedBitcoinBalance] = useState(0)

  const { sanityItems, thirdwebItems } = useBalance()

  // crypto data
  const [data, setData] = useState()

  // Conversion to USD
  const tokenToUsd = {}

  sanityItems.forEach((token) => {
    tokenToUsd[token.contractAddress] = Number(token.usdPrice)
  })

  useEffect(() => {
    const getTotalBalance = async () => {
      await setData(cryptoData)
      const accounts = await web3.eth.getAccounts()

      // fetch Polygon balance
      let balanceofPolygon = await polygonTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofPolygon = web3.utils.fromWei(
        balanceofPolygon.toString(),
        'Ether',
      )

      // fetch Polkadot balance
      let balanceofPolkadot = await polkadotTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofPolkadot = web3.utils.fromWei(
        balanceofPolkadot.toString(),
        'Ether',
      )

      // fetch Avalanche balance
      let balanceofAvalanche = await avalancheTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofAvalanche = web3.utils.fromWei(
        balanceofAvalanche.toString(),
        'Ether',
      )

      // fetch Axie Infinity balance
      let balanceofAxieInfinity = await axieInfinityTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofAxieInfinity = web3.utils.fromWei(
        balanceofAxieInfinity.toString(),
        'Ether',
      )

      // fetch Bitcoin balance
      let balanceofBitcoin = await bitcoinTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofBitcoin = web3.utils.fromWei(
        balanceofBitcoin.toString(),
        'Ether',
      )

      // fetch Cardano balance
      let balanceofCardano = await cardanoTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofCardano = web3.utils.fromWei(
        balanceofCardano.toString(),
        'Ether',
      )

      // fetch Chainlink balance
      let balanceofChainlink = await chainlinkTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofChainlink = web3.utils.fromWei(
        balanceofChainlink.toString(),
        'Ether',
      )

      // fetch Dai balance
      let balanceofDai = await daiTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofDai = web3.utils.fromWei(balanceofDai.toString(), 'Ether')

      // fetch Decentraland balance
      let balanceofDecentraland = await decentralandTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofDecentraland = web3.utils.fromWei(
        balanceofDecentraland.toString(),
        'Ether',
      )

      // fetch Dodgecoin balance
      let balanceofDodgecoin = await dodgecoinTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofDodgecoin = web3.utils.fromWei(
        balanceofDodgecoin.toString(),
        'Ether',
      )

      // fetch Ethereum balance
      let balanceofEthereum = await ethereumTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofEthereum = web3.utils.fromWei(
        balanceofEthereum.toString(),
        'Ether',
      )

      // fetch File coin balance
      let balanceofFileCoin = await fileCoinTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofFileCoin = web3.utils.fromWei(
        balanceofFileCoin.toString(),
        'Ether',
      )

      // fetch Ethereum classic balance
      let balanceofEthereumClassic = await ethereumClassicTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofEthereumClassic = web3.utils.fromWei(
        balanceofEthereumClassic.toString(),
        'Ether',
      )

      // fetch Lite coin balance
      let balanceofLiteCoin = await liteCoinTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofLiteCoin = web3.utils.fromWei(
        balanceofLiteCoin.toString(),
        'Ether',
      )

      // fetch Monero balance
      let balanceofMonero = await moneroTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofMonero = web3.utils.fromWei(balanceofMonero.toString(), 'Ether')

      // fetch Ripple balance
      let balanceofRipple = await rippleTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofRipple = web3.utils.fromWei(balanceofRipple.toString(), 'Ether')

      // fetch Shiba Inu balance
      let balanceofShibaInu = await shibaInuTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofShibaInu = web3.utils.fromWei(
        balanceofShibaInu.toString(),
        'Ether',
      )

      // fetch Solana balance
      let balanceofSolana = await solanaTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofSolana = web3.utils.fromWei(balanceofSolana.toString(), 'Ether')

      // fetch Stellar balance
      let balanceofStellar = await stellarTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofStellar = web3.utils.fromWei(
        balanceofStellar.toString(),
        'Ether',
      )

      // fetch Terra Luna balance
      let balanceofTerra = await terraTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofTerra = web3.utils.fromWei(balanceofTerra.toString(), 'Ether')

      // fetch Tron balance
      let balanceofTron = await tronTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofTron = web3.utils.fromWei(balanceofTron.toString(), 'Ether')

      // fetch Uniswap balance
      let balanceofUniswap = await uniswapTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofUniswap = web3.utils.fromWei(
        balanceofUniswap.toString(),
        'Ether',
      )

      // fetch Wrapped Bitcoin balance
      let balanceofWrappedBitcoin = await wrappedBitcoinTokenContract.methods
        .balanceOf(accounts[0])
        .call()
      balanceofWrappedBitcoin = web3.utils.fromWei(
        balanceofWrappedBitcoin.toString(),
        'Ether',
      )

      // Setting assets balances
      setPolygonBalance(balanceofPolygon)
      setPolkadotBalance(balanceofPolkadot)
      setAvalancheBalance(balanceofAvalanche)
      setAxieInfinityBalance(balanceofAxieInfinity)
      setBitcoinBalance(balanceofBitcoin)
      setCardanoBalance(balanceofCardano)
      setChainlinkBalance(balanceofChainlink)
      setDaiBalance(balanceofDai)
      setDecentralandBalance(balanceofDecentraland)
      setDodgecoinBalance(balanceofDodgecoin)
      setEthereumBalance(balanceofEthereum)
      setFileCoinBalance(balanceofFileCoin)
      setEthereumClassicBalance(balanceofEthereumClassic)
      setLiteCoinBalance(balanceofLiteCoin)
      setMoneroBalance(balanceofMonero)
      setRippleBalance(balanceofRipple)
      setShibaInuBalance(balanceofShibaInu)
      setSolanaBalance(balanceofSolana)
      setStellarBalance(balanceofStellar)
      setTerraBalance(balanceofTerra)
      setTronBalance(balanceofTron)
      setUniswapBalance(balanceofUniswap)
      setWrappedBitcoinBalance(balanceofWrappedBitcoin)
      await console.log('ddd', data)
    }

    // Only if you are connected
    account && web3 && getTotalBalance()
  }, [account, thirdwebItems, sanityItems, data])

  return (
    <div>
      <SalesChart
        walletBalance={walletBalance.toLocaleString()}
        polygonBalance={polygonBalance}
        polkadotBalance={polkadotBalance}
        avalancheBalance={avalancheBalance}
        axieInfinityBalance={axieInfinityBalance}
        bitcoinBalance={bitcoinBalance}
        cardanoBalance={cardanoBalance}
        chainlinkBalance={chainlinkBalance}
        daiBalance={daiBalance}
        decentralandBalance={decentralandBalance}
        dodgecoinBalance={dodgecoinBalance}
        ethereumBalance={ethereumBalance}
        fileCoinBalance={fileCoinBalance}
        ethereumClassicBalance={ethereumClassicBalance}
        liteCoinBalance={liteCoinBalance}
        moneroBalance={moneroBalance}
        rippleBalance={rippleBalance}
        shibaInuBalance={shibaInuBalance}
        solanaBalance={solanaBalance}
        stellarBalance={stellarBalance}
        terraBalance={terraBalance}
        tronBalance={tronBalance}
        uniswapBalance={uniswapBalance}
        wrappedBitcoinBalance={wrappedBitcoinBalance}
        cryptoAssetsData={data}
      />
    </div>
  )
}

export default Dashboard
