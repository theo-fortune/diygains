import React from "react";
import "./features.css";

const FeaturesCard = ({ icon, heading, text, houseStyle }) => {
  return (
    <div className="features-card" >
      <div className="icon-house" style={houseStyle}>
        <img src={icon} alt="icon" />
      </div>
      <h1>{heading}</h1>
      <p>{text}</p>
    </div>
  );
};

export default FeaturesCard;
