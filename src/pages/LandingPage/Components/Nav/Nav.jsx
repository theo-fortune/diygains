import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <h2 className="logo">DiyGains</h2>
      <div className="nav-links">
        <Link>Home</Link>
        <Link>About Us</Link>
        <Link>Features</Link>
        <Link>How It Works</Link>
        <Link>Contact</Link>
      </div>
      <div className="nav-buttons-n-menu">
        <div className="nav-buttons">
          <button>Sign Up</button>
          <button>Log In</button>
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
              <Link>How It Works</Link>
              <Link>Home</Link>
              <Link>About Us</Link>
              <Link>Features</Link>
              <Link>Contact</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
