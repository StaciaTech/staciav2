import React, { useEffect, useState } from "react";
import "../styles/Templet.css";
import Star from "../components/Star";
import Data from "../Data/Templates.json";

function Template5() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(Data);
  }, []);

  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }

  // Assuming we need to display only the first project
  const project = data?.projects?.[0];

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
      <div className="temp5-content-container">
        <div className="temp5-heading">
          <div className="temp5-title">{project?.industry?.title}</div>
          <div className="temp5-topic">
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
          <div className="temp5-sec1-title">{project?.section1?.title}</div>
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
        <div>
          <div className="head-temp-style">{project?.section2?.heading}</div>
          {project?.section2?.paragraphs?.map((para, index) => (
            <p className="para-temp-styles" key={index}>
              {para}
            </p>
          ))}
          {project?.section2?.listItems?.map((item, index) => (
            <div className="temp5-sec2-list-container" key={index}>
              <div className="temp5-sec2-list-num">{item.number}</div>
              <div>
                <div className="temp5-sec2-list-title">{item.title}</div>
                <p className="para-temp-styles">{item.description}</p>
              </div>
            </div>
          ))}
          {project?.section3?.midSection?.map((item, index) => (
            <p className="para-temp-styles" key={index}>
              {item.para}
            </p>
          ))}
          <div className="temp5-sec4-container">
            <div className="temp5-sec3-container">
              <div>
                <p className="para-temp-styles">{project?.section4?.content}</p>
              </div>
              <div className="temp5-sec4-mid">
                <hr />
                <div className="temp5-sec4-content">
                  <p className="temp5-sec4-heading">
                    {project?.section4?.midSection?.heading}
                  </p>
                  <p className="temp5-sec4-subheading">
                    {project?.section4?.midSection?.subheading}
                  </p>
                  <p className="temp5-sec4-para">
                    {project?.section4?.midSection?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {project?.section5 && (
            <>
              <p className="para-temp-styles">{project?.section5?.content}</p>
              <div className="temp5-sec4-container">
                <div className="temp5-sec4-title">{project?.section5?.title}</div>
                <div className="temp5-sec3-container">
                  <div className="temp5-sec4-img">
                    <img src={project?.section5?.image} alt="Chilli Image" />
                  </div>
                  <div>
                    <div className="temp5-sec3-subtitle">
                      {project?.section5?.subsection?.title}
                    </div>
                    <p className="para-temp-styles">
                      {project?.section5?.subsection?.description}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          {project?.conclusion?.map((item, index) => (
            <p className="para-temp-styles" key={index}>
              {item.para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Template5;