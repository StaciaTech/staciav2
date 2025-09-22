import React, { useState } from 'react';
import '../../styles/Home/ToggleButton.css';

const ToggleButton = ({ onToggle }) => {
  const [isProductsSelected, setIsProductsSelected] = useState(true);

  const toggleSelection = () => {
    const newSelection = !isProductsSelected;
    setIsProductsSelected(newSelection);
    if (onToggle) {
      onToggle(newSelection ? 'products' : 'services');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleSelection();
    }
  };

  return (
    <div className="toggle-container" role="tablist">
      <button
        className={`toggle-button ${isProductsSelected ? 'selected' : ''}`}
        onClick={toggleSelection}
        onKeyDown={handleKeyDown}
        role="tab"
        aria-selected={isProductsSelected}
        aria-label={`Toggle between Products and Services. Currently selected: ${isProductsSelected ? 'Products' : 'Services'}`}
        tabIndex={0}
      >
        <span className="toggle-text">Products</span>
        <span className="toggle-text">Services</span>
        <div
          className="toggle-slider"
          style={{
            left: isProductsSelected ? '4px' : 'calc(50% + 2px)'
          }}
        />
      </button>
    </div>
  );
};

export default ToggleButton;