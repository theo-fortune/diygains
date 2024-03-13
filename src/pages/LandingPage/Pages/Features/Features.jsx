import React from "react";
import "./features.css";
import FeaturesCard from "./FeaturesCard";
import { Mobile, Shield, Element, Blob } from "../../../../assets";

const Features = () => {
  const userStyle = {
    background: "var(--faint-majorelle-blue)",
  };
  const personalizedStyle = {
    background: "var(--faint-harvest-gold)",
  };
  const secureStyle = {
    background: "var(--faint-harvest-gold)",
  };
  return (
    <section className="features" id="features">
      <div className="features-left">
        <div className="features-left__texts">
          <h1>
            Crafting <span>Excellence</span> with DIYGAINS
          </h1>
          <p>
            Embark on a transformative DIY journey with DIYGAINS. Explore a
            comprehensive array of features meticulously designed to empower
            your creativity. From intuitive user interfaces to advanced matrix
            rewards, DIYGAINS is your gateway to a world where crafting
            seamlessly intertwines with earning. Immerse yourself in a platform
            that understands and enhances your DIY potential.
          </p>
        </div>
        <button className="feature-left__button">Explore more</button>
      </div>
      <div className="features-right">
        <FeaturesCard
          houseStyle={userStyle}
          icon={Mobile}
          heading={"User-Friendly Interfaces"}
          text={
            "Effortlessly navigate DIYGAINS with an intuitive interface, making your crafting and earning experience seamless."
          }
        />
        <FeaturesCard
          houseStyle={personalizedStyle}
          icon={Element}
          heading={"Personalized Dashboard"}
          text={
            "Enjoy a personalized dashboard where you can manage your projects, track earnings, and stay updated on the latest DIY trends."
          }
        />
        <FeaturesCard
          houseStyle={secureStyle}
          icon={Shield}
          heading={"Secure  and Safe Transactions"}
          text={
            "Experience peace of mind with secure and transparent transactions, ensuring the safety of your earnings."
          }
        />
        <img src={Blob} alt="blob" className="blob" />
      </div>
    </section>
  );
};

export default Features;
