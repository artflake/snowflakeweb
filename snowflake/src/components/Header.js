import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { login, logout } from "../redux/actions/login";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isloggedIn = useSelector(({ login }) => login.loggedIn);
  const dispatch = useDispatch();

  const from =
    (location.state && location.state.from && location.state.from.pathname) ||
    "/";

  return (
    <div>
      {!isloggedIn ? (
        <button
          onClick={() => {
            dispatch(login());
            navigate(from, { replace: true });
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}
