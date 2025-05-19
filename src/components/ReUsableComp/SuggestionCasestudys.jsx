import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/SingleCaseStudy.json"; // Adjust path as needed
import "../../styles/SuggestionCasestudys.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const SuggestionCasestudys = ({ currentCaseStudyId }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Flatten all case studies from JSON, excluding the current one
  const allCaseStudies = [];
  data.singlecasestudy.forEach((category) => {
    category.data.forEach((study) => {
      if (study.id !== currentCaseStudyId) {
        allCaseStudies.push(study);
      }
    });
  });

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
    const handleScroll = () => updateScrollState();
    const scrollContainer = scrollRef.current;
    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, [allCaseStudies]);

  // Function to scroll one card at a time
  const scrollCard = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector(".suggestion-casestudy-card")?.offsetWidth || 397; // Match your CSS min-width
      const gap = 24; // Your CSS gap is 1.5rem (24px)
      const scrollAmount = cardWidth + gap; // Scroll the width of 1 card plus gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="suggestion-casestudys-container">
      <div className="header-with-arrows">
        <h2>Suggested Case Studies</h2>
        {allCaseStudies.length > 0 && (
          <div className="carousel-controls">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={() => scrollCard("left")}
              disabled={!canScrollLeft}
            >
              <FaArrowLeft />
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={() => scrollCard("right")}
              disabled={!canScrollRight}
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
      <div className="suggestion-casestudys-scroll-wrapper">
        <div className="suggestion-casestudys-scroll" ref={scrollRef}>
          {allCaseStudies.length > 0 ? (
            allCaseStudies.map((study, index) => (
              <div key={index} className="suggestion-casestudy-card">
                <Link to={`/case-study/single-caseStudy/${study.id}`}>
                  <img
                    src={
                      study.imageURL ||
                      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                    }
                    alt={study.title || "Case Study"}
                    onClick={() => window.scrollTo(0, 0)}
                  />
                </Link>
                <div className="content">
                  <h3>{study.title || "Untitled"}</h3>
                  <p>
                    {study.overview?.description?.length > 80
                      ? `${study.overview.description.substring(0, 80)}...`
                      : study.overview?.description ||
                        "No description available."}
                  </p>
                  <Link
                    to={`/case-study/single-caseStudy/${study.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Know more →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No other case studies available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestionCasestudys;