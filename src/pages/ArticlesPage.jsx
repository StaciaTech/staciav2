// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/articles.css";
// import ReUsableArticlePage from "../components/ReUsableComp/ReUsableArticlePage";
// import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";

// import MobileFooter from "../components/MobileFooter";
// import SideBar from "../components/SideBar";
// import Star from "../components/Star";
// import { useParams } from "react-router-dom";
// import articlesData from "../Data/Articles.json"; // Importing static JSON file

// function ArticlesPage() {
//   const params = useParams();
//   const [articleData, setArticleData] = useState(articlesData.docs);
//   const [activeDepartment, setActiveDepartment] = useState();
//   const [articleObj, setArticleObj] = useState();

//   useEffect(() => {
//     if (params.department) {
//       setActiveDepartment(params.department);
//     } else if (articleData) {
//       setActiveDepartment(articleData[0]?.name);
//     }
//   }, [articleData, params]);

//   useEffect(() => {
//     if (activeDepartment && articleData) {
//       setArticleObj(articleData.find((eachItem) => eachItem.name === activeDepartment));
//     }
//   }, [activeDepartment, articleData]);

//   return (
//     <div>
//       <div className="nav_style">
//         <NavBar /> <SideBar />
//       </div>
//       {/* Articles Intro*/}
//       <div className="article-section1">
//         <div className="article-section-overlay">
//           <div className="article-title1">
//             <span style={{ userSelect: "none" }}>Articles</span>
//             <Star />
//           </div>
//         </div>
//       </div>
//       <div className="article-item-tabs-container">
//         {articleData?.map((eachItem, i) => (
//           <div
//             key={i}
//             className={`article-item-tab ${eachItem.name === activeDepartment ? "article-item-tab-active" : ""}`}
//             onClick={() => setActiveDepartment(eachItem.name)}
//           >
//             {eachItem.name}
//           </div>
//         ))}
//       </div>
//       <div>
//         {/* <ReUsableArticle data={articleObj?.data} path={"single-article"} /> */}
//         <ReUsableArticlePage data={articleObj?.data} path={"single-article"} />
//       </div>
//       <Footer /> <MobileFooter />
//     </div>
//   );
// }

// export default ArticlesPage;

// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/articles.css";
// import ReUsableArticlePage from "../components/ReUsableComp/ReUsableArticlePage";
// import MobileFooter from "../components/MobileFooter";
// import SideBar from "../components/SideBar";
// import Star from "../components/Star";
// import { useParams } from "react-router-dom";
// import articlesData from "../Data/SingleArticle.json"; // JSON data

// function ArticlesPage() {
//   const params = useParams();
//   const [articleData, setArticleData] = useState(articlesData.articles);
//   const [activeDepartment, setActiveDepartment] = useState();
//   const [articleObj, setArticleObj] = useState();

//   useEffect(() => {
//     if (params.department) {
//       setActiveDepartment(params.department);
//     } else if (articleData?.length > 0) {
//       setActiveDepartment(articleData[0].department);
//     }
//   }, [articleData, params]);

//   useEffect(() => {
//     if (activeDepartment && articleData) {
//       const found = articleData.find(item => item.department === activeDepartment);
//       setArticleObj(found);
//     }
//   }, [activeDepartment, articleData]);

//   return (
//     <div>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>

//       {/* Articles Intro */}
//       <div className="article-section1">
//         <div className="article-section-overlay">
//           <div className="article-title1">
//             <span style={{ userSelect: "none" }}>Articles</span>
//             <Star />
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="article-item-tabs-container">
//         {articleData?.map((item, i) => (
//           <div
//             key={i}
//             className={`article-item-tab ${item.department === activeDepartment ? "article-item-tab-active" : ""}`}
//             onClick={() => setActiveDepartment(item.department)}
//           >
//             {item.department}
//           </div>
//         ))}
//       </div>

//       {/* Reusable Article Display */}
//       <div>
//         {articleObj ? (
//           <ReUsableArticlePage data={[articleObj]} path="single-article" />
//         ) : (
//           <div style={{ textAlign: "center", padding: "2rem" }}>No articles found.</div>
//         )}
//       </div>

//       <Footer />
//       <MobileFooter />
//     </div>
//   );
// }

// export default ArticlesPage;

// Dot container

import React, { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/articles.css";
import ReUsableArticlePage from "../components/ReUsableComp/ReUsableArticlePage";
import MobileFooter from "../components/MobileFooter";
import SideBar from "../components/SideBar";
import Star from "../components/Star";
import { useParams } from "react-router-dom";
import articlesData from "../Data/SingleArticle.json"; // JSON data

function ArticlesPage() {
  const params = useParams();
  const [articleData, setArticleData] = useState(articlesData.articles);
  const [activeDepartment, setActiveDepartment] = useState("");
  const [isDotClickScroll, setIsDotClickScroll] = useState(false); // Tracks dot-initiated scrolls
  const sectionsRef = useRef({});
  const scrollTimeoutRef = useRef(null); // To manage scroll timeout

  useEffect(() => {
    if (params.department) {
      setActiveDepartment(params.department);
    } else if (articleData?.length > 0) {
      setActiveDepartment(articleData[0].department);
    }
  }, [articleData, params]);

  // Scroll to active department on mount or when changed (not during dot-click scroll)
  useEffect(() => {
    if (articleData.length && activeDepartment && !isDotClickScroll) {
      const section = document.getElementById(activeDepartment);
      if (section) {
        const yOffset = -80; // Adjust for navbar
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [activeDepartment, articleData, isDotClickScroll]);

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
        threshold: 0.3, // Trigger when 30% of the section is in view
      }
    );

    articleData.forEach((item) => {
      const section = sectionsRef.current[item.department];
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [articleData, isDotClickScroll]);

  // Handle dot click
  const handleDotClick = (departmentName) => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current); // Clear existing timeout
    }

    setIsDotClickScroll(true); // Disable observer updates for dot clicks
    setActiveDepartment(departmentName); // Set target department

    const section = document.getElementById(departmentName);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      // Reset dot-click scroll after animation
      scrollTimeoutRef.current = setTimeout(() => {
        setIsDotClickScroll(false);
      }, 1200); // Duration for scroll animation
    }
  };

  return (
    <div>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>

      {/* Articles Intro */}
      <div className="article-section1">
        <div className="article-section-overlay">
          <div className="article-title1">
            <span style={{ userSelect: "none" }}>Articles</span>
            <Star />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Tabs */}
      <div className="mobile-navigation-tabs">
        {articleData?.map((item, i) => (
          <div
            key={i}
            className={`article-item-tab ${
              item.department === activeDepartment
                ? "active-service-mob-tab"
                : ""
            }`}
            onClick={() => handleDotClick(item.department)}
          >
            {item.department}
          </div>
        ))}
      </div>

      {/* Article Content with Dot Navigation */}
      <div className="article-page-content-container">
        <div className="article-page-main-dots-container">
          {articleData?.map((item, i) => (
            <DepartmentDot
              key={i}
              eachItem={item}
              activeDepartment={activeDepartment}
              setActiveDepartment={handleDotClick}
            />
          ))}
        </div>
        <div>
          {articleData?.map((item, i) => (
            <div
              className="all-articles"
              key={i}
              id={item.department}
              ref={(el) => (sectionsRef.current[item.department] = el)}
            >
              <div className="all-article-dept-title">{item.department}</div>
              <ReUsableArticlePage data={[item]} path="single-article" />
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <MobileFooter />
    </div>
  );
}

const DepartmentDot = ({ eachItem, activeDepartment, setActiveDepartment }) => {
  const [showDept, setShowDept] = useState(false);

  useEffect(() => {
    if (eachItem.department === activeDepartment) {
      setShowDept(true);
      const timeoutId = setTimeout(() => {
        setShowDept(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    } else {
      setShowDept(false);
    }
  }, [activeDepartment, eachItem.department]);

  return (
    <div className="article-page-dept-container">
      <div
        className={`article-page-main-dots ${
          eachItem.department === activeDepartment
            ? "article-page-main-dots-active"
            : ""
        }`}
        onClick={() => setActiveDepartment(eachItem.department)}
        onMouseOver={() => setShowDept(true)}
        onMouseOut={() => setShowDept(false)}
      ></div>
      {showDept && (
        <div className="article-page-dept-name">{eachItem.department}</div>
      )}
    </div>
  );
};

export default ArticlesPage;
