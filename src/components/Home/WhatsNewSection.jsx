// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "../../styles/Home/WhatsNewSection.css";

// import { BiSolidNews } from "react-icons/bi";
// import { MdMiscellaneousServices } from "react-icons/md";
// import { AiOutlineProject } from "react-icons/ai";

// const WhatsNewSection = () => {
//   const [activeTab, setActiveTab] = useState("products");
//   const [isVisible, setIsVisible] = useState(false);

//   // Data for different categories
//   const whatsNewData = {
//     products: [
//       {
//         id: 1,
//         title: "Onedril (SSM) - Advanced Agricultural Solution",
//         description:
//           "Revolutionary Smart Soil Management system that optimizes crop yield through AI-powered soil analysis and precision farming techniques.",
//         image: "/assets/ProductPage/onedrillssm.webp",
//         category: "Agriculture Technology",
//         date: "2024-01-15",
//         status: "New Launch",
//         features: [
//           "AI-Powered Analysis",
//           "Precision Farming",
//           "Real-time Monitoring",
//         ],
//       },
//       {
//         id: 2,
//         title: "Hydration Tracking (G-sensor)",
//         description:
//           "Next-generation hydration monitoring system using advanced G-sensor technology for health and wellness applications.",
//         image: "/assets/ProductPage/Default.webp",
//         category: "Health Technology",
//         date: "2024-02-20",
//         status: "Beta Testing",
//         features: [
//           "G-Sensor Technology",
//           "Health Monitoring",
//           "Mobile Integration",
//         ],
//       },
//       {
//         id: 3,
//         title: "Edifai - Business Simplification Platform",
//         description:
//           "Comprehensive business management platform that streamlines operations and enhances productivity through intelligent automation.",
//         image: "/assets/New Product Development.webp",
//         category: "Business Solutions",
//         date: "2024-03-10",
//         status: "Coming Soon",
//         features: [
//           "Process Automation",
//           "Data Analytics",
//           "Team Collaboration",
//         ],
//       },
//     ],
//     projects: [
//       {
//         id: 1,
//         title: "Smart City Infrastructure Project",
//         description:
//           "Developing integrated IoT solutions for smart city management including traffic control, waste management, and energy optimization.",
//         image: "/assets/CaseStudy/ChilliBannerImage.webp",
//         category: "Smart Cities",
//         date: "2024-01-05",
//         status: "In Progress",
//         client: "Municipal Corporation",
//         duration: "12 months",
//       },
//       {
//         id: 2,
//         title: "Sustainable Energy Grid",
//         description:
//           "Creating renewable energy management systems for efficient power distribution and storage in urban environments.",
//         image: "/assets/CaseStudy/ElectronicBanner.webp",
//         category: "Renewable Energy",
//         date: "2024-02-15",
//         status: "Planning Phase",
//         client: "Energy Department",
//         duration: "18 months",
//       },
//       {
//         id: 3,
//         title: "Agricultural Automation Platform",
//         description:
//           "Comprehensive automation solution for modern farming including crop monitoring, irrigation control, and yield prediction.",
//         image: "/assets/CaseStudy/MandiBanner.webp",
//         category: "Agricultural Tech",
//         date: "2024-03-01",
//         status: "Research & Development",
//         client: "Agricultural Ministry",
//         duration: "24 months",
//       },
//     ],
//     services: [
//       {
//         id: 1,
//         title: "AI-Powered Business Intelligence",
//         description:
//           "Advanced analytics and business intelligence services using machine learning to drive data-driven decision making.",
//         image: "/assets/Article/ascendent.webp",
//         category: "Artificial Intelligence",
//         date: "2024-01-20",
//         status: "Available Now",
//         pricing: "Custom Quote",
//         features: [
//           "Predictive Analytics",
//           "Real-time Insights",
//           "Custom Dashboards",
//         ],
//       },
//       {
//         id: 2,
//         title: "Cloud Migration Services",
//         description:
//           "Seamless migration to cloud infrastructure with enhanced security, scalability, and cost optimization.",
//         image: "/assets/Article/nanostructured.webp",
//         category: "Cloud Solutions",
//         date: "2024-02-10",
//         status: "Available Now",
//         pricing: "Starting at $5,000",
//         features: ["Zero Downtime", "Security First", "24/7 Support"],
//       },
//       {
//         id: 3,
//         title: "IoT Development & Integration",
//         description:
//           "Complete IoT solutions from device development to cloud integration for smart business operations.",
//         image: "/assets/case2.2.webp",
//         category: "Internet of Things",
//         date: "2024-03-05",
//         status: "Available Now",
//         pricing: "Project Based",
//         features: ["Custom Hardware", "Cloud Integration", "Mobile Apps"],
//       },
//     ],
//   };

//   // Intersection Observer for animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const element = document.querySelector(".whats-new-section");
//     if (element) {
//       observer.observe(element);
//     }

//     return () => {
//       if (element) {
//         observer.unobserve(element);
//       }
//     };
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "New Launch":
//       case "Available Now":
//         return "#4CAF50";
//       case "Beta Testing":
//       case "In Progress":
//         return "#FF9800";
//       case "Coming Soon":
//       case "Planning Phase":
//         return "#2196F3";
//       case "Research & Development":
//         return "#9C27B0";
//       default:
//         return "#757575";
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   return (
//     <section className="whats-new-section" id="whats-new">
//       <div className="whats-new-container">
//         {/* Header */}
//         <motion.div
//           className="whats-new-header"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="events-hosted-title">What's New at Stacia Corp</h2>
//           <p className="whats-new-subtitle">
//             Discover our latest innovations, groundbreaking projects, and
//             cutting-edge services
//           </p>
//         </motion.div>

//         {/* Tab Navigation */}
//         <motion.div
//           className="whats-new-tabs"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <button
//             className={`tab-button ${activeTab === "products" ? "active" : ""}`}
//             onClick={() => setActiveTab("products")}
//           >
//             <span className="tab-icon">
//               <BiSolidNews />
//             </span>
//             <span className="tab-text">New Products</span>
//           </button>
//           <button
//             className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
//             onClick={() => setActiveTab("projects")}
//           >
//             <span className="tab-icon">
//               <AiOutlineProject />
//             </span>
//             <span className="tab-text">Projects</span>
//           </button>
//           <button
//             className={`tab-button ${activeTab === "services" ? "active" : ""}`}
//             onClick={() => setActiveTab("services")}
//           >
//             <span className="tab-icon">
//               <MdMiscellaneousServices />
//             </span>
//             <span className="tab-text">Services</span>
//           </button>
//         </motion.div>

//         {/* Content Grid */}
//         <motion.div
//           className="whats-new-content"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <div className="content-grid">
//             {whatsNewData[activeTab].map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 className="whats-new-card"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={
//                   isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
//                 }
//                 transition={{ duration: 0.6, delay: 0.1 * index }}
//                 whileHover={{ y: -5, scale: 1.02 }}
//               >
//                 <div className="card-image-container">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="card-image"
//                     loading="lazy"
//                   />
//                   <div
//                     className="card-status"
//                     style={{ backgroundColor: getStatusColor(item.status) }}
//                   >
//                     {item.status}
//                   </div>
//                   <div className="card-category">{item.category}</div>
//                 </div>

//                 <div className="card-content">
//                   <h3 className="card-title">{item.title}</h3>
//                   <p className="card-description">{item.description}</p>

//                   <div className="card-meta">
//                     <span className="card-date">{formatDate(item.date)}</span>
//                     {item.pricing && (
//                       <span className="card-pricing">{item.pricing}</span>
//                     )}
//                     {item.client && (
//                       <span className="card-client">Client: {item.client}</span>
//                     )}
//                     {item.duration && (
//                       <span className="card-duration">
//                         Duration: {item.duration}
//                       </span>
//                     )}
//                   </div>

//                   {item.features && (
//                     <div className="card-features">
//                       {item.features.map((feature, idx) => (
//                         <span key={idx} className="feature-tag">
//                           {feature}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           className="whats-new-cta"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <h3>Ready to Explore More?</h3>
//           <p>
//             Get in touch with our team to learn more about our latest
//             innovations
//           </p>
//           <div className="cta-buttons">
//             <button
//               className="cta-button primary"
//               onClick={() => (window.location.href = "/")}
//             >
//               Contact Us
//             </button>
//             <button
//               className="cta-button secondary"
//               onClick={() => {
//                 activeTab === "products"
//                   ? (window.location.href = "/products")
//                   : activeTab === "projects"
//                   ? (window.location.href = "/project")
//                   : (window.location.href = "/services");
//               }}
//             >
//               View All
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhatsNewSection;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/Home/WhatsNewSection.css";
import LeadModal from "../LeadModal";
import LeadModalTwo from "../LeadModalTwo";
import { FaChevronRight } from "react-icons/fa";

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
          "Revolutionary Smart Soil Management system that optimizes crop yield through AI-powered soil analysis and precision farming techniques.",
        image: "/assets/ProductPage/onedrillssm.webp",
        category: "Agriculture Technology",
        date: "2024-01-15",
        status: "New Launch",
        features: [
          "AI-Powered Analysis",
          "Precision Farming",
          "Real-time Monitoring",
        ],
        action: "Buy Now",
        type: "product",
      },
      {
        id: 2,
        title: "Hydration Tracking (G-sensor)",
        description:
          "Next-generation hydration monitoring system using advanced G-sensor technology for health and wellness applications.",
        image: "/assets/ProductPage/Default.webp",
        category: "Health Technology",
        date: "2024-02-20",
        status: "Beta Testing",
        features: [
          "G-Sensor Technology",
          "Health Monitoring",
          "Mobile Integration",
        ],
        action: "Pre-order",
        type: "product",
      },
      {
        id: 3,
        title: "Edifai - Business Simplification Platform",
        description:
          "Comprehensive business management platform that streamlines operations and enhances productivity through intelligent automation.",
        image: "/assets/New Product Development.webp",
        category: "Business Solutions",
        date: "2024-03-10",
        status: "Coming Soon",
        features: [
          "Process Automation",
          "Data Analytics",
          "Team Collaboration",
        ],
        action: "Get Quote",
        type: "product",
      },
    ],
    projects: [
      {
        id: 1,
        title: "Smart City Infrastructure Project",
        description:
          "Developing integrated IoT solutions for smart city management including traffic control, waste management, and energy optimization.",
        image: "/assets/CaseStudy/ChilliBannerImage.webp",
        category: "Smart Cities",
        date: "2024-01-05",
        status: "In Progress",
        client: "Municipal Corporation",
        duration: "12 months",
        action: "View Project",
        type: "project",
      },
      {
        id: 2,
        title: "Sustainable Energy Grid",
        description:
          "Creating renewable energy management systems for efficient power distribution and storage in urban environments.",
        image: "/assets/CaseStudy/ElectronicBanner.webp",
        category: "Renewable Energy",
        date: "2024-02-15",
        status: "Planning Phase",
        client: "Energy Department",
        duration: "18 months",
        action: "Learn More",
        type: "project",
      },
      {
        id: 3,
        title: "Agricultural Automation Platform",
        description:
          "Comprehensive automation solution for modern farming including crop monitoring, irrigation control, and yield prediction.",
        image: "/assets/CaseStudy/MandiBanner.webp",
        category: "Agricultural Tech",
        date: "2024-03-01",
        status: "Research & Development",
        client: "Agricultural Ministry",
        duration: "24 months",
        action: "Explore",
        type: "project",
      },
    ],
    services: [
      {
        id: 1,
        title: "AI-Powered Business Intelligence",
        description:
          "Advanced analytics and business intelligence services using machine learning to drive data-driven decision making.",
        image: "/assets/Article/ascendent.webp",
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
      },
      {
        id: 2,
        title: "Cloud Migration Services",
        description:
          "Seamless migration to cloud infrastructure with enhanced security, scalability, and cost optimization.",
        image: "/assets/Article/nanostructured.webp",
        category: "Cloud Solutions",
        date: "2024-02-10",
        status: "Available Now",
        pricing: "Starting at $5,000",
        features: ["Zero Downtime", "Security First", "24/7 Support"],
        action: "Book Now",
        type: "service",
      },
      {
        id: 3,
        title: "IoT Development & Integration",
        description:
          "Complete IoT solutions from device development to cloud integration for smart business operations.",
        image: "/assets/case2.2.webp",
        category: "Internet of Things",
        date: "2024-03-05",
        status: "Available Now",
        pricing: "Project Based",
        features: ["Custom Hardware", "Cloud Integration", "Mobile Apps"],
        action: "Contact Us",
        type: "service",
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

  const handleActionClick = (item) => {
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
              >
                <div className="card-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                    loading="lazy"
                  />
                  <div className={`card-status ${getStatusClass(item.status)}`}>
                    {item.status}
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-category">{item.category}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>

                  <div className="card-meta">
                    <span className="card-date">{formatDate(item.date)}</span>
                    {item.pricing && (
                      <span className="card-pricing">{item.pricing}</span>
                    )}
                  </div>

                  {item.features && (
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
                  )}

                  {/* Action Button */}
                  <div className="card-action">
                    <button
                      className="action-button"
                      onClick={() => handleActionClick(item)}
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
      <LeadModalTwo
        isOpen={showModal}
        onClose={closeModal}
        item={selectedItem}
        onSubmit={handleModalSubmit}
      />
    </section>
  );
};

export default WhatsNewSection;
