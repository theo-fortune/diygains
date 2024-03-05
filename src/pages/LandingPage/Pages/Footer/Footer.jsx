import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { Facebook, Instagram, LinkedIn, Twitter } from "../../../../assets";

const Footer = () => {
  return (
    <footer>
      <div className="footer-intro">
        <h2 className="footer-intro__logo">DiyGains</h2>
        <button>More About Us</button>
      </div>
      <div className="footer-links">
        <div className="footer-links__left">
          <div className="footer-links__left-item">
            <h4>Discover</h4>
            <div className="footer-links__left-item-links">
              <Link to="/">About Us</Link>
              <Link to="/">Community</Link>
              <Link to="/">Referral Program</Link>
              <Link to="/">Guidelines</Link>
            </div>
          </div>
          <div className="footer-links__left-item even-grid">
            <h4>Get in Touch</h4>
            <div className="footer-links__left-item-links">
              <Link to="/">Contact</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Help Center</Link>
              <Link to="/">FAQs</Link>
            </div>
          </div>
          <div className="footer-links__left-item">
            <h4>Legal Information</h4>
            <div className="footer-links__left-item-links">
              <Link to="/">Terms of Service</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">About</Link>
            </div>
          </div>
          <div className="footer-links__left-item even-grid">
            <h4>Other Projects</h4>
            <div className="footer-links__left-item-links">
              <Link to="/">Project 1</Link>
              <Link to="/">Project 2</Link>
              <Link to="/">Project 3</Link>
            </div>
          </div>
        </div>
        <div className="footer-links__right">
          <h4>Follow Our Socials</h4>
          <div className="footer-links__right-socials">
            <Link to={"/"}>
              <img src={LinkedIn} alt="Social" />
            </Link>
            <Link to={"/"}>
              <img src={Instagram} alt="Social" />
            </Link>
            <Link to={"/"}>
              <img src={Facebook} alt="Social" />
            </Link>
            <Link to={"/"}>
              <img src={Twitter} alt="Social" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>Copyright ©2024 DiyGains Powered by @CompanyName</p>
      </div>
    </footer>
  );
};

export default Footer;
