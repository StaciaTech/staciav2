import React from "react";
import { Link } from "react-router-dom";
import "../../styles/articles.css";

function ArticleCard({ content, type, img, tags, title }) {
  return (
    <Link className="article-card" to={`/article?/type=${type}/${title}`}>
      <div
        className="article-img-box"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="article-card-top">
          <div style={{ color: "#fff" }}>{title}</div>
          <div style={{ display: "flex", gap: "20px" }}>
            {tags.map((tag) => (
              <div className="article-tag">{tag}</div>
            ))}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              position: "relative",
              zIndex: 6,
              height: "70%",
              display: "flex",
              alignItems: "self-center",
              margin: 60,
              borderRadius: 20,
              width: "80%",
            }}
            src={img}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
