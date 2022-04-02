import Onboard from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import walletLinkModule from "@web3-onboard/walletlink";
import walletConnectModule from "@web3-onboard/walletconnect";
import ledgerModule from "@web3-onboard/ledger";
import trezorModule from "@web3-onboard/trezor";
import { ethers, utils } from "ethers";

import { icon } from "./icon";

let ethersProvider;
let ethersSigner;
let daoContract;
let address;
let userBalance;
let typeSelected;
let quantity;

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

// const flakeDaoRinkeby = "0xD598c46D78D73451D08a0f3cc2e483B5E9f45438";

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
  try {
    const connectedWallets = wallets.map(({ label }) => label);
    window.localStorage.setItem(
      "connectedWallets",
      JSON.stringify(connectedWallets)
    );
    if (wallets[0]?.provider) {
      ethersProvider = new ethers.providers.Web3Provider(
        wallets[0].provider,
        "any"
      );

      ethersSigner = ethersProvider.getSigner();

      address = wallets[0].accounts[0]?.address;
      userBalance = wallets[0].accounts[0]?.balance;
      $("#connectText").text(address.slice(0, 5) + "....." + address.slice(-4));
      if (flakeDaoRinkeby) {
        daoContract = new ethers.Contract(
          flakeDaoRinkeby,
          [
            "function mint(address _owner, uint256 _quantity, uint256 _level) public payable",
          ],
          ethersSigner
        );
      }
    } else {
      ethersProvider = null;
      ethersSigner = null;
      daoContract = null;
      address = null;
      typeSelected = null;
      quantity = null;
      userBalance = null;
      $("#connectText").text("Connect Metamask");
    }
  } catch (err) {
    console.log(err.message);
  }
});

async function connectWallet(skipPrev) {
  try {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    const previouslyConnectedWallets = JSON.parse(
      window.localStorage.getItem("connectedWallets")
    );

    if (skipPrev) {
      await onboard.connectWallet();
    } else if (previouslyConnectedWallets) {
      // Connect the most recently connected wallet (first in the array)

      await onboard.connectWallet({
        autoSelect: previouslyConnectedWallets[0],
      });

      // You can also auto connect "silently" and disable all onboard modals to avoid them flashing on page load
      // await onboard.connectWallet({
      //   autoSelect: { label: previouslyConnectedWallets[0], disableModals: true },
      // });
    }
  } catch (err) {
    console.log(err.message);
  }
}

setTimeout(() => {
  connectWallet();
}, 4000);

// code

const $ = window.$;

$("#connectBtn").on("click", function (e) {
  e.preventDefault();
  connectWallet(true);
});

$("#diamond").on("click", function (e) {
  typeSelected = 0;
});

$("#gold").on("click", function (e) {
  typeSelected = 1;
});

$("#silver").on("click", function (e) {
  typeSelected = 2;
});

$("#amount").on("input", function (e) {
  quantity = e.target.value;
});

$("#mintBtn").on("click", function (e) {
  console.log("quantity", quantity);
  console.log("address", address);
  console.log("typeSelected", typeSelected);
  if (quantity && address && daoContract) {
    if (typeSelected === 0) {
      const price = utils.parseEther("1");
      const value = price.mul(quantity);
      daoContract
        .mint(address, quantity, typeSelected, { value })
        .then(() => {
          console.log("minting...");
        })
        .catch((err) => console.log(err.message));
    }
    if (typeSelected === 1) {
      const price = utils.parseEther("0.5");
      const value = price.mul(quantity);
      daoContract
        .mint(address, quantity, typeSelected, { value })
        .then(() => {
          console.log("minting...");
        })
        .catch((err) => console.log(err.message));
    }
    if (typeSelected === 2) {
      const price = utils.parseEther("0.1");
      const value = price.mul(quantity);
      daoContract
        .mint(address, quantity, typeSelected, { value })
        .then(() => {
          console.log("minting...");
        })
        .catch((err) => console.log(err.message));
    }
  } else if (!address) {
    connectWallet(true);
  }
});

$("#email-form").on("submit", function (e) {
  return false;
});

console.log($("connectBtn"));
