import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Advertisement.css";
import Star1 from "../Star1";

const Advertisement = ({ setShowAdd }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  const isVisibleRef = useRef(true);

  const advertisements = [
    { name: "🚀 Visit our technology partner StaciaTech", link: "https://staciatech.com" },
    { name: "🔥 Traditional Food in your hand! check out Sharadha Stores", link: "https://play.google.com/store/apps/details?id=com.saradhastores" },
    { name: "💡 Farmers or Food business this is one app to go checkout TNAPEx!", link: "https://play.google.com/store/apps/details?id=com.vikram1201.TNAPEx" },
  ];

  // Add the first slide again at the end
  const slides = [...advertisements, advertisements[0]];

  // const animate = (timestamp) =>{
  //   if(!lastTimeRef.current) lastTimeRef.current = timestamp;
  //   const elapsed = timestamp -lastTimeRef.current;

  //   if(elapsed >=400 && isVisibleRef.current){
  //     setCurrentIndex((prev)=> isVisibleRef.current);
  //     lastTimeRef.current = timestamp;
  //   }

  //   if(isVisibleRef.current){
  //     animationRef.current = requestAnimationFrame(animate)
  //   }
  // }

  // useEffect(()=> {
  //   const handleVisibilityChange = () =>{
  //     isVisibleRef.current = !document.hidden;
  //     if(isVisibleRef.current){
  //       // Resume animation
  //       lastTimeRef.current = performance.now();
  //       animationRef.current = requestAnimationFrame(animate);
  //     }else{
  //       // Pause animation
  //       cancelAnimationFrame(animationRef.current);
  //     }
  //   }

  //   // Start animation
  //     // Start animation
  //  isVisibleRef.current = !document.hidden;
  //  animationRef.current = requestAnimationFrame(animate);

  //  // Listen for visibility changes
  //  document.addEventListener('visibilitychange',handleVisibilityChange);

  //  return ()=>{
  //   cancelAnimationFrame(animationRef.current);
  //   document.removeEventListener('visibilitychange',handleVisibilityChange)
  //  }
  // })



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
              <a
                href={text?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ad-slide"
                key={index}
              >
                <div className="star"><Star1 /></div>
                {text?.name}
                <h4
                  className="view-details"
                >
                  View Details
                </h4>
                <div className="star"><Star1 /></div>
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
