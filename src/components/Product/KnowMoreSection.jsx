import React, { useState ,useEffect} from 'react';
import { motion } from 'framer-motion';
import ProductInquiryModal from './ProductInquiryModal';
import '../../styles/Product/KnowMoreSection.css';
import { GoArrowRight } from 'react-icons/go';

import { BiMessageDetail, BiSolidDetail } from "react-icons/bi";
import { IoPricetags } from 'react-icons/io5';
import { GrPersonalComputer, GrUserExpert } from "react-icons/gr";
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';


const KnowMoreSection = ({ productData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleKnowMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const [isFormVisible1, setIsFormVisible1] = useState(false); // Form for "Start Your Project"
  const [isFormVisibleCall, setIsFormVisibleCall] = useState(false); // Form for "Schedule Call"
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');
  // Handle button click to show/hide forms and close others
  const handleInquiryClick1 = () => {
    setIsFormVisible1(!isFormVisible1);
    // setIsFormVisible(false); // Close other forms
    setIsFormVisibleCall(false); // Close other forms
    setResult(''); // Reset result message
    setEmail(''); // Reset email input
  };
  const handleInquiryClick2 = () => {
    setIsFormVisibleCall(!isFormVisibleCall);
    // setIsFormVisible(false); // Close other forms
    setIsFormVisible1(false); // Close other forms
    setResult(''); // Reset result message
    setEmail(''); // Reset email input
  };
  // Basic email validation regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  // Handle form submission with Web3Forms
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    // Validate email
    if (!validateEmail(email)) {
      setResult('Please enter a valid email address.');
      return;
    }
    // Create FormData
    const formData = new FormData();
    formData.append('email', email);
    formData.append("access_key", "f05920d0-3b2a-427b-bd0e-de098dfadd58");
    formData.append("subject", "New enquiries Stacia Corp Client Visit Page");
    formData.append("from_name", "Stacia Corp Website"); // Replace with your Web3Forms Access Key
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult('Email sent successfully to admin!');
        setEmail(''); // Clear input
        setIsFormVisible1(false); // Hide form
        setIsFormVisibleCall(false); // Hide form
      } else {
        console.error('Web3Forms Error:', data);
        setResult(data.message || 'Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setResult('Failed to send email. Please try again later.');
    }
  };
  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult('');
      }, 3000); // 3000 milliseconds = 3 seconds
      return () => clearTimeout(timer); // Cleanup timer on unmount or result change
    }
  }, [result]);

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
                onClick={handleInquiryClick2}
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
                onClick={handleInquiryClick1}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="btn-icon"><FaPhoneVolume /></span>
                <span className="btn-text">Schedule Consultation</span>
                <span className="btn-arrow"><GoArrowRight/></span>
              </motion.button>
              {isFormVisibleCall && (
                <form
                  className="email-form"
                  onSubmit={onSubmit}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px',
                    backgroundColor: '#F0F0F0',
                    borderRadius: '25px',
                    maxWidth: '400px',
                    margin: '1rem auto',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <span style={{ marginRight: '8px', color: '#8E6FFF' }}><IoMdMail /></span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      style={{
                        flexGrow: 1,
                        border: 'none',
                        background: 'transparent',
                        outline: 'none',
                        fontSize: '16px',
                        color: '#333',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#8E6FFF',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '10px 20px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#7B5EF8')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#8E6FFF')}
                  >
                    Submit
                  </button>
                </form>
              )}
              {isFormVisible1 && (
                <form
                  className="email-form"
                  onSubmit={onSubmit}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px',
                    backgroundColor: '#F0F0F0',
                    borderRadius: '25px',
                    maxWidth: '400px',
                    margin: '1rem auto',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <span style={{ marginRight: '8px', color: '#8E6FFF' }}><IoMdMail /></span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      style={{
                        flexGrow: 1,
                        border: 'none',
                        background: 'transparent',
                        outline: 'none',
                        fontSize: '16px',
                        color: '#333',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#8E6FFF',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '10px 20px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#7B5EF8')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#8E6FFF')}
                  >
                    Submit
                  </button>
                </form>
              )}

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
