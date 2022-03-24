import styled from 'styled-components'
import { useWeb3Hook } from '../../../components/providers'

const AssetItem = ({
  walletAddress,
  setSelectedAsset,
  setAction,
  selectedAsset,
  setImageUrl,
}) => {
  const { web3, cryptoData } = useWeb3Hook()

  return (
    <>
      {/* Polkadot */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'polkadot').image.small,
          )
          setSelectedAsset('Polkadot')
          setAction('send')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'polkadot').image.small
            }
          />
          <Title>Polkadot</Title>
        </Main>
      </Wrapper>

      {/* Bitcoin */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'bitcoin').image.small,
          )
          setSelectedAsset('Bitcoin')
          setAction('send')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'bitcoin').image.small
            }
          />
          <Title>Bitcoin</Title>
        </Main>
      </Wrapper>

      {/* Polygon */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'matic-network').image
              .small,
          )
          setSelectedAsset('Polygon')
          setAction('send')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'matic-network').image
                .small
            }
          />
          <Title>Polygon</Title>
        </Main>
      </Wrapper>

      {/* cardano */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'cardano').image.small,
          )
          setSelectedAsset('Cardano')
          setAction('send')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'cardano').image.small
            }
          />
          <Title>Cardano</Title>
        </Main>
      </Wrapper>

      {/* Axie Infinity */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'axie-infinity').image
              .small,
          )
          setSelectedAsset('Axie Infinity')
          setAction('send')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'axie-infinity').image
                .small
            }
          />
          <Title>Axie Infinity</Title>
        </Main>
      </Wrapper>

      {/* Avalanche */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'avalanche-2').image
              .small,
          )
          setSelectedAsset('Avalanche')
          setAction('send')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'avalanche-2').image
                .small
            }
          />
          <Title>Avalanche</Title>
        </Main>
      </Wrapper>
    </>
  )
}

export default AssetItem

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.3rem;
  cursor: pointer;
`

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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

const NameDetails = styled.div``

const Name = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`

const Balance = styled.div``

const IsSelected = styled.div`
  margin-left: 0.5rem;
  color: #3773f5;
`
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
