import React, { useState } from "react";
import classnames from "classnames";

import { SITE_NAME } from "../../utils/constants";
import validateInput from "../../utils/validations/forgotpassword";

interface State {
  email: string;
  errors: any;
}

export default function ForgotPassword() {
  const [state, setState] = useState<State>({
    email: "",
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
    });

    if (!isValid) setState({ ...state, errors });

    return isValid;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      console.log(state);
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
                  <button
                    type="submit"
                    className="btn btn-danger btn-block btn-round"
                  >
                    Reset
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
