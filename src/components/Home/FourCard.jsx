import React from "react";
import { useNavigate } from "react-router-dom";

export default function FourCard({ data,path }) {
  const navigate = useNavigate();

  return (
    <div className="four-card">
      <div className="four-pos test-seclection-blue">{data.pos}</div>
      <a href={data.proId} target="/blank">
        <div className="four-img">
          ho
          <img src={data.img} alt="" />
        </div>
      </a>
      <div
        className="four-para"
        onClick={() => {
          navigate(
            `${path}/${
              // eachItem.id.split(" ").join("-") ||  //caseStudy- id track
              // article page
              data.name.split(" ").join("-")
              // newsItem.mainTitle.split(" ").join("-")
            }`
          );
          window.scrollTo(0, 0);
        }}
      >
        <div className="four-name test-seclection-blue">{data.name}</div>
        <p className="test-seclection-blue">{data.about}</p>
        <p
          onClick={() => {
            navigate(
              `${path}/${
                // eachItem.id.split(" ").join("-") ||  //caseStudy- id track
                // article page
                data.name.split(" ").join("-")
                // newsItem.mainTitle.split(" ").join("-")
              }`
            );
            window.scrollTo(0, 0);
          }}
        >read more</p>
      </div>
    </div>
  );
}
