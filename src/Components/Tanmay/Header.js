import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://img.freepik.com/premium-vector/travel-tour-logo-with-mountain-airplane-concept_2175-160.jpg" alt="Swastik Tours" className="logo-img" />
        <span className="tagline">EasyGo Tours</span>
        {/* <span className="tagline">A Memorable Moment of Life</span> */}
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Group Tours </a></li>
          <li><a href="#">Special Tour </a></li>
          <li><a href="#">Hire / Car Bus</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
