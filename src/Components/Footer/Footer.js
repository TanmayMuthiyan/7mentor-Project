import "./footer.css";
// import {FiSend} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      {/* background video */}
      <video autoPlay loop muted className="footer-video">
        <source src="/footervideo.mp4" type="video/mp4" />
      </video>

      {/* top Section */}
      <div className="footer-top">
        <h2>Travel with us</h2>
        <input
          type="email"
          placeholder="Enter Email Address"
          className="email-input"
        />
        <button className="send-button">Send ✈️</button>
      </div>

      {/* main footer content */}
      <div className="footer-content">
        {/* about section */}
        <div className="footer-about">
          <h3>🌍 Travel.</h3>
          <p>
            "Discover amazing places with us! Explore the world, plan your trip,
            and enjoy the best travel experience."
          </p>

          <div className="contact-section">
            <h4>CONNECT WITH US</h4>
            <ul>
              <li> Location: Belgaum, India</li>
              <li> Email: travel@agency.com</li>
              <li> Phone: +91 98765 43210</li>
            </ul>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h4>Our Agency</h4>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Insurance</a>
              </li>
              <li>
                <a href="#">Agency</a>
              </li>
              <li>
                <a href="#">Tourism</a>
              </li>
              <li>
                <a href="#">Payment</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Partners</h4>
            <ul>
              <li>
                <a href="#">Booking</a>
              </li>
              <li>
                <a href="#">RentalCar</a>
              </li>
              <li>
                <a href="#">HostelWorld</a>
              </li>
              <li>
                <a href="#">Trivago</a>
              </li>
              <li>
                <a href="#">TripAdvisor</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Last Minute</h4>
            <ul>
              <li>
                <a href="#">London</a>
              </li>
              <li>
                <a href="#">California</a>
              </li>
              <li>
                <a href="#">Indonesia</a>
              </li>
              <li>
                <a href="#">Europe</a>
              </li>
              <li>
                <a href="#">Oceania</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
