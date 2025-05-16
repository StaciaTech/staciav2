import React from "react";
import { Link } from "react-router-dom";
import data from "../../Data/SingleArticle.json"; // Adjust path as needed
import "../../styles/SuggestionCasestudys.css";

const SuggestionArticles = ({ currentArticleHashtag }) => {
  // Filter articles, excluding the one with the current hashtag
  const suggestedArticles = data.articles.filter(
    (article) =>
      !article.audioData.topics.some(
        (topic) => topic.hashtag === currentArticleHashtag
      )
  );

  return (
    <div className="suggestion-casestudys-container">
      <h2>Suggested Articles</h2>
      <div className="suggestion-casestudys-scroll">
        {suggestedArticles.length > 0 ? (
          suggestedArticles.map((article, index) => {
            // Get the first section's content for description
            const description =
              article.sections[0]?.content || "No description available.";
            return (
              <div key={index} className="suggestion-casestudy-card">
                <Link to={`/article/${article.audioData.topics[0].hashtag}`}>
                  <img
                    src={
                      article.mainImageUrl ||
                      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                    }
                    alt={article.title || "Article"}
                    onClick={() => window.scrollTo(0, 0)}
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
                    to={`/article/${article.audioData.topics[0].hashtag}`}
                    onClick={() => window.scrollTo(0, 0)}
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
