// import React, { useState } from "react";
// import "../../styles/ReUsableArticle.css";
// import { IoIosArrowForward } from "react-icons/io";
// import { useNavigate } from "react-router-dom";

// import Template6 from "../../Templets/Template6";
// import CustomCursor from "../CustomCursor";

// function ReUsableArticlePage({ data, path }) {
//   const navigate = useNavigate();
//   const [cursorVisible, setCursorVisible] = useState(false);

//   console.log("data", data);
//   return (
//     <>
//       <div className="reusable-art-container">
//         {data?.map((eachItem, i) => (
//           <div key={i} className="reusable-art-card">
//             <div className="reusable-art-img-container"            
//             onMouseEnter={()=>setCursorVisible(true)}
//             onMouseLeave={()=>setCursorVisible(false)}
//             style={{cursor:"none"}}>

//               <CustomCursor
//               isVisible={cursorVisible}
//               text={"know more"}/>
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

//                       eachItem.title.split(" ").join("-") 

//                     }`
//                   );
//                   window.scrollTo(0, 0);
//                 }}
//               >
//                 {/* <Template6 data={data} path={path } /> */}
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

// export default ReUsableArticlePage;




import React, { useState } from "react";
import "../../styles/ReUsableArticle.css";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CustomCursor from "../CustomCursor";

function ReUsableArticlePage({ data, path }) {
  const navigate = useNavigate();
  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <div className="reusable-art-container">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((eachItem, i) => (
          <div key={i} className="reusable-art-card">
            <div
              className="reusable-art-img-container"
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              style={{ cursor: "none" }}
            >
              <CustomCursor isVisible={cursorVisible} text="know more" />
              <img
                src={
                  eachItem.mainImageUrl || eachItem.image?.imageUrl || "/default-image.jpg"
                }
                alt="article-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
                onClick={() => {
                  navigate(`${path}/${eachItem.title.split(" ").join("-")}`);
                  window.scrollTo(0, 0);
                }}
              />
            </div>

            <div className="reusable-art-content-container">
              <div className="reusable-art-title test-seclection-blue">
                {eachItem.title}
              </div>
              <p className="reusable-art-des test-seclection-blue">
                {eachItem.sections?.[0]?.content.slice(0, 100)}...
              </p>
              <div
                className="all-know-more"
                onClick={() => {
                  navigate(`${path}/${eachItem.title.split(" ").join("-")}`);
                  window.scrollTo(0, 0);
                }}
              >
                <span>Know More</span>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
}

export default ReUsableArticlePage;
