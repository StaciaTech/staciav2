import React, { useEffect, useState } from "react";
import "../styles/EventForm.css";

const FormQuestion = [
  {
    questionType: "Basic Questions",
    questionList: [
      {
        question: "Name",
        type: "text",
        placeholder: "Enter Your Name",
      },
      {
        question: "Phone Number",
        type: "text",
        placeholder: "Enter Your Number",
      },
    ],
  },
  {
    questionType: "Basic Questions",
    questionList: [
      {
        question: "Email",
        type: "text",
        placeholder: "Enter Your Email",
      },
      {
        question: "Location",
        type: "text",
        placeholder: "Enter Your Name",
      },
    ],
  },
];

function EventForm({ eventTitle, closeForm }) {
  const [formStep, setFormStep] = useState(0);
  const [progressWidth, setProgressWidth] = useState("");

  useEffect(() => {
    setProgressWidth(((formStep + 1) / FormQuestion.length) * 100);
  }, [formStep, FormQuestion]);

  return (
    <div className="eventform-container">
      <div className="event-form-que-container">
        <div className="event-form-title">{eventTitle}</div>
        <p className="event-form-des">
          Please Enter The Required Details Given Below
        </p>
        <div className="event-form-progress-container">
          <div className="event-form-progress-background">
            <div
              className="event-form-progress"
              style={{
                width: `${progressWidth}%`,
              }}
            ></div>
          </div>
          <div>100%</div>
        </div>
        <div className="event-form-question-heading">Question</div>
        <div className="event-form-fields-container">
          {FormQuestion[formStep]?.questionList.map((eachQues, i) => {
            return (
              <div key={i}>
                <div className="event-form-question">{eachQues.question}</div>
                <div>
                  {eachQues.type === "text" && (
                    <input
                      type="text"
                      placeholder={eachQues.placeholder}
                      className="event-form-input-field"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="eventform-btn-container">
        <div>
          <button
            onClick={() => {
              if (formStep !== 0) {
                setFormStep(formStep - 1);
              } else {
                setFormStep(0);
                closeForm();
              }
            }}
            className="event-form-close-btn"
          >
            {formStep === 0 ? "Close" : "Back"}
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              if (formStep < FormQuestion.length - 1) {
                setFormStep(formStep + 1);
              } else {
                // alert("Form Submitted");
                setFormStep(0);
                closeForm();
              }
            }}
            className="event-form-next-btn"
          >
            {formStep === FormQuestion.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventForm;
