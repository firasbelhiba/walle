import styled from 'styled-components'
import AssetItem from './assetItem'

const AssetSelector = ({
  setAction,
  selectedAsset,
  setSelectedAsset,
  sanityTokens,
  walletAddress,
  imageUrl,
  setImageUrl,
}) => {
  return (
    <Wrapper>
      <CoinList>
        <AssetItem
          walletAddress={walletAddress}
          setSelectedAsset={setSelectedAsset}
          setAction={setAction}
          selectedAsset={selectedAsset}
          setImageUrl={setImageUrl}
          imageUrl={imageUrl}
        />
      </CoinList>
    </Wrapper>
  )
}

export default AssetSelector

const Wrapper = styled.div``

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`
