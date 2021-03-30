import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
    const [values, setValues] = useState({
        username: "",
        password: "",
        phonenumber: "",
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
    <div>
        <h1 className="signup-header">
        Get started with us Today Create Your account
        </h1>
        <div className="signup-container">
    <form onSubmit={handleSubmit}>
        Username:
        <div className="form-inputs">
            <input
                    type="text"
                    name="username"
                    placeholder="Enter Your username"
                    value={values.username}
                    onChange={handleChange}
                />
        </div>
        Password:
        <div className="form-inputs">
                <input
                    type="text"
                    name="password"
                    placeholder="Enter Your password"
                    value={values.password}
                    onChange={handleChange}
                />
        </div>
        Phone Number:
        <div className="form-inputs">
            <input
                    type="text"
                    name="phonenumber"
                    placeholder="Enter Your Phone Number"
                    value={values.phonenumber}
                    onChange={handleChange}
                />
        </div>    
        <button className="form-input-btn" type="submit">
        Sign Up
        </button>
    </form>
        </div>
    </div>
    );
};

export default Signup;