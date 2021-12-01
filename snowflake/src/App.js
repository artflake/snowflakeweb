import * as React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
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

export default App;
