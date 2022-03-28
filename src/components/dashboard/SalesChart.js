import dynamic from 'next/dynamic'
import { Spinner } from 'react-bootstrap'

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
          <>
            {cryptoAssetsData && polygonBalance ? (
              <>
                <div className="card-header py-3 d-flex flex-wrap justify-content-between align-items-center bg-transparent border-bottom-0">
                  <h6 className="mb-0 fw-bold">Portfolio Balance</h6>
                </div>
                <div className="card-body">
                  <span className="h3 d-block mb-2">
                    {' '}
                    {(
                      polygonBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'matic-network',
                        ).market_data.current_price.usd +
                      polkadotBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'polkadot',
                        ).market_data.current_price.usd +
                      avalancheBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'avalanche-2',
                        ).market_data.current_price.usd +
                      axieInfinityBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'axie-infinity',
                        ).market_data.current_price.usd +
                      bitcoinBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'bitcoin',
                        ).market_data.current_price.usd +
                      cardanoBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'cardano',
                        ).market_data.current_price.usd +
                      chainlinkBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'chainlink',
                        ).market_data.current_price.usd +
                      daiBalance *
                        cryptoAssetsData?.data.find((item) => item.id === 'dai')
                          .market_data.current_price.usd +
                      decentralandBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'decentraland',
                        ).market_data.current_price.usd +
                      dodgecoinBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'dogecoin',
                        ).market_data.current_price.usd +
                      ethereumBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'ethereum',
                        ).market_data.current_price.usd +
                      fileCoinBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'filecoin',
                        ).market_data.current_price.usd +
                      ethereumClassicBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'ethereum-classic',
                        ).market_data.current_price.usd +
                      liteCoinBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'litecoin',
                        ).market_data.current_price.usd +
                      moneroBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'monero',
                        ).market_data.current_price.usd +
                      rippleBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'ripple',
                        ).market_data.current_price.usd +
                      shibaInuBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'shiba-inu',
                        ).market_data.current_price.usd +
                      solanaBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'solana',
                        ).market_data.current_price.usd +
                      stellarBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'stellar',
                        ).market_data.current_price.usd +
                      terraBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'terrausd',
                        ).market_data.current_price.usd +
                      tronBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'tron',
                        ).market_data.current_price.usd +
                      uniswapBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'uniswap',
                        ).market_data.current_price.usd +
                      wrappedBitcoinBalance *
                        cryptoAssetsData?.data.find(
                          (item) => item.id === 'wrapped-bitcoin',
                        ).market_data.current_price.usd
                    ).toFixed(2)}
                    ${' '}
                  </span>

                  {/* End Progress */}
                  <div className="table-responsive">
                    <table className="table  table-nowrap mb-0">
                      <tbody>
                        {bitcoinBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'bitcoin',
                          ).market_data.current_price.usd ===
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
                              {(
                                bitcoinBalance *
                                cryptoAssetsData?.data.find(
                                  (item) => item.id === 'bitcoin',
                                ).market_data.current_price.usd
                              ).toFixed(3)}{' '}
                              $
                            </td>
                            <td>{parseFloat(bitcoinBalance).toFixed(2)} BTC</td>
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
                              {(
                                polygonBalance *
                                cryptoAssetsData?.data.find(
                                  (item) => item.id === 'matic-network',
                                ).market_data.current_price.usd
                              ).toFixed(2)}{' '}
                              $
                            </td>
                            <td>
                              {parseFloat(polygonBalance).toFixed(2)} MATIC
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
                              {(
                                avalancheBalance *
                                cryptoAssetsData?.data.find(
                                  (item) => item.id === 'avalanche-2',
                                ).market_data.current_price.usd
                              ).toFixed(2)}{' '}
                              $
                            </td>
                            <td>
                              {parseFloat(avalancheBalance).toFixed(2)} AVAX
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
                              {(
                                polkadotBalance *
                                cryptoAssetsData?.data.find(
                                  (item) => item.id === 'polkadot',
                                ).market_data.current_price.usd
                              ).toFixed(2)}{' '}
                              $
                            </td>
                            <td>
                              {parseFloat(polkadotBalance).toFixed(2)} DOT
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
                              {(
                                axieInfinityBalance *
                                cryptoAssetsData?.data.find(
                                  (item) => item.id === 'axie-infinity',
                                ).market_data.current_price.usd
                              ).toFixed(2)}{' '}
                              $
                            </td>
                            <td>
                              {parseFloat(axieInfinityBalance).toFixed(2)} AXS
                            </td>
                          </tr>
                        )}
                        {cardanoBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'cardano',
                          ).market_data.current_price.usd ===
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
                              {(
                                cardanoBalance *
                                cryptoAssetsData?.data.find(
                                  (item) => item.id === 'cardano',
                                ).market_data.current_price.usd
                              ).toFixed(2)}{' '}
                              $
                            </td>
                            <td>{parseFloat(cardanoBalance).toFixed(2)} ADA</td>
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
                              {(
                                chainlinkBalance *
                                cryptoAssetsData?.data.find(
                                  (item) => item.id === 'chainlink',
                                ).market_data.current_price.usd
                              ).toFixed(2)}{' '}
                              $
                            </td>
                            <td>
                              {parseFloat(chainlinkBalance).toFixed(2)} LINK
                            </td>
                          </tr>
                        )}
                        {daiBalance *
                          cryptoAssetsData?.data.find(
                            (item) => item.id === 'dai',
                          ).market_data.current_price.usd ===
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
                              {(
                                daiBalance *
                                cryptoAssetsData?.data.find(
                                  (item) => item.id === 'dai',
                                ).market_data.current_price.usd
                              ).toFixed(2)}{' '}
                              $
                            </td>
                            <td>{parseFloat(daiBalance).toFixed(2)} DAI</td>
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
                              {(
                                decentralandBalance *
                                cryptoAssetsData?.data.find(
                                  (item) => item.id === 'decentraland',
                                ).market_data.current_price.usd
                              ).toFixed(2)}{' '}
                              $
                            </td>
                            <td>{parseFloat(decentralandBalance).toFixed(2)} MANA</td>
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
                              {(
                                dodgecoinBalance *
                                cryptoAssetsData?.data.find(
                                  (item) => item.id === 'dogecoin',
                                ).market_data.current_price.usd
                              ).toFixed(2)}{' '}
                              $
                            </td>
                            <td>{dodgecoinBalance} DOGE</td>
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
                              {(
                                ethereumBalance *
                                cryptoAssetsData?.data.find(
                                  (item) => item.id === 'ethereum',
                                ).market_data.current_price.usd
                              ).toFixed(2)}{' '}
                              $
                            </td>
                            <td>{parseFloat(ethereumBalance).toFixed(2)} ETH</td>
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
                              {(
                                fileCoinBalance *
                                cryptoAssetsData?.data.find(
                                  (item) => item.id === 'filecoin',
                                ).market_data.current_price.usd
                              ).toFixed(2)}{' '}
                              $
                            </td>
                            <td>{parseFloat(fileCoinBalance).toFixed(2)} FIL</td>
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
                              {(
                                ethereumClassicBalance *
                                cryptoAssetsData?.data.find(
                                  (item) => item.id === 'ethereum-classic',
                                ).market_data.current_price.usd
                              ).toFixed(2)}{' '}
                              $
                            </td>
                            <td>{parseFloat(ethereumClassicBalance).toFixed(2)} ETC</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Spinner
                  className="col d-flex justify-content-center"
                  animation="border"
                  role="status"
                ></Spinner>
              </>
            )}
          </>
        </div>
      </div>
    </div>
  )
}

export default SalesChart
