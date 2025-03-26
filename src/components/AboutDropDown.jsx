import React, { useEffect, useState } from "react";
import "../styles/AboutDropdown.css";
import axios from "axios";
import PlcImg from "../assets/abt-dd-logo.png";
import { useNavigate } from "react-router-dom";
import Star from "../assets/loadingStar.svg";

function AboutDropDown({ handleClose }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [Leaders, setLeaders] = useState();
  const FetchData = async (endpoint, setData) => {
    try {
      const res = await axios.get(`${apiUrl}/${endpoint}`);
      setData(res.data.docs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData("founders/index", setLeaders);
  }, []);

  const AboutArr = [
    {
      section: "Who are We",
      path: "about",
      SectionItems: [
        {
          name: "About us",
          path: "about/about-us",
        },
        {
          name: "Our Story",
          path: "about/out-story",
        },
        {
          name: "Milestone",
          path: "about/milestone",
        },
        {
          name: "Our Mission",
          path: "about/our-mission",
        },
        {
          name: "Our Vision",
          path: "about/our-vision",
        },
        {
          name: "Why us",
          path: "about/why-us?",
        },
        {
          name: "Our Purpose",
          path: "about/our-purpose",
        },
        {
          name: "Our Expertise",
          path: "about/our-expertise",
        },
        {
          name: "Industries Covered",
          path: "about/industries-covered",
        },
        {
          name: "Partnerships and clients",
          path: "about/partnership-clients",
        },
        {
          name: "Our Leadership",
          path: "about/leadership",
        },
        {
          name: "Meet our team",
          path: "about/team",
        },
      ],
    },
    {
      section: "Leadership",
      path: "about/our-leadership",
      SectionItems: Leaders,
    },
    {
      section: "Partnerships",
      path: "partners",
      SectionItems: [],
    },

    {
      section: "MediaKit",
      path: "Media-kit",
      SectionItems: [],
    },
  ];

  const [sectionTitles, setSectionTitles] = useState();
  const [subSectionTitles, setSubSectionTitles] = useState();
  const [foundLeader, setFoundLeader] = useState();
  const [activeTitle, setActiveTitle] = useState();
  const [activeSubTitle, setActiveSubTitle] = useState();

  useEffect(() => {
    setSectionTitles(AboutArr?.map((item) => item.section));
  }, []);

  useEffect(() => {
    if (activeTitle) {
      const subSectionArr = AboutArr?.find(
        (item) => item.section === activeTitle
      );
      setSubSectionTitles(subSectionArr?.SectionItems);
    }
  }, [activeTitle]);

  useEffect(() => {
    if (activeTitle === "Leadership") {
      setFoundLeader(
        subSectionTitles.find((eachSec) => eachSec.name === activeSubTitle)
      );
    }
  }, [activeSubTitle]);

  return (
    <div className="about-drop-down-container">
      <div className="about-dd-main-title-container">
        {AboutArr?.map((eachTitle, i) => (
          <div
            key={i}
            onMouseEnter={() => {
              setActiveTitle(eachTitle.section);
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
            {eachTitle.section === activeTitle && (
              <img
                src={Star}
                alt=""
                style={{ width: "18px", marginLeft: "1rem" }}
              />
            )}
          </div>
        ))}
      </div>
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
        </div>
        <div className="about-dd-sub-title-holder">
          {subSectionTitles?.map((eachItem, i) => {
            const subtitleKey = activeSubTitle
              ?.toLowerCase()
              .split(" ")
              .join("-");

            return (
              <div
                key={i}
                onMouseEnter={() => {
                  setActiveSubTitle(eachItem.name);
                }}
                className={`about-dd-main-title ${
                  eachItem.name === activeSubTitle
                    ? "about-dd-main-title-active"
                    : ""
                }`}
                onClick={() => {
                  window.scrollTo(0, 0);
                  if (activeTitle === "Leadership") {
                    navigate(
                      `/about/leader/${eachItem?.name.split(" ").join("-")}`
                    );
                  } else {
                    navigate(`/about/${subtitleKey}`);
                  }
                  handleClose();
                }}
              >
                <span>{eachItem.name}</span>
                {eachItem.name === activeSubTitle && (
                  <img
                    src={Star}
                    alt=""
                    style={{ width: "18px", marginLeft: "1rem" }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      {activeSubTitle && (
        <div className="about-dd-info-section">
          {activeTitle === "Leadership" ? (
            <div>
              <div className="about-dd-founder-info-container">
                <div>
                  <img src={foundLeader?.imageUrl} alt="" />
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
                }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(
                    `/about/leader/${foundLeader?.name.split(" ").join("-")}`
                  );
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
