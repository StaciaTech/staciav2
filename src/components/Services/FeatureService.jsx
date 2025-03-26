import React from "react";
import "../../styles/SingleService.css";
import ServiceCard from "./ServiceCard";
import { Link, useNavigate } from "react-router-dom";
import SpecificService from "./SpecificService";

export default function FeatureService({ img, description, title, id }) {
  const navigate = useNavigate();
  return (
    <div className="feature-service">
      <div className="feature-service-img-box">
        <img src={img} alt="" />
      </div>

      <div className="feature-content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="feature-first-title"
        >
          <div className="feature-title">{title}</div>
          <div
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`services/${id}`);
            }}
            className="know-more"
          >
            Know more
          </div>
        </div>
        <div className="feature-para">
          {description.split(/\s+/, 30).join(" ")}
        </div>
      </div>
    </div>
  );
}
