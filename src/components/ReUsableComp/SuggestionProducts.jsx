import React, { useRef } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/ProductPage.json";
import "../../styles/SuggestionCasestudys.css";

const SuggestionProducts = ({ currentProductId }) => {
  const scrollRef = useRef(null);

  // Function to format title for URL: replace spaces with hyphens, preserve case and parentheses
  const formatTitleForUrl = (title) => {
    return encodeURIComponent(title.replace(/\s+/g, "-"));
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

  // Scroll to center the clicked product card
  const scrollToProduct = (index) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const cardWidth = 374; // 350px card + 24px gap (1.5rem)
      const containerWidth = scrollContainer.clientWidth;
      const scrollPosition =
        index * cardWidth - (containerWidth - cardWidth) / 2;
      scrollContainer.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="suggestion-casestudys-container">
      <h2>Suggested Products</h2>
      <div className="suggestion-casestudys-scroll-wrapper">
        <div className="suggestion-casestudys-scroll" ref={scrollRef}>
          {allProducts.length > 0 ? (
            allProducts.map((product, index) => (
              <div key={product.id} className="suggestion-casestudy-card">
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
                <div className="content">
                  <h3
                    onClick={() => scrollToProduct(index)}
                    className="pointer"
                  >
                    {product.title || "Untitled"}
                  </h3>
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
