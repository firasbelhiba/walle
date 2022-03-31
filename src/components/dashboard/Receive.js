import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWeb3Hook } from '../../../components/providers'
import { useAccount } from '../../../components/web3/hooks/useAccount'
import { sendSignedTransaction } from '../../../utils/sendSignedTransaction'

//Sweet Alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Receive = ({
  selectedAsset,
  setAction,
  thirdwebItems,
  walletAddress,
  setTransferButton,
  setImageUrl,
  imageUrl,
}) => {
  const MySwal = withReactContent(Swal)

  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [activeThirdwebItem, setActiveThirdwebItem] = useState()
  const [balance, setBalance] = useState('Looking for the balance ... ')

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

  useEffect(() => {
    const getBalance = async () => {
      const balance = await activeThirdwebItem.balanceOf(walletAddress)
      setBalance(balance.displayValue)
    }

    activeThirdwebItem && getBalance()
  }, [
    walletAddress,
    activeThirdwebItem,
    polkadotTokenContract,
    polygonTokenContract,
    avalancheTokenContract,
    axieInfinityTokenContract,
    bitcoinTokenContract,
    cardanoTokenContract,
  ])

  const buyAssets = async (forHowManyEther, buyer) => {
    // Ethereum current price
    let ethersPrice = cryptoData?.data.find((item) => item.id === 'ethereum')
      .market_data.current_price.usd

    // The ERC20 token price
    let erc20TokenPrice = cryptoData?.data.find(
      (item) => item.id === selectedAsset.id,
    ).market_data.current_price.usd

    // How many token buyer want to buy
    let howManyERC20Token = (amount * ethersPrice) / erc20TokenPrice
    howManyERC20Token = web3.utils.toWei(`${howManyERC20Token}`, 'ether')
    console.log((amount * ethersPrice) / erc20TokenPrice)
    console.log(selectedAsset)
    //Get the Buyer Balance
    let buyerBalance = await web3.eth.getBalance(buyer)
    buyerBalance = await web3.utils.fromWei(buyerBalance.toString(), 'Ether')

    console.log(forHowManyEther, buyerBalance)

    if (parseFloat(buyerBalance) < parseFloat(forHowManyEther)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:
          'You have Insufficient funds. Would you please reduce the amount of Ether or just get some more Ether in your wallet',
        footer: '<a href="">Why do I have this issue?</a>',
      })
    } else {
      await web3.eth.sendTransaction(
        {
          from: buyer,
          to: '0xDcBCdbB8f6fd33A105F5c01BE0B05BA09753e55c',
          value: forHowManyEther * 1000000000000000000,
        },
        function (err, transactionHash) {
          if (!err) {
            let tokenContract
            let contractAddress
            switch (selectedAsset.name) {
              case 'Polygon':
                tokenContract = polygonTokenContract
                contractAddress = '0xedF0e41a52EA898DEC8aB10f1A7da6AEB7f9eDFD'
                break
              case 'Polkadot':
                tokenContract = polkadotTokenContract
                contractAddress = '0xdb98Ad4E8FfC27C2bC651026946b706D2F272446'
                break
              case 'Avalanche':
                tokenContract = avalancheTokenContract
                contractAddress = '0xA351F4D6642bf3178a1495b54502Fe40D9186817'
                break
              case 'Bitcoin':
                tokenContract = bitcoinTokenContract
                contractAddress = '0xDB5d3aEe83DE15E44A4311898a71832534C3C583'
                break
              case 'Cardano':
                tokenContract = cardanoTokenContract
                contractAddress = '0x8836f8230f89b457191847e2995eE6Be056F35d0'
                break
              case 'Axie Infinity':
                tokenContract = axieInfinityTokenContract
                contractAddress = '0xb11F7eFdb8dD061981592854D945429d6E00f542'
                break
              case 'Chainlink':
                tokenContract = chainlinkTokenContract
                contractAddress = '0x6801643BD4ea3747986A41717fa57Fe12DEF1A3e'
                break
              case 'Dai':
                tokenContract = daiTokenContract
                contractAddress = '0x60b919B9d6D18B9862A97C659B8d933007f018bF'
                break
              case 'Decentraland':
                tokenContract = decentralandTokenContract
                contractAddress = '0x2CF8d683F54F3d9aB438C45DECb48C6Aa9095F3B'
                break
              case 'Dodgecoin':
                tokenContract = dodgecoinTokenContract
                contractAddress = '0x4c94CaBd13659B27bD6Bc1f62f1994d82568eff5'
                break
              case 'Ethereum Classic':
                tokenContract = ethereumClassicTokenContract
                contractAddress = '0xFC6bC6B4692DBa30C45E72BC152C563062e8600A'
                break
              case 'Filecoin':
                tokenContract = fileCoinTokenContract
                contractAddress = '0xFC6bC6B4692DBa30C45E72BC152C563062e8600A'
                break
              case 'Litecoin':
                tokenContract = liteCoinTokenContract
                contractAddress = '0x27B7803b31f43BCd3026B762D2BD0736ea88CE25'
                break
              case 'Monero':
                tokenContract = moneroTokenContract
                contractAddress = '0x794D5cDE251520b9C7971d813b16989cCCee981f'
                break
              case 'Ripple':
                tokenContract = rippleTokenContract
                contractAddress = '0xD8c4692B1cFfF2f0C74b2825079B4E739C708758'
                break
              case 'Shiba Inu':
                tokenContract = shibaInuTokenContract
                contractAddress = '0x212C23e4148Fb46eEc52B7FCE19Fa69a264c4f16'
                break
              case 'Solana':
                tokenContract = solanaTokenContract
                contractAddress = '0xEf5a52fc7723f475BcAffFaEeF48B95375e41532'
                break
              case 'Terra Luna':
                tokenContract = terraTokenContract
                contractAddress = '0xe1717B27Fa617AE3fD793Ac8936b6f12824FDc51'
                break
              case 'Stellar':
                tokenContract = stellarTokenContract
                contractAddress = '0xd4101813EfEfCe904F002A0dCd1238C2ebBc8631'
                break
              case 'Tron':
                tokenContract = tronTokenContract
                contractAddress = '0x603e37B7C439F5D33F768884799a88a8E441282F'
                break
              case 'Uniswap':
                tokenContract = uniswapTokenContract
                contractAddress = '0xb11094CB2Ed225Fa02Dc1c5Bd0AffB38e449fAb2'
                break
              case 'Wrapped Bitcoin':
                tokenContract = wrappedBitcoinTokenContract
                contractAddress = '0x0d62435a712DDf2CB327a67aB123414056AB2Be0'
                break
              case 'Ethereum':
                tokenContract = ethereumTokenContract
                contractAddress = '0x3635E02E0440dbb86702cF5B11b0C3D13Fab39a8'
                break
              default:
                tokenContract = ethereumTokenContract
                contractAddress = '0x3635E02E0440dbb86702cF5B11b0C3D13Fab39a8'
                break
            }
            MySwal.fire({
              title: 'I m on my waaay ...',
              text:
                'your transaction is on the way , would you please wait until it will be added to the blockchain , unfortunately this might take some minutes because Ropsten is a test network',
              width: 600,
              padding: '3em',
              color: '#C115E0',
              background:
                '#fff url("https://media3.giphy.com/media/Qz5ITuBg5uvLy0yiRY/giphy.gif")',
              backdrop: `
                rgba(0,0,123,0.4)
                url("https://media4.giphy.com/media/k6r6lTYIL9j9ZeRT51/200.gif")
                left top
                no-repeat
              `,
            })
            sendSignedTransaction(
              web3,
              howManyERC20Token,
              buyer,
              tokenContract,
              contractAddress,
              process.env.NEXT_PUBLIC_METAMASK_PRIVATE_KEY,
            )
            setTransferButton(false)
          }
        },
      )
    }
  }

  return (
    <Wrapper>
      <Amount>
        <FlexInputContainer>
          <FlexInput
            placeholder="0"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span>ETH</span>
        </FlexInputContainer>
        <Warning>Amount is a required field</Warning>
      </Amount>
      <TransferForm>
        <Divider />
        <Row>
          <FieldName>Pay with</FieldName>
          <CoinSelectList onClick={() => setAction('select2')}>
            <Icon>
              <img src={imageUrl} alt />
            </Icon>
            <CoinName>{selectedAsset.name}</CoinName>
          </CoinSelectList>
        </Row>
      </TransferForm>
      <Row>
        <Continue onClick={() => buyAssets(amount, account.data)}>Buy</Continue>
        <Cancel onClick={() => setTransferButton(false)}>Cancel</Cancel>
      </Row>
    </Wrapper>
  )
}

export default Receive

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`

const Amount = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const FlexInputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;

  & > span {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: #3773f5;
  }
`

const FlexInput = styled.input`
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  text-align: right;
  max-width: 45%;
  margin-right: 1rem;
  font-size: 4.5rem;
  color: #3773f5;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

const Warning = styled.div`
  padding: 1rem 0 2rem 0;
  text-align: center;
  color: #8a919e;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8a919e;
  padding: 1rem 0;
  font-size: 1.2rem;
`

const FieldName = styled.div`
  flex: 0.5;
  padding-left: 2rem;
`

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;

  & > img {
    height: 120%;
    width: 120%;
    object-fit: cover;
  }
`

const Recipient = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`

const CoinSelectList = styled.div`
  display: flex;
  flex: 1.3;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`

const CoinName = styled.div`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`

const Continue = styled.button`
  color: white;
  width: 100%;
  background-color: #3773f5;
  padding: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    background-color: #4a80f6;
  }
`

const Cancel = styled.button`
  color: white;
  width: 100%;
  background-color: #ca0000;
  padding: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    background-color: #8e0000;
  }
`

const TransferForm = styled.div`
  border: 1px solid #282b2f;
  border-radius: 0.4rem;
`

const BalanceTitle = styled.div``

const Balance = styled.div``
