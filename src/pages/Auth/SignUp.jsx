import React from "react";
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
  const step = 1;
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
            Sign in to your <span> &nbsp; DiyGains &nbsp; </span> account and
            start earning
          </p>
        </div>
        <div className="signup-form__inputs">
          <input type="text" name="name" id="fName" placeholder="First Name" />
          <input type="text" name="name" id="lName" placeholder="Last Name" />
        </div>
        <div className="signup-form__buttons">
          <button>Prev</button>
          <button>Next</button>
        </div>
        <p className="signup-form__alt">
          Already have an account? <Link to={"/login"}> Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
