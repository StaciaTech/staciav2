import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/RelatedCaseStudy.css";

const RelatedCaseStudy = ({ relatedCases }) => {
  const navigate = useNavigate();

  return (
    <div className="related-case-study-container">
      <h2 className="related-title">Related Case Study</h2>
      <div className="related-cases-grid">
        {relatedCases.map((caseStudy) => {
          const formattedId = caseStudy.id.replace(/\s+/g, "-"); 
          const imageUrl = caseStudy.imageURL; 


          return (
            <div
              key={caseStudy.id}
              className="case-study-card"
              onClick={() => {
                window.scrollTo(0, 0); 
                navigate(`/case-study/single-caseStudy/${formattedId}`);
              }}
            >
           
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={caseStudy.title}
                  className="case-study-image"
                  onError={(e) => e.target.remove()} 
                />
              )}
              <div className="case-study-content">
                <h5>{caseStudy?.department}</h5>
                <h4>{caseStudy.title}</h4>
                <p>{caseStudy.overview?.description.substring(0, 100)}...</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedCaseStudy;
