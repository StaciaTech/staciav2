import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../../styles/ScrollArrow.css";

const ScrollArrow = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if the user is at the bottom of the page (e.g., 99% or higher)
  const atBottom = scrollProgress >= 99;

  return (
    <div onClick={scrollToTop} className="scroll-to-top">
      {scrollProgress > 3 && (
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
              background: atBottom ? "#0D0225" : "#fff", // Change background color at bottom
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaArrowUp size={28} color={atBottom ? "#fff" : "#0D0225"} />
            {/* Change icon color at bottom */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollArrow;
