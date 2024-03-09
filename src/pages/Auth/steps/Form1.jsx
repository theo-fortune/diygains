import React from 'react'
import { Link } from 'react-router-dom';

const Form1 = () => {
  const step = 1;
  return (
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
  );
}

export default Form1