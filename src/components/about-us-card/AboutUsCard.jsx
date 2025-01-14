import React from "react";
import "./AboutUsCard.css";

const AboutUsCard = () => {
  return (
    <div className="about-us-card">
      <h4 className="about-us-heading">About Us</h4>
      <p className="about-us-description">
        We are dedicated to delivering innovative solutions that drive success and build long-lasting relationships with our clients.
      </p>
      <div className="about-us-row">
        <div className="about-us-column">
          <div className="icon-container">
            <i className="fas fa-eye"></i> {/* Vision Icon */}
          </div>
          <h5>Our Vision</h5>
          <p>
            To be the most trusted partner for innovative and impactful solutions.
          </p>
        </div>
        <div className="about-us-column">
          <div className="icon-container">
            <i className="fas fa-bullseye"></i> {/* Mission Icon */}
          </div>
          <h5>Our Mission</h5>
          <p>
            To transform ideas into reality through technology, creativity, and passion.
          </p>
        </div>
        <div className="about-us-column">
          <div className="icon-container">
            <i className="fas fa-handshake"></i> {/* Commitment Icon */}
          </div>
          <h5>Our Commitment</h5>
          <p>
            Ensuring excellence, transparency, and reliability in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;

