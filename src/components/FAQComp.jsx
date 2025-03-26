import React, { useState } from "react";
import "../styles/FAQ.css";
import Faqplus from "../assets/faqPlus.svg";
import Faqminus from "../assets/faqminus.svg";

const Ques = [
  {
    question: "What is our mission?",
    ans: "Our mission is to provide clear and helpful answers.",
  },
  {
    question: "How can I contact support?",
    ans: "You can contact support via email or phone.",
  },
  {
    question: "What services do we offer?",
    ans: "We offer a range of customer support and technical solutions.",
  },
  {
    question: "How does our service work?",
    ans: "Our service works seamlessly to cater to your needs.",
  },
];

function FAQComp() {
  const [showAns, setShowAns] = useState(null);

  const toggleAnswer = (index) => {
    setShowAns(showAns === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-info-container">
        <div>Your Questions, Answered Clearly</div>
        <p>Our FAQ section provides answers to your most common questions.</p>
      </div>
      <div className="faq-question-container">
        {Ques.map((eachItem, i) => (
          <div key={i} className="faq-question-holder">
            <div className="faq-question" onClick={() => toggleAnswer(i)}>
              <span>{eachItem.question}</span>
              <img
                src={showAns === i ? Faqminus : Faqplus}
                alt="Toggle Icon"
                className="faq-btn"
              />
            </div>
            <div className={`faq-answer ${showAns === i ? "visible" : ""}`}>
              <p>{eachItem.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQComp;
