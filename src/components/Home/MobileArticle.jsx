import React from "react";
import { useNavigate } from "react-router-dom";
import articlesData from "../../Data/SingleArticle.json";
import "../../styles/Home/Articles.css"; // Reuse styles if applicable

export default function MobileArticle() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div className="mobile-article">
        <h3 className="mobile-article-title">Articles</h3>
        <div className="mobile-article-card-container">
          {articlesData.articles.map((article, index) => (
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
    <div className="mobile-article-card">
      <div className="mobile-article-card-content">
        <div className="mobile-article-author-name">{article.author}</div>
        <div className="mobile-article-title">{article.title}</div>
        <p className="mobile-article-des">{getPreviewContent()}</p>
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
          Read More &gt;
        </div>
      </div>
    </div>
  );
}
