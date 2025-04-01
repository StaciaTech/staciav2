import React from "react";
import "../../styles/HomeCaseStudy.css";
import case1 from "../../assets/case1.png";
import case2 from "../../assets/case2.png";
import case3 from "../../assets/case3.png";
import case4 from "../../assets/case4.png";


import { useNavigate } from "react-router-dom";
import { FaChevronRight} from "react-icons/fa";






export default function HomeCaseStudy() {

  
const data = [
  {
    id: "Case Study-1",
    title: "Chili Ladling Machine-1",
    description: "Analysis of electronics case study.",
    image: { imageUrl: "/assets/caseStudy-1.webp" },
    category: "Electronics",
  },
  {
    id: "Case Study-2",
    title: "Chili Ladling Machine-2",
    description: "Analysis of mechanical case study.",
    image: { imageUrl: "/assets/caseStudy-2.webp" },
    category: "Mechanical",
  },
  {
    id: "Case Study-3",

    title: "Chili Ladling Machine-3",
    description: "Analysis of mechanical case study.",
    image: { imageUrl: "/assets/caseStudy-3.webp" },
    category: "IT",
  },
];


  const navigateTo = useNavigate();
  const navigate = useNavigate();
  return (
    <div className="home-case-study">
      <div className="home-case-study2">
        <div className="case-study-title">Case Study</div>
        {/* <div className="case-study-image-box">
            <div className="image-box row-span"></div>
            <div className="image-box"></div>
            <div className="image-box"></div>
            <div className="image-box col-span"></div>
        </div> */}

        <div className="image-box-full1">
          <div className="image-box-left">
            <img
              src={case1}
              alt=""
              onClick={() => {
                navigate(
                  `/case-study/single-caseStudy/Case-Study-1
                    `
                );
                window.scrollTo(0, 0);
              }}
            />
          </div>
          <div className="image-box-right">
            <div className="image-box">
              <img
                src={case2}
                alt=""
                onClick={() => {
                  navigate(
                    `/case-study/single-caseStudy/Case-Study-1
                    `
                  );
                  window.scrollTo(0, 0);
                }}
              />
            </div>
            <div className="image-box">
              <img
                src={case3}
                alt=""
                onClick={() => {
                  navigate(`case-study/single-caseStudy/Case-Study-2`);
                  window.scrollTo(0, 0);
                }}
              />
            </div>
            <div className="image-box case-col-span">
              <img
                src={case4}
                alt=""
                onClick={() => {
                  navigate(`case-study/single-caseStudy/Case-Study-3`);
                  window.scrollTo(0, 0);
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="more-case"
          onClick={() => {
            navigateTo("/case-study");
            window.scrollTo(0, 0);
          }}
          style={{ cursor: "pointer" }}
        >
          More Case Studys{""}
          <FaChevronRight style={{ verticalAlign: "middle" }} />
        </div>

        <div
          className="more-case-mobile"
          onClick={() => {
            navigateTo("/case-study");
            window.scrollTo(0, 0);
          }}
          style={{ cursor: "pointer" }}
        >
          More Case Studys{""}
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
}
