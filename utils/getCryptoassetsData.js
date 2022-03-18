//1. Import coingecko-api
const CoinGecko = require('coingecko-api')

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko()

//3. Make calls
export const getCryptoassetsData = async () => {
  let data = await CoinGeckoClient.coins.all()
  //   let data = await CoinGeckoClient.simple.price({
  //   ids: [
  //     "bitcoin",
  //     "ethereum",
  //     "avalanche-2",
  //     "axie-infinity",
  //     "cardano",
  //     "chainlink",
  //     "dai",
  //     "decentraland",
  //     "dogecoin",
  //     "ethereum-classic",
  //     "filecoin",
  //     "litecoin",
  //     "monero",
  //     "polkadot",
  //     "matic-network",
  //     "ripple",
  //     "shiba-inu",
  //     "solana",
  //     "stellar",
  //     "terrausd",
  //     "tron",
  //     "uniswap",
  //     "wrapped-bitcoin",
  //   ],
  //   vs_currencies: ["eur", "usd"],
  // });
  return data
}
