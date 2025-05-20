import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/ProductPage.json";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "../../styles/SuggestionProducts.css"

const SuggestionProducts = ({ currentProductId }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Function to format title for URL: replace spaces with hyphens, preserve case and parentheses
  const formatTitleForUrl = (title) => {
    return encodeURIComponent(title?.replace(/\s+/g, "-") || "");
  };

  // Flatten the nested JSON structure to get all products with department and category
  const allProducts = [];
  data.department.forEach((dept) => {
    dept.category.forEach((category) => {
      if (category.products) {
        category.products.forEach((product) => {
          if (product.id !== currentProductId) {
            allProducts.push({
              ...product,
              departmentName: dept.name,
              categoryName: category.name,
            });
          }
        });
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
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollState);
      return () =>
        scrollContainer.removeEventListener("scroll", updateScrollState);
    }
  }, [allProducts]);

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
    <div className="suggestion-casestudys-container-1">
      <div className="header-with-arrows-1">
        <h2>Suggested Products</h2>
        {allProducts.length > 1 && (
          <div className="carousel-controls">
            <button
              className="carousel-arrow carousel-arrow-left-"
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
      <div className="suggestion-casestudys-scroll-wrapper-1">
        <div className="suggestion-casestudys-scroll-1" ref={scrollRef}>
          {allProducts.length > 0 ? (
            allProducts.map((product, index) => (
              <div key={product.id} className="suggestion-casestudy-card-1">
                <Link
                  to={`/products/${formatTitleForUrl(
                    product.departmentName
                  )}/${formatTitleForUrl(
                    product.categoryName
                  )}/${formatTitleForUrl(product.title)}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    console.log(
                      `Navigating to product: ${
                        product.title
                      }, URL: /products/${formatTitleForUrl(
                        product.departmentName
                      )}/${formatTitleForUrl(
                        product.categoryName
                      )}/${formatTitleForUrl(product.title)}`
                    );
                  }}
                >
                  <img
                    src={
                      product.imageUrl ||
                      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                    }
                    alt={product.title || "Product"}
                  />
                </Link>
                <div className="content-1">
                  <h3>{product.title || "Untitled"}</h3>
                  <p>
                    {product.description?.length > 80
                      ? `${product.description.substring(0, 80)}...`
                      : product.description || "No description available."}
                  </p>
                  <Link
                    to={`/products/${formatTitleForUrl(
                      product.departmentName
                    )}/${formatTitleForUrl(
                      product.categoryName
                    )}/${formatTitleForUrl(product.title)}`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      console.log(
                        `Know more clicked: ${
                          product.title
                        }, URL: /products/${formatTitleForUrl(
                          product.departmentName
                        )}/${formatTitleForUrl(
                          product.categoryName
                        )}/${formatTitleForUrl(product.title)}`
                      );
                    }}
                  >
                    Know more →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No other products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestionProducts;
