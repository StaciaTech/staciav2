import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendProductInquiry } from '../../utils/emailService';
import '../../styles/Product/ProductInquiryModal.css';

const ProductInquiryModal = ({ isOpen, onClose, productData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    inquiryType: 'general',
    message: '',
    productInterest: '',
    budget: '',
    timeline: '',
    quantity: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const inquiryData = {
        ...formData,
        productName: productData?.title || 'Unknown Product',
        productCategory: productData?.domainName || 'Unknown Category',
        inquiryDate: new Date().toISOString()
      };

      const response = await sendProductInquiry(inquiryData);

      if (response.success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            position: '',
            inquiryType: 'general',
            message: '',
            productInterest: '',
            budget: '',
            timeline: '',
            quantity: '',
            additionalInfo: ''
          });
          onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="modal-container"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title">
                <h2>Know More About This Product</h2>
                <p>Get detailed information about {productData?.title}</p>
              </div>
              <button
                className="modal-close-btn"
                onClick={handleClose}
                disabled={isSubmitting}
              >
                <span>×</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="modal-content">
              <form onSubmit={handleSubmit} className="inquiry-form">
                {/* Personal Information */}
                <div className="form-section">
                  <h3 className="section-title">Personal Information</h3>
                  <div className="form-row">
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
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div className="form-row">
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
                    <div className="form-group">
                      <label htmlFor="company">Company/Organization</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="position">Position/Title</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Enter your position/title"
                    />
                  </div>
                </div>

                {/* Inquiry Details */}
                <div className="form-section">
                  <h3 className="section-title">Inquiry Details</h3>
                  <div className="form-group">
                    <label htmlFor="inquiryType">Type of Inquiry *</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="general">General Information</option>
                      <option value="pricing">Pricing Inquiry</option>
                      <option value="demo">Request Demo</option>
                      <option value="customization">Customization Request</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="productInterest">Specific Product Interest</label>
                    <input
                      type="text"
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleInputChange}
                      placeholder="What specific aspect interests you?"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="budget">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="over-500k">Over $500,000</option>
                        <option value="discuss">Prefer to Discuss</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="timeline">Project Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Timeline</option>
                        <option value="immediate">Immediate (Within 1 month)</option>
                        <option value="short">Short-term (1-3 months)</option>
                        <option value="medium">Medium-term (3-6 months)</option>
                        <option value="long">Long-term (6+ months)</option>
                        <option value="exploring">Just Exploring</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="quantity">Estimated Quantity</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder="Enter estimated quantity needed"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="form-section">
                  <h3 className="section-title">Additional Information</h3>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      placeholder="Please provide details about your inquiry, specific requirements, or any questions you have about this product..."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="additionalInfo">Additional Information</label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Any other information that might be helpful for us to assist you better..."
                    />
                  </div>
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <div className={`submit-status ${submitStatus}`}>
                    {submitStatus === 'success' ? (
                      <div className="success-message">
                        <span className="status-icon">✓</span>
                        <span>Thank you! Your inquiry has been submitted successfully. We'll get back to you soon.</span>
                      </div>
                    ) : (
                      <div className="error-message">
                        <span className="status-icon">✗</span>
                        <span>Sorry, there was an error submitting your inquiry. Please try again.</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Form Actions */}
                <div className="form-actions">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={handleClose}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Submitting...
                      </>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductInquiryModal;
