import React from "react";
import "../../styles/Home/OurProjects.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";
import project8 from "../../assets/project8.png";
import project9 from "../../assets/project9.png";


import { useNavigate } from "react-router-dom";
import { FaChevronRight} from "react-icons/fa";

function OurProjects() {

  const navigateTo = useNavigate();
  const navigate = useNavigate();
  return (
    <div className="our-projects-container">
      <div className="our-projects-title">Our Projects</div>
      <div className="our-projects-card-grid">
        <div className="project-image image1">
          <img src={project1} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">One-Drill</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...{" "}
              <span
                style={{ color: "#0047FF" }}
                onClick={() => {
                  navigate(`project/Mechanical/Mechanical-Industry/One-Drill`);
                  window.scrollTo(0, 0);
                }}
              >
                Read more
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="project-image image2">
          <img src={project2} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">ismart</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span
                style={{ color: "#0047FF" }}
                onClick={() => {
                  navigate(`project/Mechanical/Mechanical-Industry/ismart`);
                  window.scrollTo(0, 0);
                }}
              >
                Read more
              </span>
            </div>
          </div>
        </div>
        <div className="project-image image3">
          <img src={project3} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">Chilli Solar House</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span
                style={{ color: "#0047FF" }}
                onClick={() => {
                  navigate(
                    `project/Mechanical/Mechanical-blah-Industry/Chilli-Solar-House`
                  );
                  window.scrollTo(0, 0);
                }}
              >
                Read more
              </span>
            </div>
          </div>
        </div>
        <div className="project-image image4 ">
          <img src={project4} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">
              Automobile-&-Automotive-SPM
            </div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span
                style={{ color: "#0047FF" }}
                onClick={() => {
                  navigate(
                    `project/Mechanical/Mechanical-blah-Industry/Automobile-&-Automotive-SPM`
                  );
                  window.scrollTo(0, 0);
                }}
              >
                Read more
              </span>
            </div>
          </div>
        </div>
        <div className="project-image image5">
          <div className="image5-title">Overall Projects</div>
          <div className="image5-count">24</div>
        </div>
        <div className="project-image image6 ">
          <img src={project6} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">Smart Implementation</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span
                style={{ color: "#0047FF" }}
                onClick={() => {
                  navigate(
                    `project/Electronics/Electronics-Industry/Smart-Implementation`
                  );
                  window.scrollTo(0, 0);
                }}
              >
                Read more
              </span>
            </div>
          </div>
        </div>
        <div className="project-image image7">
          <img src={project7} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">Reverse Kettle</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span
                style={{ color: "#0047FF" }}
                onClick={() => {
                  navigate(
                    `project/Electronics/Electronics-Grid-Industry/Reverse-Kettle`
                  );
                  window.scrollTo(0, 0);
                }}
              >
                Read more
              </span>
            </div>
          </div>
        </div>
        <div className="project-image image8">
          <img src={project8} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">AI-Chatbot</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span
                style={{ color: "#0047FF" }}
                onClick={() => {
                  navigate(`project/Tech/Tech-Industry/AI-Chatbot`);
                  window.scrollTo(0, 0);
                }}
              >
                Read more
              </span>
            </div>
          </div>
        </div>
        <div className="project-image image9">
          <img src={project9} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">AI-Chatbot-version</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span
                style={{ color: "#0047FF" }}
                onClick={() => {
                  navigate(
                    `project/Tech/Tech--AI--Industry/AI-Chatbot-version`
                  );
                  window.scrollTo(0, 0);
                }}
              >
                Read more
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="image5-link"
        onClick={() => {
          navigateTo("/project");
          window.scrollTo(0, 0);
        }}
        style={{ cursor: "pointer" }}
      >
        See More {""}
        <FaChevronRight style={{ verticalAlign: "middle" }} />
      </div>
    </div>
  );
}

export default OurProjects;
