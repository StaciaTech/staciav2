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


import React, { useEffect, useState, useCallback } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
// import { FaTimes, FaCheck } from "react-icons/fa";
import StaciaContactLogo from "../assets/colorstaciacorp.svg";
import "../styles/mobileLeadModal.css";
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

export default function MobileLeadModal({ isOpen, onClose, item = {}, onSubmit }) {
    const [step, setStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [touched, setTouched] = useState(false);
    const [scrollYBeforeLock, setScrollYBeforeLock] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const steps = [
        { title: "What's your name?", field: "name", type: "text", placeholder: "Enter your full name", required: true },
        { title: "What's your email?", field: "email", type: "email", placeholder: "Enter your email address", required: true },
        { title: "Contact Details & Requirements", field: "contactAndRequirements", type: "combined", required: true },
    ];

    // ---- helpers ----
    const validatePhoneNumber = (phoneNumber) => {
        if (!phoneNumber) return false;
        try {
            const cleaned = phoneNumber.replace(/[^\d+]/g, "");
            if (cleaned.startsWith("+")) {
                const withoutPlus = cleaned.slice(1);
                if (withoutPlus.startsWith("91")) {
                    const national = withoutPlus.slice(2);
                    return national.length === 10 && /^[6-9]\d{9}$/.test(national);
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

    const validateField = (field, value) => {
        let err = "";
        if (field === "name") {
            if (!value?.trim()) err = "Name is required";
            else if (value.trim().length < 2) err = "Name must be at least 2 characters";
        } else if (field === "email") {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value?.trim()) err = "Email is required";
            else if (!re.test(value)) err = "Enter a valid email";
        } else if (field === "phone") {
            if (!value) err = "Phone is required";
            else if (!validatePhoneNumber(value)) err = "Enter a valid phone number";
        } else if (field === "message") {
            if (!value || value.trim() === "") err = "Message is required";
            else if (value.length > 500) err = "Message must be less than 500 characters";
        }
        setErrors((p) => ({ ...p, [field]: err }));
        return !err;
    };

    // initialize/reset when open
    useEffect(() => {
        if (isOpen) {
            setStep(0);
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: item?.title ? `I'm interested in: ${item.title}` : "",
            });
            setErrors({});
            setTouched(false);
            setIsSubmitting(false);

            // lock scroll and save position
            const y = window.scrollY || window.pageYOffset;
            setScrollYBeforeLock(y);
            document.body.style.position = "fixed";
            document.body.style.top = `-${y}px`;
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";
            document.body.classList.add("no-scroll");
        } else {
            // restore body scroll (in case parent closes programmatically)
            document.body.classList.remove("no-scroll");
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            document.body.style.overflow = "";
            window.scrollTo(0, scrollYBeforeLock || 0);
        }

        return () => {
            // cleanup if component unmounts
            document.body.classList.remove("no-scroll");
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            document.body.style.overflow = "";
            window.scrollTo(0, scrollYBeforeLock || 0);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    // Escape key to close
    const handleEsc = useCallback((e) => {
        if (e.key === "Escape") onClose?.();
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            return () => document.removeEventListener("keydown", handleEsc);
        }
    }, [isOpen, handleEsc]);

    // validation helpers for steps
    const isStepValid = () => {
        const current = steps[step];
        if (!current.required) return true;
        if (current.type === "combined") {
            const phoneOk = validatePhoneNumber(formData.phone) && !errors.phone;
            const msgOk = formData.message && formData.message.trim() !== "" && !errors.message;
            return phoneOk && msgOk;
        }
        const value = formData[current.field];
        return value && value.trim() !== "" && !errors[current.field];
    };

    const next = () => {
        setTouched(true);
        const current = steps[step];
        if (current.type === "combined") {
            const pv = validateField("phone", formData.phone);
            const mv = validateField("message", formData.message);
            if (!pv || !mv) return;
        } else {
            if (!validateField(current.field, formData[current.field])) return;
        }
        if (step < steps.length - 1) setStep((s) => s + 1);
    };

    const prev = () => { if (step > 0) setStep((s) => s - 1); };

    const handleSubmit = async (e) => {
        e?.preventDefault();
        setTouched(true);

        const nameOk = validateField("name", formData.name);
        const emailOk = validateField("email", formData.email);
        const phoneOk = validateField("phone", formData.phone);
        const msgOk = validateField("message", formData.message);
        if (!nameOk || !emailOk || !phoneOk || !msgOk) return;

        setIsSubmitting(true);
        try {
            if (onSubmit) await onSubmit(formData); // parent handler
            // show a tiny delay for UX then close
            setTimeout(() => onClose?.(), 700);
        } catch (err) {
            console.error("MobileLeadModal submit error", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    // overlay click: only when clicking overlay (not panel children)
    const onOverlayClick = (e) => {
        if (e && e.currentTarget === e.target) onClose?.();
    };

    if (!isOpen) return null;

    return (
        <div className="mlm-overlay" onClick={onOverlayClick} role="dialog" aria-modal="true" aria-label="Contact form">
            <div className="mlm-panel" role="document" onClick={(e) => e.stopPropagation()}>
                <button className="mlm-close" onClick={onClose} aria-label="Close contact form"><FaTimes /></button>

                <div className="mlm-inner">
                    {/* Left image */}
                    <div className="mlm-left" aria-hidden="true">
                        <img src={item?.image || StaciaContactLogo} alt={item?.title || "Stacia"} className="mlm-left-img" />
                    </div>

                    {/* Right form */}
                    <div className="mlm-right">
                        <div className="mlm-top-logo" aria-hidden="true">
                            <img src={StaciaContactLogo} alt="Stacia Logo" className="mlm-top-logo-img" />
                        </div>

                        <h2 className="mlm-title">Express Your Interest</h2>
                        <p className="mlm-sub">Let's get to know you better. We'll guide you through a few simple steps.</p>

                        <div className="mlm-progress-wrap" aria-hidden="true">
                            <div className="mlm-progress"><div className="mlm-progress-bar" style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
                            <div className="mlm-step-text">Step {step + 1} of {steps.length}</div>
                        </div>

                        <form className="mlm-form" onSubmit={handleSubmit}>
                            {step === 0 && (
                                <>
                                    <label className="mlm-label">What's your name?</label>
                                    <input
                                        className={`mlm-input ${touched && errors.name ? "mlm-error" : ""}`}
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                                        onBlur={() => validateField("name", formData.name)}
                                        autoFocus
                                        aria-invalid={!!errors.name}
                                    />
                                    {touched && errors.name && <div className="mlm-error-msg" role="alert">{errors.name}</div>}
                                </>
                            )}

                            {step === 1 && (
                                <>
                                    <label className="mlm-label">What's your email?</label>
                                    <input
                                        className={`mlm-input ${touched && errors.email ? "mlm-error" : ""}`}
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                                        onBlur={() => validateField("email", formData.email)}
                                        autoFocus
                                        aria-invalid={!!errors.email}
                                    />
                                    {touched && errors.email && <div className="mlm-error-msg" role="alert">{errors.email}</div>}
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <label className="mlm-label">Phone</label>
                                    <PhoneInput
                                        international
                                        defaultCountry="IN"
                                        value={formData.phone}
                                        onChange={(val) => setFormData((p) => ({ ...p, phone: val || "" }))}
                                        onBlur={() => validateField("phone", formData.phone)}
                                        className={`mlm-phone ${touched && errors.phone ? "mlm-error" : ""}`}
                                        placeholder="Enter your phone number"
                                        aria-invalid={!!errors.phone}
                                    />
                                    {touched && errors.phone && <div className="mlm-error-msg" role="alert">{errors.phone}</div>}

                                    <label className="mlm-label" style={{ marginTop: 10 }}>Message</label>
                                    <textarea
                                        className={`mlm-input mlm-textarea ${touched && errors.message ? "mlm-error" : ""}`}
                                        name="message"
                                        rows={4}
                                        placeholder="Tell us about your specific needs..."
                                        value={formData.message}
                                        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                                        onBlur={() => validateField("message", formData.message)}
                                        aria-invalid={!!errors.message}
                                    />
                                    {touched && errors.message && <div className="mlm-error-msg" role="alert">{errors.message}</div>}
                                </>
                            )}

                            <div className="mlm-actions">
                                {step > 0 ? (
                                    <button type="button" className="mlm-btn ghost" onClick={prev} aria-label="Back"><HiOutlineArrowNarrowLeft /> Back</button>
                                ) : <div style={{ width: 88 }} />}

                                {step < steps.length - 1 ? (
                                    <button type="button" className="mlm-btn primary" onClick={next} disabled={!isStepValid()} aria-disabled={!isStepValid()}>Next <HiOutlineArrowNarrowRight /></button>
                                ) : (
                                    <button type="submit" className="mlm-btn primary" disabled={!isStepValid() || isSubmitting} aria-disabled={!isStepValid() || isSubmitting}>
                                        {isSubmitting ? "Submitting..." : (<><span>Submit Interest</span> <FaCheck /></>)}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
