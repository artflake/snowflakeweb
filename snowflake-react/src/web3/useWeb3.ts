import Onboard from "bnc-onboard";
import { ethers } from "ethers";
import { useEffect } from "react";
import { useSelector, useDispatch } from "redux/hooks";
import { wallets } from "./wallets";
import {
  setAddress,
  setNetwork,
  setOnboard,
  setProvider,
  setSigner,
  setWallet,
} from "../redux/reducers/web3Slice";
import { INFURA_KEY } from "../utils/constants";

// assume we are only running on ethereum for hardware wallets
const rpcUrl = `https://mainnet.infura.io/v3/${INFURA_KEY}`;
// const rpcUrl = `https://rinkeby.infura.io/v3/${INFURA_KEY}`;

// react-hook for initializing web3
export const useWeb3 = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.web3.address);
  const network = useSelector((state) => state.web3.network);
  const onboard = useSelector((state) => state.web3.onboard);
  const provider = useSelector((state) => state.web3.provider);
  const signer = useSelector((state) => state.web3.signer);
  const wallet = useSelector((state) => state.web3.wallet);

  // load wallet if already exists
  useEffect(() => {
    const runEffect = async () => {
      try {
        const previouslySelectedWallet =
          window.localStorage.getItem("selectedWallet");

        // call wallet select with that value if it exists
        if (previouslySelectedWallet && onboard) {
          await onboard.walletSelect(previouslySelectedWallet);
        }
      } catch {}
    };
    if (!address && onboard) {
      runEffect();
    }
  }, [address, onboard]);

  // setup onboard.js
  useEffect(() => {
    const init = () => {
      const _onboard = Onboard({
        darkMode: true,
        networkId: 1,
        subscriptions: {
          network: async (networkId) => {
            console.log(`Got networkId from onboard: ${networkId}`);
            dispatch(setNetwork(networkId));
          },
          wallet: async (wallet) => {
            if (wallet.provider) {
              console.log(`Got wallet ${wallet.name}...`);

              dispatch(setWallet(wallet));
              const ethersProvider = new ethers.providers.Web3Provider(
                wallet.provider,
                "any"
              );
              dispatch(setProvider(ethersProvider));
              dispatch(setSigner(ethersProvider.getSigner()));
              // store the selected wallet name to be retrieved next time the app loads
              window.localStorage.setItem("selectedWallet", wallet.name || "");
            } else {
              console.log(`Got undefined wallet from onboard...`);
              dispatch(setWallet(null));
              dispatch(setProvider(null));
              dispatch(setSigner(null));
              window.localStorage.setItem("selectedWallet", "");
            }
          },
          address: (addr) => {
            if (addr) {
              console.log(`Got address from onboard: ${addr}`);
              dispatch(setAddress(ethers.utils.getAddress(addr)));
            } else {
              console.log(`Clearing wallet address`);
              dispatch(setAddress(""));
            }
          },
        },
        walletCheck: [
          { checkName: "derivationPath" },
          { checkName: "accounts" },
          { checkName: "connect" },
          { checkName: "network" },
        ],
        walletSelect: {
          wallets: wallets(rpcUrl),
        },
      });
      dispatch(setOnboard(_onboard));
    };
    // only initialize once
    if (!onboard) {
      init();
    }
  }, [onboard, dispatch]);

  return { address, network, onboard, provider, signer, wallet };
};
