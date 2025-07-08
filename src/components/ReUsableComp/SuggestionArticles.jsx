import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/SingleArticle.json";
import "../../styles/SuggestionArticles.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const SuggestionArticles = ({ currentArticleHashtag }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Filter articles, excluding the one with the current hashtag
  const suggestedArticles = data.articles.filter(
    (article) =>
      !article.audioData.topics.some(
        (topic) => topic.hashtag === currentArticleHashtag
      )
  );

  // Function to format title for URL
  const formatTitleForUrl = (title) => {
    return encodeURIComponent(title?.replace(/\s+/g, "-").toLowerCase() || "");
  };

  // Function to check scroll position and update arrow states
  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 to account for rounding
    }
  };

  // Update scroll state on mount and on scroll
  useEffect(() => {
    updateScrollState();
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollState);
      return () =>
        scrollContainer.removeEventListener("scroll", updateScrollState);
    }
  }, [suggestedArticles]);

  // Function to scroll one card at a time
  const scrollCard = (direction) => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.querySelector(".suggestion-casestudy-card")
          ?.offsetWidth || 397;
      const gap = 24; // CSS gap is 1.5rem (24px)
      const scrollAmount = cardWidth + gap;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="suggestion-casestudys-container-4">
      <div className="header-with-arrows-4">
        <h2>Suggested Articles</h2>
        {suggestedArticles.length > 1 && (
          <div className="carousel-controls-4">
            <button
              className="carousel-arrow carousel-arrow-left-4"
              onClick={() => scrollCard("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <FaArrowLeft />
            </button>
            <button
              className="carousel-arrow carousel-arrow-right-4"
              onClick={() => scrollCard("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
      <div className="suggestion-casestudys-scroll-wrapper-4">
        <div className="suggestion-casestudys-scroll-4" ref={scrollRef}>
          {suggestedArticles.length > 0 ? (
            suggestedArticles.map((article, index) => {
              const description =
                article.sections[0]?.content || "No description available.";
              const articleUrl = `/article/single-article/${formatTitleForUrl(
                article.title
              )}`;
              return (
                <div
                  key={`${
                    article.audioData.topics[0]?.hashtag || index
                  }-${index}`}
                  className="suggestion-casestudy-card-4"
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
                  <div className="content-4">
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
    </div>
  );
};

export default SuggestionArticles;
