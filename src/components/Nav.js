import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
  };

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        {/* logo of air pollution */}
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/71/Cloud_Logo.png"
          alt="logo"
        />
        <ul className="nav__links">
          <Link style={linkStyle} to="/">
            <li className="nav__link">Home</li>
          </Link>
          <li className="nav__link">About</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
