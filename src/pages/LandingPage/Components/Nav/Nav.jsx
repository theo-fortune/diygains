import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      <div className="nav-buttons">
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
