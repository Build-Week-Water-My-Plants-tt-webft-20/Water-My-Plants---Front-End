import React, { useState, useEffect } from "react";
import * as yup from "yup";
import "../components/CSS/SignUp.css";
import {useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import { signUp } from '../actions'

const emptyCredentials = {
  user_username: "",
  user_password: "",
  user_phone_number: "",
}

const initialErrors = {
  user_username: "", 
  user_password: "",
  user_phone_number: "",
}

const RegExpress = /^[/+]?[(]?[0-9]{3}[)]?[-\s/.]?[0-9]{3}[-\s/.]?[0-9]{4,6}$/;

const Signup = ({signUp}) => {
  const [credentials, setCredentials] = useState(emptyCredentials);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errors, setErrors] = useState(initialErrors);
  const { push } = useHistory()

  const schema = yup.object().shape({
    user_username: yup.string().required("Name is a required field!"),
    user_password: yup.string().required("Password is required!"),
    user_phone_number: yup.string().matches(RegExpress, 'Phone number is not valid!'),
  });

  useEffect(() => {
    schema.isValid(credentials).then((isStateValid) => {
      setButtonDisabled(!isStateValid); 
    });
  }, [schema, credentials]);
    
  const handleChange = (e) => {
    yup
    .reach(schema, e.target.name)
    .validate(e.target.value) 
    .then(() => {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    })
    .catch((err) => {
      setErrors({
        ...errors,
        [e.target.name]: err.errors[0],
      });
    });
  };

  const inputChange = (e) => {
    let value = e.target.value
    setCredentials({
      ...credentials,
      [e.target.name]: value,
    });
    handleChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(credentials)
    push('/login')
  }

return (
    <div className="signup">
      <div className="signup-container">
        <div className="wrap-signup">
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <h1 className="signup-header">Get started with us today!</h1>
            <div className="input-container">

            <label htmlFor="user_name">
              <div className="username-input">
               <input
                className="input"
                type="text"
                name="user_username"
                placeholder="Create a Username"
                value={credentials.user_username}
                id="username"
                onChange={inputChange}
  
                />
                <p className="error">{errors.user_username}</p>
                <span className="span-input"></span>
              </div>
            </label>

            <label htmlFor="user_password">
              <div className="password-input">
               <input
                className="input"
                type="password"
                name="user_password"
                placeholder="Create a Password"
                value={credentials.user_password}
                onChange={inputChange}
  
                />
                 <p className="error">{errors.user_password}</p>
                <span className="spaninput"></span>
              </div>
            </label>

            <label htmlFor="user_phone_number">
              <div className="phonenumber-input">
               <input
                className="input"
                type="text"
                name="user_phone_number"
                placeholder="Mobile phone number"
                value={credentials.user_phone_number}
                onChange={inputChange}
                  />
                  
                <p className="error">{errors.user_phone_number}</p>
                <span className="spaninput"></span>
              </div>
            </label>

            <div className="btn-container">    
            <button className="signup-form-btn" type="submit" disabled={buttonDisabled}>Sign Up</button>
            </div>

            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
}

export default connect(null, {signUp})(Signup)