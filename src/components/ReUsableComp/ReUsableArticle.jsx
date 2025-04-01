import React from "react";
import "../../styles/ReUsableArticle.css";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function ReUsableArticle({ data, path }) {
  const navigate = useNavigate();

  // Ensure input is always a string
  const formatUrlString = (text) => {
    if (!text || typeof text !== "string") {
      console.error("Invalid text input:", text); // Debugging log
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
          <div key={i} className="reusable-art-card">
            <div className="reusable-art-img-container">
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
              <div
                className="all-know-more"
                onClick={() => {
                  const formattedUrl = `${path}/${caseStudyTrackId || articleTrackTitle}`;
                  navigate(formattedUrl);
                  window.scrollTo(0, 0);
                }}
              >
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




// import React from "react";
// import "../../styles/ReUsableArticle.css";
// import { IoIosArrowForward } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// function ReUsableArticle({ data, path }) {
//   const navigate = useNavigate();
//   // Function to format URL-friendly strings
//   const formatUrlString = (text) => (text ? text.split(" ").join("-") : "");
//   return (
//     <div className="reusable-art-container">
//       {data?.map((eachItem, i) => {
//         const caseStudyTrackId = formatUrlString(eachItem.id);
//         const articleTrackTitle =
//           formatUrlString(eachItem.title) || formatUrlString(eachItem.mainTitle);
//         return (
//           <div key={i} className="reusable-art-card">
//             <div className="reusable-art-img-container">
//               <img
//                 src={eachItem.mainImageUrl || eachItem.image?.imageUrl}
//                 alt="art-img"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   borderRadius: "1rem",
//                 }}
//               />
//             </div>
//             <div className="reusable-art-content-container">
//               <div className="reusable-art-title test-seclection-blue">
//                 {eachItem.mainTitle || eachItem.title}
//               </div>
//               <p className="reusable-art-des test-seclection-blue">
//                 {eachItem.mainDesc || eachItem.description}
//               </p>
//               <div
//                 className="all-know-more"
//                 onClick={() => {
//                   const formattedUrl = `${path}/${caseStudyTrackId || articleTrackTitle}`;
//                   navigate(formattedUrl);
//                   window.scrollTo(0, 0);
//                 }}
//               >
//                 <span>Know More</span>
//                 <IoIosArrowForward />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// export default ReUsableArticle;










// import React from "react";
// import "../../styles/ReUsableArticle.css";
// import { IoIosArrowForward } from "react-icons/io";
// import { useNavigate } from "react-router-dom";

// function ReUsableArticle({ data, path }) {
//   const navigate = useNavigate();
//   console.log("data", data);
//   return (
//     <>
//       <div className="reusable-art-container">
//         {data?.map((eachItem, i) => (
//           <div key={i} className="reusable-art-card">
//             <div className="reusable-art-img-container">
//               <img
//                 src={eachItem.mainImageUrl || eachItem.image.imageUrl}
//                 alt="art-img"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   borderRadius: "1rem",
//                 }}
//               />
//             </div>
//             <div className="reusable-art-content-container">
//               <div className="reusable-art-title test-seclection-blue">
//                 {eachItem.mainTitle || eachItem.title}
//               </div>
//               <p className="reusable-art-des test-seclection-blue">
//                 {eachItem.mainDesc || eachItem.description}
//               </p>
//               <div
//                 className="all-know-more"
//                 onClick={() => {
//                   navigate(
//                     `${path}/${
//                       // eachItem.id.split(" ").join("-") ||  //caseStudy- id track

//                       // article page
//                       eachItem.title.split(" ").join("-") ||
//                       eachItem.mainTitle.split(" ").join("-")
//                     }`
//                   );
//                   window.scrollTo(0, 0);
//                 }}
//               >
//                 <span>Know More</span>
//                 <IoIosArrowForward />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default ReUsableArticle;



// for know more blue circle---

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../styles/ReUsableArticle.css";

// function ReUsableArticle({ data, path }) {
//   const navigate = useNavigate();
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e, index) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setPosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//     setActiveIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setActiveIndex(null);
//   };

//   return (
//     <div className="reusable-art-container">
//       {data?.map((eachItem, i) => (
//         <div key={i} className="reusable-art-card">
//           <div
//             className="reusable-art-img-container"
//             onMouseMove={(e) => handleMouseMove(e, i)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <img
//               src={eachItem.mainImageUrl || eachItem.image?.imageUrl}
//               alt="art-img"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 borderRadius: "1rem",
//               }}
//             />
//             {activeIndex === i && (
//               <div
//                 className="all-know-more"
//                 style={{
//                   left: `${position.x}px`,
//                   top: `${position.y}px`,
//                   transform: "translate(-50%, -50%)",
//                 }}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   console.log("Know More Circle Clicked!");
//                   navigate(
//                     `${path}/${
//                       eachItem.id?.replace(/\s+/g, "-") ||
//                       eachItem.mainTitle?.replace(/\s+/g, "-")
//                     }`
//                   );
//                   window.scrollTo(0, 0);
//                 }}
//               >
//                 Know more
//               </div>
//             )}
//           </div>
//           <div className="reusable-art-content-container">
//             <div className="reusable-art-title test-seclection-blue">
//               {eachItem.mainTitle || eachItem.title}
//             </div>
//             <p className="reusable-art-des test-seclection-blue">
//               {eachItem.mainDesc || eachItem.description}
//             </p>
//             <div
//               className="all-know-more"
//               onClick={() => {
//                 navigate(
//                   `${path}/${
//                     eachItem.id?.replace(/\s+/g, "-") ||
//                     eachItem.mainTitle?.replace(/\s+/g, "-")
//                   }`
//                 );
//                 window.scrollTo(0, 0);
//               }}
//             >
//               Know More
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ReUsableArticle;

