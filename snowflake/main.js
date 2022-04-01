import Onboard from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";

const MAINNET_RPC_URL = "https://mainnet.infura.io/v3/<INFURA_KEY>";

const injected = injectedModule();

const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl: MAINNET_RPC_URL,
    },
  ],
  appMetadata: {
    name: "My App",
    icon: "<SVG_ICON_STRING>",
    description: "My app using Onboard",
  },
});

const run = async () => {
  const wallets = await onboard.connectWallet();

  console.log(wallets);
};

run();
