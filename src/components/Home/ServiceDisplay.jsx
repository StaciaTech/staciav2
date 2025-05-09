import React, { useEffect, useState, useRef } from "react";
import arrow from "../../assets/arrow.png";
import activearrow from "../../assets/active-arrow.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../redux/slice/serviceSlice";

export default function ServiceDisplay() {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const homeServData = useSelector((state) => state.service);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const timerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const homeServiceData = homeServData.data || [];
  // const homeServiceData = homeServData.data.servicePSPosition;

  console.log(homeServiceData);

  useEffect(() => {
    // Start automatic slide change if no item is hovered
    if (!isHovered && homeServiceData) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === homeServiceData.length - 1 ? 0 : prevSlide + 1
        );
      }, 5000);
    }
    // Clear interval when hovered or component unmounts
    return () => clearInterval(timerRef.current);
  }, [isHovered, homeServiceData]);

  const handleMouseEnter = (index) => {
    clearInterval(timerRef.current); // Stop auto slide change
    setCurrentSlide(index); // Set hovered item as active
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Resume auto slide change
  };

  return (
    <div className="service-display">
      <div className="our-service-display-title test-seclection-blue">
        Our Services
      </div>
      <div className="service-display1">
        <div className="service-left">
          <div className="service-img-box">
            <img
              src={homeServiceData?.[currentSlide]?.imageUrl}
              alt={homeServiceData?.[currentSlide]?.title}
              loading="lazy"
            />
          </div>
        </div>
        <div className="service-right">
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#0D022566",
              marginBottom: "10px",
            }}
          ></div>
          {homeServiceData?.map((data, i) => (
            <div
              className="service-text-box"
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigateTo(`/services/${data.title}`);
                  window.scrollTo(0, 0);
                }}
              >
                {homeServiceData[currentSlide].title === data.title ? (
                  <div className="service-text">
                    {homeServiceData[currentSlide].title}
                  </div>
                ) : (
                  <div className="service-text1">{data.title}</div>
                )}
                <img
                  src={
                    homeServiceData[currentSlide].title === data.title
                      ? activearrow
                      : arrow
                  }
                  alt=""
                  onClick={() => {
                    navigateTo(`/services/${data.title}`);
                    window.scrollTo(0, 0);
                  }}
                />
              </div>
              <div
                className={
                  homeServiceData[currentSlide].title === data.title
                    ? "box-line"
                    : "box-line1"
                }
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
