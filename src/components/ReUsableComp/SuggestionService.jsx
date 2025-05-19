import React, { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../Data/Services.json"; // Adjust path as needed
import "../../styles/SuggestionCasestudys.css"; // Ensure this path is correct
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const SuggestionService = () => {
  const { departmentName, categoryName, serviceTitle } = useParams();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Function to format titles for URL
  const formatTitleForUrl = (title) => {
    return encodeURIComponent(title?.replace(/\s+/g, "-") || "");
  };

  // Find the current service ID
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
        // Department has direct services
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
              oneLine: service.oneLine,
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
            oneLine: service.oneLine,
            imageUrl: service.imageUrl,
            departmentName: department.name,
            categoryName: department.name,
            type: "service",
          });
        }
      });
    }
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
  }, [allServices]);

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
        <h2 className="suggestion-casestudys-title">Suggested Services</h2>

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
      </div>
      <div className="suggestion-casestudys-scroll-wrapper">
        <div className="suggestion-casestudys-scroll" ref={scrollRef}>
          {allServices.length > 0 ? (
            allServices.map((service, index) => {
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
                    <h3>{service.title || "Untitled"}</h3>
                    <p>
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
    </div>
  );
};

export default SuggestionService;
