// import React, { useState } from 'react';
// import '../../styles/Home/ToggleButton.css';

// const ToggleButton = ({ onToggle }) => {
//   const [isProductsSelected, setIsProductsSelected] = useState(true);

//   const toggleSelection = () => {
//     const newSelection = !isProductsSelected;
//     setIsProductsSelected(newSelection);
//     if (onToggle) {
//       onToggle(newSelection ? 'products' : 'services');
//     }
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter' || event.key === ' ') {
//       event.preventDefault();
//       toggleSelection();
//     }
//   };

//   return (
//     <div className="toggle-container" role="tablist">

//       <button
//         className={`toggle-button ${isProductsSelected ? 'selected' : ''}`}
//         onClick={toggleSelection}
//         onKeyDown={handleKeyDown}
//         role="tab"
//         aria-selected={isProductsSelected}
//         aria-label={`Toggle between Products and Services. Currently selected: ${isProductsSelected ? 'Products' : 'Services'}`}
//         tabIndex={0}
//         // style={{ boxShadow: "1px 1px 20px 5px #adadad" }}
//         // style={{ boxShadow: "1px 1px 20px 5px #adadad" }}

//       >
//         <span className="toggle-text">Services</span>
//         <span className="toggle-text">Products</span>
//         <div
//           className="toggle-slider"
//           style={{
//             // left: isProductsSelected ? '4px' : 'calc(50% + 2px)'
//             left: isProductsSelected ? 'calc(50% + 2px)' : '4px'

//           }}
//         />
//       </button>
//     </div>
//   );
// };

// export default ToggleButton;



import React, { useState, useEffect, useRef } from "react";
import "../../styles/Home/ToggleButton.css";
import { MdMiscellaneousServices, MdOutlineMiscellaneousServices } from "react-icons/md";
import { LuPackage } from 'react-icons/lu';

const ToggleButton = ({ initial = "products", onToggle }) => {
  const [selected, setSelected] = useState(initial === "products" ? "products" : "services");
  const containerRef = useRef(null);

  useEffect(() => {
    if (onToggle) onToggle(selected);
  }, [selected, onToggle]);

  const select = (value) => {
    if (value !== selected) setSelected(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      select("services");
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      select("products");
    } else if (e.key === "Enter" || e.key === " ") {
      // toggle on Enter / Space
      select(selected === "products" ? "services" : "products");
      e.preventDefault();
    }
  };

  return (
    <div
      className="toggle-root"
      role="tablist"
      aria-label="Toggle between Services and Products"
      onKeyDown={handleKeyDown}
      ref={containerRef}
      tabIndex={0} // allow keyboard focus on whole control
    >
      <div className="toggle-track">
        <div
          className={`toggle-thumb ${selected === "products" ? "thumb-right" : "thumb-left"}`}
          aria-hidden="true"
        />
        <button
          role="tab"
          aria-selected={selected === "services"}
          className={`toggle-option ${selected === "services" ? "option-selected" : ""}`}
          onClick={() => select("services")}
        >
          <MdOutlineMiscellaneousServices style={{ marginRight: "0.4rem" }} />
          Services
        </button>

        <button
          role="tab"
          aria-selected={selected === "products"}
          className={`toggle-option ${selected === "products" ? "option-selected" : ""}`}
          onClick={() => select("products")}
        >
          <LuPackage style={{ marginRight: "0.4rem" }} />
          Products
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
