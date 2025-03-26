import React from "react";

export default function FourCard({ data }) {
  return (
    <div className="four-card">
      <div className="four-pos test-seclection-blue">{data.pos}</div>
      <a href={data.proId} target="/blank">
        <div className="four-img">
          <img src={data.img} alt="" />
        </div>
      </a>
      <div className="four-para">
        <div className="four-name test-seclection-blue">{data.name}</div>
        <p className="test-seclection-blue">{data.about}</p>
      </div>
    </div>
  );
}
