import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styles/DestopStacking.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slice/productSlice";
import DesktopStackCard from "./DesktopStackCard";

const DestopStacking = () => {
  const cardData = [
    {
      id: 1,
      background: "linear-gradient(259deg, #003362 -8.27%, #81497B 95.27%)",
    },
    {
      id: 2,
      background: "linear-gradient(259deg, #8566ea -8.27%, #d296fa 86.58%)",
    },
    {
      id: 3,
      background: "linear-gradient(259deg, #2A35B3 4.78%, #1485CB 94.3%)",
    },
    {
      id: 4,
      background: "linear-gradient(259deg, #CB2B5E -8.27%, #773987 86.58%)",
    },
    {
      id: 5,
      background: "linear-gradient(259deg, #260931 4.78%, #C9B0CE 94.3%)",
    },
    {
      id: 6,
      background: "linear-gradient(259deg, #232131 -8.27%, #8C87A4 86.58%)",
    },
  ];

  //data
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const homeProductData = homeData?.data?.productPSPosition || [];

  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const totalCards = cardsRef.current.length;
      let allInView = true;

      cardsRef.current.forEach((card, index) => {
        if (card) {
          const cardRect = card.getBoundingClientRect();
          if (index === totalCards - 1) {
            // For the last card, animate when fully in view
            if (cardRect.top < window.innerHeight && cardRect.bottom >= 0) {
              gsap.to(card, {
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          } else {
            // Animate cards as they come into view
            if (cardRect.top < window.innerHeight && cardRect.bottom >= 0) {
              gsap.to(card, {
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
              });
            } else {
              allInView = false; // Mark as false if any card is out of view
              // Reset the animation if they are out of view
              gsap.to(card, {
                y: 50,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          }
        }
      });

      // Move up the whole stack when all cards are in view
      if (allInView) {
        gsap.to(cardsRef.current, {
          y: -30, // Move up the whole stack by 30 pixels
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial animation on mount
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="spacer">
      <div className="stacking-container">
        {homeProductData?.map((card, index) => {
          // Calculate padding and width for each card
          const cardWidth = `calc(65% + ${index * 40}px)`;
          const paddingTop = `${homeProductData?.length + 1 - index * 1.5}rem`;

          return (
            <div
              key={index}
              className="card"
              ref={(el) => (cardsRef.current[index] = el)} // Store reference to each card
              style={{
                background: cardData[index % cardData.length].background,
                paddingTop, // Use calculated paddingTop for stacking
                // boxSizing: "border-box",
                top: `${index * 20 + 150}px`, // Adjust the top position dynamically
                position: "sticky", // Use sticky positioning
                opacity: 1, // Set initial opacity to 1
                transform: "translateY(50px)", // Start slightly translated for the animation
                width: cardWidth, // Set dynamic width based on index
              }}
            >
              <DesktopStackCard data={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DestopStacking;
