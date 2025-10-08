import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendClientInquiry } from '../../utils/emailService';
import '../../styles/Client/ClientInquiryModal.css';

const ClientInquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    projectType: 'web-development',
    budget: '',
    timeline: '',
    projectDescription: '',
    currentChallenges: '',
    expectedOutcomes: '',
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
        inquiryType: 'client-visit',
        inquiryDate: new Date().toISOString()
      };

      const response = await sendClientInquiry(inquiryData);

      if (response.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            position: '',
            projectType: 'web-development',
            budget: '',
            timeline: '',
            projectDescription: '',
            currentChallenges: '',
            expectedOutcomes: '',
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
                <h2>Let's Start Your Project</h2>
                <p>Tell us about your project and we'll get back to you within 24 hours</p>
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
                  <h3 className="section-title">Contact Information</h3>
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

                {/* Project Information */}
                <div className="form-section">
                  <h3 className="section-title">Project Details</h3>
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="e-commerce">E-commerce Solution</option>
                      <option value="ai-ml">AI/ML Solutions</option>
                      <option value="iot">IoT Development</option>
                      <option value="blockchain">Blockchain Development</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="other">Other</option>
                    </select>
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
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="over-250k">Over $250,000</option>
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
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectDescription">Project Description *</label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      placeholder="Please describe your project in detail..."
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="currentChallenges">Current Challenges</label>
                    <textarea
                      id="currentChallenges"
                      name="currentChallenges"
                      value={formData.currentChallenges}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="What challenges are you currently facing?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="expectedOutcomes">Expected Outcomes</label>
                    <textarea
                      id="expectedOutcomes"
                      name="expectedOutcomes"
                      value={formData.expectedOutcomes}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="What outcomes are you expecting from this project?"
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
                      placeholder="Any other information that might be helpful..."
                    />
                  </div>
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <div className={`submit-status ${submitStatus}`}>
                    {submitStatus === 'success' ? (
                      <div className="success-message">
                        <span className="status-icon">✓</span>
                        <span>Thank you! Your inquiry has been submitted successfully. We'll get back to you within 24 hours.</span>
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

export default ClientInquiryModal;
