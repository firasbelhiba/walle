import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    "4ee854f3b39f337c0345bb0258ec4755d37a71f7dd7048654af050a7e57c2491",
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);

export const handler = () => () => {
  const [sanityItems, setSanityItems] = useState([]);
  const [thirdwebItems, setThirdwebItems] = useState([]);

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

  return {
    sanityItems,
    thirdwebItems,
  };
};
