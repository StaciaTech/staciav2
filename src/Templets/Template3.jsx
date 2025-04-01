import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Templet.css";
import Star from "../components/Star";

// import ReverseKettle from "../assets/Reverse-Kettle.webp";
import Data from "../Data//Templates.json";

const Template3 = () => {
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
        <div className="temp5-project_section temp5-p-section">
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
      <div className="temp1-content-container">
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
        <div>
          <div className="head-temp-style">{project?.product?.title}</div>
          {project?.product?.description?.map((para, index) => (
              <p className="para-temp-styles temp-margin"key={index}>{para}</p>
            ))}
        </div>
        <div className="temp3-sec1-title">
          <p>
            {project?.testimonial1?.description}
          </p>
        </div>
        <p className="name">{project?.testimonial1?.name}</p>
        <p className="designation">{project?.testimonial1?.designation}</p>
        <div className="temp2-head">
          <div className="temp2-title1">
            {project?.Heading1?.title}
          </div>
          <div className="temp2-content1">
            Goal: <span>{project?.Heading1?.topic}</span>
          </div>
        </div>
        <div>
          <div className="head-temp-style">{project?.Approach?.title}</div>
          <p className="para-temp-styles temp-margin">
          {project?.Approach?.content}
          </p>
        </div>
        <ul className="temp2-points">
              {project?.Approach?.points?.map((para, index) => (
                <li className="para-temp-styles" key={index}>{para}</li>
              ))}
          </ul>
        <div>
          <div className="head-temp-style">{project?.Result?.title}</div>
          {project?.Result?.content?.map((para, index) => (
              <p className="para-temp-styles temp-margin"key={index}>{para}</p>
            ))}
        </div>
        <div className="temp3-sec1-title">
          <p>
            {project?.testimonial2?.description}
          </p>
        </div>
        <p className="name">{project?.testimonial2?.name}</p>
        <p className="designation">{project?.testimonial2?.designation}</p>
        <div className="temp2-head">
          <div className="temp2-title1">
            {project?.Heading2?.title}
          </div>
          <div className="temp2-content1">
            Goal: <span>{project?.Heading1?.topic}</span>
          </div>
        </div>
        <div>
          <div className="head-temp-style">{project?.Approach1?.title}</div>
          <p className="para-temp-styles temp-margin">
          {project?.Approach1?.content}
          </p>
        </div>
        <ul className="temp2-points">
              {project?.Approach1?.points?.map((para, index) => (
                <li className="para-temp-styles" key={index}>{para}</li>
              ))}
          </ul>
        <div>
          <div className="head-temp-style">{project?.Result1?.title}</div>
          {project?.Result1?.content?.map((para, index) => (
              <p className="para-temp-styles temp-margin"key={index}>{para}</p>
            ))}
        </div>
        <div className="temp3-sec1-title">
          <p>
            {project?.testimonial3?.description}
          </p>
        </div>
        <p className="name">{project?.testimonial3?.name}</p>
        <p className="designation">{project?.testimonial3?.designation}</p>
        <div>
          <div className="head-temp-style">{project?.solution?.title}</div>
          <p className="para-temp-styles temp-margin">
            {project?.solution?.content}
          </p>
        </div>
        <ul className="temp2-points">
              {project?.solution?.points?.map((para, index) => (
                <li className="para-temp-styles" key={index}>{para}</li>
              ))}
          </ul>
      </div>
    </div>
  );
};

export default Template3;
