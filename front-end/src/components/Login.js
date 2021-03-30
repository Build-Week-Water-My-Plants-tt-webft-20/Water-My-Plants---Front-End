import React, { useState } from "react";
import axios from "axios";
import "../components/CSS/Login.css";

const emptyCredentials = {
  username: "",
  password: "",
};

export default function Login(props) {
  const [credentials, setCredentials] = useState(emptyCredentials);

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data);
      })
      .then(() => {
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="wrap-login">
          <form className="login-form">
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
                name="pass"
                placeholder="Password"
                value={credentials.password}
                onChange={onChange}
              />
              <span className="spaninput"></span>
            </div>

            <div className="text-right">
              <span className="txt1">Forgot</span>

              <a href="#" className="txt2">
                Username / Password?
              </a>
            </div>

            <div className="btn-container">
              <button className="login-form-btn">Sign in</button>
            </div>

            <div className="bottom">
              <span className="txt1">Don’t have an account?</span>

              <a href="#" className="txt3">
                Sign up now
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
