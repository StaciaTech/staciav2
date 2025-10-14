import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaChevronRight,
  FaChevronLeft,
  FaCheck,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "../styles/LeadModalTwo.css";
import StaciaContactLogo from "../assets/StaciaContactLogo.svg";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const LeadModalTwo = ({ isOpen, onClose, item, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    {
      title: "What's your name?",
      field: "name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      title: "What's your email?",
      field: "email",
      type: "email",
      placeholder: "Enter your email address",
      required: true,
    },
    {
      title: "What's your phone number?",
      field: "phone",
      type: "phone",
      placeholder: "Enter your phone number",
      required: true,
    },
    {
      title: "Additional Requirements",
      field: "message",
      type: "textarea",
      placeholder: "Tell us about your specific needs or questions...",
      required: false,
    },
  ];

  // Validation functions
  const validateField = (field, value) => {
    const newErrors = { ...errors };

    switch (field) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "Name is required";
        } else if (value.trim().length < 2) {
          newErrors.name = "Name must be at least 2 characters";
        } else {
          delete newErrors.name;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = "Email is required";
        } else if (!emailRegex.test(value)) {
          newErrors.email = "Please enter a valid email address";
        } else {
          delete newErrors.email;
        }
        break;

      case "phone":
        if (!value) {
          newErrors.phone = "Phone number is required";
        } else if (value.length < 10) {
          newErrors.phone = "Please enter a valid phone number";
        } else {
          delete newErrors.phone;
        }
        break;

      case "message":
        if (value.length > 500) {
          newErrors.message = "Message must be less than 500 characters";
        } else {
          delete newErrors.message;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      const isDesktop = window.innerWidth > 1024;
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

  useEffect(() => {
    if (isOpen && item) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: `I'm interested in: ${item.title}`,
      });
      setCurrentStep(0);
      setFormSubmitted(false);
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen, item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Validate field on change
    validateField(name, value);
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value || "",
    });
    // Validate phone field on change
    validateField("phone", value);
  };

  const nextStep = () => {
    const currentField = steps[currentStep].field;
    const currentValue = formData[currentField];

    // Validate current field before proceeding
    if (validateField(currentField, currentValue)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Prevent form submission on Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();

      if (currentStep < steps.length - 1) {
        nextStep();
      }
      // Don't submit on Enter - require explicit button click
    }
  };

  // Completely prevent form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const handleSubmitClick = async () => {
    // Only proceed if we're on the last step
    if (currentStep !== steps.length - 1) {
      return;
    }

    setIsSubmitting(true);

    // Validate all fields before submission
    let isValid = true;
    steps.forEach((step) => {
      if (step.required) {
        if (!validateField(step.field, formData[step.field])) {
          isValid = false;
        }
      }
    });

    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    // Prepare form data for submission
    const submissionData = new FormData();
    submissionData.append("access_key", "e94ad995-f110-472a-81f9-66ff8ca65e98");
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("message", formData.message);
    submissionData.append("subject", `Interest in: ${item.title}`);
    submissionData.append("from_name", "Stacia Corp Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await res.json();
      if (data.success) {
        // Call the original onSubmit with form data
        onSubmit(formData);
        setFormSubmitted(true);
      } else {
        console.error("Submission failed:", data);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    const currentStepData = steps[currentStep];
    if (!currentStepData.required) return true;

    const value = formData[currentStepData.field];

    switch (currentStepData.field) {
      case "name":
        return value && value.trim().length >= 2;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return value && emailRegex.test(value);
      case "phone":
        return value && value.length >= 10;
      default:
        return value && value.trim() !== "";
    }
  };

  const getProgressPercentage = () => {
    return ((currentStep + 1) / steps.length) * 100;
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setCurrentStep(0);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: `I'm interested in: ${item.title}`,
    });
    setErrors({});
    setIsSubmitting(false);
  };

  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay-two" onClick={onClose}>
      <motion.div
        className="modal-content-two"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-two" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-container-two">
          {/* Left Side - Brand Section */}
          <div className="modal-left-two">
            <div className="brand-section-two">
              <div className="logo-container-two">
                <img
                  src={StaciaContactLogo}
                  alt="Stacia Logo"
                  className="company-logo-two"
                />
              </div>

              {/* Item Image Section */}
              <div className="modal-item-image-section-two">
                <div className="item-image-container-two">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="modal-item-image-two"
                  />
                </div>
              </div>

              <div className="modal-item-info-two">
                <h4>{item.title}</h4>
                <p className="modal-item-description-two">{item.description}</p>
              </div>

              <div className="social-section-two">
                <h5>Connect With Us</h5>
                <div className="contact-socials-two">
                  <a
                    href="https://www.facebook.com/staciacorp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="social-icon-container-two">
                      <FaFacebookF className="social-facebook-icon-two" />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/staciacorp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="social-icon-container-two">
                      <FaLinkedinIn className="social-linkedin-icon-two" />
                    </div>
                  </a>
                  <a
                    href="https://x.com/StaciaCorp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="social-icon-container-two">
                      <BsTwitterX className="social-twitter-icon-two" />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="social-icon-container-two">
                      <FaInstagram className="social-insta-icon-two" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div className="modal-right-two">
            <div className="form-section-two">
              {!formSubmitted ? (
                <>
                  <div className="form-intro-two">
                    <h3>Express Your Interest</h3>
                    <p className="modal-description-two">
                      Let's get to know you better. We'll guide you through a
                      few simple steps.
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="progress-bar-section">
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${getProgressPercentage()}%` }}
                      ></div>
                    </div>
                    <div className="progress-text">
                      Step {currentStep + 1} of {steps.length}
                    </div>
                  </div>

                  {/* Remove form tag completely to prevent any automatic submission */}
                  <div className="lead-form-two">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStep}
                        className="form-step"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="step-header">
                          <h4 className="step-title">
                            {steps[currentStep].title}
                          </h4>
                        </div>

                        <div className="step-field">
                          {steps[currentStep].type === "textarea" ? (
                            <>
                              <textarea
                                name={steps[currentStep].field}
                                value={formData[steps[currentStep].field]}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                rows="4"
                                placeholder={steps[currentStep].placeholder}
                                className={`single-field-input ${
                                  errors[steps[currentStep].field]
                                    ? "error"
                                    : ""
                                }`}
                              />
                              {errors[steps[currentStep].field] && (
                                <span className="error-message">
                                  {errors[steps[currentStep].field]}
                                </span>
                              )}
                            </>
                          ) : steps[currentStep].type === "phone" ? (
                            <>
                              <div className="phone-input-container">
                                <PhoneInput
                                  international
                                  defaultCountry="IN"
                                  value={formData.phone}
                                  onChange={handlePhoneChange}
                                  placeholder={steps[currentStep].placeholder}
                                  className={`phone-input-field ${
                                    errors.phone ? "error" : ""
                                  }`}
                                />
                              </div>
                              {errors.phone && (
                                <span className="error-message">
                                  {errors.phone}
                                </span>
                              )}
                            </>
                          ) : (
                            <>
                              <input
                                type={steps[currentStep].type}
                                name={steps[currentStep].field}
                                value={formData[steps[currentStep].field]}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                placeholder={steps[currentStep].placeholder}
                                className={`single-field-input ${
                                  errors[steps[currentStep].field]
                                    ? "error"
                                    : ""
                                }`}
                              />
                              {errors[steps[currentStep].field] && (
                                <span className="error-message">
                                  {errors[steps[currentStep].field]}
                                </span>
                              )}
                            </>
                          )}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="form-navigation">
                      {currentStep > 0 && (
                        <button
                          type="button"
                          className="nav-button prev-button"
                          onClick={prevStep}
                        >
                          <FaChevronLeft />
                          Previous
                        </button>
                      )}

                      {currentStep < steps.length - 1 ? (
                        <button
                          type="button"
                          className="nav-button next-button"
                          onClick={nextStep}
                          disabled={!isStepValid()}
                        >
                          Next
                          <FaChevronRight />
                        </button>
                      ) : (
                        <button
                          type="button" // Changed to button type to prevent any form submission
                          className="nav-button submit-button-two"
                          onClick={handleSubmitClick}
                          disabled={!isStepValid() || isSubmitting}
                        >
                          {isSubmitting ? (
                            "Submitting..."
                          ) : (
                            <>
                              Submit Interest
                              <FaCheck />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                /* Thank You Card */
                <div className="thank-you-card">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="thank-you-content"
                  >
                    <div className="success-icon">
                      <FaCheck />
                    </div>
                    <h3 className="thank-you-title">Thank You!</h3>
                    <p className="thank-you-message">
                      Your interest has been successfully submitted. Our team
                      will get back to you within 24 hours.
                    </p>

                    <div className="contact-options">
                      <div className="contact-option">
                        <FaPhone className="contact-icon" />
                        <div className="contact-info">
                          <p className="contact-label">Call us now</p>
                          <p className="contact-value">+91 9363034150</p>
                        </div>
                      </div>
                      <div className="contact-option">
                        <FaEnvelope className="contact-icon" />
                        <div className="contact-info">
                          <p className="contact-label">Email us</p>
                          <p className="contact-value">
                            contactus@staciacorp.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LeadModalTwo;
