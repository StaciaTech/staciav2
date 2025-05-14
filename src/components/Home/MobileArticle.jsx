// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function MobileArticle() {
//   return (
//     <div style={{ marginBottom: "1rem" }}>
//     <div className="mobile-article">
//       <h3 className="mobile-article-title">Articles</h3>
//       <div className="mobile-article-card-container">
//         <MobileArticleCard />
//         <MobileArticleCard />
//         <MobileArticleCard />
//         <MobileArticleCard />
//       </div>
//     </div>
//     </div>
//   );
// }

// function MobileArticleCard() {
//   const navigate = useNavigate();
//   return (
//     <div className="mobile-article-card">
//       <div className="mobile-article-card-content">
//         <div className="mobile-article-author-name">Stacia Power Solutions</div>
//         <div className="mobile-article-title">
//           Nanostructured Photovoltaic Cells
//         </div>
//         <p className="mobile-article-des">
//           Nanostructured Photovoltaics is a new type of solar technology that
//           uses nanometer-sized structures to harvest sunlight. Nanostructured
//           photovoltaic cells (NPsVCs) have the potential to revolutionize solar
//           energy generation because they can be made to be much more efficient
//           than traditional solar cells.
//         </p>
//         <div
//           className="article-learn-more-link pointer"
//           onClick={() => {
//             navigate("/article");
//             window.scrollTo(0, 0);
//           }}
//         >
//           Read More &gt;{" "}
//         </div>
//       </div>
//     </div>
//   );
// }




import React from "react";
import { useNavigate } from "react-router-dom";
import articleData from "../../Data/SingleArticle.json"; // Adjust path as needed

export default function MobileArticle() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div className="mobile-article">
        <h3 >Articles</h3>
        <div className="mobile-article-card-container">
          {articleData.articles.map((article, index) => (
            <MobileArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileArticleCard({ article }) {
  const navigate = useNavigate();

  // Reuse the same getPreviewContent logic as SingleArticleCard
  const getPreviewContent = () => {
    const firstSection = article.sections[0];
    const content =
      typeof firstSection.content === "string"
        ? firstSection.content
        : firstSection.content.map((item) => item.description).join(" ");
    return content.length > 200 ? `${content.substring(0, 90)}...` : content;
  };

  return (
    <div className="mobile-article-card" 
    style={{
      backgroundImage: `linear-gradient(to bottom, #0d022500, #0d0225cc), url(${article.mainImageUrl})`,
    }}
    >
      <div className="mobile-article-card-content">
        <div className="mobile-article-author-name">{article.author}</div>
        <div className="mobile-article-title">{article.title}</div>
        <p className="mobile-article-des">{article.description}</p>
        <div
          className="article-learn-more-link pointer"
          onClick={() => {
            navigate(article.route);
            window.scrollTo(0, 0);
          }}
        >
          Read More &gt;
        </div>
      </div>
    </div>
  );
}
