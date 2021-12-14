import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "redux/hooks";
import classnames from "classnames";

import { SITE_NAME } from "../../utils/constants";
import { login } from "../../redux/reducers/loginSlice";
import { setToken } from "../../utils";
import { loginAPI } from "../../redux/apis/login";
import validateInput from "../../utils/validations/login";

interface State {
  email: string;
  password: string;
  errors: any;
}

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState<State>({
    email: "",
    password: "",
    errors: {},
  });

  const onChange = (e, name) => {
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  const isValid = () => {
    const { errors, isValid } = validateInput({
      email: state.email,
      password: state.password,
    });

    if (!isValid) setState({ ...state, errors });

    return isValid;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      loginAPI().then(() => {
        dispatch(login());
        setToken("asgfk234asowqhjkeur789edkl");
      });
      dispatch(login());
      setToken("asgfk234asowqhjkeur789edkl");
      navigate("/wallet");
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
                    className="btn btn-danger btn-block btn-round"
                  >
                    Login
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
