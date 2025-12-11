// import React, { useEffect, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaTimes,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaChevronLeft,
//   FaCheck,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import "../styles/LeadModalThree.css";
// import StaciaContactLogo from "../assets/colorstaciacorp.svg";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import {
//   HiOutlineArrowNarrowLeft,
//   HiOutlineArrowNarrowRight,
// } from "react-icons/hi";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import successLottie from "../assets/success.lottie";
// import staciaContactLogo from "../assets/StaciaFavicon.svg";


// const LeadModalThree = ({ isOpen, onClose, item, onSubmit }) => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isCurrentFieldTouched, setIsCurrentFieldTouched] = useState(false);

//   const steps = [
//     {
//       title: "What's your name?",
//       field: "name",
//       type: "text",
//       placeholder: "Enter your full name",
//       required: true,
//     },
//     {
//       title: "What's your email?",
//       field: "email",
//       type: "email",
//       placeholder: "Enter your email address",
//       required: true,
//     },
//     {
//       title: "Contact Details & Requirements",
//       field: "contactAndRequirements",
//       type: "combined",
//       required: true,
//     },
//   ];

//   // Enhanced phone validation function
//   const validatePhoneNumber = (phoneNumber) => {
//     if (!phoneNumber) return false;

//     try {
//       // Remove all non-digit characters except +
//       const cleaned = phoneNumber.replace(/[^\d+]/g, "");

//       // Check if it's a valid international format
//       if (cleaned.startsWith("+")) {
//         // International format - extract country code and national number
//         const withoutPlus = cleaned.slice(1);

//         // For Indian numbers: country code (91) + 10 digits = 12 total
//         // For other countries: country code (1-3 digits) + national number (varies)
//         if (withoutPlus.startsWith("91")) {
//           // Indian number with country code: +91XXXXXXXXXX (12 digits total)
//           const nationalNumber = withoutPlus.slice(2); // Remove country code
//           return (
//             nationalNumber.length === 10 && /^[6-9]\d{9}$/.test(nationalNumber)
//           );
//         } else {
//           // Other international numbers
//           // Minimum: country code (1 digit) + national number (7 digits) = 8
//           // Maximum: country code (3 digits) + national number (12 digits) = 15
//           return withoutPlus.length >= 8 && withoutPlus.length <= 15;
//         }
//       } else {
//         // Local format - should be exactly 10 digits starting with 6-9
//         return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
//       }
//     } catch (error) {
//       return false;
//     }
//   };

//   // Get clean phone number for submission
//   const getCleanPhoneNumber = (phoneNumber) => {
//     if (!phoneNumber) return "";
//     // Remove all non-digit characters except +
//     return phoneNumber.replace(/[^\d+]/g, "");
//   };

//   // ESC key handler
//   const handleEscKey = useCallback(
//     (event) => {
//       if (event.keyCode === 27) {
//         onClose();
//       }
//     },
//     [onClose]
//   );

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener("keydown", handleEscKey, false);
//       return () => {
//         document.removeEventListener("keydown", handleEscKey, false);
//       };
//     }
//   }, [isOpen, handleEscKey]);

//   const validateField = (field, value) => {
//     let isValid = true;

//     setErrors((prevErrors) => {
//       const newErrors = { ...prevErrors };
//       delete newErrors[field];

//       switch (field) {
//         case "name":
//           if (!value.trim()) {
//             newErrors.name = "Name is required";
//             isValid = false;
//           } else if (value.trim().length < 2) {
//             newErrors.name = "Name must be at least 2 characters";
//             isValid = false;
//           }
//           break;

//         case "email":
//           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//           if (!value.trim()) {
//             newErrors.email = "Email is required";
//             isValid = false;
//           } else if (!emailRegex.test(value)) {
//             newErrors.email = "Please enter a valid email address";
//             isValid = false;
//           }
//           break;

//         case "phone":
//           if (!value) {
//             newErrors.phone = "Phone number is required";
//             isValid = false;
//           } else if (!validatePhoneNumber(value)) {
//             // Provide specific error messages based on the issue
//             const cleaned = value.replace(/[^\d+]/g, "");

//             if (cleaned.startsWith("+")) {
//               const withoutPlus = cleaned.slice(1);

//               if (withoutPlus.startsWith("91")) {
//                 // Indian international number
//                 const nationalNumber = withoutPlus.slice(2);
//                 if (nationalNumber.length < 10) {
//                   newErrors.phone =
//                     "Indian number should have 10 digits after +91";
//                 } else if (nationalNumber.length > 10) {
//                   newErrors.phone =
//                     "Indian number should have exactly 10 digits after +91";
//                 } else if (!/^[6-9]/.test(nationalNumber)) {
//                   newErrors.phone =
//                     "Indian mobile number should start with 6, 7, 8, or 9";
//                 } else {
//                   newErrors.phone = "Please enter a valid Indian phone number";
//                 }
//               } else {
//                 // Other international numbers
//                 if (withoutPlus.length < 8) {
//                   newErrors.phone = "International phone number is too short";
//                 } else if (withoutPlus.length > 15) {
//                   newErrors.phone = "International phone number is too long";
//                 } else {
//                   newErrors.phone =
//                     "Please enter a valid international phone number";
//                 }
//               }
//             } else {
//               // Local format
//               if (cleaned.length < 10) {
//                 newErrors.phone = "Phone number should have 10 digits";
//               } else if (cleaned.length > 10) {
//                 newErrors.phone = "Phone number should have exactly 10 digits";
//               } else if (!/^[6-9]/.test(cleaned)) {
//                 newErrors.phone =
//                   "Indian mobile number should start with 6, 7, 8, or 9";
//               } else {
//                 newErrors.phone = "Please enter a valid phone number";
//               }
//             }
//             isValid = false;
//           }
//           break;

//         case "message":
//           if (
//             steps[currentStep].field === "contactAndRequirements" &&
//             !value.trim()
//           ) {
//             newErrors.message = "Message is required";
//             isValid = false;
//           } else if (value.length > 500) {
//             newErrors.message = "Message must be less than 500 characters";
//             isValid = false;
//           }
//           break;

//         default:
//           break;
//       }

//       return newErrors;
//     });

//     return isValid;
//   };

//   useEffect(() => {
//     if (isOpen) {
//       const isDesktop = window.innerWidth > 1024;
//       if (isDesktop) {
//         const scrollY = window.scrollY;
//         document.body.style.position = "fixed";
//         document.body.style.top = `-${scrollY}px`;
//         document.body.style.width = "100%";
//         document.body.style.overflow = "hidden";

//         return () => {
//           document.body.style.position = "";
//           document.body.style.top = "";
//           document.body.style.width = "";
//           document.body.style.overflow = "";
//           window.scrollTo(0, scrollY);
//         };
//       }
//     }
//   }, [isOpen]);
//   console.log(item, "item")
//   useEffect(() => {
//     if (isOpen && item) {
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         message: `I'm interested in: ${item.title}`,
//       });
//       setCurrentStep(0);
//       setFormSubmitted(false);
//       setErrors({});
//       setIsSubmitting(false);
//       setIsCurrentFieldTouched(false);
//     }
//   }, [isOpen, item]);

//   useEffect(() => {
//     if (isOpen) {
//       const currentField = steps[currentStep].field;
//       if (currentField === "contactAndRequirements") {
//         validateField("phone", formData.phone);
//         validateField("message", formData.message);
//       } else {
//         validateField(currentField, formData[currentField]);
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [
//     currentStep,
//     formData.name,
//     formData.email,
//     formData.phone,
//     formData.message,
//   ]);

//   useEffect(() => {
//     setIsCurrentFieldTouched(false);
//   }, [currentStep]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handlePhoneChange = (value) => {
//     // Limit the input length to prevent excessively long numbers
//     if (value && value.length > 20) {
//       return;
//     }

//     setFormData({
//       ...formData,
//       phone: value || "",
//     });
//   };

//   const handleInputBlur = () => {
//     setIsCurrentFieldTouched(true);
//     const currentField = steps[currentStep].field;
//     if (currentField === "contactAndRequirements") {
//       validateField("phone", formData.phone);
//       validateField("message", formData.message);
//     } else {
//       validateField(currentField, formData[currentField]);
//     }
//   };

//   const isStepValid = () => {
//     const currentStepData = steps[currentStep];
//     if (!currentStepData.required) return true;

//     if (currentStepData.field === "contactAndRequirements") {
//       const phoneValid = validatePhoneNumber(formData.phone) && !errors.phone;
//       const messageValid =
//         formData.message && formData.message.trim() !== "" && !errors.message;
//       return phoneValid && messageValid;
//     }

//     const value = formData[currentStepData.field];
//     return value && value.trim() !== "" && !errors[currentStepData.field];
//   };

//   const nextStep = () => {
//     setIsCurrentFieldTouched(true);
//     const currentField = steps[currentStep].field;

//     if (currentField === "contactAndRequirements") {
//       const phoneValid = validateField("phone", formData.phone);
//       const messageValid = validateField("message", formData.message);

//       if (phoneValid && messageValid) {
//         if (currentStep < steps.length - 1) {
//           setCurrentStep(currentStep + 1);
//         }
//       }
//     } else {
//       const currentValue = formData[currentField];
//       if (validateField(currentField, currentValue)) {
//         if (currentStep < steps.length - 1) {
//           setCurrentStep(currentStep + 1);
//         }
//       }
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       e.stopPropagation();

//       if (currentStep < steps.length - 1 && isStepValid()) {
//         nextStep();
//       }
//     }
//   };

//   const handleSubmitClick = async () => {
//     if (currentStep !== steps.length - 1) {
//       return;
//     }

//     setIsSubmitting(true);
//     setIsCurrentFieldTouched(true);

//     let isValid = true;
//     if (
//       !validateField("name", formData.name) ||
//       !validateField("email", formData.email) ||
//       !validateField("phone", formData.phone) ||
//       !validateField("message", formData.message)
//     ) {
//       isValid = false;
//     }

//     // Final phone validation check
//     if (!validatePhoneNumber(formData.phone)) {
//       setErrors((prev) => ({
//         ...prev,
//         phone: "Please enter a valid phone number",
//       }));
//       isValid = false;
//     }

//     if (!isValid) {
//       setIsSubmitting(false);
//       return;
//     }

//     const submissionData = new FormData();
//     submissionData.append("access_key", "e94ad995-f110-472a-81f9-66ff8ca65e98"||"f05920d0-3b2a-427b-bd0e-de098dfadd58");
//     // submissionData.append("access_key", "31997e7a-b269-417f-8543-e6c4adc63ad9");
//     submissionData.append("name", formData.name);
//     submissionData.append("email", formData.email);
//     submissionData.append("phone", getCleanPhoneNumber(formData.phone));
//     submissionData.append("message", formData.message);
//     submissionData.append("subject", `Interest in: ${item.title}`);
//     submissionData.append("from_name", "Stacia Corp Website");

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: submissionData,
//       });

//       const data = await res.json();
//       if (data.success) {
//         onSubmit(formData);
//         setFormSubmitted(true);
//       } else {
//         console.error("Submission failed:", data);
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const getProgressPercentage = () => {
//     return ((currentStep + 1) / steps.length) * 100;
//   };

//   if (!isOpen || !item) return null;

//   const isLastStep = currentStep === steps.length - 1;
//   const isErrorVisible = (fieldName) => {
//     return errors[fieldName] && isCurrentFieldTouched;
//   };

//   return (
//     <div className="modal-overlay-two" onClick={onClose}>
//       <motion.div
//         className="modal-content-two"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         transition={{ duration: 0.3 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button className="modal-close-two" onClick={onClose}>
//           <FaTimes />
//         </button>

//         <div className="modal-container-two">
//           {/* Left Side - Enhanced Brand Section */}
//           <div className="modal-left-two">
//             <div className="brand-section-two">
//               {/* Item Image as Background */}
//               <div className="modal-item-image-section-two">
//                 <div className="item-image-container-two">
//                   <img
//                     src={item?.image || item?.imageUrl || staciaContactLogo}
//                     alt={item?.title}
//                     className="modal-item-image-two"
//                   />
//                 </div>
//               </div>

//               {/* Enhanced Glassmorphism Context */}
//               <div className="modal-item-info-two" >
//                 <h4>{item?.title || "Stacia Corp"}</h4>
//                 <p className="modal-item-description-two">{item?.description || item?.oneLine || "Stacia Corp specializes in mechanical engineering, advanced machine solutions, and R&D, providing innovative, precise, and efficient designs that enhance industrial performance and drive technological advancement."}</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Form Section */}
//           <div className="modal-right-two">
//             <div className="form-section-two">
//               {!formSubmitted ? (
//                 <>
//                   <div className="logo-container-two">
//                     <img
//                       src={StaciaContactLogo}
//                       alt="Stacia Logo"
//                       className="company-logo-two"
//                     />
//                   </div>
//                   <div className="form-intro-two">
//                     <h3>Express Your Interest</h3>
//                     <p className="modal-description-two">
//                       Let's get to know you better. We'll guide you through a
//                       few simple steps.
//                     </p>
//                   </div>

//                   {/* Progress Bar */}
//                   <div className="progress-bar-section">
//                     <div className="progress-bar-container">
//                       <div
//                         className="progress-bar-fill"
//                         style={{ width: `${getProgressPercentage()}%` }}
//                       ></div>
//                     </div>
//                     <div className="progress-text">
//                       Step {currentStep + 1} of {steps.length}
//                     </div>
//                   </div>

//                   {/* Form Step Container */}
//                   <div className="lead-form-two">
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={currentStep}
//                         className="form-step"
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -50 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {/* Previous Arrow */}
//                         {currentStep > 0 && (
//                           <button
//                             type="button"
//                             className="elegant-prev-arrow-positioned"
//                             onClick={prevStep}
//                           >
//                             <HiOutlineArrowNarrowLeft />
//                           </button>
//                         )}

//                         {/* Step Header */}
//                         <div className="elegant-step-header">
//                           <h4 className="elegant-step-title">
//                             {steps[currentStep].title}
//                           </h4>
//                         </div>

//                         {/* Field Container */}
//                         <div
//                           className={`step-field-and-arrow-container ${isLastStep ? "last-step-container" : ""
//                             }`}
//                         >
//                           {/* Input Field Section */}
//                           <div className="step-field">
//                             {steps[currentStep].type === "combined" ? (
//                               <div className="combined-fields">
//                                 <div className="phone-field-container">
//                                   <div className="phone-input-container">
//                                     <PhoneInput
//                                       international
//                                       defaultCountry="IN"
//                                       value={formData.phone}
//                                       onChange={handlePhoneChange}
//                                       onBlur={handleInputBlur}
//                                       placeholder="Enter your phone number"
//                                       className={`phone-input-field ${isErrorVisible("phone") ? "error" : ""
//                                         }`}
//                                     />
//                                   </div>
//                                   {isErrorVisible("phone") && (
//                                     <span className="error-message">
//                                       {errors.phone}
//                                     </span>
//                                   )}
//                                 </div>

//                                 <div className="message-field-container">
//                                   <textarea
//                                     name="message"
//                                     value={formData.message}
//                                     onChange={handleInputChange}
//                                     onBlur={handleInputBlur}
//                                     onKeyDown={handleKeyDown}
//                                     rows="4"
//                                     placeholder="Tell us about your specific needs or questions..."
//                                     className={`single-field-input ${isErrorVisible("message") ? "error" : ""
//                                       }`}
//                                   />
//                                   {isErrorVisible("message") && (
//                                     <span className="error-message">
//                                       {errors.message}
//                                     </span>
//                                   )}
//                                 </div>
//                               </div>
//                             ) : (
//                               <>
//                                 <input
//                                   type={steps[currentStep].type}
//                                   name={steps[currentStep].field}
//                                   value={formData[steps[currentStep].field]}
//                                   onChange={handleInputChange}
//                                   onBlur={handleInputBlur}
//                                   onKeyDown={handleKeyDown}
//                                   placeholder={steps[currentStep].placeholder}
//                                   className={`single-field-input elegant-input ${isErrorVisible(steps[currentStep].field)
//                                       ? "error"
//                                       : ""
//                                     }`}
//                                   autoFocus
//                                 />
//                                 {isErrorVisible(steps[currentStep].field) && (
//                                   <span className="error-message">
//                                     {errors[steps[currentStep].field]}
//                                   </span>
//                                 )}
//                               </>
//                             )}
//                           </div>

//                           {/* Next Arrow */}
//                           {!isLastStep && isStepValid() && (
//                             <div className="elegant-next-arrow-wrapper">
//                               <button
//                                 type="button"
//                                 className="elegant-next-arrow"
//                                 onClick={nextStep}
//                                 disabled={!isStepValid()}
//                               >
//                                 <HiOutlineArrowNarrowRight />
//                               </button>
//                             </div>
//                           )}
//                         </div>

//                         {/* Centered Submit Button */}
//                         {isLastStep && (
//                           <div className="centered-submit-wrapper">
//                             <button
//                               type="button"
//                               className="centered-submit-button"
//                               onClick={handleSubmitClick}
//                               disabled={!isStepValid() || isSubmitting}
//                               style={{
//                                 backgroundColor: isStepValid()
//                                   ? "#4CAF50"
//                                   : undefined,
//                                 color: isStepValid() ? "white" : undefined,
//                               }}
//                             >
//                               {isSubmitting ? (
//                                 <div className="submit-spinner"></div>
//                               ) : (
//                                 <>
//                                   <span>Submit Interest</span>
//                                   <FaCheck />
//                                 </>
//                               )}
//                             </button>
//                           </div>
//                         )}
//                       </motion.div>
//                     </AnimatePresence>
//                   </div>

//                   {/* Social Section */}
//                   <div className="social-section-two">
//                     <h5>Connect With Us</h5>
//                     <div className="contact-socials-two">
//                       <a
//                         href="https://www.facebook.com/staciacorp/"
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         <div className="social-icon-container-two">
//                           <FaFacebookF className="social-facebook-icon-two" />
//                         </div>
//                       </a>
//                       <a
//                         href="https://www.linkedin.com/company/staciacorp"
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         <div className="social-icon-container-two">
//                           <FaLinkedinIn className="social-linkedin-icon-two" />
//                         </div>
//                       </a>
//                       <a
//                         href="https://x.com/StaciaCorp"
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         <div className="social-icon-container-two">
//                           <BsTwitterX className="social-twitter-icon-two" />
//                         </div>
//                       </a>
//                       <a
//                         href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA=="
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         <div className="social-icon-container-two">
//                           <FaInstagram className="social-insta-icon-two" />
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 /* Enhanced Thank You Card with Social Media */
//                 <div className="thank-you-card">
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="thank-you-content"
//                   >
//                     <div className="success-icon">
//                       <motion.div
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 1, delay: 0.2 }}
//                         className="thank-you-content"
//                       >
//                         <DotLottieReact src={successLottie} autoplay />
//                       </motion.div>
//                     </div>
//                     <h3 className="thank-you-title">Thank You!</h3>
//                     <p className="thank-you-message">
//                       Your interest has been successfully submitted. Our team
//                       will get back to you within 24 hours.
//                     </p>

//                     <div className="contact-options">
//                       <div className="contact-option">
//                         <FaPhone className="contact-icon" />
//                         <div className="contact-info">
//                           <p className="contact-label">Call us now</p>
//                           <p className="contact-value">+91 9363034150</p>
//                         </div>
//                       </div>
//                       <div className="contact-option">
//                         <FaEnvelope className="contact-icon" />
//                         <div className="contact-info">
//                           <p className="contact-label">Email us</p>
//                           <p className="contact-value">
//                             contactus@staciacorp.com
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Social Media Section in Thank You Card */}
//                     <div className="thank-you-social-section">
//                       <div className="thank-you-divider">
//                         <span className="thank-you-divider-text">or</span>
//                       </div>
//                       <div className="thank-you-social-icons">
//                         <a
//                           href="https://www.facebook.com/staciacorp/"
//                           target="_blank"
//                           rel="noreferrer"
//                           className="thank-you-social-link"
//                         >
//                           <FaFacebookF className="thank-you-social-icon" />
//                         </a>
//                         <a
//                           href="https://www.linkedin.com/company/staciacorp"
//                           target="_blank"
//                           rel="noreferrer"
//                           className="thank-you-social-link"
//                         >
//                           <FaLinkedinIn className="thank-you-social-icon" />
//                         </a>
//                         <a
//                           href="https://x.com/StaciaCorp"
//                           target="_blank"
//                           rel="noreferrer"
//                           className="thank-you-social-link"
//                         >
//                           <BsTwitterX className="thank-you-social-icon" />
//                         </a>
//                         <a
//                           href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA=="
//                           target="_blank"
//                           rel="noreferrer"
//                           className="thank-you-social-link"
//                         >
//                           <FaInstagram className="thank-you-social-icon" />
//                         </a>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default LeadModalThree;


import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaChevronLeft,
  FaCheck,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
// import "../styles/LeadModalThree.css";
import styles from "../styles/LeadModalThree.module.css";
import StaciaContactLogo from "../assets/colorstaciacorp.svg";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import successLottie from "../assets/success.lottie";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import successLottie from "../assets/success.lottie";
// import staciaContactLogo from "../assets/StaciaFavicon.svg";

const LeadModalThree = ({ isOpen, onClose, item, onSubmit }) => {
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
  const [isCurrentFieldTouched, setIsCurrentFieldTouched] = useState(false);

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
      title: "Contact Details & Requirements",
      field: "contactAndRequirements",
      type: "combined",
      required: true,
    },
  ];

  // Enhanced phone validation function
  const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return false;

    try {
      // Remove all non-digit characters except +
      const cleaned = phoneNumber.replace(/[^\d+]/g, "");

      // Check if it's a valid international format
      if (cleaned.startsWith("+")) {
        // International format - extract country code and national number
        const withoutPlus = cleaned.slice(1);

        // For Indian numbers: country code (91) + 10 digits = 12 total
        // For other countries: country code (1-3 digits) + national number (varies)
        if (withoutPlus.startsWith("91")) {
          // Indian number with country code: +91XXXXXXXXXX (12 digits total)
          const nationalNumber = withoutPlus.slice(2); // Remove country code
          return (
            nationalNumber.length === 10 && /^[6-9]\d{9}$/.test(nationalNumber)
          );
        } else {
          // Other international numbers
          // Minimum: country code (1 digit) + national number (7 digits) = 8
          // Maximum: country code (3 digits) + national number (12 digits) = 15
          return withoutPlus.length >= 8 && withoutPlus.length <= 15;
        }
      } else {
        // Local format - should be exactly 10 digits starting with 6-9
        return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
      }
    } catch (error) {
      return false;
    }
  };

  // Get clean phone number for submission
  const getCleanPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return "";
    // Remove all non-digit characters except +
    return phoneNumber.replace(/[^\d+]/g, "");
  };

  // ESC key handler
  const handleEscKey = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscKey, false);
      return () => {
        document.removeEventListener("keydown", handleEscKey, false);
      };
    }
  }, [isOpen, handleEscKey]);

  const validateField = (field, value) => {
    let isValid = true;

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];

      switch (field) {
        case "name":
          if (!value.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
          } else if (value.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
            isValid = false;
          }
          break;

        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!value.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
          } else if (!emailRegex.test(value)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
          }
          break;

        case "phone":
          if (!value) {
            newErrors.phone = "Phone number is required";
            isValid = false;
          } else if (!validatePhoneNumber(value)) {
            // Provide specific error messages based on the issue
            const cleaned = value.replace(/[^\d+]/g, "");

            if (cleaned.startsWith("+")) {
              const withoutPlus = cleaned.slice(1);

              if (withoutPlus.startsWith("91")) {
                // Indian international number
                const nationalNumber = withoutPlus.slice(2);
                if (nationalNumber.length < 10) {
                  newErrors.phone =
                    "Indian number should have 10 digits after +91";
                } else if (nationalNumber.length > 10) {
                  newErrors.phone =
                    "Indian number should have exactly 10 digits after +91";
                } else if (!/^[6-9]/.test(nationalNumber)) {
                  newErrors.phone =
                    "Indian mobile number should start with 6, 7, 8, or 9";
                } else {
                  newErrors.phone = "Please enter a valid Indian phone number";
                }
              } else {
                // Other international numbers
                if (withoutPlus.length < 8) {
                  newErrors.phone = "International phone number is too short";
                } else if (withoutPlus.length > 15) {
                  newErrors.phone = "International phone number is too long";
                } else {
                  newErrors.phone =
                    "Please enter a valid international phone number";
                }
              }
            } else {
              // Local format
              if (cleaned.length < 10) {
                newErrors.phone = "Phone number should have 10 digits";
              } else if (cleaned.length > 10) {
                newErrors.phone = "Phone number should have exactly 10 digits";
              } else if (!/^[6-9]/.test(cleaned)) {
                newErrors.phone =
                  "Indian mobile number should start with 6, 7, 8, or 9";
              } else {
                newErrors.phone = "Please enter a valid phone number";
              }
            }
            isValid = false;
          }
          break;

        case "message":
          if (
            steps[currentStep].field === "contactAndRequirements" &&
            !value.trim()
          ) {
            newErrors.message = "Message is required";
            isValid = false;
          } else if (value.length > 500) {
            newErrors.message = "Message must be less than 500 characters";
            isValid = false;
          }
          break;

        default:
          break;
      }

      return newErrors;
    });

    return isValid;
  };

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
      setIsCurrentFieldTouched(false);
    }
  }, [isOpen, item]);

  useEffect(() => {
    if (isOpen) {
      const currentField = steps[currentStep].field;
      if (currentField === "contactAndRequirements") {
        validateField("phone", formData.phone);
        validateField("message", formData.message);
      } else {
        validateField(currentField, formData[currentField]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentStep,
    formData.name,
    formData.email,
    formData.phone,
    formData.message,
  ]);

  useEffect(() => {
    setIsCurrentFieldTouched(false);
  }, [currentStep]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    // Limit the input length to prevent excessively long numbers
    if (value && value.length > 20) {
      return;
    }

    setFormData({
      ...formData,
      phone: value || "",
    });
  };

  const handleInputBlur = () => {
    setIsCurrentFieldTouched(true);
    const currentField = steps[currentStep].field;
    if (currentField === "contactAndRequirements") {
      validateField("phone", formData.phone);
      validateField("message", formData.message);
    } else {
      validateField(currentField, formData[currentField]);
    }
  };

  const isStepValid = () => {
    const currentStepData = steps[currentStep];
    if (!currentStepData.required) return true;

    if (currentStepData.field === "contactAndRequirements") {
      const phoneValid = validatePhoneNumber(formData.phone) && !errors.phone;
      const messageValid =
        formData.message && formData.message.trim() !== "" && !errors.message;
      return phoneValid && messageValid;
    }

    const value = formData[currentStepData.field];
    return value && value.trim() !== "" && !errors[currentStepData.field];
  };

  const nextStep = () => {
    setIsCurrentFieldTouched(true);
    const currentField = steps[currentStep].field;

    if (currentField === "contactAndRequirements") {
      const phoneValid = validateField("phone", formData.phone);
      const messageValid = validateField("message", formData.message);

      if (phoneValid && messageValid) {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      }
    } else {
      const currentValue = formData[currentField];
      if (validateField(currentField, currentValue)) {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();

      if (currentStep < steps.length - 1 && isStepValid()) {
        nextStep();
      }
    }
  };

  const handleSubmitClick = async () => {
    if (currentStep !== steps.length - 1) {
      return;
    }

    setIsSubmitting(true);
    setIsCurrentFieldTouched(true);

    let isValid = true;
    if (
      !validateField("name", formData.name) ||
      !validateField("email", formData.email) ||
      !validateField("phone", formData.phone) ||
      !validateField("message", formData.message)
    ) {
      isValid = false;
    }

    // Final phone validation check
    if (!validatePhoneNumber(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid phone number",
      }));
      isValid = false;
    }

    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    const submissionData = new FormData();
    submissionData.append("access_key", "e94ad995-f110-472a-81f9-66ff8ca65e98");
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("phone", getCleanPhoneNumber(formData.phone));
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

  const getProgressPercentage = () => {
    return ((currentStep + 1) / steps.length) * 100;
  };

  if (!isOpen || !item) return null;

  const isLastStep = currentStep === steps.length - 1;
  const isErrorVisible = (fieldName) => {
    return errors[fieldName] && isCurrentFieldTouched;
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <div className={styles.container}>
          {/* Left Side - Enhanced Brand Section */}
          <div className={styles.leftSide}>
            <div className={styles.brandSection}>
              {/* Item Image as Background */}
              <div className={styles.itemImageSection}>
                <div className={styles.itemImageContainer}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.itemImage}
                  />
                </div>
              </div>

              {/* Enhanced Glassmorphism Context */}
              {item.title !== "" && (<div className={styles.itemInfo}>
                <h4>{item.title}</h4>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>)}

            </div>
          </div>

          {/* Right Side - Form Section */}
          <div className={styles.rightSide}>
            <div className={styles.formSection}>
              {!formSubmitted ? (
                <>
                  <div className={styles.logoContainer}>
                    <img
                      src={StaciaContactLogo}
                      alt="Stacia Logo"
                      className={styles.companyLogo}
                    />
                  </div>
                  <div className={styles.formIntro}>
                    <h3>Express Your Interest</h3>
                    <p className={styles.modalDescription}>
                      Let's get to know you better. We'll guide you through a
                      few simple steps.
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className={styles.progressSection}>
                    <div className={styles.progressContainer}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${getProgressPercentage()}%` }}
                      ></div>
                    </div>
                    <div className={styles.progressText}>
                      Step {currentStep + 1} of {steps.length}
                    </div>
                  </div>

                  {/* Form Step Container */}
                  <div className={styles.leadForm}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStep}
                        className={styles.formStep}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Previous Arrow */}
                        {currentStep > 0 && (
                          <button
                            type="button"
                            className={styles.prevArrow}
                            onClick={prevStep}
                          >
                            <HiOutlineArrowNarrowLeft />
                          </button>
                        )}

                        {/* Step Header */}
                        <div className={styles.stepHeader}>
                          <h4 className={styles.stepTitle}>
                            {steps[currentStep].title}
                          </h4>
                        </div>

                        {/* Field Container */}
                        <div
                          className={`${styles.fieldContainer} ${isLastStep ? styles.lastStep : ""
                            }`}
                        >
                          {/* Input Field Section */}
                          <div className={styles.stepField}>
                            {steps[currentStep].type === "combined" ? (
                              <div className={styles.combinedFields}>
                                <div className={styles.phoneFieldContainer}>
                                  <div className={styles.phoneInputContainer}>
                                    <PhoneInput
                                      international
                                      defaultCountry="IN"
                                      value={formData.phone}
                                      onChange={handlePhoneChange}
                                      onBlur={handleInputBlur}
                                      placeholder="Enter your phone number"
                                      className={`${styles.phoneInputField} ${isErrorVisible("phone")
                                          ? styles.error
                                          : ""
                                        }`}
                                    />
                                  </div>
                                  {isErrorVisible("phone") && (
                                    <span className={styles.errorMessage}>
                                      {errors.phone}
                                    </span>
                                  )}
                                </div>

                                <div className={styles.messageFieldContainer}>
                                  <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    onKeyDown={handleKeyDown}
                                    rows="4"
                                    placeholder="Tell us about your specific needs or questions..."
                                    className={`${styles.singleFieldInput} ${styles.textarea
                                      } ${isErrorVisible("message")
                                        ? styles.error
                                        : ""
                                      }`}
                                  />
                                  {isErrorVisible("message") && (
                                    <span className={styles.errorMessage}>
                                      {errors.message}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <>
                                <input
                                  type={steps[currentStep].type}
                                  name={steps[currentStep].field}
                                  value={formData[steps[currentStep].field]}
                                  onChange={handleInputChange}
                                  onBlur={handleInputBlur}
                                  onKeyDown={handleKeyDown}
                                  placeholder={steps[currentStep].placeholder}
                                  className={`${styles.singleFieldInput} ${styles.elegant
                                    } ${isErrorVisible(steps[currentStep].field)
                                      ? styles.error
                                      : ""
                                    }`}
                                  autoFocus
                                />
                                {isErrorVisible(steps[currentStep].field) && (
                                  <span className={styles.errorMessage}>
                                    {errors[steps[currentStep].field]}
                                  </span>
                                )}
                              </>
                            )}
                          </div>

                          {/* Next Arrow */}
                          {!isLastStep && isStepValid() && (
                            <div className={styles.nextArrowWrapper}>
                              <button
                                type="button"
                                className={styles.nextArrow}
                                onClick={nextStep}
                                disabled={!isStepValid()}
                              >
                                <HiOutlineArrowNarrowRight />
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Centered Submit Button */}
                        {isLastStep && (
                          <div className={styles.submitWrapper}>
                            <button
                              type="button"
                              className={styles.submitButton}
                              onClick={handleSubmitClick}
                              disabled={!isStepValid() || isSubmitting}
                              style={{
                                backgroundColor: isStepValid()
                                  ? "#4CAF50"
                                  : undefined,
                                color: isStepValid() ? "white" : undefined,
                              }}
                            >
                              {isSubmitting ? (
                                <div className={styles.submitSpinner}></div>
                              ) : (
                                <>
                                  <span>Submit Interest</span>
                                  <FaCheck />
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Social Section */}
                  <div className={styles.socialSection}>
                    <h5>Connect With Us</h5>
                    <div className={styles.contactSocials}>
                      <a
                        href="https://www.facebook.com/staciacorp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className={styles.socialIconContainer}>
                          <FaFacebookF className={styles.socialIcon} />
                        </div>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/staciacorp"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className={styles.socialIconContainer}>
                          <FaLinkedinIn className={styles.socialIcon} />
                        </div>
                      </a>
                      <a
                        href="https://x.com/StaciaCorp"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className={styles.socialIconContainer}>
                          <BsTwitterX className={styles.socialIcon} />
                        </div>
                      </a>
                      <a
                        href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA=="
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className={styles.socialIconContainer}>
                          <FaInstagram className={styles.socialIcon} />
                        </div>
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                /* Enhanced Thank You Card with Social Media */
                <div className={styles.thankYouCard}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={styles.thankYouContent}
                  >
                    <div className={styles.successIcon}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        <div className="lottie-wrapper">
                          <DotLottieReact src={successLottie} autoplay />
                        </div>
                      </motion.div>
                    </div>
                    <h3 className={styles.thankYouTitle}>Thank You!</h3>
                    <p className={styles.thankYouMessage}>
                      Your interest has been successfully submitted. Our team
                      will get back to you within 24 hours.
                    </p>

                    <div className={styles.contactOptions}>
                      <div className={styles.contactOption}>
                        <FaPhone className={styles.contactIcon} />
                        <div className={styles.contactInfo}>
                          <p className={styles.contactLabel}>Call us now</p>
                          <p className={styles.contactValue}>+91 9363034150</p>
                        </div>
                      </div>
                      <div className={styles.contactOption}>
                        <FaEnvelope className={styles.contactIcon} />
                        <div className={styles.contactInfo}>
                          <p className={styles.contactLabel}>Email us</p>
                          <p className={styles.contactValue}>
                            contactus@staciacorp.com
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Social Media Section in Thank You Card */}
                    <div className={styles.thankYouSocialSection}>
                      <div className={styles.thankYouDivider}>
                        <span className={styles.thankYouDividerText}>or</span>
                      </div>
                      <div className={styles.thankYouSocialIcons}>
                        <a
                          href="https://www.facebook.com/staciacorp/"
                          target="_blank"
                          rel="noreferrer"
                          className={styles.thankYouSocialLink}
                        >
                          <FaFacebookF className={styles.thankYouSocialIcon} />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/staciacorp"
                          target="_blank"
                          rel="noreferrer"
                          className={styles.thankYouSocialLink}
                        >
                          <FaLinkedinIn className={styles.thankYouSocialIcon} />
                        </a>
                        <a
                          href="https://x.com/StaciaCorp"
                          target="_blank"
                          rel="noreferrer"
                          className={styles.thankYouSocialLink}
                        >
                          <BsTwitterX className={styles.thankYouSocialIcon} />
                        </a>
                        <a
                          href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA=="
                          target="_blank"
                          rel="noreferrer"
                          className={styles.thankYouSocialLink}
                        >
                          <FaInstagram className={styles.thankYouSocialIcon} />
                        </a>
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
export default LeadModalThree;
