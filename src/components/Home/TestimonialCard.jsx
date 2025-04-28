import React from "react";
import "../../styles/Testimonials.css";
import t1 from "../../assets/t1.png";

export default function TestimonialCard({ eachTestimonial }) {
  return (
    <div className="testimonial-card" style={{width: "30rem"}}>
      <div className="test-top">
        {/* <div className="test-img" > */}
        <div
          className={
            eachTestimonial.name === "Manage" ? "test-img-manage" : "test-img"
          }
        >
          <img src={eachTestimonial.image} alt="" />
        </div>
        <div className="test-name">
          <p className="test-seclection-white">{eachTestimonial.name}</p>
        </div>
      </div>
      <div className="test-line test-seclection-white"></div>
      <div className="test-bottom">
        <p className="test-seclection-white">{`"${eachTestimonial.text}"`}</p>
      </div>
    </div>
  );
}
