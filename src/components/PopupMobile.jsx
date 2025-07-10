/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import "../styles/PopupMobile.css";
import { GoArrowRight } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

const PopupMobile = () => {
  const [show, setShow] = useState(true);
  const popupContentRef = useRef(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent2, setShowContent2] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [achievementIndex, setAchievementIndex] = useState(0);
  const [horizontalIndex, setHorizontalIndex] = useState(0);
  const [showContent2Box5, setShowContent2Box5] = useState(false);
  const breakpoint = 768;
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  const carouselData = [
    {
      content1: "Meet Our Latest Product",
      content2: "EDIFAI - Your Personalized learning model",
      link:'https://edifai.in/'
    },
    {
      content1: "Join To Innovate",
      content2: "Join Our Tech Team as a MERN Developer",
      link:'https://staciacorp.com/career'
    },
    {
      content1: "Hackathon",
      content2: "Tech Summit 2025",      
      link:'https://staciacorp.com/competition'
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
      title: "Industrial Automation",
      image: "../assets/ProjectPage/Hydrogen Bottle.webp",
      description: "Smart machines and robotics for manufacturing efficiency.",
    },
    {
      title: "CAD Engineering",
      image: "../assets/ProjectPage/Hydrogen Bottle.webp",
      description: "Automated inspection and quality control using cameras.",
    },
    {
      title: "Consultancy and Audit",
      image: "../assets/ProjectPage/Hydrogen Bottle.webp",
      description: "Customized testing systems for R&D and QA processes.",
    },
  ];

  const achievementSlides = [
    {
      title: "Tech Winner",
      image: "../assets/ProjectPage/AI chatbot version.webp",
      description: "Secured 1st place....",
    },
    {
      title: "Top 10 Startup",
      image: "../assets/ProjectPage/AI chatbot version.webp",
      description: "Recognized by TN ....",
    },
    {
      title: "Best Case Study",
      image: "../assets/ProjectPage/AI chatbot version.webp",
      description:
        "Published in national ....",
    },
  ];

  const horizontalSlides = [
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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAchievementIndex((prev) => prev + 1);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHorizontalIndex((prev) => (prev + 1) % horizontalSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const { content1, content2 } = carouselData[currentIndex];
  const {link} = carouselData[currentIndex]

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
  return (
    show && (
      <div className="mobile-popup" onClick={handleClickOutside}>
        <div className="mobile-popup-content-1" ref={popupContentRef}>
          <div className="mobile-top-container">
            <div className="mobile-heading">Featured</div>
            <button className="mobile-close-btn" onClick={() => setShow(false)}>
              <IoCloseSharp />
            </button>
          </div>

          <div className="mobile-boxes">
            <div className="mobile-col1">

              {/* projects */}
                <div className="mobile-projects"
                  style={{ cursor: "pointer" }}
                  
                >
                  <div className="mobile-project-carousel-container">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={projectIndex}
                        className="mobile-project-slide"
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
                          className="mobile-project-img"
                          onClick={()=>navigate(`/project/Mechanical/Food-Processing/${projectSlides[projectIndex % projectSlides.length].title.split(" ").join('-')}`)}
                        />
                        <div className="mobile-project-details">
                          <p>Projects</p>
                          <p className="mobile-project-title"
                          onClick={()=>navigate(`/project/Mechanical/Food-Processing/${projectSlides[projectIndex % projectSlides.length].title.split(" ").join('-')}`)}
                          >
                            {
                              projectSlides[projectIndex % projectSlides.length]
                                .title
                            }....Learn more
                          </p>
                          {/* <p className="mobile-project-description">
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

              {/* products */}
               <div className="mobile-products">
                  <div className="mobile-horizontal-carousel-container">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={horizontalIndex}
                        className="mobile-horizontal-slide"
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <img
                          src={horizontalSlides[horizontalIndex].image}
                          className="mobile-horizontal-img"
                          alt={horizontalSlides[horizontalIndex].title}
                          onClick={()=>navigate(`/products/Mechanical/Agri-and-Food-Processing-SPM/${horizontalSlides[horizontalIndex].title?.split(' ').join("-")}`)}
                        />
                        <div className="mobile-horizontal-details">
                          <p>Products</p>
                          <p className="mobile-horizontal-title" 
                          onClick={()=>navigate(`/products/Mechanical/Agri-and-Food-Processing-SPM/${horizontalSlides[horizontalIndex].title?.split(' ').join("-")}`)}
                          >
                            {horizontalSlides[horizontalIndex].title}...Learn more
                          </p>
                          {/* <p className="mobile-horizontal-description">
                            {horizontalSlides[horizontalIndex].description}
                          </p> */}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
            </div>

            <div className="mobile-col2">
              {/* acheivements */}
              <div  className="mobile-achievements"
                onClick={() =>
                  navigate("/case-study/single-caseStudy/Case-Study-1")
                }
              >
                <div className="mobile-acheivements-carousel-container">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={achievementIndex}
                      className="mobile-acheivements-slide"
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
                        className="mobile-project-img"                       
                      />
                      <div className="mobile-acheivements-details">
                        <p>Achievements</p>
                        <p className="mobile-acheivements-title">
                          {
                            achievementSlides[
                              achievementIndex % achievementSlides.length
                            ].title
                          } ....Learn more
                        </p>
                        {/* <p className="mobile-acheivements-description">
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

              {/* news */}
              <div className="mobile-news">
                <div className="mobile-news-content">
                  <p className="mobile-box" style={{fontSize:"10px"}}>News</p>
                  <div className="mobile-carousel-container">
                    <div className="mobile-carousel-slide">
                      <div className="mobile-news-content1" style={{fontSize:"15px"}}>
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
                        <div className="mobile-news-content2" style={{fontSize:'15px'}}>
                          <Typewriter
                            key={content2 + currentIndex}
                            options={{ delay: 40, autoStart: true }}
                            onInit={(typewriter) => {
                              typewriter.typeString(content2).start();
                            }}
                          />
                        </div>
                      )}                     
                    </div>
                  </div>
                  <div className="mobile-go-button" style={{cursor:'pointer'}}>
                    <a href={`${link}`} target="__blank"><GoArrowRight style={{ color: "#565656" }} size={18}/></a>
                  </div>
                </div>
              </div>
            </div>

            {/* services */}
            <div  className="mobile-services"
              style={{ cursor: "pointer" }}              
            >
              <div className="mobile-project-carousel-container">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={serviceIndex}
                    className="mobile-project-slide"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <img
                      src={
                        serviceSlides[serviceIndex % serviceSlides.length].image
                      }
                      className="mobile-project-img"       
                      onClick={()=>navigate(`/services/Mechanical/Industrial-Automation/${serviceSlides[serviceIndex % serviceSlides.length].title?.split(' ').join("-")}`)}               
                    />
                    <div className="mobile-project-details">
                      <p>Services</p>
                      <p className="mobile-project-title"
                      onClick={()=>navigate(`/services/Mechanical/Industrial-Automation/${serviceSlides[serviceIndex % serviceSlides.length].title?.split(' ').join("-")}`)}  >
                        {
                          serviceSlides[serviceIndex % serviceSlides.length]
                            .title
                        }....Learn more
                      </p>

                      {/* <p className="mobile-project-description">
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




        <div className="mobile-buttons">
                <div className="mobile-button1" onClick={() => {
                navigate("/");
                setShow(false);
              }}>Stay in Stacia Corp</div>

                <div className="mobile-button2"> <a
                href="https://staciatech.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Switch to Stacia Tech
              </a></div>
        </div>       
        </div>
      </div>
    )
  );
};

export default PopupMobile;
