import { useEffect } from 'react'
import useSWR from 'swr'

export const handler = (web3, provider) => () => {
  const { data, mutate, ...swrResponse } = useSWR(
    () => {
      return web3 ? 'web3/accounts' : null
    },
    async () => {
      const accounts = await web3.eth.getAccounts()
      return accounts[0]
    },
  )

  useEffect(() => {
    provider &&
      provider.on('accountsChanged', (accounts) => mutate(accounts[0]))
  }, [provider])

  return {
    account: { data, mutate, ...swrResponse },
  }
}
