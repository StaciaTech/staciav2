import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BiMessageDetail } from 'react-icons/bi';
import { GoArrowDownRight } from 'react-icons/go';
import { FaChartLine, FaWrench } from 'react-icons/fa';
import { GrDocumentPerformance, GrShieldSecurity } from 'react-icons/gr';
import CompanyImage from '../assets/StaciaFavicon.svg';
import LeadModalThree from './LeadModalThree';
import Star from './Star';

const SpecificHeroSection = ({ item }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const openModal = (item) => {
        // e.stopPropagation(); // Prevent event bubbling to card
        setSelectedItem(item);
        setShowModal(true);
    };
    const handleModalSubmit = (formData) => {
        // Handle form submission here
        console.log("Lead captured:", {
            ...formData,
            item: selectedItem,
        });

        // You can integrate with your email service or API here
        // alert("Thank you for your interest! Our team will contact you shortly.");
    };
    console.log(selectedItem, "selescte item");
    const closeModal = () => {
        setShowModal(false);
        setSelectedItem(null);
    };


    const actionsRef = React.useRef(null);
    const handleInquiryClick1 = () => {
        setIsFormVisible(!isFormVisible);
    };

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (actionsRef.current && !actionsRef.current.contains(event.target)) {
    //             setIsFormVisible(false);
    //         }

    //         document.addEventListener('mousedown', handleClickOutside);
    //         return () => document.removeEventListener('mousedown', handleClickOutside);
    //     }
    // }, []);
    return (
        <div>
            <section className="welcome-section">
                <div className="welcome-container">


                    <motion.div
                        className="welcome-visual"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="visual-container">
                            {/* <div className="product-preview" style={{ backgroundColor: "#f5f5f5" }}> */}
                            <img src={item?.imageUrl} className="product-image" loading="lazy" alt="Stacia" />
                            {/* </div> */}

                            {/* <div className="floating-elements">
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
                            </div> */}
                        </div>
                    </motion.div>

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
                                
                                {item?.title}<Star />
                            </motion.h1>
                            <motion.p
                                className="welcome-subtitle"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {item?.subTitle}
                            </motion.p>
                            <motion.p
                                className="welcome-description"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                {item?.oneLine}
                            </motion.p>
                        </div>

                        <motion.div
                            className="welcome-actions"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            ref={actionsRef}
                        >
                            {!isFormVisible && (
                                <motion.button
                                    className="welcome-btn primary"
                                    onClick={() => openModal(item)}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="btn-icon"><BiMessageDetail /></span>
                                    <span className="btn-text">Contact Us</span>
                                    <span className="btn-arrow-idt"><GoArrowDownRight /></span>
                                </motion.button>
                            )}


                        </motion.div>
                  
                        
                    </motion.div>
                </div>
                <LeadModalThree
                    isOpen={showModal}
                    onClose={closeModal}
                    item={selectedItem}
                    onSubmit={handleModalSubmit}
                />
            </section>
        </div>
    );
};

export default SpecificHeroSection;