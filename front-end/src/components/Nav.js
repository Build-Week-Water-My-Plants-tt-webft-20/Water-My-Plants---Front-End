import React from "react";
import { Link, useHistory } from "react-router-dom";

const NavigationBar = () => {
  const { push } = useHistory();

  //   signout button that pushes back to home component
  const signOut = () => {
    window.localStorage.removeItem("token");
    push("/home");
  };

  return (
    <div className="header">
      <Link to="/" className="title">
        Water My Plant App
      </Link>

      {/* NAV BAR LINKS TO ROUTES */}
      <nav className="nav-links">
        <Link className="nav-link" to="/signup">
          Signup
        </Link>

        <Link className="nav-link" to="/login">
          Login
        </Link>

        <Link className="nav-link" to="/dashboard">
          Plant List
        </Link>

        <Link className="nav-link" to="/plant-form">
          Add Your Plant
        </Link>

        <Link className="nav-link" to="/about">
          About Team
        </Link>

        <Link className="nav-link" to="/signout" onClick={signOut}>
          Sign out
        </Link>
      </nav>
    </div>
  );
};

export default NavigationBar;
