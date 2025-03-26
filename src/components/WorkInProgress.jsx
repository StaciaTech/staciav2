import React from "react";
import Working from "../assets/tooLate.svg";
import "../styles/WorkInProgress.css";

function WorkInProgress() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div>
          <img src={Working} alt="" srcSet="" className="working-illustrate" />
        </div>
        <p className="working-text">
          This page is not quite ready yet, but check back soon!
        </p>
      </div>
    </div>
  );
}

export default WorkInProgress;
