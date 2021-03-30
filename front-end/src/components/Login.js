import React, { useState } from "react";
// import axios from "axios";
import {useHistory} from 'react-router-dom'
import "../components/CSS/Login.css";

const emptyCredentials = {
  username: "",
  password: "",
};

export default function Login(props) {
  const [credentials, setCredentials] = useState(emptyCredentials);
  const history = useHistory();

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();

    // Setting test token to display private routes
    localStorage.setItem("token", "test-token");

    // axios
    //   .post("", credentials)
    //   .then((res) => {
    //     localStorage.setItem("token", res.data);
    //   })
    //   .then(() => {
    //     props.history.push("/");
    //   })
    //   .catch((err) => console.log(err));

    history.push('/dashboard')
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="wrap-login">
          <form className="login-form" onSubmit={login}>
            <span className="login-form-title">Sign In</span>

            <div className="username-input">
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Username"
                value={credentials.username}
                onChange={onChange}
              />
              <span className="spaninput"></span>
            </div>

            <div className="password-input">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={onChange}
              />
              <br></br>
            </div>


            <div className="btn-container">
              <button type="submit" className="login-form-btn">Sign in</button>
            </div>

            <div className="bottom">
              <span className="txt1">Don’t have an account?</span>

              <a href="/signup" className="txt3">
                Sign up now
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
