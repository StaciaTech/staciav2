// import React, { useState, useEffect , useTransition } from 'react';
// import { motion } from 'framer-motion';
// import { lazy, Suspense, startTransition } from 'react';
// import '../styles/ClientVisit.css';

// // Import inquiry modal
// import ClientInquiryModal from '../components/Client/ClientInquiryModal';

// // Import department data
// import { departments, roadmapStepsData } from '../Data/departmentData.js';

// // Lazy load components
// const NavBar = lazy(() => import('../components/NavBar'));
// const Footer = lazy(() => import('../components/Footer'));
// const MobileFooter = lazy(() => import('../components/MobileFooter'));
// const SideBar = lazy(() => import('../components/SideBar'));
// const LoadingStar = lazy(() => import('../components/LoadingStar'));



// const ClientVisit = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [currentStep, setCurrentStep] = useState(0);
//     const [selectedDepartment, setSelectedDepartment] = useState('web-development');

//     // Get roadmap steps based on selected department
//     const roadmapSteps = roadmapStepsData[selectedDepartment] || roadmapStepsData['web-development'];

//     // Intersection Observer for animations
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                 }
//             },
//             { threshold: 0.1 }
//         );

//         const elements = document.querySelectorAll('.animate-on-scroll');
//         elements.forEach(element => observer.observe(element));

//         return () => {
//             elements.forEach(element => observer.unobserve(element));
//         };
//     }, []);

//     // Auto-advance roadmap animation
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentStep(prev => (prev + 1) % roadmapSteps.length);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     const handleInquiryClick = () => {
//         setIsModalOpen(true);
//     };

//     const handleModalClose = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <Suspense fallback={<LoadingStar />}>
//             <div className="client-visit-page">
//                 {/* Navigation */}
//                 <div className="nav_style">
//                     <NavBar />
//                     <SideBar />
//                 </div>

//                 {/* Welcome Section */}
//                 <section className="welcome-section">
//                     <div className="welcome-container">
//                         <motion.div
//                             className="welcome-content"
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8 }}
//                         >
//                             <div className="welcome-text">
//                                 <motion.h1
//                                     className="welcome-title"
//                                     initial={{ opacity: 0, y: 30 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 0.2 }}
//                                 >
//                                     Welcome to Stacia Corp
//                                 </motion.h1>
//                                 <motion.p
//                                     className="welcome-subtitle"
//                                     initial={{ opacity: 0, y: 30 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 0.4 }}
//                                 >
//                                     Your trusted partner in digital transformation and innovation
//                                 </motion.p>
//                                 <motion.p
//                                     className="welcome-description"
//                                     initial={{ opacity: 0, y: 30 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 0.6 }}
//                                 >
//                                     We're excited to work with you and help bring your vision to life.
//                                     Our team of experts is ready to provide you with cutting-edge solutions
//                                     tailored to your specific needs.
//                                 </motion.p>
//                             </div>

//                             <motion.div
//                                 className="welcome-actions"
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: 0.8 }}
//                             >
//                                 <motion.button
//                                     className="welcome-btn primary"
//                                     onClick={handleInquiryClick}
//                                     whileHover={{ scale: 1.05, y: -2 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     <span className="btn-icon">💬</span>
//                                     <span className="btn-text">Start Your Project</span>
//                                     <span className="btn-arrow">→</span>
//                                 </motion.button>

//                                 <motion.button
//                                     className="welcome-btn secondary"
//                                     onClick={handleInquiryClick}
//                                     whileHover={{ scale: 1.05, y: -2 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     <span className="btn-icon">📞</span>
//                                     <span className="btn-text">Schedule Call</span>
//                                     <span className="btn-arrow">→</span>
//                                 </motion.button>
//                             </motion.div>
//                         </motion.div>

//                         <motion.div
//                             className="welcome-visual"
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.8, delay: 0.4 }}
//                         >
//                             <div className="visual-container">
//                                 <div className="floating-cards">
//                                     <div className="floating-card card-1">
//                                         <span className="card-icon">🚀</span>
//                                         <span className="card-text">Innovation</span>
//                                     </div>
//                                     <div className="floating-card card-2">
//                                         <span className="card-icon">⚡</span>
//                                         <span className="card-text">Speed</span>
//                                     </div>
//                                     <div className="floating-card card-3">
//                                         <span className="card-icon">🎯</span>
//                                         <span className="card-text">Precision</span>
//                                     </div>
//                                     <div className="floating-card card-4">
//                                         <span className="card-icon">🤝</span>
//                                         <span className="card-text">Partnership</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </section>

//                 {/* Roadmap Section */}
//                 <section className="roadmap-section">
//                     <div className="roadmap-container">
//                         <motion.div
//                             className="roadmap-header"
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                         >
//                             <h2 className="roadmap-title">Our Process</h2>
//                             <p className="roadmap-subtitle">
//                                 Choose your department to see our specialized process
//                             </p>

//                             {/* Department Selector */}
//                             <div className="department-selector">
//                                 {departments.map((dept) => (
//                                     <motion.button
//                                         key={dept.id}
//                                         className={`dept-btn ${selectedDepartment === dept.id ? 'active' : ''}`}
//                                         onClick={() => setSelectedDepartment(dept.id)}
//                                         whileHover={{ scale: 1.05, y: -2 }}
//                                         whileTap={{ scale: 0.95 }}
//                                         style={{ '--dept-color': dept.color }}
//                                     >
//                                         <span className="dept-icon">{dept.icon}</span>
//                                         <span className="dept-name">{dept.name}</span>
//                                     </motion.button>
//                                 ))}
//                             </div>
//                         </motion.div>

//                         <div className="roadmap-timeline">
//                             {roadmapSteps.map((step, index) => (
//                                 <motion.div
//                                     key={step.id}
//                                     className={`roadmap-step ${currentStep === index ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
//                                     initial={{ opacity: 0, x: -50 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                     whileHover={{ scale: 1.05, y: -5 }}
//                                 >
//                                     <div className="step-number">
//                                         <span className="number">{step.id}</span>
//                                         <div className="step-line"></div>
//                                     </div>

//                                     <div className="step-content">
//                                         <div className="step-icon">{step.icon}</div>
//                                         <h3 className="step-title">{step.title}</h3>
//                                         <p className="step-description">{step.description}</p>
//                                         <div className="step-duration">{step.duration}</div>

//                                         <div className="step-details">
//                                             {step.details.map((detail, idx) => (
//                                                 <span key={idx} className="detail-item">
//                                                     {detail}
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Why Choose Us Section */}
//                 <section className="why-choose-section">
//                     <div className="why-choose-container">
//                         <motion.div
//                             className="why-choose-header"
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                         >
//                             <h2 className="why-choose-title">Why Choose Stacia Corp?</h2>
//                             <p className="why-choose-subtitle">
//                                 We bring expertise, innovation, and dedication to every project
//                             </p>
//                         </motion.div>

//                         <div className="why-choose-grid">
//                             {[
//                                 {
//                                     icon: "🎯",
//                                     title: "Expert Team",
//                                     description: "Experienced professionals with deep industry knowledge"
//                                 },
//                                 {
//                                     icon: "⚡",
//                                     title: "Fast Delivery",
//                                     description: "Quick turnaround times without compromising quality"
//                                 },
//                                 {
//                                     icon: "🔒",
//                                     title: "Secure & Reliable",
//                                     description: "Enterprise-grade security and 99.9% uptime guarantee"
//                                 },
//                                 {
//                                     icon: "💰",
//                                     title: "Cost Effective",
//                                     description: "Competitive pricing with transparent billing"
//                                 },
//                                 {
//                                     icon: "🛠️",
//                                     title: "Custom Solutions",
//                                     description: "Tailored solutions that fit your specific needs"
//                                 },
//                                 {
//                                     icon: "📞",
//                                     title: "24/7 Support",
//                                     description: "Round-the-clock support and maintenance"
//                                 }
//                             ].map((item, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="why-choose-card"
//                                     initial={{ opacity: 0, y: 30 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                     whileHover={{ y: -5, scale: 1.02 }}
//                                 >
//                                     <div className="card-icon">{item.icon}</div>
//                                     <h3 className="card-title">{item.title}</h3>
//                                     <p className="card-description">{item.description}</p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* CTA Section */}
//                 <section className="cta-section">
//                     <div className="cta-container">
//                         <motion.div
//                             className="cta-content"
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                         >
//                             <h2 className="cta-title">Ready to Get Started?</h2>
//                             <p className="cta-description">
//                                 Let's discuss your project and see how we can help you achieve your goals
//                             </p>
//                             <motion.button
//                                 className="cta-button"
//                                 onClick={handleInquiryClick}
//                                 whileHover={{ scale: 1.05, y: -2 }}
//                                 whileTap={{ scale: 0.95 }}
//                             >
//                                 <span className="btn-icon">🚀</span>
//                                 <span className="btn-text">Start Your Project Today</span>
//                                 <span className="btn-arrow">→</span>
//                             </motion.button>
//                         </motion.div>
//                     </div>
//                 </section>

//                 {/* Client Inquiry Modal */}
//                 <ClientInquiryModal
//                     isOpen={isModalOpen}
//                     onClose={handleModalClose}
//                 />

//                 {/* Footer */}
//                 <Footer />
//                 <MobileFooter />
//             </div>
//         </Suspense>
//     );
// };

// export default ClientVisit;




// import React, { useState, useEffect, useTransition, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { lazy, Suspense } from 'react';
// import '../styles/ClientVisit.css';
// import ClientInquiryModal from '../components/Client/ClientInquiryModal';
// import { departments, roadmapStepsData } from '../Data/departmentData.js';
// import { GoArrowDownRight } from 'react-icons/go';
// import { BiMessageDetail } from "react-icons/bi";
// import { FaPhoneVolume } from 'react-icons/fa';
// import CompanyImage from "../assets/StaciaFavicon.svg";
// import BusinessStartupGuide from './Bussiness.jsx'; // Verify this path matches the file location
// import {
//     FaClipboard,
//     FaLightbulb,
//     FaSearchDollar,
//     FaRocket,
//     FaBinoculars,
//     FaBook,
//     FaPhone,
//     FaPaintBrush,
//     FaLaptopCode,
//     FaFlask,
//     FaUpload,
//     FaWrench,
//     FaListAlt,
//     FaSearch,
//     FaBrain,
//     FaCheckCircle,
//     FaLink,
//     FaChartLine,
//     FaSyncAlt,
//     FaShoppingCart,
//     FaLock,
//     FaFileContract,
//     FaNetworkWired,
// } from "react-icons/fa";
// import { GrCurrency, GrDocumentPerformance, GrShieldSecurity } from 'react-icons/gr';
// import { AiOutlineSolution } from 'react-icons/ai';
// import { IoMdMail } from 'react-icons/io';

// // Lazy load components
// const NavBar = lazy(() => import('../components/NavBar'));
// const Footer = lazy(() => import('../components/Footer'));
// const MobileFooter = lazy(() => import('../components/MobileFooter'));
// const SideBar = lazy(() => import('../components/SideBar'));
// const LoadingStar = lazy(() => import('../components/LoadingStar'));

// const ClientVisit = () => {
//     const [isPending, startTransition] = useTransition();
//     const [isVisible, setIsVisible] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [currentStep, setCurrentStep] = useState(0);
//     const [selectedDepartment, setSelectedDepartment] = useState('web-development');

//     const roadmapSteps = roadmapStepsData[selectedDepartment] || roadmapStepsData['web-development'];

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                 }
//             },
//             { threshold: 0.1 }
//         );

//         const elements = document.querySelectorAll('.animate-on-scroll');
//         elements.forEach(element => observer.observe(element));

//         return () => {
//             elements.forEach(element => observer.unobserve(element));
//         };
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             startTransition(() => {
//                 setCurrentStep(prev => (prev + 1) % roadmapSteps.length);
//             });
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [roadmapSteps.length]);

//     // const handleInquiryClick = () => {
//     //     startTransition(() => {
//     //         setIsModalOpen(true);
//     //     });
//     // };

//     const handleModalClose = () => {
//         startTransition(() => {
//             setIsModalOpen(false);
//         });
//     };

//     const handleDepartmentChange = (deptId) => {
//         startTransition(() => {
//             setSelectedDepartment(deptId);
//         });
//     };

//     const [isFormVisible, setIsFormVisible] = useState(false); // Form for "Start Your Project Today"
//     const [isFormVisible1, setIsFormVisible1] = useState(false); // Form for "Start Your Project"
//     const [isFormVisibleCall, setIsFormVisibleCall] = useState(false); // Form for "Schedule Call"
//     const [email, setEmail] = useState('');
//     const [result, setResult] = useState('');
//     // Handle button click to show/hide forms and close others
//     const handleInquiryClick = () => {
//         setIsFormVisible(!isFormVisible);
//         setIsFormVisible1(false); // Close other forms
//         setIsFormVisibleCall(false); // Close other forms
//         setResult(''); // Reset result message
//         setEmail(''); // Reset email input
//     };
//     const handleInquiryClick1 = () => {
//         setIsFormVisible1(!isFormVisible1);
//         setIsFormVisible(false); // Close other forms
//         setIsFormVisibleCall(false); // Close other forms
//         setResult(''); // Reset result message
//         setEmail(''); // Reset email input
//     };
//     const handleInquiryClick2 = () => {
//         setIsFormVisibleCall(!isFormVisibleCall);
//         setIsFormVisible(false); // Close other forms
//         setIsFormVisible1(false); // Close other forms
//         setResult(''); // Reset result message
//         setEmail(''); // Reset email input
//     };
//     // Basic email validation regex
//     const validateEmail = (email) => {
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return regex.test(email);
//     };
//     // Handle form submission with Web3Forms
//     const onSubmit = async (event) => {
//         event.preventDefault();
//         setResult('Sending....');
//         // Validate email
//         if (!validateEmail(email)) {
//             setResult('Please enter a valid email address.');
//             return;
//         }
//         // Create FormData
//         const formData = new FormData();
//         formData.append('email', email);
//         formData.append("access_key", "f05920d0-3b2a-427b-bd0e-de098dfadd58");
//         formData.append("subject", "New enquiries Stacia Corp Client Visit Page");
//         formData.append("from_name", "Stacia Corp Website"); // Replace with your Web3Forms Access Key
//         try {
//             const response = await fetch('https://api.web3forms.com/submit', {
//                 method: 'POST',
//                 body: formData,
//             });
//             const data = await response.json();
//             if (data.success) {
//                 setResult('Email sent successfully to admin!');
//                 setEmail(''); // Clear input
//                 setIsFormVisible(false); // Hide form
//             } else {
//                 console.error('Web3Forms Error:', data);
//                 setResult(data.message || 'Failed to send email. Please try again.');
//             }
//         } catch (error) {
//             console.error('Submission Error:', error);
//             setResult('Failed to send email. Please try again later.');
//         }
//     };
//     useEffect(() => {
//         if (result) {
//             const timer = setTimeout(() => {
//                 setResult('');
//             }, 3000); // 3000 milliseconds = 3 seconds
//             return () => clearTimeout(timer); // Cleanup timer on unmount or result change
//         }
//     }, [result]);

//     const actionsRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             // Check if click is outside the actions div
//             if (actionsRef.current && !actionsRef.current.contains(event.target)) {
//                 setIsFormVisible1(false);
//                 setIsFormVisibleCall(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [setIsFormVisible1, setIsFormVisibleCall]);
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <div className="client-visit-page">
//                 <div className="nav_style">
//                     <NavBar />
//                     <SideBar />
//                 </div>

//                 <section className="welcome-section">
//                     <div className="welcome-container">
//                         <motion.div
//                             className="welcome-content"
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8 }}
//                         >
//                             <div className="welcome-text">
//                                 <motion.h1
//                                     className="welcome-title"
//                                     initial={{ opacity: 0, y: 30 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 0.2 }}
//                                 >
//                                     Welcome to Stacia Corp
//                                 </motion.h1>
//                                 <motion.p
//                                     className="welcome-subtitle"
//                                     initial={{ opacity: 0, y: 30 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 0.4 }}
//                                 >
//                                     Your trusted partner in digital transformation and innovation
//                                 </motion.p>
//                                 <motion.p
//                                     className="welcome-description"
//                                     initial={{ opacity: 0, y: 30 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 0.6 }}
//                                 >
//                                     We're excited to work with you and help bring your vision to life.
//                                     Our team of experts is ready to provide you with cutting-edge solutions
//                                     tailored to your specific needs.
//                                 </motion.p>
//                             </div>

//                             {/* <motion.div
//                                 className="welcome-actions"
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: 0.8 }}
//                             >
//                                 <motion.button
//                                     className="welcome-btn primary"
//                                     onClick={handleInquiryClick}
//                                     whileHover={{ scale: 1.05, y: -10 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     <span className="btn-icon"><BiMessageDetail /></span>
//                                     <span className="btn-text">Start Your Project</span>
//                                     <span className="btn-arrow-clt"><GoArrowDownRight /></span>
//                                 </motion.button>

//                                 <motion.button
//                                     className="welcome-btn secondary"
//                                     onClick={handleInquiryClick}
//                                     whileHover={{ scale: 1.05, y: -2 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     <span className="btn-icon"><FaPhoneVolume /></span>
//                                     <span className="btn-text">Schedule Call</span>
//                                     <span className="btn-arrow-clt"><GoArrowDownRight /></span>
//                                 </motion.button>
//                             </motion.div> */}
//                             <motion.div
//                                 className="welcome-actions"
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: 0.8 }}
//                                 ref={actionsRef}
//                             >
//                                 {!isFormVisible1 && (<motion.button
//                                     className="welcome-btn primary"
//                                     onClick={handleInquiryClick1}
//                                     whileHover={{ scale: 1.05, y: -10 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     <span className="btn-icon"><BiMessageDetail /></span>
//                                     <span className="btn-text">Start Your Project</span>
//                                     <span className="btn-arrow"><GoArrowDownRight /></span>
//                                 </motion.button>
//                                 )}
//                                 {!isFormVisibleCall && (<motion.button
//                                     className="welcome-btn secondary"
//                                     onClick={handleInquiryClick2}
//                                     whileHover={{ scale: 1.05, y: -2 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     <span className="btn-icon"><FaPhoneVolume /></span>
//                                     <span className="btn-text">Schedule Call</span>
//                                     <span className="btn-arrow"><GoArrowDownRight /></span>
//                                 </motion.button>)}

//                             </motion.div>
//                             {isFormVisible1 && (
//                                 <form
//                                     className="email-form"
//                                     onSubmit={onSubmit}
//                                     style={{
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         gap: '10px',
//                                         padding: '10px',
//                                         backgroundColor: '#F0F0F0',
//                                         borderRadius: '25px',
//                                         maxWidth: '400px',
//                                         margin: '1rem auto',
//                                     }}
//                                 >
//                                     <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//                                         <span style={{ marginRight: '8px', color: '#8E6FFF' }}><IoMdMail /></span>
//                                         <input
//                                             type="email"
//                                             id="email"
//                                             name="email"
//                                             value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             placeholder="Your email address"
//                                             required
//                                             style={{
//                                                 flexGrow: 1,
//                                                 border: 'none',
//                                                 background: 'transparent',
//                                                 outline: 'none',
//                                                 fontSize: '16px',
//                                                 color: '#333',
//                                             }}
//                                         />
//                                     </div>
//                                     <button
//                                         type="submit"
//                                         style={{
//                                             backgroundColor: '#8E6FFF',
//                                             color: 'white',
//                                             border: 'none',
//                                             borderRadius: '20px',
//                                             padding: '10px 20px',
//                                             cursor: 'pointer',
//                                             fontSize: '16px',
//                                             transition: 'background-color 0.3s',
//                                         }}
//                                         onMouseOver={(e) => (e.target.style.backgroundColor = '#7B5EF8')}
//                                         onMouseOut={(e) => (e.target.style.backgroundColor = '#8E6FFF')}
//                                     >
//                                         Submit
//                                     </button>
//                                 </form>
//                             )}
//                             {/* Form for "Schedule Call" (can be customized differently if needed) */}
//                             {isFormVisibleCall && (
//                                 <form
//                                     className="email-form"
//                                     onSubmit={onSubmit}
//                                     style={{
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         gap: '10px',
//                                         padding: '10px',
//                                         backgroundColor: '#F0F0F0',
//                                         borderRadius: '25px',
//                                         maxWidth: '400px',
//                                         margin: '1rem auto',
//                                     }}
//                                 >
//                                     <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//                                         <span style={{ marginRight: '8px', color: '#8E6FFF' }}><IoMdMail /> </span>
//                                         <input
//                                             type="email"
//                                             id="email"
//                                             name="email"
//                                             value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             placeholder="Your email address"
//                                             required
//                                             style={{
//                                                 flexGrow: 1,
//                                                 border: 'none',
//                                                 background: 'transparent',
//                                                 outline: 'none',
//                                                 fontSize: '16px',
//                                                 color: '#333',
//                                             }}
//                                         />
//                                     </div>
//                                     <button
//                                         type="submit"
//                                         style={{
//                                             backgroundColor: '#8E6FFF',
//                                             color: 'white',
//                                             border: 'none',
//                                             borderRadius: '20px',
//                                             padding: '10px 20px',
//                                             cursor: 'pointer',
//                                             fontSize: '16px',
//                                             transition: 'background-color 0.3s',
//                                         }}
//                                         onMouseOver={(e) => (e.target.style.backgroundColor = '#7B5EF8')}
//                                         onMouseOut={(e) => (e.target.style.backgroundColor = '#8E6FFF')}
//                                     >
//                                         Submit
//                                     </button>
//                                 </form>
//                             )}
//                             {result && (
//                                 <p
//                                     className={result.includes('Failed') ? 'error-message' : 'success-message'}
//                                     style={{ textAlign: 'center', marginTop: '10px' }}
//                                 >
//                                     {result}
//                                 </p>
//                             )}






//                         </motion.div>


//                         <motion.div
//                             className="welcome-visual"
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.8, delay: 0.4 }}
//                         >
//                             <div className="visual-container">
//                                 <div className="product-preview"
//                                     style={{ backgroundColor: "#f5f5f5" }}>
//                                     <img
//                                         src={CompanyImage}
//                                         className="product-image"
//                                         loading="lazy"
//                                     />
//                                     {/* <div className="product-overlay">
//                                         <div className="overlay-content">
//                                         </div>
//                                     </div> */}
//                                 </div>

//                                 <div className="floating-elements">
//                                     <div className="floating-element element-1" style={{ color: "#ffffff" }}>
//                                         <span><FaChartLine /></span>
//                                         <span>Analytics</span>
//                                     </div>
//                                     <div className="floating-element element-5" style={{ color: "#ffffff" }}>
//                                         <span><GrDocumentPerformance /></span>
//                                         <span>Performance</span>
//                                     </div>
//                                     <div className="floating-element element-3" style={{ color: "#ffffff" }}>
//                                         <span><FaWrench /></span>
//                                         <span>Customization</span>
//                                     </div>
//                                     <div className="floating-element element-4" style={{ color: "#ffffff" }}>
//                                         <span><GrShieldSecurity /></span>
//                                         <span>Security</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>

//                     </div>
//                 </section>

//                 <section className="roadmap-section">
//                     <div className="roadmap-container">
//                         <motion.div
//                             className="roadmap-header"
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                         >
//                             <h2 className="roadmap-title">Our Process</h2>
//                             <p className="roadmap-subtitle">
//                                 At Stacia Corp, our process is designed to deliver exceptional results by combining expertise, collaboration, and innovation. We understand that every project is unique, so we’ve developed a streamlined, adaptable approach that ensures success across all departments—whether you’re seeking cutting-edge design, robust development, impactful marketing, or strategic consulting. Our process is built on transparency, communication, and a commitment to turning your vision into reality. Below is an overview of how we work, tailored to meet your needs at every step.
//                             </p>

//                             <div className="department-selector">
//                                 {departments.map((dept) => (
//                                     <motion.button
//                                         key={dept.id}
//                                         className={`dept-btn ${selectedDepartment === dept.id ? 'active' : ''}`}
//                                         onClick={() => handleDepartmentChange(dept.id)}
//                                         whileHover={{ scale: 1.05, y: -2 }}
//                                         whileTap={{ scale: 0.95 }}
//                                         style={{ '--dept-color': "#31088b" }}
//                                     // style={{ '--dept-color': dept.color }}
//                                     >
//                                         <span className="dept-name">{dept.name}</span>
//                                     </motion.button>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </div>
//                 </section>

//                 <BusinessStartupGuide dept={selectedDepartment} />

//                 <section className="why-choose-section">
//                     <div className="why-choose-container">
//                         <motion.div
//                             className="why-choose-header"
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                         >
//                             <h2 className="why-choose-title">Why Choose Stacia Corp?</h2>
//                             <p className="why-choose-subtitle">
//                                 We bring expertise, innovation, and dedication to every project
//                             </p>
//                         </motion.div>

//                         <div className="why-choose-grid">
//                             {[
//                                 {
//                                     icon: <FaRocket />,
//                                     title: "Expert Team",
//                                     description: "Experienced professionals with deep industry knowledge"
//                                 },
//                                 {
//                                     icon: <GrDocumentPerformance />,
//                                     title: "Fast Delivery",
//                                     description: "Quick turnaround times without compromising quality"
//                                 },
//                                 {
//                                     icon: <FaLock />,
//                                     title: "Secure & Reliable",
//                                     description: "Enterprise-grade security and 99.9% uptime guarantee"
//                                 },
//                                 {
//                                     icon: <GrCurrency />,
//                                     title: "Cost Effective",
//                                     description: "Competitive pricing with transparent billing"
//                                 },
//                                 {
//                                     icon: <AiOutlineSolution />,
//                                     title: "Custom Solutions",
//                                     description: "Tailored solutions that fit your specific needs"
//                                 },
//                                 {
//                                     icon: <FaPhone />,
//                                     title: "24/7 Support",
//                                     description: "Round-the-clock support and maintenance"
//                                 }
//                             ].map((item, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="why-choose-card"
//                                     initial={{ opacity: 0, y: 30 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                     whileHover={{ y: -5, scale: 1.02 }}
//                                 >
//                                     <div className="card-icon">{item.icon}</div>
//                                     <h3 className="card-title">{item.title}</h3>
//                                     <p className="card-description">{item.description}</p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 <section className="cta-section">
//                     <div className="cta-container">
//                         <motion.div
//                             className="cta-content"
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                         >
//                             <h2 className="cta-title">Ready to Get Started?</h2>
//                             <p className="cta-description">
//                                 Let's discuss your project and see how we can help you achieve your goals
//                             </p>
//                             <div className='inquiry-container'>
//                                 {!isFormVisible && (
//                                     <motion.button
//                                         className="cta-button"
//                                         onClick={handleInquiryClick}
//                                         whileHover={{ scale: 1.05, y: -2 }}
//                                         whileTap={{ scale: 0.95 }}

//                                     >
//                                         <span className="btn-icon"><FaRocket /></span>
//                                         <span className="btn-text">Start Your Project Today</span>
//                                         <span className="btn-arrow"><GoArrowDownRight /></span>
//                                     </motion.button>
//                                 )}

//                                 {isFormVisible && (
//                                     <form
//                                         className="email-form"
//                                         onSubmit={onSubmit}
//                                         style={{
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             gap: '10px',
//                                             padding: '10px',
//                                             backgroundColor: '#F0F0F0',
//                                             borderRadius: '25px',
//                                             maxWidth: '400px',
//                                             margin: '1rem auto',
//                                         }}
//                                     >
//                                         <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//                                             <span style={{ marginRight: '8px', color: '#8E6FFF' }}><IoMdMail /></span>
//                                             <input
//                                                 type="email"
//                                                 id="email"
//                                                 name="email"
//                                                 value={email}
//                                                 onChange={(e) => setEmail(e.target.value)}
//                                                 placeholder="Your email address"
//                                                 required
//                                                 style={{
//                                                     flexGrow: 1,
//                                                     border: 'none',
//                                                     background: 'transparent',
//                                                     outline: 'none',
//                                                     fontSize: '16px',
//                                                     color: '#333',
//                                                 }}
//                                             />
//                                         </div>
//                                         <button
//                                             type="submit"
//                                             style={{
//                                                 backgroundColor: '#8E6FFF',
//                                                 color: 'white',
//                                                 border: 'none',
//                                                 borderRadius: '20px',
//                                                 padding: '10px 20px',
//                                                 cursor: 'pointer',
//                                                 fontSize: '16px',
//                                                 transition: 'background-color 0.3s',
//                                             }}
//                                             onMouseOver={(e) => (e.target.style.backgroundColor = '#7B5EF8')}
//                                             onMouseOut={(e) => (e.target.style.backgroundColor = '#8E6FFF')}
//                                         >
//                                             submit
//                                         </button>
//                                     </form>
//                                 )}
//                                 {result && (
//                                     <p
//                                         className={result.includes('Failed') ? 'error-message' : 'success-message'}
//                                         style={{ textAlign: 'center', marginTop: '10px' }}
//                                     >
//                                         {result}
//                                     </p>
//                                 )}
//                             </div>

//                         </motion.div>
//                     </div>
//                 </section>

//                 <ClientInquiryModal
//                     isOpen={isModalOpen}
//                     onClose={handleModalClose}
//                 />

//                 <Footer />
//                 <MobileFooter />
//             </div>
//         </Suspense>
//     );
// };

// export default ClientVisit;


import React, { useState, useEffect, useTransition, useRef, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import '../styles/ClientVisit.css';
import ClientInquiryModal from '../components/Client/ClientInquiryModal';
import { departments, roadmapStepsData } from '../Data/departmentData.js';
import { GoArrowDownRight } from 'react-icons/go';
import { BiMessageDetail } from "react-icons/bi";
import {  FaRocket, FaChartLine, FaWrench, FaLock, FaPhone } from 'react-icons/fa';
import CompanyImage from "../assets/StaciaFavicon.svg";
import BusinessStartupGuide from './Bussiness.jsx'; // Verify this path matches the file location
import { GrCurrency, GrDocumentPerformance, GrShieldSecurity } from 'react-icons/gr';
import { AiOutlineSolution } from 'react-icons/ai';
import {  IoMdMail } from 'react-icons/io';
import { FaPhoneVolume } from "react-icons/fa6";

// Lazy load components
const NavBar = lazy(() => import('../components/NavBar'));
const Footer = lazy(() => import('../components/Footer'));
const MobileFooter = lazy(() => import('../components/MobileFooter'));
const SideBar = lazy(() => import('../components/SideBar'));
const LoadingStar = lazy(() => import('../components/LoadingStar'));

const ClientVisit = () => {
    const [isPending, startTransition] = useTransition();
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedDepartment, setSelectedDepartment] = useState('web-development');

    const roadmapSteps = roadmapStepsData[selectedDepartment] || roadmapStepsData['web-development'];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => observer.observe(element));

        return () => {
            // disconnect observer to clean up
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            startTransition(() => {
                setCurrentStep(prev => (prev + 1) % roadmapSteps.length);
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [roadmapSteps.length, startTransition]);

    const handleModalClose = () => {
        startTransition(() => {
            setIsModalOpen(false);
        });
    };

    const handleDepartmentChange = (deptId) => {
        startTransition(() => {
            setSelectedDepartment(deptId);
        });
    };

    // Forms state
    const [isFormVisible, setIsFormVisible] = useState(false); // CTA form
    const [isFormVisible1, setIsFormVisible1] = useState(false); // Welcome "Start Your Project"
    const [isFormVisibleCall, setIsFormVisibleCall] = useState(false); // Welcome "Schedule Call"
    const [email, setEmail] = useState('');
    const [result, setResult] = useState('');

    // Toggle handlers (close other forms when opening one)
    const handleInquiryClick = () => {
        setIsFormVisible(prev => !prev);
        setIsFormVisible1(false);
        setIsFormVisibleCall(false);
        setResult('');
        setEmail('');
    };
    const handleInquiryClick1 = () => {
        setIsFormVisible1(prev => !prev);
        setIsFormVisible(false);
        setIsFormVisibleCall(false);
        setResult('');
        setEmail('');
    };
    const handleInquiryClick2 = () => {
        setIsFormVisibleCall(prev => !prev);
        setIsFormVisible(false);
        setIsFormVisible1(false);
        setResult('');
        setEmail('');
    };

    // Email validation
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Submit handler (Web3Forms)
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending....');

        if (!validateEmail(email)) {
            setResult('Please enter a valid email address.');
            return;
        }

        const formData = new FormData();
        formData.append('email', email);
        formData.append("access_key", "f05920d0-3b2a-427b-bd0e-de098dfadd58");
        formData.append("subject", "New enquiries Stacia Corp Client Visit Page");
        formData.append("from_name", "Stacia Corp Website");

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setResult('Email sent successfully to admin!');
                setEmail('');
                setIsFormVisible(false);
                setIsFormVisible1(false);
                setIsFormVisibleCall(false);
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
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [result]);

    // Refs for click-outside detection
    const actionsRef = useRef(null);   // welcome actions/buttons + their forms
    const inquiryRef = useRef(null);   // cta inquiry container

    useEffect(() => {
        const handleClickOutside = (event) => {
            const target = event.target;
            const clickedInsideActions = actionsRef.current && actionsRef.current.contains(target);
            const clickedInsideInquiry = inquiryRef.current && inquiryRef.current.contains(target);

            // If click is NOT inside either the welcome actions area or the inquiry CTA area, close all forms
            if (!clickedInsideActions && !clickedInsideInquiry) {
                setIsFormVisible(false);
                setIsFormVisible1(false);
                setIsFormVisibleCall(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="client-visit-page">
                <div className="nav_style">
                    <NavBar />
                    <SideBar />
                </div>

                <section className="welcome-section">
                    <div className="welcome-container">
                        <motion.div
                            className="welcome-content"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="welcome-text">
                                <motion.h1
                                    className="welcome-title"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    Welcome to Stacia Corp
                                </motion.h1>
                                <motion.p
                                    className="welcome-subtitle"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    Your trusted partner in digital transformation and innovation
                                </motion.p>
                                <motion.p
                                    className="welcome-description"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    We're excited to work with you and help bring your vision to life.
                                    Our team of experts is ready to provide you with cutting-edge solutions
                                    tailored to your specific needs.
                                </motion.p>
                            </div>

                            <motion.div
                                className="welcome-actions"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                ref={actionsRef}
                            >
                                {!isFormVisible1 && (
                                    <motion.button
                                        className="welcome-btn primary"
                                        onClick={handleInquiryClick1}
                                        whileHover={{ scale: 1.05, y: -10 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="btn-icon"><BiMessageDetail /></span>
                                        <span className="btn-text">Start Your Project</span>
                                        <span className="btn-arrow"><GoArrowDownRight /></span>
                                    </motion.button>
                                )}

                                {!isFormVisibleCall && (
                                    <motion.button
                                        className="welcome-btn secondary"
                                        onClick={handleInquiryClick2}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="btn-icon"><FaPhoneVolume /></span>
                                        <span className="btn-text">Schedule Call</span>
                                        <span className="btn-arrow"><GoArrowDownRight /></span>
                                    </motion.button>
                                )}
                            </motion.div>

                            {/* Welcome forms (tied to actionsRef click-outside logic) */}
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
                                        <span style={{ marginRight: '8px', color: '#8E6FFF' }}><IoMdMail size={'1.5rem'}/></span>
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
                                        <span style={{ marginRight: '8px', color: '#8E6FFF' }}><FaPhoneVolume  size={'1.5rem'}/> </span>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your mobile number"
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

                            {result && (
                                <p
                                    className={result.includes('Failed') ? 'error-message' : 'success-message'}
                                    style={{ textAlign: 'center', marginTop: '10px' }}
                                >
                                    {result}
                                </p>
                            )}
                        </motion.div>

                        <motion.div
                            className="welcome-visual"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="visual-container">
                                <div className="product-preview" style={{ backgroundColor: "#f5f5f5" }}>
                                    <img src={CompanyImage} className="product-image" loading="lazy" alt="Stacia" />
                                </div>

                                <div className="floating-elements">
                                    <div className="floating-element element-1" style={{ color: "#ffffff" }}>
                                        <span><FaChartLine /></span>
                                        <span>Analytics</span>
                                    </div>
                                    <div className="floating-element element-5" style={{ color: "#ffffff" }}>
                                        <span><GrDocumentPerformance /></span>
                                        <span>Performance</span>
                                    </div>
                                    <div className="floating-element element-3" style={{ color: "#ffffff" }}>
                                        <span><FaWrench /></span>
                                        <span>Customization</span>
                                    </div>
                                    <div className="floating-element element-4" style={{ color: "#ffffff" }}>
                                        <span><GrShieldSecurity /></span>
                                        <span>Security</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="roadmap-section">
                    <div className="roadmap-container">
                        <motion.div
                            className="roadmap-header"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="roadmap-title">Our Process</h2>
                            <p className="roadmap-subtitle">
                                At Stacia Corp, our process is designed to deliver exceptional results by combining expertise, collaboration, and innovation. We understand that every project is unique, so we’ve developed a streamlined, adaptable approach that ensures success across all departments—whether you’re seeking cutting-edge design, robust development, impactful marketing, or strategic consulting. Our process is built on transparency, communication, and a commitment to turning your vision into reality. Below is an overview of how we work, tailored to meet your needs at every step.
                            </p>

                            <div className="department-selector">
                                {departments.map((dept) => (
                                    <motion.button
                                        key={dept.id}
                                        className={`dept-btn ${selectedDepartment === dept.id ? 'active' : ''}`}
                                        onClick={() => handleDepartmentChange(dept.id)}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{ '--dept-color': "#31088b" }}
                                    >
                                        <span className="dept-name">{dept.name}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                <BusinessStartupGuide dept={selectedDepartment} />

                <section className="why-choose-section">
                    <div className="why-choose-container">
                        <motion.div
                            className="why-choose-header"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="why-choose-title">Why Choose Stacia Corp?</h2>
                            <p className="why-choose-subtitle">We bring expertise, innovation, and dedication to every project</p>
                        </motion.div>

                        <div className="why-choose-grid">
                            {[
                                { icon: <FaRocket />, title: "Expert Team", description: "Experienced professionals with deep industry knowledge" },
                                { icon: <GrDocumentPerformance />, title: "Fast Delivery", description: "Quick turnaround times without compromising quality" },
                                { icon: <FaLock />, title: "Secure & Reliable", description: "Enterprise-grade security and 99.9% uptime guarantee" },
                                { icon: <GrCurrency />, title: "Cost Effective", description: "Competitive pricing with transparent billing" },
                                { icon: <AiOutlineSolution />, title: "Custom Solutions", description: "Tailored solutions that fit your specific needs" },
                                { icon: <FaPhone />, title: "24/7 Support", description: "Round-the-clock support and maintenance" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="why-choose-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <div className="card-icon">{item.icon}</div>
                                    <h3 className="card-title">{item.title}</h3>
                                    <p className="card-description">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-container">
                        <motion.div
                            className="cta-content"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="cta-title">Ready to Get Started?</h2>
                            <p className="cta-description">Let's discuss your project and see how we can help you achieve your goals</p>

                            <div className='inquiry-container' ref={inquiryRef}>
                                {!isFormVisible && (
                                    <motion.button
                                        className="cta-button"
                                        onClick={handleInquiryClick}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="btn-icon"><FaRocket /></span>
                                        <span className="btn-text">Start Your Project Today</span>
                                        <span className="btn-arrow"><GoArrowDownRight /></span>
                                    </motion.button>
                                )}

                                {isFormVisible && (
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
                                            <span style={{ marginRight: '8px', color: '#8E6FFF',  }}><IoMdMail size={'2rem'}/></span>
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
                                            submit
                                        </button>
                                    </form>
                                )}

                                {result && (
                                    <p
                                        className={result.includes('Failed') ? 'error-message' : 'success-message'}
                                        style={{ textAlign: 'center', marginTop: '10px' }}
                                    >
                                        {result}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>

                <ClientInquiryModal isOpen={isModalOpen} onClose={handleModalClose} />

                <Footer />
                <MobileFooter />
            </div>
        </Suspense>
    );
};

export default ClientVisit;
