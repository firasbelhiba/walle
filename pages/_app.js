import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "../styles/globals.css";

const ChainId = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout;
  return (
    <Layout>
      <ThirdwebWeb3Provider supportedChainIds={ChainId} connectors={connectors}>
        <Component {...pageProps} />
      </ThirdwebWeb3Provider>
    </Layout>
  );
}

export default MyApp;
