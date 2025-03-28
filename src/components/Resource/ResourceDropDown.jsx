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

















import React, { useEffect, useState } from "react";
import "../../styles/ResourceDropDown.css";
import Star from "../../assets/loadingStar.svg";
import { useNavigate } from "react-router-dom";
import pk from "../../Data/SingleCaseStudy.json";

function ResourceDropDown({ handleClose }) {
  const navigate = useNavigate();


  const [articlesData, setArticlesData] = useState([]);
  const [caseStudyData, setCaseStudyData] = useState([]);

  useEffect(() => {
    setCaseStudyData(pk?.singlecasestudy || []);
  }, []);

  const ResourceArr = [
    { name: "Article", cats: articlesData },
    { name: "Case Study", cats: caseStudyData },
  ];

  const [activeRes, setActiveRes] = useState(null);
  const [activeDept, setActiveDept] = useState(null);
  const [activeArt, setActiveArt] = useState(null);
  const [activeResArr, setActiveResArr] = useState(null);
  const [currentcat, setCurrentCat] = useState(null);
  const [foundItem, setFoundItem] = useState(null);

  useEffect(() => {
    if (activeRes) {
      setActiveResArr(
        ResourceArr.find((res) => res.name === activeRes) || null
      );
    }
  }, [activeRes]);

  useEffect(() => {
    if (activeDept && activeResArr?.cats) {
      setCurrentCat(
        activeResArr.cats.find((eachItem) => eachItem.name === activeDept) ||
          null
      );
    }
  }, [activeDept, activeResArr]);

  useEffect(() => {
    if (activeArt && currentcat?.data) {
      setFoundItem(
        currentcat.data.find((eachItem) => eachItem.title === activeArt) || null
      );
    }
  }, [activeArt, currentcat]);

  return (
    <div className="nav-resource-dd">
      <div className="res-main-container">
        <div className="res-top-tilte">Section</div>
        {ResourceArr.map((eachRes, i) => {
          const routKey = eachRes?.name
            ? eachRes.name.toLowerCase().replace(/\s+/g, "-")
            : "";

          return (
            <div
              key={i}
              onMouseEnter={() => setActiveRes(eachRes.name)}
              className={`res-main-item pointer ${
                eachRes.name === activeRes ? "res-main-item-active" : ""
              }`}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/${routKey}`);
                handleClose();
              }}
            >
              <span>{eachRes.name}</span>
              {eachRes.name === activeRes && (
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

      {activeResArr && activeRes && (
        <div className="res-dept-container">
          <div className="res-top-tilte">Department</div>
          {activeResArr.cats?.length > 0 ? (
            activeResArr.cats.map((eachDept, i) => {
              const resRouteKey =
                activeRes?.toLowerCase().replace(/\s+/g, "-") || "";
              const deptRouteKey = eachDept?.name?.replace(/\s+/g, "-") || "";

              return (
                <div
                  key={i}
                  onMouseEnter={() => setActiveDept(eachDept.name)}
                  className={`res-main-item pointer ${
                    eachDept.name === activeDept ? "res-main-item-active" : ""
                  }`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(`/${resRouteKey}/${deptRouteKey}`);
                    handleClose();
                  }}
                >
                  <span>{eachDept.name}</span>
                  {eachDept.name === activeDept && (
                    <img
                      src={Star}
                      alt=""
                      style={{ width: "18px", marginLeft: "1rem" }}
                    />
                  )}
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}

      {activeDept && currentcat?.data?.length > 0 && (
        <div className="res-title-container">
          <div className="res-title-dot-container">
            <div>
              {currentcat.data.map((dot, i) => (
                <div
                  key={i}
                  className={`res-title-dot ${
                    dot.title === activeArt ? "res-title-dot-active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="res-title-holder">
            <div className="res-top-tilte">{activeRes}</div>
            {currentcat.data.map((eachItem, i) => {
              const resRouteKey =
                activeRes?.toLowerCase().replace(/\s+/g, "-") || "";
              const deptRouteKey = activeDept?.replace(/\s+/g, "-") || "";
              const artRouteKey = eachItem?.title?.replace(/\s+/g, "-") || "";

              return (
                <div
                  key={i}
                  onMouseEnter={() => setActiveArt(eachItem.title)}
                  className={`res-main-item pointer ${
                    eachItem.title === activeArt ? "res-main-item-active" : ""
                  }`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                   navigate(
                     `/case-study/single-caseStudy/${eachItem?.id || ""}`
                   );
                    handleClose();
                  }}
                >
                  <span>{eachItem.title}</span>
                  {eachItem.title === activeArt && (
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

      {foundItem && activeArt && (
        <div className="res-item-contaienr">
          <div>
            <div className="res-item-card-image">
              <img src={foundItem?.image?.imageUrl} alt="" />
            </div>
            <div className="res-item-card-title">{foundItem?.title}</div>
            <p className="res-item-card-des">{foundItem?.description}</p>
          </div>
          <div
            style={{ display: "flex", justifyContent: "end", width: "100%" }}
            className="know-more"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(
                
                `/${activeRes?.toLowerCase().replace(/\s+/g, "-") || ""}/${
                  activeDept?.replace(/\s+/g, "-") || ""
                }/${foundItem?.title?.replace(/\s+/g, "-") || ""}`
              );
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

export default ResourceDropDown;
