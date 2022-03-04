import { useHooks } from "../../providers/web3";

export const useBalance = () => {
  return useHooks((hooks) => hooks.useBalance)();
};
