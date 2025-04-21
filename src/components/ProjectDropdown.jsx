// import React, { useEffect, useState } from "react";
// import "../styles/ProjectDropdown.css";
// // import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Star from "../assets/loadingStar.svg";
// import ProjectsData from "../Data/ProjectsData.json";

// function ProjectDropdown({ handleClose }) {
//   const navigate = useNavigate();
//   const [projectsData, setProjectsData] = useState();
//   const Data = ProjectsData.Departments

//   useEffect(() => {
//     setProjectsData(Data);

//     // Set default values
//   if (Data && Data.length > 0) {
//     const firstDept = Data?.[0];
//     const firstCategory = firstDept?.categories?.[0];
//     const firstProject = firstCategory?.projects?.[0];

//     setActiveDept(firstDept?.name);
//     setActiveCategory(firstCategory?.name);
//     setActiveProject(firstProject?.title);
//   }
//   document.body.classList.add("no-scroll");

//   return()=>{
//     document.body.classList.remove("no-scroll")
//   }
//   },[])

//   // console.log(projectsData);

//   const [activeDept, setActiveDept] = useState();
//   const [activeCategory, setActiveCategory] = useState();
//   const [activeProject, setActiveProject] = useState();
//   const [categoryArr, setCategoryArr] = useState();
//   const [projectArr, setProjectArr] = useState();
//   const [foundProject, setFoundProject] = useState();

//   useEffect(() => {
//     if (activeDept) {
//       setCategoryArr(
//         projectsData?.find((eachProject) => eachProject.name === activeDept)
//       );
//     }
//   }, [activeDept, projectsData]);

//   useEffect(() => {
//     if (activeCategory) {
//       setProjectArr(
//         categoryArr?.categories.find(
//           (eachitem) => eachitem.name === activeCategory
//         )
//       );
//     }
//   }, [activeCategory, categoryArr]);

//   useEffect(() => {
//     if (activeProject) {
//       setFoundProject(
//         projectArr?.projects.find(
//           (eachItem) => eachItem.title === activeProject
//         )
//       );
//     }
//   }, [activeProject, projectArr]);

//   return (
//     <div className="project-dd-container">
//       <div className="project-dept-container">
//         <div className="project-top-titles">Departments</div>
//         {projectsData?.map((eachitem, i) => {
//           const departmentRoutKey = eachitem.name.split(" ").join("-");
//           return (
//             <div
//               onMouseEnter={() => {
//                 setActiveDept(eachitem.name);
//                 const selectDept =projectsData?.find((dept)=>dept.name === eachitem.name);
//                 const firstCategory =  selectDept?.categories?.[0];
//                 const fisrtProject = firstCategory?.projects?.[0];

//                 setActiveCategory(firstCategory?.name);
//                 setActiveProject(fisrtProject?.title);
//               }}
//               onClick={() => {
//                 navigate(`/project/${departmentRoutKey}`);
//                 window.scrollTo(0, 0);
//                 handleClose();
//               }}
//               className={`project-main-item ${
//                 eachitem.name === activeDept ? "project-main-item-active" : ""
//               }`} key={i}
//             >
//               <span>{eachitem.name}</span>
//               {/* {eachitem.name === activeDept && (
//                 <img
//                   src={Star}
//                   alt=""
//                   style={{ width: "18px", marginLeft: "1rem" }}
//                 />
//               )} */}
//             </div>
//           );
//         })}
//       </div>
//       {activeDept && categoryArr && (
//         <div className="project-category-container">
//           <div className="project-title-dot-container">
//             <div>
//               {categoryArr?.categories.map((eachitem, i) => (
//                 <div
//                   key={i}
//                   className={`project-title-dot ${
//                     eachitem.name === activeCategory
//                       ? "project-title-dot-active"
//                       : ""
//                   }`}
//                 ></div>
//               ))}
//             </div>
//           </div>
//           <div className="project-title-holder">
//             {" "}
//             <div className="project-top-titles">Categories</div>
//             {categoryArr?.categories.map((eachitem, i) => {
//               const departmentRoutKey = activeDept.split(" ").join("-");
//               const categoryRouteKey = eachitem.name.split(" ").join("-");
//               return (
//                 <div
//                   key={i}
//                   onMouseEnter={() =>{
//                     setActiveCategory(eachitem.name);

//                     const firstProject = eachitem?.projects?.[0];
//                     setActiveProject(firstProject?.title);
//                   }}
//                   className={`project-main-item ${
//                     eachitem.name === activeCategory
//                       ? "project-main-item-active"
//                       : ""
//                   }`}
//                   onClick={() => {
//                     navigate(
//                       `/project/${departmentRoutKey}/${categoryRouteKey}`
//                     );
//                     window.scrollTo(0, 0);
//                     handleClose();
//                   }}
//                 >
//                   <span>{eachitem.name}</span>
//                   {/* {eachitem.name === activeCategory && (
//                     <img
//                       src={Star}
//                       alt=""
//                       style={{ width: "18px", marginLeft: "1rem" }}
//                     />
//                   )} */}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {activeCategory && projectArr && (
//         <div className="project-title-container">
//           <div className="project-title-dot-container">
//             <div>
//               {projectArr?.projects.map((eachProject, i) => (
//                 <div
//                   key={i}
//                   className={`project-title-dot ${
//                     eachProject.title === activeProject
//                       ? "project-title-dot-active"
//                       : ""
//                   }`}
//                 ></div>
//               ))}
//             </div>
//           </div>
//           <div>
//             {" "}
//             <div className="project-top-titles">Projects</div>
//             {projectArr?.projects.map((eachProject, i) => {
//               const departmentRoutKey = activeDept.split(" ").join("-");
//               const categoryRouteKey = activeCategory.split(" ").join("-");
//               const projectRouteKey = eachProject.title.split(" ").join("-");
//               return (
//                 <div
//                   key={i}
//                   onMouseEnter={() => setActiveProject(eachProject.title)}
//                   className={`project-main-item ${
//                     eachProject.title === activeProject
//                       ? "project-main-item-active"
//                       : ""
//                   }`}
//                   onClick={() => {
//                     navigate(
//                       `/project/${departmentRoutKey}/${categoryRouteKey}/${projectRouteKey}`
//                     );
//                     window.scrollTo(0, 0);
//                     handleClose();
//                   }}
//                 >
//                   <span>{eachProject.title}</span>
//                   {/* {eachProject.title === activeProject && (
//                     <img
//                       src={Star}
//                       alt=""
//                       style={{ width: "18px", marginLeft: "1rem" }}
//                     />
//                   )} */}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {activeProject && foundProject && (
//         <div className="project-item-contaienr">
//           <div className="project-item-card-image"
//           onClick={() => {
//             navigate(
//               `/project/${activeDept.split(" ").join("-")}/${activeCategory
//                 .split(" ")
//                 .join("-")}/${foundProject.title.split(" ").join("-")}`
//             );
//             window.scrollTo(0, 0);
//             handleClose();
//           }}
//           style={{cursor:"pointer"}}>
//             <img src={foundProject.mainImageUrl} alt="" />
//           </div>
//           <div className="project-item-card-title">{foundProject.title}</div>
//           <p className="project-item-card-des">{foundProject.mainDesc}</p>
//           <div
//             style={{ display: "flex", justifyContent: "end", width: "100%",cursor:"pointer" }}
//             className="know-more"
//             onClick={() => {
//               navigate(
//                 `/project/${activeDept.split(" ").join("-")}/${activeCategory
//                   .split(" ")
//                   .join("-")}/${foundProject.title.split(" ").join("-")}`
//               );
//               window.scrollTo(0, 0);
//               handleClose();
//             }}

//           >
//             Know More
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProjectDropdown;

// import React, { useEffect, useState } from "react";
// import "../styles/ProjectDropdown.css";
// // import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Star from "../assets/loadingStar.svg";
// import ProjectsData from "../Data/ProjectsData.json";

// function ProjectDropdown({ handleClose }) {
//   const apiUrl = process.env.REACT_APP_API_URL;
//   const navigate = useNavigate();
//   const [projectsData, setProjectsData] = useState();

//   const FetchProjects = async () => {
//     try {
//       const res = await axios.get(`${apiUrl}/projects/list`);
//       setProjectsData(res.data.docs);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     FetchProjects();
//   }, []);

//   console.log(projectsData);

//   const [activeDept, setActiveDept] = useState();
//   const [activeCategory, setActiveCategory] = useState();
//   const [activeProject, setActiveProject] = useState();
//   const [categoryArr, setCategoryArr] = useState();
//   const [projectArr, setProjectArr] = useState();
//   const [foundProject, setFoundProject] = useState();

//   useEffect(() => {
//     if (activeDept) {
//       setCategoryArr(
//         projectsData?.find((eachProject) => eachProject.name === activeDept)
//       );
//     }
//   }, [activeDept, projectsData]);

//   useEffect(() => {
//     if (activeCategory) {
//       setProjectArr(
//         categoryArr?.categories.find(
//           (eachitem) => eachitem.name === activeCategory
//         )
//       );
//     }
//   }, [activeCategory, categoryArr]);

//   useEffect(() => {
//     if (activeProject) {
//       setFoundProject(
//         projectArr?.projects.find(
//           (eachItem) => eachItem.title === activeProject
//         )
//       );
//     }
//   }, [activeProject, projectArr]);

//   return (
//     <div className="project-dd-container">
//       <div className="project-dept-container">
//         <div className="project-top-titles">Departments</div>
//         {projectsData?.map((eachitem, i) => {
//           const departmentRoutKey = eachitem.name.split(" ").join("-");
//           return (
//             <div
//               onMouseEnter={() => {
//                 setActiveDept(eachitem.name);
//               }}
//               onClick={() => {
//                 navigate(`/project/${departmentRoutKey}`);
//                 window.scrollTo(0, 0);
//                 handleClose();
//               }}
//               className={`project-main-item ${
//                 eachitem.name === activeDept ? "project-main-item-active" : ""
//               }`}
//             >
//               <span>{eachitem.name}</span>
//               {eachitem.name === activeDept && (
//                 <img
//                   src={Star}
//                   alt=""
//                   style={{ width: "18px", marginLeft: "1rem" }}
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//       {activeDept && categoryArr && (
//         <div className="project-category-container">
//           <div className="project-title-dot-container">
//             <div>
//               {categoryArr?.categories.map((eachitem, i) => (
//                 <div
//                   key={i}
//                   className={`project-title-dot ${
//                     eachitem.name === activeCategory
//                       ? "project-title-dot-active"
//                       : ""
//                   }`}
//                 ></div>
//               ))}
//             </div>
//           </div>
//           <div className="project-title-holder">
//             {" "}
//             <div className="project-top-titles">Categories</div>
//             {categoryArr?.categories.map((eachitem, i) => {
//               const departmentRoutKey = activeDept.split(" ").join("-");
//               const categoryRouteKey = eachitem.name.split(" ").join("-");
//               return (
//                 <div
//                   key={i}
//                   onMouseEnter={() => setActiveCategory(eachitem.name)}
//                   className={`project-main-item ${
//                     eachitem.name === activeCategory
//                       ? "project-main-item-active"
//                       : ""
//                   }`}
//                   onClick={() => {
//                     navigate(
//                       `/project/${departmentRoutKey}/${categoryRouteKey}`
//                     );
//                     window.scrollTo(0, 0);
//                     handleClose();
//                   }}
//                 >
//                   <span>{eachitem.name}</span>
//                   {eachitem.name === activeCategory && (
//                     <img
//                       src={Star}
//                       alt=""
//                       style={{ width: "18px", marginLeft: "1rem" }}
//                     />
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {activeCategory && projectArr && (
//         <div className="project-title-container">
//           <div className="project-title-dot-container">
//             <div>
//               {projectArr?.projects.map((eachProject, i) => (
//                 <div
//                   key={i}
//                   className={`project-title-dot ${
//                     eachProject.title === activeProject
//                       ? "project-title-dot-active"
//                       : ""
//                   }`}
//                 ></div>
//               ))}
//             </div>
//           </div>
//           <div>
//             {" "}
//             <div className="project-top-titles">Projects</div>
//             {projectArr?.projects.map((eachProject, i) => {
//               const departmentRoutKey = activeDept.split(" ").join("-");
//               const categoryRouteKey = activeCategory.split(" ").join("-");
//               const projectRouteKey = eachProject.title.split(" ").join("-");
//               return (
//                 <div
//                   key={i}
//                   onMouseEnter={() => setActiveProject(eachProject.title)}
//                   className={`project-main-item ${
//                     eachProject.title === activeProject
//                       ? "project-main-item-active"
//                       : ""
//                   }`}
//                   onClick={() => {
//                     navigate(
//                       `/project/${departmentRoutKey}/${categoryRouteKey}/${projectRouteKey}`
//                     );
//                     window.scrollTo(0, 0);
//                     handleClose();
//                   }}
//                 >
//                   <span>{eachProject.title}</span>
//                   {eachProject.title === activeProject && (
//                     <img
//                       src={Star}
//                       alt=""
//                       style={{ width: "18px", marginLeft: "1rem" }}
//                     />
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {activeProject && foundProject && (
//         <div className="project-item-contaienr">
//           <div className="project-item-card-image">
//             <img src={foundProject.image.imageUrl} alt="" />
//           </div>
//           <div className="project-item-card-title">{foundProject.title}</div>
//           <p className="project-item-card-des">{foundProject.description}</p>
//           <div
//             style={{ display: "flex", justifyContent: "end", width: "100%" }}
//             className="know-more"
//             onClick={() => {
//               navigate(
//                 `/project/${activeDept.split(" ").join("-")}/${activeCategory
//                   .split(" ")
//                   .join("-")}/${foundProject.title.split(" ").join("-")}`
//               );
//               window.scrollTo(0, 0);
//               handleClose();
//             }}
//           >
//             Know More
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProjectDropdown;

import React, { useEffect, useState, useRef } from "react";
import "../styles/NavProductComp.css";
import Star from "../assets/loadingStar.svg";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ProjectsData from "../Data/ProjectsData.json";

function ProjectDropdown({ handleClose }) {
  const navigate = useNavigate();
  const projectData = ProjectsData.Departments;

  const categoryContainerRef = useRef(null); // Ref for the main category container
  const subCategoryContainerRef = useRef(null); // Ref for the sub-category container

  const [showSubCats, setShowSubCats] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [isProjectsVisible, SetIsProjectVisible] = useState(true);
  const [hoveringOnDept, setHoveringOnDept] = useState(false);
  const [hoveringOnMain, setHoveringOnmain] = useState(false);
  const [MainCatArr, setMainCatArr] = useState();
  const [subCatsArr, setSubCatsArr] = useState();
  const [deptName, setDeptName] = useState();
  const [mainCatName, setMainCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [displayProject, setDisplayProject] = useState();
  const [finalProjectArr, setFinalProjectArr] = useState();
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);
  const [showSubUpArrow, setShowSubUpArrow] = useState(false);
  const [showSubDownArrow, setShowSubDownArrow] = useState(false);

  const DeptArr = projectData?.map((item) => item.name);

  useEffect(() => {
    // Set default values
    const defaultDept = projectData?.[0];
    const defaultCategory = defaultDept?.categories?.[0];
    const defaultProject = defaultCategory?.projects?.[0];

    if (defaultDept && defaultCategory && defaultProject) {
      setDeptName(defaultDept.name);
      setMainCatArr(defaultDept.categories.map((cat) => cat.name));
      setMainCatName(defaultCategory.name);
      setFinalProjectArr(defaultCategory.projects);
      setSubCatsArr(defaultCategory.projects.map((proj) => proj.title));
      setSubCatName(defaultProject.title);
      setDisplayProject(defaultProject);
      setShowSubCats(true);
      setShowProjects(true);
      SetIsProjectVisible(true);
    }

    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const HandleDeptHover = (DeptName) => {
    setDeptName(DeptName);
    const MainCatArrObj = projectData?.find((item) => item.name === DeptName);
    if (MainCatArrObj) {
      const categories = MainCatArrObj.categories || [];
      const firstCategory = categories[0];
      const firstProject = firstCategory?.projects[0];

      setMainCatArr(MainCatArrObj.categories.map((item) => item.name));

      if (firstCategory) {
        setMainCatName(firstCategory.name);
        setFinalProjectArr(firstCategory.projects);
        const subCatTitles = firstCategory.projects.map((proj) => proj.title);
        setSubCatsArr(subCatTitles);
        setShowSubCats(true);
        if (firstProject) {
          setSubCatName(firstProject.title);
          setDisplayProject(firstProject);
          setShowProjects(true);
        }
      }
    }
  };

  const HandleMainCatHover = (MainCat) => {
    const MainCatArrObj = projectData?.find((item) => item.name === deptName);
    setMainCatName(MainCat);
    const subCatObj = MainCatArrObj?.categories?.find(
      (item) => item.name === MainCat
    );

    setFinalProjectArr(subCatObj?.projects);
    if (subCatObj) {
      const projectTitles = subCatObj.projects.map(
        (eachSubCat) => eachSubCat.title
      );
      setSubCatsArr(projectTitles);
      const firstProject = subCatObj.projects?.[0];
      if (firstProject) {
        setSubCatName(firstProject.title);
        setDisplayProject(firstProject);
        setShowProjects(true);
      }
    }
    setShowSubCats(true);
  };

  const HandleSubCatHover = (SubCat) => {
    setSubCatName(SubCat);
    const projectFound = finalProjectArr?.find((item) => item.title === SubCat);
    setDisplayProject(projectFound);
    setShowProjects(true);
  };const scrollUp = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
      container.scrollTop -= itemHeight;
    }
  };

  const scrollDown = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
      container.scrollTop += itemHeight;
    }
  };

  const scrollSubUp = () => {
    if (subCategoryContainerRef.current) {
      const container = subCategoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
      container.scrollTop -= itemHeight;
    }
  };

  const scrollSubDown = () => {
    if (subCategoryContainerRef.current) {
      const container = subCategoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
      container.scrollTop += itemHeight;
    }
  };

  const handleScroll = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const lastItem = container.lastChild;
      const lastItemOffset = lastItem ? lastItem.offsetTop + lastItem.offsetHeight : scrollHeight;
      setShowUpArrow(scrollTop > 0);
      setShowDownArrow(scrollTop + clientHeight < lastItemOffset);
    }
  };

  const handleSubScroll = () => {
    if (subCategoryContainerRef.current) {
      const container = subCategoryContainerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const lastItem = container.lastChild;
      const lastItemOffset = lastItem ? lastItem.offsetTop + lastItem.offsetHeight : scrollHeight;
      setShowSubUpArrow(scrollTop > 0);
      setShowSubDownArrow(scrollTop + clientHeight < lastItemOffset);
    }
  };



  const toggleProjectsVisibility = () => {
    SetIsProjectVisible(!isProjectsVisible);
  };

  function findProjectPath(projectData, projectTitle) {
    for (let department of projectData) {
      for (let category of department.categories) {
        for (let project of category.projects) {
          if (project.title === projectTitle) {
            return { department, category, project };
          }
        }
      }
    }
    return null;
  }

  function findCategoryPath(projectData, projectCategory) {
    for (let department of projectData) {
      for (let category of department.categories) {
        if (category.name === projectCategory) {
          return { department, category };
        }
      }
    }
    return null;
  }

  const projectCategoryNavigator = (categoryTitle) => {
    const result = findCategoryPath(projectData, categoryTitle);
    if (result) {
      navigate(
        `/project/${result.department.name
          .split(" ")
          .join("-")}/${result.category.name.split(" ").join("-")}`
      );
      handleClose();
    }
  };

  const singleProjectNavigator = (projectTitle) => {
    const result = findProjectPath(projectData, projectTitle);
    if (result) {
      navigate(
        `/project/${result.department.name
          .split(" ")
          .join("-")}/${result.category.name
          .split(" ")
          .join("-")}/${projectTitle.split(" ").join("-")}`
      );
      handleClose();
    }
  };

  return (
    <div className="NavProductComp-container">
      <div className="navProComp-container">
        <div className="navProComp-dept-container">
          <div className="navprocomp-items-heading">Departments</div>
          <div className="navproComp-item-holder">
            <div className="navProComp-dot-container">
              {/* {DeptArr?.map((dot, i) => (
                <div
                  key={i}
                  className={`navProComp-dot ${
                    dot === deptName ? "navProComp-dot-active" : ""
                  }`}
                ></div>
              ))} */}
            </div>
            <div
              className="navProComp-mainCat-item-container"
              onMouseEnter={() => setHoveringOnDept(true)}
              onMouseLeave={() => setHoveringOnDept(false)}
            >
              {DeptArr?.map((eachCat, i) => (
                <div
                  key={i}
                  onMouseEnter={() => HandleDeptHover(eachCat)}
                  onClick={() => {
                    navigate(`/project/${eachCat.split(" ").join("-")}`);
                    handleClose();
                  }}
                  className="pointer"
                >
                  <div
                    className={`navProComp-dept-item ${
                      eachCat === deptName ? "mainCat-active" : ""
                    }`}
                  >
                    {eachCat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {MainCatArr?.length && (
          <div className="navProComp-mainCat-container">
            <div className="navprocomp-items-heading">Categories</div>
            <div className="navproComp-item-holder">
              <div className="navProComp-dot-container">
                {MainCatArr?.map((dot, i) => (
                  <div
                    key={i}
                    className={`navProComp-dot ${
                      dot === mainCatName ? "navProComp-dot-active" : ""
                    }`}
                  ></div>
                ))}
              </div>
               <div className="arrow-wrapper">
                              {showUpArrow && (
                                <span
                                  onClick={scrollUp}
                                  className="arrow-up"
                                  aria-label="Scroll up"
                                >
                                  <IoIosArrowUp />
                                </span>
                              )}
                              {showDownArrow && (
                                <span
                                  onClick={scrollDown}
                                  className="arrow-down"
                                  aria-label="Scroll down"
                                >
                                  <IoIosArrowDown />
                                </span>
                              )}
                            </div>
              <div className="navProComp-mainCat-item-container">
                {MainCatArr?.map((eachCat, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => HandleMainCatHover(eachCat)}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      projectCategoryNavigator(eachCat);
                    }}
                    className="pointer"
                  >
                    <div
                      className={`navProComp-mainCat-item ${
                        eachCat === mainCatName ? "mainCat-active" : ""
                      }`}
                    >
                      {eachCat}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {showSubCats && subCatsArr?.length && (
          <div className="navProComp-subCat-container">
            <div className="navprocomp-items-heading">Projects</div>
            <div className="navproComp-item-holder">
              <div className="navProComp-dot-container">
                {subCatsArr?.map((dot, i) => (
                  <div
                    key={i}
                    className={`navProComp-dot ${
                      dot === subCatName ? "navProComp-dot-active" : ""
                    }`}
                  ></div>
                ))}
              </div>
               <div className="arrow-wrapper">
                              {showSubUpArrow && (
                                <span
                                  onClick={scrollSubUp}                    
                                  aria-label="Scroll sub up"
                                  className="arrow-up"
                                >
                                  <IoIosArrowUp />
                                </span>
                              )}
                              {showSubDownArrow && (
                                <span
                                  onClick={scrollSubDown}                    
                                  aria-label="Scroll sub down"
                                  className="arrow-down"
                                >
                                  <IoIosArrowDown />
                                </span>
                              )}
                            </div>
              <div className="navProComp-subCat-item-container">
                {subCatsArr?.map((eachItem, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => HandleSubCatHover(eachItem)}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      singleProjectNavigator(eachItem);
                    }}
                    className="pointer"
                  >
                    <div
                      className={`navProComp-mainCat-item ${
                        eachItem === subCatName ? "mainCat-active" : ""
                      }`}
                    >
                      {eachItem}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {showProjects && displayProject && (
          <div className="navProComp-products-container">
            <div className="navProComp-products-holder">
              <div>
                <div
                  onClick={() => {
                    window.scrollTo(0, 0);
                    singleProjectNavigator(displayProject.title);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="navProComp-products-img">
                    <img
                      src={displayProject.mainImageUrl}
                      alt={displayProject.title}
                    />
                  </div>
                  <div className="navProComp-products-title">
                    {displayProject.title}
                  </div>
                  <div className="navProComp-products-des">
                    {displayProject.mainDesc}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="navProComp-products-more"
              onClick={() => {
                window.scrollTo(0, 0);
                singleProjectNavigator(displayProject.title);
              }}
            >
              <span>See More</span>
              <IoIosArrowForward />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDropdown;
