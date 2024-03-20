import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { MdSpaceDashboard, MdAccessTimeFilled } from "react-icons/md";
import { IoWallet, IoExit } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaMoneyBillWave, FaUser } from "react-icons/fa";

const SidebarLink = ({ to, icon:Icon, text, isActive, onClick }) => {
  return (
    <Link
      to={to}
      className={`sidebar-link__component ${isActive && "active-link"}`}
      onClick={onClick}
    >
      {Icon && <Icon className="sidebar-link__component-icons" />}
      <p>{text}</p>
    </Link>
  );
};

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
        <SidebarLink
          to="/dashboard/overview"
          icon={MdSpaceDashboard}
          text="Overview"
          isActive={isLinkActive("/dashboard/overview")}
          onClick={() => handleLinkClick("/dashboard/overview")}
        />
        <SidebarLink
          to="/dashboard/wallet"
          icon={IoWallet}
          text="Wallet"
          isActive={isLinkActive("/dashboard/wallet")}
          onClick={() => handleLinkClick("/dashboard/wallet")}
        />
        <SidebarLink
          to="/dashboard/referrals"
          icon={IoIosPeople}
          text="Referrals"
          isActive={isLinkActive("/dashboard/referrals")}
          onClick={() => handleLinkClick("/dashboard/referrals")}
        />
        <SidebarLink
          to="/dashboard/withdraw"
          icon={FaMoneyBillWave}
          text="Withdraw"
          isActive={isLinkActive("/dashboard/withdraw")}
          onClick={() => handleLinkClick("/dashboard/withdraw")}
        />
        <SidebarLink
          to="/dashboard/history"
          icon={MdAccessTimeFilled}
          text="History"
          isActive={isLinkActive("/dashboard/history")}
          onClick={() => handleLinkClick("/dashboard/history")}
        />
        <SidebarLink
          to="/dashboard/profile"
          icon={FaUser}
          text="Profile"
          isActive={isLinkActive("/dashboard/profile")}
          onClick={() => handleLinkClick("/dashboard/profile")}
        />
        <SidebarLink
          to="/logout"
          icon={IoExit}
          text="Log Out"
          onClick={() => {
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
