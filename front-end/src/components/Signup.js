import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import "../components/CSS/SignUp.css";

const emptyCredentials = {
  user_username: "",
  user_password: "",
  user_phone_number: "",
}

const Signup = () => {
    const [credentials, setCredentials] = useState(emptyCredentials);

  const handleChange = (e) => 

    const handleSubmit = (e) => {
      e.preventDefault();
        axios
            .post("", credentials)
            .then((res) => {
              console.log(res, "res inside handleSubmit signup form");
              push('/login')
            })
            .catch((err) => {
                console.log(err, "error in sign up form ");
            });
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
    e.persist();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value  
    });

    // Parsing phone number to integer after final change and before submit
    setCredentials({
      ...credentials,
      user_phone_number: parseInt(credentials.user_phone_number)
    })
    };
    handleChange(e);
    setState(newData);
  };

  const [buttonDisabled, setButtonDisabled] = useState();

  const [errors, setErrors] = useState({
    name: "", 
    password: "",
    phoneNumber: "",
  });

  const RegExpress = /^[/+]?[(]?[0-9]{3}[)]?[-\s/.]?[0-9]{3}[-\s/.]?[0-9]{4,6}$/;

  const schema = yup.object().shape({
    name: yup.string().required("Name is a required field."),
    password: yup.string().required("Password is required!"),
    phoneNumber: yup.string().matches(RegExpress, 'Phone number is not valid'),
  });

  useEffect(() => {
    schema.isValid(state).then((isStateValid) => {
      setButtonDisabled(!isStateValid); 
    });
  }, [schema, state]);

return (
    <div className="signup">
      <div className="signup-container">
        <div className="wrap-signup">
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <h1 className="signup-header">Get started with us today!</h1>
            <div className="input-container">

            <label htmlFor="name">
              <div className="username-input">
               <input
                className="input"
                type="text"
  
                name="user_username"
                placeholder="Enter Your username"
                value={credentials.user_username}
                id="username"
                onChange={inputChange}
  
                />
                {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
                <span className="span-input"></span>
              </div>
            </label>

            <label htmlFor="password">
              <div className="password-input">
               <input
                className="input"
                type="password"
                name="user_password"
                placeholder="Enter Your password"
  
                value={credentials.user_password}
                onChange={inputChange}
  
                />
                 {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
                <span className="spaninput"></span>
              </div>
            </label>

            <label htmlFor="phoneNumber">
              <div className="phonenumber-input">
               <input
                className="input"
                type="text"
  
                name="user_phone_number"
                placeholder="Enter Your Phone Number"
                value={credentials.user_phone_number}
                onChange={inputChange}
  
                />
                {errors.phoneNumber.length > 0 ? <p className="error">{errors.phoneNumber}</p> : null}
                <span className="spaninput"></span>
              </div>
            </label>

            <div className="btn-container">    
            <button className="signup-form-btn" type="submit" disabled={buttonDisabled}>Sign Up</button>
            <pre>{JSON.stringify(users, null, 2)}</pre>
            </div>

            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
}
