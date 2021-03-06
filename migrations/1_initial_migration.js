const Migrations = artifacts.require('Migrations')

// Tokens
const DaiToken = artifacts.require('DaiToken')
const PolygonToken = artifacts.require('PolygonToken')
const AvalancheToken = artifacts.require('AvalancheToken')
const AxieInfinityToken = artifacts.require('AxieInfinityToken')
const BitcoinToken = artifacts.require('BitcoinToken')
const CardanoToken = artifacts.require('CardanoToken')
const ChainlinkToken = artifacts.require('ChainlinkToken')
const DecentralandToken = artifacts.require('DecentralandToken')
const DodgecoinToken = artifacts.require('DodgecoinToken')
const EthereumClassicToken = artifacts.require('EthereumClassicToken')
const EthereumToken = artifacts.require('EthereumToken')
const FileCoinToken = artifacts.require('FileCoinToken')
const LiteCoinToken = artifacts.require('LiteCoinToken')
const MoneroToken = artifacts.require('MoneroToken')
const PolkadotToken = artifacts.require('PolkadotToken')
const ShibaInuToken = artifacts.require('ShibaInuToken')
const SolanaToken = artifacts.require('SolanaToken')
const StellarToken = artifacts.require('StellarToken')
const TerraToken = artifacts.require('TerraToken')
const TronToken = artifacts.require('TronToken')
const UniswapToken = artifacts.require('UniswapToken')
const RippleToken = artifacts.require('RippleToken')
const WrappedBitcoinToken = artifacts.require('WrappedBitcoinToken')

module.exports = async function (deployer) {
  await deployer.deploy(Migrations)

  // minting Dai tokens (deployed)
  // await deployer.deploy(DaiToken, '1000000000000000000000000')
  // await DaiToken.deployed()

  // minting Polygon tokens (deployed)
  // await deployer.deploy(PolygonToken, "100000000000000000000000");
  // await PolygonToken.deployed();

  // minting Avalanche tokens (deployed)
  // await deployer.deploy(AvalancheToken, "10000000000000000000000");
  // await AvalancheToken.deployed();

  // minting Axie infinity tokens (deployed)
  // await deployer.deploy(AxieInfinityToken, "10000000000000000000000");
  // await AxieInfinityToken.deployed();

  // minting Bitcoin tokens (deployed)
  // await deployer.deploy(BitcoinToken, "1000000000000000000000");
  // await BitcoinToken.deployed();

  // minting Cardano tokens (deployed)
  // await deployer.deploy(CardanoToken, "1000000000000000000000000");
  // await CardanoToken.deployed();

  // minting Chainlink tokens (deployed)
  //await deployer.deploy(ChainlinkToken, '100000000000000000000000')
  //await ChainlinkToken.deployed()

  // minting Decentraland tokens (deployed)
  //await deployer.deploy(DecentralandToken, '100000000000000000000000')
  //await DecentralandToken.deployed()

  // minting Dodgecoin tokens (deployed)
  //await deployer.deploy(DodgecoinToken, '100000000000000000000000000')
  //await DodgecoinToken.deployed()

  // minting Ethereum Classic tokens (deployed)
  //await deployer.deploy(EthereumClassicToken, '10000000000000000000000')
  //await EthereumClassicToken.deployed()

  // minting Ethereum tokens (deployed)
  // await deployer.deploy(EthereumToken, '10000000000000000000000')
  // await EthereumToken.deployed()

  // minting Filecoin tokens (deployed)
  //await deployer.deploy(FileCoinToken, '1000000000000000000000')
  // await FileCoinToken.deployed()

  // minting LiteCoin tokens (deployed)
  //await deployer.deploy(LiteCoinToken, '1000000000000000000000')
  //await LiteCoinToken.deployed()

  // minting Monero tokens (deployed)
  //await deployer.deploy(MoneroToken, '1000000000000000000000')
  //await MoneroToken.deployed()

  // minting Polkadot tokens (deployed)
  //await deployer.deploy(PolkadotToken, '1000000000000000000000')
  //await PolkadotToken.deployed()

  // minting Shiba Inu tokens  (deployed)
  //await deployer.deploy(ShibaInuToken, '1000000000000000000000')
  //await ShibaInuToken.deployed()

  // minting Solana tokens (deployed)
  //await deployer.deploy(SolanaToken, '1000000000000000000000')
  //await SolanaToken.deployed()

  // minting Stellar Lumen tokens (deployed)
  //await deployer.deploy(StellarToken, '100000000000000000000000')
  //await StellarToken.deployed()

  // minting Terra Luna tokens (deployed)
  //await deployer.deploy(TerraToken, '10000000000000000000000')
  //await TerraToken.deployed()

  // minting Tron tokens (deployed)
  //await deployer.deploy(TronToken, '10000000000000000000000')
  //await TronToken.deployed()

  // minting Uniswap tokens (deployed)
  //await deployer.deploy(UniswapToken, '10000000000000000000000')
  //await UniswapToken.deployed()

  // minting Ripple tokens
  //await deployer.deploy(RippleToken, '10000000000000000000000')
  //await RippleToken.deployed()

  // // minting Wrapped Bitcoin tokens
  //await deployer.deploy(WrappedBitcoinToken, '1000000000000000000000')
  //await WrappedBitcoinToken.deployed()
}
