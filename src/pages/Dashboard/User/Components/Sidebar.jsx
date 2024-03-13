import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { MdSpaceDashboard, MdAccessTimeFilled } from "react-icons/md";
import { IoWallet, IoExit } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaMoneyBillWave, FaUser } from "react-icons/fa";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard/overview");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const isLinkActive = (link) => link === activeLink;
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>DiyGains</h1>
      </div>
      <div className="sidebar-links">
        <Link
          to="/dashboard/overview"
          className={`sidebar-link__component ${
            isLinkActive("/dashboard/overview") && "active-link"
          }`}
          onClick={() => handleLinkClick("/dashboard/overview")}
        >
          <MdSpaceDashboard className="sidebar-link__component-icons" />
          <p>Overview</p>
        </Link>
        <Link
          to="/dashboard/wallet"
          className={`sidebar-link__component ${
            isLinkActive("/dashboard/wallet") && "active-link"
          }`}
          onClick={() => handleLinkClick("/dashboard/wallet")}
        >
          <IoWallet className="sidebar-link__component-icons" />
          <p>Wallet</p>
        </Link>
        <Link
          to="/dashboard/referrals"
          className={`sidebar-link__component ${
            isLinkActive("/dashboard/referrals") && "active-link"
          }`}
          onClick={() => handleLinkClick("/dashboard/referrals")}
        >
          <IoIosPeople className="sidebar-link__component-icons" />
          <p>Referrals</p>
        </Link>
        <Link
          to="/dashboard/withdraw"
          className={`sidebar-link__component ${
            isLinkActive("/dashboard/withdraw") && "active-link"
          }`}
          onClick={() => handleLinkClick("/dashboard/withdraw")}
        >
          <FaMoneyBillWave className="sidebar-link__component-icons" />
          <p>Withdraw</p>
        </Link>
        <Link
          to="/dashboard/history"
          className={`sidebar-link__component ${
            isLinkActive("/dashboard/history") && "active-link"
          }`}
          onClick={() => handleLinkClick("/dashboard/history")}
        >
          <MdAccessTimeFilled className="sidebar-link__component-icons" />
          <p>History</p>
        </Link>
        <Link
          to="/dashboard/profile"
          className={`sidebar-link__component ${
            isLinkActive("/dashboard/profile") && "active-link"
          }`}
          onClick={() => handleLinkClick("/dashboard/profile")}
        >
          <FaUser className="sidebar-link__component-icons" />
          <p>Profile</p>
        </Link>
        <Link className="sidebar-link__component">
          <IoExit className="sidebar-link__component-icons" />
          <p>Log Out</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
