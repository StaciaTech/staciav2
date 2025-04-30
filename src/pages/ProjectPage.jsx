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

// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/projects.css";
// import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
// import SideBar from "../components/SideBar";
// import MobileFooter from "../components/MobileFooter";
// import { useParams } from "react-router-dom";
// import Star from "../components/Star";
// import ProjectsData from "../Data/ProjectsData.json";

// function ProjectPage() {
//   const params = useParams();
//   const [projectsData, setProjectsData] = useState([]);
//   const [activeDepartment, setActiveDepartment] = useState("All");

//   useEffect(() => {
//     setProjectsData(ProjectsData.Departments || []);
//   }, []);

//   const departmentNames = ["All", "Mechanical", "Electronics", "Tech"];

//   // Get filtered projects
//   const filteredProjects = () => {
//     if (activeDepartment === "All") {
//       return projectsData.flatMap((dept) =>
//         dept.categories.flatMap((cat) => cat.projects)
//       );
//     }

//     const dept = projectsData.find((d) => d.name === activeDepartment);
//     return dept
//       ? dept.categories.flatMap((cat) => cat.projects)
//       : [];
//   };

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

//       {/* Department buttons as categories */}
//       <div className="project-item-tabs-container">
//         {departmentNames.map((dept, index) => (
//           <div
//             key={index}
//             className={`article-item-tab pointer ${dept === activeDepartment ? "article-item-tab-active" : ""
//               }`}
//             onClick={() => setActiveDepartment(dept)}
//           >
//             {dept}
//           </div>
//         ))}
//       </div>

//       <div>
//         <ReUsableArticle
//           data={filteredProjects()}
//           path={`/project/${activeDepartment}`}
//         />
//       </div>

//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }

// export default ProjectPage;

//praveen kumar

// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/projects.css";
// import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
// import SideBar from "../components/SideBar";
// import MobileFooter from "../components/MobileFooter";
// import { useParams } from "react-router-dom";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import Star from "../components/Star";
// import ProjectsData from "../Data/ProjectsData.json";

// function ProjectPage() {
//   const params = useParams();
//   const [projectsData, setProjectsData] = useState([]);
//   const [activeDepartment, setActiveDepartment] = useState("All");
//   const [activeCategory, setActiveCategory] = useState("");
//   const [departmentObj, setDepartmentObj] = useState(null);
//   const [foundProjectsObj, setFoundProjectsObj] = useState(null);

//   useEffect(() => {
//     setProjectsData(ProjectsData.Departments || []);
//   }, []);

//   useEffect(() => {
//     if (params.department) {
//       setActiveDepartment(params.department);
//     }
//   }, [params]);

//   useEffect(() => {
//     if (activeDepartment !== "All") {
//       const dept = projectsData.find((d) => d.name === activeDepartment);
//       setDepartmentObj(dept);
//       if (dept?.categories?.length && !params.category) {
//         setActiveCategory(dept.categories[0].name);
//       }
//     } else {
//       setDepartmentObj(null);
//       setActiveCategory(""); // reset category on All
//     }
//   }, [activeDepartment, projectsData, params]);

//   useEffect(() => {
//     if (activeDepartment === "All") {
//       setFoundProjectsObj({
//         projects: projectsData.flatMap((d) =>
//           d.categories?.flatMap((c) => c.projects || [])
//         ),
//       });
//     } else if (activeCategory && departmentObj) {
//       const cat = departmentObj.categories.find(
//         (item) => item.name === activeCategory
//       );
//       setFoundProjectsObj(cat);
//     }
//   }, [activeCategory, departmentObj, projectsData, activeDepartment]);

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

//       {/* Top-Level Filter */}
//       <div className="project-item-tabs-container">
//         {["All", ...projectsData.map((d) => d.name)].map((deptName, idx) => (
//           <div
//             key={idx}
//             className={`article-item-tab pointer ${
//               activeDepartment === deptName ? "article-item-tab-active" : ""
//             }`}
//             onClick={() => {
//               setActiveDepartment(deptName);
//               setActiveCategory("");
//             }}
//           >
//             {deptName}
//           </div>
//         ))}

//         {/* Subcategory only if not All */}
//         {activeDepartment !== "All" &&
//           departmentObj?.categories?.map((cat, i) => (
//             <div
//               key={i}
//               className={`article-item-tab pointer sub-category-tab ${
//                 cat.name === activeCategory ? "article-item-tab-active" : ""
//               }`}
//               onClick={() => {
//                 setActiveCategory(cat.name);
//               }}
//               style={{
//                 paddingLeft: "2rem",
//                 backgroundColor: "#f5f5f5",
//                 fontSize: "0.9rem",
//               }}
//             >
//               {cat.name}
//             </div>
//           ))}
//       </div>

//       {/* Projects listing */}
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

// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/projects.css";
// import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
// import SideBar from "../components/SideBar";
// import MobileFooter from "../components/MobileFooter";
// import { useParams } from "react-router-dom";
// import { IoIosArrowDown } from "react-icons/io";
// import Star from "../components/Star";
// import ProjectsData from "../Data/ProjectsData.json";

// function ProjectPage() {
//   const params = useParams();
//   const [projectsData, setProjectsData] = useState([]);
//   const [activeDepartment, setActiveDepartment] = useState("All");
//   const [activeCategory, setActiveCategory] = useState("");
//   const [departmentObj, setDepartmentObj] = useState(null);
//   const [foundProjectsObj, setFoundProjectsObj] = useState([]);

//   // Load projects data
//   useEffect(() => {
//     const departments = ProjectsData.Departments || [];
//     setProjectsData(departments);
//   }, []);

//   // Set active department from params
//   useEffect(() => {
//     if (params.department) {
//       setActiveDepartment(params.department);
//     }
//   }, [params]);

//   // Set department object and default category
//   useEffect(() => {
//     if (activeDepartment !== "All") {
//       const dept = projectsData.find((d) => d.name === activeDepartment);
//       setDepartmentObj(dept);
//       if (dept?.categories?.length && !params.category) {
//         setActiveCategory(dept.categories[0].name);
//       }
//     } else {
//       setDepartmentObj(null);
//       setActiveCategory("");
//     }
//   }, [activeDepartment, projectsData, params]);

//   // Set found projects based on active department and category
//   useEffect(() => {
//     if (activeDepartment === "All") {
//       const allProjects = projectsData.map((dept) => ({
//         name: dept.name,
//         projects: dept.categories?.flatMap((c) => c.projects || []) || [],
//       }));
//       setFoundProjectsObj(allProjects);
//     } else if (activeCategory && departmentObj) {
//       const cat = departmentObj.categories.find(
//         (item) => item.name === activeCategory
//       );
//       const deptProjects = [
//         {
//           name: activeDepartment,
//           projects: cat?.projects || [],
//         },
//       ];
//       setFoundProjectsObj(deptProjects);
//     } else {
//       setFoundProjectsObj([]);
//     }
//   }, [activeCategory, departmentObj, projectsData, activeDepartment]);

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

//       {/* Department Tabs */}
//       <div className="project-item-tabs-container">
//         {["All", ...projectsData.map((d) => d.name)].map((deptName, idx) => (
//           <div
//             key={idx}
//             className={`article-item-tab pointer department-tab ${
//               activeDepartment === deptName ? "article-item-tab-active" : ""
//             }`}
//             onClick={() => {
//               setActiveDepartment(deptName);
//               setActiveCategory("");
//             }}
//           >
//             {deptName}
//             {activeDepartment === deptName && deptName !== "All" && (
//               <IoIosArrowDown className="arrow-icon" />
//             )}
//           </div>
//         ))}
//       </div>
//       {activeDepartment !== "All" && (
//         <div className="dept-head">{activeDepartment}</div>
//       )}

//       {/* Subcategory Tabs */}
//       {activeDepartment !== "All" && departmentObj?.categories?.length > 0 && (
//         <>
//           <hr className="subcategory-separator" />
//           <div className="subcategory-container">
//             {departmentObj.categories.map((cat, i) => (
//               <div
//                 key={i}
//                 className={`article-item-tab pointer sub-category-tab ${
//                   cat.name === activeCategory ? "article-item-tab-active" : ""
//                 }`}
//                 onClick={() => {
//                   setActiveCategory(cat.name);
//                 }}
//               >
//                 {cat.name}
//               </div>
//             ))}
//           </div>
//         </>
//       )}

//       {/* Projects List */}
//       <div>
//         {foundProjectsObj.length > 0 ? (
//           foundProjectsObj.map((dept, index) => (
//             <div key={index} className="department-section">
//               <h2>{dept.name}</h2>
//               <hr className="department-separator" />
//               {dept.projects.length > 0 ? (
//                 <ReUsableArticle
//                   data={dept.projects}
//                   path={`/project/${dept.name}/${activeCategory}`}
//                 />
//               ) : (
//                 <p>No projects available for {dept.name}.</p>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>No projects found.</p>
//         )}
//       </div>

//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }

// export default ProjectPage;

// final all filter split depar

// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/projects.css";
// import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
// import SideBar from "../components/SideBar";
// import MobileFooter from "../components/MobileFooter";
// import { useParams } from "react-router-dom";
// import { IoIosArrowDown } from "react-icons/io";
// import Star from "../components/Star";
// import ProjectsData from "../Data/ProjectsData.json";

// function ProjectPage() {
//   const params = useParams();
//   const [projectsData, setProjectsData] = useState([]);
//   const [activeDepartment, setActiveDepartment] = useState("All");
//   const [activeCategory, setActiveCategory] = useState("");
//   const [departmentObj, setDepartmentObj] = useState(null);
//   const [foundProjectsObj, setFoundProjectsObj] = useState([]);

//   // Load projects data
//   useEffect(() => {
//     const departments = ProjectsData.Departments || [];
//     setProjectsData(departments);
//   }, []);

//   // Set active department from params
//   useEffect(() => {
//     if (params.department) {
//       setActiveDepartment(params.department);
//     }
//   }, [params]);

//   // Set department object and default category
//   useEffect(() => {
//     if (activeDepartment !== "All") {
//       const dept = projectsData.find((d) => d.name === activeDepartment);
//       setDepartmentObj(dept);
//       if (dept?.categories?.length && !params.category) {
//         setActiveCategory(dept.categories[0].name);
//       }
//     } else {
//       setDepartmentObj(null);
//       setActiveCategory("");
//     }
//   }, [activeDepartment, projectsData, params]);

//   // Set found projects based on active department and category
//   useEffect(() => {
//     if (activeDepartment === "All") {
//       const allProjects = projectsData.map((dept) => ({
//         name: dept.name,
//         projects: dept.categories?.flatMap((c) => c.projects || []) || [],
//       }));
//       setFoundProjectsObj(allProjects);
//     } else if (activeCategory && departmentObj) {
//       const cat = departmentObj.categories.find(
//         (item) => item.name === activeCategory
//       );
//       const deptProjects = [
//         {
//           name: activeDepartment,
//           projects: cat?.projects || [],
//         },
//       ];
//       setFoundProjectsObj(deptProjects);
//     } else {
//       setFoundProjectsObj([]);
//     }
//   }, [activeCategory, departmentObj, projectsData, activeDepartment]);

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

//       {/* Department Tabs */}
//       <div className="project-item-tabs-container">
//         {["All", ...projectsData.map((d) => d.name)].map((deptName, idx) => (
//           <div
//             key={idx}
//             className={`article-item-tab pointer department-tab ${
//               activeDepartment === deptName ? "article-item-tab-active" : ""
//             }`}
//             onClick={() => {
//               setActiveDepartment(deptName);
//               setActiveCategory("");
//             }}
//           >
//             {deptName}
//             {activeDepartment === deptName && deptName !== "All" && (
//               <IoIosArrowDown className="arrow-icon" />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Projects List */}
//       <div>
//         {foundProjectsObj.length > 0 ? (
//           foundProjectsObj.map((dept, index) => (
//             <div key={index} className="department-section">
//               <h2 className="product-dep-name">{dept.name}</h2>
//               <hr
//                 className="department-separator"
//                 style={{
//                   width: "90%",
//                   marginLeft: "100px",
//                   backgroundColor: " #e5e5e5;",
//                   opacity:'0.3',
//                 }}
//               />

//               {/* Subcategory Tabs - Show only for the selected department */}
//               {activeDepartment !== "All" &&
//                 dept.name === activeDepartment &&
//                 departmentObj?.categories?.length > 0 && (
//                   <div className="subcategory-container">
//                     {departmentObj.categories.map((cat, i) => (
//                       <div
//                         key={i}
//                         className={`article-item-tab pointer sub-category-tab ${
//                           cat.name === activeCategory
//                             ? "article-item-tab-active"
//                             : ""
//                         }`}
//                         onClick={() => {
//                           setActiveCategory(cat.name);
//                         }}
//                       >
//                         {cat.name}
//                       </div>
//                     ))}
//                   </div>
//                 )}

//               {dept.projects.length > 0 ? (
//                 <ReUsableArticle
//                   data={dept.projects}
//                   path={`/project/${dept.name}/${activeCategory}`}
//                 />
//               ) : (
//                 <p>{dept.name}.</p>
//               )}
//             </div>
//           ))
//         ) : (
//           <p></p>
//         )}
//       </div>

//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }

// export default ProjectPage;

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/projects.css";
import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
import SideBar from "../components/SideBar";
import MobileFooter from "../components/MobileFooter";
import { useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Star from "../components/Star";
import ProjectsData from "../Data/ProjectsData.json";

function ProjectPage() {
  const params = useParams();
  const [projectsData, setProjectsData] = useState([]);
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [activeCategory, setActiveCategory] = useState("");
  const [departmentObj, setDepartmentObj] = useState(null);
  const [foundProjectsObj, setFoundProjectsObj] = useState([]);

  // Load projects data
  useEffect(() => {
    const departments = ProjectsData.Departments || [];
    setProjectsData(departments);
    console.log("Loaded projectsData:", departments);
  }, []);

  // Set active department from params or click
  useEffect(() => {
    console.log("Params detected:", params);
    if (params.department) {
      setActiveDepartment(params.department);
      console.log("Set activeDepartment from params:", params.department);
    }
  }, [params]);

  // Set department object and default category
  useEffect(() => {
    console.log("Active department changed to:", activeDepartment);
    if (activeDepartment !== "All") {
      const dept = projectsData.find((d) => d.name === activeDepartment);
      setDepartmentObj(dept);
      if (dept?.categories?.length && !params.category) {
        setActiveCategory(dept.categories[0].name);
        console.log("Set default category:", dept.categories[0].name);
      }
    } else {
      setDepartmentObj(null);
      setActiveCategory("");
    }
  }, [activeDepartment, projectsData, params]);

  // Set found projects based on active department and category
  useEffect(() => {
    console.log(
      "Updating foundProjectsObj for activeDepartment:",
      activeDepartment,
      "and activeCategory:",
      activeCategory
    );
    if (activeDepartment === "All") {
      const allProjects = projectsData.map((dept) => ({
        name: dept.name,
        projects: dept.categories?.flatMap((c) => c.projects || []) || [],
      }));
      setFoundProjectsObj(allProjects);
      console.log("All projects set:", allProjects);
    } else if (activeCategory && departmentObj) {
      const cat = departmentObj.categories.find(
        (item) => item.name === activeCategory
      );
      const deptProjects = [
        {
          name: activeDepartment,
          projects: cat?.projects || [],
        },
      ];
      setFoundProjectsObj(deptProjects);
      console.log("Department projects set:", deptProjects);
    } else {
      setFoundProjectsObj([]);
      console.log("No projects set, foundProjectsObj is empty");
    }
  }, [activeCategory, departmentObj, projectsData, activeDepartment]);

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

      {/* Department Tabs */}
      <div className="project-item-tabs-container">
        {["All", ...projectsData.map((d) => d.name)].map((deptName, idx) => (
          <div
            key={idx}
            className={`article-item-tab pointer department-tab ${
              activeDepartment === deptName ? "article-item-tab-active" : ""
            }`}
            onClick={() => {
              console.log("Clicked department:", deptName);
              setActiveDepartment(deptName);
              setActiveCategory("");
              // Optionally navigate using history if needed
              // window.history.pushState({}, "", `/project/${deptName}`);
            }}
          >
            {deptName}
            {activeDepartment === deptName && deptName !== "All" && (
              <IoIosArrowDown className="arrow-icon" />
            )}
          </div>
        ))}
      </div>

      {/* Projects List */}
      <div>
        {foundProjectsObj.length > 0 ? (
          foundProjectsObj.map((dept, index) => (
            <div key={index} className="department-section">
              <h2 className="product-dep-name">{dept.name}</h2>
              <hr
                className="department-separator"
                style={{
                  width: "90%",
                  marginLeft: "100px",
                  backgroundColor: "#e5e5e5",
                  opacity: 0.3,
                }}
              />

              {/* Subcategory Tabs - Show only for the selected department */}
              {activeDepartment !== "All" &&
                dept.name === activeDepartment &&
                departmentObj?.categories?.length > 0 && (
                  <div className="subcategory-container">
                    {departmentObj.categories.map((cat, i) => (
                      <div
                        key={i}
                        className={`article-item-tab pointer sub-category-tab ${
                          cat.name === activeCategory
                            ? "article-item-tab-active"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCategory(cat.name);
                        }}
                      >
                        {cat.name}
                      </div>
                    ))}
                  </div>
                )}

              {dept.projects.length > 0 ? (
                <ReUsableArticle
                  data={dept.projects}
                  path={
                    activeDepartment === "All"
                      ? `/project/${dept.name}` // no category in path
                      : `/project/${dept.name}/${activeCategory}`
                  }
                />
              ) : (
                <p>{dept.name}.</p>
              )}
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>

      <Footer />
      <MobileFooter />
    </>
  );
}

export default ProjectPage;
