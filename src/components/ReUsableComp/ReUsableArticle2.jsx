// import React, { useState } from "react";
// import "../../styles/ReUsableArticle.css";
// import { IoIosArrowForward } from "react-icons/io";
// import CustomCursor from "../CustomCursor";

// function ReUsableArticle2({ data, path, onProjectClick }) {
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

// export default ReUsableArticle2;



// import React, { useState } from "react";
// import "../../styles/ReUsableArticle.css";
// import { IoIosArrowForward } from "react-icons/io";
// import CustomCursor from "../CustomCursor";

// function ReUsableArticle2({ data, path, onProjectClick }) {
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
//     } else {
//       console.warn("onProjectClick prop is not provided, using fallback navigation");
//       const caseStudyTrackId = formatUrlString(item.id);
//       const articleTrackTitle = formatUrlString(item.title) || formatUrlString(item.mainTitle);
//       const category = formatUrlString(item.category || "default-category");
//       const formattedUrl = `${path}/${category}/${caseStudyTrackId || articleTrackTitle}`;
//       console.log(`Fallback navigation to: ${formattedUrl}`);
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
//               // className="reusable-art-card"
//               className="service-card"
//               style={{ cursor: "none" }}
//               onClick={() => {
//                 handleClick(eachItem)
//                 window.scrollTo(0, 0)
//               }}

//             >
//               <div
//                 // className="reusable-art-img-container"
//                 className="service-card-img-box"

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
//                     objectFit: "contain",
//                     borderRadius: "1rem",
//                   }}
//                 />
//               </div>
//               {/* <div className="reusable-art-content-container">
//                 <div className="reusable-art-title test-seclection-blue"> */}
//               <div className="service-content-box">
//                 <div className="feature-title">
//                   {eachItem.mainTitle || eachItem.title || "Untitled"}
//                 </div>
//                 {/* <p className="reusable-art-des test-seclection-blue">
//                   {eachItem.mainDesc || eachItem.description || "No description"}
//                 </p> */}
//                   <div className="feature-para">
//                              {eachItem.mainDesc || eachItem.description || "No description"}
//                             </div>
//                 <div
//                   className="know-more "
//                   onClick={() => {
//                     handleClick(eachItem)
//                     window.scrollTo(0, 0)
//                   }}

//                 >
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

// export default ReUsableArticle2;




import React, { useState } from "react";
import "../../styles/ReUsableArticle.css";
import { IoIosArrowForward } from "react-icons/io";
import CustomCursor from "../CustomCursor";

function ReUsableArticle2({ data, path, onProjectClick }) {
  const [cursorVisible, setCursorVisible] = useState(false);

  const formatUrlString = (text) => {
    if (!text || typeof text !== "string") {
      console.warn("Invalid text input:", text);
      return "untitled";
    }
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .split(/\s+/)
      .join("-");
  };

  const handleClick = (item) => {
    if (onProjectClick) {
      onProjectClick(item);
      window.scrollTo(0, 0);
    } else {
      console.warn("onProjectClick not provided, using fallback navigation");
      const articleTrackTitle = formatUrlString(item.title);
      const category = formatUrlString(item.category || "default-category");
      const formattedUrl = `${path}/${category}/${articleTrackTitle}`;
      window.location.href = formattedUrl;
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="reusable-art-container">
      {data?.length > 0 ? (
        data.map((item, index) => (
          <article
            key={`${item.id}-${index}`}
            className="service-card"
            onClick={() => handleClick(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleClick(item)}
            aria-label={`View details for ${item.title}`}
          >
            <div
              className="service-card-img-box"
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
            >
              <CustomCursor isVisible={cursorVisible} text="Know more" />
              <img
                src={item.mainImageUrl || "/assets/fallback-image.jpg"}
                alt={item.title || "Project image"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
                loading="lazy"
              />
            </div>
            <div className="service-content-box">
              <h3 className="feature-title">{item.title || "Untitled"}</h3>
              <p className="feature-para">
                {item.mainDesc || item.description || "No description available"}
              </p>
              <div className="know-more">
                <span>Know More</span>
                <IoIosArrowForward aria-hidden="true" />
              </div>
            </div>
          </article>
        ))
      ) : (
        <p className="no-data-message">No projects available.</p>
      )}
    </div>
  );
}

export default ReUsableArticle2;