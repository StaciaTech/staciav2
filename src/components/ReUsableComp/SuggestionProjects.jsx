import React, { useRef } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/ProjectData2.json";
import "../../styles/SuggestionCasestudys.css";

const SuggestionProjects = ({ currentProjectId }) => {
  const scrollRef = useRef(null);

  // Flatten the nested JSON structure to get all projects
  const allProjects = [];
  data.Departments.forEach((department) => {
    department.categories.forEach((category) => {
      category.projects.forEach((project) => {
        if (project.id !== currentProjectId) {
          allProjects.push(project);
        }
      });
    });
  });

  // Scroll to center the clicked project card
  const scrollToProject = (index) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const cardWidth = 374; // 350px card + 24px gap (1.5rem)
      const containerWidth = scrollContainer.clientWidth;
      const scrollPosition =
        index * cardWidth - (containerWidth - cardWidth) / 2;
      scrollContainer.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="suggestion-casestudys-container">
      <h2>Suggested Projects</h2>
      <div className="suggestion-casestudys-scroll-wrapper">
        <div className="suggestion-casestudys-scroll" ref={scrollRef}>
          {allProjects.length > 0 ? (
            allProjects.map((project, index) => (
              <div key={project.id} className="suggestion-casestudy-card">
                <Link to={`/projects/${project.id}`}>
                  <img
                    src={
                      project.mainImageUrl ||
                      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                    }
                    alt={project.title || "Project"}
                    onClick={() => window.scrollTo(0, 0)}
                  />
                </Link>
                <div className="content">
                  <h3 onClick={() => scrollToProject(index)}>
                    {project.title || "Untitled"}
                  </h3>
                  <p>
                    {project.mainDesc?.length > 80
                      ? `${project.mainDesc.substring(0, 80)}...`
                      : project.mainDesc || "No description available."}
                  </p>
                  <Link
                    to={`/projects/${project.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Know more →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No other projects available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestionProjects;
