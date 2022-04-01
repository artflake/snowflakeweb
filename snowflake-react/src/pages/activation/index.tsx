import React, {useEffect} from "react";
import { useQuery } from "hooks/useQuery";
import { Link } from "react-router-dom";
import "./activation.css";
import { useDispatch } from "redux/hooks";
import { activateAccountRequest } from "redux/reducers/authSlice";

export default function Activation() {
  const query = useQuery();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(activateAccountRequest(query.get('token') || ''));
  }, [dispatch, query])

  return (
    <div className="error-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div className="error-text">
              <h1 className="error">Congratulations!</h1>
              <h4>Your account has been successfully activated.</h4>
              <p className="not-exist">
                Sign in to your account with your credentials.
              </p>
              <Link to="/login" className="btn btn-primary btn-round mr-2">
                Go to login page
              </Link>
              <Link to="/" className="btn btn-primary btn-round">
                Go to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
