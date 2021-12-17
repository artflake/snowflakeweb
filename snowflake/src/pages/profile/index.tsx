import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import classnames from "classnames";
import validateInput from "../../utils/validations/profile";
import { useDispatch } from "redux/hooks";
import { useNavigate } from "react-router";
import { unwrapResult } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";
import { getUserRequest, updateUserRequest } from "redux/reducers/authSlice";

interface State {
  username: string;
  name: string;
  last_name: string;
  email: string;
  country: string;
  tz: string;
  errors: any;
}

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState<State>({
    username: "",
    name: "",
    last_name: "",
    email: "",
    country: "",
    tz: "",
    errors: {},
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getUserRequest("GeXt"));
  }, [dispatch]);

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
      country: state.country,
      tz: state.tz,
    });

    if (!isValid) setState({ ...state, errors });

    return isValid;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (isValid()) {
      const { errors, ...user } = state;
      setLoading(true);
      dispatch(updateUserRequest(user))
        .then(unwrapResult)
        .then((res) => {
          NotificationManager.success(res.data.message, "Success", 3000);
        })
        .catch((err) => {
          NotificationManager.error(err.message, "Error!", 3000);
          setLoading(false);
        });
    }
  };

  const { errors } = state;
  return (
    <div className="main contact-page">
      <div className="section section-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto">
              <h3 className="text-center mb-3">My Profile</h3>
              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className={classnames("form-group", {
                        "has-error": errors.username,
                      })}
                    >
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        value={state.username}
                        onChange={(e) => onChange(e, "username")}
                      />
                      {errors.username && (
                        <div className="text-danger">{errors.username}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className={classnames("form-group", {
                        "has-error": errors.name,
                      })}
                    >
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={state.name}
                        onChange={(e) => onChange(e, "name")}
                      />
                      {errors.name && (
                        <div className="text-danger">{errors.name}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className={classnames("form-group", {
                        "has-error": errors.last_name,
                      })}
                    >
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={state.last_name}
                        onChange={(e) => onChange(e, "last_name")}
                      />
                      {errors.last_name && (
                        <div className="text-danger">{errors.last_name}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className={classnames("form-group", {
                        "has-error": errors.email,
                      })}
                    >
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        value={state.email}
                        onChange={(e) => onChange(e, "email")}
                      />
                      {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className={classnames("form-group", {
                        "has-error": errors.country,
                      })}
                    >
                      <label>Country</label>
                      <input
                        type="text"
                        className="form-control"
                        value={state.country}
                        onChange={(e) => onChange(e, "country")}
                      />
                      {errors.country && (
                        <div className="text-danger">{errors.country}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className={classnames("form-group", {
                        "has-error": errors.tz,
                      })}
                    >
                      <label>Timezone</label>
                      <input
                        type="text"
                        className="form-control"
                        value={state.tz}
                        onChange={(e) => onChange(e, "tz")}
                      />
                      {errors.tz && (
                        <div className="text-danger">{errors.tz}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-danger mr-1" type="button" disabled={loading} onClick={() => navigate(-1)}>
                    Cancel
                  </button>
                  <button
                    className="btn btn-info"
                    type="submit"
                    disabled={loading}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
