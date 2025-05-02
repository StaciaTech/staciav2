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
//     title: "Chili Ladling Machine-1",
//     description: "Analysis of electronics case study.",
//     image: { imageUrl: "/assets/caseStudy-1.webp" },
//     category: "Mechanical",
//   },
//   {
//     id: "Case Study-2",
//     title: "Chili Ladling Machine-2",
//     description: "Analysis of mechanical case study.",
//     image: { imageUrl: "/assets/caseStudy-2.webp" },
//     category: "Electronics",
//   },
//   {
//     id: "Case Study-3",
//     title: "Chili Ladling Machine-3",
//     description: "Analysis of mechanical case study.",
//     image: { imageUrl: "/assets/caseStudy-3.webp" },
//     category: "Tech",
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

// all filter dep split
//Static

import React, { useEffect, useState, useMemo } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/CaseStudy.css";
import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
import SideBar from "../components/SideBar";
import MobileFooter from "../components/MobileFooter";
import Star from "../components/Star";

const data = [
  {
    id: "Case Study-1",
    title: "Chili Ladling Machine-1",
    description: "Analysis of electronics case study.",
    image: { imageUrl: "/assets/caseStudy-1.webp" },
    category: "Mechanical",
  },
  {
    id: "Case Study-2",
    title: "Chili Ladling Machine-2",
    description: "Analysis of mechanical case study.",
    image: { imageUrl: "/assets/caseStudy-2.webp" },
    category: "Electronics",
  },
  {
    id: "Case Study-3",
    title: "Chili Ladling Machine-3",
    description: "Analysis of mechanical case study.",
    image: { imageUrl: "/assets/caseStudy-3.webp" },
    category: "Tech",
  },
];

export default function CaseStudy() {
  const [activeDepartment, setActiveDepartment] = useState("All");

  // Memoize grouped data to avoid recalculating on every render
  const groupedData = useMemo(() => {
    return data.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  }, []); // Empty dependency array since `data` is static

  // Derive the data to display based on activeDepartment
  const displayData = useMemo(() => {
    if (activeDepartment === "All") {
      return groupedData;
    }
    return {
      [activeDepartment]: data.filter(
        (article) => article.category === activeDepartment
      ),
    };
  }, [activeDepartment, groupedData]);

  // Unique categories for tabs
  const uniqueCategories = [
    "All",
    ...new Set(data.map((item) => item.category)),
  ];

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

      <div className="article-item-tabs-container">
        {uniqueCategories.map((category, i) => (
          <div
            key={i}
            className={`article-item-tab ${
              category === activeDepartment ? "article-item-tab-active" : ""
            }`}
            onClick={() => setActiveDepartment(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <div>
        {Object.keys(displayData).map((category) => (
          <div key={category}>
            <h1 className="product-dep-name">{category}</h1>
            <hr
              style={{
                width: "90%",
                marginLeft: "100px",
                backgroundColor: "#E5E5E5",
                opacity: 0.3,
              }}
            />
            <ReUsableArticle
              data={displayData[category]}
              path={"single-caseStudy"}
            />
          </div>
        ))}
      </div>

      <Footer />
      <MobileFooter />
    </>
  );
}
