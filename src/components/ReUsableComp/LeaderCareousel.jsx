import React, { useEffect, useState, useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "../../styles/About.css";
import expertise from "../../Data/About.json";

function LeaderCarousel({ data }) {
  const scrollContainerRef = useRef(null);
  const [singleLeader, setSingleLeader] = useState(null); // Ensure it's null initially
  const [Leaders, setLeaders] = useState(expertise.leaders);

  useEffect(() => {
    const foundLeader = Leaders.find((leader) => leader.name === data);
    setSingleLeader(foundLeader);
  }, [data]);

  // Prevent crash if singleLeader is null
  if (!singleLeader || !singleLeader.expertise) {
    return <p></p>;
  }

  // const scrollLeft = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({
  //       left: -window.innerWidth * 0.6,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({
  //       left: window.innerWidth * 0.6,
  //       behavior: "smooth",
  //     });
  //   }
  // };
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
        <div className="about-section8-container-title">Awards</div>
        <div className="about-section8-main-des-container">
          <p>
            {/* Our innovative solutions cater to a diverse range of industries,
            enabling businesses to enhance productivity, streamline operations,
            adopt sustainable practices, and embrace cutting-edge technological
            advancements. */}
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
          {singleLeader.expertise.map((eachItem, i) => (
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

  export default LeaderCarousel;
