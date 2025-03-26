import React, { useEffect, useState } from "react";
import "../styles/ProjectDropdown.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Star from "../assets/loadingStar.svg";

function ProjectDropdown({ handleClose }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [projectsData, setProjectsData] = useState();

  const FetchProjects = async () => {
    try {
      const res = await axios.get(`${apiUrl}/projects/list`);
      setProjectsData(res.data.docs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchProjects();
  }, []);

  console.log(projectsData);

  const [activeDept, setActiveDept] = useState();
  const [activeCategory, setActiveCategory] = useState();
  const [activeProject, setActiveProject] = useState();
  const [categoryArr, setCategoryArr] = useState();
  const [projectArr, setProjectArr] = useState();
  const [foundProject, setFoundProject] = useState();

  useEffect(() => {
    if (activeDept) {
      setCategoryArr(
        projectsData?.find((eachProject) => eachProject.name === activeDept)
      );
    }
  }, [activeDept, projectsData]);

  useEffect(() => {
    if (activeCategory) {
      setProjectArr(
        categoryArr?.categories.find(
          (eachitem) => eachitem.name === activeCategory
        )
      );
    }
  }, [activeCategory, categoryArr]);

  useEffect(() => {
    if (activeProject) {
      setFoundProject(
        projectArr?.projects.find(
          (eachItem) => eachItem.title === activeProject
        )
      );
    }
  }, [activeProject, projectArr]);

  return (
    <div className="project-dd-container">
      <div className="project-dept-container">
        <div className="project-top-titles">Departments</div>
        {projectsData?.map((eachitem, i) => {
          const departmentRoutKey = eachitem.name.split(" ").join("-");
          return (
            <div
              onMouseEnter={() => {
                setActiveDept(eachitem.name);
              }}
              onClick={() => {
                navigate(`/project/${departmentRoutKey}`);
                window.scrollTo(0, 0);
                handleClose();
              }}
              className={`project-main-item ${
                eachitem.name === activeDept ? "project-main-item-active" : ""
              }`}
            >
              <span>{eachitem.name}</span>
              {eachitem.name === activeDept && (
                <img
                  src={Star}
                  alt=""
                  style={{ width: "18px", marginLeft: "1rem" }}
                />
              )}
            </div>
          );
        })}
      </div>
      {activeDept && categoryArr && (
        <div className="project-category-container">
          <div className="project-title-dot-container">
            <div>
              {categoryArr?.categories.map((eachitem, i) => (
                <div
                  key={i}
                  className={`project-title-dot ${
                    eachitem.name === activeCategory
                      ? "project-title-dot-active"
                      : ""
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="project-title-holder">
            {" "}
            <div className="project-top-titles">Categories</div>
            {categoryArr?.categories.map((eachitem, i) => {
              const departmentRoutKey = activeDept.split(" ").join("-");
              const categoryRouteKey = eachitem.name.split(" ").join("-");
              return (
                <div
                  key={i}
                  onMouseEnter={() => setActiveCategory(eachitem.name)}
                  className={`project-main-item ${
                    eachitem.name === activeCategory
                      ? "project-main-item-active"
                      : ""
                  }`}
                  onClick={() => {
                    navigate(
                      `/project/${departmentRoutKey}/${categoryRouteKey}`
                    );
                    window.scrollTo(0, 0);
                    handleClose();
                  }}
                >
                  <span>{eachitem.name}</span>
                  {eachitem.name === activeCategory && (
                    <img
                      src={Star}
                      alt=""
                      style={{ width: "18px", marginLeft: "1rem" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {activeCategory && projectArr && (
        <div className="project-title-container">
          <div className="project-title-dot-container">
            <div>
              {projectArr?.projects.map((eachProject, i) => (
                <div
                  key={i}
                  className={`project-title-dot ${
                    eachProject.title === activeProject
                      ? "project-title-dot-active"
                      : ""
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div>
            {" "}
            <div className="project-top-titles">Projects</div>
            {projectArr?.projects.map((eachProject, i) => {
              const departmentRoutKey = activeDept.split(" ").join("-");
              const categoryRouteKey = activeCategory.split(" ").join("-");
              const projectRouteKey = eachProject.title.split(" ").join("-");
              return (
                <div
                  key={i}
                  onMouseEnter={() => setActiveProject(eachProject.title)}
                  className={`project-main-item ${
                    eachProject.title === activeProject
                      ? "project-main-item-active"
                      : ""
                  }`}
                  onClick={() => {
                    navigate(
                      `/project/${departmentRoutKey}/${categoryRouteKey}/${projectRouteKey}`
                    );
                    window.scrollTo(0, 0);
                    handleClose();
                  }}
                >
                  <span>{eachProject.title}</span>
                  {eachProject.title === activeProject && (
                    <img
                      src={Star}
                      alt=""
                      style={{ width: "18px", marginLeft: "1rem" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {activeProject && foundProject && (
        <div className="project-item-contaienr">
          <div className="project-item-card-image">
            <img src={foundProject.image.imageUrl} alt="" />
          </div>
          <div className="project-item-card-title">{foundProject.title}</div>
          <p className="project-item-card-des">{foundProject.description}</p>
          <div
            style={{ display: "flex", justifyContent: "end", width: "100%" }}
            className="know-more"
            onClick={() => {
              navigate(
                `/project/${activeDept.split(" ").join("-")}/${activeCategory
                  .split(" ")
                  .join("-")}/${foundProject.title.split(" ").join("-")}`
              );
              window.scrollTo(0, 0);
              handleClose();
            }}
          >
            Know More
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDropdown;
