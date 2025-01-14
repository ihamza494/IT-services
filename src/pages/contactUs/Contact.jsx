import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-us-page">
      <Header />
      <div className="cover-photo-contact">
        <div className="contact-overlay">
          {/* Left Side: Mission Statement and Contact Details */}
          <div className="contact-left">
            <h2>Our Mission</h2>
            <p>
              We are committed to providing top-notch services that empower your 
              business and help you achieve your goals.
            </p>
            <div className="contact-details">
              <p>
                <i className="fas fa-map-marker-alt"></i> 1234 Main Street, 
                City, Country
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> +1 234 567 890
              </p>
              <p>
                <i className="fas fa-envelope"></i> contact@hi-solutions.com
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-right">
            <h2>Get in Touch</h2>
            <form className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
              />
              <textarea
                placeholder="Your Message"
                className="form-input"
                rows="5"
              ></textarea>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
