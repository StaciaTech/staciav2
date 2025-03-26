import React from "react";
import "../../styles/DestopStacking.css";
import { useNavigate } from "react-router-dom";

function DesktopStackCard({ data }) {
  const navigate = useNavigate();

  return (
    <div className="desktopCard-container">
      <div className="desktopCard-img-wraper">
        <img src={data.imageUrl} alt="data.title" />
      </div>
      <div style={{ width: "65%", boxSizing: "border-box" }}>
        <div style={{ fontSize: "2vw" }}>{data.title}</div>
        <div style={{ padding: "0.5vw 0rem" }}>{data.domainName}</div>
        <div className="desktopCard-des-container">
          <p>{data.pDes1}</p>
        </div>
        <div className="desktopCard-des-container">
          <p>{data.pDes2}</p>
        </div>
        <div
          className=""
          onClick={() => {
            navigate(`/products/${data.title}`);
            window.scrollTo(0, 0);
          }}
          style={{ cursor: "pointer" }}
        >
          Learn more
        </div>
      </div>
    </div>
  );
}

export default DesktopStackCard;
