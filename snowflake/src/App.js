import React, {useEffect} from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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

//Web3
import { useWeb3 } from "./web3/useWeb3";
import { getToken } from "./utils";
import { login } from "./redux/reducers/loginSlice";

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
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="auction" element={<Auction />} />
        <Route path="exchange" element={<Exchange />} />
        <Route path="about" element={<About />} />
        <Route
          path="protected"
          element={
            <RequireAuth>
              <p>Protected route</p>
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

function RequireAuth({ children }) {
  const isloggedIn = useSelector(({ login }) => login.loggedIn);
  const location = useLocation();

  if (!isloggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
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
