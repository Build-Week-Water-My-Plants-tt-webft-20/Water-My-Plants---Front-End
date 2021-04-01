import React, { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import "../components/CSS/Login.css";

const emptyCredentials = {
  user_username: "",
  user_password: "",
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

    axios
      .post("https://water-my-plants-back-end.herokuapp.com/api/auth/login", credentials)
      .then((res) => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
      })
      .then(() => {
        props.history.push("/dashboard");
      })
      .catch((err) => console.log(err));

  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="wrap-login">
          <form className="login-form" onSubmit={login}>
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
