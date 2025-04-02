import React from "react";
import "../../styles/Four.css";
import FourCard from "./FourCard";
import p1 from "../../assets/founder-sarabesh.png";
import p2 from "../../assets/founder-lakshman.png";
import p3 from "../../assets/revanth.png";
import p4 from "../../assets/prahalad.png";

const fourData = [
  {
    id: 1,
    pos: "Founder Partner, CEO",
    img: p1,
    name: "Mr Sarabesh",
    about: `Founder of Stacia Corp, Sastem Global, and Stacia Tech. Expert in mechanical engineering and data science, leading innovations in agriculture and smart homes. His "OneDril" machine revolutionized farming and earned government recognition.`,
    proId: "https://www.linkedin.com/in/sarabeshsriram/",
  },
  {
    id: 2,
    pos: "Founder Partner, COO",
    img: p2,
    name: "Mr Lakshman",
    about:
      "Founder of Stacia Corp and Director at SASTEM Global. Expert in mechanical engineering and business analytics. Leads AI-powered ERP solutions and innovative machinery development for food processing and agriculture sectors.",
    proId: "https://www.linkedin.com/in/lakshman-p-v-50522a168/",
  },
  {
    id: 3,
    pos: "Founder Partner, CTO",
    img: p3,
    name: "Mr Revanth",
    about:
      "Co-founder of Stacia Tech. Specializes in mechanical engineering, software development, and DevOps. Drives ERP systems and digital transformation in manufacturing with a focus on efficient, scalable solutions.",
    proId: "https://www.linkedin.com/in/revanth-s-36b2bb18a/",
  },
  {
    id: 4,
    pos: "US Regional Director",
    img: p4,
    name: "Prahlad Saravanapriyan",
    about:
      "Mentor and US Regional Director at StaciaCorp. Expert in robotics, semiconductor systems, and sustainable energy. Founder of FUTURE HQ, educating 1,100+ members on technology. DECA award-winner and Carnatic violinist.",
    proId: "https://www.linkedin.com/in/prahlad-s/",
  },
];

export default function Four( data, path) {
  return (
    <div className="four">
      <div className="four2">
        <div className="four-text test-seclection-blue">Management Team</div>
        <div className="four-grid">
          {fourData.map((data, i) => (
            <FourCard data={data} 
            path={"about/leader"}
            key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
