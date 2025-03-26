import React from "react";
import "../styles/Star.css";
import StarLogo from "../assets/Star.svg";

function Star() {
  return (
    <div className="star-container">
      <img src={StarLogo} alt="" />
    </div>
  );
}

export default Star;
