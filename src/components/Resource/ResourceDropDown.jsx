// DYNAMIC CODE


// import React, { useEffect, useState } from "react";
// import "../../styles/ResourceDropDown.css";
// import Star from "../../assets/loadingStar.svg";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// function ResourceDropDown({ handleClose }) {
//   const navigate = useNavigate();
//   const apiUrl = process.env.REACT_APP_API_URL;

//   const [articlesData, setArticlesData] = useState();
//   const [caseStudyData, setCaseStudyData] = useState();

//   const FetchData = async (path, setFun) => {
//     try {
//       const res = await axios.get(`${apiUrl}${path}`);
//       setFun(res.data.docs);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     FetchData("/articles/list", setArticlesData);
//     FetchData("/case-study/list", setCaseStudyData);
//   }, []);
//   console.log(articlesData);
//   console.log("----------------------------------------------------");
//   console.log(caseStudyData);

//   const ResourceArr = [
//     {
//       name: "Article",
//       cats: articlesData,
//     },
//     {
//       name: "Case Study",
//       cats: caseStudyData,
//     },
//   ];

//   const [activeRes, setActiveRes] = useState();
//   const [activeDept, setActiveDept] = useState();
//   const [activeArt, setActiveArt] = useState();
//   const [activeResArr, setActiveResArr] = useState();
//   const [currentcat, setCurrentCat] = useState();
//   const [foundItem, setFoundItem] = useState();

//   useEffect(() => {
//     if (activeRes) {
//       setActiveResArr(ResourceArr.find((res) => res.name === activeRes));
//     }
//   }, [activeRes]);

//   console.log(activeResArr);

//   useEffect(() => {
//     if (activeDept) {
//       setCurrentCat(
//         activeResArr?.cats.find((eachItem) => eachItem.name === activeDept)
//       );
//     }
//   }, [activeDept, activeResArr]);

//   useEffect(() => {
//     if (activeArt) {
//       setFoundItem(
//         currentcat?.data.find((eachItem) => eachItem.title === activeArt)
//       );
//     }
//   }, [activeArt, currentcat]);

//   return (
//     <div className="nav-resource-dd">
//       <div className="res-main-container">
//         <div className="res-top-tilte">Section</div>
//         {ResourceArr.map((eachRes, i) => {
//           const routKey = eachRes.name.toLowerCase().split(" ").join("-");
//           return (
//             <div
//               key={i}
//               onMouseEnter={() => setActiveRes(eachRes.name)}
//               className={`res-main-item pointer ${
//                 eachRes.name === activeRes ? "res-main-item-active" : ""
//               }`}
//               onClick={() => {
//                 window.scrollTo(0, 0);
//                 navigate(`/${routKey}`);
//                 handleClose();
//               }}
//             >
//               <span> {eachRes.name} </span>
//               {eachRes.name === activeRes && (
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
//       {activeResArr && activeRes && (
//         <div className="res-dept-container">
//           <div className="res-top-tilte">Department</div>
//           {activeResArr?.cats.map((eachDept, i) => {
//             const resRouteKey = activeRes.toLowerCase().split(" ").join("-");
//             const deptRouteKey = eachDept.name.split(" ").join("-");
//             return (
//               <div
//                 key={i}
//                 onMouseEnter={() => setActiveDept(eachDept.name)}
//                 className={`res-main-item pointer ${
//                   eachDept.name === activeDept ? "res-main-item-active" : ""
//                 }`}
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                   navigate(`/${resRouteKey}/${deptRouteKey}`);
//                   handleClose();
//                 }}
//               >
//                 <span>{eachDept.name}</span>
//                 {eachDept.name === activeDept && (
//                   <img
//                     src={Star}
//                     alt=""
//                     style={{ width: "18px", marginLeft: "1rem" }}
//                   />
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       )}
//       {activeDept && currentcat && (
//         <div className="res-title-container">
//           <div className="res-title-dot-container">
//             <div>
//               {currentcat?.data.map((dot, i) => {
//                 return (
//                   <div
//                     key={i}
//                     className={`res-title-dot ${
//                       dot.title === activeArt ? "res-title-dot-active" : ""
//                     }`}
//                   ></div>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="res-title-holder">
//             <div className="res-top-tilte">{activeRes}</div>
//             {currentcat?.data.map((eachItem, i) => {
//               const resRouteKey = activeRes.toLowerCase().split(" ").join("-");
//               const deptRouteKey = activeDept.split(" ").join("-");
//               const artRouteKey = eachItem.title.split(" ").join("-");
//               return (
//                 <div
//                   key={i}
//                   onMouseEnter={() => setActiveArt(eachItem.title)}
//                   className={`res-main-item pointer ${
//                     eachItem.title === activeArt ? "res-main-item-active" : ""
//                   }`}
//                   onClick={() => {
//                     window.scrollTo(0, 0);
//                     navigate(`/${resRouteKey}/${deptRouteKey}/${artRouteKey}`);
//                     handleClose();
//                   }}
//                 >
//                   <span>{eachItem.title}</span>
//                   {eachItem.title === activeArt && (
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
//       {foundItem && activeArt && (
//         <div className="res-item-contaienr">
//           <div>
//             <div className="res-item-card-image">
//               <img src={foundItem?.image.imageUrl} alt="" />
//             </div>
//             <div className="res-item-card-title">{foundItem?.title}</div>
//             <p className="res-item-card-des">{foundItem?.description}</p>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "end", width: "100%" }}
//             className="know-more"
//             onClick={() => {
//               window.scrollTo(0, 0);
//               navigate(
//                 `/${activeRes.toLowerCase().split(" ").join("-")}/${activeDept
//                   .split(" ")
//                   .join("-")}/${foundItem?.title.split(" ").join("-")}`
//               );
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

// export default ResourceDropDown;


// articlesresoursedropdown


// import React, { useEffect, useState } from "react";
// import "../../styles/ResourceDropDown.css";
// import Star from "../../assets/loadingStar.svg";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import article from "../../Data/Articles.json";
// function ResourceDropDown({ handleClose }) {
//   const navigate = useNavigate();
//   const apiUrl = process.env.REACT_APP_API_URL;
//   // :white_tick: Default state as empty array
//   const [articlesData, setArticlesData] = useState([]); // array of objects----
//   const [caseStudyData, setCaseStudyData] = useState([]);
//   // const FetchData = async (path, setFun) => {
//   //   try {
//   //     const res = await axios.get(`${apiUrl}${path}`);
//   //     setFun(res.data.docs || []); //  Ensure it's always an array----
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //     setFun([]); //  Prevent undefined issues
//   //   }
//   // };
//   useEffect(() => {
//     // FetchData("/articles/list", setArticlesData);
//     // FetchData("/case-study/list", setCaseStudyData);
//     setArticlesData(article.docs);
//   }, []);
//   const ResourceArr = [
//     { name: "Article", cats: articlesData },
//     { name: "Case Study", cats: caseStudyData },
//   ];
//   const [activeRes, setActiveRes] = useState(null);
//   const [activeDept, setActiveDept] = useState(null);
//   const [activeArt, setActiveArt] = useState(null);
//   const [activeResArr, setActiveResArr] = useState(null);
//   const [currentcat, setCurrentCat] = useState(null);
//   const [foundItem, setFoundItem] = useState(null);
//   useEffect(() => {
//     if (activeRes) {
//       setActiveResArr(
//         ResourceArr.find((res) => res.name === activeRes) || null
//       );
//     }
//   }, [activeRes]);
//   useEffect(() => {
//     if (activeDept && activeResArr?.cats) {
//       setCurrentCat(
//         activeResArr.cats.find((eachItem) => eachItem.name === activeDept) ||
//           null
//       );
//     }
//   }, [activeDept, activeResArr]);
//   useEffect(() => {
//     if (activeArt && currentcat?.data) {
//       setFoundItem(
//         currentcat.data.find((eachItem) => eachItem.title === activeArt) || null
//       );
//     }
//   }, [activeArt, currentcat]);
//   return (
//     <div className="nav-resource-dd">
//       <div className="res-main-container">
//         <div className="res-top-tilte">Section</div>
//         {ResourceArr.map((eachRes, i) => {
//           const routKey = eachRes.name.toLowerCase().replace(/\s+/g, "-"); //spaces in route
//           return (
//             <div
//               key={i}
//               onMouseEnter={() => setActiveRes(eachRes.name)}
//               className={`res-main-item pointer ${
//                 eachRes.name === activeRes ? "res-main-item-active" : ""
//               }`}
//               onClick={() => {
//                 window.scrollTo(0, 0);
//                 navigate(`/${routKey}`);
//                 handleClose();
//               }}
//             >
//               <span>{eachRes.name}</span>
//               {eachRes.name === activeRes && (
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
//       {activeResArr && activeRes && (
//         <div className="res-dept-container">
//           <div className="res-top-tilte">Department</div>
//           {activeResArr.cats?.length > 0 ? (
//             activeResArr.cats.map((eachDept, i) => {
//               const resRouteKey = activeRes.toLowerCase().replace(/\s+/g, "-");
//               const deptRouteKey = eachDept.name.replace(/\s+/g, "-");
//               return (
//                 <div
//                   key={i}
//                   onMouseEnter={() => setActiveDept(eachDept.name)}
//                   className={`res-main-item pointer ${
//                     eachDept.name === activeDept ? "res-main-item-active" : ""
//                   }`}
//                   onClick={() => {
//                     window.scrollTo(0, 0);
//                     navigate(`/${resRouteKey}/${deptRouteKey}`);
//                     handleClose();
//                   }}
//                 >
//                   <span>{eachDept.name}</span>
//                   {eachDept.name === activeDept && (
//                     <img
//                       src={Star}
//                       alt=""
//                       style={{ width: "18px", marginLeft: "1rem" }}
//                     />
//                   )}
//                 </div>
//               );
//             })
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       )}
//       {activeDept && currentcat?.data?.length > 0 && (
//         <div className="res-title-container">
//           <div className="res-title-dot-container">
//             <div>
//               {currentcat.data.map((dot, i) => (
//                 <div
//                   key={i}
//                   className={`res-title-dot ${
//                     dot.title === activeArt ? "res-title-dot-active" : ""
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="res-title-holder">
//             <div className="res-top-tilte">{activeRes}</div>
//             {currentcat.data.map((eachItem, i) => {
//               const resRouteKey = activeRes.toLowerCase().replace(/\s+/g, "-");
//               const deptRouteKey = activeDept.replace(/\s+/g, "-");
//               const artRouteKey = eachItem.title.replace(/\s+/g, "-");
//               return (
//                 <div
//                   key={i}
//                   onMouseEnter={() => setActiveArt(eachItem.title)}
//                   className={`res-main-item pointer ${
//                     eachItem.title === activeArt ? "res-main-item-active" : ""
//                   }`}
//                   onClick={() => {
//                     window.scrollTo(0, 0);
//                     navigate(`/${resRouteKey}/${deptRouteKey}/${artRouteKey}`);
//                     handleClose();
//                   }}
//                 >
//                   <span>{eachItem.title}</span>
//                   {eachItem.title === activeArt && (
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
//       {foundItem && activeArt && (
//         <div className="res-item-contaienr">
//           <div>
//             <div className="res-item-card-image">
//               <img src={foundItem?.image?.imageUrl} alt="" />
//             </div>
//             <div className="res-item-card-title">{foundItem?.title}</div>
//             <p className="res-item-card-des">{foundItem?.description}</p>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "end", width: "100%" }}
//             className="know-more"
//             onClick={() => {
//               window.scrollTo(0, 0);
//               navigate(
//                 `/${activeRes
//                   .toLowerCase()
//                   .replace(/\s+/g, "-")}/${activeDept.replace(
//                   /\s+/g,
//                   "-"
//                 )}/${foundItem?.title.replace(/\s+/g, "-")}`
//               );
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

// export default ResourceDropDown;

















// import React, { useEffect, useState } from "react";
// import "../../styles/ResourceDropDown.css";
// import Star from "../../assets/loadingStar.svg";
// import { useNavigate } from "react-router-dom";
// import casedoc from "../../Data/SingleCaseStudy.json";
// import article from "../../Data/Articles.json";

// function ResourceDropDown({ handleClose }) {
//   const navigate = useNavigate();


//   const [articlesData, setArticlesData] = useState([]);
//   const [caseStudyData, setCaseStudyData] = useState([]);
//   const [defaultLoaded, setDefaultLoaded] = useState(false);

//   useEffect(() => {
//     setCaseStudyData(casedoc?.singlecasestudy || []);
//     setArticlesData(article.docs);
//   }, []);

//   useEffect(() => {
//     if (!defaultLoaded && articlesData.length > 0) {
//       const defaultRes = "Article";
//       const firstDept = articlesData[0];
//       const firstArticle = firstDept?.data?.[0];

//       setActiveRes(defaultRes);
//       setActiveDept(firstDept?.name);
//       if (firstArticle) {
//         setActiveArt(firstArticle?.title);
//         setFoundItem(firstArticle);
//       }
//       setDefaultLoaded(true);
//     }

//     document.body.classList.add("no-scroll");

//     return()=>{
//       document.body.classList.remove("no-scroll")
//     }
//   }, [articlesData, defaultLoaded])





//   const ResourceArr = [
//     { name: "Article", cats: articlesData },
//     { name: "Case Study", cats: caseStudyData },
//   ];

//   const [activeRes, setActiveRes] = useState(null);
//   const [activeDept, setActiveDept] = useState(null);
//   const [activeArt, setActiveArt] = useState(null);
//   const [activeResArr, setActiveResArr] = useState(null);
//   const [currentcat, setCurrentCat] = useState(null);
//   const [foundItem, setFoundItem] = useState(null);

//   useEffect(() => {
//     if (activeRes) {
//       setActiveResArr(
//         ResourceArr.find((res) => res.name === activeRes) || null
//       );
//     }
//   }, [activeRes]);

//   useEffect(() => {
//     if (activeDept && activeResArr?.cats) {
//       setCurrentCat(
//         activeResArr.cats.find((eachItem) => eachItem.name === activeDept) ||
//         null
//       );
//     }
//   }, [activeDept, activeResArr]);

//   useEffect(() => {
//     if (activeArt && currentcat?.data) {
//       setFoundItem(
//         currentcat.data.find((eachItem) => eachItem.title === activeArt) || null
//       );
//     }
//   }, [activeArt, currentcat]);

//   return (
//     <div className="nav-resource-dd">
//       <div className="res-main-container">
//         <div className="res-top-tilte">Section</div>
//         {ResourceArr.map((eachRes, i) => {
//           const routKey = eachRes?.name
//             ? eachRes.name.toLowerCase().replace(/\s+/g, "-")
//             : "";

//           return (
//             <div
//               key={i}
//               onMouseEnter={() => {
//                 setActiveRes(eachRes.name)

//                 const firstDept = eachRes?.cats?.[0];
//                 const firstItem = firstDept?.data?.[0];

//                 setActiveDept(firstDept?.name || null);
//                 setActiveArt(firstItem?.title || null);
//                 setFoundItem(firstItem)
//               }}
//               className={`res-main-item pointer ${eachRes.name === activeRes ? "res-main-item-active" : ""
//                 }`}
//               onClick={() => {
//                 window.scrollTo(0, 0);
//                 navigate(`/${routKey}`);
//                 handleClose();
//               }}
//             >
//               <span>{eachRes.name}</span>
//               {/* {eachRes.name === activeRes && (
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

//       {activeResArr && activeRes && (
//         <div className="res-dept-container">
//           <div className="res-top-tilte">Department</div>
//           {activeResArr.cats?.length > 0 ? (
//             activeResArr.cats.map((eachDept, i) => {
//               const resRouteKey =
//                 activeRes?.toLowerCase().replace(/\s+/g, "-") || "";
//                 console.log(resRouteKey,"ResRouteKey")
//               const deptRouteKey = eachDept?.name?.replace(/\s+/g, "") || "";
//               console.log(deptRouteKey, "depRouteKey");

//               return (
//                 <div
//                   key={i}
//                   onMouseEnter={() => {
//                     setActiveDept(eachDept.name)

//                     const firstItem = eachDept?.data?.[0];
//                     setActiveArt(firstItem?.title || null);
//                     setFoundItem(firstItem)
//                   }}
//                   className={`res-main-item pointer ${eachDept.name === activeDept ? "res-main-item-active" : ""
//                     }`}
//                   onClick={() => {
//                     window.scrollTo(0, 0);
//                     navigate(`/${resRouteKey}/${deptRouteKey}`);
//                     handleClose();
//                   }}
//                 >
//                   <span>{eachDept.name}</span>
//                   {/* {eachDept.name === activeDept && (
//                     <img
//                       src={Star}
//                       alt=""
//                       style={{ width: "18px", marginLeft: "1rem" }}
//                     />
//                   )} */}
//                 </div>
//               );
//             })
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       )}

//       {activeDept && currentcat?.data?.length > 0 && (
//         <div className="res-title-container">
//           <div className="res-title-dot-container">
//             <div>
//               {currentcat.data.map((dot, i) => (
//                 <div
//                   key={i}
//                   className={`res-title-dot ${dot.title === activeArt ? "res-title-dot-active" : ""
//                     }`}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="res-title-holder">
//             <div className="res-top-tilte">{activeRes}</div>
//             {currentcat.data.map((eachItem, i) => {
//               const resRouteKey =
//                 activeRes?.toLowerCase().replace(/\s+/g, "-") || "";
//               const deptRouteKey = activeDept?.replace(/\s+/g, "") || "";
//               const artRouteKey = eachItem?.title?.replace(/\s+/g, "-") || "";

//               return (
//                 <div
//                   key={i}
//                   onMouseEnter={() => setActiveArt(eachItem.title)}
//                   className={`res-main-item pointer ${eachItem.title === activeArt ? "res-main-item-active" : ""
//                     }`}
//                   onClick={() => {
//                     window.scrollTo(0, 0);
//                     navigate(
//                       // `/case-study/single-caseStudy/${eachItem?.id || ""}` //----

//                     );
//                     navigate(`/${resRouteKey}/${deptRouteKey}/${eachItem?.id || artRouteKey}`);
//                     handleClose();
//                   }}
//                 >
//                   <span>{eachItem.title}</span>
//                   {/* {eachItem.title === activeArt && (
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

//       {/* know more page -------------- */}

//       {foundItem && activeArt && (
//         <div className="res-item-contaienr">
//           <div>
//             <div className="res-item-card-image" 
//              onClick={() => {
//               window.scrollTo(0, 0);
//               if(activeRes == "Case Study"){
//                 navigate(`/case-study/single-caseStudy/${foundItem?.id || ""}`); // path casestudy
//                 handleClose();
//               }else{
//                 navigate(
//                   `/${activeRes?.toLowerCase().replace(/\s+/g, "-") || ""}/${activeDept?.replace(/\s+/g, "") || ""
//                   }/${foundItem?.title?.replace(/\s+/g, "-") || ""}`
//                 );
//                 handleClose();
//               }}}   
//               style={{cursor:"pointer"}}
//             >
//               <img src={foundItem?.imageURL|| foundItem?.mainImageUrl} alt="" />
//             </div>
//             <div className="res-item-card-title" >{foundItem?.title}</div>
//             <p className="res-item-card-des">{foundItem?.description}</p>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "end", width: "100%" ,cursor:"pointer"}}
//             className="know-more"
//             onClick={() => {
//               window.scrollTo(0, 0);
//               if (activeRes === "Case Study") {
//                 // Navigate using ID
//                 navigate(`/case-study/single-caseStudy/${foundItem?.id || ""}`);
//               } else {
//                 // Navigate using title
//                 const resSlug =
//                   activeRes?.toLowerCase().replace(/\s+/g, "-") || "";
//                 const deptSlug = activeDept?.replace(/\s+/g, "") || "";
//                 const titleSlug = foundItem?.title?.replace(/\s+/g, "-") || "";
//                 navigate(`/${resSlug}/${deptSlug}/${titleSlug}`);
//               }
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

// export default ResourceDropDown;



import React, { useEffect, useState } from "react";
import "../../styles/NavProductComp.css";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import casedoc from "../../Data/SingleCaseStudy.json";
import article from "../../Data/Articles.json";

function ResourceDropDown({ handleClose }) {
  const navigate = useNavigate();

  const [articlesData, setArticlesData] = useState([]);
  const [caseStudyData, setCaseStudyData] = useState([]);
  const [showSubCats, setShowSubCats] = useState(false);
  const [showProducts, setShowproducts] = useState(false);
  const [deptname, setDeptname] = useState();
  const [MainCatArr, setMaincatArr] = useState();
  const [mainCatName, setMainCatName] = useState();
  const [subCatsArr, setSubccatsArr] = useState();
  const [subCatName, setSubCatName] = useState();
  const [displayProducts, setDisplayProducts] = useState();
  const [finalProductArr, setFinalProductArr] = useState();

  const ResourceArr = [
    { name: "Article", cats: articlesData },
    { name: "Case Study", cats: caseStudyData },
  ];
  const DeptArr = ResourceArr?.map((item) => item.name);

  useEffect(() => {
    setCaseStudyData(casedoc?.singlecasestudy || []);
    setArticlesData(article.docs || []);

    const defaultDept = ResourceArr?.[0];
    const defaultCategory = defaultDept?.cats?.[0];
    const defaultProduct = defaultCategory?.data?.[0];

    if (defaultDept && defaultCategory && defaultProduct) {
      setDeptname(defaultDept.name);
      setMaincatArr(defaultDept.cats.map((cat) => cat.name));
      setMainCatName(defaultCategory.name);
      setFinalProductArr(defaultCategory.data);
      setSubccatsArr(defaultCategory.data.map((item) => item.title));
      setSubCatName(defaultProduct.title);
      setDisplayProducts(defaultProduct);
      setShowSubCats(true);
      setShowproducts(true);
    }

    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [articlesData.length, caseStudyData.length]);

  const HandleDeptHovever = (DeptName) => {
    setDeptname(DeptName);
    const MainCatArrObj = ResourceArr?.find((item) => item.name === DeptName);
    if (MainCatArrObj) {
      const categories = MainCatArrObj.cats || [];
      const firstCategory = categories[0];
      const firstProduct = firstCategory?.data[0];

      setMaincatArr(MainCatArrObj.cats.map((item) => item.name));

      if (firstCategory) {
        setMainCatName(firstCategory.name);
        setFinalProductArr(firstCategory.data);
        const subCatTitles = firstCategory.data.map((item) => item.title);
        setSubccatsArr(subCatTitles);
        setShowSubCats(true);
        if (firstProduct) {
          setSubCatName(firstProduct.title);
          setDisplayProducts(firstProduct);
          setShowproducts(true);
        }
      }
    }
  };

  const HandleMainCatHover = (MainCat) => {
    const MainCatArrObj = ResourceArr?.find((item) => item.name === deptname);
    setMainCatName(MainCat);
    const subCatObj = MainCatArrObj?.cats?.find((item) => item.name === MainCat);

    setFinalProductArr(subCatObj?.data);
    if (subCatObj) {
      const productTitles = subCatObj.data.map((eachSubCat) => eachSubCat.title);
      setSubccatsArr(productTitles);
      const firstProduct = subCatObj.data?.[0];
      if (firstProduct) {
        setSubCatName(firstProduct.title);
        setDisplayProducts(firstProduct);
        setShowproducts(true);
      }
    }
    setShowSubCats(true);
  };

  const HandleSubCatHover = (SubCat) => {
    setSubCatName(SubCat);
    const ProductsFound = finalProductArr?.find((item) => item.title === SubCat);
    setDisplayProducts(ProductsFound);
    setShowproducts(true);
  };

  function findProductPath(resourceData, productTitle) {
    for (let section of resourceData) {
      for (let category of section.cats) {
        for (let item of category.data) {
          if (item.title === productTitle) {
            return { section, category, item };
          }
        }
      }
    }
    return null;
  }

  function findCategoryPath(resourceData, categoryName) {
    for (let section of resourceData) {
      for (let category of section.cats) {
        if (category.name === categoryName) {
          return { section, category };
        }
      }
    }
    return null;
  }

  const productCategoryNavigator = (categoryName) => {
    const result = findCategoryPath(ResourceArr, categoryName);
    if (result) {
      const resSlug = result.section.name.toLowerCase().replace(/\s+/g, "-");
      const deptSlug = result.category.name.replace(/\s+/g, "-");
      navigate(`/${resSlug}/${deptSlug}`);
      handleClose();
    }
  };

  const singleProductNavigator = (productTitle) => {
    const result = findProductPath(ResourceArr, productTitle);
    if (result) {
      const resSlug = result.section.name.toLowerCase().replace(/\s+/g, "-");
      const deptSlug = result.category.name.replace(/\s+/g, "-");
      if (result.section.name === "Case Study") {
        navigate(`/case-study/single-caseStudy/${result.item.id || ""}`);
      } else {
        const titleSlug = result.item.title.replace(/\s+/g, "-");
        navigate(`/${resSlug}/${deptSlug}/${titleSlug}`);
      }
      handleClose();
    }
  };

  return (
    <div className="NavProductComp-container">
      <div className="navProComp-container">
        <div className="navProComp-dept-container">
          <div className="navprocomp-items-heading">Sections</div>
          <div className="navproComp-item-holder">
            <div className="navProComp-dot-container">
              {/* {DeptArr?.map((dot, i) => (
                <div
                  key={i}
                  className={`navProComp-dot ${dot === deptname ? "navProComp-dot-active" : ""}`}
                ></div>
              ))} */}
            </div>
            <div className="navProComp-mainCat-item-container">
              {DeptArr?.map((eachCat, i) => (
                <div
                  key={i}
                  onMouseEnter={() => HandleDeptHovever(eachCat)}
                  onClick={() => {
                    navigate(`/${eachCat.toLowerCase().replace(/\s+/g, "-")}`);
                    handleClose();
                  }}
                  className="pointer"
                >
                  <div
                    className={`navProComp-dept-item ${eachCat === deptname ? "mainCat-active" : ""}`}
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
            <div className="navprocomp-items-heading">Departments</div>
            <div className="navproComp-item-holder">
              <div className="navProComp-dot-container">
                {MainCatArr?.map((dot, i) => (
                  <div
                    key={i}
                    className={`navProComp-dot ${dot === mainCatName ? "navProComp-dot-active" : ""}`}
                  ></div>
                ))}
              </div>
              <div className="navProComp-mainCat-item-container">
                {MainCatArr?.map((eachCat, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => HandleMainCatHover(eachCat)}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      productCategoryNavigator(eachCat);
                    }}
                    className="pointer"
                  >
                    <div
                      className={`navProComp-mainCat-item ${eachCat === mainCatName ? "mainCat-active" : ""}`}
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
            <div className="navprocomp-items-heading">Resources</div>
            <div className="navproComp-item-holder">
              <div className="navProComp-dot-container">
                {subCatsArr?.map((dot, i) => (
                  <div
                    key={i}
                    className={`navProComp-dot ${dot === subCatName ? "navProComp-dot-active" : ""}`}
                  ></div>
                ))}
              </div>
              <div className="navProComp-subCat-item-container">
                {subCatsArr?.map((eachItem, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => HandleSubCatHover(eachItem)}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      singleProductNavigator(eachItem);
                    }}
                    className="pointer"
                  >
                    <div
                      className={`navProComp-mainCat-item ${eachItem === subCatName ? "mainCat-active" : ""}`}
                    >
                      {eachItem}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {showProducts && displayProducts && (
          <div className="navProComp-products-container">
            <div className="navProComp-products-holder">
              <div>
                <div
                  onClick={() => {
                    window.scrollTo(0, 0);
                    singleProductNavigator(displayProducts.title);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="navProComp-products-img">
                    <img
                      src={displayProducts.imageURL || displayProducts.mainImageUrl}
                      alt={displayProducts.title}
                    />
                  </div>
                  <div className="navProComp-products-title">
                    {displayProducts.title}
                  </div>
                  <div className="navProComp-products-des">
                    {displayProducts.description}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="navProComp-products-more"
              onClick={() => {
                window.scrollTo(0, 0);
                singleProductNavigator(displayProducts.title);
              }}
            >
              <span>Know More</span>
              <IoIosArrowForward />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourceDropDown;