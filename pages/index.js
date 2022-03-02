import { useWeb3 } from "@3rdweb/hooks";
import { useWeb3Hook } from "../components/providers";
import Dashboard from "./dashboard";

export default function Home() {
  const { web3, isLoaded } = useWeb3Hook();

  return (
    <>
      {isLoaded
        ? "Is loading"
        : web3
        ? "Web3 is ready"
        : "Please install Metamask"}
    </>
  );
}
