// import React, { useEffect, useState } from "react";
// import "../styles/AboutDropdown.css";
// import { useNavigate } from "react-router-dom";
// import PlcImg from "../assets/abt-dd-logo.png";
// import Star from "../assets/loadingStar.svg";
// import data from "../Data/About.json"; // Importing JSON data

// function AboutDropDown({ handleClose }) {

//   const navigate = useNavigate();
//   const [Leaders, setLeaders] = useState(data.leaders);

//   const AboutArr = data.aboutSections;

//   const [sectionTitles, setSectionTitles] = useState([]);
//   const [subSectionTitles, setSubSectionTitles] = useState([]);
//   const [foundLeader, setFoundLeader] = useState();
//   const [activeTitle, setActiveTitle] = useState();
//   const [activeSubTitle, setActiveSubTitle] = useState();

//   useEffect(() => {
//     setSectionTitles(AboutArr?.map((item) => item.section));
//   }, []);

//   useEffect(() => {
//     if (activeTitle) {
//       const subSectionArr = AboutArr?.find(
//         (item) => item.section === activeTitle
//       );
//       setSubSectionTitles(subSectionArr?.SectionItems);
//     }
//   }, [activeTitle]);

//   useEffect(() => {
//     if (activeTitle === "Leadership") {
//       setFoundLeader(
//         subSectionTitles.find((eachSec) => eachSec.name === activeSubTitle)
//       );
//     }
//   }, [activeSubTitle]);

//   return (
//     <div className="about-drop-down-container">
//       <div className="about-dd-main-title-container">
//         {AboutArr?.map((eachTitle, i) => (
//           <div
//             key={i}
//             onMouseEnter={() => setActiveTitle(eachTitle.section)}
//             className={`about-dd-main-title ${
//               eachTitle.section === activeTitle
//                 ? "about-dd-main-title-active"
//                 : ""
//             }`}
//             onClick={() => {
//               navigate(`/${eachTitle.path}`);
//               handleClose();
//             }}
//           >
//             <span>{eachTitle.section}</span>
//             {eachTitle.section === activeTitle && (
//               <img src={Star} alt="" style={{ width: "18px", marginLeft: "1rem" }} />
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="about-dd-sub-title-container">
//         <div className="about-dd-su-title-dot-container">
//           <div>
//             {subSectionTitles?.map((eachItem, i) => (
//               <div
//                 key={i}
//                 className={`about-dd-sub-title-dot ${
//                   eachItem.name === activeSubTitle
//                     ? "about-dd-sub-title-dot-active"
//                     : ""
//                 }`}
//               ></div>
//             ))}
//           </div>
//         </div>
//         <div className="about-dd-sub-title-holder">
//           {subSectionTitles?.map((eachItem, i) => {
//             const subtitleKey = eachItem.name.split(" ").join("-");
//             return (
//               <div
//                 key={i}
//                 onMouseEnter={() => setActiveSubTitle(eachItem.name)}
//                 className={`about-dd-main-title ${
//                   eachItem.name === activeSubTitle
//                     ? "about-dd-main-title-active"
//                     : ""
//                 }`}
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                   if (activeTitle === "Leadership") {
//                     // navigate(`/about/leader/${subtitleKey}`);
//                     //  navigate(`/about/leader/${foundLeader?.name.split(" ").join("-")}`);
//                   } else {
//                     navigate(`/about/${subtitleKey}`);
//                   }
//                   handleClose();
//                 }}
//               >
//                 <span>{eachItem.name}</span>
//                 {eachItem.name === activeSubTitle && (
//                   <img src={Star} alt="" style={{ width: "18px", marginLeft: "1rem" }} />
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       {activeSubTitle && (
//         <div className="about-dd-info-section">
//           {activeTitle === "Leadership" ? (
//             <div>
//               <div className="about-dd-founder-info-container">
//                 <div>
//                   <img src={foundLeader?.imageUrl} alt="" />
//                 </div>
//                 <p style={{ width: "50%" }}>
//                   <p className="about-dd-founder-info-des">
//                     {foundLeader?.description}
//                   </p>
//                 </p>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "end",
//                   color: "#0047ff",
//                   fontFamily: "EuclidMedium",
//                   padding: "1rem 0rem",
//                 }}
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                   navigate(`/about/leader/${foundLeader?.name.split(" ").join("-")}`);
//                   handleClose();
//                 }}
//               >
//                 Read More
//               </div>
//             </div>
//           ) : (
//             <div className="about-dd-info-cotain">
//               <img src={PlcImg} alt="" />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AboutDropDown;

import React, { useEffect, useState } from "react";
import "../styles/AboutDropdown.css";
import { useNavigate } from "react-router-dom";
import PlcImg from "../assets/abt-dd-logo.png";
import Star from "../assets/loadingStar.svg";
import data from "../Data/About.json"; // Importing JSON data

function AboutDropDown({ handleClose }) {
  const navigate = useNavigate();
  const [Leaders, setLeaders] = useState(data.leaders);
  const AboutArr = data.aboutSections;

  const [sectionTitles, setSectionTitles] = useState([]);
  const [subSectionTitles, setSubSectionTitles] = useState([]);
  const [foundLeader, setFoundLeader] = useState();
  const [activeTitle, setActiveTitle] = useState();
  const [activeSubTitle, setActiveSubTitle] = useState();

  // Set main section titles
  useEffect(() => {
    setSectionTitles(AboutArr?.map((item) => item.section));
  }, []);

  // Update subsection titles when activeTitle changes
  useEffect(() => {
    if (activeTitle) {
      const subSectionArr = AboutArr?.find(
        (item) => item.section === activeTitle
      );
      setSubSectionTitles(subSectionArr?.SectionItems);
    }
  }, [activeTitle]);

  useEffect(() => {
    if (AboutArr.length > 0) {
      const firstSection = AboutArr[0];
      setActiveTitle(firstSection.section);
      // setActiveSubTitle(firstSection.SectionItems);

      if (firstSection.SectionItems?.length > 0) {
        const firstItem = firstSection.SectionItems[0];
        setActiveSubTitle(firstItem.name);

        if (firstSection.section === "LeaderShip") {
          setFoundLeader(firstItem);
        }
      }
    }
    document.body.classList.add("no-scroll");

    return ()=>{
      document.body.classList.remove("no-scroll");
    }
  }, []);

  // Update foundLeader when activeSubTitle changes (for Leadership section)
  useEffect(() => {
    if (activeTitle === "Leadership" && activeSubTitle) {
      setFoundLeader(
        subSectionTitles.find((eachSec) => eachSec.name === activeSubTitle)
      );
    }
  }, [activeSubTitle, subSectionTitles]);

  return (
    <div className="about-drop-down-container">
      {/* Main Section Titles */}
      <div className="about-dd-main-title-container">
        {AboutArr?.map((eachTitle, i) => (
          <div
            key={i}
            onMouseEnter={() => {
              setActiveTitle(eachTitle.section);
              // const subsections = eachTitle.section;
              const subsections = eachTitle.SectionItems;

              if (Array.isArray(subsections) && subsections?.length > 0) {
                setSubSectionTitles(subsections);
                const firstItem = subsections[0];
                setActiveSubTitle(firstItem.name);

                // setActiveSubTitle(subsections[0].name);
                if (eachTitle.section === "LeaderShip") {
                  setFoundLeader(firstItem);
                }
              } else {
                setSubSectionTitles([]);
                setActiveSubTitle(null);
                setFoundLeader(null)
              }
            }}
            className={`about-dd-main-title ${eachTitle.section === activeTitle
                ? "about-dd-main-title-active"
                : ""
              }`}
            onClick={() => {
              navigate(`/${eachTitle.path}`);
              handleClose();
            }}
          >
            <span>{eachTitle.section}</span>
            {/* {eachTitle.section === activeTitle && (
              <img
                src={Star}
                alt=""
                style={{ width: "18px", marginLeft: "1rem" }}
              />
            )} */}
          </div>
        ))}
      </div>

      {/* Subsection Titles */}
      <div className="about-dd-sub-title-container">
        <div className="about-dd-su-title-dot-container">
          <div>
            {subSectionTitles?.map((eachItem, i) => (
              <div
                key={i}
                className={`about-dd-sub-title-dot ${eachItem.name === activeSubTitle
                    ? "about-dd-sub-title-dot-active"
                    : ""
                  }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="about-dd-sub-title-holder">
          {subSectionTitles?.map((eachItem, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveSubTitle(eachItem.name)}
              className={`about-dd-main-title ${eachItem.name === activeSubTitle
                  ? "about-dd-main-title-active"
                  : ""
                }`}
              onClick={() => {
                window.scrollTo(0, 0);
                if (activeTitle === "Leadership") {
                  navigate(`/${foundLeader?.path}`);
                } else {
                  navigate(`/${eachItem.path}`);
                }
                handleClose();
              }}
            >
              <span>{eachItem.name}</span>
              {/* {eachItem.name === activeSubTitle && (
                <img
                  src={Star}
                  alt=""
                  style={{ width: "18px", marginLeft: "1rem" }}
                />
              )} */}
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      {activeSubTitle && (
        <div className="about-dd-info-section">
          {activeTitle === "Leadership" ? (
            <div>
              <div className="about-dd-founder-info-container">
                <div>
                  <img src={foundLeader?.imageUrl} alt="" onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(`/${foundLeader?.path}`);
                    handleClose();
                  }} />
                </div>
                <p style={{ width: "50%" }}>
                  <p className="about-dd-founder-info-des">
                    {foundLeader?.description}
                  </p>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  color: "#0047ff",
                  fontFamily: "EuclidMedium",
                  padding: "1rem 0rem",
                  cursor: "pointer"
                }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/${foundLeader?.path}`);
                  handleClose();
                }}
              >
                Read More
              </div>
            </div>
          ) : (
            <div className="about-dd-info-cotain">
              <img src={PlcImg} alt="" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AboutDropDown;
