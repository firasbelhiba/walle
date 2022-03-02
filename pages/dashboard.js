import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useAccount } from "../components/web3/hooks/useAccount";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    "4ee854f3b39f337c0345bb0258ec4755d37a71f7dd7048654af050a7e57c2491",
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);

const Dashboard = () => {
  const { account } = useAccount();

  const [sanityItems, setSanityItems] = useState([]);
  const [thirdwebItems, setThirdwebItems] = useState([]);
  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    const getCoins = async () => {
      const coins = await fetch(
        "https://s5isnzo6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
      );

      const _sanityItems = (await coins.json()).result;
      setSanityItems(_sanityItems);

      setThirdwebItems(
        _sanityItems.map((item) => sdk.getTokenModule(item.contractAddress))
      );
    };

    return getCoins();
  }, []);

  // Conversion to USD
  const tokenToUsd = {};

  sanityItems.forEach((token) => {
    tokenToUsd[token.contractAddress] = Number(token.usdPrice);
  });

  useEffect(() => {
    const getTotalBalance = async () => {
      const totalBalance = await Promise.all(
        thirdwebItems.map(async (token) => {
          const balance = await token.balanceOf(
            account
          );
          return Number(balance.displayValue * tokenToUsd[token.address]);
        })
      );
      setWalletBalance(totalBalance.reduce((a, b) => a + b, 0));
    };

    return getTotalBalance();
  }, [account, thirdwebItems, sanityItems]);

  return <div>{walletBalance.toLocaleString()}</div>;
};

export default Dashboard;
