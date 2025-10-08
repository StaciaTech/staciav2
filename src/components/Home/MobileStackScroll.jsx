import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../redux/slice/productSlice";
import { fetchServices } from "../../redux/slice/serviceSlice";

const MobileStackScroll = ({ onToggle = "products" }) => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  // Redux state
  const homeMobileProducts = useSelector((state) => state.product);
  const homeMobileServices = useSelector((state) => state.service);

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchServices());
  }, [dispatch]);

  // Get data based on toggle selection
  const isService = onToggle === "services";
  const currentData = isService ? homeMobileServices : homeMobileProducts;
  const isLoading = currentData.isLoading;
  const data = currentData.data || [];

  console.log("MobileStackScroll - Toggle:", onToggle);
  console.log("MobileStackScroll - Data:", data);
  console.log("MobileStackScroll - Loading:", isLoading);

  // Handle navigation for different item types
  const handleItemClick = (item) => {
    if (isService) {
      // For services
      const serviceKey = item.title ? item.title.split(" ").join("-") : "service";
      navigateTo(`/services/${serviceKey}`);
    } else {
      // For products
      const depKey = item.depName ? item.depName.split(" ").join("-") : "products";
      const productKey = item.title ? item.title.split(" ").join("-") : "product";
      const categoryKey = item.catName ? item.catName.split(" ").join("-") : "general";
      navigateTo(`/products/${depKey}/${categoryKey}/${productKey}`);
    }
    window.scrollTo(0, 0);
  };

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="mobile-stack-card">
      <div style={{ padding: "20px" }}>
        <div 
          className="mobile-card-stack-title"
          style={{
            height: "24px",
            backgroundColor: "#f0f0f0",
            borderRadius: "4px",
            marginBottom: "8px",
            animation: "pulse 1.5s ease-in-out infinite"
          }}
        />
        <div 
          className="mobile-stack-domain"
          style={{
            height: "16px",
            backgroundColor: "#f0f0f0",
            borderRadius: "4px",
            width: "60%",
            animation: "pulse 1.5s ease-in-out infinite"
          }}
        />
      </div>

      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}>
        <div className="mobile-card-stack-img-box">
          <div
            style={{
              height: "200px",
              width: "100%",
              backgroundColor: "#f0f0f0",
              borderRadius: "10px",
              animation: "pulse 1.5s ease-in-out infinite"
            }}
          />
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <div className="mobile-card-stack-para">
          <div
            style={{
              height: "16px",
              backgroundColor: "#f0f0f0",
              borderRadius: "4px",
              marginBottom: "8px",
              animation: "pulse 1.5s ease-in-out infinite"
            }}
          />
          <div
            style={{
              height: "16px",
              backgroundColor: "#f0f0f0",
              borderRadius: "4px",
              width: "80%",
              animation: "pulse 1.5s ease-in-out infinite"
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="mobile-stack-scroll">
      {isLoading ? (
        <LoadingSkeleton />
      ) : data.length > 0 ? (
        data.map((item, index) => (
          <div
            className="mobile-stack-card"
            style={{ 
              position: "sticky", 
              top: "12%",
              marginBottom: "20px"
            }}
            key={item.id || index}
          >
            {/* Header Section */}
            <div style={{ padding: "20px" }}>
              <div className="mobile-card-stack-title">
                {item.title || "Untitled"}
              </div>
              <div className="mobile-stack-domain">
                {item.domainName || item.category || "General"}
              </div>
            </div>

            {/* Image Section */}
            <div style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}>
              <div className="mobile-card-stack-img-box">
                <img 
                  src={item.imageUrl} 
                  alt={item.title || "Item image"}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px"
                  }}
                />
              </div>
            </div>

            {/* Content Section */}
            <div style={{ padding: "20px" }}>
              <div className="mobile-card-stack-para">
                <p>
                  {item.des || item.description || item.pDes1 || "No description available"}
                </p>
              </div>
              <div
                className="mobile-card-stack-learn-more"
                onClick={() => handleItemClick(item)}
                style={{
                  cursor: "pointer",
                  marginTop: "12px",
                  padding: "8px 16px",
                  backgroundColor: "#9c27b0",
                  color: "white",
                  borderRadius: "20px",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#8e24aa";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#9c27b0";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Read More
              </div>
            </div>
          </div>
        ))
      ) : (
        <div style={{
          padding: "40px 20px",
          textAlign: "center",
          color: "#666"
        }}>
          <h3>No {isService ? "Services" : "Products"} Available</h3>
          <p>Please check back later for updates.</p>
        </div>
      )}

      {/* Add CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileStackScroll;