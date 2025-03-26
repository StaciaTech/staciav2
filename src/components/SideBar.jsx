import { React, useState, useEffect } from "react";
import "../styles/sideBar.css";
import { useNavigate } from "react-router-dom";
import DarkLogo from "../assets/sideBarStaciaLogoLite.svg";
import whiteLogo from "../assets/MobileNavStraciaLog.svg";
import MoibileNav from "../assets/MobileNav.png";
import ContactIcon from "../assets/ContactIcon.svg";
import Cancle from "../assets/close-delete-remove-3_svgrepo.com.svg";
import Contact from "./Contact";
import Modal from "react-modal";

// import from "re"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function SideBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const NavItems = [
    {
      title: "Services",
      subRouts: false,
      Mainpath: "/services",
    },
    {
      title: "Products",
      subRouts: false,
      Mainpath: "/products",
    },
    {
      title: "Projects",
      subRouts: false,
      Mainpath: "/project",
    },
    {
      title: "Resources",
      subRouts: true,
      Mainpath: "",
      subItems: [
        { title: "Articles", path: "/article" },
        { title: "CaseStudy", path: "/case-study" },
      ],
    },
    {
      title: "Careers",
      subRouts: false,
      Mainpath: "/career",
    },
    {
      title: "About",
      subRouts: false,
      Mainpath: "/about",
    },
    {
      title: "Events",
      subRouts: false,
      Mainpath: "/events",
    },
    {
      title: "News Room",
      subRouts: false,
      Mainpath: "/news",
    },
    {
      title: "Media Kit",
      subRouts: false,
      Mainpath: "/media-kit",
    },
    {
      title: "Partnerships",
      subRouts: false,
      Mainpath: "/partners",
    },
  ];

  const navigateTo = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (showDropdown) {
        e.preventDefault();
        window.scrollTo(0, 0);
      }
    };
    if (showDropdown) {
      window.addEventListener("scroll", handleScroll, { passive: false });
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showDropdown]);
  const [showContact, setShowContact] = useState(false);
  const closeHandle = () => {
    setShowContact(false);
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // User is scrolling down
        setShowNavbar(false);
      } else {
        // User is scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
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
      width: "90%",
      minHeight: "90%",
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
      // className="sidebar-container"
      className={`sidebar-container ${showNavbar ? "show" : "hide"}`}
      style={
        showDropdown
          ? { backgroundcolor: "#fff" }
          : { backgroundColor: "#0D0225" }
      }
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
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
              style={showDropdown ? { display: "none" } : { display: "block" }}
            >
              <img src={MoibileNav} alt="" />
            </div>
            <div style={{ marginLeft: "10px" }} onClick={() => navigateTo("/")}>
              {showDropdown ? (
                <img src={DarkLogo} alt="" />
              ) : (
                <img src={whiteLogo} alt="" />
              )}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {showDropdown ? (
              <div
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                <img
                  src={Cancle}
                  alt=""
                  style={{
                    height: "25px",
                    // objectFit: "cover",
                    // backgroundColor: "red",
                  }}
                />
              </div>
            ) : (
              <div>
                <img
                  src={ContactIcon}
                  alt=""
                  style={{
                    height: "25px",
                    // objectFit: "cover",
                    // backgroundColor: "red",
                  }}
                  onClick={() => setShowContact(true)}
                />
                <Modal
                  style={ModelStyles}
                  isOpen={showContact}
                  onRequestClose={closeHandle}
                >
                  <Contact closeHandle={closeHandle} />
                </Modal>
                {/* {showContact && <Contact closeHandle={closeHandle} />} */}
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={showDropdown ? { display: "block" } : { display: "none" }}>
        {NavItems.map((MainNav, i) => {
          return (
            <MobileNavContainer
              key={i}
              setActiveDropdown={setActiveDropdown}
              activeDropdown={activeDropdown}
              MainNav={MainNav}
              i={i}
            />
          );
        })}
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
        <div
          className="side-bar-items"
          onClick={() => {
            navigateTo(MainNav.Mainpath);
            window.scrollTo(0, 0);
          }}
        >
          {MainNav.title}
        </div>
        <span
          onClick={() => {
            if (MainNav.subRouts) {
              if (activeDropdown === i) {
                setActiveDropdown(null);
              } else {
                setActiveDropdown(i);
              }
            }
          }}
        >
          {MainNav.subRouts ? (
            activeDropdown === i ? (
              <IoIosArrowUp />
            ) : (
              <IoIosArrowDown />
            )
          ) : null}
          {/* <IoIosArrowDown /> */}
        </span>
      </div>
      {activeDropdown === i && (
        <div>
          {MainNav.subItems?.map((eachitem, i) => {
            return (
              <div
                key={i}
                className="sub-side-bar-items"
                onClick={() => {
                  navigateTo(eachitem.path);
                  window.scrollTo(0, 0);
                }}
              >
                {eachitem.title}
              </div>
            );
          })}
        </div>
      )}
      <div className="horizontal-line" />
    </div>
  );
};
