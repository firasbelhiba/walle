import { useHooks } from '../../providers/web3'

export const useNetwork = () => {
  return useHooks((hooks) => hooks.useNetwork)()
}
