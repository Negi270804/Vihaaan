import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import LOGO_URL from '../assets/logo.png'; // Assuming you have a logo file

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={LOGO_URL} alt="Logo" />
        </div>
        <div className="navbar-links">
          <ul>
            <li><Link to="/"><button className="nav-button">Home</button></Link></li>
            <li><Link to="/login"><button className="nav-button">Login</button></Link></li>
            <li><Link to="/about"><button className="nav-button">About</button></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

