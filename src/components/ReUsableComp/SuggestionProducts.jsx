import React, { useRef } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/ProductPage.json";
import "../../styles/SuggestionCasestudys.css";

const SuggestionProducts = ({ currentProductId }) => {
  const scrollRef = useRef(null);

  // Flatten the nested JSON structure to get all products
  const allProducts = [];
  data.department.forEach((dept) => {
    dept.category.forEach((category) => {
      if (category.products) {
        category.products.forEach((product) => {
          if (product.id !== currentProductId) {
            allProducts.push(product);
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
                <Link to={`/products/${product.id}`}>
                  <img
                    src={
                      product.imageUrl ||
                      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                    }
                    alt={product.title || "Product"}
                    onClick={() => window.scrollTo(0, 0)}
                  />
                </Link>
                <div className="content">
                  <h3 onClick={() => scrollToProduct(index)}>
                    {product.title || "Untitled"}
                  </h3>
                  <p>
                    {product.description?.length > 80
                      ? `${product.description.substring(0, 80)}...`
                      : product.description || "No description available."}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    onClick={() => window.scrollTo(0, 0)}
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
