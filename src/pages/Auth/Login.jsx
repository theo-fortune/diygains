import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import {
  BluePolygon,
  GoldRectangle,
  GrayEllipse,
  PurpleVector,
  RoseEllipse,
  RoseVector,
} from "../../assets";

const Login = () => {
  return (
    <div className="login">
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
      <form className="login-form">
        <p className="login-form-intro">
          Sign in to your <span>DiyGains</span> account and start earning
        </p>
        <div className="login-form__input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
          <div className="login-form__input-password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <Link>Forgot Password?</Link>
          </div>
        </div>
        <button>Log In</button>
        <p className="login-form__alt">
          Don’t have an account? <Link to={"/signup"}> Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
