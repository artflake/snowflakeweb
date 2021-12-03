import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { SITE_NAME } from "../utils/constants";
import "./Header.css";

export default function Header() {
  const onboard = useSelector((state) => state.web3.onboard);

  const selectWallet = async () => {
    try {
      const selected = await onboard?.walletSelect();
      console.log("selected", selected);
      if (selected) {
        await onboard?.walletCheck();
      }
    } catch {
      console.log("unable to connect to web3");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg nav-down navbar-absolute navbar-transparent">
      <div className="container">
        <div className="navbar-translate">
          <Link
            className="navbar-brand"
            to="/"
            rel="tooltip"
            title={SITE_NAME}
            data-placement="bottom"
          >
            {SITE_NAME}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse"
          data-nav-image="../assets/img/blurred-image-1.jpg"
          data-color="orange"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/auctionhouse">
                Auction House
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tradehouse">
                Trade House
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={selectWallet}
                type="button"
                className="btn btn-neutral btn-link nav-link"
              >
                Metamask
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
