const {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} = require('react')

import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from 'web3'
import { getCryptoassetsData } from '../../../utils/getCryptoassetsData'
import { loadContract } from '../../../utils/loadContract'
import { setupHooks } from './hooks/setupHooks'

// Import ABIs
import PolygonToken from '../../../public/contracts/PolygonToken.json'
import PolkadotToken from '../../../public/contracts/PolkadotToken.json'
import AvalancheToken from '../../../public/contracts/AvalancheToken.json'
import AxieInfinityToken from '../../../public/contracts/AxieInfinityToken.json'
import BitcoinToken from '../../../public/contracts/BitcoinToken.json'
import CardanoToken from '../../../public/contracts/CardanoToken.json'
import ChainlinkToken from '../../../public/contracts/ChainlinkToken.json'
import DaiToken from '../../../public/contracts/DaiToken.json'
import DecentralandToken from '../../../public/contracts/DecentralandToken.json'
import DodgecoinToken from '../../../public/contracts/DodgecoinToken.json'
import EthereumToken from '../../../public/contracts/EthereumToken.json'
import EthereumClassicToken from '../../../public/contracts/EthereumClassicToken.json'
import FileCoinToken from '../../../public/contracts/FileCoinToken.json'
import LiteCoinToken from '../../../public/contracts/LiteCoinToken.json'
import MoneroToken from '../../../public/contracts/MoneroToken.json'
import ShibaInuToken from '../../../public/contracts/ShibaInuToken.json'
import SolanaToken from '../../../public/contracts/SolanaToken.json'
import StellarToken from '../../../public/contracts/StellarToken.json'
import RippleToken from '../../../public/contracts/RippleToken.json'
import TerraToken from '../../../public/contracts/TerraToken.json'
import TronToken from '../../../public/contracts/TronToken.json'
import UniswapToken from '../../../public/contracts/UniswapToken.json'
import WrappedBitcoinToken from '../../../public/contracts/WrappedBitcoinToken.json'

const Web3Context = createContext(null)

export default function Web3Provider({ children }) {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    cryptoData: null,
    polygonTokenContract: null,
    polkadotTokenContract: null,
    avalancheTokenContract: null,
    axieInfinityTokenContract: null,
    bitcoinTokenContract: null,
    cardanoTokenContract: null,
    chainlinkTokenContract: null,
    daiTokenContract: null,
    decentralandTokenContract: null,
    dodgecoinTokenContract: null,
    ethereumTokenContract: null,
    fileCoinTokenContract: null,
    ethereumClassicTokenContract: null,
    liteCoinTokenContract: null,
    moneroTokenContract: null,
    rippleTokenContract: null,
    shibaInuTokenContract: null,
    solanaTokenContract: null,
    stellarTokenContract: null,
    terraTokenContract: null,
    tronTokenContract: null,
    uniswapTokenContract: null,
    wrappedBitcoinTokenContract: null,
    isLoaded: true,
  })
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider()
      if (provider) {
        const web3 = new Web3(provider)

        // Load Token contracts
        var polygonTokenContract = new web3.eth.Contract(
          PolygonToken.abi,
          '0xedF0e41a52EA898DEC8aB10f1A7da6AEB7f9eDFD',
        )
        var polkadotTokenContract = new web3.eth.Contract(
          PolkadotToken.abi,
          '0xdb98Ad4E8FfC27C2bC651026946b706D2F272446',
        )
        var avalancheTokenContract = new web3.eth.Contract(
          AvalancheToken.abi,
          '0xA351F4D6642bf3178a1495b54502Fe40D9186817',
        )
        var axieInfinityTokenContract = new web3.eth.Contract(
          AxieInfinityToken.abi,
          '0xb11F7eFdb8dD061981592854D945429d6E00f542',
        )
        var bitcoinTokenContract = new web3.eth.Contract(
          BitcoinToken.abi,
          '0xDB5d3aEe83DE15E44A4311898a71832534C3C583',
        )
        var cardanoTokenContract = new web3.eth.Contract(
          CardanoToken.abi,
          '0x8836f8230f89b457191847e2995eE6Be056F35d0',
        )
        var chainlinkTokenContract = new web3.eth.Contract(
          ChainlinkToken.abi,
          '0x6801643BD4ea3747986A41717fa57Fe12DEF1A3e',
        )
        var daiTokenContract = new web3.eth.Contract(
          DaiToken.abi,
          '0x60b919B9d6D18B9862A97C659B8d933007f018bF',
        )
        var decentralandTokenContract = new web3.eth.Contract(
          DecentralandToken.abi,
          '0x2CF8d683F54F3d9aB438C45DECb48C6Aa9095F3B',
        )
        var dodgecoinTokenContract = new web3.eth.Contract(
          DodgecoinToken.abi,
          '0x4c94CaBd13659B27bD6Bc1f62f1994d82568eff5',
        )
        var ethereumTokenContract = new web3.eth.Contract(
          EthereumToken.abi,
          '0x3635E02E0440dbb86702cF5B11b0C3D13Fab39a8',
        )
        var ethereumClassicTokenContract = new web3.eth.Contract(
          EthereumClassicToken.abi,
          '0x4192d58A64Ff7A3320cC6f9Ca805Dd2Dc78783c1',
        )
        var fileCoinTokenContract = new web3.eth.Contract(
          FileCoinToken.abi,
          '0xFC6bC6B4692DBa30C45E72BC152C563062e8600A',
        )
        var liteCoinTokenContract = new web3.eth.Contract(
          LiteCoinToken.abi,
          '0x27B7803b31f43BCd3026B762D2BD0736ea88CE25',
        )
        var moneroTokenContract = new web3.eth.Contract(
          MoneroToken.abi,
          '0x794D5cDE251520b9C7971d813b16989cCCee981f',
        )
        var rippleTokenContract = new web3.eth.Contract(
          RippleToken.abi,
          '0xD8c4692B1cFfF2f0C74b2825079B4E739C708758',
        )
        var shibaInuTokenContract = new web3.eth.Contract(
          ShibaInuToken.abi,
          '0x212C23e4148Fb46eEc52B7FCE19Fa69a264c4f16',
        )
        var solanaTokenContract = new web3.eth.Contract(
          SolanaToken.abi,
          '0xEf5a52fc7723f475BcAffFaEeF48B95375e41532',
        )
        var stellarTokenContract = new web3.eth.Contract(
          StellarToken.abi,
          '0xd4101813EfEfCe904F002A0dCd1238C2ebBc8631',
        )
        var terraTokenContract = new web3.eth.Contract(
          TerraToken.abi,
          '0xe1717B27Fa617AE3fD793Ac8936b6f12824FDc51',
        )
        var tronTokenContract = new web3.eth.Contract(
          TronToken.abi,
          '0x603e37B7C439F5D33F768884799a88a8E441282F',
        )
        var uniswapTokenContract = new web3.eth.Contract(
          UniswapToken.abi,
          '0xb11094CB2Ed225Fa02Dc1c5Bd0AffB38e449fAb2',
        )
        var wrappedBitcoinTokenContract = new web3.eth.Contract(
          WrappedBitcoinToken.abi,
          '0x0d62435a712DDf2CB327a67aB123414056AB2Be0',
        )
        console.log('dfdfS', await polygonTokenContract)
        let cryptoData = await getCryptoassetsData()
        console.log(cryptoData)

        const accounts = await web3.eth.getAccounts()
        // let balance = await polygonTokenContract.methods
        //   .balanceOf(accounts[0])
        //   .call()
        let decimals = web3.utils.toBN(18)
        let amount = web3.utils.toBN(100)
        //   balance = web3.utils.fromWei(balance.toString(), 'Ether')

        const buyTokens = async (forHowManyEther, erc20Token, buyer) => {
          const polygonTokenContract = await loadContract('PolygonToken', web3)
          let ethersPrice = cryptoData?.data.find(
            (item) => item.id === 'ethereum',
          ).market_data.current_price.usd
          let erc20TokenPrice = cryptoData?.data.find(
            (item) => item.id === 'matic-network',
          ).market_data.current_price.usd
          let howManyERC20Token = ethersPrice / erc20TokenPrice
          console.log(howManyERC20Token)
          await web3.eth.sendTransaction(
            {
              from: buyer,
              to: '0xDcBCdbB8f6fd33A105F5c01BE0B05BA09753e55c',
              value: forHowManyEther * 1000000000000000000,
            },
            function (err, transactionHash) {
              if (!err) {
                console.log(transactionHash + ' success')
                //sendSignedTransaction(web3)
              }
            },
          )
        }

        // buyTokens(1, 'x', '0x7212eEef1eC89AE2123E7b98Eb5aAa4bA8127a61')
        //console.log(amount * 1000000000000000000)
        // bitcoinTokenContract.methods
        //   .transfer(
        //     "0x7212eEef1eC89AE2123E7b98Eb5aAa4bA8127a61",
        //     "200000000000000000000"
        //   )
        //   .send({ from: "0xD53FB57BDe9A2Fe3c11C9820Da17592518D19892" });
        // let data = contract.methods
        //   .transfer(
        //     "0x7212eEef1eC89AE2123E7b98Eb5aAa4bA8127a61",
        //     "200000000000000000000"
        //   )
        //   .encodeABI();
        // let rawTx = {
        //   gasPrice: "0x3b9aca00",
        //   gasLimit: web3.utils.toHex("100000"),
        //   to: "0x7212eEef1eC89AE2123E7b98Eb5aAa4bA8127a61",
        //   data: data,
        // };

        setWeb3Api({
          provider,
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
          isLoaded: false,
        })
      } else {
        setWeb3Api((api) => ({ ...api, isLoaded: false }))
        console.error('Please install Metamask . ')
      }
    }

    loadProvider()
  }, [])

  const _web3Api = useMemo(() => {
    const { web3, provider, isLoaded } = web3Api
    return {
      ...web3Api,
      isWeb3Loaded: web3,
      requireInstallMetamask: !isLoaded && !web3,
      getHooks: () => setupHooks(web3, provider),
      connect: provider
        ? async () => {
            try {
              await provider.request({ method: 'eth_requestAccounts' })
            } catch (error) {
              console.log('Connection failed here is why  : ', error)
              location.reload()
            }
          }
        : () => {
            console.error(
              'Cannot Connect to metamask , try to reload your browser please',
            )
          },
    }
  }, [web3Api])

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  )
}

export function useWeb3Hook() {
  return useContext(Web3Context)
}

export function useHooks(callback) {
  const { getHooks } = useWeb3Hook()
  return callback(getHooks())
}
