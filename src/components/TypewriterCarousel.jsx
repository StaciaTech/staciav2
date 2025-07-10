import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const carouselData = [
  { content1: "Meet Our Latest Product", content2: "EDIFAI - Your Personalized learning model" },
  { content1: "Join To Innovate", content2: "Join Our Tech Team as a MERN Developer" },
  { content1: "Hackathon", content2: "Tech Summit 2025" },
];

const TypewriterCarousel = () => {
  const [index, setIndex] = useState(0);
  const [showContent2, setShowContent2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showContent2) {
        setIndex((prev) => (prev + 1) % carouselData.length);
        setShowContent2(false);
      } else {
        setShowContent2(true);
      }
    }, 3000); // wait 3s before changing

    return () => clearTimeout(timer);
  }, [index, showContent2]);

  const { content1, content2 } = carouselData[index];

  return (
    <div style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", }}>
      <Typewriter
        options={{
          autoStart: true,
          loop: false,
          delay: 50,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(showContent2 ? content2 : content1)
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterCarousel;
