import { handler as createUseAccount } from './useAccount'
import { handler as createUseBalance } from './useBalance'
import { handler as createUseNetwork } from './useNetwork'

export const setupHooks = (...deps) => {
  return {
    useAccount: createUseAccount(...deps),
    useBalance: createUseBalance(),
    useNetwork: createUseNetwork(...deps),
  }
}
