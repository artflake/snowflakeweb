import "./polyfills";
import "@reach/dialog/styles.css";
import "inter-ui";
import * as Interface from "@uniswap/interface";

import React from "react";

// const Interface = require("@uniswap/interface");
// import Interface, {
//   Providers,
//   App,
//   serviceWorkerRegistration,
// } from "@uniswap/interface";

console.log("Interface", Interface);
// if (!!window.ethereum) {
//   window.ethereum.autoRefreshOnNetworkChange = false;
// }
export default function Exchange() {
  return (
    // <Providers>
    //   <App />
    // </Providers>
    <div>exchange</div>
  );
}

// if (process.env.REACT_APP_SERVICE_WORKER !== "false") {
//   serviceWorkerRegistration.register();
// }
