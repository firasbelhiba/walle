import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { Web3Provider } from "../components/providers";
import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";
import "../styles/globals.css";
import Script from "next/script";

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Web3Provider>
        <Head>
          <title>WallE crypto wallet</title>
          <meta name="description" content="WallE crypto wallet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <FullLayout>
          <Component {...pageProps} />
        </FullLayout>
        <Script src="/assets/bundles/libscripts.bundle.js" />

      </Web3Provider>
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
