import React, { useState } from "react";
// import {useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import { LogIn } from '../actions'
import "../components/CSS/Login.css";

const emptyCredentials = {
  user_username: "",
  user_password: "",
};

const Login = ({errors}) => {
  const [credentials, setCredentials] = useState(emptyCredentials);
  // const { push } = useHistory();

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    LogIn(credentials)
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="wrap-login">
          <form className="login-form" onSubmit={onSubmit}>
            <span className="login-form-title">Log In:</span>

            <div className="username-input">
              <input
                className="input"
                type="text"
                name="user_username"
                placeholder="Username"
                value={credentials.user_username}
                onChange={onChange}
              />
              <span className="spaninput"></span>
            </div>

            <div className="password-input">
              <input
                className="input"
                type="password"
                name="user_password"
                placeholder="Password"
                value={credentials.user_password}
                onChange={onChange}
              />
              <br></br>
            </div>


            <div className="btn-container">
              <button type="submit" className="login-form-btn">Log In</button>
            </div>

            <div className="errors">
              <p className="error">{ errors }</p>
            </div>


            <div className="bottom">
              <span className="txt1">Don’t have an account?</span>

              <Link to="/signup" className="txt3">
                Sign Up now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    errors: state.errors
  })
}

export default connect(mapStateToProps, {LogIn})(Login)