import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import "../components/CSS/SignUp.css";

export default function Signup() { 

    const [state, setState] = useState({
        name: "",
        password: "",
        phoneNumber: "",
    });

    const [users, setUsers] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", state)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log("error!"));
  };

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
    const newData = {
      ...state,
      [e.target.name]:
        e.target.name === ""
          ? e.target.checked
          : e.target.value,
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
          <form className="signup-form">
            <form onSubmit={handleSubmit}>
              <h1 className="signup-header">Get started with us today!</h1>
            <div className="input-container">

            <label htmlFor="name">
              <div className="username-input">
               <input
                className="input"
                type="text"
                id="username"
                name="name"
                placeholder="Enter Your username"
                value={state.name}
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
                name="password"
                placeholder="Enter Your password"
                value={state.password}
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
                name="phoneNumber"
                placeholder="Enter a phone number"
                value={state.phoneNumber}
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
          </form>
        </div>
      </div>
    </div>
    );
}
