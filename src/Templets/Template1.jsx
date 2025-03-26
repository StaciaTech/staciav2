import React, { useEffect, useState } from "react";
import "../styles/Templet.css";
import Star from "../components/Star";
import Data from "../Data//Templates.json";

function Template1() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(Data);
  }, []);

  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }

  // Assuming we need to display only the first project
  const project = data?.projects?.[1];
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
          <p className="para-temp-styles">{project?.product?.description}</p>
          <div className="head-temp1-style">{project?.product?.subTitle}</div>
          <p className="para-temp-styles">{project?.product?.subDescription}</p>
          <div className="Problem-solution-temp-style">
            <div className="head-temp-style">{project?.problem?.title}</div>
            <p className="para-temp-styles">{project?.problem?.description}</p>
            <ul className="para-temp-styles">
              {project?.problem?.points?.map((para, index) => (
                <li key={index}>{para}</li>
              ))}
            </ul>
            {project?.problem?.subDescription?.map((para, index) => (
              <p className="para-temp-styles"key={index}>{para}</p>
            ))}
          </div>
          <div className="Problem-solution-temp-style">
            <div className="head-temp-style">{project?.solution?.title}</div>
            <p className="para-temp-styles">
              {project?.solution?.description}
            </p>
            <ul className="para-temp-styles">
              {project?.solution?.points?.map((para, index) => (
                <li key={index}>{para}</li>
              ))}
            </ul>
          </div>
          <p className="para-temp-styles">
            {project?.solution?.subDescription}
          </p>
          <hr />
          <div className="temp1-sec3-container">
            <div className="temp1-sec3-content-container">
              <div className="head-temp-style">{project?.staciaHelp?.title}</div>
              <div className="temp1-sec3-subtitle">
                {project?.staciaHelp?.subtitle}
              </div>
              <p className="para-temp-styles">
                {project?.staciaHelp?.description}
              </p>
            </div>
          </div>
          <p className="para-temp-styles">
            {project?.staciaHelp?.subDescription}
          </p>
          <ul className="para-temp-styles">
              {project?.staciaHelp?.points?.map((para, index) => (
                <li key={index}>{para}</li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Template1;
