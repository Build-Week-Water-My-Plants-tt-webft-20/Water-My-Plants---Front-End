import React, { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import { login } from '../actions'
import "../components/CSS/Login.css";

const emptyCredentials = {
  user_username: "",
  user_password: "",
};

const initialError = ""

const Login = (props) => {
  const [credentials, setCredentials] = useState(emptyCredentials);
  const [error, setError] = useState(initialError)
  const { push } = useHistory();

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(credentials)
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
              <p className="error">{ error }</p>
            </div>


            <div className="bottom">
              <span className="txt1">Don’t have an account?</span>

              <a href="/signup" className="txt3">
                Sign Up now
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default connect(null, {login})(Login)