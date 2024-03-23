import React from "react";
import "./overview.css";
import Nav from "../../Components/Nav/Nav";
import { AD, Chart, Widget } from "../../Components";
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
      </div>
    </div>
  );
};

export default Overview;
