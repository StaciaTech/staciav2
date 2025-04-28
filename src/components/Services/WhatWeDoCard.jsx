import React from "react";
import { useNavigate } from "react-router-dom";

export default function WhatWeDoCard({ title, desc, category, department }) {
  const navigate = useNavigate();
  const ProductKey = title.split(" ").join("-");
  return (
    <div
      className="what-we-do-box pointer"
      onClick={() => {
        window.scrollTo(0, 0);
        navigate(`/services/${department}/${category}/${ProductKey}`);
      }}
    >
      <div className="what-title test-seclection-blue">{title}</div>
      <div className="what-para ">
        <p className="test-seclection-blue">{desc}</p>
      </div>
      <div
        className="know-more pointer"
        onClick={() => {
          window.scrollTo(0, 0);
          navigate(`/services/${department}/${category}/${ProductKey}`);
        }}
      >
        Read More
      </div>
    </div>
  );
}
