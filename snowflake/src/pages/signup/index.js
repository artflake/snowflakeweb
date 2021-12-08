import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import { SITE_NAME } from "../../utils/constants";
import { registerAPI } from "../../redux/apis/login";
import validateInput from "../../utils/validations/signup";

export default function Signup() {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
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
      confirmationPassword: state.confirmationPassword
    });

    if (!isValid) setState({ ...state, errors });

    return isValid;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      console.log(state);
      registerAPI();
    }
  };

  const { errors } = state;

  return (
    <div className="wrapper full-screen register-page">
      <div
        className="page-header"
        style={{
          backgroundImage: "url(../assets/img/sections/soroush-karimi.jpg)",
        }}
      >
        <div className="filter"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-7 col-12 ml-auto">
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="fa fa-umbrella"></i>
                </div>
                <div className="description">
                  <h3> We've got you covered </h3>
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient. Everything you need in a single
                    case.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="fa fa-map-signs"></i>
                </div>
                <div className="description">
                  <h3> Clear Directions </h3>
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="fa fa-user-secret"></i>
                </div>
                <div className="description">
                  <h3> We value your privacy </h3>
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-5 col-12 mr-auto">
              <div className="card card-register">
                <h3 className="card-title text-center">Register</h3>
                <div className="social">
                  <button
                    href="#paper-kit"
                    className="btn btn-just-icon btn-facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </button>
                  <button
                    href="#paper-kit"
                    className="btn btn-just-icon btn-google"
                  >
                    <i className="fa fa-google"></i>
                  </button>
                  <button
                    href="#paper-kit"
                    className="btn btn-just-icon btn-twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </button>
                </div>
                <div className="division">
                  <div className="line l"></div>
                  <span>or</span>
                  <div className="line r"></div>
                </div>
                <form className="register-form" onSubmit={onSubmit}>
                  <div
                    className={classnames("", { "has-error": errors.email })}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      onChange={(e) => onChange(e, "email")}
                      value={state.email}
                    />
                    {errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>
                  <div
                    className={classnames("", { "has-error": errors.password })}
                  >
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e) => onChange(e, "password")}
                      value={state.password}
                    />
                    {errors.password && (
                      <div className="text-danger">{errors.password}</div>
                    )}
                  </div>
                  <div
                    className={classnames("", {
                      "has-error": errors.confirmationPassword,
                    })}
                  >
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      onChange={(e) => onChange(e, "confirmationPassword")}
                      value={state.confirmationPassword}
                    />
                    {errors.confirmationPassword && (
                      <div className="text-danger">
                        {errors.confirmationPassword}
                      </div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-block btn-round">
                    Register
                  </button>
                </form>
                <div className="login">
                  <p>
                    Already have an account? <Link to="/login">Log in</Link>.
                  </p>
                </div>
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
  );
}
