import React from "react";
import OpenAccordion from "../../assets/Expand.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function WhatWeDoAccordion({
  title,
  desc,
  category,
  department,
  i,
  accordion,
  setAccordion,
}) {
  const navigate = useNavigate();
  const ProductKey = title.split(" ").join("-");
  return (
    <div className="what-we-do-accordion">
      <div
        className="what-we-accordion-top"
        onClick={() => {
          if (i === accordion) {
            setAccordion(null);
          } else {
            setAccordion(i);
          }
        }}
      >
        <div className="accordion-title">{title}</div>
        {i === accordion ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {accordion === i ? (
        <div className="accordion-para">
          <p>{desc}</p>
          <div
            className="know-more pointer"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/services/${department}/${category}/${ProductKey}`);
            }}
          >
             Read More
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
