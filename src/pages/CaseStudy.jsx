// //Static

// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/CaseStudy.css";
// import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
// import SideBar from "../components/SideBar";
// import MobileFooter from "../components/MobileFooter";
// import Star from "../components/Star";
// import { useParams } from "react-router-dom";

// const data = [
//   {
//     id: "Case Study-1",
//     title: "Chili Ladling Machine",
//     description: "Analysis of electronics case study.",
//     image: { imageUrl: "/assets/caseStudy-1.webp" },
//     category: "Mechanical",
//   },

// ];

// export default function CaseStudy() {
//   const [casestudyData, setCasestudyData] = useState([]);
//   const [activeDepartment, setActiveDepartment] = useState("All");
//   const [cursorVisible, setCursorVisible] = useState(false);

//   const details = data.caseStudy;
//   console.log(details,"Details");

//   useEffect(() => {
//     if (activeDepartment === "All") {
//       const uniqueCategoryStudies = [];
//       const addedCategories = new Set();

//       data.forEach((article) => {
//         if (!addedCategories.has(article.category)) {
//           uniqueCategoryStudies.push(article);
//           addedCategories.add(article.category);
//         }
//       });

//       setCasestudyData(uniqueCategoryStudies);
//     } else {
//       setCasestudyData(
//         data.filter((article) => article.category === activeDepartment)
//       );
//     }
//   }, [activeDepartment]);

//   const uniqueCategories = [
//     "All",
//     ...new Set(data?.map((item) => item.category)),
//   ];

//   return (
//     <>
//       <NavBar />
//       <SideBar />
//       <div className="case-study-section1">
//         <div className="case-study-section-overlay">
//           <div className="case-study-title1">
//             <span style={{ userSelect: "none" }}>Case Study</span>
//             <Star />
//           </div>
//         </div>
//       </div>

//       <div className="article-item-tabs-container">
//         {uniqueCategories?.map((category, i) => (
//           <div
//             key={i}
//             className={`article-item-tab ${
//               category === activeDepartment ? "article-item-tab-active" : ""
//             }`}
//             onClick={() => setActiveDepartment(category)}
//           >
//             {category}
//           </div>
//         ))}
//       </div>

//       <div>
//         <ReUsableArticle data={casestudyData} path={"single-caseStudy"}/>
//       </div>

//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }

// src/pages/CaseStudy.js
// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/CaseStudy.css";
// import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
// import SideBar from "../components/SideBar";
// import MobileFooter from "../components/MobileFooter";
// import Star from "../components/Star";
// import caseStudiesData from "../Data/SingleCaseStudy.json"; // Import JSON data

// export default function CaseStudy() {
//   const [casestudyData, setCasestudyData] = useState([]);
//   const [activeDepartment, setActiveDepartment] = useState("All");

//   useEffect(() => {
//     const data = caseStudiesData.singlecasestudy;

//     if (activeDepartment === "All") {
//       // Select one case study per category for "All" filter
//       const uniqueCategoryStudies = [];
//       const addedCategories = new Set();

//       data.forEach((category) => {
//         if (!addedCategories.has(category.name) && category.data.length > 0) {
//           uniqueCategoryStudies.push(category.data[0]); // Take first case study from each category
//           addedCategories.add(category.name);
//         }
//       });

//       setCasestudyData(uniqueCategoryStudies);
//     } else {
//       // Filter case studies by selected category
//       const filteredData = data
//         .filter((category) => category.name === activeDepartment)
//         .flatMap((category) => category.data);
//       setCasestudyData(filteredData);
//     }
//   }, [activeDepartment]);

//   // Extract unique categories from JSON data
//   const uniqueCategories = [
//     "All",
//     ...new Set(caseStudiesData.singlecasestudy.map((item) => item.name)),
//   ];

//   return (
//     <>
//       <NavBar />
//       <SideBar />
//       <div className="case-study-section1">
//         <div className="case-study-section-overlay">
//           <div className="case-study-title1">
//             <span style={{ userSelect: "none" }}>Case Study</span>
//             <Star />
//           </div>
//         </div>
//       </div>

//       <div className="article-item-tabs-container">
//         {uniqueCategories.map((category, i) => (
//           <div
//             key={i}
//             className={`article-item-tab ${category === activeDepartment ? "article-item-tab-active" : ""
//               }`}
//             onClick={() => setActiveDepartment(category)}
//           >
//             {category}
//           </div>
//         ))}
//       </div>

//       <div>
//         <ReUsableArticle data={casestudyData} path={"single-caseStudy"} />
//       </div>

//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }




// Dot container

import React, { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/CaseStudy.css";
import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
import SideBar from "../components/SideBar";
import MobileFooter from "../components/MobileFooter";
import Star from "../components/Star";
// import caseStudiesData from "../Data/SingleCaseStudy.json";
import caseStudiesData from "../Data/SingleCaseStudy2.json"

function CaseStudy() {
  const [activeDepartment, setActiveDepartment] = useState("");
  const [isDotClickScroll, setIsDotClickScroll] = useState(false);
  const sectionsRef = useRef({});
  const scrollTimeoutRef = useRef(null);

  // Extract unique categories from JSON data
  const uniqueCategories = [
    ...new Set(caseStudiesData.singlecasestudy.map((item) => item.name)),
  ];

  // Set initial active department
  useEffect(() => {
    if (caseStudiesData.singlecasestudy.length > 0) {
      setActiveDepartment(caseStudiesData.singlecasestudy[0].name);
    }
  }, []);

  // Intersection Observer for updating active department during scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!isDotClickScroll) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveDepartment(entry.target.id);
            }
          });
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    uniqueCategories.forEach((category) => {
      const section = sectionsRef.current[category];
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [uniqueCategories, isDotClickScroll]);

  // Handle dot or tab click
  const handleDotClick = (category) => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    setIsDotClickScroll(true);
    setActiveDepartment(category);

    const section = document.getElementById(category);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      scrollTimeoutRef.current = setTimeout(() => {
        setIsDotClickScroll(false);
      }, 1200);
    }
  };

  return (
    <>
      <NavBar />
      <SideBar />
      <div className="case-study-section1">
        <div className="case-study-section-overlay">
          <div className="case-study-title1">
            <span style={{ userSelect: "none" }}>Case Study</span>
            <Star />
          </div>
        </div>
      </div>

      <div className="mobile-navigation-tabs">
        {uniqueCategories.map((category, i) => (
          <div
            key={i}
            onClick={() => handleDotClick(category)}
            className={
              activeDepartment === category ? "active-service-mob-tab" : ""
            }
          >
            {category}
          </div>
        ))}
      </div>

      <div className="case-study-content-container">
        <div className="case-study-main-dots-container">
          {uniqueCategories.map((category, i) => (
            <CategoryDot
              key={i}
              category={category}
              activeDepartment={activeDepartment}
              setActiveDepartment={handleDotClick}
            />
          ))}
        </div>
        <div>
          {caseStudiesData.singlecasestudy.map((category, i) => (
            <div
              className="case-study-section"
              key={i}
              id={category.name}
              ref={(el) => (sectionsRef.current[category.name] = el)}
            >
              <div className="case-study-category-title">{category.name}</div>
              <ReUsableArticle data={category.data} path={"single-caseStudy"} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <MobileFooter />
    </>
  );
}

const CategoryDot = ({ category, activeDepartment, setActiveDepartment }) => {
  const [showCategory, setShowCategory] = useState(false);

  useEffect(() => {
    if (category === activeDepartment) {
      setShowCategory(true);
      const timeoutId = setTimeout(() => {
        setShowCategory(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    } else {
      setShowCategory(false);
    }
  }, [activeDepartment, category]);

  return (
    <div className="case-study-dept-container">
      <div
        className={`case-study-main-dots ${
          category === activeDepartment ? "case-study-main-dots-active" : ""
        }`}
        onClick={() => setActiveDepartment(category)}
        onMouseOver={() => setShowCategory(true)}
        onMouseOut={() => setShowCategory(false)}
      ></div>
      {showCategory && (
        <div className="case-study-dept-name">{category}</div>
      )}
    </div>
  );
};

export default CaseStudy;


// import React, { useEffect, useState, useRef } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/CaseStudy.css";
// import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
// import SideBar from "../components/SideBar";
// import MobileFooter from "../components/MobileFooter";
// import Star from "../components/Star";
// import caseStudiesData from "../Data/SingleCaseStudy2.json";

// function CaseStudy() {
//   const [activeDepartment, setActiveDepartment] = useState("");
//   const [isDotClickScroll, setIsDotClickScroll] = useState(false);
//   const sectionsRef = useRef({});
//   const scrollTimeoutRef = useRef(null);
//   const debounceTimeoutRef = useRef(null);

//   // Extract unique categories from JSON data with defensive check
//   const uniqueCategories = caseStudiesData.singlecasestudy?.length
//     ? [...new Set(caseStudiesData.singlecasestudy.map((item) => item.name))]
//     : [];

//   // Set initial active department
//   useEffect(() => {
//     if (uniqueCategories.length > 0) {
//       setActiveDepartment(uniqueCategories[0]);
//     }
//   }, [uniqueCategories]);

//   // Scroll to department from URL or dot click
//   useEffect(() => {
//     if (uniqueCategories.length && activeDepartment && !isDotClickScroll) {
//       const section = document.getElementById(activeDepartment);
//       if (section) {
//         const yOffset = -80; // Adjust for navbar
//         const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     }
//   }, [activeDepartment, uniqueCategories, isDotClickScroll]);

//   // Intersection Observer for updating active department during scrolling
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (!isDotClickScroll) {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               // Debounce the state update
//               if (debounceTimeoutRef.current) {
//                 clearTimeout(debounceTimeoutRef.current);
//               }
//               debounceTimeoutRef.current = setTimeout(() => {
//                 setActiveDepartment(entry.target.id);
//               }, 100); // Adjust debounce delay as needed
//             }
//           });
//         }
//       },
//       {
//         root: null,
//         threshold: 0.1, // Lower threshold to reduce overlap
//         rootMargin: "-20% 0px -20% 0px", // Reduce intersection area
//       }
//     );

//     uniqueCategories.forEach((category) => {
//       const section = sectionsRef.current[category];
//       if (section) observer.observe(section);
//     });

//     return () => {
//       observer.disconnect();
//       if (debounceTimeoutRef.current) {
//         clearTimeout(debounceTimeoutRef.current);
//       }
//     };
//   }, [uniqueCategories, isDotClickScroll]);

//   // Handle dot or tab click
//   const handleDotClick = (category) => {
//     if (scrollTimeoutRef.current) {
//       clearTimeout(scrollTimeoutRef.current);
//     }

//     setIsDotClickScroll(true);
//     setActiveDepartment(category);

//     const section = document.getElementById(category);
//     if (section) {
//       const yOffset = -80;
//       const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });

//       scrollTimeoutRef.current = setTimeout(() => {
//         setIsDotClickScroll(false);
//       }, 1200);
//     }
//   };

//   return (
//     <div>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       <div className="case-study-section1">
//         <div className="case-study-section-overlay">
//           <div className="case-study-title1">
//             <span style={{ userSelect: "none" }}>Case Study</span>
//             <Star />
//           </div>
//         </div>
//       </div>
//       {!uniqueCategories.length ? (
//         <div>Loading...</div>
//       ) : (
//         <div className="case-study-content-container">
//           <div className="mobile-navigation-tabs">
//             {uniqueCategories.map((category, i) => (
//               <div
//                 key={i}
//                 onClick={() => handleDotClick(category)}
//                 className={
//                   activeDepartment === category ? "active-service-mob-tab" : ""
//                 }
//               >
//                 {category}
//               </div>
//             ))}
//           </div>
//           <div className="case-study-main-dots-container">
//             {uniqueCategories.map((category, i) => (
//               <CategoryDot
//                 key={i}
//                 category={category}
//                 activeDepartment={activeDepartment}
//                 setActiveDepartment={handleDotClick}
//               />
//             ))}
//           </div>
//           <div>
//             {caseStudiesData.singlecasestudy?.map((category, i) => (
//               <div
//                 className="case-study-section"
//                 key={i}
//                 id={category.name}
//                 ref={(el) => (sectionsRef.current[category.name] = el)}
//                 style={{ minHeight: "100vh" }} // Ensure sections are tall enough
//               >
//                 <div className="case-study-category-title">{category.name}</div>
//                 <ReUsableArticle
//                   data={category.data?.map((item) => ({
//                     ...item,
//                     image: { ...item.image, imageUrl: item.image?.imageUrl || "" },
//                   })) || []}
//                   path={"single-caseStudy"}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       <Footer />
//       <MobileFooter />
//     </div>
//   );
// }

// const CategoryDot = ({ category, activeDepartment, setActiveDepartment }) => {
//   const [showCategory, setShowCategory] = useState(false);

//   useEffect(() => {
//     if (category === activeDepartment) {
//       setShowCategory(true);
//       const timeoutId = setTimeout(() => {
//         setShowCategory(false);
//       }, 3000);
//       return () => clearTimeout(timeoutId);
//     } else {
//       setShowCategory(false);
//     }
//   }, [activeDepartment, category]);

//   return (
//     <div className="case-study-dept-container">
//       <div
//         className={`case-study-main-dots ${
//           category === activeDepartment ? "case-study-main-dots-active" : ""
//         }`}
//         onClick={() => setActiveDepartment(category)}
//         onMouseOver={() => setShowCategory(true)}
//         onMouseOut={() => setShowCategory(false)}
//       ></div>
//       {showCategory && <div className="case-study-dept-name">{category}</div>}
//     </div>
//   );
// };

// export default CaseStudy;