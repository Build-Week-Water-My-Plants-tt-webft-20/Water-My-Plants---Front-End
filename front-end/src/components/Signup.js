import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../components/CSS/SignUp.css";

const Signup = (props) => {
    const [values, setValues] = useState({
        username: "",
        password: "",
        phoneNumber: "",
    });

    const { push } = useHistory();

    const handleChange = (e) => {
        console.log(e.target.name, ":", e.target.value);
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        push("/login");

        axios
            .post("", values)
            .then((res) => {
                console.log(res, "res inside handleSubmit signup form");
            })
            .catch((err) => {
                console.log(err, "error in signing up form ");
            });
    };

return (
    <div className="signup">
      <div className="signup-container">
        <div className="wrap-signup">
          <form className="signup-form">
            <form onSubmit={handleSubmit}>
              <h1 className="signup-header">Get started with us today!</h1>
            <div className="input-container">
              <div className="username-input">
               <input
                className="input"
                type="text"
                name="username"
                placeholder="Enter Your username"
                value={values.username}
                onChange={handleChange}
                />
                <span className="span-input"></span>
               </div>

              <div className="password-input">
               <input
                className="input"
                type="password"
                name="password"
                placeholder="Enter Your password"
                value={values.password}
                onChange={handleChange}
                />
                <span className="spaninput"></span>
              </div>

              <div className="phonenumber-input">
               <input
                className="input"
                type="text"
                name="phoneNumber"
                placeholder="Enter Your Phone Number"
                value={values.phoneNumber}
                onChange={handleChange}
                />
                <span className="spaninput"></span>
              </div>
            </div>
            <div className="btn-container">    
            <button className="signup-form-btn" type="submit">Sign Up</button>
            </div>
            </form>
          </form>
        </div>
      </div>
    </div>
    );
};
