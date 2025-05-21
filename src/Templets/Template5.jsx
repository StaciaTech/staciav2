
// import React, { Suspense } from "react";
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Templet.css";

import Star from "../components/Star";
import Data from "../Data/ProjectData2.json";

import SuggestionProjects from "../components/ReUsableComp/SuggestionProjects";
import SuggestionProducts from "../components/ReUsableComp/SuggestionProducts";
import SuggestionService from "../components/ReUsableComp/SuggestionService";

const NavBar = React.lazy(() => import("../components/NavBar"));
const SideBar = React.lazy(() => import("../components/SideBar"));
const Footer = React.lazy(() => import("../components/Footer"));
const MobileFooter = React.lazy(() => import("../components/MobileFooter"));

function Template5() {
  const { title } = useParams(); // Get title from URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!Data || !Array.isArray(Data?.Departments)) {
      console.error("Data is undefined or does not contain Departments", Data);
      return;
    }

    // Normalize projectTitle from URL
    const normalizedTitle = decodeURIComponent(title)
      .replace(/-/g, " ")
      .trim()
      .toLowerCase();

    console.log("URL title:", normalizedTitle);

    let foundProject = null;

    // Loop through each department and category to find the matching project
    try {
      Data.Departments.forEach((department, deptIndex) => {
        if (!department || !Array.isArray(department?.categories)) {
          console.warn(`Department at index ${deptIndex} is invalid:`, department);
          return;
        }
        department.categories.forEach((category, catIndex) => {
          if (!category || !Array.isArray(category?.projects)) {
            console.warn(`Category at index ${catIndex} in department '${department?.name}' is invalid:`, category);
            return;
          }
          category.projects.forEach((item, projIndex) => {
            // Check if item.title is defined and is a string
            if (item && item.title && typeof item.title === "string") {
              if (item.title.trim().toLowerCase() === normalizedTitle) {
                foundProject = item;
              }
            } else {
              console.warn(
                `Project at index ${projIndex} in category '${category?.name || "unknown"}' of department '${department?.name || "unknown"}' has invalid or missing title:`,
                item
              );
            }
          });
        });
      });
    } catch (error) {
      console.error("Error processing project data:", error);
    }

    console.log("Matching Project in Template5:", foundProject);

    if (foundProject) {
      setProject(foundProject);
    } else {
      console.error("Project not found in Template5 for title:", normalizedTitle);
      setProject(null);
    }
  }, [title]);

  if (!project) {
    return <div>Project not found or loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className="nav_style">
          <NavBar />
          <SideBar />
        </div>
        {/* <div className="temp5-project_container">
          <div className="temp5-project_section temp5-p-section">
            <div className="temp5-project_text">
              <span className="test-selection-white">{project.title}</span>
              {project.starComponent && <Star />}
            </div>
          </div>
        </div> */}
        {/* <div
          className="temp5-banner-img"
          style={{ backgroundImage: `url(${project.mainImageUrl || "/assets/placeholder.jpg"})` }}
        >
          <div className="temp5-img-text test-selection-white">
            <div>{project.title|| "No description available"}</div>
          </div>
        </div> */}


        <div
          className="single-article-heading-card-container"
          style={{
            backgroundImage: `url(${project.mainImageUrl || "/default-image.jpg"})`,
          }}
        >
          <div className="single-article-heading test-seclection-white">
            {/* {getFirstTwoWords(singleArticle.title)} */}

            {project.title|| "No description available"}
          </div>
        </div>


        <div className="temp5-content-container">
          <div className="temp5-heading">
            <div className="temp5-title">Industry</div>
            <div className="temp5-topic">
              Topics:{" "}
              <span>
                <span style={{ color: "#0047FF" }}>#</span>
                {project.category || "Food Processing, Automation"}
              </span>
            </div>
          </div>
          <div>
            <div className="temp5-sec1-title">{project.title}</div>
            <div className="temp5-sec1-container">
              <div className="temp5-sec1-content">
                <div>Executive Summary</div>
                <p className="para-temp-styles temp-margin">
                  {project["Executive-Summary"] || "No executive summary available"}
                </p>
              </div>
              <div className="temp5-sec1-img">
                <img
                  src={project.mainImageUrl || "/assets/placeholder.jpg"}
                  alt={`${project.title} Image`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="head-temp-style">Client Overview</div>
            <p className="para-temp-styles temp-margin">
              {project["Client-Overview"] || "No client overview available"}
            </p>
            <div className="head-temp-style">Project Objective</div>
            {Array.isArray(project["Project-Objective"]) ? (
              project["Project-Objective"].map((obj, index) => (
                <li className="para-temp-styles temp-margin" key={index}>
                  {typeof obj === "string" ? obj : obj.des || "No objective description"}
                </li>
              ))
            ) : (
              <p className="para-temp-styles temp-margin">
                {project["Project-Objective"] || "No project objective available"}
              </p>
            )}
            <div className="head-temp-style">Challenges</div>
            {project.Challenges && Array.isArray(project.Challenges) ? (
              project.Challenges.map((challenge, index) => (
                <div className="temp5-sec2-list-container" key={index}>
                  <div className="temp5-sec2-list-num">{index + 1}</div>
                  <div>
                    <div className="temp5-sec2-list-title">{challenge.title || "Untitled Challenge"}</div>
                    <p className="para-temp-styles">{challenge.des || "No description"}</p>
                  </div>
                </div>
              ))
            ) : Array.isArray(project.Challenges) ? (
              project.Challenges.map((challenge, index) => (
                <div className="temp5-sec2-list-container" key={index}>
                  <div className="temp5-sec2-list-num">{index + 1}</div>
                  <div>
                    <div className="temp5-sec2-list-title">{challenge.title || "Untitled Challenge"}</div>
                    <p className="para-temp-styles">{challenge.des || "No description"}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="para-temp-styles temp-margin">No challenges listed</p>
            )}
            <div className="Solution">
              <div className="head-temp-style">Solution</div>
              <p className="temp5-sec4-subheading">
                Stacia Corp engineered a custom solution incorporating the following features:
              </p>
              <ul className="sol">
                {project.Solutions && Array.isArray(project.Solutions) && project.Solutions[0]?.data ? (
                  project.Solutions[0].data.map((solution, index) => (
                    <li className="para-temp-styles temp-margin" key={index}>
                      <span className="temp5-sec4-subheading">
                        {solution.title || "Untitled Solution"}:
                      </span>{" "}
                      {solution.des || "No description"}
                    </li>
                  ))
                ) : Array.isArray(project.Solutions) ? (
                  project.Solutions.map((solution, index) => (
                    <li className="para-temp-styles temp-margin" key={index}>
                      <span className="temp5-sec4-subheading">
                        {solution.title || "Untitled Solution"}:
                      </span>{" "}
                      {solution.des || "No description"}
                    </li>
                  ))
                ) : (
                  <li className="para-temp-styles temp-margin">No solutions listed</li>
                )}
              </ul>
            </div>
            <div className="head-temp-style">Development Process</div>
            {/* <p className="para-temp-styles temp-margin">
              {project["Development-Process"] || "No development process described"}
            </p>
            <div className="head-temp-style1">{project["title1"] || "No development process described"}</div>
            <p className="para-temp-styles temp-margin">
              {project["stage-Gate-Framework"] || "No development process described"}
            </p> */}
            <ul className="sol">
              {Array.isArray(project.Stage) ? (
                project.Stage.map((stage, index) => (
                  <div key={index}>
                    <p className="temp5-sec4-title">{stage.name || "Unnamed Stage"}</p>
                    <div className="sol">
                      <li className="para-temp-styles temp-margin">
                        {stage.Line1 || "No details"}
                      </li>
                      {stage.Line2 && (
                        <li className="para-temp-styles temp-margin">{stage.Line2}</li>
                      )}
                      {stage.Line3 && (
                        <li className="para-temp-styles temp-margin">{stage.Line3}</li>
                      )}
                    </div>
                    {Array.isArray(project.Gate) && project.Gate[index] && (
                      <div className="sol">
                        <p className="temp5-sec4-subheading">
                          Gate {project.Gate[index].id || index + 1} Decision
                        </p>
                        <div className="sol">
                          <li className="para-temp-styles temp-margin">
                            {project.Gate[index].Line1 || "No gate decision"}
                          </li>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <li className="para-temp-styles temp-margin">No stages listed</li>
              )}
            </ul>
            <div className="temp5-sec4-container">
              <div className="head-temp-style">Impact</div>
              <div className="temp5-sec3-container">
                <div className="temp5-sec4-img">
                  <img
                    src={project.mainImageUrl || "/assets/placeholder.jpg"}
                    alt={`${project.title} Image`}
                  />
                </div>
                <div>
                  <ul>
                    {project.Impacts && Array.isArray(project.Impacts) ? (
                      project.Impacts.map((impact, index) => (
                        <li className="para-temp-styles temp-margin" key={index}>
                          <span className="temp5-sec4-subheading">
                            {impact.title || "Untitled Impact"}:
                          </span>{" "}
                          {impact.des || "No description"}
                        </li>
                      ))
                    ) : Array.isArray(project.Impacts) ? (
                      project.Impacts.map((impact, index) => (
                        <li className="para-temp-styles temp-margin" key={index}>
                          <span className="temp5-sec4-subheading">
                            {impact.title || "Untitled Impact"}:
                          </span>{" "}
                          {impact.des || "No description"}
                        </li>
                      ))
                    ) : (
                      <li className="para-temp-styles temp-margin">No impacts listed</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="head-temp-style">Conclusion</div>
            <p className="para-temp-styles temp-margin">
              {project.Conclusion || "No conclusion provided"}
            </p>
            {project.Conclusion2 && (
              <p className="para-temp-styles temp-margin">{project.Conclusion2}</p>
            )}
            <div className="head-temp-style">References</div>
            <div className="refer-con">
              <ol>
                {Array.isArray(project.References) ? (
                  project.References.map((ref, index) => (
                    <div className="sol">
                      <li className="para-temp-styles temp-margin" key={index}>
                        {ref || "No reference"}
                      </li>
                    </div>
                  ))
                ) : (
                  <li className="para-temp-styles temp-margin">No references listed</li>
                )}
              </ol>
            </div>
            {project["Client-Overview2"] && (
              <div className="Client Overview">
                <div className="head-temp-style">Client Overview</div>
                <p className="para-temp-styles temp-margin">
                  {project["Client-Overview2"]}
                </p>
              </div>
            )}
            {project["Project-Objective2"] && (
              <div className="Project Objective">
                <div className="head-temp-style">Project Objective</div>
                <p className="para-temp-styles temp-margin">
                  {project["Project-Objective2"]}
                </p>
              </div>
            )}
            {project.Challenges2 && Array.isArray(project.Challenges2) && (
              <div className="project-challenges">
                <div className="head-temp-style">Challenges</div>
                <ul className="para-temp-styles temp-margin">
                  {project.Challenges2.map((challenge, index) => (
                    <li className="para-temp-styles temp-margin" key={index}>
                      <span className="temp5-sec4-subheading">
                        {challenge.title || "Untitled Challenge"}:
                      </span>{" "}
                      {challenge.des || "No description"}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.Solutions2 && Array.isArray(project.Solutions2) && project.Solutions2[0]?.data && (
              <div className="project-solution">
                <div className="head-temp-style">Solution</div>
                <p className="temp5-sec4-subheading">Salient Features</p>
                <ul className="sol">
                  {project.Solutions2[0].data.map((solution, index) => (
                    <li className="para-temp-styles temp-margin" key={index}>
                      <span className="temp5-sec4-subheading">
                        {solution.title || "Untitled Solution"}:
                      </span>{" "}
                      {solution.des || "No description"}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project["Technical-Implementation"] && Array.isArray(project["Technical-Implementation"]) && (
              <div>
                <p className="temp5-sec4-subheading">Technical Implementation</p>
                <ul className="sol">
                  {project["Technical-Implementation"].map((tech, index) => (
                    <li className="para-temp-styles temp-margin" key={index}>
                      <span className="temp5-sec4-subheading">{tech.title || "Untitled"}:</span>{" "}
                      {tech.des || "No description"}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.Impacts2 && Array.isArray(project.Impacts2) && (
              <div className="project-Impact & Benefits">
                <div className="temp5-sec4-title">Impact & Benefits</div>
                <ul className="sol">
                  {project.Impacts2.map((impact, index) => (
                    <li className="para-temp-styles temp-margin" key={index}>
                      <span className="temp5-sec4-subheading">{impact.title || "Untitled Impact"}:</span>{" "}
                      {impact.des || "No description"}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.Conclusion2 && (
              <div className="Conclusion">
                <div className="head-temp-style">Conclusion</div>
                <p className="para-temp-styles temp-margin">{project.Conclusion2}</p>
              </div>
            )}
          </div>
        </div>
           <SuggestionService />
              <SuggestionProducts />
              <SuggestionProjects />
        <div>
          <Footer />
          <MobileFooter />
        </div>
      </div>
    </Suspense>
  );
}

export default Template5;
