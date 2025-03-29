import React from "react";
import "../../styles/ReUsableArticle.css";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function ReUsableArticle({ data, path }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="reusable-art-container">
        {data?.map((eachItem, i) => (
          <div key={i} className="reusable-art-card">
            <div className="reusable-art-img-container">
              <img
                src={eachItem.mainImageUrl || eachItem.image.imageUrl}
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
                  navigate(
                    `${path}/${
                      eachItem.title.split(" ").join("-") ||
                      eachItem.mainTitle.split(" ").join("-")
                    }`
                  );
                  window.scrollTo(0, 0);
                }}
              >
                <span>Know More</span>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ReUsableArticle;
