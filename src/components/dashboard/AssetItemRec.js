import styled from 'styled-components'
import { useWeb3Hook } from '../../../components/providers'

const AssetItemRec = ({
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
          setSelectedAsset({ name: 'Polkadot', symbol: 'DOT', id: 'polkadot' })
          setAction('receive')
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
          setSelectedAsset({ name: 'Bitcoin', symbol: 'BTC', id: 'bitcoin' })
          setAction('receive')
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
          setSelectedAsset({
            name: 'Polygon',
            symbol: 'MATIC',
            id: 'matic-network',
          })
          setAction('receive')
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

      {/* Stellar */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'stellar').image.small,
          )
          setSelectedAsset({ name: 'Stellar', symbol: 'XLM', id: 'stellar' })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'stellar').image.small
            }
          />
          <Title>Stellar</Title>
        </Main>
      </Wrapper>

      {/* cardano */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'cardano').image.small,
          )
          setSelectedAsset({ name: 'Cardano', symbol: 'ADA', id: 'cardano' })
          setAction('receive')
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
          setSelectedAsset({
            name: 'Axie Infinity',
            symbol: 'AXS',
            id: 'axie-infinity',
          })
          setAction('receive')
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
          setSelectedAsset({
            name: 'Avalanche',
            symbol: 'AVAX',
            id: 'avalanche-2',
          })
          setAction('receive')
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

      {/* Ethereum */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'ethereum').image.small,
          )
          setSelectedAsset({ name: 'Ethereum', symbol: 'ETH', id: 'ethereum' })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'ethereum').image.small
            }
          />
          <Title>Ethereum</Title>
        </Main>
      </Wrapper>

      {/* Chainlink */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'chainlink').image.small,
          )
          setSelectedAsset({
            name: 'Chainlink',
            symbol: 'LINK',
            id: 'chainlink',
          })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'chainlink').image
                .small
            }
          />
          <Title>Chainlink</Title>
        </Main>
      </Wrapper>

      {/* Dai */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'dai').image.small,
          )
          setSelectedAsset({ name: 'Dai', symbol: 'DAI', id: 'dai' })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={cryptoData.data.find((item) => item.id === 'dai').image.small}
          />
          <Title>Dai</Title>
        </Main>
      </Wrapper>

      {/* Decentraland */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'decentraland').image
              .small,
          )
          setSelectedAsset({
            name: 'Decentraland',
            symbol: 'MANA',
            id: 'decentraland',
          })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'decentraland').image
                .small
            }
          />
          <Title>Decentraland</Title>
        </Main>
      </Wrapper>

      {/* Dogecoin */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'dogecoin').image.small,
          )
          setSelectedAsset({ name: 'Dogecoin', symbol: 'DOGE', id: 'dogecoin' })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'dogecoin').image.small
            }
          />
          <Title>Dogecoin</Title>
        </Main>
      </Wrapper>

      {/* Ethereum Classic */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'ethereum-classic').image
              .small,
          )
          setSelectedAsset({
            name: 'Ethereum Classic',
            symbol: 'ETC',
            id: 'ethereum-classic',
          })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'ethereum-classic')
                .image.small
            }
          />
          <Title>Ethereum Classic</Title>
        </Main>
      </Wrapper>

      {/* Filecoin */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'filecoin').image.small,
          )
          setSelectedAsset({ name: 'Filecoin', symbol: 'FIL', id: 'filecoin' })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'filecoin').image.small
            }
          />
          <Title>Filecoin</Title>
        </Main>
      </Wrapper>

      {/* Litecoin */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'litecoin').image.small,
          )
          setSelectedAsset({ name: 'Litecoin', symbol: 'LTC', id: 'litecoin' })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'litecoin').image.small
            }
          />
          <Title>Litecoin</Title>
        </Main>
      </Wrapper>

      {/* Monero */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'monero').image.small,
          )
          setSelectedAsset({ name: 'Monero', symbol: 'XMR', id: 'monero' })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'monero').image.small
            }
          />
          <Title>Monero</Title>
        </Main>
      </Wrapper>

      {/* Ripple */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'ripple').image.small,
          )
          setSelectedAsset({ name: 'Ripple', symbol: 'XRP', id: 'ripple' })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'ripple').image.small
            }
          />
          <Title>Ripple</Title>
        </Main>
      </Wrapper>

      {/* Shiba Inu */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'shiba-inu').image.small,
          )
          setSelectedAsset({
            name: 'Shiba Inu',
            symbol: 'SHIB',
            id: 'shiba-inu',
          })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'shiba-inu').image
                .small
            }
          />
          <Title>Shiba Inu</Title>
        </Main>
      </Wrapper>

      {/* Solana */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'solana').image.small,
          )
          setSelectedAsset({ name: 'Solana', symbol: 'SOL', id: 'solana' })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'solana').image.small
            }
          />
          <Title>Solana</Title>
        </Main>
      </Wrapper>

      {/* Terra Luna */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'terrausd').image.small,
          )
          setSelectedAsset({
            name: 'Terra Luna',
            symbol: 'LUNA',
            id: 'terrausd',
          })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'terrausd').image.small
            }
          />
          <Title>Terra Luna</Title>
        </Main>
      </Wrapper>

      {/* Tron */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'tron').image.small,
          )
          setSelectedAsset({ name: 'Tron', symbol: 'TRX', id: 'tron' })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={cryptoData.data.find((item) => item.id === 'tron').image.small}
          />
          <Title>Tron</Title>
        </Main>
      </Wrapper>

      {/* Uniswap */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'uniswap').image.small,
          )
          setSelectedAsset({ name: 'Uniswap', symbol: 'UNI', id: 'uniswap' })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'uniswap').image.small
            }
          />
          <Title>Uniswap</Title>
        </Main>
      </Wrapper>

      {/* Wrapped Bitcoin */}
      <Wrapper
        onClick={() => {
          setImageUrl(
            cryptoData.data.find((item) => item.id === 'wrapped-bitcoin').image
              .small,
          )
          setSelectedAsset({
            name: 'Wrapped Bitcoin',
            symbol: 'WBTC',
            id: 'wrapped-bitcoin',
          })
          setAction('receive')
        }}
      >
        <Main>
          <img
            src={
              cryptoData.data.find((item) => item.id === 'wrapped-bitcoin')
                .image.small
            }
          />
          <Title>Wrapped Bitcoin</Title>
        </Main>
      </Wrapper>
    </>
  )
}

export default AssetItemRec

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
