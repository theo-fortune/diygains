import React from "react";
import "./overview.css";
import { FaBell } from "react-icons/fa";
const Overview = () => {
  const firstName = "Fortune";
  const lastName = "Theo";
  const fullName = lastName + " " + firstName;
  const notification = 3;
  return (
    <div className="overview">
      <div className="overview-nav">
        <div className="overview-nav__left">
          <h2>Good Evening {firstName}</h2>
          <p>Turn Your DIY Dreams into Real Gains – Let's Create!</p>
        </div>
        <div className="overview-nav__right">
          <div className="overview-nav__right-notification">
            <p>{notification}</p>
            <FaBell />
          </div>
          <div className="overview-nav__right-profile">
            <div className="overview-nav__right-profile_image"></div>
            <div className="overview-nav__right-profile_name">
              <h4>{fullName}</h4>
              <p>Level 5 Matrix</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
