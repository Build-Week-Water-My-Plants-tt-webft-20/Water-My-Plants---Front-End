import "../components/CSS/SignUp.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
// import signupSchema from "../validation/signupSchema";

const initialForm = {
  name: "",
  username: "",
  email: "",
  password: "",
};

const initialFormErrors = {
  name: "",
  username: "",
  email: "",
  password: "",
};

const initialDisabled = true;
// const initialConfirmation = [false];

export default function Signup() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  // const [confirmation, setConfirmation] = useState(initialConfirmation);
  const { push } = useHistory();

  const onChange = (e) => {
    const { name, value } = e.target;
    yup
      .reach(name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postUser(newUser);
  };

  const postUser = (newUser) => {
    axios
      .post("", newUser)
      .then((res) => {
        console.log(res);
        setUsers([...users, newUser]);
        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   signupSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  // }, [formValues]);

  return (
    <body>
      <div className="signup">
        <div className="signup-container">
          <div className="wrap-signup">
            <form className="signup-form">
              <span class="signup-form-title">Sign Up Here</span>
              <div class="firstname-input">
                <input
                  class="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  alue={formValues.name}
                  onChange={onChange}
                />
                <span class="spaninput"></span>
              </div>

              <div class="username-input">
                <input
                  class="input"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formValues.username}
                  onChange={onChange}
                />
                <span class="spaninput"></span>
              </div>

              <div class="email-input">
                <input
                  class="input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={onChange}
                />
                <span class="spaninput"></span>
              </div>

              <div class="password-input">
                <input
                  class="input"
                  type="password"
                  name="pass"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={onChange}
                />
                <span class="spaninput"></span>
              </div>

              <div class="btn-container">
                <button class="signup-form-btn">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
