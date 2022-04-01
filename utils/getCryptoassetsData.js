//1. Import coingecko-api
const CoinGecko = require('coingecko-api')

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko()

//3. Make calls
export const getCryptoassetsData = async () => {
  let data = await CoinGeckoClient.coins.all()
  return data
}
