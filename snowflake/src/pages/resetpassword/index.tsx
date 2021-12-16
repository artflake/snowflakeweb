import React, { FormEvent, useState } from "react";
import classnames from "classnames";
import { useDispatch } from "redux/hooks";
import { unwrapResult } from "@reduxjs/toolkit";

import { SITE_NAME } from "../../utils/constants";
import validateInput from "../../utils/validations/resetpassword";
import { resetPasswordRequest } from "redux/reducers/authSlice";

interface State {
  password: string;
  confirmationPassword: string;
  errors: any;
}

export default function ResetPassword() {
  const dispatch = useDispatch();

  const [state, setState] = useState<State>({
    password: "",
    confirmationPassword: "",
    errors: {},
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ): void => {
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  const isValid = (): boolean => {
    const { errors, isValid } = validateInput({
      password: state.password,
      confirmationPassword: state.confirmationPassword,
    });

    if (!isValid) setState({ ...state, errors });

    return isValid;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (isValid()) {
      setLoading(true);
      dispatch(resetPasswordRequest())
        .then(unwrapResult)
        .then((res) => {
          console.log("submitted successfully");
          setState({
            ...state,
            password: "",
            confirmationPassword: "",
            errors: {}
          });
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
                <h3 className="card-title">Reset your password</h3>
                {error ? <div>{error}</div> : null}
                <form className="register-form" onSubmit={onSubmit}>
                  <div
                    className={classnames("", { "has-error": errors.password })}
                  >
                    <label>New Password</label>
                    <input
                      className="form-control no-border"
                      placeholder="New Password"
                      type="password"
                      onChange={(e) => onChange(e, "password")}
                      value={state.password}
                    />
                    {errors.password && (
                      <div className="text-danger">{errors.password}</div>
                    )}
                  </div>
                  <div
                    className={classnames("", { "has-error": errors.email })}
                  >
                    <label>Confirm New Password</label>
                    <input
                      className="form-control no-border"
                      placeholder="Confirm New Password"
                      type="password"
                      onChange={(e) => onChange(e, "confirmationPassword")}
                      value={state.confirmationPassword}
                    />
                    {errors.confirmationPassword && (
                      <div className="text-danger">
                        {errors.confirmationPassword}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-danger btn-block btn-round"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Reset"}
                  </button>
                </form>
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
