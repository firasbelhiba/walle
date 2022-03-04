import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useAccount } from "../components/web3/hooks/useAccount";
import { useBalance } from "../components/web3/hooks/useBalance";

import { useWeb3Hook } from "../components/providers";
import SalesChart from "../src/components/dashboard/SalesChart";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    "4ee854f3b39f337c0345bb0258ec4755d37a71f7dd7048654af050a7e57c2491",
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);

const Dashboard = () => {
  const { account } = useAccount();
  const { web3 } = useWeb3Hook();
  const [walletBalance, setWalletBalance] = useState(0);
  const { sanityItems, thirdwebItems } = useBalance();

  // Conversion to USD
  const tokenToUsd = {};

  sanityItems.forEach((token) => {
    tokenToUsd[token.contractAddress] = Number(token.usdPrice);
  });

  useEffect(() => {
    const getTotalBalance = async () => {
      const totalBalance = await Promise.all(
        thirdwebItems.map(async (token) => {
          const balance = await token.balanceOf(account);

          return Number(balance.displayValue * tokenToUsd[token.address]);
        })
      );
      setWalletBalance(totalBalance.reduce((a, b) => a + b, 0));
    };

    account && web3 && getTotalBalance();
  }, [account, thirdwebItems, sanityItems]);

  return (
    <div>
      <SalesChart walletBalance={walletBalance.toLocaleString()} />
      <div className="row g-3 mb-3 row-deck">
        <div className="col-xl-4 col-xxl-5">
          <div className="card">
            <div className="card-header py-3 d-flex flex-wrap justify-content-between align-items-center bg-transparent border-bottom-0">
              <h6 className="mb-0 fw-bold">Top Coin Volume</h6>
            </div>
            <div className="card-body">
              <span className="h3 d-block mb-2">$97,431.14 USD</span>
              {/* Progress */}
              <div
                className="progress rounded-pill mb-1"
                style={{ height: "5px" }}
              >
                <div
                  className="progress-bar chart-color1"
                  role="progressbar"
                  style={{ width: "32%" }}
                  aria-valuenow={32}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div
                  className="progress-bar chart-color2"
                  role="progressbar"
                  style={{ width: "23%" }}
                  aria-valuenow={23}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div
                  className="progress-bar chart-color3"
                  role="progressbar"
                  style={{ width: "13%" }}
                  aria-valuenow={13}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div
                  className="progress-bar chart-color4"
                  role="progressbar"
                  style={{ width: "7%" }}
                  aria-valuenow={7}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="d-flex justify-content-between mb-4">
                <span>0%</span>
                <span>100%</span>
              </div>
              {/* End Progress */}
              <div className="table-responsive">
                <table className="table  table-nowrap mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <i className="fa fa-square chart-text-color1" /> BTC
                      </td>
                      <td>5.71095643</td>
                      <td>
                        <span className="badge bg-success">+12.1%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-square chart-text-color2" /> LTC
                      </td>
                      <td>2.409425</td>
                      <td>
                        <span className="badge bg-warning">+6.9%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-square chart-text-color3" /> XRP
                      </td>
                      <td>0.0906654</td>
                      <td>
                        <span className="badge bg-danger">-1.5%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-square chart-text-color4" /> DASH
                      </td>
                      <td>0.007653</td>
                      <td>
                        <span className="badge bg-success">1.9%</span>
                      </td>
                    </tr>
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
                        <div className="h6 mb-0">
                          Safari V84.0.4515.159 (Mac)
                        </div>
                        <small className="text-muted">Banglor India</small>
                      </div>
                      <div className="flex-end">
                        <span className="d-block text-end">
                          177.192.104.150
                        </span>
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
    </div>
  );
};

export default Dashboard;
