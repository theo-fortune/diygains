import React from "react";
import "./overview.css";
import Nav from "../../Components/Nav/Nav";
import { AD, Chart, Notifications, Purchases, Widget } from "../../Components";
const Overview = () => {
  return (
    <div className="overview">
      <div className="overview-contents">
        <Nav />
      </div>
      <div className="overview-page">
        <Widget />
        <Chart />
        <AD />
        <Notifications />
        <Purchases />
      </div>
    </div>
  );
};

export default Overview;
