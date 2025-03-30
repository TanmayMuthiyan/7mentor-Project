import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?t=st=1741449873~exp=1741453473~hmac=c48c0b35e737590d3be60ead10c234e4d7ee660bee6eab12bb4d82c54d168b3b&w=1800" alt="Temple" className="banner-image" />
      <div className="info-boxes">
        <div className="info-box">
          <span className="icon">🚌</span>
          <h3>Activity</h3>
          <p>Flight / Train / Car / Bus</p>
        </div>
        <div className="info-box">
          <span className="icon">📍</span>
          <h3>Destinations</h3>
          <p>Domestic Tours / International Tours</p>
        </div>
        <div className="info-box">
          <span className="icon">📱</span>
          <h3>Book Now</h3>
          <p>+91 9768627252</p>
        </div>
      </div>
      <button className="whatsapp-btn">💬 Contact Us</button>
    </div>
  );
};

export default Banner;
