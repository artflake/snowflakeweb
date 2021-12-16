import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { unwrapResult } from "@reduxjs/toolkit";
import {useDispatch} from 'redux/hooks';

import { SITE_NAME } from "../../utils/constants";
import validateInput from "../../utils/validations/signup";
import { signupRequest } from "../../redux/reducers/authSlice";

interface State {
  username: string;
  name: string;
  last_name: string;
  email: string;
  password: string;
  confirmationPassword: string;
  country: string;
  tz: string;
  errors: any;
}

export default function Signup() {
  const dispatch = useDispatch();
  
  const [state, setState] = useState<State>({
    username: "",
    name: "",
    last_name: "",
    email: "",
    password: "",
    confirmationPassword: "",
    country: "",
    tz: "",
    errors: {},
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>, name: string): void => {
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  const isValid = (): boolean => {
    const { errors, isValid } = validateInput({
      username: state.username,
      name: state.name,
      last_name: state.last_name,
      email: state.email,
      password: state.password,
      confirmationPassword: state.confirmationPassword,
      country: state.country,
      tz: state.tz
    });

    if (!isValid) setState({ ...state, errors });

    return isValid;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (isValid()) {
      setLoading(true);
      dispatch(signupRequest())
        .then(unwrapResult)
        .then((res) => {
          console.log("Registered");
          setLoading(false);
        })
        .catch((err) => {
          setError("Something went wrong. Try again later.");
          setLoading(false);
        });
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
                {error ? <div className="text-danger">{error}</div> : null}
                <div className="social">
                  <button
                    //@ts-ignore
                    href="#paper-kit"
                    className="btn btn-just-icon btn-facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </button>
                  <button
                    //@ts-ignore
                    href="#paper-kit"
                    className="btn btn-just-icon btn-google"
                  >
                    <i className="fa fa-google"></i>
                  </button>
                  <button
                    //@ts-ignore
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
                    className={classnames("", { "has-error": errors.username })}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      onChange={(e) => onChange(e, "username")}
                      value={state.username}
                    />
                    {errors.username && (
                      <div className="text-danger">{errors.username}</div>
                    )}
                  </div>
                  <div
                    className={classnames("", { "has-error": errors.name })}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      onChange={(e) => onChange(e, "name")}
                      value={state.name}
                    />
                    {errors.name && (
                      <div className="text-danger">{errors.name}</div>
                    )}
                  </div>
                  <div
                    className={classnames("", { "has-error": errors.last_name })}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      onChange={(e) => onChange(e, "last_name")}
                      value={state.last_name}
                    />
                    {errors.last_name && (
                      <div className="text-danger">{errors.last_name}</div>
                    )}
                  </div>
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
                  <div
                    className={classnames("", { "has-error": errors.country })}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      onChange={(e) => onChange(e, "country")}
                      value={state.country}
                    />
                    {errors.country && (
                      <div className="text-danger">{errors.country}</div>
                    )}
                  </div>
                  <div
                    className={classnames("", { "has-error": errors.tz })}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Timezone"
                      onChange={(e) => onChange(e, "tz")}
                      value={state.tz}
                    />
                    {errors.tz && (
                      <div className="text-danger">{errors.tz}</div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-block btn-round" disabled={loading}>
                    {loading ? "Loading..." : "Register"}
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
