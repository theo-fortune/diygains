import React, { useEffect, useState } from "react";
import { Profile } from "../../../assets";
import { GoBellFill } from "react-icons/go";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const getCurrentTime = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good Morning");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
    };
    getCurrentTime();
    const interval = setInterval(getCurrentTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const firstName = "Fortune";
  const lastName = "Theo";
  const fullName = lastName + " " + firstName;
  const notification = 3;
  return (
    <div className="overview-nav">
      <div className="overview-nav__left">
        <h2>
          {greeting} {firstName}
        </h2>
        <p>Turn Your DIY Dreams into Real Gains – Let's Create!</p>
      </div>
      <div className="overview-nav__right">
        <div className="overview-nav__right-notification">
          <div className="overview-nav__right-notification_count">
            <p>{notification}</p>
          </div>
          <GoBellFill className="overview-nav__right-notification_bell" />
        </div>
        <Link to={"/dashboard/profile"} className="overview-nav__right-profile">
          <div
            className="overview-nav__right-profile_image"
            style={{
              backgroundImage: `url(${Profile})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="overview-nav__right-profile_name">
            <h4>{fullName}</h4>
            <p>Level 5 Matrix</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
