import React from 'react';
import '../../styles/Home/OurHistory.css'; // Use the same CSS file
import { red } from '@mui/material/colors';
import image from "../../assets/StaciaFavicon.svg";


// const excavations = [
//   {
//     id: 1,
//     title: "2019",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nuraghe_Losa_-_Abbasanta.jpg",
//     position: "top",
//     color: "purple",
//   },
//   {
//     id: 2,
//     title: "2020",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/El_Castillo_pyramid%2C_Chichen_Itza.jpg",
//     position: "bottom",
//     color: "black",
//   },
//   {
//     id: 3,
//     title: "2021",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Olmec_Head_No._1.jpg",
//     position: "top",
//     color: "purple",
//   },
//   {
//     id: 4,
//     title: "2022",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Great_Wall_of_China_July_2006.JPG",
//     position: "bottom",
//     color: "black",
//   },
//   {
//     id: 5,
//     title: "2023",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Great_Sphinx_of_Giza_-_20080716a.jpg",
//     position: "top",
//     color: "purple",
//   },
//   {
//     id: 6,
//     title: "2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Great_Sphinx_of_Giza_-_20080716a.jpg",
//     position: "bottom",
//     color: "black",
//   },
//   {
//     id: 7,
//     title: "2025",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id sem quis accumsan suscipit. Sed tempus placerat velit a placerat.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Great_Sphinx_of_Giza_-_20080716a.jpg",
//     position: "top",
//     color: "purple",
//   },
// ];

const excavations = [
  {
    id: 1,
    title: "SEPT 2019",
    description:
      "STACIA CORP REGISTERED AS PARTNERSHIP FIRM. Stacia Corp was officially registered as a partnership firm, marking the beginning of its journey as an innovation-driven company committed to solving complex challenges across sectors with research-based solutions.",
    img: image, // Placeholder for a foundational milestone image
    position: "top",
    color: "purple",
  },
  {
    id: 2,
    title: "MAY 2020",
    description:
      "COMMENCEMENT OF OPERATIONS, FIRST CLIENT & ONEDRIL INNOVATION. Operations commenced with Aachi Masala as the first client. OneDril, a revolutionary seed sowing machine, was conceptualized. Stacia was recognized as an official startup by Startup India.",
    img: image, position: "bottom",
    color: "black",
  },
  {
    id: 3,
    title: "AUG 2021",
    description:
      "ONEDRIL NAMED AMONG TOP 50 INNOVATIONS IN INDIA. OneDril gained national recognition, listed among the top 10 innovations of India. This milestone validated Stacia's R&D strength and its impact on the agriculture sector through mechanization.",
    img: image, position: "top",
    color: "purple",
  },
  {
    id: 4,
    title: "FEB 2023",
    description:
      "EXPANSION INTO ELECTRONICS, SOFTWARE & 150+ PROJECTS. Stacia expanded into electronics division through Stacia Global and Application Development through Stacia Tech. The team crossed 150+ successful projects, strengthening its presence across Agriculture, Energy, Food, Manufacturing, and sustainability.",
    img: image, position: "bottom",
    color: "black",
  },
  {
    id: 5,
    title: "MAR 2024",
    description:
      "FOUNDERS AWARDED OF THE YEAR BY UNION MINISTER. Stacia founders received the Entrepreneur of the Year Award from Shri Nitin Gadkari, Union Minister, recognizing their leadership in pioneering sustainable innovations and driving national growth through deep tech.",
    img: image, position: "top",
    color: "purple",
  },
  {
    id: 6,
    title: "JAN 2025",
    description:
      "ENTRY INTO AI WITH STELLAR LABS & 200+ PROJECTS. Stacia launched Stellar labs, its AI research division. With over 200+ projects completed, the company now serves Agriculture, Energy, Food, Manufacturing, and Automotive sectors with cutting-edge innovation.",
    img: image, position: "bottom",
    color: "black",
  },
];

const OurHistoryTimeline = () => {
  return (
    <div className="timeline-section">
      <div className="timeline-container">
        {/* Curved Line */}
        {/* <svg
          className="timeline-line"
          xmlns="http://www.w3.org/2000/svg"
          // viewBox="0 0 1040 200"
          viewBox="0 0 500 200"
        >
          <path
            // d="M20 100 Q 120 0 220 100 Q 320 200 420 100 Q 520 0 620 100 Q 720 200 820 100 Q 920 0 1020 100 Q 1120 200 1280 100 "
            // d="M20 100 Q 230 -90 300 100 Q 400 150 500 100 Q 600 50 700 100 Q 800 150 900 100 Q 1000 50 1100 100 Q 1200 150 1300 100 "
            d="M 0 10 Q 200 50 250 100 Q 350 150 500 0"
            fill="transparent"
            stroke="#9b87f5"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg> */}

        {excavations.map((step) => (
          <div
            key={step.id}
            className={`timeline-step visible ${step.position === "bottom" ? "step-bottom" : "step-top"
              }`}
          >
            <div className="timeline-img">
              <img src={step.img} alt={step.title} />
            </div>
            {/* <div className='timeline-line'></div> */}
            <div className="timeline-text">
              <span
                className={`timeline-label ${step.color === "purple" ? "label-purple" : "label-black"
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
