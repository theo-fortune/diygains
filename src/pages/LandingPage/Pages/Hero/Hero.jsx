import React from "react";
import { Navbar } from "../../Components";
import { HeroImg } from "../../../../assets";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <Navbar />
      <header className="hero">
        <div className="hero-left">
          <div className="hero-left__texts">
            <h1>
              Craft Your <span className="twilight-elegance">Success</span> with
              DIYGAINS
            </h1>
            <p>
              Transform your DIY aspirations into tangible rewards with
              DIYGAINS. From innovative projects to extraordinary gains, our
              community is a haven for creators seeking both expression and
              success. Dive into the DIYGAINS experience.
            </p>
          </div>
          <div className="hero-left__buttons">
            <button>Get Started</button>
            <button>Learn More</button>
          </div>
        </div>
        <div className="hero-right">
          <img src={HeroImg} alt="hero-img" />
        </div>
      </header>
    </>
  );
};

export default Hero;
