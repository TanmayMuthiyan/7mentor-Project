import React from 'react';
import './TourSection.css';

const TourSection = () => {
  return (
    <div className="tour-section">
      <div className="content">
        <h5 className="sub-title">Take A Tour</h5>
        <h2 className="main-title">Tours And Travels In Mumbai</h2>
        <p className="description">
          Welcome to Swastik tours. We are a reputed travel and tourism company offering our valued clients customized packages, tailored to their specific requirements. Our company offers you a complete spectrum of travel options, be it for a holiday, getaway or a package for your honeymoon. We assure to offer you the best tour package to make your trip a memorable one and ensure you get a holiday that you best deserve.
        </p>
      </div>

      <div className="images">
        <div className="image-container image1">
          <img src="https://img.freepik.com/free-vector/travel-landmarks-background_1284-13909.jpg?t=st=1741694703~exp=1741698303~hmac=dd8da2b88b059f8a37ad6f8f99db274565126ee58d9fd197a338908a3c437a7d&w=900" alt="Beach View" />
        </div>
        <div className="image-container image2">
          <img src="https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?t=st=1741694803~exp=1741698403~hmac=7dd7e5cd815cc92b778c09b2c20ea10ec8ec3cc8b185455e10a889dfd2e8018c&w=1380" alt="Mountain View" />
        </div>
      </div>
    </div>
  );
};

export default TourSection;