// import { React, useState, useEffect } from "react";
// import "../styles/sideBar.css";
// import { useNavigate } from "react-router-dom";
// import DarkLogo from "../assets/sideBarStaciaLogoLite.svg";
// import whiteLogo from "../assets/MobileNavStraciaLog.svg";
// import MoibileNav from "../assets/MobileNav.png";
// import ContactIcon from "../assets/ContactIcon.svg";
// import Cancle from "../assets/close-delete-remove-3_svgrepo.com.svg";
// import Contact from "./Contact";
// import Modal from "react-modal";

// // import from "re"
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// function SideBar() {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const NavItems = [
//     {
//       title: "Services",
//       subRouts: false,
//       Mainpath: "/services",
//     },
//     {
//       title: "Products",
//       subRouts: false,
//       Mainpath: "/products",
//     },
//     {
//       title: "Projects",
//       subRouts: false,
//       Mainpath: "/project",
//     },
//     {
//       title: "Resources",
//       subRouts: true,
//       Mainpath: "",
//       subItems: [
//         { title: "Articles", path: "/article" },
//         { title: "CaseStudy", path: "/case-study" },
//       ],
//     },
//     {
//       title: "Careers",
//       subRouts: false,
//       Mainpath: "/career",
//     },
//     {
//       title: "About",
//       subRouts: false,
//       Mainpath: "/about",
//     },
//     {
//       title: "Competition",
//       subRouts: false,
//       Mainpath: "/competition",
//     },
//     {
//       title: "Events",
//       subRouts: false,
//       Mainpath: "/events",
//     },
//     {
//       title: "News Room",
//       subRouts: false,
//       Mainpath: "/news",
//     },
//     {
//       title: "Media Kit",
//       subRouts: false,
//       Mainpath: "/media-kit",
//     },
//     {
//       title: "Partnerships",
//       subRouts: false,
//       Mainpath: "/partners",
//     },
//   ];

//   const navigateTo = useNavigate();

//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     const handleScroll = (e) => {
//       if (showDropdown) {
//         e.preventDefault();
//         window.scrollTo(0, 0);
//       }
//     };
//     if (showDropdown) {
//       window.addEventListener("scroll", handleScroll, { passive: false });
//     } else {
//       window.removeEventListener("scroll", handleScroll);
//     }

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [showDropdown]);
//   const [showContact, setShowContact] = useState(false);
//   const closeHandle = () => {
//     setShowContact(false);
//   };

//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY) {
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
//   }, [lastScrollY]);
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
//     },
//     content: {
//       width: "90%",
//       minHeight: "90%",
//       inset: 0,
//       margin: "auto",
//       position: "relative",
//       borderRadius: "1rem",
//       padding: "3rem 5rem",
//       boxSizing: "border-box",
//     },
//   };

//   return (
//     <div
//       // className="sidebar-container"
//       className={`sidebar-container ${showNavbar ? "show" : "hide"}`}
//       style={
//         showDropdown
//           ? { backgroundcolor: "#fff" }
//           : { backgroundColor: "#0D0225" }
//       }
//     >
//       <div>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               paddingTop: "10px",
//               paddingBottom: "10px",
//             }}
//           >
//             <div
//               onClick={() => {
//                 setShowDropdown(!showDropdown);
//               }}
//               style={showDropdown ? { display: "none" } : { display: "block" }}
//             >
//               <img src={MoibileNav} alt="" />
//             </div>
//             <div style={{ marginLeft: "10px" }} onClick={() => navigateTo("/")}>
//               {showDropdown ? (
//                 <img src={DarkLogo} alt="" />
//               ) : (
//                 <img src={whiteLogo} alt="" />
//               )}
//             </div>
//           </div>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             {showDropdown ? (
//               <div
//                 onClick={() => {
//                   setShowDropdown(!showDropdown);
//                 }}
//               >
//                 <img
//                   src={Cancle}
//                   alt=""
//                   style={{
//                     height: "25px",
//                     // objectFit: "cover",
//                     // backgroundColor: "red",
//                   }}
//                 />
//               </div>
//             ) : (
//               <div>
//                 <img
//                   src={ContactIcon}
//                   alt=""
//                   style={{
//                     height: "25px",
//                     // objectFit: "cover",
//                     // backgroundColor: "red",
//                   }}
//                   onClick={() => setShowContact(true)}
//                 />
//                 <Modal
//                   style={ModelStyles}
//                   isOpen={showContact}
//                   onRequestClose={closeHandle}
//                 >
//                   <Contact closeHandle={closeHandle} />
//                 </Modal>
//                 {/* {showContact && <Contact closeHandle={closeHandle} />} */}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div style={showDropdown ? { display: "block" } : { display: "none" }}>
//         {NavItems.map((MainNav, i) => {
//           return (
//             <MobileNavContainer
//               key={i}
//               setActiveDropdown={setActiveDropdown}
//               activeDropdown={activeDropdown}
//               MainNav={MainNav}
//               i={i}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default SideBar;

// const MobileNavContainer = ({
//   MainNav,
//   i,
//   setActiveDropdown,
//   activeDropdown,
// }) => {
//   const navigateTo = useNavigate();

//   return (
//     <div>
//       <div
//         className="side-bar-item-containers"
//         onClick={() => {
//           if (!MainNav.subRouts) {
//             navigateTo(MainNav.Mainpath);
//             window.scrollTo(0, 0);
//           }
//         }}
//       >
//         <div
//           className="side-bar-items"
//           onClick={() => {
//             navigateTo(MainNav.Mainpath);
//             window.scrollTo(0, 0);
//           }}
//         >
//           {MainNav.title}
//         </div>
//         <span
//           onClick={() => {
//             if (MainNav.subRouts) {
//               if (activeDropdown === i) {
//                 setActiveDropdown(null);
//               } else {
//                 setActiveDropdown(i);
//               }
//             }
//           }}
//         >
//           {MainNav.subRouts ? (
//             activeDropdown === i ? (
//               <IoIosArrowUp />
//             ) : (
//               <IoIosArrowDown />
//             )
//           ) : null}
//           {/* <IoIosArrowDown /> */}
//         </span>
//       </div>
//       {activeDropdown === i && (
//         <div>
//           {MainNav.subItems?.map((eachitem, i) => {
//             return (
//               <div
//                 key={i}
//                 className="sub-side-bar-items"
//                 onClick={() => {
//                   navigateTo(eachitem.path);
//                   window.scrollTo(0, 0);
//                 }}
//               >
//                 {eachitem.title}
//               </div>
//             );
//           })}
//         </div>
//       )}
//       <div className="horizontal-line" />
//     </div>
//   );
// };


import { React, useState, useEffect, useRef } from "react";
import "../styles/sideBar.css";
import { useNavigate } from "react-router-dom";
import DarkLogo from "../assets/sideBarStaciaLogoLite.svg";
import whiteLogo from "../assets/MobileNavStraciaLog.svg";
import MoibileNav from "../assets/MobileNav.png";
import ContactIcon from "../assets/ContactIcon.svg";
import Cancle from "../assets/close-delete-remove-3_svgrepo.com.svg";
import Contact from "./Contact";
import Modal from "react-modal";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import StaciaLogo from "../assets/Stacia Monogram.svg";
import { useAnimation, motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import StaciaLogoText from "../assets/Stacia logo.svg";
import five from "../assets/5yr logo.svg";
import gsap from "gsap";



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

  useEffect(() => {
    if (scrollY > 0) {
      if (!animationStarted.current) {
        animationStarted.current = true;
        // Animate text to disappear from right to left
        controls.start("hidden");
      }
    } else {
      if (animationStarted.current) {
        animationStarted.current = false;
        // Animate text to appear from left to right
        controls.start("visible");
      }
    }
  }, [scrollY, controls]);



  useEffect(() => {
    const letters = textRef.current?.querySelectorAll("span");
    if (letters) {
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
            opacity: 1,
            stagger: -0.1,
            duration: 0.2,
          }
        )
      }, 4200)
      return () => clearTimeout(timeout);
    }
  }, [text])

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
  const NavItems = [
    {
      title: "Services",
      subRouts: false,
      Mainpath: "/services"
    },
    {
      title: "Products",
      subRouts: false,
      Mainpath: "/products"
    },
    {
      title: "Projects",
      subRouts: false,
      Mainpath: "/project"
    },
    {

      title: "Resources",
      subRouts: true,
      Mainpath: "",
      subItems: [
        {
          title: "Articles",
          path: "/article"
        },
        {
          title: "CaseStudy",
          path: "/case-study"
        },
      ],
    },
    {
      title: "Careers",
      subRouts: false,
      Mainpath: "/career"
    },
    {
      title: "About",
      subRouts: false,
      Mainpath: "/about"
    },
    {
      title: "Competition",
      subRouts: false,
      Mainpath: "/competition"
    },
    {
      title: "Events",
      subRouts: false,
      Mainpath: "/events"
    },
    {
      title: "News Room",
      subRouts: false,
      Mainpath: "/news"
    },
    {
      title: "Media Kit",
      subRouts: false,
      Mainpath: "/media-kit"
    },
    {
      title: "Partnerships",
      subRouts: false,
      Mainpath: "/partners"
    },
  ];

  const closeHandle = () => {
    setShowContact(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar on scroll down
      } else {
        setShowNavbar(true); // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const ModelStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgb(13, 2, 37, 0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    },
    content: {
      width: "90%",
      minHeight: "100%",
      inset: 0,
      margin: "auto",
      position: "relative",
      borderRadius: "1rem",
      padding: "3rem 5rem",
      boxSizing: "border-box",
    },
  };

  return (
    <div
      className={`sidebar-container ${showNavbar ? "show" : "hide"}`}
      style={{
        backgroundColor: showDropdown ? "#fff" : "#0D0225",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              style={{ display: showDropdown ? "none" : "block" }}
            >
              <img src={MoibileNav} alt="menu" />
            </div>
            <div
              style={{ marginLeft: "10px" }}
              onClick={() => navigateTo("/")}
            >
              {showDropdown ? (
                <img src={DarkLogo} alt="logo" />
              ) : (
                // <img src={whiteLogo} alt="logo" /> // Mobile log0
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
                    key={logo} // Key changes to trigger animation
                    src={logo}
                    alt="Stacia Logo"
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
                      src={StaciaLogoText} //5
                      alt="Stacia Corp"
                      className="nav-logo1"
                      style={{ width: "90%", height: "100%", objectFit: "contain" }}  // Stacia Corp logo
                    />
                    <div className="nav-logo-text1" ref={textRef}>
                      {text.split("").map((letter, i) => (
                        <span key={i}>{letter}</span> // Each letter wrapped in a span
                      ))}
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {showDropdown ? (
              <div onClick={() => setShowDropdown(false)}>
                <img
                  src={Cancle}
                  alt="close"
                  style={{ height: "25px" }}
                />
              </div>
            ) : (
              <div>
                <img
                  src={ContactIcon}
                  alt="contact"
                  style={{ height: "25px" }}
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
            )}
          </div>
        </div>
      </div>

      {/* Dropdown Nav Items */}
      <div
        style={{
          display: showDropdown ? "block" : "none",
          maxHeight: "100vh",
          overflowY: "auto",
        }}
      >
        {NavItems.map((MainNav, i) => (
          <MobileNavContainer
            key={i}
            setActiveDropdown={setActiveDropdown}
            activeDropdown={activeDropdown}
            MainNav={MainNav}
            i={i}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;

const MobileNavContainer = ({
  MainNav,
  i,
  setActiveDropdown,
  activeDropdown,
}) => {
  const navigateTo = useNavigate();

  return (
    <div>
      <div
        className="side-bar-item-containers"
        onClick={() => {
          if (!MainNav.subRouts) {
            navigateTo(MainNav.Mainpath);
            window.scrollTo(0, 0);
          }
        }}
      >
        <div className="side-bar-items">{MainNav.title}</div>
        <span
          onClick={(e) => {
            e.stopPropagation(); // prevent parent click
            if (MainNav.subRouts) {
              setActiveDropdown(activeDropdown === i ? null : i);
            }
          }}
        >
          {MainNav.subRouts &&
            (activeDropdown === i ? <IoIosArrowUp /> : <IoIosArrowDown />)}
        </span>
      </div>
      {activeDropdown === i && (
        <div>
          {MainNav.subItems?.map((eachitem, idx) => (
            <div
              key={idx}
              className="sub-side-bar-items"
              onClick={() => {
                navigateTo(eachitem.path);
                window.scrollTo(0, 0);
              }}
            >
              {eachitem.title}
            </div>
          ))}
        </div>
      )}
      <div className="horizontal-line" />
    </div>
  );
};
