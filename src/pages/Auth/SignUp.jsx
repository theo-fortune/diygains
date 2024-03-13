import React, { useState } from "react";
import "./auth.css";
import {
  BluePolygon,
  GoldRectangle,
  GrayEllipse,
  PurpleVector,
  RoseEllipse,
  RoseVector,
} from "../../assets";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const handleNext = (e) => {
    e.preventDefault();
    setStep((prevStep) => Math.min(prevStep + 1, 3));
  };
  const handlePrev = (e) => {
    e.preventDefault();
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="signup-form__inputs">
              <input
                type="text"
                name="name"
                id="fName"
                placeholder="First Name"
              />
              <input
                type="text"
                name="name"
                id="lName"
                placeholder="Last Name"
              />
            </div>
            <div className="signup-form__buttons">
              <button disabled={step === 1} onClick={handlePrev}>
                Prev
              </button>
              <button onClick={handleNext}>Next</button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="signup-form__inputs">
              <input
                type="text"
                name="gender"
                id="gender"
                placeholder="Gender"
              />
              <input type="number" name="age" id="age" placeholder="Age" />
            </div>
            <div className="signup-form__buttons">
              <button onClick={handlePrev}>Prev</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="signup-form__inputs">
              <input type="email" name="email" id="email" placeholder="Email" />
              <input
                type="number"
                name="pNumber"
                id="pNumber"
                placeholder="Phone Number"
              />
            </div>
            <div className="signup-form__buttons final-button">
              <button>Sign Up</button>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className="signup">
      <img
        src={RoseVector}
        alt="rose vector"
        className="bg-shapes rose-vector"
      />
      <img
        src={PurpleVector}
        alt="purple vector"
        className="bg-shapes purple-vector"
      />
      <img
        src={RoseEllipse}
        alt="rose ellipse"
        className="bg-shapes rose-ellipse"
      />
      <img
        src={GrayEllipse}
        alt="gray ellipse"
        className="gray-ellipse bg-shapes"
      />
      <img
        src={GoldRectangle}
        alt="gold-rectangle"
        className="gold-rectangle bg-shapes"
      />
      <img
        src={BluePolygon}
        alt="blue polygon"
        className="blue-polygon bg-shapes"
      />
      <form action="" className="signup-form">
        <div className="signup-form__steps">
          <span>
            Step <span style={{ color: "#916CFB" }}> {step} </span>of 3
          </span>
          <p className="signup-form__steps-intro">
            Sign in to your <Link to={"/"}>&nbsp;DiyGains&nbsp;</Link> account
            and start earning
          </p>
        </div>
        {renderForm()}
        <p className="signup-form__alt">
          Already have an account? <Link to={"/login"}> Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
