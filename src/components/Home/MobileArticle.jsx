import React from "react";
import { useNavigate } from "react-router-dom";

export default function MobileArticle() {
  return (
    <div className="mobile-article">
      <h3 className="mobile-article-title">Articles</h3>
      <div className="mobile-article-card-container">
        <MobileArticleCard />
        <MobileArticleCard />
        <MobileArticleCard />
        <MobileArticleCard />
      </div>
    </div>
  );
}

function MobileArticleCard() {
  const navigate = useNavigate();
  return (
    <div className="mobile-article-card">
      <div className="mobile-article-card-content">
        <div className="mobile-article-author-name">Stacia Power Solutions</div>
        <div className="mobile-article-title">
          Nanostructured Photovoltaic Cells
        </div>
        <p className="mobile-article-des">
          Nanostructured Photovoltaics is a new type of solar technology that
          uses nanometer-sized structures to harvest sunlight. Nanostructured
          photovoltaic cells (NPsVCs) have the potential to revolutionize solar
          energy generation because they can be made to be much more efficient
          than traditional solar cells.
        </p>
        <div
          className="article-learn-more-link pointer"
          onClick={() => {
            navigate("/article");
            window.scrollTo(0, 0);
          }}
        >
          Learn More &gt;{" "}
        </div>
      </div>
    </div>
  );
}
