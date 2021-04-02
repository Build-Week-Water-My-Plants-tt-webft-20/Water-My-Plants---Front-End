import React, { useState } from "react";
import axios from "axios";
import { connect } from 'react-redux'
import {setUser} from '../actions'
import {useHistory} from 'react-router-dom'
import "../components/CSS/Login.css";

const emptyCredentials = {
  user_username: "",
  user_password: "",
};
const initialError = ""

const  Login = ({setUser, token, user_username}) => {
  const [credentials, setCredentials] = useState(emptyCredentials);
  const [error, setError] = useState(initialError)
  const { push } = useHistory();
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
        localStorage.setItem('token', res.data.token)
        setUser(res.data)
        
        // Console log to see the shape of the returned data
        // console.log(res.data)
      })
      .then(() => {
        push("/dashboard");
      })

      .catch((err) => {
        console.log(err.response.data.message)
        setError(err.response.data.message)
        push("/login");
      });

  };

  return (
    <div className="login">
      {token
        ? <h1 className="welcome">Welcome {user_username} !</h1>
        : <div className="login-container">
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
      </div>}
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    token: state.token,
    user_username: state.user_username
  })
}
export default connect(mapStateToProps, {setUser})(Login)