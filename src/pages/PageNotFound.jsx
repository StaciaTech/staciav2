import React from "react";
import NavBar from "../components/NavBar";
import Astronaut from "../assets/NotFoundImage.png";
import "../styles/pageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigateTo = useNavigate();
  return (
    <div className="container">
      <NavBar />
      <div className="not-found-box">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              transform: "rotate(350deg)",
            }}
            className="number-style"
          >
            4
          </div>
          <div className="image-container">
            <img src={Astronaut} alt="" width={"100%"} height={"100%"} />
          </div>
          <div
            style={{
              transform: "rotate(15deg)",
            }}
            className="number-style"
          >
            4
          </div>
        </div>
        <div className="style-oops">Oops!</div>
        <div className="warning-text">
          Something Went Wrong Please Re-fresh the Page Or
        </div>
        <div>
          <button className="home-button" onClick={() => navigateTo("/")}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
