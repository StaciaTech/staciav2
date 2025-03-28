import React from "react";
import "../../styles/ServiceCard.css";
import { Link } from "react-router-dom";

export default function ServiceCard({ img, title, description, id }) {
  return (
    <div className="service-card">
      <div className="service-card-img-box">
        <img src={img} alt="" />
      </div>
      <div className="service-content-box">
        <div className="feature-title">{title}</div>

        <div className="feature-para" style={{ width: "100%" }}>
          {description.split(/\s+/, 20).join(" ")}
        </div>
        <Link to={`/${id}`} onClick={() => window.scrollTo(0, 0)}>
          <div className="know-more" style={{ marginTop: "30px" }}>
            Know-more
          </div>
        </Link>
      </div>
    </div>
  );
}
