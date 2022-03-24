import Image from 'next/image'
import { Card, CardBody, CardTitle, CardSubtitle, Table } from 'reactstrap'

const tableData = [
  {
    avatar: '',
    name: 'Jonathan Gover',
    email: 'hgover@gmail.com',
    project: 'Flexy React',
    status: 'pending',
    weeks: '35',
    budget: '95K',
  },
  {
    avatar: 'user2',
    name: 'Martin Gover',
    email: 'hgover@gmail.com',
    project: 'Lading pro React',
    status: 'done',
    weeks: '35',
    budget: '95K',
  },
  {
    avatar: 'user3',
    name: 'Gulshan Gover',
    email: 'hgover@gmail.com',
    project: 'Elite React',
    status: 'holt',
    weeks: '35',
    budget: '95K',
  },
  {
    avatar: 'user4',
    name: 'Pavar Gover',
    email: 'hgover@gmail.com',
    project: 'Flexy React',
    status: 'pending',
    weeks: '35',
    budget: '95K',
  },
  {
    avatar: 'user5',
    name: 'Hanna Gover',
    email: 'hgover@gmail.com',
    project: 'Ample React',
    status: 'done',
    weeks: '35',
    budget: '95K',
  },
]

const AssetsTables = ({ cryptoData }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Crypto Assets</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Today s Cryptocurrency Prices by Walle
        </CardSubtitle>
        <div className="table-responsive">
          <Table className="text-nowrap mt-3 align-middle" borderless>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>

                <th>24h %</th>
                <th>7d %</th>
                <th>30d %</th>

                <th>Circulating Supply</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData &&
                cryptoData.map((asset, index) => (
                  <tr key={index} className="border-top">
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <Image
                          src={asset.image.small}
                          className="rounded-circle"
                          alt="avatar"
                          width="45"
                          height="45"
                        />
                        <div className="ms-3">
                          <h6 className="mb-0">{asset.name}</h6>
                          <span className="text-muted">{asset.symbol}</span>
                        </div>
                      </div>
                    </td>
                    <td>{asset.market_data.current_price.usd} $</td>
                    {/* <td>
                    {tdata.status === 'pending' ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3" />
                    ) : tdata.status === 'holt' ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3" />
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3" />
                    )}
                  </td> */}
                    <td>
                      {asset.market_data.market_cap_change_percentage_24h} %
                    </td>
                    <td>{asset.market_data.price_change_percentage_7d} %</td>
                    <td>{asset.market_data.price_change_percentage_30d} %</td>
                    <td>
                      {asset.market_data.circulating_supply}{' '}
                      {asset.symbol.toUpperCase()}{' '}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

export default AssetsTables
