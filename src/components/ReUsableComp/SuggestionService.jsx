import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../Data/Services.json"; // Adjust path as needed
import "../../styles/SuggestionCasestudys.css"; // Ensure this path is correct

const SuggestionService = () => {
  const { departmentName, categoryName, serviceTitle } = useParams(); 

  const formatTitleForUrl = (title) => {
    return encodeURIComponent(title.replace(/\s+/g, "-"));
  };

  
  let currentServiceId = null;
  data.forEach((department) => {
    if (formatTitleForUrl(department.name) === departmentName) {
      if (department.categories && department.categories.length > 0) {
        // Department has categories
        department.categories.forEach((category) => {
          if (formatTitleForUrl(category.name) === categoryName) {
            category.services?.forEach((service) => {
              if (formatTitleForUrl(service.title) === serviceTitle) {
                currentServiceId = service.id; 
              }
            });
          }
        });
      } else {
      
        department.services?.forEach((service) => {
          if (formatTitleForUrl(service.title) === serviceTitle) {
            currentServiceId = service.id; 
          }
        });
      }
    }
  });

  // Collect all services, excluding the current one
  const allServices = [];
  data.forEach((department) => {
    if (department.categories && department.categories.length > 0) {
      // Department has categories
      department.categories.forEach((category) => {
        category.services?.forEach((service) => {
          if (service.id !== currentServiceId) {
            allServices.push({
              id: service.id,
              title: service.title,
              oneLine: service.oneLine, // Use oneLine for description
              imageUrl: service.imageUrl,
              departmentName: department.name,
              categoryName: category.name,
              type: "service",
            });
          }
        });
      });
    } else {
      // Department has direct services
      department.services?.forEach((service) => {
        if (service.id !== currentServiceId) {
          allServices.push({
            id: service.id,
            title: service.title,
            oneLine: service.oneLine, // Use oneLine for description
            imageUrl: service.imageUrl,
            departmentName: department.name,
            categoryName: department.name, // Use department name as pseudo-category
            type: "service",
          });
        }
      });
    }
  });

  return (
    <div className="suggestion-casestudys-container">
      <h2 className="suggestion-casestudys-title">Suggested Services</h2>
      <div className="suggestion-casestudys-scroll">
        {allServices.length > 0 ? (
          allServices.map((service, index) => {
            // Generate URL: /services/:departmentName/:categoryName/:serviceTitle
            const serviceUrl = `/services/${formatTitleForUrl(
              service.departmentName
            )}/${formatTitleForUrl(service.categoryName)}/${formatTitleForUrl(
              service.title
            )}`;
            return (
              <div
                key={`${service.id}-${index}`}
                className="suggestion-casestudy-card"
              >
                <Link
                  to={serviceUrl}
                  className="suggestion-casestudy-link"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    console.log(
                      `Clicked Image: ${service.title}, URL: ${serviceUrl}`
                    );
                  }}
                >
                  <img
                    src={
                      service.imageUrl ||
                      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                    }
                    alt={service.title || "Service"}
                    className="suggestion-casestudy-image"
                  />
                </Link>
                <div className="content">
                  <h3 >
                    {service.title || "Untitled"}
                  </h3>
                  <p className="">
                    {service.oneLine && service.oneLine.length > 80
                      ? `${service.oneLine.substring(0, 80)}...`
                      : service.oneLine || "No description available."}
                  </p>
                  <Link
                    to={serviceUrl}
                    className="suggestion-casestudy-know-more"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      console.log(
                        `Clicked Know More: ${service.title}, URL: ${serviceUrl}`
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
          <p className="suggestion-casestudys-empty">
            No other services available.
          </p>
        )}
      </div>
    </div>
  );
};

export default SuggestionService;
