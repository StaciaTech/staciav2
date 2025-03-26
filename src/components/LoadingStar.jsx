import { React, useState, useEffect } from "react";
import Loading from "../assets/loadingStar.svg";
import "../styles/LoadingStar.css";
import LateIllustrate from "../assets/Lateillustrate.svg";

function LoadingStar() {
  const [isStateTrue, setIsStateTrue] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsStateTrue(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {isStateTrue ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="plus-icon spin">
            <img src={Loading} alt="" />
          </div>
          <p
            style={{ color: "#0047FF", fontSize: "1.5rem", padding: "0.5rem" }}
          >
            Loading...
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img src={LateIllustrate} alt="" className="illustrate-style" />
          </div>
          <p className="illustrate-text">
            We're taking a bit longer than usual to load. Please check back in a
            few minutes.
          </p>
        </div>
      )}
    </div>
  );
}

export default LoadingStar;
