import "./polyfills";
import "@reach/dialog/styles.css";
import "inter-ui";

import React from "react";

// import { Providers, App, serviceWorkerRegistration } from "@uniswap/interface";

if (!!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}
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
