// import React, { useEffect, useState, useRef } from "react";
// import "../styles/NavProductComp.css";
// import Star from "../assets/loadingStar.svg";
// import {
//   IoIosArrowDown,
//   IoIosArrowUp,
//   IoIosArrowForward,
// } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import ProjectsData from "../Data/ProjectData2.json";

// function ProjectDropdown({ handleClose }) {
//   const navigate = useNavigate();
//   const projectData = ProjectsData.Departments;

//   const categoryContainerRef = useRef(null); // Ref for the main category container
//   const subCategoryContainerRef = useRef(null); // Ref for the sub-category container

//   const [showSubCats, setShowSubCats] = useState(false);
//   const [showProjects, setShowProjects] = useState(false);
//   const [isProjectsVisible, SetIsProjectVisible] = useState(true);
//   const [hoveringOnDept, setHoveringOnDept] = useState(false);
//   const [hoveringOnMain, setHoveringOnmain] = useState(false);
//   const [MainCatArr, setMainCatArr] = useState();
//   const [subCatsArr, setSubCatsArr] = useState();
//   const [deptName, setDeptName] = useState();
//   const [mainCatName, setMainCatName] = useState();
//   const [subCatName, setSubCatName] = useState();
//   const [displayProject, setDisplayProject] = useState();
//   const [finalProjectArr, setFinalProjectArr] = useState();
//   const [showUpArrow, setShowUpArrow] = useState(false);
//   const [showDownArrow, setShowDownArrow] = useState(false);
//   const [showSubUpArrow, setShowSubUpArrow] = useState(false);
//   const [showSubDownArrow, setShowSubDownArrow] = useState(false);

//   const DeptArr = projectData?.map((item) => item.name);

//   useEffect(() => {
//     // Set default values
//     const defaultDept = projectData?.[0];
//     const defaultCategory = defaultDept?.categories?.[0];
//     const defaultProject = defaultCategory?.projects?.[0];

//     if (defaultDept && defaultCategory && defaultProject) {
//       setDeptName(defaultDept.name);
//       setMainCatArr(defaultDept.categories.map((cat) => cat.name));
//       setMainCatName(defaultCategory.name);
//       setFinalProjectArr(defaultCategory.projects);
//       setSubCatsArr(defaultCategory.projects.map((proj) => proj.title));
//       setSubCatName(defaultProject.title);
//       setDisplayProject(defaultProject);
//       setShowSubCats(true);
//       setShowProjects(true);
//       SetIsProjectVisible(true);
//     }

//     document.body.classList.add("no-scroll");
//     return () => {
//       document.body.classList.remove("no-scroll");
//     };
//   }, []);

//   const HandleDeptHover = (DeptName) => {
//     setDeptName(DeptName);
//     const MainCatArrObj = projectData?.find((item) => item.name === DeptName);
//     if (MainCatArrObj) {
//       const categories = MainCatArrObj.categories || [];
//       const firstCategory = categories[0];
//       const firstProject = firstCategory?.projects[0];

//       setMainCatArr(MainCatArrObj.categories.map((item) => item.name));

//       if (firstCategory) {
//         setMainCatName(firstCategory.name);
//         setFinalProjectArr(firstCategory.projects);
//         const subCatTitles = firstCategory.projects.map((proj) => proj.title);
//         setSubCatsArr(subCatTitles);
//         setShowSubCats(true);
//         if (firstProject) {
//           setSubCatName(firstProject.title);
//           setDisplayProject(firstProject);
//           setShowProjects(true);
//         }
//       }
//     }
//   };

//   const HandleMainCatHover = (MainCat) => {
//     const MainCatArrObj = projectData?.find((item) => item.name === deptName);
//     setMainCatName(MainCat);
//     const subCatObj = MainCatArrObj?.categories?.find(
//       (item) => item.name === MainCat
//     );

//     setFinalProjectArr(subCatObj?.projects);
//     if (subCatObj) {
//       const projectTitles = subCatObj.projects.map(
//         (eachSubCat) => eachSubCat.title
//       );
//       setSubCatsArr(projectTitles);
//       const firstProject = subCatObj.projects?.[0];
//       if (firstProject) {
//         setSubCatName(firstProject.title);
//         setDisplayProject(firstProject);
//         setShowProjects(true);
//       }
//     }
//     setShowSubCats(true);
//   };

//   const HandleSubCatHover = (SubCat) => {
//     setSubCatName(SubCat);
//     const projectFound = finalProjectArr?.find((item) => item.title === SubCat);
//     setDisplayProject(projectFound);
//     setShowProjects(true);
//   };const scrollUp = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
//       container.scrollTop -= itemHeight;
//     }
//   };

//   const scrollDown = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
//       container.scrollTop += itemHeight;
//     }
//   };

//   const scrollSubUp = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
//       container.scrollTop -= itemHeight;
//     }
//   };

//   const scrollSubDown = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
//       container.scrollTop += itemHeight;
//     }
//   };

//   const handleScroll = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const { scrollTop, scrollHeight, clientHeight } = container;
//       const lastItem = container.lastChild;
//       const lastItemOffset = lastItem ? lastItem.offsetTop + lastItem.offsetHeight : scrollHeight;
//       setShowUpArrow(scrollTop > 0);
//       setShowDownArrow(scrollTop + clientHeight < lastItemOffset);
//     }
//   };

//   const handleSubScroll = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const { scrollTop, scrollHeight, clientHeight } = container;
//       const lastItem = container.lastChild;
//       const lastItemOffset = lastItem ? lastItem.offsetTop + lastItem.offsetHeight : scrollHeight;
//       setShowSubUpArrow(scrollTop > 0);
//       setShowSubDownArrow(scrollTop + clientHeight < lastItemOffset);
//     }
//   };



//   const toggleProjectsVisibility = () => {
//     SetIsProjectVisible(!isProjectsVisible);
//   };

//   function findProjectPath(projectData, projectTitle) {
//     for (let department of projectData) {
//       for (let category of department.categories) {
//         for (let project of category.projects) {
//           if (project.title === projectTitle) {
//             return { department, category, project };
//           }
//         }
//       }
//     }
//     return null;
//   }

//   function findCategoryPath(projectData, projectCategory) {
//     for (let department of projectData) {
//       for (let category of department.categories) {
//         if (category.name === projectCategory) {
//           return { department, category };
//         }
//       }
//     }
//     return null;
//   }

//   const projectCategoryNavigator = (categoryTitle) => {
//     const result = findCategoryPath(projectData, categoryTitle);
//     if (result) {
//       navigate(
//         `/project/${result.department.name
//           .split(" ")
//           .join("-")}/${result.category.name.split(" ").join("-")}`
//       );
//       handleClose();
//     }
//   };

//   const singleProjectNavigator = (projectTitle) => {
//     const result = findProjectPath(projectData, projectTitle);
//     if (result) {
//       navigate(
//         `/project/${result.department.name
//           .split(" ")
//           .join("-")}/${result.category.name
//           .split(" ")
//           .join("-")}/${projectTitle.split(" ").join("-")}`
//       );
//       handleClose();
//     }
//   };

//   return (
//     <div className="NavProductComp-container">
//       <div className="navProComp-container">
//         <div className="navProComp-dept-container">
//           <div className="navprocomp-items-heading">Departments</div>
//           <div className="navproComp-item-holder">
//             <div className="navProComp-dot-container">
//               {/* {DeptArr?.map((dot, i) => (
//                 <div
//                   key={i}
//                   className={`navProComp-dot ${
//                     dot === deptName ? "navProComp-dot-active" : ""
//                   }`}
//                 ></div>
//               ))} */}
//             </div>
//             <div
//               className="navProComp-mainCat-item-container"
//               onMouseEnter={() => setHoveringOnDept(true)}
//               onMouseLeave={() => setHoveringOnDept(false)}
//             >
//               {DeptArr?.map((eachCat, i) => (
//                 <div
//                   key={i}
//                   onMouseEnter={() => HandleDeptHover(eachCat)}
//                   onClick={() => {
//                     navigate(`/project/${eachCat.split(" ").join("-")}`);
//                     handleClose();
//                   }}
//                   className="pointer"
//                 >
//                   <div
//                     className={`navProComp-dept-item ${
//                       eachCat === deptName ? "mainCat-active" : ""
//                     }`}
//                   >
//                     {eachCat}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {MainCatArr?.length && (
//           <div className="navProComp-mainCat-container">
//             <div className="navprocomp-items-heading">Categories</div>
//             <div className="navproComp-item-holder">
//               <div className="navProComp-dot-container">
//                 {MainCatArr?.map((dot, i) => (
//                   <div
//                     key={i}
//                     className={`navProComp-dot ${
//                       dot === mainCatName ? "navProComp-dot-active" : ""
//                     }`}
//                   ></div>
//                 ))}
//               </div>
//                <div className="arrow-wrapper">
//                               {showUpArrow && (
//                                 <span
//                                   onClick={scrollUp}
//                                   className="arrow-up"
//                                   aria-label="Scroll up"
//                                 >
//                                   <IoIosArrowUp />
//                                 </span>
//                               )}
//                               {showDownArrow && (
//                                 <span
//                                   onClick={scrollDown}
//                                   className="arrow-down"
//                                   aria-label="Scroll down"
//                                 >
//                                   <IoIosArrowDown />
//                                 </span>
//                               )}
//                             </div>
//               <div className="navProComp-mainCat-item-container">
//                 {MainCatArr?.map((eachCat, i) => (
//                   <div
//                     key={i}
//                     onMouseEnter={() => HandleMainCatHover(eachCat)}
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       projectCategoryNavigator(eachCat);
//                     }}
//                     className="pointer"
//                   >
//                     <div
//                       className={`navProComp-mainCat-item ${
//                         eachCat === mainCatName ? "mainCat-active" : ""
//                       }`}
//                     >
//                       {eachCat}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//         {showSubCats && subCatsArr?.length && (
//           <div className="navProComp-subCat-container">
//             <div className="navprocomp-items-heading">Projects</div>
//             <div className="navproComp-item-holder">
//               <div className="navProComp-dot-container">
//                 {subCatsArr?.map((dot, i) => (
//                   <div
//                     key={i}
//                     className={`navProComp-dot ${
//                       dot === subCatName ? "navProComp-dot-active" : ""
//                     }`}
//                   ></div>
//                 ))}
//               </div>
//                <div className="arrow-wrapper">
//                               {showSubUpArrow && (
//                                 <span
//                                   onClick={scrollSubUp}                    
//                                   aria-label="Scroll sub up"
//                                   className="arrow-up"
//                                 >
//                                   <IoIosArrowUp />
//                                 </span>
//                               )}
//                               {showSubDownArrow && (
//                                 <span
//                                   onClick={scrollSubDown}                    
//                                   aria-label="Scroll sub down"
//                                   className="arrow-down"
//                                 >
//                                   <IoIosArrowDown />
//                                 </span>
//                               )}
//                             </div>
//               <div className="navProComp-subCat-item-container">
//                 {subCatsArr?.map((eachItem, i) => (
//                   <div
//                     key={i}
//                     onMouseEnter={() => HandleSubCatHover(eachItem)}
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       singleProjectNavigator(eachItem);
//                     }}
//                     className="pointer"
//                   >
//                     <div
//                       className={`navProComp-mainCat-item ${
//                         eachItem === subCatName ? "mainCat-active" : ""
//                       }`}
//                     >
//                       {eachItem}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//         {showProjects && displayProject && (
//           <div className="navProComp-products-container">
//             <div className="navProComp-products-holder">
//               <div>
//                 <div
//                   onClick={() => {
//                     window.scrollTo(0, 0);
//                     singleProjectNavigator(displayProject.title);
//                   }}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <div className="navProComp-products-img">
//                     <img
//                       src={displayProject.mainImageUrl}
//                       alt={displayProject.title}
//                     />
//                   </div>
//                   <div className="navProComp-products-title">
//                     {displayProject.title}
//                   </div>
//                   <div className="navProComp-products-des">
//                     {displayProject.mainDesc}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="navProComp-products-more"
//               onClick={() => {
//                 window.scrollTo(0, 0);
//                 singleProjectNavigator(displayProject.title);
//               }}
//             >
//               <span>See More</span>
//               <IoIosArrowForward />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProjectDropdown;


//pk arrow default show

import React, { useEffect, useState, useRef } from "react";
import "../styles/NavProductComp.css";
import Star from "../assets/loadingStar.svg";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ProjectsData from "../Data/ProjectsData2.json";

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
  const [MainCatArr, setMainCatArr] = useState([]);
  const [subCatsArr, setSubCatsArr] = useState([]);
  const [deptName, setDeptName] = useState();
  const [mainCatName, setMainCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [displayProject, setDisplayProject] = useState();
  const [finalProjectArr, setFinalProjectArr] = useState();
  const [canScrollCatUp, setCanScrollCatUp] = useState(false); // For Categories up arrow
  const [canScrollCatDown, setCanScrollCatDown] = useState(false); // For Categories down arrow
  const [canScrollSubUp, setCanScrollSubUp] = useState(false); // For Projects up arrow
  const [canScrollSubDown, setCanScrollSubDown] = useState(false); // For Projects down arrow

  const DeptArr = projectData?.map((item) => item.name) || [];

  useEffect(() => {
    // Set default values
    const defaultDept = projectData?.[0];
    const defaultCategory = defaultDept?.categories?.[0];
    const defaultProject = defaultCategory?.projects?.[0];

    if (defaultDept && defaultCategory && defaultProject) {
      setDeptName(defaultDept.name);
      setMainCatArr(defaultDept.categories.map((cat) => cat.name) || []);
      setMainCatName(defaultCategory.name);
      setFinalProjectArr(defaultCategory.projects);
      setSubCatsArr(defaultCategory.projects.map((proj) => proj.title) || []);
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

  // Check scrollability for Categories whenever MainCatArr changes
  useEffect(() => {
    const checkCatScrollability = () => {
      if (categoryContainerRef.current) {
        const container = categoryContainerRef.current;
        const { scrollHeight, clientHeight } = container;
        setCanScrollCatDown(scrollHeight > clientHeight);
        setCanScrollCatUp(container.scrollTop > 0);
      }
    };

    const timer = setTimeout(checkCatScrollability, 0);
    return () => clearTimeout(timer);
  }, [MainCatArr]);

  // Check scrollability for Projects whenever subCatsArr changes
  useEffect(() => {
    const checkSubScrollability = () => {
      if (subCategoryContainerRef.current) {
        const container = subCategoryContainerRef.current;
        const { scrollHeight, clientHeight } = container;
        setCanScrollSubDown(scrollHeight > clientHeight);
        setCanScrollSubUp(container.scrollTop > 0);
      }
    };

    const timer = setTimeout(checkSubScrollability, 0);
    return () => clearTimeout(timer);
  }, [subCatsArr]);

  const HandleDeptHover = (DeptName) => {
    setDeptName(DeptName);
    const MainCatArrObj = projectData?.find((item) => item.name === DeptName);
    if (MainCatArrObj) {
      const categories = MainCatArrObj.categories || [];
      const firstCategory = categories[0];
      const firstProject = firstCategory?.projects[0];

      setMainCatArr(MainCatArrObj.categories.map((item) => item.name) || []);

      if (firstCategory) {
        setMainCatName(firstCategory.name);
        setFinalProjectArr(firstCategory.projects);
        const subCatTitles =
          firstCategory.projects.map((proj) => proj.title) || [];
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

    setFinalProjectArr(subCatObj?.projects || []);
    if (subCatObj) {
      const projectTitles =
        subCatObj.projects.map((eachSubCat) => eachSubCat.title) || [];
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
  };

  const scrollUp = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40;
      container.scrollTop -= itemHeight;
    }
  };

  const scrollDown = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40;
      container.scrollTop += itemHeight;
    }
  };

  const scrollSubUp = () => {
    if (subCategoryContainerRef.current) {
      const container = subCategoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40;
      container.scrollTop -= itemHeight;
    }
  };

  const scrollSubDown = () => {
    if (subCategoryContainerRef.current) {
      const container = subCategoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40;
      container.scrollTop += itemHeight;
    }
  };

  const handleScroll = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      setCanScrollCatUp(scrollTop > 0);
      setCanScrollCatDown(!isAtBottom);
      console.log(
        "Cat Scroll - scrollTop:",
        scrollTop,
        "clientHeight:",
        clientHeight,
        "scrollHeight:",
        scrollHeight,
        "canScrollCatDown:",
        !isAtBottom
      );
    }
  };

  const handleSubScroll = () => {
    if (subCategoryContainerRef.current) {
      const container = subCategoryContainerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      setCanScrollSubUp(scrollTop > 0);
      setCanScrollSubDown(!isAtBottom);
      console.log(
        "Sub Scroll - scrollTop:",
        scrollTop,
        "clientHeight:",
        clientHeight,
        "scrollHeight:",
        scrollHeight,
        "canScrollSubDown:",
        !isAtBottom
      );
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
        {MainCatArr?.length > 0 && (
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
              {MainCatArr?.length > 5 && (
                <div className="arrow-wrapper">
                  {canScrollCatUp && (
                    <span
                      onClick={scrollUp}
                      className="arrow-up"
                      aria-label="Scroll up"
                    >
                      <IoIosArrowUp />
                    </span>
                  )}
                  {canScrollCatDown && (
                    <span
                      onClick={scrollDown}
                      className="arrow-down"
                      aria-label="Scroll down"
                    >
                      <IoIosArrowDown />
                    </span>
                  )}
                </div>
              )}
              <div
                className="navProComp-mainCat-item-container"
                ref={categoryContainerRef}
                onScroll={handleScroll}
              >
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
        {showSubCats && subCatsArr?.length > 0 && (
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
              {subCatsArr?.length > 5 && (
                <div className="arrow-wrapper">
                  {canScrollSubUp && (
                    <span
                      onClick={scrollSubUp}
                      aria-label="Scroll sub up"
                      className="arrow-up"
                    >
                      <IoIosArrowUp />
                    </span>
                  )}
                  {canScrollSubDown && (
                    <span
                      onClick={scrollSubDown}
                      aria-label="Scroll sub down"
                      className="arrow-down"
                    >
                      <IoIosArrowDown />
                    </span>
                  )}
                </div>
              )}
              <div
                className="navProComp-subCat-item-container"
                ref={subCategoryContainerRef}
                onScroll={handleSubScroll}
              >
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
