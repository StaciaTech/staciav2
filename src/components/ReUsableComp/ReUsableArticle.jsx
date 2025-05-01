import React, { useState } from "react";
import "../../styles/ReUsableArticle.css";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CustomCursor from "../CustomCursor";

function ReUsableArticle({ data, path }) {
  const navigate = useNavigate();
  const [cursorVisible, setCursorVisible] = useState(false);
  
  // Ensure input is always a string
  const formatUrlString = (text) => {
    if (!text || typeof text !== "string") {
      console.error("Invalid text input:", text); 
      return "";
    }
    return text.split(" ").join("-");
  };

  return (
    <div className="reusable-art-container">
      {data?.map((eachItem, i) => {
        const caseStudyTrackId = formatUrlString(eachItem.id);
        const articleTrackTitle =
          formatUrlString(eachItem.title) || formatUrlString(eachItem.mainTitle);

        return (
          <div key={i} className="reusable-art-card" style={{cursor:"none"}}
          onClick={() => {
            const formattedUrl = `${path}/${caseStudyTrackId || articleTrackTitle}`;
            navigate(formattedUrl);
            window.scrollTo(0, 0);
          }}>
            <div className="reusable-art-img-container" 
            onMouseEnter={()=>setCursorVisible(true)}
            onMouseLeave={()=>setCursorVisible(false)}
            >
              <CustomCursor
                 isVisible={cursorVisible}
                 text={"Know more"}
              />
              <img             
                src={eachItem.mainImageUrl || eachItem.image?.imageUrl}
                alt="art-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "1rem",
                  
                }}
              />
            </div>
            <div className="reusable-art-content-container">
              <div className="reusable-art-title test-seclection-blue">
                {eachItem.mainTitle || eachItem.title}
              </div>
              <p className="reusable-art-des test-seclection-blue">
                {eachItem.mainDesc || eachItem.description}
              </p>
              <div className="all-know-more" >    
              
                <span>Know More</span>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReUsableArticle;


// 1st solution

// import React, { useState } from "react";
// import "../../styles/ReUsableArticle.css";
// import { IoIosArrowForward } from "react-icons/io";
// import CustomCursor from "../CustomCursor";

// function ReUsableArticle({ data, path, onProjectClick }) {
//   const [cursorVisible, setCursorVisible] = useState(false);

//   // Ensure input is always a string
//   const formatUrlString = (text) => {
//     if (!text || typeof text !== "string") {
//       console.error("Invalid text input:", text); // Debugging log
//       return "";
//     }
//     return text
//       .toLowerCase()
//       .split(" ")
//       .join("-")
//       .replace(/[^a-z0-9-]/g, ""); // Sanitize further for URL safety
//   };

//   const handleClick = (item) => {
//     if (onProjectClick) {
//       onProjectClick(item); // Delegate navigation to the parent component
//       window.scrollTo(0, 0); // Scroll to top after navigation
//     } else {
//       console.warn("onProjectClick prop is not provided");
//       // Fallback navigation if onProjectClick is not available
//       const caseStudyTrackId = formatUrlString(item.id);
//       const articleTrackTitle = formatUrlString(item.title) || formatUrlString(item.mainTitle);
//       const formattedUrl = `${path}/${caseStudyTrackId || articleTrackTitle}`;
//       window.location.href = formattedUrl; // Fallback to direct URL change
//       window.scrollTo(0, 0);
//     }
//   };

//   return (
//     <div className="reusable-art-container">
//       {data?.length > 0 ? (
//         data.map((eachItem, i) => {
//           const caseStudyTrackId = formatUrlString(eachItem.id);
//           const articleTrackTitle =
//             formatUrlString(eachItem.title) || formatUrlString(eachItem.mainTitle);

//           return (
//             <div
//               key={i}
//               className="reusable-art-card"
//               style={{ cursor: "none" }}
//               onClick={() => handleClick(eachItem)}
//             >
//               <div
//                 className="reusable-art-img-container"
//                 onMouseEnter={() => setCursorVisible(true)}
//                 onMouseLeave={() => setCursorVisible(false)}
//               >
//                 <CustomCursor isVisible={cursorVisible} text={"Know more"} />
//                 <img
//                   src={
//                     eachItem.mainImageUrl ||
//                     eachItem.image?.imageUrl ||
//                     "default-image-url.jpg" // Fallback image
//                   }
//                   alt={eachItem.mainTitle || eachItem.title || "Project image"}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     borderRadius: "1rem",
//                   }}
//                 />
//               </div>
//               <div className="reusable-art-content-container">
//                 <div className="reusable-art-title test-seclection-blue">
//                   {eachItem.mainTitle || eachItem.title || "Untitled"}
//                 </div>
//                 <p className="reusable-art-des test-seclection-blue">
//                   {eachItem.mainDesc || eachItem.description || "No description"}
//                 </p>
//                 <div className="all-know-more">
//                   <span>Know More</span>
//                   <IoIosArrowForward />
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p className="no-data-message">No projects available.</p>
//       )}
//     </div>
//   );
// }

// export default ReUsableArticle;



// import React, { useState } from "react";
// import "../../styles/ReUsableArticle.css";
// import { IoIosArrowForward } from "react-icons/io";
// import CustomCursor from "../CustomCursor";

// function ReUsableArticle({ data, path, onProjectClick }) {
//   const [cursorVisible, setCursorVisible] = useState(false);

//   // Ensure input is always a string
//   const formatUrlString = (text) => {
//     if (!text || typeof text !== "string") {
//       console.error("Invalid text input:", text);
//       return "";
//     }
//     return text
//       .toLowerCase()
//       .split(" ")
//       .join("-")
//       .replace(/[^a-z0-9-]/g, "");
//   };

//   const handleClick = (item) => {
//     if (onProjectClick) {
//       onProjectClick(item);
//       window.scrollTo(0, 0);
//     } else {
//       console.warn("onProjectClick prop is not provided");
//       const caseStudyTrackId = formatUrlString(item.id);
//       const articleTrackTitle = formatUrlString(item.title) || formatUrlString(item.mainTitle);
//       const formattedUrl = `${path}/${caseStudyTrackId || articleTrackTitle}`;
//       window.location.href = formattedUrl;
//       window.scrollTo(0, 0);
//     }
//   };

//   return (
//     <div className="reusable-art-container">
//       {data?.length > 0 ? (
//         data.map((eachItem, i) => {
//           const caseStudyTrackId = formatUrlString(eachItem.id);
//           const articleTrackTitle =
//             formatUrlString(eachItem.title) || formatUrlString(eachItem.mainTitle);

//           return (
//             <div
//               key={i}
//               className="reusable-art-card"
//               style={{ cursor: "none" }}
//               onClick={() => handleClick(eachItem)}
//             >
//               <div
//                 className="reusable-art-img-container"
//                 onMouseEnter={() => setCursorVisible(true)}
//                 onMouseLeave={() => setCursorVisible(false)}
//               >
//                 <CustomCursor isVisible={cursorVisible} text={"Know more"} />
//                 <img
//                   src={
//                     eachItem.mainImageUrl ||
//                     eachItem.image?.imageUrl ||
//                     "default-image-url.jpg"
//                   }
//                   alt={eachItem.mainTitle || eachItem.title || "Project image"}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     borderRadius: "1rem",
//                   }}
//                 />
//               </div>
//               <div className="reusable-art-content-container">
//                 <div className="reusable-art-title test-seclection-blue">
//                   {eachItem.mainTitle || eachItem.title || "Untitled"}
//                 </div>
//                 <p className="reusable-art-des test-seclection-blue">
//                   {eachItem.mainDesc || eachItem.description || "No description"}
//                 </p>
//                 <div className="all-know-more">
//                   <span>Know More</span>
//                   <IoIosArrowForward />
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p className="no-data-message">No projects available.</p>
//       )}
//     </div>
//   );
// }

// export default ReUsableArticle;