import React, { useEffect, useRef, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import Star from "../components/Star";
import StaciaLogo from "../assets/Stacia Monogram.svg";
import StaciaLogoText from "../assets/Stacia logo.svg";
import five from "../assets/5yr logo.svg";
import ContactIcon from "../assets/ContactIcon.svg";
import { NavLink, Link } from "react-router-dom";
import MobileNav from "../assets/MobileNav.png";
import WhatsNew from "./WhatsNew";
import Modal from "react-modal";
import Contact from "./Contact";
import { useAnimation, motion } from "framer-motion";
import gsap from "gsap";
import NavProductComp from "./ReUsableComp/NavProductComp";
import ServcieNavComp from "./Services/ServcieNavComp";
import AboutDropDown from "./AboutDropDown";
import ResourceDropDown from "./Resource/ResourceDropDown";
import ProjectDropdown from "./ProjectDropdown";
import Sitemap from "../components/Sitemap";
import Advertisement from "./ReUsableComp/Advertisement";

function NavBar() {
  const [openWhatsNew, setOpenWhatsNew] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [logo, setLogo] = useState(StaciaLogo);
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const animationStarted = useRef(false);
  const [text, setText] = useState("Innovating for you");
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null); // Unified dropdown state
  const navAreaRef = useRef(null); // Ref for the entire nav area
  const [isOpenRes, setIsOpenRes] = useState(false); // For Resource click toggle
  const dropdownRef = useRef(null); // For Resource click outside detectionA
  const [showAdd, setShowAdd] = useState(true);

  const isHomepage = location.pathname === "/";
  useEffect(() => {
    if (isHomepage) {
      setShowAdd(true);
    }
  }, []);

  const closeHandle = () => {
    setShowContact(false);
  };

  // Handle scroll for navbar hide/show
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation controls for scroll-based effects
  useEffect(() => {
    if (scrollY > 0) {
      if (!animationStarted.current) {
        animationStarted.current = true;
        controls.start("hidden");
      }
    } else {
      if (animationStarted.current) {
        animationStarted.current = false;
        controls.start("visible");
      }
    }
  }, [scrollY, controls]);

  // eslint-disable-next-line no-unused-vars
  const letterVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.5,
      },
    },
  };

  // eslint-disable-next-line no-unused-vars
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const flipVariants = {
    hidden: {
      rotateY: 90,
      opacity: 0,
      transition: { duration: 0.5 },
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Logo and text animation interval
  useEffect(() => {
    const interval = setInterval(() => {
      setLogo((prevLogo) => (prevLogo === StaciaLogo ? five : StaciaLogo));
      setText((prevText) =>
        prevText === "Innovating for you"
          ? `Celebrating 5th Anniversary`
          : "Innovating for you"
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Handle click outside for Resource dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenRes(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // GSAP animation for text
  const textRef = useRef(null);
  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
      }
    );

    const timeout = setTimeout(() => {
      gsap.fromTo(
        letters,
        { opacity: 1 },
        {
          opacity: 0,
          stagger: -0.1,
          duration: 0.2,
        }
      );
    }, 4200);

    return () => clearTimeout(timeout);
  }, [text]);

  // Handle navbar hide/show on scroll
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (activeDropdown || openWhatsNew) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, activeDropdown, openWhatsNew]);

  // Resource dropdown click toggle
  const toggleDropdown = () => {
    setIsOpenRes((prevState) => !prevState);
  };

  // Modal styles for Contact
  const ModelStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgb(13, 2, 37,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    },
    content: {
      width: "70%",
      background: "none",
      outline: "none",
      border: "none",
      minHeight: "80%",
      inset: 0,
      margin: "auto",
      position: "relative",
      borderRadius: "1rem",
      padding: "3rem 5rem",
      boxSizing: "border-box",
    },
  };

  // Determine if Resource should be active based on route
  const isResourceActive =
    location.pathname.startsWith("/case-study") ||
    location.pathname.startsWith("/article");

  return (
    <div className={`navbar ${showNavbar ? "show" : "hide"}`}>
      {/* Advertisement */}
      {showAdd && <Advertisement setShowAdd={setShowAdd}/>}
      <div className="nav-container">
        <div className="nav-items-container">
          <div className="nav-left">
            <div className="mobile-nav">
              <img src={MobileNav} alt="" />
            </div>
            <Link
              to={"/"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              style={{
                marginRight: "2.5rem",
                position: "relative",
                display: "flex",
                alignItems: "center",
                columnGap: "0.75rem",
              }}
            >
              <motion.img
                key={logo}
                src={logo}
                alt=""
                className="logo-rotate"
                style={{
                  height: "2.5rem",
                  width: "2.5rem",
                  objectFit: "contain",
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={flipVariants}
              />
              <div style={{ marginBottom: "0.3rem" }}>
                <img
                  src={StaciaLogoText}
                  alt="Home"
                  className="nav-logo"
                  style={{ width: "90%", height: "100%", objectFit: "contain" }}
                />
                <div className="nav-logo-text" ref={textRef}>
                  {text.split("").map((letter, i) => (
                    <span key={i}>{letter}</span>
                  ))}
                </div>
              </div>
            </Link>
            <div
              style={{ display: "flex", alignItems: "center" }}
              ref={navAreaRef}
              onMouseLeave={() => setActiveDropdown(null)} // Close dropdowns when leaving nav area
            >
              <Star />
              <NavLink
                to={"/services"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={`nav-items ${
                  activeDropdown === "services" ? "nav-item-active" : ""
                }`}
                onMouseEnter={() => setActiveDropdown("services")}
                aria-expanded={activeDropdown === "services"}
              >
                Services
              </NavLink>
              <NavLink
                to={"/products"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={`nav-items ${
                  activeDropdown === "products" ? "nav-item-active" : ""
                }`}
                onMouseEnter={() => setActiveDropdown("products")}
                aria-expanded={activeDropdown === "products"}
              >
                Products
              </NavLink>
              <NavLink
                to={"/project"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={`nav-items ${
                  activeDropdown === "project" ? "nav-item-active" : ""
                }`}
                onMouseEnter={() => setActiveDropdown("project")}
                aria-expanded={activeDropdown === "project"}
              >
                Projects
              </NavLink>
              <div
                className={`dropdown-name nav-items ${
                  activeDropdown === "resource" ? "nav-item-active" : ""
                } ${isResourceActive ? "active" : ""}`}
                ref={dropdownRef}
                onClick={toggleDropdown}
                onMouseEnter={() => setActiveDropdown("resource")}
                aria-expanded={activeDropdown === "resource"}
              >
                Resource
              </div>
              <NavLink
                to={"/career"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-items"
                onMouseEnter={() => setActiveDropdown(null)} // No dropdown for Careers
              >
                Careers
              </NavLink>
              <NavLink
                to={"/competition"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-items"
                style={{ position: "relative" }}
                onMouseEnter={() => setActiveDropdown(null)} // No dropdown for Competition
              >
                Competition
              </NavLink>
              <NavLink
                to={"/about"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={`nav-items ${
                  activeDropdown === "about" ? "nav-item-active" : ""
                }`}
                onMouseEnter={() => setActiveDropdown("about")}
                aria-expanded={activeDropdown === "about"}
              >
                About
              </NavLink>
              <div
                className={`nav-whats-new-item pointer ${
                  openWhatsNew ? "nav-item-active" : ""
                }`}
                onMouseEnter={() => {
                  setActiveDropdown(null);
                  // setActiveDropdown('whatsnew')
                  setOpenWhatsNew(true);
                }}
                onMouseLeave={() => {
                  setOpenWhatsNew(false);
                }}
                aria-expanded={openWhatsNew}
              >
                What's New
              </div>
            </div>
          </div>
          <div className="nav-right">
            <img
              src={ContactIcon}
              alt=""
              style={{ cursor: "pointer", width: "2rem", height: "2rem" }}
              onClick={() => setShowContact(true)}
            />
            <Modal
              style={ModelStyles}
              isOpen={showContact}
              onRequestClose={closeHandle}
            >
              <Contact closeHandle={closeHandle} />
            </Modal>
          </div>
        </div>
        {openWhatsNew && (
          <div
            className="nav-whatsnew-comp"
            onMouseEnter={() => setOpenWhatsNew(true)}
            onMouseLeave={() => setOpenWhatsNew(false)}
          >
            <WhatsNew handleClose={() => setOpenWhatsNew(false)} />
          </div>
        )}
      </div>

      


      {activeDropdown === "services" && (
        <div
          className="nav-service-comp"
          onMouseEnter={() => setActiveDropdown("services")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <ServcieNavComp handleClose={() => setActiveDropdown(null)} />
        </div>
      )}
      {activeDropdown === "products" && (
        <div
          className="nav-product-comp"
          onMouseEnter={() => setActiveDropdown("products")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <NavProductComp handleClose={() => setActiveDropdown(null)} />
        </div>
      )}
      {activeDropdown === "project" && (
        <div
          className="nav-project-comp"
          onMouseEnter={() => setActiveDropdown("project")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <ProjectDropdown handleClose={() => setActiveDropdown(null)} />
        </div>
      )}
      {activeDropdown === "resource" && (
        <div
          className="nav-resource-comp"
          onMouseEnter={() => setActiveDropdown("resource")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <ResourceDropDown handleClose={() => setActiveDropdown(null)} />
        </div>
      )}
      {activeDropdown === "about" && (
        <div
          className="nav-about-comp"
          onMouseEnter={() => setActiveDropdown("about")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <AboutDropDown handleClose={() => setActiveDropdown(null)} />
        </div>
      )}
    </div>
  );
}

export default NavBar;
