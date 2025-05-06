// Old filter

// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/projects.css";
// // import WorkInProgress from "../components/WorkInProgress";
// import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
// import SideBar from "../components/SideBar";
// import MobileFooter from "../components/MobileFooter";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";
// import { useParams } from "react-router-dom";
// import Star from "../components/Star";
// import ProjectsData from "../Data/ProjectsData.json";

// function ProjectPage() {
//   const params = useParams();
//   console.log("Department: ",params.department);
//   console.log(params.category);

//   // const navigate = useNavigate();
//   const [projectsData, setProjectsData] = useState();

//   useEffect(() => {
//     setProjectsData(ProjectsData.Departments)
//   },[])

//   const [activeDepartment, setActiveDepartment] = useState("");
//   const [activeCategory, setActiveCategory] = useState("");
//   const [departmentObj, setDepartmentObj] = useState();
//   const [foundProjectsObj, setFoundProjectsObj] = useState();

//   useEffect(() => {
//     if (params.department) {
//       setActiveDepartment(params.department);
//     } else {
//       setActiveDepartment(projectsData ? projectsData[0]?.name : "");
//     }
//   }, [projectsData, params]);
//   // console.log(activeDepartment);

//   useEffect(() => {
//     if (activeDepartment && projectsData) {
//       setDepartmentObj(
//         projectsData?.find((eachItem) => eachItem.name === activeDepartment)
//       );
//     }
//     if (departmentObj && !params.categories) {
//       setActiveCategory(departmentObj?.categories[0]?.name);
//     }
//   }, [activeDepartment, projectsData, departmentObj, params]);
//   // console.log(activeCategory);
//   // console.log(departmentObj);

//   useEffect(() => {
//     if (activeCategory && departmentObj) {
//       setFoundProjectsObj(
//         departmentObj?.categories?.find(
//           (eachItem) => eachItem.name === activeCategory
//         )
//       );
//     }
//   }, [activeCategory, departmentObj]);

//   // console.log(foundProjectsObj?.projects);

//   const [showHiddenDepts, setShowHiddenDepts] = useState(false);

//   return (
//     <>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       <div className="project-page-hero-section">
//         <div>
//           <span>Projects</span>
//           <Star />
//         </div>
//       </div>
//       <div>
//         <div>
//           <div className="project-department-container">
//             <div
//               onClick={() => setShowHiddenDepts(!showHiddenDepts)}
//               className="project-active-dept"
//             >
//               <span>{activeDepartment}</span>
//               <>
//                 {showHiddenDepts ? (
//                   <IoIosArrowUp fontWeight={"bold"} />
//                 ) : (
//                   <IoIosArrowDown />
//                 )}
//               </>
//             </div>
//             {showHiddenDepts && (
//               <div className="project-hidden-departments">
//                 {projectsData
//                   ?.filter((eachItem) => eachItem.name !== activeDepartment)
//                   .map((eachDept, i) => {
//                     return (
//                       <div
//                         onClick={() => {
//                           setActiveDepartment(eachDept.name);
//                           setShowHiddenDepts(false);
//                         }} key={i}
//                       >
//                         {eachDept.name}
//                       </div>
//                     );
//                   })}
//               </div>
//             )}
//           </div>
//           <div className="project-item-tabs-container">
//             {departmentObj?.categories.map((eachItem, i) => {
//               return (
//                 <div
//                   key={i}
//                   className={`article-item-tab pointer ${
//                     eachItem.name === activeCategory
//                       ? "article-item-tab-active"
//                       : ""
//                   }`}
//                   onClick={() => setActiveCategory(eachItem.name)}
//                 >
//                   {eachItem.name}
//                 </div>
//               );
//             })}
//           </div>
//           {/* <WorkInProgress /> */}
//         </div>
//       </div>  
//       <div>
//         <ReUsableArticle
//           data={foundProjectsObj?.projects}
//           path={`/project/${activeDepartment}/${activeCategory}`}
//         />
//       </div>
//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }

// export default ProjectPage;


// With dot container (but with the industry names)

// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/projects.css";
// import ReUsableArticle2 from "../components/ReUsableComp/ReUsableArticle2";
// import SideBar from "../components/SideBar";
// import MobileFooter from "../components/MobileFooter";
// import { IoIosArrowForward } from "react-icons/io";
// import Star from "../components/Star";
// import ProjectsData from "../Data/ProjectsData.json";

// function ProjectPage() {
//   const navigate = useNavigate();
//   const params = useParams();

//   const [projectsData, setProjectsData] = useState([]);
//   const [activeDepartment, setActiveDepartment] = useState("");
//   const [isDotClickScroll, setIsDotClickScroll] = useState(false); // Tracks dot-initiated scrolls

//   const sectionsRef = useRef({});
//   const scrollTimeoutRef = useRef(null); // To manage scroll timeout

//   // Simulate fetching data
//   useEffect(() => {
//     setProjectsData(ProjectsData.Departments || []);
//   }, []);

//   // Set initial active department from URL or default
//   useEffect(() => {
//     if (params.department) {
//       setActiveDepartment(params.department);
//     } else if (projectsData.length > 0) {
//       setActiveDepartment(projectsData[0].name);
//     }
//   }, [projectsData, params.department]);

//   // Scroll to active department on mount or when changed (not during dot-click scroll)
//   useEffect(() => {
//     if (projectsData.length && activeDepartment && !isDotClickScroll) {
//       const section = document.getElementById(activeDepartment);
//       if (section) {
//         const yOffset = -80; // Adjust for navbar
//         const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     }
//   }, [activeDepartment, projectsData, isDotClickScroll]);

//   // Intersection Observer for updating active department during scrolling
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (!isDotClickScroll) { // Allow updates during manual scrolling
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActiveDepartment(entry.target.id);
//             }
//           });
//         }
//       },
//       {
//         root: null,
//         threshold: 0.3, // Trigger when 30% of the section is in view
//       }
//     );

//     projectsData.forEach((item) => {
//       const section = sectionsRef.current[item.name];
//       if (section) observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, [projectsData, isDotClickScroll]);

//   // Handle dot click
//   const handleDotClick = (departmentName) => {
//     if (scrollTimeoutRef.current) {
//       clearTimeout(scrollTimeoutRef.current); // Clear existing timeout
//     }

//     setIsDotClickScroll(true); // Disable observer updates for dot clicks
//     setActiveDepartment(departmentName); // Set target department

//     const section = document.getElementById(departmentName);
//     if (section) {
//       const yOffset = -80;
//       const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });

//       // Reset dot-click scroll after animation
//       scrollTimeoutRef.current = setTimeout(() => {
//         setIsDotClickScroll(false);
//       }, 1200); // Duration for scroll animation
//     }
//   };

//   // Handle project click to navigate to project details
//   const handleProjectClick = (project, deptName, categoryName) => {
//     navigate(`/project/${deptName}/${categoryName}/${project.id || project.title}`);
//   };

//   return (
//     <>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       {!projectsData.length ? (
//         <div>Loading...</div>
//       ) : (
//         <>
//           <div className="project-page-hero-section">
//             <div>
//               <span>Projects</span>
//               <Star />
//             </div>
//           </div>
//           <div className="mobile-navigation-tabs">
//             {projectsData.map((eachItem, i) => (
//               <div
//                 key={i}
//                 onClick={() => handleDotClick(eachItem.name)}
//                 className={
//                   activeDepartment === eachItem.name
//                     ? "active-service-mob-tab"
//                     : ""
//                 }
//               >
//                 {eachItem.name}
//               </div>
//             ))}
//           </div>
//           <div className="service-page-content-container">
//             <div className="service-page-main-dots-container">
//               {projectsData.map((eachItem, i) => (
//                 <DepartmentDot
//                   key={i}
//                   eachItem={eachItem}
//                   activeDepartment={activeDepartment}
//                   setActiveDepartment={handleDotClick} // Use handleDotClick
//                 />
//               ))}
//             </div>
//             <div>
//               {projectsData.map((eachItem, i) => (
//                 <div
//                   className="all-services"
//                   key={i}
//                   id={eachItem.name}
//                   ref={(el) => (sectionsRef.current[eachItem.name] = el)}
//                 >
//                   <div className="all-service-dept-title">{eachItem.name}</div>
//                   <div className="all-service-box">
//                     {eachItem.categories?.map((category, j) => (
//                       <div key={j}>
//                         <h3 className="category-title">{category.name}</h3>
//                         <ReUsableArticle2
//                           data={category.projects.map((project) => ({
//                             ...project,
//                             originalDepartment: eachItem.name,
//                             originalCategory: category.name,
//                           }))}
//                           path={`/project/${eachItem.name}/${category.name}`}
//                           onProjectClick={(project) =>
//                             handleProjectClick(project, eachItem.name, category.name)
//                           }
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }

// const DepartmentDot = ({ eachItem, activeDepartment, setActiveDepartment }) => {
//   const [showDept, setShowDept] = useState(false);

//   useEffect(() => {
//     if (eachItem.name === activeDepartment) {
//       setShowDept(true);
//       const timeoutId = setTimeout(() => {
//         setShowDept(false);
//       }, 3000);
//       return () => clearTimeout(timeoutId);
//     } else {
//       setShowDept(false);
//     }
//   }, [activeDepartment, eachItem.name]);

//   return (
//     <div className="service-page-dept-container">
//       <div
//         className={`service-page-main-dots ${
//           eachItem.name === activeDepartment ? "service-page-main-dots-active" : ""
//         }`}
//         onClick={() => setActiveDepartment(eachItem.name)}
//         onMouseOver={() => setShowDept(true)}
//         onMouseOut={() => setShowDept(false)}
//       ></div>
//       {showDept && <div className="service-page-dept-name">{eachItem.name}</div>}
//     </div>
//   );
// };

// export default ProjectPage;




// Final code  (dot container and button scroll in mobile view)

import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/projects.css";
import ReUsableArticle2 from "../components/ReUsableComp/ReUsableArticle2";
import SideBar from "../components/SideBar";
import MobileFooter from "../components/MobileFooter";
import Star from "../components/Star";
import ProjectsData from "../Data/ProjectsData.json";

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
      {!projectsData.length ? (
        <div>Loading...</div>
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
                const categoryButtons = ["All", ...categories.slice(0, 2)];
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