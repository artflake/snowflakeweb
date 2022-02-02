import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "redux/hooks";
import classnames from "classnames";
import { unwrapResult } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";

import { SITE_NAME } from "../../utils/constants";
import { loginRequest } from "../../redux/reducers/authSlice";
import { setToken } from "../../utils";
import validateInput from "../../utils/validations/login";

interface State {
  email: string;
  password: string;
  errors: any;
}

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location: any = useLocation();
  const onboard = useSelector((state) => state.web3.onboard);

  const [state, setState] = useState<State>({
    email: "",
    password: "",
    errors: {},
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (location && location.state && location.state.message) {
      NotificationManager.success(location.state.message, "Success", 3000);
      navigate("/login", { state: {} });
    }
  }, [location, navigate]);

  const onChange = (e: ChangeEvent<HTMLInputElement>, name: string): void => {
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  const selectWallet = async (e) => {
    e.preventDefault();

    try {
      const selected = await onboard?.walletSelect();
      if (selected) {
        await onboard?.walletCheck();
      }
    } catch {
      console.log("unable to connect to web3");
    }
  };

  const isValid = (): boolean => {
    const { errors, isValid } = validateInput({
      email: state.email,
      password: state.password,
    });

    if (!isValid) setState({ ...state, errors });

    return isValid;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (isValid()) {
      setLoading(true);
      dispatch(
        loginRequest({
          email: state.email,
          password: state.password,
        })
      )
        .then(unwrapResult)
        .then((res) => {
          setToken(res.data.data);
          navigate("/wallet");
        })
        .catch((err) => {
          NotificationManager.error(err.message, "Error!", 3000);
          setLoading(false);
        });
    }
  };

  const { errors } = state;
  return (
    <div className="wrapper full-screen login-page">
      <div
        className="page-header"
        style={{
          backgroundImage: "url(../assets/img/sections/bruno-abatti.jpg)",
        }}
      >
        <div className="filter"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto">
              <div className="card card-register">
                <h3 className="card-title">Welcome</h3>
                <form className="register-form" onSubmit={onSubmit}>
                  <div
                    className={classnames("", { "has-error": errors.email })}
                  >
                    <label>Email</label>
                    <input
                      className="form-control no-border"
                      placeholder="Email"
                      onChange={(e) => onChange(e, "email")}
                      value={state.email}
                    />
                    {errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>
                  <div
                    className={classnames("", { "has-error": errors.email })}
                  >
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control no-border"
                      placeholder="Password"
                      onChange={(e) => onChange(e, "password")}
                      value={state.password}
                    />
                    {errors.password && (
                      <div className="text-danger">{errors.password}</div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-danger btn-block btn-round"
                  >
                    {loading ? "Loading..." : "Login"}
                  </button>
                  <div className="text-center my-3">Or</div>
                  <button
                    type="button"
                    className="btn btn-danger btn-block btn-round"
                    onClick={selectWallet}
                  >
                    Login with metamask
                  </button>
                </form>
                <div className="forgot">
                  <Link
                    to="/forgotpassword"
                    className="btn btn-link btn-danger"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="demo-footer text-center">
            <h6>
              &copy; <script>document.write(new Date().getFullYear())</script>,
              made with <i className="fa fa-heart heart"></i> by {SITE_NAME}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
