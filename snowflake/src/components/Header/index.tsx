import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "redux/hooks";

import { SITE_NAME } from "../../utils/constants";
import "./Header.css";
import { logout } from "../../redux/reducers/authSlice";
import { removeToken } from "../../utils";

export default function Header() {
  const isloggedIn = useSelector(({ login }) => login.loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [nav, setNav] = useState("navbar-transparent");

  useEffect(() => {
    if (
      ["/wallet", "/contact", "/profile", "/user/", "/art/", "/blogs", "/auction"].includes(
        location.pathname
      ) || location.pathname.includes("/user/") || location.pathname.includes("/art/") 
    ) {
      setNav("");
    } else {
      setNav("navbar-transparent");
    }
  }, [location]);

  const logOut = (e) => {
    e.preventDefault();

    removeToken();
    dispatch(logout());
    navigate("/login");
  };

  if (["/404", "/activation"].includes(location.pathname)) {
    return null;
  }

  return (
    <nav className={`navbar navbar-expand-lg nav-down navbar-absolute ${nav}`}>
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
          {/* <button
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
          </button> */}
        </div>
        <div
          className="collapse navbar-collapse"
          data-nav-image="../assets/img/blurred-image-1.jpg"
          data-color="orange"
        >
          {/* <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/auction">
                Auction
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/exchange">
                Exchange
              </Link>
            </li>

            {!isloggedIn ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Create Account
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Account
                  </Link>
                </li>
                <li className="nav-item">
                  <a onClick={logOut} className="nav-link" href="/">
                    Logout
                  </a>
                </li>
              </>
            )}
          </ul> */}
        </div>
      </div>
    </nav>
  );
}
