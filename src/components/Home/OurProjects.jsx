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

function OurProjects() {
  return (
    <div className="our-projects-container">
      <div className="our-projects-title">Our Projects</div>
      <div className="our-projects-card-grid">
        <div className="project-image image1">
          <img src={project1} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">Machine Designs Evolution</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...{" "}
              <span style={{ color: "#0047FF" }}>Read more</span>{" "}
            </div>
          </div>
        </div>
        <div className="project-image image2">
          <img src={project2} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">Machine Designs Evolution</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span style={{ color: "#0047FF" }}>Read more</span>
            </div>
          </div>
        </div>
        <div className="project-image image3">
          <img src={project3} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">Machine Designs Evolution</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span style={{ color: "#0047FF" }}>Read more</span>
            </div>
          </div>
        </div>
        <div className="project-image image4 ">
          <img src={project4} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">Machine Designs Evolution</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span style={{ color: "#0047FF" }}>Read more</span>
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
            <div className="single-card-header">Machine Designs Evolution</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span style={{ color: "#0047FF" }}>Read more</span>
            </div>
          </div>
        </div>
        <div className="project-image image7">
          <img src={project7} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">Machine Designs Evolution</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span style={{ color: "#0047FF" }}>Read more</span>
            </div>
          </div>
        </div>
        <div className="project-image image8">
          <img src={project8} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">Machine Designs Evolution</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span style={{ color: "#0047FF" }}>Read more</span>
            </div>
          </div>
        </div>
        <div className="project-image image9">
          <img src={project9} alt="" />
          <div className="single-card-text-holder">
            <div className="single-card-header">Machine Designs Evolution</div>
            <div className="single-card-content">
              This is the classic dummy text, a scrambled passage of Latin that
              provides a natural look for text layouts without any meaning...
              <span style={{ color: "#0047FF" }}>Read more</span>
            </div>
          </div>
        </div>
      </div>
      <div className="image5-link">See more &gt;</div>
    </div>
  );
}

export default OurProjects;
