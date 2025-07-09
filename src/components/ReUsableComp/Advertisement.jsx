import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Star from "../Star";
import "../../styles/Advertisement.css";

const Advertisement = ({ setShowAdd }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const sliderRef = useRef(null);

  const advertisements = [
    {name:"🚀 Visit our technolgy partner StaciaTech",link:"https://staciatech.com"},
    {name:"🔥 Traditional Food in your hand! check out Sharadha Stores",link:"https://play.google.com/store/apps/details?id=com.saradhastores"},
    {name:"💡 Farmers or Food business this is one app to go checkout TNAPEx!"
    ,link:"https://play.google.com/store/apps/details?id=com.vikram1201.TNAPEx"
    },
  ];

  const ribbonClick=(key)=>{
    if (key=="🚀 Visit our technolgy partner StaciaTech") {
      
    }else if (key=="🔥 Traditional Food in your hand! check out Sharadha Stores") {
      
    }else if (key=="💡 Farmers or Food business this is one app to go checkout TNAPEx!") {
      
    }
  }

  // Add the first slide again at the end
  const slides = [...advertisements, advertisements[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === slides.length - 1) {
      // Reached the duplicate; jump instantly to real first slide
      setIsAnimating(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (!isAnimating) {
      // Wait one frame to allow DOM update before re-enabling animation
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    }
  }, [isAnimating]);

  return (
    <div className="advertisement">
      <div className="ad-content">

        <div className="ad-carousel">
          <div
            className="ad-slider"
            ref={sliderRef}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isAnimating ? "transform 0.6s ease-in-out" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((text, index) => (
              <a href={text?.link} target="_blank" className="ad-slide" key={index}>
                <div className="star"><Star /></div>{text?.name}
                <h4 onClick={() => navigate("/")} className="view-details">
                  View Details
                </h4>
                <div className="star"><Star /></div>
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="close">
        <button className="close-btn" onClick={() => setShowAdd(false)}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Advertisement;
