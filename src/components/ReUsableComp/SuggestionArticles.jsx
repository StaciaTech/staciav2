import React from "react";
import { Link } from "react-router-dom";
import data from "../../Data/SingleArticle.json";
import "../../styles/SuggestionCasestudys.css";

const SuggestionArticles = ({ currentArticleHashtag }) => {
  // Filter articles, excluding the one with the current hashtag
  const suggestedArticles = data.articles.filter(
    (article) =>
      !article.audioData.topics.some(
        (topic) => topic.hashtag === currentArticleHashtag
      )
  );

  // Function to format title for URL
  const formatTitleForUrl = (title) => {
    return encodeURIComponent(title.replace(/\s+/g, "-").toLowerCase());
  };

  return (
    <div className="suggestion-casestudys-container">
      <h2>Suggested Articles</h2>
      <div className="suggestion-casestudys-scroll">
        {suggestedArticles.length > 0 ? (
          suggestedArticles.map((article, index) => {
            const description =
              article.sections[0]?.content || "No description available.";
            const articleUrl = `/article/single-article/${formatTitleForUrl(
              article.title
            )}`;
            return (
              <div
                key={`${article.audioData.topics[0].hashtag}-${index}`}
                className="suggestion-casestudy-card"
              >
                <Link
                  to={articleUrl}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    console.log(
                      `Clicked Image: ${article.title}, URL: ${articleUrl}`
                    );
                  }}
                >
                  <img
                    src={
                      article.mainImageUrl ||
                      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                    }
                    alt={article.title || "Article"}
                  />
                </Link>
                <div className="content">
                  <h3>{article.title || "Untitled"}</h3>
                  <p>
                    {description.length > 80
                      ? `${description.substring(0, 80)}...`
                      : description}
                  </p>
                  <Link
                    to={articleUrl}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      console.log(
                        `Clicked Know More: ${article.title}, URL: ${articleUrl}`
                      );
                    }}
                  >
                    Know more →
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <p>No other articles available.</p>
        )}
      </div>
    </div>
  );
};

export default SuggestionArticles;
