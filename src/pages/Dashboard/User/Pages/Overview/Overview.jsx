import React from "react";
import "./overview.css";
import Nav from "../../Components/Nav/Nav";
import Widget from "../../Components/Widget/Widget";
const Overview = () => {
  return (
    <div className="overview">
      <div className="overview-contents">
        <Nav />
      </div>
      <Widget />
    </div>
  );
};

export default Overview;
