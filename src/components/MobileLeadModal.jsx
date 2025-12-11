// // MobileLeadModal.jsx
// import React, { useEffect, useState } from "react";

// export default function MobileLeadModal({ isOpen, onClose, item, onSubmit }) {
//   const [name, setName] = useState("");
//   const [step, setStep] = useState(1);

//   useEffect(() => {
//     if (!isOpen) {
//       setName("");
//       setStep(1);
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const handleNext = () => setStep((s) => Math.min(3, s + 1));
//   const handlePrev = () => setStep((s) => Math.max(1, s - 1));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = { name, step };
//     if (onSubmit) onSubmit(formData);
//     onClose();
//   };

//   return (
//     <div className="mlm-overlay" role="dialog" aria-modal="true">
//       <div className="mlm-panel" role="document">
//         <button className="mlm-close" onClick={onClose} aria-label="Close">✕</button>
//         <div className="mlm-inner">
//           <div className="mlm-left">
//             {item?.image && <img src={item.image} alt="" className="mlm-left-img" />}
//           </div>
//           <div className="mlm-right">
//             <div className="mlm-brand">STACIA<span style={{ color: "#0047FF" }}>Corp</span></div>
//             <h2 className="mlm-title">Express Your Interest</h2>
//             <p className="mlm-sub">Let's get to know you better. We'll guide you through a few simple steps.</p>

//             <div className="mlm-progress-wrap">
//               <div className="mlm-progress">
//                 <div className="mlm-progress-bar" style={{ width: `${(step / 3) * 100}%` }} />
//               </div>
//               <div className="mlm-step-text">Step {step} of 3</div>
//             </div>

//             <form className="mlm-form" onSubmit={handleSubmit}>
//               {step === 1 && (
//                 <>
//                   <label className="mlm-label">What's your name?</label>
//                   <input className="mlm-input" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required />
//                 </>
//               )}
//               {step === 2 && (
//                 <>
//                   <label className="mlm-label">What's your email?</label>
//                   <input className="mlm-input" placeholder="your@email.com" type="email" required />
//                 </>
//               )}
//               {step === 3 && (
//                 <>
//                   <label className="mlm-label">Message</label>
//                   <textarea className="mlm-input" placeholder="Tell us how we can help" rows={4} />
//                 </>
//               )}

//               <div className="mlm-actions">
//                 {step > 1 ? <button type="button" className="mlm-btn ghost" onClick={handlePrev}>Back</button> : <div />}
//                 {step < 3 ? <button type="button" className="mlm-btn primary" onClick={handleNext}>Next</button> : <button type="submit" className="mlm-btn primary">Submit</button>}
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// MobileLeadModal.jsx
// import React, { useEffect, useState, useCallback } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
// import { FaTimes, FaCheck } from "react-icons/fa";
// import "../styles/mobileLeadModal.css"; // path to the CSS below
// import StaciaContactLogo from "../assets/colorstaciacorp.svg";

// export default function MobileLeadModal({ isOpen, onClose, item, onSubmit }) {
//     const [step, setStep] = useState(0);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [touched, setTouched] = useState(false);
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//     });
//     const [errors, setErrors] = useState({});

//     const steps = [
//         { title: "What's your name?", field: "name", type: "text", placeholder: "Enter your full name", required: true },
//         { title: "What's your email?", field: "email", type: "email", placeholder: "Enter your email address", required: true },
//         { title: "Contact Details & Requirements", field: "contactAndRequirements", type: "combined", required: true },
//     ];

//     // Simple/robust phone validation (compatible with LeadModalThree)
//     const validatePhoneNumber = (phoneNumber) => {
//         if (!phoneNumber) return false;
//         try {
//             const cleaned = phoneNumber.replace(/[^\d+]/g, "");
//             if (cleaned.startsWith("+")) {
//                 const withoutPlus = cleaned.slice(1);
//                 if (withoutPlus.startsWith("91")) {
//                     const national = withoutPlus.slice(2);
//                     return national.length === 10 && /^[6-9]\d{9}$/.test(national);
//                 } else {
//                     return withoutPlus.length >= 8 && withoutPlus.length <= 15;
//                 }
//             } else {
//                 return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
//             }
//         } catch {
//             return false;
//         }
//     };

//     // Small helper to check step validity
//     const isStepValid = () => {
//         if (!steps[step].required) return true;
//         const current = steps[step];
//         if (current.type === "combined") {
//             // phone + message required
//             const phoneOk = validatePhoneNumber(formData.phone) && !errors.phone;
//             const msgOk = formData.message && formData.message.trim() !== "" && !errors.message;
//             return phoneOk && msgOk;
//         }
//         const value = formData[current.field];
//         if (!value || value.trim() === "") return false;
//         if (errors[current.field]) return false;
//         return true;
//     };

//     // Basic field validators (kept light)
//     const validateField = (field, value) => {
//         let err = "";
//         if (field === "name") {
//             if (!value.trim()) err = "Name is required";
//             else if (value.trim().length < 2) err = "Name must be at least 2 characters";
//         } else if (field === "email") {
//             const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!value.trim()) err = "Email is required";
//             else if (!re.test(value)) err = "Enter a valid email";
//         } else if (field === "phone") {
//             if (!value) err = "Phone is required";
//             else if (!validatePhoneNumber(value)) err = "Enter a valid phone number";
//         } else if (field === "message") {
//             if (!value || value.trim() === "") err = "Message is required";
//             else if (value.length > 500) err = "Message must be less than 500 characters";
//         }
//         setErrors((prev) => ({ ...prev, [field]: err }));
//         return !err;
//     };

//     // Keep form in sync when modal opens
//     useEffect(() => {
//         if (isOpen) {
//             setStep(0);
//             setFormData({
//                 name: "",
//                 email: "",
//                 phone: "",
//                 message: item?.title ? `I'm interested in: ${item.title}` : "",
//             });
//             setErrors({});
//             setTouched(false);
//             setIsSubmitting(false);
//         }
//     }, [isOpen, item]);

//     // lock body scroll when open
//     useEffect(() => {
//         if (isOpen) {
//             document.body.classList.add("no-scroll");
//             return () => document.body.classList.remove("no-scroll");
//         }
//     }, [isOpen]);

//     const next = () => {
//         setTouched(true);
//         const current = steps[step];
//         if (current.type === "combined") {
//             const pv = validateField("phone", formData.phone);
//             const mv = validateField("message", formData.message);
//             if (!pv || !mv) return;
//         } else {
//             if (!validateField(current.field, formData[current.field])) return;
//         }
//         if (step < steps.length - 1) setStep((s) => s + 1);
//     };

//     const prev = () => {
//         if (step > 0) setStep((s) => s - 1);
//     };

//     const handleSubmit = async (e) => {
//         e && e.preventDefault();
//         setTouched(true);
//         // final validation
//         const nameOk = validateField("name", formData.name);
//         const emailOk = validateField("email", formData.email);
//         const phoneOk = validateField("phone", formData.phone);
//         const msgOk = validateField("message", formData.message);
//         if (!nameOk || !emailOk || !phoneOk || !msgOk) return;
//         setIsSubmitting(true);

//         // Call parent onSubmit (keep same shape as LeadModalThree expects)
//         try {
//             if (onSubmit) await onSubmit(formData);
//             // show local success for a short time then close (caller may also close)
//             setIsSubmitting(false);
//             // close modal after a short delay so user sees success
//             setTimeout(() => {
//                 onClose();
//             }, 800);
//         } catch (err) {
//             console.error("submit error", err);
//             setIsSubmitting(false);
//         }
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             if (step < steps.length - 1 && isStepValid()) next();
//             else if (step === steps.length - 1) handleSubmit();
//         } else if (e.key === "Escape") {
//             onClose();
//         }
//     };

//     const onOverlayClick = (e) => {
//         // close when tapping outside content
//         if (e.target.classList.contains("mlm-overlay")) onClose();
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="mlm-overlay" onClick={onOverlayClick} role="dialog" aria-modal="true">
//             <div className="mlm-panel" onKeyDown={handleKeyDown} tabIndex={-1}>
//                 <button className="mlm-close" onClick={onClose} aria-label="Close">
//                     <FaTimes />
//                 </button>

//                 <div className="mlm-inner">
//                     {/* Left image block (smaller on mobile) */}
//                     <div className="mlm-left">
//                         {item?.image ? (
//                             <img src={item.image} alt={item.title || "contact"} className="mlm-left-img" />
//                         ) : (
//                             <div className="mlm-left-placeholder" />
//                         )}
//                     </div>

//                     {/* Right content */}
//                     <div className="mlm-right">
//                         <div className="mlm-brand">STACIA<span className="mlm-brand-accent">Corp</span></div>
//                         <h2 className="mlm-title">Express Your Interest</h2>
//                         <p className="mlm-sub">Let's get to know you better. We'll guide you through a few simple steps.</p>

//                         <div className="mlm-progress-wrap">
//                             <div className="mlm-progress"><div className="mlm-progress-bar" style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
//                             <div className="mlm-step-text">Step {step + 1} of {steps.length}</div>
//                         </div>

//                         <form className="mlm-form" onSubmit={handleSubmit}>
//                             {/* Step content */}
//                             {step === 0 && (
//                                 <>
//                                     <label className="mlm-label">What's your name?</label>
//                                     <input
//                                         className={`mlm-input ${touched && errors.name ? "mlm-error" : ""}`}
//                                         name="name"
//                                         placeholder="Enter your full name"
//                                         value={formData.name}
//                                         onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
//                                         onBlur={() => validateField("name", formData.name)}
//                                         autoFocus
//                                     />
//                                     {touched && errors.name && <div className="mlm-error-msg">{errors.name}</div>}
//                                 </>
//                             )}

//                             {step === 1 && (
//                                 <>
//                                     <label className="mlm-label">What's your email?</label>
//                                     <input
//                                         className={`mlm-input ${touched && errors.email ? "mlm-error" : ""}`}
//                                         name="email"
//                                         type="email"
//                                         placeholder="Enter your email address"
//                                         value={formData.email}
//                                         onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
//                                         onBlur={() => validateField("email", formData.email)}
//                                         autoFocus
//                                     />
//                                     {touched && errors.email && <div className="mlm-error-msg">{errors.email}</div>}
//                                 </>
//                             )}

//                             {step === 2 && (
//                                 <>
//                                     <label className="mlm-label">Phone</label>
//                                     <PhoneInput
//                                         international
//                                         defaultCountry="IN"
//                                         value={formData.phone}
//                                         onChange={(val) => setFormData((p) => ({ ...p, phone: val || "" }))}
//                                         onBlur={() => validateField("phone", formData.phone)}
//                                         className={`mlm-phone ${touched && errors.phone ? "mlm-error" : ""}`}
//                                         placeholder="Enter your phone number"
//                                     />
//                                     {touched && errors.phone && <div className="mlm-error-msg">{errors.phone}</div>}

//                                     <label className="mlm-label" style={{ marginTop: 10 }}>Message</label>
//                                     <textarea
//                                         className={`mlm-input mlm-textarea ${touched && errors.message ? "mlm-error" : ""}`}
//                                         name="message"
//                                         rows={4}
//                                         placeholder="Tell us about your specific needs..."
//                                         value={formData.message}
//                                         onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
//                                         onBlur={() => validateField("message", formData.message)}
//                                     />
//                                     {touched && errors.message && <div className="mlm-error-msg">{errors.message}</div>}
//                                 </>
//                             )}

//                             {/* Navigation */}
//                             <div className="mlm-actions">
//                                 {step > 0 ? (
//                                     <button type="button" className="mlm-btn ghost" onClick={prev}><HiOutlineArrowNarrowLeft /> Back</button>
//                                 ) : <div />}

//                                 {step < steps.length - 1 ? (
//                                     <button type="button" className="mlm-btn primary" onClick={next} disabled={!isStepValid()}>Next <HiOutlineArrowNarrowRight /></button>
//                                 ) : (
//                                     <button type="submit" className="mlm-btn primary" disabled={!isStepValid() || isSubmitting}>
//                                         {isSubmitting ? "Submitting..." : (<><span>Submit Interest</span> <FaCheck /></>)}
//                                     </button>
//                                 )}
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// import React, { useEffect, useState, useCallback } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
// // import { FaTimes, FaCheck } from "react-icons/fa";
// import StaciaContactLogo from "../assets/colorstaciacorp.svg";
// import "../styles/mobileLeadModal.css";
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

// export default function MobileLeadModal({ isOpen, onClose, item = {}, onSubmit }) {
//     const [step, setStep] = useState(0);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [touched, setTouched] = useState(false);
//     const [scrollYBeforeLock, setScrollYBeforeLock] = useState(0);
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//     });
//     const [errors, setErrors] = useState({});

//     const steps = [
//         { title: "What's your name?", field: "name", type: "text", placeholder: "Enter your full name", required: true },
//         { title: "What's your email?", field: "email", type: "email", placeholder: "Enter your email address", required: true },
//         { title: "Contact Details & Requirements", field: "contactAndRequirements", type: "combined", required: true },
//     ];

//     // ---- helpers ----
//     const validatePhoneNumber = (phoneNumber) => {
//         if (!phoneNumber) return false;
//         try {
//             const cleaned = phoneNumber.replace(/[^\d+]/g, "");
//             if (cleaned.startsWith("+")) {
//                 const withoutPlus = cleaned.slice(1);
//                 if (withoutPlus.startsWith("91")) {
//                     const national = withoutPlus.slice(2);
//                     return national.length === 10 && /^[6-9]\d{9}$/.test(national);
//                 } else {
//                     return withoutPlus.length >= 8 && withoutPlus.length <= 15;
//                 }
//             } else {
//                 return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
//             }
//         } catch {
//             return false;
//         }
//     };

//     const validateField = (field, value) => {
//         let err = "";
//         if (field === "name") {
//             if (!value?.trim()) err = "Name is required";
//             else if (value.trim().length < 2) err = "Name must be at least 2 characters";
//         } else if (field === "email") {
//             const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!value?.trim()) err = "Email is required";
//             else if (!re.test(value)) err = "Enter a valid email";
//         } else if (field === "phone") {
//             if (!value) err = "Phone is required";
//             else if (!validatePhoneNumber(value)) err = "Enter a valid phone number";
//         } else if (field === "message") {
//             if (!value || value.trim() === "") err = "Message is required";
//             else if (value.length > 500) err = "Message must be less than 500 characters";
//         }
//         setErrors((p) => ({ ...p, [field]: err }));
//         return !err;
//     };

//     // initialize/reset when open
//     useEffect(() => {
//         if (isOpen) {
//             setStep(0);
//             setFormData({
//                 name: "",
//                 email: "",
//                 phone: "",
//                 message: item?.title ? `I'm interested in: ${item.title}` : "",
//             });
//             setErrors({});
//             setTouched(false);
//             setIsSubmitting(false);

//             // lock scroll and save position
//             const y = window.scrollY || window.pageYOffset;
//             setScrollYBeforeLock(y);
//             document.body.style.position = "fixed";
//             document.body.style.top = `-${y}px`;
//             document.body.style.width = "100%";
//             document.body.style.overflow = "hidden";
//             document.body.classList.add("no-scroll");
//         } else {
//             // restore body scroll (in case parent closes programmatically)
//             document.body.classList.remove("no-scroll");
//             document.body.style.position = "";
//             document.body.style.top = "";
//             document.body.style.width = "";
//             document.body.style.overflow = "";
//             window.scrollTo(0, scrollYBeforeLock || 0);
//         }

//         return () => {
//             // cleanup if component unmounts
//             document.body.classList.remove("no-scroll");
//             document.body.style.position = "";
//             document.body.style.top = "";
//             document.body.style.width = "";
//             document.body.style.overflow = "";
//             window.scrollTo(0, scrollYBeforeLock || 0);
//         };
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [isOpen]);

//     // Escape key to close
//     const handleEsc = useCallback((e) => {
//         if (e.key === "Escape") onClose?.();
//     }, [onClose]);

//     useEffect(() => {
//         if (isOpen) {
//             document.addEventListener("keydown", handleEsc);
//             return () => document.removeEventListener("keydown", handleEsc);
//         }
//     }, [isOpen, handleEsc]);

//     // validation helpers for steps
//     const isStepValid = () => {
//         const current = steps[step];
//         if (!current.required) return true;
//         if (current.type === "combined") {
//             const phoneOk = validatePhoneNumber(formData.phone) && !errors.phone;
//             const msgOk = formData.message && formData.message.trim() !== "" && !errors.message;
//             return phoneOk && msgOk;
//         }
//         const value = formData[current.field];
//         return value && value.trim() !== "" && !errors[current.field];
//     };

//     const next = () => {
//         setTouched(true);
//         const current = steps[step];
//         if (current.type === "combined") {
//             const pv = validateField("phone", formData.phone);
//             const mv = validateField("message", formData.message);
//             if (!pv || !mv) return;
//         } else {
//             if (!validateField(current.field, formData[current.field])) return;
//         }
//         if (step < steps.length - 1) setStep((s) => s + 1);
//     };

//     const prev = () => { if (step > 0) setStep((s) => s - 1); };

//     const handleSubmit = async (e) => {
//         e?.preventDefault();
//         setTouched(true);

//         const nameOk = validateField("name", formData.name);
//         const emailOk = validateField("email", formData.email);
//         const phoneOk = validateField("phone", formData.phone);
//         const msgOk = validateField("message", formData.message);
//         if (!nameOk || !emailOk || !phoneOk || !msgOk) return;

//         setIsSubmitting(true);
//         try {
//             if (onSubmit) await onSubmit(formData); // parent handler
//             // show a tiny delay for UX then close
//             setTimeout(() => onClose?.(), 700);
//         } catch (err) {
//             console.error("MobileLeadModal submit error", err);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     // overlay click: only when clicking overlay (not panel children)
//     const onOverlayClick = (e) => {
//         if (e && e.currentTarget === e.target) onClose?.();
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="mlm-overlay" onClick={onOverlayClick} role="dialog" aria-modal="true" aria-label="Contact form">
//             <div className="mlm-panel" role="document" onClick={(e) => e.stopPropagation()}>
//                 <button className="mlm-close" onClick={onClose} aria-label="Close contact form"><FaTimes /></button>

//                 <div className="mlm-inner">
//                     {/* Left image */}
//                     <div className="mlm-left" aria-hidden="true">
//                         <img src={item?.image || StaciaContactLogo} alt={item?.title || "Stacia"} className="mlm-left-img" />
//                     </div>

//                     {/* Right form */}
//                     <div className="mlm-right">
//                         <div className="mlm-top-logo" aria-hidden="true">
//                             <img src={StaciaContactLogo} alt="Stacia Logo" className="mlm-top-logo-img" />
//                         </div>

//                         <h2 className="mlm-title">Express Your Interest</h2>
//                         <p className="mlm-sub">Let's get to know you better. We'll guide you through a few simple steps.</p>

//                         <div className="mlm-progress-wrap" aria-hidden="true">
//                             <div className="mlm-progress"><div className="mlm-progress-bar" style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
//                             <div className="mlm-step-text">Step {step + 1} of {steps.length}</div>
//                         </div>

//                         <form className="mlm-form" onSubmit={handleSubmit}>
//                             {step === 0 && (
//                                 <>
//                                     <label className="mlm-label">What's your name?</label>
//                                     <input
//                                         className={`mlm-input ${touched && errors.name ? "mlm-error" : ""}`}
//                                         name="name"
//                                         placeholder="Enter your full name"
//                                         value={formData.name}
//                                         onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
//                                         onBlur={() => validateField("name", formData.name)}
//                                         autoFocus
//                                         aria-invalid={!!errors.name}
//                                     />
//                                     {touched && errors.name && <div className="mlm-error-msg" role="alert">{errors.name}</div>}
//                                 </>
//                             )}

//                             {step === 1 && (
//                                 <>
//                                     <label className="mlm-label">What's your email?</label>
//                                     <input
//                                         className={`mlm-input ${touched && errors.email ? "mlm-error" : ""}`}
//                                         name="email"
//                                         type="email"
//                                         placeholder="Enter your email address"
//                                         value={formData.email}
//                                         onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
//                                         onBlur={() => validateField("email", formData.email)}
//                                         autoFocus
//                                         aria-invalid={!!errors.email}
//                                     />
//                                     {touched && errors.email && <div className="mlm-error-msg" role="alert">{errors.email}</div>}
//                                 </>
//                             )}

//                             {step === 2 && (
//                                 <>
//                                     <label className="mlm-label">Phone</label>
//                                     <PhoneInput
//                                         international
//                                         defaultCountry="IN"
//                                         value={formData.phone}
//                                         onChange={(val) => setFormData((p) => ({ ...p, phone: val || "" }))}
//                                         onBlur={() => validateField("phone", formData.phone)}
//                                         className={`mlm-phone ${touched && errors.phone ? "mlm-error" : ""}`}
//                                         placeholder="Enter your phone number"
//                                         aria-invalid={!!errors.phone}
//                                     />
//                                     {touched && errors.phone && <div className="mlm-error-msg" role="alert">{errors.phone}</div>}

//                                     <label className="mlm-label" style={{ marginTop: 10 }}>Message</label>
//                                     <textarea
//                                         className={`mlm-input mlm-textarea ${touched && errors.message ? "mlm-error" : ""}`}
//                                         name="message"
//                                         rows={4}
//                                         placeholder="Tell us about your specific needs..."
//                                         value={formData.message}
//                                         onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
//                                         onBlur={() => validateField("message", formData.message)}
//                                         aria-invalid={!!errors.message}
//                                     />
//                                     {touched && errors.message && <div className="mlm-error-msg" role="alert">{errors.message}</div>}
//                                 </>
//                             )}

//                             <div className="mlm-actions">
//                                 {step > 0 ? (
//                                     <button type="button" className="mlm-btn ghost" onClick={prev} aria-label="Back"><HiOutlineArrowNarrowLeft /> Back</button>
//                                 ) : <div style={{ width: 88 }} />}

//                                 {step < steps.length - 1 ? (
//                                     <button type="button" className="mlm-btn primary" onClick={next} disabled={!isStepValid()} aria-disabled={!isStepValid()}>Next <HiOutlineArrowNarrowRight /></button>
//                                 ) : (
//                                     <button type="submit" className="mlm-btn primary" disabled={!isStepValid() || isSubmitting} aria-disabled={!isStepValid() || isSubmitting}>
//                                         {isSubmitting ? "Submitting..." : (<><span>Submit Interest</span> <FaCheck /></>)}
//                                     </button>
//                                 )}
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




// import React, { useEffect, useState, useCallback } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
// import StaciaContactLogo from "../assets/colorstaciacorp.svg";
// import "../styles/mobileLeadModal.css";
// import {
//     FaTimes,
//     FaFacebookF,
//     FaLinkedinIn,
//     FaInstagram,
//     FaCheck,
//     FaPhone,
//     FaEnvelope,
// } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";

// export default function MobileLeadModal({ isOpen, onClose, item = {}, onSubmit }) {
//     const [step, setStep] = useState(0);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [touched, setTouched] = useState(false);
//     const [scrollYBeforeLock, setScrollYBeforeLock] = useState(0);
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//     });
//     const [errors, setErrors] = useState({});
//     const [formSubmitted, setFormSubmitted] = useState(false);

//     const steps = [
//         { title: "What's your name?", field: "name", type: "text", placeholder: "Enter your full name", required: true },
//         { title: "What's your email?", field: "email", type: "email", placeholder: "Enter your email address", required: true },
//         { title: "Contact Details & Requirements", field: "contactAndRequirements", type: "combined", required: true },
//     ];

//     // ---- helpers ----
//     const validatePhoneNumber = (phoneNumber) => {
//         if (!phoneNumber) return false;
//         try {
//             const cleaned = phoneNumber.replace(/[^\d+]/g, "");
//             if (cleaned.startsWith("+")) {
//                 const withoutPlus = cleaned.slice(1);
//                 if (withoutPlus.startsWith("91")) {
//                     const national = withoutPlus.slice(2);
//                     return national.length === 10 && /^[6-9]\d{9}$/.test(national);
//                 } else {
//                     return withoutPlus.length >= 8 && withoutPlus.length <= 15;
//                 }
//             } else {
//                 return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
//             }
//         } catch {
//             return false;
//         }
//     };

//     const getCleanPhoneNumber = (phoneNumber) => {
//         if (!phoneNumber) return "";
//         return phoneNumber.replace(/[^\d+]/g, "");
//     };

//     const validateField = (field, value) => {
//         let err = "";
//         if (field === "name") {
//             if (!value?.trim()) err = "Name is required";
//             else if (value.trim().length < 2) err = "Name must be at least 2 characters";
//         } else if (field === "email") {
//             const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!value?.trim()) err = "Email is required";
//             else if (!re.test(value)) err = "Enter a valid email";
//         } else if (field === "phone") {
//             if (!value) err = "Phone is required";
//             else if (!validatePhoneNumber(value)) {
//                 // give more helpful messages similar to desktop if you want; keeping simple here
//                 err = "Enter a valid phone number";
//             }
//         } else if (field === "message") {
//             if (!value || value.trim() === "") err = "Message is required";
//             else if (value.length > 500) err = "Message must be less than 500 characters";
//         }
//         setErrors((p) => ({ ...p, [field]: err }));
//         return !err;
//     };

//     // initialize/reset when open
//     useEffect(() => {
//         if (isOpen) {
//             setStep(0);
//             setFormData({
//                 name: "",
//                 email: "",
//                 phone: "",
//                 message: item?.title ? `I'm interested in: ${item.title}` : "",
//             });
//             setErrors({});
//             setTouched(false);
//             setIsSubmitting(false);
//             setFormSubmitted(false);

//             // lock scroll and save position
//             const y = window.scrollY || window.pageYOffset;
//             setScrollYBeforeLock(y);
//             document.body.style.position = "fixed";
//             document.body.style.top = `-${y}px`;
//             document.body.style.width = "100%";
//             document.body.style.overflow = "hidden";
//             document.body.classList.add("no-scroll");
//         } else {
//             // restore body scroll (in case parent closes programmatically)
//             document.body.classList.remove("no-scroll");
//             document.body.style.position = "";
//             document.body.style.top = "";
//             document.body.style.width = "";
//             document.body.style.overflow = "";
//             window.scrollTo(0, scrollYBeforeLock || 0);
//         }

//         return () => {
//             // cleanup if component unmounts
//             document.body.classList.remove("no-scroll");
//             document.body.style.position = "";
//             document.body.style.top = "";
//             document.body.style.width = "";
//             document.body.style.overflow = "";
//             window.scrollTo(0, scrollYBeforeLock || 0);
//         };
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [isOpen]);

//     // Escape key to close
//     const handleEsc = useCallback((e) => {
//         if (e.key === "Escape") onClose?.();
//     }, [onClose]);

//     useEffect(() => {
//         if (isOpen) {
//             document.addEventListener("keydown", handleEsc);
//             return () => document.removeEventListener("keydown", handleEsc);
//         }
//     }, [isOpen, handleEsc]);

//     // validation helpers for steps
//     const isStepValid = () => {
//         const current = steps[step];
//         if (!current.required) return true;
//         if (current.type === "combined") {
//             const phoneOk = validatePhoneNumber(formData.phone) && !errors.phone;
//             const msgOk = formData.message && formData.message.trim() !== "" && !errors.message;
//             return phoneOk && msgOk;
//         }
//         const value = formData[current.field];
//         return value && value.trim() !== "" && !errors[current.field];
//     };

//     const next = () => {
//         setTouched(true);
//         const current = steps[step];
//         if (current.type === "combined") {
//             const pv = validateField("phone", formData.phone);
//             const mv = validateField("message", formData.message);
//             if (!pv || !mv) return;
//         } else {
//             if (!validateField(current.field, formData[current.field])) return;
//         }
//         if (step < steps.length - 1) setStep((s) => s + 1);
//     };

//     const prev = () => { if (step > 0) setStep((s) => s - 1); };

//     // overlay click: only when clicking overlay (not panel children)
//     const onOverlayClick = (e) => {
//         if (e && e.currentTarget === e.target) onClose?.();
//     };

//     const handleSubmit = async (e) => {
//         e?.preventDefault();
//         setTouched(true);

//         const nameOk = validateField("name", formData.name);
//         const emailOk = validateField("email", formData.email);
//         const phoneOk = validateField("phone", formData.phone);
//         const msgOk = validateField("message", formData.message);
//         if (!nameOk || !emailOk || !phoneOk || !msgOk) return;

//         setIsSubmitting(true);

//         // Prepare FormData for web3forms
//         const submissionData = new FormData();
//         submissionData.append("access_key", "e94ad995-f110-472a-81f9-66ff8ca65e98");
//         submissionData.append("name", formData.name);
//         submissionData.append("email", formData.email);
//         submissionData.append("phone", getCleanPhoneNumber(formData.phone));
//         submissionData.append("message", formData.message);
//         submissionData.append("subject", `Interest in: ${item?.title || "Product"}`);
//         submissionData.append("from_name", "Stacia Corp Website");

//         try {
//             const res = await fetch("https://api.web3forms.com/submit", {
//                 method: "POST",
//                 body: submissionData,
//             });
//             const data = await res.json();

//             if (data?.success) {
//                 // call parent handler if provided
//                 try { onSubmit && (await onSubmit(formData)); } catch (err) { console.warn("parent onSubmit threw", err); }

//                 // show thank-you card
//                 setFormSubmitted(true);
//             } else {
//                 console.error("Submission failed:", data);
//                 // map backend message to user error if you'd like
//             }
//         } catch (error) {
//             console.error("Submission error:", error);
//         } finally {
//             setIsSubmitting(false);
//             // close after short delay to allow user to see thank you (if shown)
//             setTimeout(() => {
//                 onClose?.();
//             }, formSubmitted ? 700 : 700);
//         }
//     };

//     // THANK YOU UI (simple) - shown inside the modal when formSubmitted === true
//     const ThankYouPanel = () => (
//         <div className="mlm-thankyou">
//             <h3>Thank You!</h3>
//             <p>Your interest has been successfully submitted. Our team will get back to you within 24 hours.</p>

//             <div className="mlm-contact-options">
//                 <div className="mlm-contact">
//                     <FaPhone /> <div><div className="mlm-contact-label">Call us now</div><div className="mlm-contact-value">+91 9363034150</div></div>
//                 </div>
//                 <div className="mlm-contact">
//                     <FaEnvelope /> <div><div className="mlm-contact-label">Email us</div><div className="mlm-contact-value">contactus@staciacorp.com</div></div>
//                 </div>
//             </div>

//             <div className="mlm-thankyou-socials">
//                 <a href="https://www.facebook.com/staciacorp/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
//                 <a href="https://www.linkedin.com/company/staciacorp" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
//                 <a href="https://x.com/StaciaCorp" target="_blank" rel="noreferrer"><BsTwitterX /></a>
//                 <a href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA==" target="_blank" rel="noreferrer"><FaInstagram /></a>
//             </div>
//         </div>
//     );

//     if (!isOpen) return null;

//     return (
//         <div className="mlm-overlay" onClick={onOverlayClick} role="dialog" aria-modal="true" aria-label="Contact form">
//             <div className="mlm-panel" role="document" onClick={(e) => e.stopPropagation()}>
//                 <button className="mlm-close" onClick={onClose} aria-label="Close contact form"><FaTimes /></button>

//                 <div className="mlm-inner">
//                     {/* Left image */}
//                     <div className="mlm-left" aria-hidden="true">
//                         <img src={item?.image || StaciaContactLogo} alt={item?.title || "Stacia"} className="mlm-left-img" />
//                     </div>

//                     {/* Right form */}
//                     <div className="mlm-right">
//                         <div className="mlm-top-logo" aria-hidden="true">
//                             <img src={StaciaContactLogo} alt="Stacia Logo" className="mlm-top-logo-img" />
//                         </div>

//                         {!formSubmitted ? (
//                             <>
//                                 <h2 className="mlm-title">Express Your Interest</h2>
//                                 <p className="mlm-sub">Let's get to know you better. We'll guide you through a few simple steps.</p>

//                                 <div className="mlm-progress-wrap" aria-hidden="true">
//                                     <div className="mlm-progress"><div className="mlm-progress-bar" style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
//                                     <div className="mlm-step-text">Step {step + 1} of {steps.length}</div>
//                                 </div>

//                                 <form className="mlm-form" onSubmit={handleSubmit}>
//                                     {step === 0 && (
//                                         <>
//                                             <label className="mlm-label">What's your name?</label>
//                                             <input
//                                                 className={`mlm-input ${touched && errors.name ? "mlm-error" : ""}`}
//                                                 name="name"
//                                                 placeholder="Enter your full name"
//                                                 value={formData.name}
//                                                 onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
//                                                 onBlur={() => validateField("name", formData.name)}
//                                                 autoFocus
//                                                 aria-invalid={!!errors.name}
//                                             />
//                                             {touched && errors.name && <div className="mlm-error-msg" role="alert">{errors.name}</div>}
//                                         </>
//                                     )}

//                                     {step === 1 && (
//                                         <>
//                                             <label className="mlm-label">What's your email?</label>
//                                             <input
//                                                 className={`mlm-input ${touched && errors.email ? "mlm-error" : ""}`}
//                                                 name="email"
//                                                 type="email"
//                                                 placeholder="Enter your email address"
//                                                 value={formData.email}
//                                                 onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
//                                                 onBlur={() => validateField("email", formData.email)}
//                                                 autoFocus
//                                                 aria-invalid={!!errors.email}
//                                             />
//                                             {touched && errors.email && <div className="mlm-error-msg" role="alert">{errors.email}</div>}
//                                         </>
//                                     )}

//                                     {step === 2 && (
//                                         <>
//                                             <label className="mlm-label">Phone</label>
//                                             <PhoneInput
//                                                 international
//                                                 defaultCountry="IN"
//                                                 value={formData.phone}
//                                                 onChange={(val) => setFormData((p) => ({ ...p, phone: val || "" }))}
//                                                 onBlur={() => validateField("phone", formData.phone)}
//                                                 className={`mlm-phone ${touched && errors.phone ? "mlm-error" : ""}`}
//                                                 placeholder="Enter your phone number"
//                                                 aria-invalid={!!errors.phone}
//                                             />
//                                             {touched && errors.phone && <div className="mlm-error-msg" role="alert">{errors.phone}</div>}

//                                             <label className="mlm-label" style={{ marginTop: 10 }}>Message</label>
//                                             <textarea
//                                                 className={`mlm-input mlm-textarea ${touched && errors.message ? "mlm-error" : ""}`}
//                                                 name="message"
//                                                 rows={4}
//                                                 placeholder="Tell us about your specific needs..."
//                                                 value={formData.message}
//                                                 onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
//                                                 onBlur={() => validateField("message", formData.message)}
//                                                 aria-invalid={!!errors.message}
//                                             />
//                                             {touched && errors.message && <div className="mlm-error-msg" role="alert">{errors.message}</div>}
//                                         </>
//                                     )}

//                                     <div className="mlm-actions">
//                                         {step > 0 ? (
//                                             <button type="button" className="mlm-btn ghost" onClick={prev} aria-label="Back"><HiOutlineArrowNarrowLeft /> Back</button>
//                                         ) : <div style={{ width: 88 }} />}

//                                         {step < steps.length - 1 ? (
//                                             <button type="button" className="mlm-btn primary" onClick={next} disabled={!isStepValid()} aria-disabled={!isStepValid()}>Next <HiOutlineArrowNarrowRight /></button>
//                                         ) : (
//                                             <button type="submit" className="mlm-btn primary" disabled={!isStepValid() || isSubmitting} aria-disabled={!isStepValid() || isSubmitting}>
//                                                 {isSubmitting ? "Submitting..." : (<><span>Submit Interest</span> <FaCheck /></>)}
//                                             </button>
//                                         )}
//                                     </div>
//                                 </form>
//                             </>
//                         ) : (
//                             <ThankYouPanel />
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaTimes,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaCheck,
    FaPhone,
    FaEnvelope,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import styles from "../styles/LeadModalThree.module.css";
import StaciaContactLogo from "../assets/colorstaciacorp.svg";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import successLottie from "../assets/success.lottie";

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
    const scrollYRef = useRef(0);

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

    // phone validation helpers
    const validatePhoneNumber = (phoneNumber) => {
        if (!phoneNumber) return false;
        try {
            const cleaned = phoneNumber.replace(/[^\d+]/g, "");
            if (cleaned.startsWith("+")) {
                const withoutPlus = cleaned.slice(1);
                if (withoutPlus.startsWith("91")) {
                    const nationalNumber = withoutPlus.slice(2);
                    return (
                        nationalNumber.length === 10 && /^[6-9]\d{9}$/.test(nationalNumber)
                    );
                } else {
                    return withoutPlus.length >= 8 && withoutPlus.length <= 15;
                }
            } else {
                return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
            }
        } catch {
            return false;
        }
    };

    const getCleanPhoneNumber = (phoneNumber) => {
        if (!phoneNumber) return "";
        return phoneNumber.replace(/[^\d+]/g, "");
    };

    // ESC key closes
    const handleEscKey = useCallback(
        (event) => {
            if (event.key === "Escape" || event.keyCode === 27) {
                onClose?.();
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

    // lock body scroll on open (desktop behavior preserved)
    useEffect(() => {
        if (isOpen) {
            const isDesktop = window.innerWidth > 1024;
            const scrollY = window.scrollY || window.pageYOffset;
            scrollYRef.current = scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";
            document.body.classList.add("no-scroll");
            return () => {
                document.body.classList.remove("no-scroll");
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                document.body.style.overflow = "";
                window.scrollTo(0, scrollYRef.current || 0);
            };
        }
        // cleanup on unmount too
        return () => {
            document.body.classList.remove("no-scroll");
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            document.body.style.overflow = "";
            window.scrollTo(0, scrollYRef.current || 0);
        };
    }, [isOpen]);

    // reset when opening with a new item
    useEffect(() => {
        if (isOpen && item) {
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: `I'm interested in: ${item.title || ""}`,
            });
            setCurrentStep(0);
            setFormSubmitted(false);
            setErrors({});
            setIsSubmitting(false);
            setIsCurrentFieldTouched(false);
        }
    }, [isOpen, item]);

    // validate current field(s) whenever relevant values change
    useEffect(() => {
        if (!isOpen) return;
        const currentField = steps[currentStep].field;
        if (currentField === "contactAndRequirements") {
            validateField("phone", formData.phone);
            validateField("message", formData.message);
        } else {
            validateField(currentField, formData[currentField]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentStep,
        formData.name,
        formData.email,
        formData.phone,
        formData.message,
        isOpen,
    ]);

    useEffect(() => {
        setIsCurrentFieldTouched(false);
    }, [currentStep]);

    const validateField = (field, value) => {
        let isValid = true;
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[field];

            switch (field) {
                case "name":
                    if (!value?.trim()) {
                        newErrors.name = "Name is required";
                        isValid = false;
                    } else if (value.trim().length < 2) {
                        newErrors.name = "Name must be at least 2 characters";
                        isValid = false;
                    }
                    break;

                case "email":
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!value?.trim()) {
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
                        const cleaned = value.replace(/[^\d+]/g, "");
                        if (cleaned.startsWith("+")) {
                            const withoutPlus = cleaned.slice(1);
                            if (withoutPlus.startsWith("91")) {
                                const nationalNumber = withoutPlus.slice(2);
                                if (nationalNumber.length < 10) {
                                    newErrors.phone = "Indian number should have 10 digits after +91";
                                } else if (nationalNumber.length > 10) {
                                    newErrors.phone = "Indian number should have exactly 10 digits after +91";
                                } else if (!/^[6-9]/.test(nationalNumber)) {
                                    newErrors.phone = "Indian mobile number should start with 6, 7, 8, or 9";
                                } else {
                                    newErrors.phone = "Please enter a valid Indian phone number";
                                }
                            } else {
                                if (withoutPlus.length < 8) newErrors.phone = "International phone number is too short";
                                else if (withoutPlus.length > 15) newErrors.phone = "International phone number is too long";
                                else newErrors.phone = "Please enter a valid international phone number";
                            }
                        } else {
                            if (cleaned.length < 10) newErrors.phone = "Phone number should have 10 digits";
                            else if (cleaned.length > 10) newErrors.phone = "Phone number should have exactly 10 digits";
                            else if (!/^[6-9]/.test(cleaned)) newErrors.phone = "Indian mobile number should start with 6, 7, 8, or 9";
                            else newErrors.phone = "Please enter a valid phone number";
                        }
                        isValid = false;
                    }
                    break;

                case "message":
                    if (
                        steps[currentStep].field === "contactAndRequirements" &&
                        (!value || value.trim() === "")
                    ) {
                        newErrors.message = "Message is required";
                        isValid = false;
                    } else if (value && value.length > 500) {
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((p) => ({ ...p, [name]: value }));
    };

    const handlePhoneChange = (value) => {
        if (value && value.length > 20) return;
        setFormData((p) => ({ ...p, phone: value || "" }));
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
                if (currentStep < steps.length - 1) setCurrentStep((s) => s + 1);
            }
        } else {
            const currentValue = formData[currentField];
            if (validateField(currentField, currentValue)) {
                if (currentStep < steps.length - 1) setCurrentStep((s) => s + 1);
            }
        }
    };

    const prevStep = () => {
        if (currentStep > 0) setCurrentStep((s) => s - 1);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            if (currentStep < steps.length - 1 && isStepValid()) nextStep();
        }
    };

    // submit flow: same UX as mobile - show thank you, call parent, auto-close after a short delay
    const handleSubmitClick = async () => {
        if (currentStep !== steps.length - 1) return;

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

        // Final phone validation
        if (!validatePhoneNumber(formData.phone)) {
            setErrors((prev) => ({ ...prev, phone: "Please enter a valid phone number" }));
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
        submissionData.append("subject", `Interest in: ${item?.title || "Product"}`);
        submissionData.append("from_name", "Stacia Corp Website");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: submissionData,
            });
            const data = await res.json();

            if (data?.success) {
                try {
                    // notify parent
                    onSubmit && onSubmit(formData);
                } catch (err) {
                    console.warn("parent onSubmit threw", err);
                }

                // show thank you
                setFormSubmitted(true);

                // remain briefly then auto-close (700ms) — consistent with mobile
                setTimeout(() => {
                    onClose && onClose();
                }, 5000);
            } else {
                console.error("Submission failed:", data);
            }
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const getProgressPercentage = () => ((currentStep + 1) / steps.length) * 100;
    const isLastStep = currentStep === steps.length - 1;
    const isErrorVisible = (fieldName) => errors[fieldName] && isCurrentFieldTouched;

    if (!isOpen || !item) return null;

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
                    {/* Left Side */}
                    <div className={styles.leftSide}>
                        <div className={styles.brandSection}>
                            <div className={styles.itemImageSection}>
                                <div className={styles.itemImageContainer}>
                                    <img src={item.image} alt={item.title} className={styles.itemImage} />
                                </div>
                            </div>

                            {item.title !== "" && (
                                <div className={styles.itemInfo}>
                                    <h4>{item.title}</h4>
                                    <p className={styles.itemDescription}>{item.description}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className={styles.rightSide}>
                        <div className={styles.formSection}>
                            {!formSubmitted ? (
                                <>
                                    <div className={styles.logoContainer}>
                                        <img src={StaciaContactLogo} alt="Stacia Logo" className={styles.companyLogo} />
                                    </div>
                                    <div className={styles.formIntro}>
                                        <h3>Express Your Interest</h3>
                                        <p className={styles.modalDescription}>Let's get to know you better. We'll guide you through a few simple steps.</p>
                                    </div>

                                    <div className={styles.progressSection}>
                                        <div className={styles.progressContainer}>
                                            <div className={styles.progressFill} style={{ width: `${getProgressPercentage()}%` }} />
                                        </div>
                                        <div className={styles.progressText}>Step {currentStep + 1} of {steps.length}</div>
                                    </div>

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
                                                {currentStep > 0 && (
                                                    <button type="button" className={styles.prevArrow} onClick={prevStep}>
                                                        <HiOutlineArrowNarrowLeft />
                                                    </button>
                                                )}

                                                <div className={styles.stepHeader}>
                                                    <h4 className={styles.stepTitle}>{steps[currentStep].title}</h4>
                                                </div>

                                                <div className={`${styles.fieldContainer} ${isLastStep ? styles.lastStep : ""}`}>
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
                                                                            className={`${styles.phoneInputField} ${isErrorVisible("phone") ? styles.error : ""}`}
                                                                        />
                                                                    </div>
                                                                    {isErrorVisible("phone") && <span className={styles.errorMessage}>{errors.phone}</span>}
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
                                                                        className={`${styles.singleFieldInput} ${styles.textarea} ${isErrorVisible("message") ? styles.error : ""}`}
                                                                    />
                                                                    {isErrorVisible("message") && <span className={styles.errorMessage}>{errors.message}</span>}
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
                                                                    className={`${styles.singleFieldInput} ${styles.elegant} ${isErrorVisible(steps[currentStep].field) ? styles.error : ""}`}
                                                                    autoFocus
                                                                />
                                                                {isErrorVisible(steps[currentStep].field) && <span className={styles.errorMessage}>{errors[steps[currentStep].field]}</span>}
                                                            </>
                                                        )}
                                                    </div>

                                                    {!isLastStep && isStepValid() && (
                                                        <div className={styles.nextArrowWrapper}>
                                                            <button type="button" className={styles.nextArrow} onClick={nextStep} disabled={!isStepValid()}>
                                                                <HiOutlineArrowNarrowRight />
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>

                                                {isLastStep && (
                                                    <div className={styles.submitWrapper}>
                                                        <button
                                                            type="button"
                                                            className={styles.submitButton}
                                                            onClick={handleSubmitClick}
                                                            disabled={!isStepValid() || isSubmitting}
                                                            style={{
                                                                backgroundColor: isStepValid() ? "#4CAF50" : undefined,
                                                                color: isStepValid() ? "white" : undefined,
                                                            }}
                                                        >
                                                            {isSubmitting ? <div className={styles.submitSpinner} /> : (<><span>Submit Interest</span><FaCheck /></>)}
                                                        </button>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    <div className={styles.socialSection}>
                                        <h5>Connect With Us</h5>
                                        <div className={styles.contactSocials}>
                                            <a href="https://www.facebook.com/staciacorp/" target="_blank" rel="noreferrer"><div className={styles.socialIconContainer}><FaFacebookF className={styles.socialIcon} /></div></a>
                                            <a href="https://www.linkedin.com/company/staciacorp" target="_blank" rel="noreferrer"><div className={styles.socialIconContainer}><FaLinkedinIn className={styles.socialIcon} /></div></a>
                                            <a href="https://x.com/StaciaCorp" target="_blank" rel="noreferrer"><div className={styles.socialIconContainer}><BsTwitterX className={styles.socialIcon} /></div></a>
                                            <a href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA==" target="_blank" rel="noreferrer"><div className={styles.socialIconContainer}><FaInstagram className={styles.socialIcon} /></div></a>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                /* Thank You Card */
                                <div className={styles.thankYouCard}>
                                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className={styles.thankYouContent}>
                                        <div className={styles.successIcon}>
                                            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                                                <div className="lottie-wrapper">
                                                    <DotLottieReact src={successLottie} autoplay />
                                                </div>
                                            </motion.div>
                                        </div>

                                        <h3 className={styles.thankYouTitle}>Thank You!</h3>
                                        <p className={styles.thankYouMessage}>Your interest has been successfully submitted. Our team will get back to you within 24 hours.</p>

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
                                                    <p className={styles.contactValue}>contactus@staciacorp.com</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.thankYouSocialSection}>
                                            <div className={styles.thankYouDivider}><span className={styles.thankYouDividerText}>or</span></div>
                                            <div className={styles.thankYouSocialIcons}>
                                                <a href="https://www.facebook.com/staciacorp/" target="_blank" rel="noreferrer" className={styles.thankYouSocialLink}><FaFacebookF className={styles.thankYouSocialIcon} /></a>
                                                <a href="https://www.linkedin.com/company/staciacorp" target="_blank" rel="noreferrer" className={styles.thankYouSocialLink}><FaLinkedinIn className={styles.thankYouSocialIcon} /></a>
                                                <a href="https://x.com/StaciaCorp" target="_blank" rel="noreferrer" className={styles.thankYouSocialLink}><BsTwitterX className={styles.thankYouSocialIcon} /></a>
                                                <a href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA==" target="_blank" rel="noreferrer" className={styles.thankYouSocialLink}><FaInstagram className={styles.thankYouSocialIcon} /></a>
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

