import React from "react";
import { Link } from "react-router-dom";
import data from "../../Data/SingleCaseStudy.json"; // Adjust path as needed
import "../../styles/SuggestionCasestudys.css";

const SuggestionCasestudys = ({ currentCaseStudyId }) => {
  // Flatten all case studies from JSON, excluding the current one
  const allCaseStudies = [];
  data.singlecasestudy.forEach((category) => {
    category.data.forEach((study) => {
      if (study.id !== currentCaseStudyId) {
        allCaseStudies.push(study);
      }
    });
  });

  return (
    <div className="suggestion-casestudys-container">
      <h2>Suggested Case Studies</h2>
      <div className="suggestion-casestudys-scroll">
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
  );
};

export default SuggestionCasestudys;
