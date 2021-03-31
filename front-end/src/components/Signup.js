import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../components/CSS/SignUp.css";

const emptyCredentials = {
  user_username: "",
  user_password: "",
  user_phone_number: "",
}

const Signup = () => {
    const [credentials, setCredentials] = useState(emptyCredentials);

    const { push } = useHistory();

  const handleChange = (e) => {
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

    const handleSubmit = (e) => {
      e.preventDefault();
        axios
            .post("https://water-my-plants-back-end.herokuapp.com/api/auth/register", credentials)
            .then((res) => {
              console.log(res, "res inside handleSubmit signup form");
              push('/login')
            })
            .catch((err) => {
                console.log(err, "error in sign up form ");
            });
    };

return (
    <div className="signup">
      <div className="signup-container">
        <div className="wrap-signup">
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <h1 className="signup-header">Get started with us today!</h1>
            <div className="input-container">
              <div className="username-input">
               <input
                className="input"
                type="text"
                name="user_username"
                placeholder="Enter Your username"
                value={credentials.user_username}
                onChange={handleChange}
                />
                <span className="span-input"></span>
               </div>

              <div className="password-input">
               <input
                className="input"
                type="password"
                name="user_password"
                placeholder="Enter Your password"
                value={credentials.user_password}
                onChange={handleChange}
                />
                <span className="spaninput"></span>
              </div>

              <div className="phonenumber-input">
               <input
                className="input"
                type="text"
                name="user_phone_number"
                placeholder="Enter Your Phone Number"
                value={credentials.user_phone_number}
                onChange={handleChange}
                />
                <span className="spaninput"></span>
              </div>
            </div>
            <div className="btn-container">    
            <button className="signup-form-btn" type="submit">Sign Up</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Signup;