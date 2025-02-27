import {
  APP_NAME,
  APP_URL,
  CONTACT_EMAIL,
  INFURA_KEY,
} from "../utils/constants";
// all wallets enabled by default, will probably reduce wallets in future
export const wallets = (rpcUrl) => [
  { walletName: "coinbase", preferred: true },
  { walletName: "trust", preferred: true, rpcUrl },
  { walletName: "metamask", preferred: true },
  { walletName: "authereum" },
  {
    walletName: "trezor",
    appUrl: APP_URL,
    email: CONTACT_EMAIL,
    rpcUrl,
  },
  {
    walletName: "ledger",
    rpcUrl,
  },
  // {
  //   walletName: "lattice",
  //   rpcUrl,
  //   appName: APP_NAME,
  // },
  // {
  //   walletName: "keepkey",
  //   rpcUrl,
  // },
  // {
  //   walletName: "cobovault",
  //   rpcUrl,
  //   appName: APP_NAME,
  // },
  // {
  //   walletName: "keystone",
  //   rpcUrl,
  //   appName: APP_NAME,
  // },
  // {
  //   walletName: "fortmatic",
  //   apiKey: FORTMATIC_KEY,
  //   preferred: true,
  // },
  // {
  //   walletName: "portis",
  //   apiKey: PORTIS_KEY,
  //   preferred: true,
  //   label: "Login with Email",
  // },
  {
    walletName: "walletConnect",
    infuraKey: INFURA_KEY,
  },
  { walletName: "opera" },
  { walletName: "operaTouch" },
  // { walletName: "torus" },
  // { walletName: "status" },
  { walletName: "walletLink", rpcUrl, appName: APP_NAME },
  // { walletName: "imToken", rpcUrl },
  // { walletName: "meetone" },
  // { walletName: "mykey", rpcUrl },
  { walletName: "huobiwallet", rpcUrl },
  // { walletName: "hyperpay" },
  { walletName: "wallet.io", rpcUrl },
  // { walletName: "atoken" },
  // { walletName: "frame" },
  // { walletName: "ownbit" },
  { walletName: "alphawallet" },
  { walletName: "gnosis" },
  // { walletName: "xdefi" },
  // { walletName: "bitpie" },
  { walletName: "binance" },
  // { walletName: "liquality" },
];
