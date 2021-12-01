import React from "react";
import { useSelector } from "react-redux";

export default function Login() {
  const isloggedIn = useSelector(({ login }) => login.loggedIn);

  return (
    <div>
      {!isloggedIn ? <p>Login Page</p> : <p>You are logged in already.</p>}
    </div>
  );
}
