import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Templet.css";
import Star from "../components/Star";
import Data from "../Data//Templates.json";

function Template4() {
  const { title } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find the project that matches the URL title
    const matchedProject = Data.projects.find(
      (p) => p.title.replace(/\s+/g, "-").toLowerCase() === title.toLowerCase()
    );

    if (matchedProject) {
      setProject(matchedProject);
    }
  }, [title]);

  if (!project) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="temp5-project_container">
        <div className="temp4-project_section temp5-p-section">
          <div className="temp5-project_text">
            <span className="test-selection-white">{project?.title}</span>
            {project?.starComponent && <Star />}
          </div>
        </div>
      </div>
      <div
        className="temp5-banner-img"
        style={{ backgroundImage: `url(${project?.banner?.image})` }}
      >
        <div className="temp5-img-text test-selection-white">
          <div>{project?.banner?.text}</div>
        </div>
      </div>
      <div className="temp5-content-container">
        <div>
          <div className="temp5-sec1-title">L{project?.section1?.title}</div>
          <div className="temp5-sec1-container">
            <div className="temp5-sec1-content">
              <div>{project?.section1?.summaryHeading}</div>
              {project?.section1?.executiveSummary?.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
            <div className="temp5-sec1-img">
              <img src={project?.section1?.image} alt="GreenHouse Image" />
            </div>
          </div>
        </div>
        <div className="mid-container">
          <section className="temp4-sec2">
            <div className="temp4-sec2-img no-padding">
              <img src={project?.midContainer?.chilli} />
            </div>
            <div className="temp4-sec2-img2 second-image">
              <img src={project?.midContainer?.dryChilli} />
            </div>
          </section>
          <div className="text-mid-container">
            <div className="head2-temp-style head2-mid-container">
              {project?.midContainer?.title}
            </div>
            <p className="para-temp-styles para-mid-container">
              {project?.midContainer?.content}
            </p>
          </div>
        </div>
        <div className="temp4-sec2-list-container">
          {project?.section2?.listItems?.map((item, index) => (
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
          <div className="temp5-sec4-title">
            {project?.section3?.title}
          </div>
          <div className="temp5-sec3-container">
            <div className="temp4-sec4-img">
              <img src={project?.section3?.image} alt="Chilli Image" />
            </div>
            <div>
              <p className="para-temp-styles">
                {project?.section3?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template4;
