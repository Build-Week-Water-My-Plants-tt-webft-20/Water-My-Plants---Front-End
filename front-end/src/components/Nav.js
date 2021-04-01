import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {

  const logOut = () => {
    localStorage.clear()
  }
  
  return (
    <div className="header">
      <Link to="/" className="title">
          <div className="w">Water</div><div className="m">My</div><div className="p">Plants</div>
      </Link>

      {/* NAV BAR LINKS TO ROUTES */}
      <nav className="nav-links">
        <Link className="nav-link" to="/signup">
          Sign Up
        </Link>

        <Link className="nav-link" to="/login">
          Log In
        </Link>

        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>

        <Link className="nav-link" to="/login" onClick={logOut}>
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default NavigationBar;
