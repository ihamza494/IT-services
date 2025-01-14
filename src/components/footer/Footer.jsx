import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">HI-SOLUTIONS</div>
          <div className="footer-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        {/* Right Section */}
        <div className="footer-right">
          <label className="subscribe-label">Subscribe to our Newsletter:</label>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-copyright">
        © {new Date().getFullYear()} HI-SOLUTIONS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

