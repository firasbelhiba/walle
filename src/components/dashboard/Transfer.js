import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaWallet } from 'react-icons/fa'
import ImageUrlBuilder from '@sanity/image-url'
import { client } from '../../../lib/sanity'
import { useWeb3Hook } from '../../../components/providers'

const Transfer = ({
  selectedAsset,
  setAction,
  thirdwebItems,
  walletAddress,
  setTransferButton,
  setImageUrl,
  imageUrl,
}) => {
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [activeThirdwebItem, setActiveThirdwebItem] = useState()
  const [balance, setBalance] = useState('Looking for the balance ... ')
  const {
    web3,
    cryptoData,
    polygonTokenContract,
    polkadotTokenContract,
    avalancheTokenContract,
    axieInfinityTokenContract,
    bitcoinTokenContract,
    cardanoTokenContract,
  } = useWeb3Hook()

  useEffect(() => {
    const getBalance = async () => {
      const balance = await activeThirdwebItem.balanceOf(walletAddress)
      setBalance(balance.displayValue)
      console.log(balance)
    }

    activeThirdwebItem && getBalance()
  }, [walletAddress, activeThirdwebItem])

  const sendAssets = async (amount, recipient) => {
    if (selectedAsset === 'Bitcoin') {
      bitcoinTokenContract.methods
        .transfer(recipient, (amount * 1000000000000000000).toString())
        .send({ from: '0xD53FB57BDe9A2Fe3c11C9820Da17592518D19892' })
    } else if (selectedAsset === 'Polkadot') {
      polkadotTokenContract.methods
        .transfer(recipient, (amount * 1000000000000000000).toString())
        .send({ from: '0xD53FB57BDe9A2Fe3c11C9820Da17592518D19892' })
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
        <Row>
          <FieldName>To</FieldName>
          <Icon>
            <FaWallet />
          </Icon>
          <Recipient
            placeholder="address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </Row>
        <Divider />
        <Row>
          <FieldName>Pay with</FieldName>
          <CoinSelectList onClick={() => setAction('select')}>
            <Icon>
              <img src={imageUrl} alt />
            </Icon>
            <CoinName>{selectedAsset}</CoinName>
          </CoinSelectList>
        </Row>
      </TransferForm>
      <Row>
        <Continue onClick={() => sendAssets(amount, recipient)}>
          Continue
        </Continue>
        <Cancel onClick={() => setTransferButton(false)}>Cancel</Cancel>
      </Row>
      <Row>
        <BalanceTitle>{selectedAsset.symbol} Balance</BalanceTitle>
        <Balance>
          {balance} {selectedAsset.symbol}
        </Balance>
      </Row>
    </Wrapper>
  )
}

export default Transfer

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
