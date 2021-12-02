import React from "react";
import { Link } from "react-router-dom";

import { SITE_NAME } from "../utils/constants";

export default function Header() {
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
