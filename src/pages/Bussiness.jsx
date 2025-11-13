import React, { useEffect, useState } from "react";
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
import phone from '../assets/phone.svg';
import arrright from '.././assets/arrow_right.svg';
import arrleft from '.././assets/arrow_left.svg';

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

    // Default to 'web-development' if dept is not found
    const selectedDepartment = departments.find(d => d.id === dept) ||
        departments.find(d => d.id === 'web-development') || {
        id: 'web-development',
        name: 'Web Development',
        description: 'Web Development involves building and maintaining websites and web applications to ensure optimal performance and user experience.',
        roles: [
            { title: 'Frontend Developer', description: '' },
            { title: 'Backend Developer', description: '' },
            { title: 'UI/UX Designer', description: '' },
            { title: 'DevOps Engineer', description: '' }
        ]
    };
    const [selectedRole, setSelectedRole] = useState(selectedDepartment?.roles[0] || null);

    // Handle role click to update selected role
    const handleRoleClick = (role) => {
        setSelectedRole(role);
    };
    useEffect(() => {
        setSelectedRole(selectedDepartment.roles[0] || null);
    }, [dept, selectedDepartment]);

    // Debugging logs
    console.log("Received dept:", dept);
    console.log("Departments array:", departments);
    console.log("Selected department:", selectedDepartment);
    console.log("Selected role:", selectedRole);

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
                                <div
                                    className="step-icon"
                                >
                                    {IconComponent ? <IconComponent /> : step.icon}
                                    {/* <img src={phone} alt="phone" className="phone-img" /> */}
                                </div>

                                <div className={`step-content ${index % 2 === 0 ? 'first-step' : 'second-step'}`}>
                                    <div className={`step-number ${index % 2 === 0 ? 'one-step' : 'two-step'}`}>{step.id}</div>
                                    <h3 className="step-title-clt">{step.title}</h3>
                                    <p className="step-des-clt">{step.description}</p>
                                    <div className="step-duration">{step.duration}</div>
                                    <div className="step-details">
                                        {step.details.map((detail, idx) => (
                                            <span key={idx} className="detail-item">{detail}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className={`svg-container ${index % 2 === 0 ? 'left' : 'right'}`}>
                                    <img src={`${index % 2 === 0 ? arrleft : arrright}`} alt="decorative" className={`decorative-img ${index === 0 ? 'none' : ''}`} />
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
                        {/* <div className="meta-item">
                            <span className="meta-label">Total Steps</span>
                            <span className="meta-value">{steps.length}</span>
                        </div> */}
                        {/* <div className="meta-item">
                            <span className="meta-label">Key Roles</span>
                            <span className="meta-value">{selectedDepartment.roles.length}</span>
                        </div> */}
                        <div className="stat-item">
                            <span className="number">{steps.length}</span>
                            <span className="label">Total Steps</span>
                        </div>
                        <div className="stat-item">
                            <span className="number1">{selectedDepartment.roles.length}</span>
                            <span className="label">Key Roles</span>
                        </div>
                    </div>

                    <h3 className="roles-title">Key Roles</h3>
                    <div className="roles-grid">
                        {selectedDepartment.roles.map((role, index) => (
                            <div key={index} className={`role-pill ${selectedRole?.title === role.title ? 'active' : ''}`} onClick={() => handleRoleClick(role)}>
                                <span>{role.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="spacer-desc">
                    {/* <p className="role-description">
                        " {selectedRole ? selectedRole.description : ''} "
                    </p> */}
                    <div className="content-clt">
                        <h2>{selectedRole ? selectedRole.title : ""}</h2>
                        <ul>
                            {selectedRole?.checklist.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p>{selectedRole ? selectedRole.note : ""}</p>
                    </div>
                </div>
            </div>

            {/* <div className="card">
                <div className="stats">
                    <div className="stat-item">
                        <span className="number">6</span>
                        <span className="label">Total Steps</span>
                    </div>
                    <div className="stat-item">
                        <span className="number">4</span>
                        <span className="label">Key Roles</span>
                    </div>
                </div>
                <div className="roles">
                    <span className="role">Frontend Developer</span>
                    <span className="role">Backend Developer</span>
                    <span className="role">UI/UX Designer</span>
                    <span className="role">DevOps Engineer</span>
                </div>
                <div className="content">
                    <h2>Frontend Developer</h2>
                    <ul>
                        <li>Builds Responsive UI: Using HTML, CSS, and JavaScript frameworks to create brand-consistent layouts.</li>
                        <li>Collaborates: With designers to maintain brand consistency, optimize scalability, and ensure compatibility with debugging tools.</li>
                        <li>Integrate APIs: Supports co-development and rendering processes.</li>
                    </ul>
                    <p>They are responsible for debugging and troubleshooting front-end issues.</p>
                </div>
            </div> */}
        </div>
    );
};

export default BusinessSteps;
