// import React, { useEffect, useRef, useState } from "react";
// import "../styles/navbar.css";
// import Star from "../components/Star";
// import StaciaLogo from "../assets/Stacia Monogram.svg";
// import StaciaLogoText from "../assets/Stacia logo.svg";
// import five from "../assets/5yr logo.svg";
// import ContactIcon from "../assets/ContactIcon.svg";
// import { NavLink, Link } from "react-router-dom";
// import MobileNav from "../assets/MobileNav.png";
// import WhatsNew from "./WhatsNew";
// import Modal from "react-modal";  
// import Contact from "./Contact";
// import { useAnimation, motion } from "framer-motion";
// import gsap from "gsap";
// import NavProductComp from "./ReUsableComp/NavProductComp";
// import ServcieNavComp from "./Services/ServcieNavComp";
// import AboutDropDown from "./AboutDropDown";
// import ResourceDropDown from "./Resource/ResourceDropDown";
// import ProjectDropdown from "./ProjectDropdown";





// function NavBar() {
//   const [openWhatsNew, setOpenWhatsNew] = useState(0);
//   const [showContact, setShowContact] = useState(false);
//   const [logo, setLogo] = useState(StaciaLogo);
//   const controls = useAnimation();
//   const [scrollY, setScrollY] = useState(0);
//   const animationStarted = useRef(false);
//   const [text, setText] = useState("Innovating for you");
//   const closeHandle = () => {
//     setShowContact(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (scrollY > 0) {
//       if (!animationStarted.current) {
//         animationStarted.current = true;
//         // Animate text to disappear from right to left
//         controls.start("hidden");
//       }
//     } else {
//       if (animationStarted.current) {
//         animationStarted.current = false;
//         // Animate text to appear from left to right
//         controls.start("visible");
//       }
//     }
//   }, [scrollY, controls]);

//   const letterVariants = {
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     hidden: {
//       opacity: 0,
//       x: -20,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const containerVariants = {
//     visible: {
//       transition: {
//         staggerChildren: 0.05,
//         staggerDirection: 1,
//       },
//     },
//     hidden: {
//       transition: {
//         staggerChildren: 0.05,
//         staggerDirection: -1,
//       },
//     },
//   };
//   const flipVariants = {
//     hidden: {
//       rotateY: 90,
//       opacity: 0,
//       transition: { duration: 0.5 },
//     },
//     visible: {
//       rotateY: 0,
//       opacity: 1,
//       transition: { duration: 0.5 },
//     },
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setLogo((prevLogo) => (prevLogo === StaciaLogo ? five : StaciaLogo));
//       setText((prevText) =>
//         prevText === "Innovating for you"
//           ? `Celebrating 5th Anniversary`
//           : "Innovating for you"
//       );
//     }, 7000);

//     return () => clearInterval(interval);
//   }, []);

//   const [isOpenRes, setIsOpenRes] = useState(false);
//   const dropdownRef = useRef(null);

//   // Toggle dropdown open/close state
//   const toggleDropdown = () => {
//     setIsOpenRes((prevState) => !prevState); // Toggle between open and closed
//   };
//   // console.log(isOpenRes);

//   // Close the dropdown if a click is detected outside of it
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpenRes(false);
//       }
//     };

//     // Add event listener when the component is mounted
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Remove event listener when the component is unmounted
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const textRef = useRef(null);

//   // useEffect(() => {
//   //   const letters = textRef.current.querySelectorAll("span");

//   //   // GSAP animation to fade in letters one by one with a 1-second delay
//   //   gsap.fromTo(
//   //     letters,
//   //     { opacity: 0 },
//   //     {
//   //       opacity: 1,
//   //       stagger: 0.1, // Adjusts the delay between each letter
//   //       duration: 0.5, // Duration for each letter's fade-in
//   //       delay: 0.5, // 1 second delay before the animation starts
//   //     }
//   //   );
//   // }, [text]);

//   useEffect(() => {
//     const letters = textRef.current.querySelectorAll("span");

//     // GSAP animation to fade in letters one by one with a 0.5-second delay
//     gsap.fromTo(
//       letters,
//       { opacity: 0 },
//       {
//         opacity: 1,
//         stagger: 0.1, // Adjusts the delay between each letter
//         duration: 0.5, // Duration for each letter's fade-in
//         // delay: 0.5, // 0.5-second delay before the animation starts
//       }
//     );

//     // Set a timeout to animate the letters back to default after 4 seconds
//     const timeout = setTimeout(() => {
//       gsap.fromTo(
//         letters,
//         { opacity: 1 },
//         {
//           opacity: 0,
//           stagger: -0.1, // Stagger to match the fade-in effect
//           duration: 0.2, // Duration for each letter's fade-out
//         }
//       );
//     }, 4200); // 4-second delay

//     // Cleanup function to clear the timeout when the component is unmounted or dependencies change
//     return () => clearTimeout(timeout);
//   }, [text]);

//   //products drop down

//   const [showProductComp, setShowProductComp] = useState(false);

//   useEffect(() => {
//     if (showProductComp) {
//       // Disable scrolling
//       document.body.style.overflow = "hidden";
//     } else {
//       // Enable scrolling
//       document.body.style.overflow = "auto";
//     }

//     // Cleanup function to enable scrolling when the component is unmounted
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [showProductComp]);

//   // service drop down
//   const [showServiceComp, setShowServiceComp] = useState(false);

//   useEffect(() => {
//     if (showServiceComp) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [showServiceComp]);

//   const [showAboutComp, setShowAboutComp] = useState(false);
//   const [showResourceComp, setShowResourceComp] = useState(false);
//   const [showProjectComp, setShowProjectComp] = useState(false);

//   //nav bar scroll up scroll down

//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (showAboutComp ||
//         showServiceComp ||
//         showProductComp ||
//         showProjectComp ||
//         showResourceComp ||
//         openWhatsNew
//       ) {
//         setShowNavbar(true)
//       } else if (currentScrollY > lastScrollY) {
//         // User is scrolling down
//         setShowNavbar(false);
//       } else {
//         // User is scrolling up
//         setShowNavbar(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY,
//     showProductComp,
//     showServiceComp,
//     showAboutComp,
//     showResourceComp,
//     showProjectComp,
//     openWhatsNew]);

//   const closeServicehandler = () => {
//     setShowServiceComp(false);
//   };
//   const closeProductHandler = () => {
//     setShowProductComp(false);
//   };
//   const closeProjectHandler = () => {
//     setShowProjectComp(false);
//   };
//   const closeResourcehandler = () => {
//     setShowResourceComp(false);
//   };
//   const closeAboutHandler = () => {
//     setShowAboutComp(false);
//   };
//   const closeWhatsnewHandler = () => {
//     setOpenWhatsNew(false);
//   };

//   const ModelStyles = {
//     overlay: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: "rgb(13, 2, 37,0.6)",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       zIndex: 9999,
//     }
//     ,
//     content: {
//       width: "70%",
//       background:"none",
//       outline:"none",
//       border:"none",
//       minHeight: "80%",
//       inset: 0,
//       margin: "auto",
//       position: "relative",
//       borderRadius: "1rem",
//       padding: "3rem 5rem",
//       boxSizing: "border-box",
//     },
//   };
//   return (
//     <div className={`navbar ${showNavbar ? "show" : "hide"}`}>
//       <div className="nav-container">
//         <div className="nav-items-container">
//           <div className="nav-left">
//             <div className="mobile-nav">
//               <img src={MobileNav} alt="" />
//             </div>
//             <Link
//               to={"/"}
//               onClick={() => {
//                 window.scrollTo(0, 0);
//               }}
//               style={{
//                 marginRight: "2.5rem",
//                 position: "relative",
//                 display: "flex",
//                 alignItems: "center",
//                 columnGap: "0.75rem",
//               }}
//             >
//               <motion.img
//                 key={logo} // Key changes to trigger animation
//                 src={logo}
//                 alt=""
//                 className="logo-rotate"
//                 style={{
//                   height: "2.5rem",
//                   width: "2.5rem",
//                   objectFit: "contain",
//                 }}
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//                 variants={flipVariants}
//               />
//               <div
//                 style={{
//                   marginBottom: "0.3rem",
//                 }}
//               >
//                 <img
//                   src={StaciaLogoText} //5
//                   alt="Home"
//                   className="nav-logo"
//                   style={{ width: "90%", height: "100%", objectFit: "contain" }}  // Stacia Corp logo
//                 />
//                 <div className="nav-logo-text" ref={textRef}>
//                   {text.split("").map((letter, i) => (
//                     <span key={i}>{letter}</span> // Each letter wrapped in a span
//                   ))}
//                 </div>
//               </div>
//             </Link>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 // columnGap: "20px",
//               }}
//             >
//               <NavLink
//                 to={"/services"}
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                 }}
//                 className="nav-items"
//                 onMouseEnter={() => {
//                   setShowServiceComp(true);
//                   // if (hideTimeout) clearTimeout(hideTimeout);
//                 }}
//                 onMouseLeave={() => {
//                   setTimeout(() => {
//                     // Check if still hovering over NavProductComp before hiding
//                     if (!document.querySelector(".nav-service-comp:hover")) {
//                       setShowServiceComp(false);
//                     }
//                   }, 100);
//                 }}
//               >
//                 Services
//               </NavLink>
//               <NavLink
//                 to={"/products"}
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                 }}
//                 className="nav-items"
//                 onMouseEnter={() => {
//                   setShowProductComp(true);
//                 }}
//                 onMouseLeave={() => {
//                   setTimeout(() => {
//                     // Check if still hovering over NavProductComp before hiding
//                     if (!document.querySelector(".nav-product-comp:hover")) {
//                       setShowProductComp(false);
//                     }
//                   }, 100);
//                 }}
//               >
//                 Products
//               </NavLink>
//               <NavLink
//                 to={"/project"}
//                 className="nav-items"
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                 }}
//                 onMouseEnter={() => {
//                   setShowProjectComp(true);
//                 }}
//                 onMouseLeave={() => {
//                   setTimeout(() => {
//                     // Check if still hovering over NavProductComp before hiding
//                     if (!document.querySelector(".nav-project-comp:hover")) {
//                       setShowProjectComp(false);
//                     }
//                   }, 100);
//                 }}
//               >
//                 Projects
//               </NavLink>
//               <div className="dropdown-name  nav-items" ref={dropdownRef}

//                 // className="dropdown-name"
//                 onClick={toggleDropdown}
//                 onMouseEnter={() => {
//                   setShowResourceComp(true);
//                 }}
//                 onMouseLeave={() => {
//                   setTimeout(() => {
//                     // Check if still hovering over NavProductComp before hiding
//                     if (!document.querySelector(".nav-resource-comp:hover")) {
//                       setShowResourceComp(false);
//                     }
//                   }, 100);
//                 }}
//               >
//                 Resource

//               </div>
//               <NavLink
//                 to={"/career"}
//                 className="nav-items"
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                 }}
//               >
//                 Careers
//               </NavLink>


//               {/* competition */}
//               <NavLink
//                 to={"/competition"}
//                 className="nav-items"
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                 }}
//                 style={{ position: "relative" }}
//               >
//                 Competition
//                 {/* <BlueStar /> */}
//                 <Star />

//               </NavLink>


//               <NavLink
//                 to={"/about"}
//                 className="nav-items"
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                 }}
//                 onMouseEnter={() => {
//                   setShowAboutComp(true);
//                 }}
//                 onMouseLeave={() => {
//                   setTimeout(() => {
//                     // Check if still hovering over NavProductComp before hiding
//                     if (!document.querySelector(".nav-about-comp:hover")) {
//                       setShowAboutComp(false);
//                     }
//                   }, 100);
//                 }}
//               >
//                 About
//               </NavLink>
//               <div
//                 // onClick={() => {
//                 //   setOpenWhatsNew(!openWhatsNew);
//                 // }}
//                 className="nav-whats-new-item pointer"
//                 onMouseEnter={() => {
//                   setOpenWhatsNew(true);
//                   // if (hideTimeout) clearTimeout(hideTimeout);
//                 }}
//                 onMouseLeave={() => {
//                   setTimeout(() => {
//                     if (!document.querySelector(".nav-whatsnew-comp:hover")) {
//                       setOpenWhatsNew(false);
//                     }
//                   }, 100);
//                 }}
//               >
//                 What's New
//                 {/* <FaChevronDown
//                   style={{ verticalAlign: "middle", paddingLeft: "5%" }}
//                 /> */}
//                 {/* <img src={down} /> */}
//               </div>
//             </div>
//           </div>
//           <div className="nav-right">
//             {/* <Link to={"/community"} className="nav-item-whatsnew">
//             Community
//           </Link> */}
//             {/* <div
//             style={{
//               height: "48px",
//               width: "2px",
//               backgroundColor: "#fff",
//               marginRight: "20px",
//               marginLeft: "20px",
//             }}
//           ></div> */}
//             <img
//               src={ContactIcon}
//               alt=""
//               style={{ cursor: "pointer", width: "2rem", height: "2rem" }}
//               onClick={() => setShowContact(true)}
//             />
//             {/* {showContact && ( */}
//             <Modal
//               style={ModelStyles}
//               isOpen={showContact}
//               onRequestClose={closeHandle}
//             >
//               <Contact closeHandle={closeHandle}/>
//             </Modal>
//              {/* {showContact && <div className="form-container" >
//               <Contact closeHandle={closeHandle} />
//               </div> }  */}
              
            
//             {/* )} */}
//           </div>
//         </div>
//         {openWhatsNew ? (
//           <div
//             className="nav-whatsnew-comp"
//             onMouseEnter={() => setOpenWhatsNew(true)}
//             onMouseLeave={() => {
//               setOpenWhatsNew(false);
//             }}
//           >
//             <WhatsNew handleClose={closeWhatsnewHandler} />
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//       {showProductComp && (
//         <div
//           className="nav-product-comp"
//           onMouseEnter={() => setShowProductComp(true)}
//           onMouseLeave={() => {
//             setShowProductComp(false);
//           }}
//         >
//           <NavProductComp handleClose={closeProductHandler} />
//         </div>
//       )}
//       {showServiceComp && (
//         <div
//           className="nav-service-comp"
//           onMouseEnter={() => setShowServiceComp(true)}
//           onMouseLeave={() => {
//             setShowServiceComp(false);
//           }}
//         >
//           <ServcieNavComp handleClose={closeServicehandler} />
//         </div>
//       )}
//       {showAboutComp && (
//         <div
//           className="nav-about-comp"
//           onMouseEnter={() => setShowAboutComp(true)}
//           onMouseLeave={() => {
//             setShowAboutComp(false);
//           }}
//         >
//           <AboutDropDown handleClose={closeAboutHandler} />
//         </div>
//       )}
//       {showResourceComp && (
//         <div
//           className="nav-resource-comp"
//           onMouseEnter={() => setShowResourceComp(true)}
//           onMouseLeave={() => {
//             setShowResourceComp(false);
//           }}
//         >
//           <ResourceDropDown handleClose={closeResourcehandler} />
//         </div>
//       )}
//       {showProjectComp && (
//         <div
//           className="nav-project-comp"
//           onMouseEnter={() => setShowProjectComp(true)}
//           onMouseLeave={() => {
//             setShowProjectComp(false);
//           }}
//         >
//           <ProjectDropdown
//            handleClose={closeProjectHandler}
//            scrollToDepartment={scrollToDepartment}
//                />
//         </div>
//       )}
//     </div>
//   );
// }

// export default NavBar;



import React, { useEffect, useRef, useState } from "react";
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

function NavBar({ scrollToDepartment }) {
  const [openWhatsNew, setOpenWhatsNew] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [logo, setLogo] = useState(StaciaLogo);
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const animationStarted = useRef(false);
  const [text, setText] = useState("Innovating for you");
  const closeHandle = () => {
    setShowContact(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

  const [isOpenRes, setIsOpenRes] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpenRes((prevState) => !prevState);
  };

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

  const [showProductComp, setShowProductComp] = useState(false);
  const [showServiceComp, setShowServiceComp] = useState(false);
  const [showAboutComp, setShowAboutComp] = useState(false);
  const [showResourceComp, setShowResourceComp] = useState(false);
  const [showProjectComp, setShowProjectComp] = useState(false);

  useEffect(() => {
    if (
      showProductComp ||
      showServiceComp ||
      showAboutComp ||
      showResourceComp ||
      showProjectComp
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [
    showProductComp,
    showServiceComp,
    showAboutComp,
    showResourceComp,
    showProjectComp,
  ]);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        showAboutComp ||
        showServiceComp ||
        showProductComp ||
        showProjectComp ||
        showResourceComp ||
        openWhatsNew
      ) {
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
  }, [
    lastScrollY,
    showProductComp,
    showServiceComp,
    showAboutComp,
    showResourceComp,
    showProjectComp,
    openWhatsNew,
  ]);

  const closeServicehandler = () => {
    setShowServiceComp(false);
  };
  const closeProductHandler = () => {
    setShowProductComp(false);
  };
  const closeProjectHandler = () => {
    setShowProjectComp(false);
  };
  const closeResourcehandler = () => {
    setShowResourceComp(false);
  };
  const closeAboutHandler = () => {
    setShowAboutComp(false);
  };
  const closeWhatsnewHandler = () => {
    setOpenWhatsNew(false);
  };

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

  return (
    <div className={`navbar ${showNavbar ? "show" : "hide"}`}>
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
              <div
                style={{
                  marginBottom: "0.3rem",
                }}
              >
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
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <NavLink
                to={"/services"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-items"
                onMouseEnter={() => {
                  setShowServiceComp(true);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (!document.querySelector(".nav-service-comp:hover")) {
                      setShowServiceComp(false);
                    }
                  }, 100);
                }}
              >
                Services
              </NavLink>
              <NavLink
                to={"/products"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-items"
                onMouseEnter={() => {
                  setShowProductComp(true);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (!document.querySelector(".nav-product-comp:hover")) {
                      setShowProductComp(false);
                    }
                  }, 100);
                }}
              >
                Products
              </NavLink>
              <NavLink
                to={"/project"}
                className="nav-items"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                onMouseEnter={() => {
                  setShowProjectComp(true);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (!document.querySelector(".nav-project-comp:hover")) {
                      setShowProjectComp(false);
                    }
                  }, 100);
                }}
              >
                Projects
              </NavLink>
              <div
                className="dropdown-name nav-items"
                ref={dropdownRef}
                onClick={toggleDropdown}
                onMouseEnter={() => {
                  setShowResourceComp(true);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (!document.querySelector(".nav-resource-comp:hover")) {
                      setShowResourceComp(false);
                    }
                  }, 100);
                }}
              >
                Resource
              </div>
              <NavLink
                to={"/career"}
                className="nav-items"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Careers
              </NavLink>
              <NavLink
                to={"/competition"}
                className="nav-items"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                style={{ position: "relative" }}
              >
                Competition
                <Star />
              </NavLink>
              <NavLink
                to={"/about"}
                className="nav-items"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                onMouseEnter={() => {
                  setShowAboutComp(true);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (!document.querySelector(".nav-about-comp:hover")) {
                      setShowAboutComp(false);
                    }
                  }, 100);
                }}
              >
                About
              </NavLink>
              <div
                className="nav-whats-new-item pointer"
                onMouseEnter={() => {
                  setOpenWhatsNew(true);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (!document.querySelector(".nav-whatsnew-comp:hover")) {
                      setOpenWhatsNew(false);
                    }
                  }, 100);
                }}
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
            onMouseLeave={() => {
              setOpenWhatsNew(false);
            }}
          >
            <WhatsNew handleClose={closeWhatsnewHandler} />
          </div>
        )}
      </div>
      {showProductComp && (
        <div
          className="nav-product-comp"
          onMouseEnter={() => setShowProductComp(true)}
          onMouseLeave={() => {
            setShowProductComp(false);
          }}
        >
          <NavProductComp handleClose={closeProductHandler} />
        </div>
      )}
      {showServiceComp && (
        <div
          className="nav-service-comp"
          onMouseEnter={() => setShowServiceComp(true)}
          onMouseLeave={() => {
            setShowServiceComp(false);
          }}
        >
          <ServcieNavComp handleClose={closeServicehandler} />
        </div>
      )}
      {showAboutComp && (
        <div
          className="nav-about-comp"
          onMouseEnter={() => setShowAboutComp(true)}
          onMouseLeave={() => {
            setShowAboutComp(false);
          }}
        >
          <AboutDropDown handleClose={closeAboutHandler} />
        </div>
      )}
      {showResourceComp && (
        <div
          className="nav-resource-comp"
          onMouseEnter={() => setShowResourceComp(true)}
          onMouseLeave={() => {
            setShowResourceComp(false);
          }}
        >
          <ResourceDropDown handleClose={closeResourcehandler} />
        </div>
      )}
      {showProjectComp && (
        <div
          className="nav-project-comp"
          onMouseEnter={() => setShowProjectComp(true)}
          onMouseLeave={() => {
            setShowProjectComp(false);
          }}
        >
          <ProjectDropdown
            handleClose={closeProjectHandler}
            scrollToDepartment={scrollToDepartment}
          />
        </div>
      )}
    </div>
  );
}

export default NavBar;