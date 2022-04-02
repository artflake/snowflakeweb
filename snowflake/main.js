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
let quantity = 1;

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

const flakeDaoAddress = "0x550022D4d6643a2211107a2bAddFdba42D7A3412";

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
      // set provider
      ethersProvider = new ethers.providers.Web3Provider(
        wallets[0].provider,
        "any"
      );
      // set signer
      ethersSigner = ethersProvider.getSigner();
      // set address
      address = wallets[0].accounts[0]?.address;
      // set user balance
      userBalance = wallets[0].accounts[0]?.balance;
      // set account in connect btn
      $("#connectText").text(address.slice(0, 5) + "....." + address.slice(-4));
      // set dao contract
      if (flakeDaoAddress) {
        daoContract = new ethers.Contract(
          flakeDaoAddress,
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

      // await onboard.connectWallet({
      //   autoSelect: previouslyConnectedWallets[0],
      // });

      // You can also auto connect "silently" and disable all onboard modals to avoid them flashing on page load
      await onboard.connectWallet({
        autoSelect: {
          label: previouslyConnectedWallets[0],
          disableModals: true,
        },
      });
    }
  } catch (err) {
    console.log(err.message);
  }
}

setTimeout(() => {
  connectWallet(false);
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
  if (!address) {
    connectWallet(true);
  } else if (quantity && quantity > 0 && address && daoContract) {
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
  }
});

$("#email-form").on("submit", function (e) {
  return false;
});
