

import React, { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "../../styles/About.css";

const OurExpertiseData = [
  {
    title: " Machine & Equipment Design",
    desc: "Special Purpose Machines (SPMs): Tailored machines for specific industrial needs.Test Rigs: Advanced systems for testing and validating components. Jigs and Fixtures: Precision tools for enhancing manufacturing processes.Production Planning: Optimizing workflows for maximum efficiency.",
    img: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww",
  },
  {
    title: " Software Development",
    desc: "Mobile app development for iOS and Android platforms.Web applications tailored for functionality and scalability.Comprehensive website building solutions.Custom software development for unique requirements.UI/UX redesign and revamp for modern, intuitive interfaces.Seamless deployment services to launch projects efficiently.",
    img: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww",
  },
  {
    title: " Electronics",
    desc: "IoT Solutions: Smart devices and connectivity for a smarter future.PCB Designing: Efficient, high-quality printed circuit boards.Firmware Development: Embedded software for optimal device functionality.Product Assembly: From concept to final production-ready units.Automation Systems: Advanced electronic systems for operational efficiency",
    img: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww",
  },
];

function AboutCarousel() {
  const scrollContainerRef = useRef(null);
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.6; // 60% of the viewport width
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.6; // 60% of the viewport width
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const mobscrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 1.1;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const mobscrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 1.1;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="about-section8-container-title">Our Expertise</div>
      <div className="about-section8-main-des-container">
        <p>
          Our innovative solutions cater to a diverse range of industries,
          enabling businesses to enhance productivity, streamline operations,
          adopt sustainable practices, and embrace cutting-edge technological
          advancements.
        </p>
        <div className="about-section8-btn-container">
          <div>
            <GoArrowLeft onClick={scrollLeft} size={24} />
          </div>
          <div>
            <GoArrowRight onClick={scrollRight} size={24} />
          </div>
        </div>
      </div>
      <div className="about-section8-items-container" ref={scrollContainerRef}>
        {OurExpertiseData.map((eachItem, i) => {
          return (
            <div key={i} className="about-section8-item-card">
              <div className="about-section8-items-img">
                <img src={eachItem.img} alt="" />
              </div>
              <div className="about-section8-item-content">
                <div>{eachItem.title}</div>
                <p>{eachItem.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="about-section8-mob-btn-container">
        <div>
          <GoArrowLeft onClick={mobscrollLeft} size={24} />
        </div>
        <div>
          <GoArrowRight onClick={mobscrollRight} size={24} />
        </div>
      </div>
    </div>
  );
}

export default AboutCarousel; 