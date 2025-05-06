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

import React from "react";
import "../../styles/Home/Articles.css";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import articlesData from "../../Data/SingleArticle.json"; // Adjust path based on your project structure

function SingleArticleCard({ article }) {
  const navigate = useNavigate();

  // Truncate content for preview (first section's content, limited to ~200 characters)
  const getPreviewContent = () => {
    const firstSection = article.sections[0];
    const content = typeof firstSection.content === "string"
      ? firstSection.content
      : firstSection.content.map((item) => item.description).join(" ");
    return content.length > 200 ? `${content.substring(0, 200)}...` : content;
  };

  return (
    <div
      className="article-outline-holder"
      onClick={() => {
        navigate(`/article/single-article/${article.title.replace(/\s+/g, "-").toLowerCase()}`);
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
          <div className="card-article-body test-seclection-white">
            {getPreviewContent()}
          </div>
          <div
            className="article-learn-more-link pointer"
            onClick={() => {
              navigate(`/article/single-article/${article.title.replace(/\s+/g, "-").toLowerCase()}`);
              window.scrollTo(0, 0);
            }}
          >
            Read More
          </div>
        </div>
      </div>
    </div>
  );
}

function Articles() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div className="articles-title">Articles</div>
      <div className="article-slider">
        <Marquee
          // style={{
          //   display: "flex",
          //   alignItems: "flex-end",
          //   height: "100%",
          //   position: "relative",
          // }}
          // speed={30}
          // loop={0}
          // pauseOnHover={true}
          style={{  display: "flex", alignItems: "flex-end",overflow: "hidden", height: "100%", whiteSpace: "nowrap" }}
            
          speed={30}
          loop
          pauseOnHover
        >
          {articlesData.articles.map((article, index) => (
            <SingleArticleCard key={index} article={article} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Articles;