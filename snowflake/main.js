import Onboard from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import walletLinkModule from "@web3-onboard/walletlink";
import walletConnectModule from "@web3-onboard/walletconnect";
import ledgerModule from "@web3-onboard/ledger";
import trezorModule from "@web3-onboard/trezor";

import { icon } from "./icon";

const injected = injectedModule();
const walletConnect = walletConnectModule();
const walletLink = walletLinkModule();
const ledger = ledgerModule();
const trezor = trezorModule({
  email: "support@flake.art",
  appUrl: "https://flake.art",
});

const modules = [injected, walletConnect, walletLink, ledger, trezor];

const MAINNET_RPC_URL = `https://mainnet.infura.io/v3/f6d110a8a5904705b2eb97815ba53e85`;
const RINKEBY_RPC_URL = `https://rinkeby.infura.io/v3/f6d110a8a5904705b2eb97815ba53e85`;

const onboard = Onboard({
  wallets: modules, // created in previous step
  chains: [
    {
      id: "0x1", // chain ID must be in hexadecimel
      token: "ETH",
      namespace: "evm",
      label: "Ethereum Mainnet",
      rpcUrl: MAINNET_RPC_URL,
    },
    {
      id: "0x4",
      token: "rETH",
      namespace: "evm",
      label: "Ethereum Rinkeby Testnet",
      rpcUrl: RINKEBY_RPC_URL,
    },
  ],
  appMetadata: {
    name: "Flake Member Dao",
    icon,
    description: "App for minting member Dao NFTs",
  },
});

const walletsSub = onboard.state.select("wallets");
const { unsubscribe } = walletsSub.subscribe((wallets) => {
  const connectedWallets = wallets.map(({ label }) => label);
  window.localStorage.setItem(
    "connectedWallets",
    JSON.stringify(connectedWallets)
  );
});

async function connectWallet() {
  const previouslyConnectedWallets = JSON.parse(
    window.localStorage.getItem("connectedWallets")
  );

  if (previouslyConnectedWallets) {
    // Connect the most recently connected wallet (first in the array)
    await onboard.connectWallet({ autoSelect: previouslyConnectedWallets[0] });

    // You can also auto connect "silently" and disable all onboard modals to avoid them flashing on page load
    // await onboard.connectWallet({
    //   autoSelect: { label: previouslyConnectedWallets[0], disableModals: true },
    // });
  } else {
    const connectedWallets = await onboard.connectWallet();
    console.log(connectedWallets);
  }
}

connectWallet();
