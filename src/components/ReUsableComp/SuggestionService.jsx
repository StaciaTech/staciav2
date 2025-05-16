import React from "react";
import { Link } from "react-router-dom";
import data from "../../Data/Services.json"; // Adjust path as needed
import "../../styles/SuggestionCasestudys.css"; // Ensure this path is correct

const SuggestionService = ({ currentServiceId }) => {
  // Flatten all services from JSON, excluding the current one
  const allServices = [];
  data.forEach((department) => {
    department.categories.forEach((category) => {
      category.services.forEach((service) => {
        if (service.id !== currentServiceId) {
          allServices.push({
            ...service,
            departmentName: department.name,
            categoryName: category.name,
          });
        }
      });
    });
  });

  return (
    <div className="suggestion-casestudys-container">
      <h2 className="suggestion-casestudys-title">Suggested Services</h2>
      <div className="suggestion-casestudys-scroll">
        {allServices.length > 0 ? (
          allServices.map((service, index) => (
            <div key={index} className="suggestion-casestudy-card">
              <Link
                to={`/service/${service.id}`}
                className="suggestion-casestudy-link"
              >
                <img
                  src={
                    service.imageUrl ||
                    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                  }
                  alt={service.title || "Service"}
                  className="suggestion-casestudy-image"
                  onClick={() => window.scrollTo(0, 0)}
                />
              </Link>
              <div className="suggestion-casestudy-content">
                <h3 className="suggestion-casestudy-title">
                  {service.title || "Untitled"}
                </h3>
                <p className="suggestion-casestudy-description">
                  {service.description?.length > 80
                    ? `${service.description.substring(0, 80)}...`
                    : service.description || "No description available."}
                </p>
                <Link
                  to={`/service/${service.id}`}
                  className="suggestion-casestudy-know-more"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Know more →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="suggestion-casestudys-empty">
            No other services available.
          </p>
        )}
      </div>
    </div>
  );
};

export default SuggestionService;
