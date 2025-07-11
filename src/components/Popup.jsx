import React, { useEffect, useRef, useState } from "react";
import "../styles/Popup.css";
import { GoArrowRight } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";
import PopupMobile from "./PopupMobile";

function Popup() {
  const [show, setShow] = useState(true);
  const popupContentRef = useRef(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent2, setShowContent2] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [achievementIndex, setAchievementIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const [showContent2Box5, setShowContent2Box5] = useState(false);
  const breakpoint = 768;
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  const carouselData = [
    {
      content1: "Meet Our Latest Product",
      content2: "EDIFAI - Your Personalized learning model",
      link: "https://edifai.in/",
    },
    {
      content1: "Join To Innovate",
      content2: "Join Our Tech Team as a MERN Developer",
      link: "https://staciacorp.com/career",
    },
    {
      content1: "Hackathon",
      content2: "Tech Summit 2025",
      link: "https://staciacorp.com/competition",
    },
  ];

  const projectSlides = [
    // {
    //   title: "AI Chatbot Version",
    //   image: "../assets/ProjectPage/AI chatbot version.webp",
    //   description: "Another version or iteration of an AI chatbot project.",
    // },
    {
      title: "Chili Ladling Machine for Aachi Group",
      image: "../assets/ProjectPage/chilli-lading-machine.webp",
      description: "Artificial intelligence conversational agent project.",
    },
    {
      title: "Precision Slicing Machine",
      image: "../assets/ProjectPage/Precision Slicing Machine.webp",
      description: "Industrial-smart mechanical project.",
    },
    // {
    //   title: "One Drill",
    //   image: "../assets/ProjectPage/one-drill.webp",
    //   description: "Mechanical project focused on a drilling solution.",
    // },
    // {
    //   title: "Hydrogen Bottle",
    //   image: "../assets/ProjectPage/Hydrogen Bottle.webp",
    //   description: "Prototype or project for a hydrogen smart water bottle",
    // },
  ];

  const serviceSlides = [
    {
      title: "SPM",
      image: "/assets/Automobile-or-Automotive-SPM.webp",
      description: "Smart machines and robotics for manufacturing efficiency.",
    },
    {
      title: "Test Rigs",
      image: "/assets/test rig.webp",
      description: "Automated inspection and quality control using cameras.",
    },
    {
      title: "Pick and Place",
      image: "/assets/Machine Drawing.webp",
      description: "Customized testing systems for R&D and QA processes.",
    },
    {
      title: "Vision System",
      image: "/assets/Machine Assembly visualization.webp",
      description: "Customized testing systems for R&D and QA processes.",
    },
     {
      title: "End of Line Automation",
      image: "../assets/ProjectPage/Hydrogen Bottle.webp",
      description: "Customized testing systems for R&D and QA processes.",
    },
  ];

  const achievementSlides = [
    {
      title: "Promising Young Alumni Award 2025 – SVCE",
      image: "/assets/LeaderPage/Promising Young Alumni Award 2025.webp",
      description: "Secured 1st place....",
    },    
    // {
    //   title: "HYDRATION & HYDROGEN",
    //   image: "/assets/LeaderPage/Hydration-Hydrogen.webp",
    //   description: "Published in national ....",
    // },
    {
      title: "Entrepreneur of the Year 2024",
      image: "/assets/LeaderPage/Hydration-Hydrogen.webp",
      description: "Recognized by TN ....",
    }
  ];

  const productSlides = [
    {
      title: "Bailing Machine",
      image: "../assets/ProductPage/BailingMachine.webp",
      description: "A cost-effective ....",
    },
    {
      title: "Chilli Ladling Machine",
      image: "../assets/ProductPage/chilli-lading-machine.webp",
      description: "This remote-operated ....",
    },
    {
      title: "Precision Slicing Machine",
      image: "../assets/ProductPage/Precision Slicing Machine.webp",
      description: "The Precision Slicing ....",
    },
    // {
    //   title: "Spinach Cleaning Machine",
    //   image: "../assets/ProductPage/spinach_cleaning_Machine.webp",
    //   description: "Smart vacuum-based material handling.",
    // },
    {
      title: "Tamarind Breaking machine",
      image: "../assets/ProductPage/Tamarind Breaking machine.webp",
      description: "This Tamarind Breaking....",
    },
  ];

  useEffect(() => {
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [show]);

  useEffect(() => {
    let timeout;
    if (showContent2) {
      timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        setShowContent2(false);
      }, 3000);
    } else {
      timeout = setTimeout(() => {
        setShowContent2(true);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [showContent2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prev) => prev + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAchievementIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProductIndex((prev) => (prev + 1) % productSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { content1, content2 } = carouselData[currentIndex];
  const { link } = carouselData[currentIndex];

  useEffect(() => {
    setShowContent2Box5(false);
  }, [currentIndex]);

  const handleClickOutside = (e) => {
    if (
      popupContentRef.current &&
      !popupContentRef.current.contains(e.target)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);

    // Initial check (for SSR safety)
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return (
    <>
      {isMobile ? (
        <PopupMobile />
      ) : (
        show && (
          <div className="popup" onClick={handleClickOutside}>
            <div className="popup-content" ref={popupContentRef}>
              <div className="top-container">
                <div className="heading">Featured</div>
                  <IoCloseSharp onClick={()=> setShow(false)} />
              </div>

              <div className="boxes">
                <div className="col1">
                  <div className="projects">
                    <div className="project-carousel-container">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={projectIndex}
                          className="project-slide"
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          exit={{ y: "-100%", opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <img
                            src={
                              projectSlides[projectIndex % projectSlides.length]
                                .image
                            }
                            className="project-img"
                            alt={
                              projectSlides[projectIndex % projectSlides.length]
                                .title
                            }
                            onClick={() =>
                              navigate(
                                `/project/Mechanical/Food-Processing/${projectSlides[
                                  projectIndex % projectSlides.length
                                ].title
                                  .split(" ")
                                  .join("-")}`
                              )
                            }
                          />
                          <div className="project-details">
                            <p className="box-heading">Projects</p>
                            <p
                              className="project-title"
                              onClick={() =>
                                navigate(
                                  `/project/Mechanical/Food-Processing/${projectSlides[
                                    projectIndex % projectSlides.length
                                  ].title
                                    .split(" ")
                                    .join("-")}`
                                )
                              }
                            >
                              {
                                projectSlides[
                                  projectIndex % projectSlides.length
                                ].title
                              }
                              ....Learn more
                            </p>
                            {/* <p className="project-description">
                          {
                            projectSlides[projectIndex % projectSlides.length]
                              .description
                          }
                        </p> */}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="services">
                    <div className="project-carousel-container">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={serviceIndex}
                          className="project-slide"
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          exit={{ y: "-100%", opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <img
                            src={
                              serviceSlides[serviceIndex % serviceSlides.length]
                                .image
                            }
                            className="project-img"
                            alt={
                              serviceSlides[serviceIndex % serviceSlides.length]
                                .title
                            }
                            onClick={() =>
                              navigate(
                                `/services/Mechanical/Industrial-Automation/${serviceSlides[
                                  serviceIndex % serviceSlides.length
                                ].title
                                  ?.split(" ")
                                  .join("-")}`
                              )
                            }
                            style={{ cursor: "pointer" }}
                          />
                          <div className="project-details">
                            <p className="box-heading">Services</p>
                            <p
                              className="project-title"
                              onClick={() =>
                                navigate(
                                  `/services/Mechanical/Industrial-Automation/${serviceSlides[
                                    serviceIndex % serviceSlides.length
                                  ].title
                                    ?.split(" ")
                                    .join("-")}`
                                )
                              }
                              style={{ cursor: "pointer" }}
                            >
                              {
                                serviceSlides[
                                  serviceIndex % serviceSlides.length
                                ].title
                              }...Learn More
                            </p>
                            {/* <p className="project-description">
                          {
                            serviceSlides[serviceIndex % serviceSlides.length]
                              .description
                          }
                        </p> */}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <div className="col2">
                  <div className="products">
                    <div className="products-carousel-container">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={productIndex}
                          className="products-slide"
                          initial={{ x: "100%", opacity: 0 }}
                          animate={{ x: "0%", opacity: 1 }}
                          exit={{ x: "-100%", opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <img
                            src={productSlides[productIndex].image}
                            className="products-img"
                            alt={productSlides[productIndex].title}
                            onClick={() =>
                              navigate(
                                `/products/Mechanical/Agri-and-Food-Processing-SPM/${productSlides[
                                  productIndex
                                ].title
                                  ?.split(" ")
                                  .join("-")}`
                              )
                            }
                          />
                          <div className="products-details">
                            <p className="box-heading">Products</p>
                            <p
                              className="products-title"
                              onClick={() =>
                                navigate(
                                  `/products/Mechanical/Agri-and-Food-Processing-SPM/${productSlides[
                                    productIndex
                                  ].title
                                    ?.split(" ")
                                    .join("-")}`
                                )
                              }
                              style={{ cursor: "pointer" }}
                            >
                              {productSlides[productIndex].title}....Learn
                              more
                            </p>
                            {/* <p className="horizontal-description">
                          {productSlides[productIndex].description}
                        </p> */}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <div className="col3">
                  <div
                    className="achievements"
                    onClick={() =>
                      navigate("/case-study/single-caseStudy/Case-Study-1")
                    }
                  >
                    <div className="achievements-carousel-container">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={achievementIndex}
                          className="achievements-slide"
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          exit={{ y: "-100%", opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <img
                            src={
                              achievementSlides[
                                achievementIndex % achievementSlides.length
                              ].image
                            }
                            className="project-img"
                            alt={
                              achievementSlides[
                                achievementIndex % achievementSlides.length
                              ].title
                            }
                          />
                          <div className="achievements-details">
                            <p className="box-heading">Achievements</p>
                            <p
                              className="achievements-title"
                              onClick={() =>
                                navigate(
                                  "/news"
                                )
                              }
                              style={{ cursor: "pointer" }}
                            >
                              {
                                achievementSlides[
                                  achievementIndex % achievementSlides.length
                                ].title
                              }
                              ...Learn More
                            </p>
                            {/* <p className="achievements-description">
                          {
                            achievementSlides[
                              achievementIndex % achievementSlides.length
                            ].description
                          }
                        </p> */}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="news">
                    <div className="news-content">
                      <p className="box-heading">News</p>
                      <div className="news-carousel-container">
                        <div className="carousel-slide">
                          <div className="news-content1">
                            <Typewriter
                              key={content1 + currentIndex}
                              options={{ delay: 40, autoStart: true }}
                              onInit={(typewriter) => {
                                setShowContent2Box5(false); // Reset on init
                                typewriter
                                  .typeString(content1)
                                  .callFunction(() => {
                                    setShowContent2Box5(true); // Show content2 after content1 finishes
                                  })
                                  .start();
                              }}
                            />
                          </div>

                          {showContent2Box5 && (
                            <div className="news-content2">
                              <Typewriter                                
                                key={content2 + currentIndex}
                                options={{ delay: 40, autoStart: true }}
                                onInit={(typewriter) => {
                                  typewriter.typeString(content2).start();
                                }}
                              />
                            </div>
                          )}

                          {/* <div className="box5-content2">
                        <Typewriter
                          key={content2 + currentIndex}
                          options={{ delay: 40, autoStart: true }}
                          onInit={(typewriter) => {
                            typewriter.typeString(content2).start();
                          }}
                        />
                      </div> */}
                        </div>
                      </div>
                      <div className="go-button" >
                        <a href={`${link}`} target="__blank" >
                          <GoArrowRight
                            style={{ color: "#565656"}}
                            size={25}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="buttons">
                <div
                  className="button1"
                  onClick={() => {
                    navigate("/");
                    setShow(false);
                  }}
                >
                  Stay in Stacia Corp
                </div>
                <div className="button2">
                  <a
                    href="https://staciatech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Switch to Stacia Tech
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default Popup;
