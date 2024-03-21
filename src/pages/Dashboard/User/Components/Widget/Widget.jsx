import React from "react";
import "./widget.css";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { PiTrendUpFill, PiWalletFill } from "react-icons/pi"; // * Earnings
import { BiSolidWallet } from "react-icons/bi"; // * Balance
import { GiUpgrade } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";

const Widget = () => {
  return (
    <div className="widget">
      <div className="earnings">
        <div className="wallet-balance">
          <div className="wallet-balance-top">
            <div className="wallet-balance-top-left">
              <PiWalletFill className="wallet-balance-top-left-icon" />
              <h5>Earnings</h5>
            </div>
            <RiEyeFill className="wallet-balance-top-left-eye" />
          </div>
          <div className="wallet-balance-bottom">
            <div className="wallet-balance-bottom-amount">
              <h3>₦450,000</h3>
              <div className="wallet-balance-bottom-amount__percentage">
                <p>120k</p>{" "}
                <PiTrendUpFill className="wallet-balance-bottom-amount__percentage-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="balance">
        <div className="wallet-balance">
          <div className="wallet-balance-top">
            <div className="wallet-balance-top-left">
              <BiSolidWallet className="wallet-balance-top-left-icon" />
              <h5>Balance</h5>
            </div>
            <RiEyeFill className="wallet-balance-top-left-eye" />
          </div>
          <div className="wallet-balance-bottom">
            <div className="wallet-balance-bottom-amount">
              <h3>₦450,000</h3>
              <div className="wallet-balance-bottom-amount__percentage">
                <p>120k</p>{" "}
                <PiTrendUpFill className="wallet-balance-bottom-amount__percentage-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="matching-bonus">
        <div className="wallet-balance">
          <div className="wallet-balance-top">
            <div className="wallet-balance-top-left">
              <GiUpgrade className="wallet-balance-top-left-icon" />
              <h5>Earnings</h5>
            </div>
            <RiEyeFill className="wallet-balance-top-left-eye" />
          </div>
          <div className="wallet-balance-bottom">
            <div className="wallet-balance-bottom-amount">
              <h3>₦450,000</h3>
              <div className="wallet-balance-bottom-amount__percentage">
                <p>120k</p>{" "}
                <PiTrendUpFill className="wallet-balance-bottom-amount__percentage-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="withdrawn">
        <div className="wallet-balance">
          <div className="wallet-balance-top">
            <div className="wallet-balance-top-left">
              <FaWallet className="wallet-balance-top-left-icon" />
              <h5>Earnings</h5>
            </div>
            <RiEyeFill className="wallet-balance-top-left-eye" />
          </div>
          <div className="wallet-balance-bottom">
            <div className="wallet-balance-bottom-amount">
              <h3>₦450,000</h3>
              <div className="wallet-balance-bottom-amount__percentage">
                <p>120k</p>{" "}
                <PiTrendUpFill className="wallet-balance-bottom-amount__percentage-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
