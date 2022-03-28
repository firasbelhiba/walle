import styled from 'styled-components'
import AssetItemRec from './AssetItemRec'

const AssetSelectorRec = ({
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
        <AssetItemRec
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

export default AssetSelectorRec

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
