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
    <body>
      <div class="login">
        <div class="login-container">
          <div class="wrap-login">
            <form class="login-form">
              <span class="login-form-title">Sign In</span>

              <div class="username-input">
                <input
                  class="input"
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={onChange}
                  placeholder="Username"
                />
                <span class="spaninput"></span>
              </div>

              <div class="password-input">
                <input
                  class="input"
                  type="password"
                  name="pass"
                  value={credentials.password}
                  onChange={onChange}
                  placeholder="Password"
                />
                <span class="spaninput"></span>
              </div>

              <div class="text-right">
                <span class="txt1">Forgot</span>

                <a href="#" class="txt2">
                  Username / Password?
                </a>
              </div>

              <div class="btn-container">
                <button class="login-form-btn">Sign in</button>
              </div>

              <div class="bottom">
                <span class="txt1">Don’t have an account?</span>

                <a href="#" class="txt3">
                  Sign up now
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
