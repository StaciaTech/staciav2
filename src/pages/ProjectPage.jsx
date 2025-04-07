import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/projects.css";
// import WorkInProgress from "../components/WorkInProgress";
import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
import SideBar from "../components/SideBar";
import MobileFooter from "../components/MobileFooter";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useParams } from "react-router-dom";
import Star from "../components/Star";
import ProjectsData from "../Data/ProjectsData.json"

function ProjectPage() {
  const params = useParams();
  console.log("Department: ",params.department);
  console.log(params.category);

  // const navigate = useNavigate();
  const [projectsData, setProjectsData] = useState();

  useEffect(() => {
    setProjectsData(ProjectsData.Projects)
  },[])

  const [activeDepartment, setActiveDepartment] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [departmentObj, setDepartmentObj] = useState();
  const [foundProjectsObj, setFoundProjectsObj] = useState();

  useEffect(() => {
    if (params.department) {
      setActiveDepartment(params.department);
    } else {
      setActiveDepartment(projectsData ? projectsData[0]?.name : "");
    }
  }, [projectsData, params]);
  // console.log(activeDepartment);

  useEffect(() => {
    if (activeDepartment && projectsData) {
      setDepartmentObj(
        projectsData?.find((eachItem) => eachItem.name === activeDepartment)
      );
    }
    if (departmentObj && !params.categories) {
      setActiveCategory(departmentObj?.categories[0]?.name);
    }
  }, [activeDepartment, projectsData, departmentObj, params]);
  // console.log(activeCategory);
  // console.log(departmentObj);

  useEffect(() => {
    if (activeCategory && departmentObj) {
      setFoundProjectsObj(
        departmentObj?.categories?.find(
          (eachItem) => eachItem.name === activeCategory
        )
      );
    }
  }, [activeCategory, departmentObj]);

  // console.log(foundProjectsObj?.projects);

  const [showHiddenDepts, setShowHiddenDepts] = useState(false);

  return (
    <>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      <div className="project-page-hero-section">
        <div>
          <span>Projects</span>
          <Star />
        </div>
      </div>
      <div>
        <div>
          <div className="project-department-container">
            <div
              onClick={() => setShowHiddenDepts(!showHiddenDepts)}
              className="project-active-dept"
            >
              <span>{activeDepartment}</span>
              <>
                {showHiddenDepts ? (
                  <IoIosArrowUp fontWeight={"bold"} />
                ) : (
                  <IoIosArrowDown />
                )}
              </>
            </div>
            {showHiddenDepts && (
              <div className="project-hidden-departments">
                {projectsData
                  ?.filter((eachItem) => eachItem.name !== activeDepartment)
                  .map((eachproject, i) => {
                    return (
                      <div
                        onClick={() => {
                          setActiveDepartment(eachproject.name);
                          setShowHiddenDepts(false);
                        }} key={i}
                      >
                        {eachproject.name}
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
          <div className="project-item-tabs-container">
            {departmentObj?.categories.map((eachItem, i) => {
              return (
                <div
                  key={i}
                  className={`article-item-tab pointer ${
                    eachItem.name === activeCategory
                      ? "article-item-tab-active"
                      : ""
                  }`}
                  onClick={() => setActiveCategory(eachItem.name)}
                >
                  {eachItem.name}
                </div>
              );
            })}
          </div>
          {/* <WorkInProgress /> */}
        </div>
      </div>  
      <div>
        <ReUsableArticle
          data={foundProjectsObj?.projects}
          path={`/project/${activeDepartment}/${activeCategory}`}
        />
      </div>
      <Footer />
      <MobileFooter />
    </>
  );
}

export default ProjectPage;
