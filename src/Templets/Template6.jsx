


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import "../styles/Templet.css";
import Star from "../components/Star";
import Data from "../Data/Articles.json";
import CaseStudy from "../pages/CaseStudy";
import CaseStudyaudio from "../components/CaseStudy/CaseStudyaudio";



function Template6() {
  const { title } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!Data || !Array.isArray(Data.docs)) {
      console.error("Error: Docs data is missing or invalid.");
      return;
    }

    const techData = Data.docs.find((doc) => doc.name === "Tech");
    if (!techData || !Array.isArray(techData.data)) {
      console.error("Error: Tech data is missing or invalid.");
      return;
    }

    const matchedProject = techData.data.find(
      (p) => p?.title?.replace(/\s+/g, "-").toLowerCase() === title?.toLowerCase()
    );

    if (matchedProject) {
      setProject(matchedProject);
    } else {
      console.warn("No matching project found for:", title);
    }
  }, [title]);

  if (!project) {
    return <div>Project not found or still loading...</div>;
  }

  return (
    <div>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      <div className="temp5-project_container">
        <div className="temp4-project_section temp5-p-section">
          <div className="temp5-project_text">
            <span className="test-selection-white">{project.title}</span>
            {project.starComponent === "true" && <Star />}
          </div>
        </div>
      </div>

      <div
        className="temp5-banner-img"
        style={{ backgroundImage: `url(${project.banner?.image})` }}
      >


        <div className="temp5-img-text test-selection-white">
          <div>{project.banner?.text}</div>
        </div>
      </div>

      <div>
        <CaseStudyaudio />
      </div>
      <div className="temp5-content-container">

        <div>
          <div className="temp5-sec1-title">{project.section1?.title}</div>
          <div className="temp5-sec1-container">
            <div className="temp5-sec1-content">
              <div>{project.section1?.summaryHeading}</div>
              {project.section1?.executiveSummary?.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
            <div className="temp5-sec1-img">
              <img src={project.section1?.image} alt="Section Image" />
            </div>
          </div>
        </div>

        <div className="mid-container">
          <section className="temp4-sec2">
            <div className="temp4-sec2-img no-padding">
              <img src={project.midContainer?.chilli} alt="Chilli" />
            </div>
            <div className="temp4-sec2-img2 second-image">
              <img src={project.midContainer?.dryChilli} alt="Dry Chilli" />
            </div>
          </section>
          <div className="text-mid-container">
            <div className="head2-temp-style head2-mid-container">
              {project.midContainer?.title}
            </div>
            <p className="para-temp-styles para-mid-container">
              {project.midContainer?.content}
            </p>
          </div>
        </div>

        <div className="temp4-sec2-list-container">
          {project.section2?.listItems?.map((item, index) => (
            <div className="box box1" key={index}>
              <div className="temp5-sec2-list-num">{item.number}</div>
              <div>
                <div className="temp5-sec2-list-title">{item.title}</div>
                <p className="para-temp-styles">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="temp5-sec4-container">
          <div className="temp5-sec4-title">{project.section3?.title}</div>
          <div className="temp5-sec3-container">
            <div className="temp4-sec4-img">
              <img src={project.section3?.image} alt="Section Image" />
            </div>
            <div>
              <p className="para-temp-styles">{project.section3?.content}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default Template6;