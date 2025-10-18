import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/Home/WhatsNewSection.css";
import LeadModal from "../LeadModal";
import LeadModalTwo from "../LeadModalTwo";
import { FaChevronRight } from "react-icons/fa";
import LeadModalThree from "../LeadModalThree";

const WhatsNewSection = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Data for different categories
  const whatsNewData = {
    products: [
      {
        id: 1,
        title: "Onedril (SSM) - Advanced Agricultural Solution",
        description:
          "OneDril is a manual, portable seed-sowing machine designed for precise and efficient planting. Capable of handling seeds between 2 to 25mm, it follows the line-sowing principle for uniform crop growth. Ideal for micro and large seeds alike, OneDril’s ergonomic design ensures convenience and accuracy. It empowers farmers with a cost-effective, versatile solution for boosting agricultural productivity.",
        image: "/assets/ProductPage/onedrillssm.webp",
        category: "Agri and Food Processing SPM",
        date: "2024-01-15",
        status: "New Launch",
        features: [
          "AI-Powered Analysis",
          "Precision Farming",
          "Real-time Monitoring",
        ],
        action: "Buy Now",
        type: "product",
        detailed_link:
          "/products/Mechanical/Agri-and-Food-Processing-SPM/Onedril-(SSM)",
      },
      {
        id: 2,
        title: "Hydration Tracking (G-sensor)",
        description:
          "An innovative R&D project designed to measure water levels inside a bottle and track the amount consumed with exceptional accuracy of 10mm. It provides hydration reminders at user-specified or AI-recommended intervals, enhancing hydration habits. This technology integrates advanced sensors for real-time monitoring and ensures precision, making it ideal for personalized hydration management and improving overall wellness",
        image: "/assets/ProductPage/Default.webp",
        category: "Research & Development",
        date: "2024-02-20",
        status: "Beta Testing",
        features: [
          "G-Sensor Technology",
          "Health Monitoring",
          "Mobile Integration",
        ],
        action: "Pre-order",
        type: "product",
        detailed_link:
          "/products/Electronics/Research-&-Development/Hydration-tracking-(G-sensor)",
      },
      {
        id: 3,
        title: "Hydrogen (Smart-water-bottle)",
        description:
          "Hydrogen is an AI-powered smart water bottle that features rapid heating and cooling, hydration tracking with advanced sensors, and personalized reminders for optimal water intake. Its ergonomic squircle design ensures style and comfort, while its innovative technology offers superior functionality. Perfect for on-the-go hydration, it redefines smart drinking solutions with intelligence, performance, and modern aesthetics",
        image: "/assets/ProductPage/Hydrogen-(Smart water bottle).webp",
        category: "Electronics Product Engineering",
        date: "2024-03-10",
        status: "Coming Soon",
        features: [
          "Process Automation",
          "Data Analytics",
          "Team Collaboration",
        ],
        action: "Get Quote",
        type: "product",
        detailed_link:
          "/products/Electronics/Electronics-Product-Engineering-/Hydrogen-(Smart-water-bottle)",
      },
    ],
    projects: [
      {
        id: 1,
        title: "Chilli Ladling Machine",
        description:
          "This remote-operated Chilli Ladling Machine is engineered for efficient handling and ladling of chilies inside solar sheds. Its versatile design allows it to handle other crops like groundnuts and grains, ensuring optimal operation. With enhanced precision and ease of use, this machine reduces labor efforts and maximizes productivity for solar drying and similar agricultural processes.",
        image: "/assets/ProductPage/chilli-lading-machine.webp",
        category: "Agri and Food Processing SPM",
        date: "2024-01-05",
        status: "In Progress",
        client: "Municipal Corporation",
        duration: "12 months",
        action: "View Project",
        type: "project",
        detailed_link:
          "/products/Mechanical/Agri-and-Food-Processing-SPM/Chilli-Ladling-Machine",
      },
      {
        id: 2,
        title: "Stacia Smart Furniture",
        description:
          "Experience the future of home and office living with Smart Furniture. Featuring wireless charging, a built-in beverage heating and cooling system, intelligent lighting, and a retractable arm system for holding laptops or books with a nightlight. It also includes pop-up sockets and AI voice assistance for basic electronic controls like lights and AC. Smart Furniture combines functionality, comfort, and technology to redefine your personal and professional spaces",
        image: "/assets/ProductPage/Smart Furniture.webp",
        category: "Electronics Product Engineering",
        date: "2024-02-15",
        status: "Planning Phase",
        client: "Energy Department",
        duration: "18 months",
        action: "Learn More",
        type: "project",
        detailed_link:
          "/project/Electronics/IoT/Stacia-Smart-Furniture:-Seamless-Integration-of-AI,-Heating,-Charging,-and-Connectivity",
      },
      {
        id: 3,
        title: "Sharadha Store Mobile App",
        description:
          "The Sharadha Store Mobile App is a user-centric e-commerce platform designed to bridge the gap between traditional homemade foods and modern digital shopping experiences. Crafted using Figma, the app offers a seamless interface that allows users to explore, order, and enjoy authentic regional delicacies with ease. The project was completed successfully, with the design repository available on Figma for further reference.",
        image: "/assets/CaseStudy/MandiBanner.webp",
        category: "Technology",
        date: "2024-03-01",
        status: "Research & Development",
        client: "Agricultural Ministry",
        duration: "24 months",
        action: "Explore",
        type: "project",
        detailed_link: "/project/Tech/Agri-Tech/Sharada-Store-Mobile-App",
      },
    ],
    services: [
      {
        id: 1,
        title: "Industrial Automation",
        description:
          "Industrial Automation integrates technologies such as SPMs, precision test rigs, vision inspection systems, and robotic handling units to enhance manufacturing efficiency, accuracy, and safety. It minimizes human intervention, reduces errors, and increases productivity. Custom jigs and fixtures further ensure process stability. Widely used in automotive, electronics, FMCG, and heavy industries, it supports consistent output and scalable production.",
        image: "/assets/2d-drafting.webp",
        category: "Artificial Intelligence",
        date: "2024-01-20",
        status: "Available Now",
        pricing: "Custom Quote",
        features: [
          "Predictive Analytics",
          "Real-time Insights",
          "Custom Dashboards",
        ],
        action: "Get Started",
        type: "service",
        detailed_link: "/services/Mechanical/Industrial-Automation",
      },
      {
        id: 2,
        title: "Electronic Product development",
        description:
          "Product Development transforms a validated prototype into a commercially viable, manufacturable, and scalable product.",
        image: "/assets/Electronics-Product-Design.webp",
        category: "Electronics Product Engineering",
        date: "2024-02-10",
        status: "Available Now",
        pricing: "Starting at $5,000",
        features: ["Zero Downtime", "Security First", "24/7 Support"],
        action: "Book Now",
        type: "service",
        detailed_link:
          "/services/Electronics/Electronics-Product-Engineering-/Product-development",
      },
      {
        id: 3,
        title: "Development Services",
        description:
          "Our Development Services provide end-to-end solutions for building dynamic, high-performance applications and websites. We specialize in full-stack web development, mobile app development, custom software, and API integration. Our team creates scalable, secure systems that deliver exceptional user experiences, from robust backends to intuitive frontends and mobile apps. We use the latest technologies to ensure reliability, functionality, and scalability, helping businesses achieve their goals.",
        image: "/assets/Development-Services.webp",
        category: "Technology",
        date: "2024-03-05",
        status: "Available Now",
        pricing: "Project Based",
        features: ["Custom Hardware", "Cloud Integration", "Mobile Apps"],
        action: "Contact Us",
        type: "service",
        detailed_link: "/services/Tech/Development-Services",
      },
    ],
  };

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(".whats-new-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "New Launch":
      case "Available Now":
        return "#4CAF50";
      case "Beta Testing":
      case "In Progress":
        return "#FF9800";
      case "Coming Soon":
      case "Planning Phase":
        return "#2196F3";
      case "Research & Development":
        return "#9C27B0";
      default:
        return "#757575";
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "New Launch":
      case "Available Now":
        return "new-launch available-now";
      case "Beta Testing":
      case "In Progress":
        return "beta-testing in-progress";
      case "Coming Soon":
      case "Planning Phase":
        return "coming-soon planning-phase";
      case "Research & Development":
        return "research-development";
      default:
        return "default";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleViewAll = () => {
    if (activeTab === "products") {
      window.location.href = "/products";
    } else if (activeTab === "projects") {
      window.location.href = "/project";
    } else if (activeTab === "services") {
      window.location.href = "/services";
    }
  };

  const handleActionClick = (item, e) => {
    e.stopPropagation(); // Prevent event bubbling to card
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

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleCardClick = (item) => {
    if (item.detailed_link) {
      // Use relative path for deployment compatibility
      const baseUrl = window.location.origin;
      const fullUrl = `${baseUrl}${item.detailed_link}`;
      window.open(fullUrl, "_blank");
    }
  };

  return (
    <section className="whats-new-section" id="whats-new">
      <div className="whats-new-container">
        {/* Header */}
        <motion.div
          className="whats-new-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="whats-new-title">What's New</h2>
          <p className="whats-new-subtitle">
            Discover our latest innovations, groundbreaking projects, and
            cutting-edge services
          </p>
        </motion.div>

        {/* Tab Navigation with View All Button */}
        <motion.div
          className="whats-new-tabs-container"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="whats-new-tabs">
            <button
              className={`tab-button ${
                activeTab === "services" ? "active" : ""
              }`}
              onClick={() => setActiveTab("services")}
            >
              <span className="tab-text">Services</span>
            </button>
            <button
              className={`tab-button ${
                activeTab === "products" ? "active" : ""
              }`}
              onClick={() => setActiveTab("products")}
            >
              <span className="tab-text">New Products</span>
            </button>
            <button
              className={`tab-button ${
                activeTab === "projects" ? "active" : ""
              }`}
              onClick={() => setActiveTab("projects")}
            >
              <span className="tab-text">Projects</span>
            </button>
          </div>

          {/* View All Button */}
          <div className="see-more-info" onClick={handleViewAll}>
            See More <FaChevronRight />
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="whats-new-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="content-grid">
            {whatsNewData[activeTab].map((item, index) => (
              <motion.div
                key={item.id}
                className="whats-new-card"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -3 }}
                onClick={() => handleCardClick(item)}
              >
                <div className="card-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                    loading="lazy"
                  />
                  {/* <div className={`card-status ${getStatusClass(item.status)}`}>
                    {item.status}
                  </div> */}
                </div>

                <div className="card-content">
                  <div className="card-category-price">
                    <div className="card-category">{item.category}</div>
                    {/* {item.pricing && (
                      <span className="card-pricing">{item.pricing}</span>
                    )} */}
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <div className="card-meta">
                    {/* <span className="card-date">{formatDate(item.date)}</span> */}
                    {/* {item.pricing && (
                      <span className="card-pricing">{item.pricing}</span>
                    )} */}
                  </div>
                  <p className="card-description">{item.description}</p>

                  {/* {item.features && (
                    <div className="card-features">
                      {item.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                      {item.features.length > 2 && (
                        <span className="feature-tag">
                          +{item.features.length - 2} more
                        </span>
                      )}
                    </div>
                  )} */}

                  {/* Action Button */}
                  <div className="card-action">
                    <button
                      className="action-button"
                      onClick={(e) => handleActionClick(item, e)}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lead Modal */}
      {/* <LeadModal
        isOpen={showModal}
        onClose={closeModal}
        item={selectedItem}
        onSubmit={handleModalSubmit}
      /> */}
      {/* <LeadModalTwo
        isOpen={showModal}
        onClose={closeModal}
        item={selectedItem}
        onSubmit={handleModalSubmit}
      /> */}
      <LeadModalThree
        isOpen={showModal}
        onClose={closeModal}
        item={selectedItem}
        onSubmit={handleModalSubmit}
      />
    </section>
  );
};

export default WhatsNewSection;
