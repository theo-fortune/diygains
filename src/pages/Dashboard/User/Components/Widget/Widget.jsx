import React, { useState } from "react";
import "./widget.css";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { PiTrendUpFill, PiWalletFill } from "react-icons/pi"; // * Earnings
import { BiSolidWallet } from "react-icons/bi"; // * Balance
import { GiUpgrade } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";

const WalletBalance = ({ icon, title, amount, iconColor }) => {
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="widget-wallet-balance">
      <div className="wallet-balance">
        <div className="wallet-balance-top">
          <div className="wallet-balance-top-left">
            {React.cloneElement(icon, { style: { color: iconColor } })}
            <h5>{title}</h5>
          </div>
          <div
            className="wallet-balance-top-left-eye"
            onClick={toggleBalanceVisibility}
          >
            {showBalance ? <RiEyeOffFill /> : <RiEyeFill />}
          </div>
        </div>
        <div className="wallet-balance-bottom">
          <div className="wallet-balance-bottom-amount">
            {showBalance ? <h3>{amount}</h3> : <h3>******</h3>}
            <div className="wallet-balance-bottom-amount__percentage">
              <p>120k</p>{" "}
              <PiTrendUpFill className="wallet-balance-bottom-amount__percentage-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Widget = () => {
  return (
    <div className="widget dashboard-card">
      <WalletBalance
        icon={<PiWalletFill className="wallet-balance-top-left-icon" />}
        title="Earnings"
        amount="₦450,000"
        iconColor="var(--rose)"
      />
      <WalletBalance
        icon={<BiSolidWallet className="wallet-balance-top-left-icon" />}
        title="Balance"
        amount="₦450,000"
        iconColor="var(--harvest-gold-sunset-variant)"
      />
      <WalletBalance
        icon={<GiUpgrade className="wallet-balance-top-left-icon" />}
        title="Bonus"
        amount="₦450,000"
        iconColor="var(--majorelle-blue)"
      />
      <WalletBalance
        icon={<FaWallet className="wallet-balance-top-left-icon" />}
        title="Withdrawn"
        amount="₦450,000"
        iconColor="var(--warmer-toned-brown)"
      />
    </div>
  );
};

export default Widget;
