import React, { useState, useEffect } from "react";
import "./overview.css";
import Nav from "../../Components/Nav/Nav";
const Overview = () => {

  const firstName = "Fortune";
  const lastName = "Theo";
  const fullName = lastName + " " + firstName;
  const notification = 3;
  return (
    <div className="overview">
      <Nav />
    </div>
  );
};

export default Overview;
