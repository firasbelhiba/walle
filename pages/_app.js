import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { Web3Provider } from "../components/providers";
import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <Head>
        <title>WallE crypto wallet</title>
        <meta name="description" content="WallE crypto wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FullLayout>
        <Component {...pageProps} />
      </FullLayout>
    </Web3Provider>
  );
}

export default MyApp;
