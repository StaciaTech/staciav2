// import React from 'react';
// import { useState } from 'react';
// import abdul from "../assets/Team/Abdul.webp";
// import divya from "../assets/Team/Divya.webp";
// import vikram from "../assets/Team/Vikram.webp";
// import thilak from "../assets/Team/Thilak.webp";


// const TeamCard = ({ eachMem }) => {

//     const teamImages = {
//         Abdul: abdul,
//         Divya: divya,
//         Vikram: vikram,
//         Thilak: thilak,
//         // Add other team member images here
//     };

//     const [showCardDetails, setShowCardDetails] = useState(false);


//     return (
//         <div
//             className={`about-team-card ${showCardDetails ? "about-team-card-active" : ""}`}
//             onClick={() => setShowCardDetails(!showCardDetails)}
//         >
//             <div className="about-team-img">
//                 <img src={teamImages[eachMem.firstName] || ""} alt="" />
//             </div>
//             <div className="about-team-name test-seclection-blue">
//                 {eachMem.fullName}
//             </div>
//             <div className="about-team-role test-seclection-blue">
//                 {eachMem.designation}
//             </div>
//             <p className="about-team-des test-seclection-blue">{eachMem.outlook}</p>
//         </div>
//     );
// };
// export default TeamCard;

import React from "react";
import "../styles/About.css";

const TeamCard = ({ eachMem }) => {
  return (
    <div className="about-team-card">
      <div className="about-team-img">
        <img src={eachMem.imageUrl} alt={eachMem.fullName} />
      </div>

      <div className="about-team-name test-seclection-blue">
        {eachMem.fullName}
      </div>

      <div className="about-team-role test-seclection-blue">
        {eachMem.designation}
      </div>

      <p className="about-team-des test-seclection-blue">
        {eachMem.outlook}
      </p>
    </div>
  );
};

export default TeamCard;
