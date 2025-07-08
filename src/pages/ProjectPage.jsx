
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/projects.css";
import ReUsableArticle2 from "../components/ReUsableComp/ReUsableArticle2";
import SideBar from "../components/SideBar";
import MobileFooter from "../components/MobileFooter";
import Star from "../components/Star";
import ProjectsData from "../Data/ProjectData2.json";
import LoadingStar from "../components/LoadingStar";

function ProjectPage() {
  const navigate = useNavigate();
  const params = useParams();

  const [projectsData, setProjectsData] = useState([]);
  const [activeDepartment, setActiveDepartment] = useState("");
  const [activeCategories, setActiveCategories] = useState({});
  const [isDotClickScroll, setIsDotClickScroll] = useState(false);

  const sectionsRef = useRef({});
  const scrollTimeoutRef = useRef(null);

  // Process data and initialize active categories
  useEffect(() => {
    const processedData = ProjectsData.Departments.map((dept) => ({
      ...dept,
      projects: dept.categories.flatMap((category) =>
        category.projects.map((project) => ({
          ...project,
          category: category.name,
          originalDepartment: dept.name, // Ensure department is preserved
        }))
      ),
    }));
    setProjectsData(processedData);

    const initialCategories = processedData.reduce((acc, dept) => {
      acc[dept.name] = "All";
      return acc;
    }, {});
    setActiveCategories(initialCategories);
  }, []);

  // Set initial active department from URL or default
  useEffect(() => {
    if (params.department) {
      setActiveDepartment(params.department);
    } else if (projectsData.length > 0) {
      setActiveDepartment(projectsData[0].name);
    }
  }, [projectsData, params.department]);

  // Scroll to active department
  useEffect(() => {
    if (projectsData.length && activeDepartment && !isDotClickScroll) {
      const section = document.getElementById(activeDepartment);
      if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [activeDepartment, projectsData, isDotClickScroll]);

  // Intersection Observer for updating active department during scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!isDotClickScroll) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveDepartment(entry.target.id);
            }
          });
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    projectsData.forEach((item) => {
      const section = sectionsRef.current[item.name];
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [projectsData, isDotClickScroll]);

  // Handle dot click
  const handleDotClick = (departmentName) => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    setIsDotClickScroll(true);
    setActiveDepartment(departmentName);

    const section = document.getElementById(departmentName);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      scrollTimeoutRef.current = setTimeout(() => {
        setIsDotClickScroll(false);
      }, 1200);
    }
  };

  // Handle category change for a specific department
  const handleCategoryChange = (deptName, categoryName) => {
    setActiveCategories((prev) => ({
      ...prev,
      [deptName]: categoryName,
    }));
  };

  // Handle project click to navigate to project details
  const handleProjectClick = (project, deptName) => {
    const category = project.category;
    const title = project.title.split(" ").join("-");
    console.log(`Navigating to: /project/${deptName}/${category}/${title}`);
    navigate(`/project/${deptName}/${category}/${title}`);
  };

  // Utility to format URL strings
  const formatUrlString = (text) => {
    if (!text || typeof text !== "string") {
      console.error("Invalid text input:", text);
      return "";
    }
    return text
      .toLowerCase()
      .split(" ")
      .join("-")
      .replace(/[^a-z0-9-]/g, "");
  };

  return (
    <>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      {!projectsData.length ? (<div>
            <LoadingStar />
          </div>
      ) : (
        <>
          <div className="project-page-hero-section">
            <div>
              <span>Projects</span>
              <Star />
            </div>
          </div>
          <div className="mobile-navigation-tabs">
            {projectsData.map((eachItem, i) => (
              <div
                key={i}
                onClick={() => handleDotClick(eachItem.name)}
                className={
                  activeDepartment === eachItem.name
                    ? "active-service-mob-tab"
                    : ""
                }
              >
                {eachItem.name}
              </div>
            ))}
          </div>
          <div className="project-page-content-container">
            <div className="service-page-main-dots-container">
              {projectsData.map((eachItem, i) => (
                <DepartmentDot
                  key={i}
                  eachItem={eachItem}
                  activeDepartment={activeDepartment}
                  setActiveDepartment={handleDotClick}
                />
              ))}
            </div>
            <div>
              {projectsData.map((eachItem, i) => {
                const categories = eachItem.categories.map((cat) => cat.name);
                const categoryButtons = ["All", ...categories];
                // const categoryButtons = ["All", ...categories.slice(0, 2)];
                const activeCategory = activeCategories[eachItem.name] || "All";
                const filteredProjects =
                  activeCategory === "All"
                    ? eachItem.projects
                    : eachItem.projects.filter(
                        (project) => project.category === activeCategory
                      );

                return (
                  <div
                    className="department-section"
                    key={i}
                    id={eachItem.name}
                    ref={(el) => (sectionsRef.current[eachItem.name] = el)}
                  >
                    <h2 className="product-dep-name">{eachItem.name}</h2>
                    <div className="category-buttons-container">
                      {categoryButtons.map((category, j) => (
                        <button
                          key={j}
                          className={`project-item-tab pointer ${
                            activeCategory === category
                              ? "project-item-tab-active"
                              : ""
                          }`}
                          onClick={() =>
                            handleCategoryChange(eachItem.name, category)                            
                          }
                          
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                    {filteredProjects.length > 0 ? (
                      <ReUsableArticle2
                        data={filteredProjects}
                        path={`/project/${eachItem.name}/${activeCategory}`}
                        onProjectClick={(project) =>
                          handleProjectClick(project, eachItem.name)
                        }
                        
                      />
                    ) : (
                      <p>No projects available for this category.</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
      <Footer />
      <MobileFooter />
    </>
  );
}

const DepartmentDot = ({ eachItem, activeDepartment, setActiveDepartment }) => {
  const [showDept, setShowDept] = useState(false);

  useEffect(() => {
    if (eachItem.name === activeDepartment) {
      setShowDept(true);
      const timeoutId = setTimeout(() => {
        setShowDept(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    } else {
      setShowDept(false);
    }
  }, [activeDepartment, eachItem.name]);

  return (
    <div className="service-page-dept-container">
      <div
        className={`service-page-main-dots ${
          eachItem.name === activeDepartment ? "service-page-main-dots-active" : ""
        }`}
        onClick={() => setActiveDepartment(eachItem.name)}
        onMouseOver={() => setShowDept(true)}
        onMouseOut={() => setShowDept(false)}
      ></div>
      {showDept && <div className="service-page-dept-name">{eachItem.name}</div>}
    </div>
  );
};

export default ProjectPage;



