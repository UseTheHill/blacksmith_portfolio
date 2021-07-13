import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <link to="/" className="navbar-logo">
            Blacksmith
          </link>
          <div className="menu-icon"></div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
