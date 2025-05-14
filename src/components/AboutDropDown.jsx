import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../styles/AboutDropdown.css";
import { useNavigate } from "react-router-dom";
import PlcImg from "../assets/abt-dd-logo.png";
import Star from "../assets/loadingStar.svg";
import data from "../Data/About.json"; // Importing JSON data

function AboutDropDown({ handleClose }) {
  const navigate = useNavigate();
  const [Leaders, setLeaders] = useState(data.leaders);
  const AboutArr = data.aboutSections;

  const [productData, setProductData] = useState();
  const categoryContainerRef = useRef(null); // Ref for the subsection titles container
  const subCategoryContainerRef = useRef(null); // Ref for the sub-category container (not used in this component)

  const [sectionTitles, setSectionTitles] = useState([]);
  const [subSectionTitles, setSubSectionTitles] = useState([]);
  const [foundLeader, setFoundLeader] = useState();
  const [activeTitle, setActiveTitle] = useState();
  const [activeSubTitle, setActiveSubTitle] = useState();
  const [canScrollDeptUp, setCanScrollDeptUp] = useState(false); // For up arrow visibility
  const [canScrollDeptDown, setCanScrollDeptDown] = useState(false); // For down arrow visibility

  // Set main section titles
  useEffect(() => {
    setSectionTitles(AboutArr?.map((item) => item.section));
  }, []);

  // Update subsection titles when activeTitle changes
  useEffect(() => {
    if (activeTitle) {
      const subSectionArr = AboutArr?.find(
        (item) => item.section === activeTitle
      );
      setSubSectionTitles(subSectionArr?.SectionItems || []);
    }
  }, [activeTitle]);

  // Set default values on initial render
  useEffect(() => {
    if (AboutArr.length > 0) {
      const firstSection = AboutArr[0];
      setActiveTitle(firstSection.section);

      if (firstSection.SectionItems?.length > 0) {
        const firstItem = firstSection.SectionItems[0];
        setActiveSubTitle(firstItem.name);

        if (firstSection.section === "Leadership") {
          setFoundLeader(firstItem);
        }
      }
    }
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  // Update foundLeader when activeSubTitle changes (for Leadership section)
  useEffect(() => {
    if (activeTitle === "Leadership" && activeSubTitle) {
      setFoundLeader(
        subSectionTitles.find((eachSec) => eachSec.name === activeSubTitle)
      );
    }
  }, [activeSubTitle, subSectionTitles]);

  // Check scrollability for Subsection Titles whenever subSectionTitles changes
  useEffect(() => {
    const checkScrollability = () => {
      if (categoryContainerRef.current) {
        const container = categoryContainerRef.current;
        const { scrollHeight, clientHeight } = container;
        setCanScrollDeptDown(scrollHeight > clientHeight);
        setCanScrollDeptUp(container.scrollTop > 0);
      }
    };

    const timer = setTimeout(checkScrollability, 0);
    return () => clearTimeout(timer);
  }, [subSectionTitles]);

  const scrollUp = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40;
      container.scrollTop -= itemHeight;
    }
  };

  const scrollDown = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40;
      container.scrollTop += itemHeight;
    }
  };

  const handleScroll = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      setCanScrollDeptUp(scrollTop > 0);
      setCanScrollDeptDown(!isAtBottom);
      console.log(
        "Subsection Scroll - scrollTop:",
        scrollTop,
        "clientHeight:",
        clientHeight,
        "scrollHeight:",
        scrollHeight,
        "canScrollDeptDown:",
        !isAtBottom
      );
    }
  };

  return (
    <div className="about-drop-down-container">
      {/* Main Section Titles */}
      <div className="about-dd-main-title-container">
        {AboutArr?.map((eachTitle, i) => (
          <div
            key={i}
            onMouseEnter={() => {
              setActiveTitle(eachTitle.section);
              const subsections = eachTitle.SectionItems;

              if (Array.isArray(subsections) && subsections?.length > 0) {
                setSubSectionTitles(subsections);
                const firstItem = subsections[0];
                setActiveSubTitle(firstItem.name);

                if (eachTitle.section === "Leadership") {
                  setFoundLeader(firstItem);
                }
              } else {
                setSubSectionTitles([]);
                setActiveSubTitle(null);
                setFoundLeader(null);
              }
            }}
            className={`about-dd-main-title ${
              eachTitle.section === activeTitle
                ? "about-dd-main-title-active"
                : ""
            }`}
            onClick={() => {
              navigate(`/${eachTitle.path}`);
              handleClose();
            }}
          >
            <span>{eachTitle.section}</span>
          </div>
        ))}
      </div>

      {/* Subsection Titles */}
      <div className="about-dd-sub-title-container">
        <div className="about-dd-su-title-dot-container">
          <div>
            {subSectionTitles?.map((eachItem, i) => (
              <div
                key={i}
                className={`about-dd-sub-title-dot ${
                  eachItem.name === activeSubTitle
                    ? "about-dd-sub-title-dot-active"
                    : ""
                }`}
              ></div>
            ))}
          </div>
          {subSectionTitles?.length > 5 && (
            <div className="arrow-wrapper">
              {canScrollDeptUp && (
                <span
                  onClick={scrollUp}
                  className="arrow-up"
                  aria-label="Scroll up"
                >
                  <IoIosArrowUp />
                </span>
              )}
              {canScrollDeptDown && (
                <span
                  onClick={scrollDown}
                  className="arrow-down"
                  aria-label="Scroll down"
                >
                  <IoIosArrowDown />
                </span>
              )}
            </div>
          )}
        </div>

        <div
          className="about-dd-sub-title-holder"
          ref={categoryContainerRef}
          onScroll={handleScroll}
        >
          {subSectionTitles?.map((eachItem, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveSubTitle(eachItem.name)}
              className={`about-dd-main-title ${
                eachItem.name === activeSubTitle
                  ? "about-dd-main-title-active"
                  : ""
              }`}
              onClick={() => {
                window.scrollTo(0, 0);
                if (activeTitle === "Leadership") {
                  navigate(`/${foundLeader?.path}`);
                } else if (activeTitle === "Partnerships") {
                  window.open(eachItem.path, "_blank");
                } else {
                  navigate(`/${eachItem.path}`);
                }
                handleClose();
              }}
            >
              <span>{eachItem.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      {activeSubTitle && (
        <div className="about-dd-info-section">
          {activeTitle === "Leadership" ? (
            <div>
              <div className="about-dd-founder-info-container">
                <div>
                  <img
                    src={foundLeader?.imageUrl}
                    alt=""
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/${foundLeader?.path}`);
                      handleClose();
                    }}
                  />
                </div>
                <p style={{ width: "50%" }}>
                  <p className="about-dd-founder-info-des">
                    {foundLeader?.description}
                  </p>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  color: "#0047ff",
                  fontFamily: "EuclidMedium",
                  padding: "1rem 0rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/${foundLeader?.path}`);
                  handleClose();
                }}
              >
                Read More
              </div>
            </div>
          ) : (
            <div className="about-dd-info-cotain">
              <img src={PlcImg} alt="" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AboutDropDown;
