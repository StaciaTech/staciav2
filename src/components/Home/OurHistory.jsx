import React from 'react';
import '../../styles/Home/OurHistory.css'; // Use the same CSS file


const excavations = [
  {
    id: 1,
    title: "2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nuraghe_Losa_-_Abbasanta.jpg",
    position: "top",
    color: "purple",
  },
  {
    id: 2,
    title: "2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/El_Castillo_pyramid%2C_Chichen_Itza.jpg",
    position: "bottom",
    color: "black",
  },
  {
    id: 3,
    title: "2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Olmec_Head_No._1.jpg",
    position: "top",
    color: "purple",
  },
  {
    id: 4,
    title: "2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Great_Wall_of_China_July_2006.JPG",
    position: "bottom",
    color: "black",
  },
  {
    id: 5,
    title: "2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Great_Sphinx_of_Giza_-_20080716a.jpg",
    position: "top",
    color: "purple",
  },
  {
    id: 6,
    title: "2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Great_Sphinx_of_Giza_-_20080716a.jpg",
    position: "bottom",
    color: "black",
  },
  {
    id: 7,
    title: "2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Great_Sphinx_of_Giza_-_20080716a.jpg",
    position: "top",
    color: "purple",
  },
];

const OurHistoryTimeline = () => {
  return (
    <div className="timeline-section">
      <div className="timeline-container">
        {/* Curved Line */}
        <svg
          className="timeline-line"
          xmlns="http://www.w3.org/2000/svg"
          // viewBox="0 0 1040 200"
          viewBox="0 0 500 200"
        >
          <path
            // d="M20 100 Q 120 0 220 100 Q 320 200 420 100 Q 520 0 620 100 Q 720 200 820 100 Q 920 0 1020 100 Q 1120 200 1280 100 "
            // d="M20 100 Q 230 -90 300 100 Q 400 150 500 100 Q 600 50 700 100 Q 800 150 900 100 Q 1000 50 1100 100 Q 1200 150 1300 100 "
            d="M 0 10 Q 200 50 250 100 Q 350 150 450 100"
            fill="transparent"
            stroke="#9b87f5"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>

        {excavations.map((step) => (
          <div
            key={step.id}
            className={`timeline-step ${
              step.position === "bottom" ? "step-bottom" : "step-top"
            }`}
          >
            <div className="timeline-img">
              <img src={step.img} alt={step.title} />
            </div>
            <div className="timeline-text">
              <span
                className={`timeline-label ${
                  step.color === "purple" ? "label-purple" : "label-black"
                }`}
              >
                {step.title}
              </span>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurHistoryTimeline;
