import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const toHowItWorks = () => {
    const hiwSection = document.getElementById("hiw");
    if (hiwSection) {
      hiwSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav>
      <h2 className="logo">DiyGains</h2>
      <div className="nav-links">
        <Link>Home</Link>
        <Link onClick={scrollToFeatures}>Features</Link>
        <Link onClick={toHowItWorks}>How It Works</Link>
        <Link onClick={scrollToAbout}>About Us</Link>
        <Link onClick={scrollToContact}>Contact</Link>
      </div>
      <div className="nav-buttons-n-menu">
        <div className="nav-buttons">
          <Link to={"/signup"}>Sign Up</Link>
          <Link to={"/login"} className="nav-buttons__login">
            Log In
          </Link>
        </div>
        <div className="nav-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="var(--raisin-black)"
              onClick={() => setToggleMenu(false)}
              className="exit"
            />
          ) : (
            <RiMenu4Fill
              color="var(--raisin-black)"
              onClick={() => setToggleMenu(true)}
              className="menu"
            />
          )}
          {toggleMenu && (
            <div className="nav-links_mobile scale-up-center">
              <div className="mobile-links">
                <Link>How It Works</Link>
                <Link>Home</Link>
                <Link>About Us</Link>
                <Link>Features</Link>
                <Link>Contact</Link>
              </div>
              <div className="mobile-buttons">
                <button>Sign Up</button>
                <button>Log In</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
