import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const SalesChart = ({
  walletBalance,
  polygonBalance,
  polkadotBalance,
  avalancheBalance,
  axieInfinityBalance,
  bitcoinBalance,
  cardanoBalance,
  cryptoAssetsData,
}) => {
  const chartoptions = {
    series: [
      {
        name: 'Iphone 13',
        data: [0, 31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Oneplue 9',
        data: [0, 11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
        borderColor: 'rgba(0,0,0,0.1)',
      },

      stroke: {
        curve: 'smooth',
        width: 1,
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'March',
          'April',
          'May',
          'June',
          'July',
          'Aug',
        ],
      },
    },
  }
  return (
    <Card>
      <CardBody>
        <CardSubtitle className="text-muted" tag="h6">
          Portfolio Balance
        </CardSubtitle>
        <CardTitle tag="h5">
          {' '}
          {polygonBalance *
            cryptoAssetsData?.data.find((item) => item.id === 'matic-network')
              .market_data.current_price.usd +
            polkadotBalance *
              cryptoAssetsData?.data.find((item) => item.id === 'polkadot')
                .market_data.current_price.usd +
            avalancheBalance *
              cryptoAssetsData?.data.find((item) => item.id === 'avalanche-2')
                .market_data.current_price.usd +
            axieInfinityBalance *
              cryptoAssetsData?.data.find((item) => item.id === 'axie-infinity')
                .market_data.current_price.usd +
            bitcoinBalance *
              cryptoAssetsData?.data.find((item) => item.id === 'bitcoin')
                .market_data.current_price.usd +
            cardanoBalance *
              cryptoAssetsData?.data.find((item) => item.id === 'cardano')
                .market_data.current_price.usd}
          ${' '}
        </CardTitle>

        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        />
      </CardBody>
    </Card>
  )
}

export default SalesChart
