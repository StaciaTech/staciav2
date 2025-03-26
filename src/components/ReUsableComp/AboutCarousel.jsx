import React, { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "../../styles/About.css";

const OurExpertiseData = [
  {
    title: "Quality Control",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat justo id mauris ultrices, vel placerat libero tincidunt. Phasellus pretium velit ac odio pulvinar, ac mollis tortor laoreet. Duis vel mauris nec libero molestie laoreet.",
    img: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww",
  },
  {
    title: "Quality Control",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat justo id mauris ultrices, vel placerat libero tincidunt. Phasellus pretium velit ac odio pulvinar, ac mollis tortor laoreet. Duis vel mauris nec libero molestie laoreet.",
    img: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww",
  },
  {
    title: "Quality Control",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat justo id mauris ultrices, vel placerat libero tincidunt. Phasellus pretium velit ac odio pulvinar, ac mollis tortor laoreet. Duis vel mauris nec libero molestie laoreet.",
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, eius! Recusandae sit facilis molestias. Eos cupiditate
          omnis aliquid reprehenderit ut?
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
