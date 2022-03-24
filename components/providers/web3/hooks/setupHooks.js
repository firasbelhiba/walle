import { handler as createUseAccount } from './useAccount'
import { handler as createUseBalance } from './useBalance'

export const setupHooks = (web3, provider) => {
  return {
    useAccount: createUseAccount(web3, provider),
    useBalance: createUseBalance(),
  }
}
