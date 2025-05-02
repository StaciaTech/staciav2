

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

//  all filter deparment  split 
import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/articles.css";
import ReUsableArticlePage from "../components/ReUsableComp/ReUsableArticlePage";
import MobileFooter from "../components/MobileFooter";
import SideBar from "../components/SideBar";
import Star from "../components/Star";
import articlesData from "../Data/Articles.json"; // Importing static JSON file

function ArticlesPage() {
  const params = useParams();
  const [activeDepartment, setActiveDepartment] = useState(
    params.department || "All"
  );

  // Memoize article data
  const articleData = useMemo(() => articlesData.docs || [], []);

  // Memoize article object for the active department
  const articleObj = useMemo(() => {
    if (activeDepartment === "All") return null;
    return articleData.find((item) => item.name === activeDepartment) || null;
  }, [activeDepartment, articleData]);

  // Memoize unique categories for tabs
  const uniqueCategories = useMemo(
    () => ["All", ...articleData.map((item) => item.name)],
    [articleData]
  );

  // Memoize display data based on active department
  const displayData = useMemo(() => {
    if (activeDepartment === "All") {
      return articleData;
    }
    return articleObj ? [articleObj] : [];
  }, [activeDepartment, articleObj, articleData]);

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
        {displayData.length > 0 ? (
          displayData.map((department) => (
            <div key={department.name}>
              <h2 className="product-dep-name">{department.name}</h2>
              <hr
                className="department-separator"
                style={{
                  width: "90%",
                  marginLeft: "100px",
                  backgroundColor: "#E5E5E5",
                  opacity: 0.3,
                }}
              />
              <ReUsableArticlePage
                data={department.data}
                path={"single-article"}
              />
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default ArticlesPage;