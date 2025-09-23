// import React from 'react';
// import '../styles/Bussiness.css';
// import { useEffect } from 'react';
// import { FaClipboard, FaLightbulb, FaSearchDollar, FaRocket, FaBinoculars, FaBook } from 'react-icons/fa';

// const BusinessStartupGuide = () => {

//     // <div className="container">
//     //   <h1>How to Start a Business</h1>
//     //   <h2>in 6 Easy Steps</h2>
//     //   <div className="steps">
//     //     <div className="step left">
//     //       <div className="icon"><FaClipboard size={50} /></div>
//     //       <div className="content">
//     //         <div className="number">1</div>
//     //         <h3>Research the market</h3>
//     //         <p>Market research is a method of gathering information about potential customers and businesses already operating in your area. Take advantage of that information to improve your business.</p>
//     //       </div>
//     //     </div>
//     //     <div className="step right">
//     //       <div className="content">
//     //         <div className="number">2</div>
//     //         <h3>Prepare a business plan</h3>
//     //         <p>Your business plan lays the foundation for your success. It provides a roadmap for how to structure, run, and grow your new business.</p>
//     //       </div>
//     //       <div className="icon"><FaLightbulb size={50} /></div>
//     //     </div>
//     //     <div className="step left">
//     //       <div className="icon"><FaSearchDollar size={50} /></div>
//     //       <div className="content">
//     //         <div className="number">3</div>
//     //         <h3>Fund your business</h3>
//     //         <p>Determine how much money your business will need with the help of your business plan. If you don't have that amount, you will need to raise funds or borrow money.</p>
//     //       </div>
//     //     </div>
//     //     <div className="step right">
//     //       <div className="content">
//     //         <div className="number">4</div>
//     //         <h3>Establish a business structure</h3>
//     //         <p>The legal structure you select for your business will impact how much tax you pay, the requirements for registration, and your personal liability.</p>
//     //       </div>
//     //       <div className="icon"><FaRocket size={50} /></div>
//     //     </div>
//     //     <div className="step left">
//     //       <div className="icon"><FaBinoculars size={50} /></div>
//     //       <div className="content">
//     //         <div className="number">5</div>
//     //         <h3>Register your business</h3>
//     //         <p>It's time to protect your brand once you've chosen your perfect business name. If you do business under a name you're not using, you will need to register with the federal government, as well as your state government.</p>
//     //       </div>
//     //     </div>
//     //     <div className="step right">
//     //       <div className="content">
//     //         <div className="number">6</div>
//     //         <h3>Set up a business bank account</h3>
//     //         <p>You can use a small business checking account to handle legal, tax, and daily issues. It's easy to set one up if you have the right registrations and paperwork in order.</p>
//     //       </div>
//     //       <div className="icon"><FaBook size={50} /></div>
//     //     </div>
//     //   </div>
//     // </div>
//     useEffect(() => {
//         const steps = document.querySelectorAll('.step');
//         steps.forEach((step, index) => {
//             step.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
//             step.style.transform = 'translateY(50px)';
//             step.style.opacity = '0';

//             setTimeout(() => {
//                 step.style.transform = 'translateY(0)';
//                 step.style.opacity = '1';
//             }, index * 300);
//         });
//     }, []);

//     return (
//         <div className="container">
//             <h1>How to Start a Business</h1>
//             <h2>in 6 Easy Steps</h2>
//             <div className="steps">
//                 {/* <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="400"
//           height="1200"
//           viewBox="0 0 400 1200"
//           style={{ position: "relative", zIndex: 10 }}
//         >
//           <path
//             d="M200 100 Q 250 50 200 200 Q 150 250 200 400 Q 250 350 200 600 Q 150 650 200 800 Q 250 750 200 1000"
//             stroke="rgba(255, 255, 255, 0.5)"
//             strokeWidth="2"
//             strokeDasharray="5, 5"
//             fill="none"
//           />
//           <circle cx="200" cy="100" r="5" fill="rgba(0, 255, 0, 0.7)" />
//           <circle cx="200" cy="200" r="5" fill="rgba(0, 255, 0, 0.7)" />
//           <circle cx="200" cy="400" r="5" fill="rgba(0, 255, 0, 0.7)" />
//           <circle cx="200" cy="600" r="5" fill="rgba(0, 255, 0, 0.7)" />
//           <circle cx="200" cy="800" r="5" fill="rgba(0, 255, 0, 0.7)" />
//           <circle cx="200" cy="1000" r="5" fill="rgba(0, 255, 0, 0.7)" />
//         </svg> */}
//                 <div className="step">
//                     <div className="icon">📋</div>
//                     <div className="content">
//                         <div className="number">1</div>
//                         <h3>Research the market</h3>
//                         <p>Market research is a method of gathering information about potential customers and businesses already operating in your area. Take advantage of that information to improve your business.</p>
//                     </div>
//                 </div>
//                 <div className="step">
//                     <div className="content">
//                         <div className="number">2</div>
//                         <h3>Prepare a business plan</h3>
//                         <p>Your business plan lays the foundation for your success. It provides a roadmap for how to structure, run, and grow your new business.</p>
//                     </div>
//                     <div className="icon">💡</div>
//                 </div>
//                 <div className="step">
//                     <div className="icon">🔍</div>
//                     <div className="content">
//                         <div className="number">3</div>
//                         <h3>Fund your business</h3>
//                         <p>Determine how much money your business will need with the help of your business plan. If you don’t have that amount, you will need to raise funds or borrow money.</p>
//                     </div>
//                 </div>
//                 <div className="step">
//                     <div className="content">
//                         <div className="number">4</div>
//                         <h3>Establish a business structure</h3>
//                         <p>The legal structure you select for your business will impact how much tax you pay, the requirements for registration, and your personal liability.</p>
//                     </div>
//                     <div className="icon">🚀</div>
//                 </div>
//                 <div className="step">
//                     <div className="icon">🔭</div>
//                     <div className="content">
//                         <div className="number">5</div>
//                         <h3>Register your business</h3>
//                         <p>Register your business once you’ve chosen your perfect business name. If you do business under a name you’re not using, you will need to register with the federal government, as well as your state.</p>
//                     </div>
//                 </div>
//                 <div className="step">
//                     <div className="content">
//                         <div className="number">6</div>
//                         <h3>Set up a business bank account</h3>
//                         <p>You can use a small business checking account to handle legal, tax, and daily issues. It’s easy to set one up if you have the right registrations and paperwork in order.</p>
//                     </div>
//                     <div className="icon">📚</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BusinessStartupGuide;


import React, { useEffect } from "react";
import { departments, roadmapStepsData } from "../Data/departmentData.js";
import {
    FaPhone,
    FaPaintBrush,
    FaLaptopCode,
    FaFlask,
    FaRocket,
    FaWrench,
    FaListAlt,
    FaSearch,
    FaMobileAlt,
    FaUpload,
    FaChartLine,
    FaBrain,
    FaCheckCircle,
    FaLink,
    FaSyncAlt,
    FaLightbulb,
    FaShoppingCart,
    FaLock,
    FaFileContract,
    FaNetworkWired,
    FaBullseye,
    FaCalendarAlt,
    FaHandshake,
    FaGlobe,
    FaRobot,
    FaBriefcase,
} from "react-icons/fa";
import "../styles/Bussiness.css";

// Map icon names to Font Awesome components
const iconMap = {
    FaPhone: FaPhone,
    FaPaintBrush: FaPaintBrush,
    FaLaptopCode: FaLaptopCode,
    FaFlask: FaFlask,
    FaRocket: FaRocket,
    FaWrench: FaWrench,
    FaListAlt: FaListAlt,
    FaSearch: FaSearch,
    FaMobileAlt: FaMobileAlt,
    FaUpload: FaUpload,
    FaChartLine: FaChartLine,
    FaBrain: FaBrain,
    FaCheckCircle: FaCheckCircle,
    FaLink: FaLink,
    FaSyncAlt: FaSyncAlt,
    FaLightbulb: FaLightbulb,
    FaShoppingCart: FaShoppingCart,
    FaLock: FaLock,
    FaFileContract: FaFileContract,
    FaNetworkWired: FaNetworkWired,
    FaBullseye: FaBullseye,
    FaCalendarAlt: FaCalendarAlt,
    FaHandshake: FaHandshake,
    FaGlobe: FaGlobe,
    FaRobot: FaRobot,
    FaBriefcase: FaBriefcase,
};

const BusinessSteps = ({ dept }) => {
    // Fallback to 'web-development' steps if dept is undefined or invalid
    const steps = roadmapStepsData[dept] || roadmapStepsData['web-development'];

    // Find the department object for the selected dept
    const selectedDepartment = departments.find(d => d.id === dept) ||
        departments.find(d => d.id === 'web-development') ||
    {
        id: 'web-development',
        name: 'Web Development',
        description: 'Web Development involves building and maintaining websites and web applications to ensure optimal performance and user experience.',
        roles: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'DevOps Engineer']
    };

    // Debugging logs
    console.log("Received dept:", dept);
    console.log("Departments array:", departments);
    console.log("Selected department:", selectedDepartment);

    useEffect(() => {
        const stepCards = document.querySelectorAll(".step-card");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        stepCards.forEach((step) => observer.observe(step));

        // Cleanup observer on unmount
        return () => {
            stepCards.forEach((step) => observer.unobserve(step));
        };
    }, []);

    return (
        <div className="steps-container-wrapper">
            <div className="steps-container">
                <h1>How to Start a Business</h1>
                <h2>in {steps.length} Easy Steps for {selectedDepartment.name}</h2>
                <div className="steps">
                    {steps.map((step, index) => {
                        const IconComponent = iconMap[step.icon];
                        return (
                            <div
                                key={step.id}
                                className={`step-card ${index % 2 === 0 ? "left" : "right"}`}
                            >
                                <div className="step-icon">{IconComponent ? <IconComponent /> : step.icon}</div>
                                <div className="step-content">
                                    <div className="step-number">{step.id}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <div className="step-duration">{step.duration}</div>
                                    <div className="step-details">
                                        {step.details.map((detail, idx) => (
                                            <span key={idx} className="detail-item">{detail}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="steps-container2">
                <div className="dept-panel">
                    <div className="dept-chip">
                        <span className="dot"></span>
                        <span className="dept-name">{selectedDepartment.name}</span>
                    </div>
                    <h2 className="dept-heading">Department Overview</h2>
                    <p className="dept-desc">{selectedDepartment.description}</p>

                    <div className="dept-meta">
                        <div className="meta-item">
                            <span className="meta-label">Total Steps</span>
                            <span className="meta-value">{steps.length}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Key Roles</span>
                            <span className="meta-value">{selectedDepartment.roles.length}</span>
                        </div>
                    </div>

                    <h3 className="roles-title">Key Roles</h3>
                    <div className="roles-grid">
                        {selectedDepartment.roles.map((role, index) => (
                            <div key={index} className="role-pill">
                                <FaCheckCircle className="role-icon" />
                                <span>{role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSteps;