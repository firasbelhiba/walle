import { useWeb3Hook } from '../components/providers'
import { useNetwork } from '../components/web3/hooks/useNetwork'
import { Alert, Card, CardBody, CardTitle } from 'reactstrap'

export default function Home() {
  const { web3, isLoaded } = useWeb3Hook()
  const { network } = useNetwork()
  console.log(network.isSupported)
  return (
    <>
      {isLoaded ? (
        'Is loading'
      ) : web3 ? (
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2" />
            Web3 is ready ! Currently you are connected on {network.data} .
          </CardTitle>
          <CardBody className="">
            <div>
              {!network.isSupported ? (
                <Alert color="danger  ">
                  <h4 className="alert-heading">You are so close !</h4>
                  <p>
                    You are not connected to the right network . WallE is not
                    deployed on {network.data} , it is deployed on{' '}
                    {network.target} . Would you please connect to the right
                    network . Click on the Metamask extention and change the
                    network to {network.target}
                  </p>
                  <hr />
                  <p className="mb-0">
                    if you found some problems you can always report to me at
                    this address :
                    <u>
                      <a href="mailto:firas.belhiba@€sprit.tn">
                        firas.belhiba@esprit.tn
                      </a>
                    </u>
                  </p>
                </Alert>
              ) : (
                <Alert color="success">
                  <h4 className="alert-heading">Congratulations !</h4>
                  <p>
                    You are connected to the right network . Our decentralized
                    application is deployed on the Ropsten test network . Now
                    you can buy some ERCTokens and start playing with assets .
                  </p>
                  <hr />
                  <p className="mb-0">
                    if you found some problems you can always report to me at
                    this address :
                    <u>
                      <a href="mailto:firas.belhiba@€sprit.tn">
                        firas.belhiba@esprit.tn
                      </a>
                    </u>
                  </p>
                </Alert>
              )}
            </div>
          </CardBody>
        </Card>
      ) : (
        'Please install Metamask'
      )}
    </>
  )
}
