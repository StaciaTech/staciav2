

// import React, { useRef } from "react";
// import { GoArrowLeft, GoArrowRight } from "react-icons/go";
// import "../../styles/About.css";

// const OurExpertiseData = [
//   {
//     title: " Machine & Equipment Design",
//     desc: "Special Purpose Machines (SPMs): Tailored machines for specific industrial needs.Test Rigs: Advanced systems for testing and validating components. Jigs and Fixtures: Precision tools for enhancing manufacturing processes.Production Planning: Optimizing workflows for maximum efficiency.",
//     img: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww",
//   },
//   {
//     title: " Software Development",
//     desc: "Mobile app development for iOS and Android platforms.Web applications tailored for functionality and scalability.Comprehensive website building solutions.Custom software development for unique requirements.UI/UX redesign and revamp for modern, intuitive interfaces.Seamless deployment services to launch projects efficiently.",
//     img: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww",
//   },
//   {
//     title: " Electronics",
//     desc: "IoT Solutions: Smart devices and connectivity for a smarter future.PCB Designing: Efficient, high-quality printed circuit boards.Firmware Development: Embedded software for optimal device functionality.Product Assembly: From concept to final production-ready units.Automation Systems: Advanced electronic systems for operational efficiency",
//     img: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww",
//   },
// ];

// function AboutCarousel() {
//   const scrollContainerRef = useRef(null);
//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = window.innerWidth * 0.6; // 60% of the viewport width
//       scrollContainerRef.current.scrollBy({
//         left: -scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = window.innerWidth * 0.6; // 60% of the viewport width
//       scrollContainerRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const mobscrollLeft = () => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = window.innerWidth * 1.1;
//       scrollContainerRef.current.scrollBy({
//         left: -scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const mobscrollRight = () => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = window.innerWidth * 1.1;
//       scrollContainerRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div>
//       <div className="about-section8-container-title">Our Expertise</div>
//       <div className="about-section8-main-des-container">
//         <p>
//           Our innovative solutions cater to a diverse range of industries,
//           enabling businesses to enhance productivity, streamline operations,
//           adopt sustainable practices, and embrace cutting-edge technological
//           advancements.
//         </p>
//         <div className="about-section8-btn-container">
//           <div>
//             <GoArrowLeft onClick={scrollLeft} size={24} />
//           </div>
//           <div>
//             <GoArrowRight onClick={scrollRight} size={24} />
//           </div>
//         </div>
//       </div>
//       <div className="about-section8-items-container" ref={scrollContainerRef}>
//         {OurExpertiseData.map((eachItem, i) => {
//           return (
//             <div key={i} className="about-section8-item-card">
//               <div className="about-section8-items-img">
//                 <img src={eachItem.img} alt="" />
//               </div>
//               <div className="about-section8-item-content">
//                 <div>{eachItem.title}</div>
//                 <p>{eachItem.desc}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="about-section8-mob-btn-container">
//         <div>
//           <GoArrowLeft onClick={mobscrollLeft} size={24} />
//         </div>
//         <div>
//           <GoArrowRight onClick={mobscrollRight} size={24} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutCarousel;


import React, { useRef, useEffect, useCallback } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "../../styles/About.css";
import spm from "../../assets/exp-spm.webp";
import  dev from "../../assets/exp-swedev.webp";
import ele from "../../assets/exp-electronic.webp";

const OurExpertiseData = [
  {
    title: "Machine & Equipment Design",
    desc: "Special Purpose Machines (SPMs): Tailored machines for specific industrial needs. Test Rigs: Advanced systems for testing and validating components. Jigs and Fixtures: Precision tools for enhancing manufacturing processes. Production Planning: Optimizing workflows for maximum efficiency.",
    img: spm,
  },
  {
    title: "Software Development",
    desc: "Mobile app development for iOS and Android platforms. Web applications tailored for functionality and scalability. Comprehensive website building solutions. Custom software development for unique requirements. UI/UX redesign and revamp for modern, intuitive interfaces. Seamless deployment services to launch projects efficiently.",
    img: dev,
  },
  {
    title: "Electronics",
    desc: "IoT Solutions: Smart devices and connectivity for a smarter future. PCB Designing: Efficient, high-quality printed circuit boards. Firmware Development: Embedded software for optimal device functionality. Product Assembly: From concept to final production-ready units. Automation Systems: Advanced electronic systems for operational efficiency.",
    img: ele,
  },
];

function AboutCarousel() {
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(null);
  const isPausedRef = useRef(false);

  const getScrollAmount = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return 0;
    return Math.round(el.clientWidth * 0.8);
  }, []);

  const scrollLeft = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  }, [getScrollAmount]);

  const scrollRight = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = getScrollAmount();
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const nextLeft = el.scrollLeft + scrollAmount;

    if (nextLeft >= maxScrollLeft - 5) {
      // Smooth scroll back to start
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, [getScrollAmount]);

  // Auto-scroll every 3 seconds
  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    autoScrollRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        scrollRight();
      }
    }, 4000);
  }, [scrollRight]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
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

      <div
        className="about-section8-items-container"
        ref={scrollContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {OurExpertiseData.map((item, i) => (
          <div key={i} className="about-section8-item-card">
            <div className="about-section8-items-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="about-section8-item-content">
              <div>{item.title}</div>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="about-section8-mob-btn-container">
        <GoArrowLeft onClick={scrollLeft} size={24} />
        <GoArrowRight onClick={scrollRight} size={24} />
      </div>
    </div>
  );
}

export default AboutCarousel;
