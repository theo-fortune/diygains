import React from "react";
import "./balance.css";
import { PiWalletFill } from "react-icons/pi";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { PiTrendUpFill } from "react-icons/pi";

const Balance = () => {
  return (
    <div className="balance">
      <div className="balance-top">
        <div className="balance-top-left">
          <PiWalletFill className="balance-top-left-icon" />
          <h5>Earnings</h5>
        </div>
        <RiEyeFill />
      </div>
      <div className="balance-bottom">
        <div className="balance-bottom-amount">
          <h3>₦450,000</h3>
          <div className="balance-bottom-amount__percentage"> <p>120k</p>  <PiTrendUpFill/></div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
