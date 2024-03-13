import React from "react";
import Sidebar from "./Components/Sidebar";
import "./dashboard.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  History,
  LogOut,
  OverView,
  Profile,
  Referrals,
  Wallet,
  Withdraw,
} from "./Pages";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-contents">
        <Routes>
          <Route index element={<OverView />} />
          <Route path="/overview" element={<OverView />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
