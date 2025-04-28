import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Templet.css";
import Star from "../components/Star";

import Data from "../Data//Templates.json";

function Template1() {
  const { title } = useParams(); // Get title from URL
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
      <div
        className="temp1-banner-img"
        style={{ backgroundImage: `url(${project?.banner?.image})` }}
      >
        <div className="temp1-img-text test-selection-white">
          <div>{project?.banner?.text}</div>
        </div>
      </div>
      <div className="temp1-content-container">
        <div className="temp1-heading">
          <div className="temp1-title">{project?.industry?.title}</div>
          <div className="temp1-topic">
            Topics:{" "}
            {project?.industry?.topics?.map((topic, index) => (
              <span key={index}>
                <span style={{ color: "#0047FF" }}> #</span>
                {topic}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="temp1-sec1-container">
            <div className="temp1-sec1-img">
              <img src={project?.industry?.image} alt="Engine Image" />
            </div>
          </div>
        </div>
        <div>
          <div className="head-temp-style">{project?.product?.title}</div>
          <p className="para-temp-styles temp-margin">{project?.product?.description}</p>
          <div className="head-temp1-style">{project?.product?.subTitle}</div>
          <p className="para-temp-styles">{project?.product?.subDescription}</p>
          <div className="Problem-solution-temp-style">
            <div className="head-temp-style">{project?.problem?.title}</div>
            <p className="para-temp-styles">{project?.problem?.description}</p>
            <ul className="temp2-points">
              {project?.problem?.points?.map((para, index) => (
                <li className="para-temp-styles" key={index}>{para}</li>
              ))}
            </ul>
            {project?.problem?.subDescription?.map((para, index) => (
              <p className="para-temp-styles temp-margin"key={index}>{para}</p>
            ))}
          </div>
          <div className="Problem-solution-temp-style">
            <div className="head-temp-style">{project?.solution?.title}</div>
            <p className="para-temp-styles">
              {project?.solution?.description}
            </p>
            <ul className="temp2-points">
              {project?.solution?.points?.map((para, index) => (
                <li className="para-temp-styles" key={index}>{para}</li>
              ))}
            </ul>
          </div>
          <p className="para-temp-styles temp-margin">
            {project?.solution?.subDescription}
          </p>
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
          <p className="para-temp-styles temp-margin">
            {project?.staciaHelp?.subDescription}
          </p>
          <ul className="temp2-points">
              {project?.staciaHelp?.points?.map((para, index) => (
                <li className="para-temp-styles" key={index}>{para}</li>
              ))}
            </ul>
        </div>
      </div>
     
    </div>
  );
}

export default Template1;
