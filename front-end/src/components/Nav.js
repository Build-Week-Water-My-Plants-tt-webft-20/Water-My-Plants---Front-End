import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        WaterMyPlants
      </Link>

      {/* NAV BAR LINKS TO ROUTES */}
      <nav className="nav-links">
        <Link className="nav-link" to="/signup">
          Sign Up
        </Link>

        <Link className="nav-link" to="/login">
          Login
        </Link>

        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      </nav>
    </div>
  );
};

export default NavigationBar;
