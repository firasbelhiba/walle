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
import { signTransaction } from '../../../utils/signTransaction'
import { loadContract } from '../../../utils/loadContract'
import { setupHooks } from './hooks/setupHooks'
import { sendSignedTransaction } from '../../../utils/sendSignedTransaction'

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
        const polygonTokenContract = await loadContract('PolygonToken', web3)
        const polkadotTokenContract = await loadContract('PolkadotToken', web3)
        const avalancheTokenContract = await loadContract(
          'AvalancheToken',
          web3,
        )
        const axieInfinityTokenContract = await loadContract(
          'AxieInfinityToken',
          web3,
        )
        const bitcoinTokenContract = await loadContract('BitcoinToken', web3)
        const cardanoTokenContract = await loadContract('CardanoToken', web3)
        const chainlinkTokenContract = await loadContract(
          'ChainlinkToken',
          web3,
        )
        const daiTokenContract = await loadContract('DaiToken', web3)
        const decentralandTokenContract = await loadContract(
          'DecentralandToken',
          web3,
        )
        const dodgecoinTokenContract = await loadContract(
          'DodgecoinToken',
          web3,
        )
        const ethereumTokenContract = await loadContract('EthereumToken', web3)
        const fileCoinTokenContract = await loadContract('FileCoinToken', web3)
        const ethereumClassicTokenContract = await loadContract(
          'EthereumClassicToken',
          web3,
        )
        const liteCoinTokenContract = await loadContract('LiteCoinToken', web3)
        const moneroTokenContract = await loadContract('MoneroToken', web3)
        const rippleTokenContract = await loadContract('RippleToken', web3)
        const shibaInuTokenContract = await loadContract('ShibaInuToken', web3)
        const solanaTokenContract = await loadContract('SolanaToken', web3)
        const stellarTokenContract = await loadContract('StellarToken', web3)
        const terraTokenContract = await loadContract('TerraToken', web3)
        const tronTokenContract = await loadContract('TronToken', web3)
        const uniswapTokenContract = await loadContract('UniswapToken', web3)
        const wrappedBitcoinTokenContract = await loadContract(
          'WrappedBitcoinToken',
          web3,
        )

        const accounts = await web3.eth.getAccounts()
        let balance = await polygonTokenContract.methods
          .balanceOf(accounts[0])
          .call()
        let decimals = web3.utils.toBN(18)
        let amount = web3.utils.toBN(100)
        let cryptoData = await getCryptoassetsData()
        balance = web3.utils.fromWei(balance.toString(), 'Ether')

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
          // await web3.eth.sendTransaction(
          //   {
          //     from: buyer,
          //     to: '0xD53FB57BDe9A2Fe3c11C9820Da17592518D19892',
          //     value: forHowManyEther * 1000000000000000000,
          //   },
          //   function (err, transactionHash) {
          //     if (!err) {
          //       console.log(transactionHash + ' success')
          //       polygonTokenContract.methods
          //         .transfer(buyer, howManyERC20Token * 1000000000000000000)
          //         .send({ from: '0xD53FB57BDe9A2Fe3c11C9820Da17592518D19892' })
          //     }
          //   },
          // )
          // signTransaction(web3, polygonTokenContract)
          // sendSignedTransaction(web3)
        }

        buyTokens(1, 'x', '0x7212eEef1eC89AE2123E7b98Eb5aAa4bA8127a61')
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

        // web3.eth.accounts.signTransaction(
        //   rawTx,
        //   "78e20ad1aaf2807594d689596be844feab2e954e7d3bbe4da2894031101624a7",
        //   (err, signedTx) => {
        //     if (err) {
        //       return callback(err);
        //     } else {
        //       console.log(signedTx);
        //       return web3.eth.sendSignedTransaction(
        //         signedTx.rawTransaction,
        //         (err, res) => {
        //           if (err) {
        //             console.error(err);
        //           } else {
        //             console.log("success", res);
        //           }
        //         }
        //       );
        //     }
        //   }
        // );
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
    return {
      ...web3Api,
      isWeb3Loaded: web3Api.web3,
      getHooks: () => setupHooks(web3Api.web3),
      connect: web3Api.provider
        ? async () => {
            try {
              await web3Api.provider.request({ method: 'eth_requestAccounts' })
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
