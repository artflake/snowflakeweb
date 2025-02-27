import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "redux/hooks";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import "./App.css";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgotpassword";
import Auction from "./pages/auction";
import Exchange from "./pages/exchange";
import About from "./pages/about";
import Wallet from "./pages/wallet";
import ResetPassword from "./pages/resetpassword";
import Profile from "./pages/profile";
import User from "./pages/user";
import Art from "./pages/art";
import Faq from "./pages/faq";
import Terms from "pages/terms";
import NotFound from "pages/notfound";
import Activation from "pages/activation";

//Web3
import { useWeb3 } from "./web3/useWeb3";
import { getToken } from "./utils";
import { login } from "./redux/reducers/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    checkLogin(dispatch);
  }, [dispatch]);

  // initialize web3
  useWeb3();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequireNoAuth>
              <Home />
            </RequireNoAuth>
          }
        />
        <Route
          path="login"
          element={
            <RequireNoAuth>
              <Login />
            </RequireNoAuth>
          }
        />
        <Route
          path="signup"
          element={
            <RequireNoAuth>
              <Signup />
            </RequireNoAuth>
          }
        />
        <Route
          path="forgotpassword"
          element={
            <RequireNoAuth>
              <ForgotPassword />
            </RequireNoAuth>
          }
        />
        <Route path="auction" element={<Auction />} />
        <Route path="exchange" element={<Exchange />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Faq />} />
        <Route path="terms" element={<Terms />} />
        <Route
          path="activation"
          element={
            <RequireNoAuth>
              <Activation />
            </RequireNoAuth>
          }
        />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="resetpassword/:token" element={<ResetPassword />} />
        <Route
          path="wallet"
          element={
            <RequireAuth>
              <Wallet />
            </RequireAuth>
          }
        />
        <Route path="/:user/:id" element={<Art />} />
        <Route path="/:id" element={<User />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
      <NotificationContainer />
    </div>
  );
}

function RequireAuth({ children }) {
  let isloggedIn = useSelector(({ login }) => login.loggedIn);
  const location = useLocation();

  if (getToken()) {
    isloggedIn = true;
  }

  if (!isloggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

function RequireNoAuth({ children }) {
  let isloggedIn = useSelector(({ login }) => login.loggedIn);
  const location = useLocation();

  if (getToken()) {
    isloggedIn = true;
  }

  if (isloggedIn) {
    return <Navigate to="/wallet" state={{ from: location }} />;
  }

  return children;
}

function checkLogin(dispatch) {
  const token = getToken();
  if (token) {
    dispatch(login());
  }
}

export default App;
