import { useEffect, useState } from 'react'
import { Row, Col, Table, Card, CardTitle, CardBody } from 'reactstrap'
import { useWeb3Hook } from '../components/providers'
import AssetsTables from './ui/tables/assetsTable'

const Assets = () => {
  const { web3, cryptoData } = useWeb3Hook()

  // crypto data
  const [data, setData] = useState()

  useEffect(() => {
    const getTotalBalance = async () => {
      setData(cryptoData)
    }

    cryptoData && getTotalBalance()
  }, [cryptoData])

  return (
    <Row>
      <Col lg="12">
        <AssetsTables cryptoData={data?.data} />
      </Col>
    </Row>
  )
}

export default Assets
