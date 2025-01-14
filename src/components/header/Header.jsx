import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  
  return (
    <header className="header">
      <div className="logo">HI-SOLUTIONS</div>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/aboutUs">About</Link>
        <Link to="/pricing">Services</Link>
        <Link to="/contact">Contact Us</Link>
        <button className="call-button">Book a Call</button>
      </nav>
    </header>
  );
};

export default Header;
