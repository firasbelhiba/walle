import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const SalesChart = ({
  walletBalance,
  polygonBalance,
  polkadotBalance,
  avalancheBalance,
  axieInfinityBalance,
  bitcoinBalance,
  cardanoBalance,
  chainlinkBalance,
  daiBalance,
  decentralandBalance,
  dodgecoinBalance,
  ethereumBalance,
  fileCoinBalance,
  ethereumClassicBalance,
  liteCoinBalance,
  moneroBalance,
  rippleBalance,
  shibaInuBalance,
  solanaBalance,
  stellarBalance,
  terraBalance,
  tronBalance,
  uniswapBalance,
  wrappedBitcoinBalance,
  cryptoAssetsData,
}) => {
  return (
    <div className="row g-3 mb-3 row-deck">
      <div className="col-xl-12 col-xxl-12">
        <div className="card">
          <div className="card-header py-3 d-flex flex-wrap justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold">Portfolio Balance</h6>
          </div>
          <div className="card-body">
            <span className="h3 d-block mb-2">
              {' '}
              {polygonBalance *
                cryptoAssetsData?.data.find(
                  (item) => item.id === 'matic-network',
                ).market_data.current_price.usd +
                polkadotBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'polkadot')
                    .market_data.current_price.usd +
                avalancheBalance *
                  cryptoAssetsData?.data.find(
                    (item) => item.id === 'avalanche-2',
                  ).market_data.current_price.usd +
                axieInfinityBalance *
                  cryptoAssetsData?.data.find(
                    (item) => item.id === 'axie-infinity',
                  ).market_data.current_price.usd +
                bitcoinBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'bitcoin')
                    .market_data.current_price.usd +
                cardanoBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'cardano')
                    .market_data.current_price.usd +
                chainlinkBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'chainlink')
                    .market_data.current_price.usd +
                daiBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'dai')
                    .market_data.current_price.usd +
                decentralandBalance *
                  cryptoAssetsData?.data.find(
                    (item) => item.id === 'decentraland',
                  ).market_data.current_price.usd +
                dodgecoinBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'dogecoin')
                    .market_data.current_price.usd +
                ethereumBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'ethereum')
                    .market_data.current_price.usd +
                fileCoinBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'filecoin')
                    .market_data.current_price.usd +
                ethereumClassicBalance *
                  cryptoAssetsData?.data.find(
                    (item) => item.id === 'ethereum-classic',
                  ).market_data.current_price.usd +
                liteCoinBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'litecoin')
                    .market_data.current_price.usd +
                moneroBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'monero')
                    .market_data.current_price.usd +
                rippleBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'ripple')
                    .market_data.current_price.usd +
                shibaInuBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'shiba-inu')
                    .market_data.current_price.usd +
                solanaBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'solana')
                    .market_data.current_price.usd +
                stellarBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'stellar')
                    .market_data.current_price.usd +
                terraBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'terrausd')
                    .market_data.current_price.usd +
                tronBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'tron')
                    .market_data.current_price.usd +
                uniswapBalance *
                  cryptoAssetsData?.data.find((item) => item.id === 'uniswap')
                    .market_data.current_price.usd +
                wrappedBitcoinBalance *
                  cryptoAssetsData?.data.find(
                    (item) => item.id === 'wrapped-bitcoin',
                  ).market_data.current_price.usd}
              ${' '}
            </span>

            {/* End Progress */}
            <div className="table-responsive">
              <table className="table  table-nowrap mb-0">
                <tbody>
                  {bitcoinBalance *
                    cryptoAssetsData?.data.find((item) => item.id === 'bitcoin')
                      .market_data.current_price.usd ===
                  0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td>
                        <img
                          src={
                            cryptoAssetsData?.data.find(
                              (item) => item.id === 'bitcoin',
                            ).image.small
                          }
                        />{' '}
                        Bitcoin
                      </td>
                      <td>
                        {bitcoinBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'bitcoin',
                          ).market_data.current_price.usd}{' '}
                        $
                      </td>
                      <td>{bitcoinBalance} BTC</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                  )}
                  {polygonBalance *
                    cryptoAssetsData?.data.find(
                      (item) => item.id === 'matic-network',
                    ).market_data.current_price.usd ===
                  0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td>
                        <img
                          src={
                            cryptoAssetsData?.data.find(
                              (item) => item.id === 'matic-network',
                            ).image.small
                          }
                        />{' '}
                        Polygon
                      </td>
                      <td>
                        {polygonBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'matic-network',
                          ).market_data.current_price.usd}{' '}
                        $
                      </td>
                      <td>{polygonBalance} MATIC</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                  )}
                  {avalancheBalance *
                    cryptoAssetsData?.data.find(
                      (item) => item.id === 'avalanche-2',
                    ).market_data.current_price.usd ===
                  0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td>
                        <img
                          src={
                            cryptoAssetsData?.data.find(
                              (item) => item.id === 'avalanche-2',
                            ).image.small
                          }
                        />{' '}
                        Avalanche
                      </td>
                      <td>
                        {avalancheBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'avalanche-2',
                          ).market_data.current_price.usd}{' '}
                        $
                      </td>
                      <td>{avalancheBalance} AVAX</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                  )}
                  {polkadotBalance *
                    cryptoAssetsData?.data.find(
                      (item) => item.id === 'polkadot',
                    ).market_data.current_price.usd ===
                  0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td>
                        <img
                          src={
                            cryptoAssetsData?.data.find(
                              (item) => item.id === 'polkadot',
                            ).image.small
                          }
                        />{' '}
                        Polkadot
                      </td>
                      <td>
                        {polkadotBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'polkadot',
                          ).market_data.current_price.usd}{' '}
                        $
                      </td>
                      <td>{polkadotBalance} DOT</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                  )}
                  {axieInfinityBalance *
                    cryptoAssetsData?.data.find(
                      (item) => item.id === 'axie-infinity',
                    ).market_data.current_price.usd ===
                  0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td>
                        <img
                          src={
                            cryptoAssetsData?.data.find(
                              (item) => item.id === 'axie-infinity',
                            ).image.small
                          }
                        />{' '}
                        Axie infinity
                      </td>
                      <td>
                        {axieInfinityBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'axie-infinity',
                          ).market_data.current_price.usd}{' '}
                        $
                      </td>
                      <td>{axieInfinityBalance} AXS</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                  )}
                  {cardanoBalance *
                    cryptoAssetsData?.data.find((item) => item.id === 'cardano')
                      .market_data.current_price.usd ===
                  0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td>
                        <img
                          src={
                            cryptoAssetsData?.data.find(
                              (item) => item.id === 'cardano',
                            ).image.small
                          }
                        />{' '}
                        Cardano
                      </td>
                      <td>
                        {cardanoBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'cardano',
                          ).market_data.current_price.usd}{' '}
                        $
                      </td>
                      <td>{cardanoBalance} ADA</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                  )}
                  {chainlinkBalance *
                    cryptoAssetsData?.data.find(
                      (item) => item.id === 'chainlink',
                    ).market_data.current_price.usd ===
                  0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td>
                        <img
                          src={
                            cryptoAssetsData?.data.find(
                              (item) => item.id === 'chainlink',
                            ).image.small
                          }
                        />{' '}
                        Chainlink
                      </td>
                      <td>
                        {chainlinkBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'chainlink',
                          ).market_data.current_price.usd}{' '}
                        $
                      </td>
                      <td>{chainlinkBalance} LINK</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                  )}
                  {daiBalance *
                    cryptoAssetsData?.data.find((item) => item.id === 'dai')
                      .market_data.current_price.usd ===
                  0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td>
                        <img
                          src={
                            cryptoAssetsData?.data.find(
                              (item) => item.id === 'dai',
                            ).image.small
                          }
                        />{' '}
                        Dai
                      </td>
                      <td>
                        {daiBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'dai',
                          ).market_data.current_price.usd}{' '}
                        $
                      </td>
                      <td>{daiBalance} DAI</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                  )}
                  {decentralandBalance *
                    cryptoAssetsData?.data.find(
                      (item) => item.id === 'decentraland',
                    ).market_data.current_price.usd ===
                  0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td>
                        <img
                          src={
                            cryptoAssetsData?.data.find(
                              (item) => item.id === 'decentraland',
                            ).image.small
                          }
                        />{' '}
                        Decentraland
                      </td>
                      <td>
                        {decentralandBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'decentraland',
                          ).market_data.current_price.usd}{' '}
                        $
                      </td>
                      <td>{decentralandBalance} MANA</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                  )}
                  {dodgecoinBalance *
                    cryptoAssetsData?.data.find(
                      (item) => item.id === 'dogecoin',
                    ).market_data.current_price.usd ===
                  0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td>
                        <img
                          src={
                            cryptoAssetsData?.data.find(
                              (item) => item.id === 'dogecoin',
                            ).image.small
                          }
                        />{' '}
                        Dogecoin
                      </td>
                      <td>
                        {dodgecoinBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'dogecoin',
                          ).market_data.current_price.usd}{' '}
                        $
                      </td>
                      <td>{dodgecoinBalance} DOGE</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                  )}
                  {ethereumBalance *
                    cryptoAssetsData?.data.find(
                      (item) => item.id === 'ethereum',
                    ).market_data.current_price.usd ===
                  0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td>
                        <img
                          src={
                            cryptoAssetsData?.data.find(
                              (item) => item.id === 'ethereum',
                            ).image.small
                          }
                        />{' '}
                        Ethereum
                      </td>
                      <td>
                        {ethereumBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'ethereum',
                          ).market_data.current_price.usd}{' '}
                        $
                      </td>
                      <td>{ethereumBalance} ETH</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                  )}
                  {fileCoinBalance *
                    cryptoAssetsData?.data.find(
                      (item) => item.id === 'filecoin',
                    ).market_data.current_price.usd ===
                  0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td>
                        <img
                          src={
                            cryptoAssetsData?.data.find(
                              (item) => item.id === 'filecoin',
                            ).image.small
                          }
                        />{' '}
                        Filecoin
                      </td>
                      <td>
                        {fileCoinBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'filecoin',
                          ).market_data.current_price.usd}{' '}
                        $
                      </td>
                      <td>{fileCoinBalance} FIL</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                  )}
                  {ethereumClassicBalance *
                    cryptoAssetsData?.data.find(
                      (item) => item.id === 'ethereum-classic',
                    ).market_data.current_price.usd ===
                  0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td>
                        <img
                          src={
                            cryptoAssetsData?.data.find(
                              (item) => item.id === 'ethereum-classic',
                            ).image.small
                          }
                        />{' '}
                        Ethereum classic
                      </td>
                      <td>
                        {ethereumClassicBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'ethereum-classic',
                          ).market_data.current_price.usd}{' '}
                        $
                      </td>
                      <td>{ethereumClassicBalance} ETC</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-8 col-xxl-7">
        <div className="card">
          <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom align-items-center flex-wrap">
            <h6 className="mb-0 fw-bold">Login Activity</h6>
            <ul
              className="nav nav-tabs tab-body-header rounded d-inline-flex mt-2 mt-md-0"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#Activity"
                  role="tab"
                >
                  Activity
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#Devices"
                  role="tab"
                >
                  Devices
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="tab-content">
              <div className="tab-pane fade" id="Activity">
                <ul className="list-unstyled list mb-0">
                  <li className="d-flex align-items-center py-2">
                    <div className="avatar rounded no-thumbnail chart-text-color1">
                      <i className="fa fa-globe" aria-hidden="true" />
                    </div>
                    <div className="flex-fill ms-3">
                      <div className="h6 mb-0">web</div>
                      <small className="text-muted">Mumbai India</small>
                    </div>
                    <div className="flex-end">
                      <span className="d-block text-end">122.170.109.22</span>
                      <span className="text-muted d-block small">
                        2021-09-30 11:00:52
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center py-2">
                    <div className="avatar rounded no-thumbnail chart-text-color2">
                      <i className="fa fa-globe" aria-hidden="true" />
                    </div>
                    <div className="flex-fill ms-3">
                      <div className="h6 mb-0">web</div>
                      <small className="text-muted">Mumbai India</small>
                    </div>
                    <div className="flex-end">
                      <span className="d-block text-end">122.170.109.22</span>
                      <span className="text-muted d-block small">
                        2021-09-30 11:00:20
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center py-2">
                    <div className="avatar rounded no-thumbnail chart-text-color3">
                      <i className="fa fa-globe" aria-hidden="true" />
                    </div>
                    <div className="flex-fill ms-3">
                      <div className="h6 mb-0">web</div>
                      <small className="text-muted">Mumbai India</small>
                    </div>
                    <div className="flex-end">
                      <span className="d-block text-end">122.170.109.21</span>
                      <span className="text-muted d-block small">
                        2021-09-29 10:56:22
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center py-2">
                    <div className="avatar rounded no-thumbnail chart-text-color4">
                      <i className="fa fa-globe" aria-hidden="true" />
                    </div>
                    <div className="flex-fill ms-3">
                      <div className="h6 mb-0">web</div>
                      <small className="text-muted">Pune India</small>
                    </div>
                    <div className="flex-end">
                      <span className="d-block text-end">198.182.109.22</span>
                      <span className="text-muted d-block small">
                        2021-09-30 12:50:52
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center py-2">
                    <div className="avatar rounded no-thumbnail chart-text-color2">
                      <i className="fa fa-globe" aria-hidden="true" />
                    </div>
                    <div className="flex-fill ms-3">
                      <div className="h6 mb-0">web</div>
                      <small className="text-muted">Banglor India</small>
                    </div>
                    <div className="flex-end">
                      <span className="d-block text-end">126.150.109.22</span>
                      <span className="text-muted d-block small">
                        2021-09-30 10:00:20
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-pane fade show active" id="Devices">
                <ul className="list-unstyled list mb-0">
                  <li className="d-flex align-items-center py-2">
                    <div className="avatar rounded no-thumbnail chart-text-color1">
                      <i className="fa fa-chrome" aria-hidden="true" />
                    </div>
                    <div className="flex-fill ms-3">
                      <div className="h6 mb-0">
                        Chrome V94.0.4606.61 (Windows)
                      </div>
                      <small className="text-muted">Mumbai India</small>
                    </div>
                    <div className="flex-end">
                      <span className="d-block text-end">122.170.109.22</span>
                      <span className="text-muted d-block small">
                        2021-09-30 11:00:52
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center py-2">
                    <div className="avatar rounded no-thumbnail chart-text-color2">
                      <i className="fa fa-mobile" aria-hidden="true" />
                    </div>
                    <div className="flex-fill ms-3">
                      <div className="h6 mb-0">iPhone</div>
                      <small className="text-muted">Mumbai India</small>
                    </div>
                    <div className="flex-end">
                      <span className="d-block text-end">27.57.172.87</span>
                      <span className="text-muted d-block small">
                        2021-09-23 09:03:35
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center py-2">
                    <div className="avatar rounded no-thumbnail chart-text-color3">
                      <i className="fa fa-firefox" aria-hidden="true" />
                    </div>
                    <div className="flex-fill ms-3">
                      <div className="h6 mb-0">
                        Mozila V92.0.4515.159 (Windows)
                      </div>
                      <small className="text-muted">Mumbai India</small>
                    </div>
                    <div className="flex-end">
                      <span className="d-block text-end">117.99.104.150</span>
                      <span className="text-muted d-block small">
                        2021-08-19 08:01:44
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center py-2">
                    <div className="avatar rounded no-thumbnail chart-text-color4">
                      <i className="fa fa-mobile" aria-hidden="true" />
                    </div>
                    <div className="flex-fill ms-3">
                      <div className="h6 mb-0">Android</div>
                      <small className="text-muted">Pune India</small>
                    </div>
                    <div className="flex-end">
                      <span className="d-block text-end">118.99.104.150</span>
                      <span className="text-muted d-block small">
                        2021-09-30 12:50:52
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center py-2">
                    <div className="avatar rounded no-thumbnail chart-text-color3">
                      <i className="fa fa-safari" aria-hidden="true" />
                    </div>
                    <div className="flex-fill ms-3">
                      <div className="h6 mb-0">Safari V84.0.4515.159 (Mac)</div>
                      <small className="text-muted">Banglor India</small>
                    </div>
                    <div className="flex-end">
                      <span className="d-block text-end">177.192.104.150</span>
                      <span className="text-muted d-block small">
                        2021-08-19 07:01:44
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesChart
