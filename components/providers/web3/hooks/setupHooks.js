import { handler as createUseAccount } from "./useAccount";
import { handler as createUseBalance } from "./useBalance";

export const setupHooks = (web3) => {
  return {
    useAccount: createUseAccount(web3),
    useBalance: createUseBalance(),
  };
};
