// import React from "react";
// import "../../styles/Home/Articles.css";
// import Marquee from "react-fast-marquee";
// import { useNavigate } from "react-router-dom";

// function SingleArticleCard() {
//   const navigate = useNavigate();
//   return (
//     <div className="article-outline-holder"
//       onClick={() => {
//         navigate("/article");
//         window.scrollTo(0, 0);
//       }}>
//       <div className="single-article-card-image">
//         <div className="article-text-container">
//           <div className="article-author-name test-seclection-white">
//             Stacia Power Solutions
//           </div>
//           <div className="card-article-title test-seclection-white">
//             Nanostructured Photovoltaic Cells
//           </div>
//           <div className="card-article-body test-seclection-white">
//             Nanostructured Photovoltaics is a new type of solar technology that
//             uses nanometer-sized structures to harvest sunlight. Nanostructured
//             photovoltaic cells (NPsVCs) have the potential to revolutionize
//             solar energy generation because they can be made to be much more
//             efficient than traditional solar cells.
//           </div>
//           <div
//             className="article-learn-more-link pointer"
//             onClick={() => {
//               navigate("/article");
//               window.scrollTo(0, 0);
//             }}
//           >
//             Read More &gt;{" "}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// function Articles() {
//   return (
//     <div style={{ marginBottom: "1rem" }}>
//       <div className="articles-title">Articles</div>
//       <div className="article-slider">
//         {/* <Marquee
//           style={{
//             display: "flex",
//             alignItems: "flex-end",
//             height: "100%",
//             position: "relative",
//           }}
//           speed={50}
//           pauseOnHover={true}
//         > */}
//         <SingleArticleCard />
//         {/* <SingleArticleCard />
//           <SingleArticleCard />
//           <SingleArticleCard />
//           <SingleArticleCard /> */}
//         {/* </Marquee> */}
//       </div>
//     </div>
//   );
// }

// export default Articles;



// import React from "react";
// import "../../styles/Home/Articles.css";
// import Marquee from "react-fast-marquee";
// import { useNavigate } from "react-router-dom";
// import articlesData from "../../Data/SingleArticle.json"; // Adjust path based on your project structure

// function SingleArticleCard({ article }) {
//   const navigate = useNavigate();

//   // Truncate content for preview (first section's content, limited to ~200 characters)
//   const getPreviewContent = () => {
//     const firstSection = article.sections[0];
//     const content = typeof firstSection.content === 'string'
//       ? firstSection.content
//       : firstSection.content.map(item => item.description).join(' ');
//     return content.length > 200 ? `${content.substring(0, 200)}...` : content;
//   };

//   return (
//     <div
//       className="article-outline-holder"
//       onClick={() => {
//         navigate(`/article/${article.title.replace(/\s+/g, '-').toLowerCase()}`);
//         window.scrollTo(0, 0);
//       }}
//     >
//       <div className="single-article-card-image">
//         <div className="article-text-container">
//           <div className="article-author-name test-seclection-white">
//             {article.author}
//           </div>
//           <div className="card-article-title test-seclection-white">
//             {article.title}
//           </div>
//           <div className="card-article-body test-seclection-white">
//             {getPreviewContent()}
//           </div>
//           <div
//             className="article-learn-more-link pointer"
//             onClick={() => {
//               navigate(`/article/${article.title.replace(/\s+/g, '-').toLowerCase()}`);
//               window.scrollTo(0, 0);
//             }}
//           >
//             Read More 
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Articles() {
//   return (
//     <div style={{ marginBottom: "1rem" }}>
//       <div className="articles-title">Articles</div>
//       <div className="article-slider">
//         <Marquee
//           style={{
//             display: "flex",
//             alignItems: "flex-end",
//             height: "100%",
//             position: "relative",
//           }}
//           speed={30}
//           loop={0}
//           pauseOnHover={true}

//         >
//           {articlesData.articles.map((article, index) => (
//             <SingleArticleCard key={index} article={article} />
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// }

// export default Articles;

// import React from "react";
// import "../../styles/Home/Articles.css";
// import Marquee from "react-fast-marquee";
// import { useNavigate } from "react-router-dom";
// import articlesData from "../../Data/SingleArticle.json"; // Adjust path based on your project structure

// function SingleArticleCard({ article }) {
//   const navigate = useNavigate();

//   // Truncate content for preview (first section's content, limited to ~200 characters)
//   const getPreviewContent = () => {
//     const firstSection = article.sections[0];
//     const content = typeof firstSection.content === "string"
//       ? firstSection.content
//       : firstSection.content.map((item) => item.description).join(" ");
//     return content.length > 200 ? `${content.substring(0, 200)}...` : content;
//   };

//   return (
//     <div
//       className="article-outline-holder"
//       onClick={() => {
//         navigate(`/article/single-article/${article.title.replace(/\s+/g, "-").toLowerCase()}`);
//         window.scrollTo(0, 0);
//       }}
//     >
//       <div  
//         className="single-article-card-image"
//         style={{
//           backgroundImage: `linear-gradient(to bottom, #0d022500, #0d0225cc), url(${article.mainImageUrl})`,
//         }}
//       >
//         <div className="article-text-container">
//           <div className="article-author-name test-seclection-white">
//             {article.author}
//           </div>
//           <div className="card-article-title test-seclection-white">
//             {article.title}
//           </div>
//           <div className="card-article-body test-seclection-white">
//             {getPreviewContent()}
//           </div>
//           <div
//             className="article-learn-more-link pointer"
//             onClick={() => {
//               navigate(`/article/single-article/${article.title.replace(/\s+/g, "-").toLowerCase()}`);
//               window.scrollTo(0, 0);
//             }}
//           >
//             Read More
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Articles() {
//   return (
//     <div style={{ marginBottom: "1rem" }}>
//       <div className="articles-title">Articles</div>
//       <div className="article-slider">
//         {/* <Marquee
//           // style={{
//           //   display: "flex",
//           //   alignItems: "flex-end",
//           //   height: "100%",
//           //   position: "relative",
//           // }}
//           // speed={30}
//           // loop={0}
//           // pauseOnHover={true}
//           style={{  display: "flex", alignItems: "flex-end",overflow: "hidden", height: "100%", whiteSpace: "nowrap" }}
            
//           speed={30}
//           loop
//           pauseOnHover
//         > */}

//         <Marquee
//           style={{
//             display: "flex",
//             alignItems: "flex-end",
//             height: "100%",
//             position: "relative",
//             gap: "50px"
//           }}
//           speed={50}
//           pauseOnHover={true}
//         >
//           {articlesData.articles.map((article, index) => (
//             <SingleArticleCard key={index} article={article} />
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// }

// export default Articles;




//praveen kumar

import React, { useState } from "react";
import "../../styles/Home/Articles.css";
import { useNavigate } from "react-router-dom";
import articlesData from "../../Data/SingleArticle.json";

function SingleArticleCard({ article }) {
  const navigate = useNavigate();

  const getPreviewContent = () => {
    const firstSection = article.sections[0];
    const content =
      typeof firstSection.content === "string"
        ? firstSection.content
        : firstSection.content.map((item) => item.description).join(" ");
    return content.length > 200 ? `${content.substring(0, 90)}...` : content;
  };

  return (
    <div
      className="article-outline-holder"
      onClick={() => {
        navigate(
          `/article/single-article/${article.title
            .replace(/\s+/g, "-")
            .toLowerCase()}`
        );
        window.scrollTo(0, 0);
      }}
    >
      <div
        className="single-article-card-image"
        style={{
          backgroundImage: `linear-gradient(to bottom, #0d022500, #0d0225cc), url(${article.mainImageUrl})`,
        }}
      >
        <div className="article-text-container">
          <div className="article-author-name test-seclection-white">
            {article.author}
          </div>
          <div className="card-article-title test-seclection-white">
            {article.title}
          </div>

          <div
            className="article-learn-more-link pointer"
            onClick={() => {
              navigate(
                `/article/single-article/${article.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`
              );
              window.scrollTo(0, 0);
            }}
          >
            <span >{getPreviewContent()}</span>
            Read More
          </div>
        </div>
      </div>
    </div>
  );
}

function Articles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalArticles = articlesData.articles.length;
  const cardsPerSlide = 3; // Number of cards to slide at a time
  const visibleCards = 3; // Number of cards visible on screen

  // Calculate the maximum index to stop at (last group of 3 cards)
  const maxIndex = Math.max(0, totalArticles - visibleCards);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - cardsPerSlide;
      return Math.max(0, newIndex);
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + cardsPerSlide;
      return Math.min(maxIndex, newIndex);
    });
  };

  return (
    <div className="articles-container">
      <div className="articles-header">
        <div className="articles-title">Articles</div>
        <div className="carousel-controls">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
          >
            →
          </button>
        </div>
      </div>
      <div className="carousel-divider"></div>
      <div className="article-slider">
        <div className="carousel-content">
          <div
            className="carousel-slide"
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% / ${visibleCards})))`,
            }}
          >
            {articlesData.articles.map((article, index) => (
              <div key={index} className="carousel-card">
                <SingleArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;