import React, { useRef, useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "../../styles/About.css";
import expertiseData from "../../data/expertise.json"; // Import JSON data

function LeaderCarousel() {
  const scrollContainerRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(expertiseData); // Load JSON data
  }, []);

  const scroll = (amount) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="about-section8-container-title">Achievement</div>
      <div className="about-section8-main-des-container">
        <p>
          We specialize in delivering top-notch services across various
          domains, ensuring excellence in all that we do.
        </p>
        <div className="about-section8-btn-container">
          <GoArrowLeft onClick={() => scroll(-window.innerWidth * 0.6)} size={24} />
          <GoArrowRight onClick={() => scroll(window.innerWidth * 0.6)} size={24} />
        </div>
      </div>
      <div className="about-section8-items-container" ref={scrollContainerRef}>
        {data.map((eachItem, i) => (
          <div key={i} className="about-section8-item-card">
            <div className="about-section8-items-img">
              <img src={eachItem.img} alt={eachItem.title} />
            </div>
            <div className="about-section8-item-content">
              <div>{eachItem.title}</div>
              <p>{eachItem.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="about-section8-mob-btn-container">
        <GoArrowLeft onClick={() => scroll(-window.innerWidth * 1.1)} size={24} />
        <GoArrowRight onClick={() => scroll(window.innerWidth * 1.1)} size={24} />
      </div>
    </div>
  );
}

export default LeaderCarousel;
