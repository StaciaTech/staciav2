import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductInquiryModal from './ProductInquiryModal';
import '../../styles/Product/KnowMoreSection.css';
import { GoArrowRight } from 'react-icons/go';

import { BiMessageDetail, BiSolidDetail } from "react-icons/bi";
import { IoPricetags } from 'react-icons/io5';
import { GrPersonalComputer, GrUserExpert } from "react-icons/gr";
import { FaPhoneVolume } from 'react-icons/fa6';


const KnowMoreSection = ({ productData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleKnowMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="know-more-section">
        <div className="know-more-container">
          <motion.div
            className="know-more-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="know-more-text">
              <h2 className="know-more-title">
                Want to Know More About This Product?
              </h2>
              <p className="know-more-description">
                Get detailed information, pricing, technical specifications, and personalized consultation 
                for {productData?.title || 'this product'}. Our experts are ready to help you make the right decision.
              </p>
              <div className="know-more-features">
                <div className="feature-item">
                  <span className="feature-icon"><BiSolidDetail /></span>
                  <span className="feature-text">Detailed Specifications</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon"><IoPricetags /></span>
                  <span className="feature-text">Custom Pricing</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon"><GrPersonalComputer /></span>
                  <span className="feature-text">Personalized Demo</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon"><GrUserExpert /></span>
                  <span className="feature-text">Expert Consultation</span>
                </div>
              </div>
            </div>
            
            <div className="know-more-actions">
              <motion.button
                className="know-more-btn primary"
                onClick={handleKnowMoreClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="btn-icon"><BiMessageDetail /></span>
                <span className="btn-text">Get Product Details</span>
                <span className="btn-arrow"><GoArrowRight/></span>
              </motion.button>
              
              <motion.button
                className="know-more-btn secondary"
                onClick={handleKnowMoreClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="btn-icon"><FaPhoneVolume /></span>
                <span className="btn-text">Schedule Consultation</span>
                <span className="btn-arrow"><GoArrowRight/></span>
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            className="know-more-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="visual-container">
              <div className="product-preview">
                <img
                  src={productData?.imageUrl || '/assets/placeholder-product.webp'}
                  alt={productData?.title || 'Product Preview'}
                  className="product-image"
                  loading="lazy"
                />
                <div className="product-overlay">
                  <div className="overlay-content">
                    <h3>{productData?.title || 'Product Name'}</h3>
                    <p>{productData?.domainName || 'Category'}</p>
                  </div>
                </div>
              </div>
              
              <div className="floating-elements">
                <div className="floating-element element-1">
                  <span>📊</span>
                  <span>Analytics</span>
                </div>
                <div className="floating-element element-2">
                  <span>⚡</span>
                  <span>Performance</span>
                </div>
                <div className="floating-element element-3">
                  <span>🔧</span>
                  <span>Customization</span>
                </div>
                <div className="floating-element element-4">
                  <span>🛡️</span>
                  <span>Security</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Inquiry Modal */}
      <ProductInquiryModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        productData={productData}
      />
    </>
  );
};

export default KnowMoreSection;
