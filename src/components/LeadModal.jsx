import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "../styles/LeadModal.css";
import StaciaContactLogo from "../assets/StaciaContactLogo.svg";

const LeadModal = ({ isOpen, onClose, item, onSubmit }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      const isDesktop = window.innerWidth > 1024; // lock only for desktops

      if (isDesktop) {
        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";

        return () => {
          document.body.style.position = "";
          document.body.style.top = "";
          document.body.style.width = "";
          document.body.style.overflow = "";
          window.scrollTo(0, scrollY);
        };
      }
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen && item) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: `I'm interested in: ${item.title}`,
      });
    }
  }, [isOpen, item]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-container">
          {/* Left Side - Brand Section */}
          <div className="modal-left">
            <div className="brand-section">
              <div className="logo-container">
                <img
                  src={StaciaContactLogo}
                  alt="Stacia Logo"
                  className="company-logo"
                />
              </div>

              {/* Item Image Section */}
              <div className="modal-item-image-section">
                <div className="item-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="modal-item-image"
                  />
                  {/* <div className="modal-item-category-badge">
                    {item.category}
                  </div> */}
                </div>
              </div>

              <div className="modal-item-info">
                <h4>{item.title}</h4>
                <p className="modal-item-description">{item.description}</p>

                {/* Features List */}
                {/* {item.features && (
                  <div className="modal-features">
                    <h5>Key Features:</h5>
                    <ul className="features-list">
                      {item.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )} */}

                {/* Additional Info */}
                {/* <div className="modal-additional-info">
                  {item.pricing && (
                    <div className="info-item">
                      <span className="info-label">Pricing:</span>
                      <span className="info-value">{item.pricing}</span>
                    </div>
                  )}
                  {item.client && (
                    <div className="info-item">
                      <span className="info-label">Client:</span>
                      <span className="info-value">{item.client}</span>
                    </div>
                  )}
                  {item.duration && (
                    <div className="info-item">
                      <span className="info-label">Duration:</span>
                      <span className="info-value">{item.duration}</span>
                    </div>
                  )}
                </div> */}
              </div>

              <div className="social-section">
                <h5>Connect With Us</h5>
                <div className="contact-socials">
                  <a
                    href="https://www.facebook.com/staciacorp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="social-icon-container">
                      <FaFacebookF className="social-facebook-icon" />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/staciacorp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="social-icon-container">
                      <FaLinkedinIn className="social-linkedin-icon" />
                    </div>
                  </a>
                  <a
                    href="https://x.com/StaciaCorp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="social-icon-container">
                      <BsTwitterX className="social-twitter-icon" />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="social-icon-container">
                      <FaInstagram className="social-insta-icon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div className="modal-right">
            <div className="form-section">
              <div className="form-intro">
                <h3>Express Your Interest</h3>
                <p className="modal-description">
                  Please provide your details and we'll get back to you within
                  24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="lead-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message">Additional Requirements</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Tell us about your specific needs or questions..."
                    />
                  </div>
                </div>

                <div className="modal-actions">
                  <button type="submit" className="submit-button">
                    Submit Interest
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LeadModal;
