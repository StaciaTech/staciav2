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
