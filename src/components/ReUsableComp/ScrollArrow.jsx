import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../../styles/ScrollArrow.css";
const ScrollArrow = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    setScrollProgress(scrollPercent);
    if (scrollPercent > 3 && scrollPercent < 99) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <div onClick={scrollToTop} className="scroll-to-top">
          <div
            className="progress-border"
            style={{
              background: `conic-gradient(#0D0225 ${scrollProgress}%, #ccc ${scrollProgress}%)`,
            }}
          >
            <div
              style={{
                width: "98%",
                height: "98%",
                background: "#fff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaArrowUp size={28} color="#0D0225" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ScrollArrow;
