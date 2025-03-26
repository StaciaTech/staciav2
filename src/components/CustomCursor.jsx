import React from "react";
import { motion } from "framer-motion";
import "../index.css"; // Ensure this is correctly pointing to your CSS file

const CustomCursor = ({ isVisible, text }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (isVisible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  return isVisible ? (
    <motion.div
      className="custom-cursor"
      style={{ left: position.x - 15, top: position.y - 15 }} // Adjusted based on cursor size
      animate={{
        opacity: isVisible ? 1 : 0.5,
        scale: isVisible ? 1.2 : 1, // Adjust scale for subtle bounce
      }}
      transition={{
        type: "spring",
        stiffness: 300, // Control the bounciness
        damping: 20, // Control the oscillation
        mass: 1, // Control the mass
      }}
    >
      <span
        style={{
          fontSize: "10px",
          lineHeight: "1rem",
          fontFamily: "EuclidMedium",
          width: "60%",
        }}
      >
        {text}
      </span>
    </motion.div>
  ) : null;
};

export default CustomCursor;
