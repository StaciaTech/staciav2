// import React, { useEffect, useState, useRef } from "react";
// import arrow from "../../assets/arrow.png";
// import activearrow from "../../assets/active-arrow.png";
// import industriesData from "../../Data/IndustriesHome.json"; // 👈 local JSON file
// import { useNavigate } from "react-router-dom";
// import "../../styles/Home/IndustriesHome.css";

// export default function IndustriesDisplay() {
//   const navigateTo = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const timerRef = useRef(null);

//   const industries = industriesData || [];

//   // Auto-slide every 5s
//   useEffect(() => {
//     if (!isHovered && industries.length > 0) {
//       timerRef.current = setInterval(() => {
//         setCurrentSlide((prev) =>
//           prev === industries.length - 1 ? 0 : prev + 1
//         );
//       }, 5000);
//     }
//     return () => clearInterval(timerRef.current);
//   }, [isHovered, industries]);

//   const handleMouseEnter = (index) => {
//     clearInterval(timerRef.current);
//     setCurrentSlide(index);
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div className="industry-display">
//       <div className="our-industry-display-title test-seclection-blue">
//         Industries We Serve
//       </div>

//       <div className="industry-display1">
//         {/* <div className="industry-left">
//           <div className="industry-img-box">
//             <img
//               src={industries?.[currentSlide]?.imageUrl}
//               alt={industries?.[currentSlide]?.title}
//               loading="lazy"
//             />
//           </div>
//         </div> */}

//         <div className="industry-left">
//           <div
//             style={{
//               height: "1px",
//               width: "100%",
//               backgroundColor: "#0D022566",
//               marginBottom: "10px",
//             }}
//           ></div>

//           {industries?.map((data, i) => (
//             <div
//               className="industry-text-box"
//               key={i}
//               onMouseEnter={() => handleMouseEnter(i)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   width: "100%",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => {
//                   navigateTo(`/industries/${data.title}`);
//                   window.scrollTo(0, 0);
//                 }}
//               >
//                 {industries[currentSlide].title === data.title ? (
//                   <div className="industry-text">{data.title}</div>
//                 ) : (
//                   <div className="industry-text1">{data.title}</div>
//                 )}
//                 <img
//                   src={
//                     industries[currentSlide].title === data.title
//                       ? activearrow
//                       : arrow
//                   }
//                   alt=""
//                 />
//               </div>
//               <div
//                 className={
//                   industries[currentSlide].title === data.title
//                     ? "box-line"
//                     : "box-line1"
//                 }
//               ></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import arrow from "../../assets/arrow.png";
// import activearrow from "../../assets/active-arrow.png";
// import industriesData from "../../Data/IndustriesHome.json";
// import "../../styles/Home/IndustriesHome.css";

// export default function IndustriesDisplay() {
//   const navigateTo = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const timerRef = useRef(null);

//   const industries = industriesData || [];

//   // Auto-slide every 5s (pauses on hover)
//   useEffect(() => {
//     if (!isHovered && industries.length > 0) {
//       timerRef.current = setInterval(() => {
//         setCurrentSlide((prev) =>
//           prev === industries.length - 1 ? 0 : prev + 1
//         );
//       }, 5000);
//     }
//     return () => clearInterval(timerRef.current);
//   }, [isHovered, industries]);

//   const handleMouseEnter = (index) => {
//     clearInterval(timerRef.current);
//     setCurrentSlide(index);
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   // safe guard when industries empty
//   const currentIndustry = industries?.[currentSlide] || {
//     title: "Industry",
//     description:
//       "Select an industry from the left to view details.",
//     icon: "🍽️",
//   };

//   return (
//     <div className="industry-display">
//       <div className="our-industry-display-title test-seclection-blue">
//         Industries We Serve
//       </div>

//       <div className="industry-display1">
//         {/* LEFT: list (unchanged behavior) */}
//         <div className="industry-left">
//           <div
//             style={{
//               height: "1px",
//               width: "100%",
//               backgroundColor: "#0D022566",
//               marginBottom: "10px",
//             }}
//           ></div>

//           {industries?.map((data, i) => (
//             <div
//               className="industry-text-box"
//               key={i}
//               onMouseEnter={() => handleMouseEnter(i)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   width: "100%",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => {
//                   navigateTo(`/industries/${data.title}`);
//                   window.scrollTo(0, 0);
//                 }}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     navigateTo(`/industries/${data.title}`);
//                     window.scrollTo(0, 0);
//                   }
//                 }}
//                 aria-selected={industries[currentSlide]?.title === data.title}
//               >
//                 {industries[currentSlide]?.title === data.title ? (
//                   <div className="industry-text">{data.title}</div>
//                 ) : (
//                   <div className="industry-text1">{data.title}</div>
//                 )}
//                 <img
//                   src={
//                     industries[currentSlide]?.title === data.title
//                       ? activearrow
//                       : arrow
//                   }
//                   alt=""
//                   aria-hidden="true"
//                 />
//               </div>

//               <div
//                 className={
//                   industries[currentSlide]?.title === data.title
//                     ? "box-line"
//                     : "box-line1"
//                 }
//               ></div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT: featured industry card (new) */}
//         <div className="industry-right" aria-live="polite">
//           <div className="featured-card">
//             <div className="featured-header">
//               <div className="featured-icon" aria-hidden="true">
//                 {/* if your JSON contains an icon, you can render it; otherwise show fallback */}
//                 {currentIndustry.icon || ""}
//               </div>
//               <div className="featured-subtitle">Featured Industry</div>
//             </div>

//             <h3 className="featured-heading">{currentIndustry.title}</h3>

//             <p className="featured-desc">
//               {currentIndustry.description ||
//                 "Stacia Corp specializes in innovative engineering solutions for the selected industry. Click any action below to explore related services and projects."}
//             </p>

//             <div className="featured-actions">
//               <button
//                 className="featured-btn"
//                 onClick={() => {
//                   navigateTo(`/industries/${currentIndustry.title}/services`);
//                   window.scrollTo(0, 0);
//                 }}
//               >
//                 <span>Explore Services</span>
//                 <img src={arrow} alt="" />
//               </button>

//               <button
//                 className="featured-btn"
//                 onClick={() => {
//                   navigateTo(`/industries/${currentIndustry.title}/projects`);
//                   window.scrollTo(0, 0);
//                 }}
//               >
//                 <span>View Projects</span>
//                 <img src={arrow} alt="" />
//               </button>

//               <button
//                 className="featured-btn"
//                 onClick={() => {
//                   navigateTo(`/industries/${currentIndustry.title}/case-studies`);
//                   window.scrollTo(0, 0);
//                 }}
//               >
//                 <span>Case Studies</span>
//                 <img src={arrow} alt="" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import activearrow from "../../assets/active-arrow.png";
import industriesData from "../../Data/IndustriesHome.json";
import "../../styles/Home/IndustriesHome.css";

import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as SlIcons from "react-icons/sl";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";

const iconSets = { ...MdIcons, ...GiIcons, ...SlIcons, ...VscIcons, ...FaIcons };

export default function IndustriesDisplay() {
  const navigateTo = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const industries = industriesData || [];

  // Auto-slide every 5s
  useEffect(() => {
    if (!isHovered && industries.length > 0) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) =>
          prev === industries.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isHovered, industries]);

  const handleMouseEnter = (index) => {
    clearInterval(timerRef.current);
    setCurrentSlide(index);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const currentIndustry = industries[currentSlide] || {
    title: "Industry",
    description: "Select an industry from the left to view details.",
    icon: "MdBusiness", // Example: a valid icon name from react-icons
  };

  const IconComponent = iconSets[currentIndustry.icon];


  return (
    <div className="industry-display">
      <div className="our-industry-display-title test-seclection-blue">
        Industries Covered
      </div>

      <div className="industry-display1">
        {/* LEFT SIDE */}
        <div className="industry-left">
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#0D022566",
              marginBottom: "10px",
            }}
          ></div>

          {industries?.map((data, i) => (
            <div
              className="industry-text-box"
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={() => {
                  const formattedTitle = data.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")          // spaces → hyphens
                    .replace(/[^a-z0-9-]/g, "");   // remove special chars

                  navigateTo(`/industries-covered/${formattedTitle}`);
                }}
              >
                {industries[currentSlide]?.title === data.title ? (
                  <div className="industry-text">{data.title}</div>
                ) : (
                  <div className="industry-text1">{data.title}</div>
                )}
                <img
                  src={
                    industries[currentSlide]?.title === data.title
                      ? activearrow
                      : arrow
                  }
                  alt="arrow"
                />
              </div>

              <div
                className={
                  industries[currentSlide]?.title === data.title
                    ? "box-line"
                    : "box-line1"
                }
              ></div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="industry-right">
          <div className="vertical-carousel">
            {industries?.map((data, i) => {
              const IconComp = iconSets[data.icon];
              return (
                <div className="featured-card" key={i}>
                  <div className="featured-header">
                    <div className="featured-icon">
                      {IconComp && <IconComp />}
                    </div>
                    <div className="featured-subtitle">Featured Industry</div>
                  </div>

                  <h3 className="featured-heading">{data?.title}</h3>

                  <p className="featured-desc">
                    {data?.description ||
                      "We deliver tailored, innovative solutions for each industry, helping clients achieve long-term impact and efficiency."}
                  </p>

                  <div className="featured-actions">
                    <button
                      className="dept-btn-ind"
                      style={{ "--dept-color": "#0d0225" }}
                      onClick={() => {
                        navigateTo(`/industries/${data?.title}/services`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <span>Explore Services</span>
                      <img src={arrow} alt="arrow" />
                    </button>

                    <button
                      className="dept-btn-ind"
                      style={{ "--dept-color": "#0d0225" }}
                      onClick={() => {
                        navigateTo(`/industries/${data?.title}/projects`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <span>View Projects</span>
                      <img src={arrow} alt="arrow" />
                    </button>

                    <button
                      className="dept-btn-ind"
                      style={{ "--dept-color": "#0d0225" }}
                      onClick={() => {
                        navigateTo(`/industries/${data?.title}/case-studies`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <span>Case Studies</span>
                      <img src={arrow} alt="arrow" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

