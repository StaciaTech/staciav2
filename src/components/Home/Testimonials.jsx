import React from "react";
import "../../styles/Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";
import AllTestimonials from "./AllTestimonials";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials2">
        <div className="marquee-content forward">
          <AllTestimonials />
          <AllTestimonials/>
        </div>

        <div className="marquee-content reverse">
          <AllTestimonials /> 
          <AllTestimonials/>
        </div>
        {/* <div>
          <Marquee speed={50} pauseOnHover>
            <AllTestimonials />
          </Marquee>
        </div>

        <div className="right-marquee">
          <Marquee speed={50} pauseOnHover direction="right">
            <AllTestimonials />
          </Marquee>
        </div> */}
      </div>
    </div>
  );
}
