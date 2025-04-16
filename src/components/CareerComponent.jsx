import React from "react";
import ExpIcon from "../assets/expIcon.svg";
import PayIcon from "../assets/payIcon.svg";
import ClockIcon from "../assets/clockIcon.svg";
import LocIcon from "../assets/locIcon.svg";
import ModeIcon from "../assets/ModeIcon.svg";
import ArrowUp from "../assets/arrowUP.svg";
import ArrowDown from "../assets/arrowDown.svg";
import { IoIosArrowForward } from "react-icons/io";

function CareerComponent({
  data,
  showApplication,
  setShowApplication,
  i,
  showMore,
  toggleShowMore,
}) {
  console.log(data);

  return (
    <div className="opportunities-container pointer">
      {/* <div> */}
      <div
        className="opportunity-items"
        onClick={() => {
          toggleShowMore(i);
        }}
      >
        <div className="opportunity-titles test-seclection-blue">
          {data.title}
        </div>
        <div className="job-arrow">
          <img src={showMore === i ? ArrowUp : ArrowDown} alt="" />
        </div>
      </div>
      {showMore === i && (
        <div>
          <div className="careers-exp">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={ExpIcon} alt="" style={{ userSelect: "none" }} />
              <span className="job-details test-seclection-blue">
                {data.experience} 
              </span>
            </div>
            <div className="career-seperator" />
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={PayIcon} alt="" style={{ userSelect: "none" }} />
              <span className="job-details test-seclection-blue">
                {data.qualification}
              </span>
            </div>
            <div className="career-seperator" />
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={ClockIcon} alt="" style={{ userSelect: "none" }} />
              <span className="job-details test-seclection-blue">
                {data.jobType}
              </span>
            </div>
            <div className="career-seperator" />
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={LocIcon} alt="" style={{ userSelect: "none" }} />
              <span className="job-details test-seclection-blue">Chennai</span>
            </div>
            <div className="career-seperator" />
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={ModeIcon} alt="" style={{ userSelect: "none" }} />
              <span className="job-details test-seclection-blue">
                {data.natureOfJob}
              </span>
            </div>
            {/* <div className="career-seperator" /> */}
            {/* <div style={{ display: "flex", alignItems: "center" }}>
              <img src={PayIcon} alt="" />
              <span className="job-details">{data.qualification}</span>
            </div> */}
          </div>
          <div className="job-description test-seclection-blue">
            {data.description}
          </div>
          <div className="responsibility-title test-seclection-blue">
            Qualification
          </div>
          <li className="responsibility-list test-seclection-blue">
            {data.qualification}
          </li>
          <div className="responsibility-title test-seclection-blue">
            Responsibilities
          </div>
          <>
            {data.responsibilities.map((element, index) => {
              return (
                <li
                  key={index}
                  className="responsibility-list test-seclection-blue"
                >
                  {element}
                </li>
              );
            })}
          </>
          {/* <div className="responsibility-title">Key Responsibilities</div>
          <>
            {data.responsibilities.map((element, index) => {
              return (
                <li key={index} className="responsibility-list">
                  {element}
                </li>
              );
            })}
          </> */}
          <div className="responsibility-title test-seclection-blue">
            Required Skills and Qualifications
          </div>
          <>
            {data.requiredSkills.map((element, index) => {
              return (
                <li
                  key={index}
                  className="responsibility-list test-seclection-blue"
                >
                  {element}
                </li>
              );
            })}
          </>
          <div className="responsibility-title test-seclection-blue">
            Preferred Skills
          </div>
          <>
            {data.preferredSkills.map((element, index) => {
              return (
                <li
                  key={index}
                  className="responsibility-list test-seclection-blue"
                >
                  {element}
                </li>
              );
            })}
          </>
          <div className="responsibility-title test-seclection-blue">
            Required Tools Experience
          </div>
          <>
            {data.requiredTools.map((element, index) => {
              return (
                <li
                  key={index}
                  className="responsibility-list test-seclection-blue"
                >
                  {element}
                </li>
              );
            })}
          </>
          <div
            className="career-apply"
            onClick={() => {
              setShowApplication(true);
            }}
          >
            Apply Now
          </div>
        </div>
      )}
      <div className="line-style" />
      {/* </div> */}
    </div>
  );
}

export default CareerComponent;
