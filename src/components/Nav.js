import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillSetting, AiOutlineAudio, AiOutlineLeft } from 'react-icons/ai';
import './Nav.css';

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
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
  };

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        {/* logo of air pollution */}
        <h1 className="nav__logo">
          <Link to="/" style={linkStyle}>
            <AiOutlineLeft />
          </Link>
        </h1>
        <ul className="nav__links">
          {/* <Link style={linkStyle} to="/"> */}
          <li className="nav__link">
            <AiOutlineAudio className="nav__icon" />
          </li>

          {/* </Link> */}
          <li className="nav__link">
            <AiFillSetting className="nav__icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
