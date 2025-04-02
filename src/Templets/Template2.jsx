import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Star from "../components/Star";
import "../styles/Templet.css";
// import Engine2 from "../assets/Engine2.webp";
import Data from "../Data//Templates.json";


function Template2() {
  const { title } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
      if (!Data || !Data.Projects) {
        console.error("Data is undefined or does not contain Projects", Data);
        return;
      }
    
      console.log("Template5 Data Structure:", Data.Projects);
    
      // Normalize projectTitle from URL
      const normalizedTitle = decodeURIComponent(title)
        .replace(/-/g, " ") // Replace hyphens with spaces
        .trim()
        .toLowerCase();
    
      console.log("url title: ", normalizedTitle);
    
      let foundProject = null;
    
      // Loop through each category to find the matching project
      Data.Projects.forEach((projectCategory) => {
        projectCategory.categories.forEach((category) => {
          category.projects.forEach((item) => {
            if (item.title.trim().toLowerCase() === normalizedTitle) {
              foundProject = item;
            }
          });
        });
      });
    
      console.log("Matching Project in Template5:", foundProject);
    
      if (foundProject) {
        setProject(foundProject);
      } else {
        console.error("Project not found in Template5!");
      }
    }, [title, Data]);

  return (
    <div>
      <div className="temp5-project_container">
        <div className="temp5-project_section temp5-p-section">
          <div className="temp5-project_text">
            <span className="test-selection-white">{project?.title}</span>
            {project?.starComponent && <Star />}
          </div>
        </div>
      </div>
      <div className="temp1-content-container">
        <div className="temp2-heading-content">
          <div className="temp2-head">
            <div className="temp2-title1">{project?.heading?.title}</div>
            <div className="temp2-content1">
              Goal: <span>{project?.heading?.topic}</span>
            </div>
          </div>
          <div>
            <div className="temp2-title1">{project?.industry?.title}</div>
            <div className="temp2-topic">
              Topics:{" "}
              {project?.industry?.topics?.map((topic, index) => (
                <span key={index}>
                  <span style={{ color: "#0047FF" }}> #</span>
                  {topic}
                </span>
              ))}
            </div>
          </div>
          <div className="temp2-section1-container">
            <div className="temp2-section1-img">
              <img src={project?.industry?.image} alt="Engine" />
            </div>
          </div>
        </div>
        <div>
          <div className="head2-temp-style head2-title">
            {project?.Heading2}
          </div>
        </div>
        <div>
          <div className="head-temp-style">{project?.product?.title}</div>
          <p className="para-temp-styles para-content">
            {project?.product?.description}
          </p>
        </div>
        <div>
          <div className="head2-temp-style">{project?.midContent?.title}</div>
          {project?.midContent?.para?.map((para, index) => (
            <p className="para-temp-styles temp-margin" key={index}>
              {para}
            </p>
          ))}
        </div>
        <div className="Problem-solution-temp-style">
          <div className="head-temp-style">{project?.problem?.title}</div>
          <p className="para-temp-styles">{project?.problem?.description}</p>
          <ul className="temp2-points">
            {project?.problem?.points?.map((para, index) => (
              <li className="para-temp-styles" key={index}>
                {para}
              </li>
            ))}
          </ul>
        </div>
        <div className="Problem-solution-temp-style">
          <div className="head-temp-style">{project?.solution?.title}</div>
          <p className="para-temp-styles">{project?.solution?.description}</p>
          <ul className="temp2-points">
            {project?.solution?.points?.map((para, index) => (
              <li className="para-temp-styles" key={index}>
                {para}
              </li>
            ))}
          </ul>
          {project?.solution?.subDescription?.map((para, index) => (
            <p className="para-temp-styles temp-margin" key={index}>
              {para}
            </p>
          ))}
        </div>
        <hr />
        <div className="temp1-sec3-container">
          <div className="temp1-sec3-content-container">
            <div className="head-temp-style">{project?.staciaHelp?.title}</div>
            <div className="temp1-sec3-subtitle">
              {project?.staciaHelp?.subtitle}
            </div>
            <p className="para-temp-styles temp-margin">
              {project?.staciaHelp?.description}
            </p>
          </div>
        </div>
        <p className="para-temp-styles">
          {project?.staciaHelp?.subDescription}
        </p>
        <ul className="temp2-points">
          {project?.staciaHelp?.points?.map((para, index) => (
            <li className="para-temp-styles" key={index}>
              {para}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Template2;
