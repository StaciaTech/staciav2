import React, { useState, useEffect, useRef } from "react";
import "../styles/sideBar.css";
import "../styles/mobileLeadModal.css"; // <-- make sure this path matches where you put the CSS below
import { useNavigate, Link } from "react-router-dom";
import DarkLogo from "../assets/sideBarStaciaLogoLite.svg";
import MoibileNav from "../assets/MobileNav.png";
import ContactIcon from "../assets/ContactIcon.svg";
import Cancle from "../assets/close-delete-remove-3_svgrepo.com.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import StaciaLogo from "../assets/Stacia Monogram.svg";
import { useAnimation, motion } from "framer-motion";
import StaciaLogoText from "../assets/Stacia logo.svg";
import five from "../assets/68.svg";
import gsap from "gsap";

import LeadModalThree from "./LeadModalThree";
import MobileLeadModal from "./MobileLeadModal";
import StaciaContactUsLogo from "../assets/611.svg";

function SideBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [logo, setLogo] = useState(StaciaLogo);
  const [text, setText] = useState("Innovating for you");
  const controls = useAnimation();
  const animationStarted = useRef(false);
  const textRef = useRef(null);
  const navigateTo = useNavigate();

  // mobile detection
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : true
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogo((p) => (p === StaciaLogo ? five : StaciaLogo));
      setText((prev) =>
        prev === "Innovating for you" ? `Celebrating 6th Anniversary` : "Innovating for you"
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

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

  useEffect(() => {
    const letters = textRef.current?.querySelectorAll("span");
    if (!letters) return;
    gsap.fromTo(letters, { opacity: 0 }, { opacity: 1, stagger: 0.1, duration: 0.5 });
    const timeout = setTimeout(() => {
      gsap.fromTo(letters, { opacity: 1 }, { opacity: 1, stagger: -0.1, duration: 0.2 });
    }, 4200);
    return () => clearTimeout(timeout);
  }, [text]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // toggle body no-scroll when dropdown OR modal open
  useEffect(() => {
    const shouldLock = showDropdown || showContact;
    if (shouldLock) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [showDropdown, showContact]);

  const flipVariants = {
    hidden: { rotateY: 90, opacity: 0, transition: { duration: 0.5 } },
    visible: { rotateY: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const NavItems = [
    { title: "Services", subRouts: false, Mainpath: "/services" },
    { title: "Products", subRouts: false, Mainpath: "/products" },
    { title: "Projects", subRouts: false, Mainpath: "/project" },
    {
      title: "Resources",
      subRouts: true,
      Mainpath: "",
      subItems: [
        { title: "Articles", path: "/article" },
        { title: "CaseStudy", path: "/case-study" },
      ],
    },
    { title: "Careers", subRouts: false, Mainpath: "/career" },
    { title: "About", subRouts: false, Mainpath: "/about" },
    { title: "Competition", subRouts: false, Mainpath: "/competition" },
    { title: "Events", subRouts: false, Mainpath: "/events" },
    { title: "News Room", subRouts: false, Mainpath: "/news" },
    { title: "Media Kit", subRouts: false, Mainpath: "/media-kit" },
    { title: "Partnerships", subRouts: false, Mainpath: "/partners" },
  ];

  const [selectedItem] = useState({
    id: "default-contact",
    title: "",
    oneLine: "Tell us how we can help — product, services or partnership.",
    image: StaciaContactUsLogo,
  });

  const handleLeadSubmit = (formData) => {
    console.log("Sidebar lead submitted:", formData, selectedItem);
    // optionally close after submit:
    // setShowContact(false);
  };

  return (
    <div className={`sidebar-container ${showNavbar ? "show" : "hide"}`} style={{
      backgroundColor: showDropdown ? "#fff" : "#0D0225",
      height: showNavbar && showContact ? "100vh" : undefined
    }}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", paddingTop: "10px", paddingBottom: "10px" }}>
            <div onClick={() => setShowDropdown(!showDropdown)} style={{ display: showDropdown ? "none" : "block" }}>
              <img src={MoibileNav} alt="menu" />
            </div>

            <div style={{ marginLeft: "10px" }} onClick={() => navigateTo("/")}>
              {showDropdown ? (
                <img src={DarkLogo} alt="logo" />
              ) : (
                <Link to={"/"} onClick={() => window.scrollTo(0, 0)} style={{ marginRight: "2.5rem", position: "relative", display: "flex", alignItems: "center", columnGap: "0.75rem" }}>
                  <motion.img key={logo} src={logo} alt="Stacia Logo" className="logo-rotate" style={{ height: "2.5rem", width: "2.5rem", objectFit: "contain" }} initial="hidden" animate="visible" exit="hidden" variants={flipVariants} />
                  <div style={{ marginBottom: "0.3rem" }}>
                    <img src={StaciaLogoText} alt="Stacia Corp" className="nav-logo1" style={{ width: "90%", height: "100%", objectFit: "contain" }} />
                    <div className="nav-logo-text1" ref={textRef}>
                      {text.split("").map((letter, i) => (<span key={i}>{letter}</span>))}
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            {showDropdown ? (
              <div onClick={() => setShowDropdown(false)}><img src={Cancle} alt="close" style={{ height: "25px" }} /></div>
            ) : (
              <div>
                <img src={ContactIcon} alt="contact" style={{ height: "25px", cursor: "pointer" }} onClick={() => setShowContact(true)} />

                {/* choose mobile panel on mobile, full LeadModalThree on desktop */}
                {isMobile ? (
                  <MobileLeadModal isOpen={showContact} onClose={() => setShowContact(false)} item={selectedItem} onSubmit={handleLeadSubmit} />
                ) : (
                  <LeadModalThree isOpen={showContact} onClose={() => setShowContact(false)} item={selectedItem} onSubmit={handleLeadSubmit} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dropdown Nav Items */}
      <div style={{ display: showDropdown ? "block" : "none", maxHeight: "100vh", overflowY: "auto" }}>
        {NavItems.map((MainNav, i) => (
          <MobileNavContainer key={i} setActiveDropdown={setActiveDropdown} activeDropdown={activeDropdown} MainNav={MainNav} i={i} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;

const MobileNavContainer = ({ MainNav, i, setActiveDropdown, activeDropdown }) => {
  const navigateTo = useNavigate();
  return (
    <div>
      <div className="side-bar-item-containers" onClick={() => { if (!MainNav.subRouts) { navigateTo(MainNav.Mainpath); window.scrollTo(0, 0); } }}>
        <div className="side-bar-items">{MainNav.title}</div>
        <span onClick={(e) => { e.stopPropagation(); if (MainNav.subRouts) setActiveDropdown(activeDropdown === i ? null : i); }}>
          {MainNav.subRouts && (activeDropdown === i ? <IoIosArrowUp /> : <IoIosArrowDown />)}
        </span>
      </div>

      {activeDropdown === i && (
        <div>
          {MainNav.subItems?.map((eachitem, idx) => (
            <div key={idx} className="sub-side-bar-items" onClick={() => { navigateTo(eachitem.path); window.scrollTo(0, 0); }}>
              {eachitem.title}
            </div>
          ))}
        </div>
      )}

      <div className="horizontal-line" />
    </div>
  );
};
