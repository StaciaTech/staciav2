import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/ProjectData2.json";
import "../../styles/SuggestionCasestudys.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const SuggestionProjects = ({ currentProjectId }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Function to format title for URL: replace spaces with hyphens
  const formatTitleForUrl = (title) => {
    return encodeURIComponent(title?.replace(/\s+/g, "-") || "");
  };

  // Flatten the nested JSON structure to get all projects
  const allProjects = [];
  data.Departments.forEach((department) => {
    department.categories.forEach((category) => {
      category.projects.forEach((project) => {
        if (project.id !== currentProjectId) {
          allProjects.push({
            ...project, // Include all project properties (id, title, mainImageUrl, mainDesc)
            departmentName: department.name,
            categoryName: category.name,
          });
        }
      });
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
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollState);
      return () =>
        scrollContainer.removeEventListener("scroll", updateScrollState);
    }
  }, [allProjects]);

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
    <div className="suggestion-casestudys-container">
      <div className="header-with-arrows">
        <h2>Suggested Projects</h2>
        {allProjects.length > 1 && (
          <div className="carousel-controls">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={() => scrollCard("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <FaArrowLeft />
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={() => scrollCard("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
      <div className="suggestion-casestudys-scroll-wrapper">
        <div className="suggestion-casestudys-scroll" ref={scrollRef}>
          {allProjects.length > 0 ? (
            allProjects.map((project, index) => (
              <div key={project.id} className="suggestion-casestudy-card">
                <Link
                  to={`/project/${formatTitleForUrl(
                    project.departmentName
                  )}/${formatTitleForUrl(
                    project.categoryName
                  )}/${formatTitleForUrl(project.title)}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <img
                    src={
                      project.mainImageUrl ||
                      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                    }
                    alt={project.title || "Project"}
                  />
                </Link>
                <div className="content">
                  <h3>{project.title || "Untitled"}</h3>
                  <p>
                    {project.mainDesc?.length > 80
                      ? `${project.mainDesc.substring(0, 80)}...`
                      : project.mainDesc || "No description available."}
                  </p>
                  <Link
                    to={`/project/${formatTitleForUrl(
                      project.departmentName
                    )}/${formatTitleForUrl(
                      project.categoryName
                    )}/${formatTitleForUrl(project.title)}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="know-more-link"
                  >
                    Know more →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No other projects available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestionProjects;
