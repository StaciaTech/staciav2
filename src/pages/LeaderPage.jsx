
// import React, { useEffect, useState } from "react";
// import "../styles/LeaderPage.css";
// import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";
// import Footer from "../components/Footer";
// import MobileFooter from "../components/MobileFooter";
// import p1 from "../assets/sarabesh.png";
// // import LeaderCarousel from "../components/ReUsableComp/LeaderCarousel";
// import LeaderCarousel from "../components/ReUsableComp/LeaderCareousel";
// import { useParams } from "react-router-dom";
// import { FaEnvelope, FaLinkedinIn, FaFileDownload } from "react-icons/fa";
// // import { BsTwitterX } from "react-icons/bs";
// import data from "../Data/About.json";

// function LeaderPage() {
//   const [singleLeader, setSingleLeader] = useState();
//   const params = useParams();
//   const Leaderkeyname = params.name.split("-").join(" ");

//   const [Leaders, setLeaders] = useState(data.leaders);

//   useEffect(() => {
//     const foundLeader = Leaders.find(
//       (leader) => leader.name === Leaderkeyname
//     );
//     setSingleLeader(foundLeader);
//   }, [Leaderkeyname]);

//   return (
//     <div>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       <div>
//         <div className="leader-hero-container">
//           <div className="leader-hero-name">
//             <div>{singleLeader?.name}</div>
//             <p>{singleLeader?.designation}</p>
//           </div>
//           <div className="leader-hero-img-container">
//             <div>
//               <img src={singleLeader?.imageUrl} alt="Leader" />
//             </div>
//           </div>
//         </div>

//         <div className="leader-content-container">
//           <div className="leader-info-container">
//             <div>
//               <div className="leader-profile-container">
//                 <div className="leader-profile-img">
//                   <img src={singleLeader?.imageUrl} alt="Leader" />
//                 </div>
//                 <div>
//                   <div className="leader-profile-name">{singleLeader?.name}</div>
//                   <div className="leader-profile-role">{singleLeader?.designation}</div>
//                   <div className="leader-icons">

//                     <div>
//                       <a href={`mailto:${singleLeader?.email}`} target="/blank" rel="noreferrer">
//                         <div className="leader-icon-container">
//                           <FaEnvelope className="footer-facebook-icon" />
//                         </div>
//                       </a>
//                     </div>
//                     <div>
//                       <a href={singleLeader?.linkedin} target="_blank" rel="noreferrer">
//                         <div className="leader-icon-container">
//                           <FaLinkedinIn className="footer-linkedin-icon" />
//                         </div>
//                       </a>
//                     </div>
//                     <div>
//                       <div 
//                        onClick={() => {
//                         // downloadFile(eachfounder, eachfounder.name);
//                         downloadFile(eachfounder.file.fileUrl, eachfounder.name);
//                       }}
//                       // href={singleLeader?.file} target="_blank" rel="noreferrer"
//                       >
//                         <div className="leader-icon-container">
//                           <FaFileDownload className="footer-linkedin-icon" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="leader-profile-line">
//                 {singleLeader?.quote}
//               </div>
//             </div>
//           </div>
//           <div>
//             <p>{singleLeader?.des}</p>
//           </div>
//         </div>
//         <div className="leader-carousel-container">
//           <LeaderCarousel data={singleLeader?.name}/>
//         </div>
//       </div>
//       <div>
//         <Footer />
//         <MobileFooter />
//       </div>
//     </div>
//   );
// }

// export default LeaderPage;



import React, { useEffect, useState } from "react";
import "../styles/LeaderPage.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import LeaderCarousel from "../components/ReUsableComp/LeaderCareousel"; // Correct import
import { useParams } from "react-router-dom";
import { FaEnvelope, FaLinkedinIn, FaFileDownload } from "react-icons/fa";
import data from "../Data/About.json";


function LeaderPage() {
  const [singleLeader, setSingleLeader] = useState();
  const params = useParams();
  const Leaderkeyname = params.name.split("-").join(" ");
  const [Leaders, setLeaders] = useState(data.leaders);

  useEffect(() => {
    const foundLeader = Leaders.find(
      (leader) => leader.name === Leaderkeyname
    );
    setSingleLeader(foundLeader);
  }, [Leaderkeyname, Leaders]);

  const downloadFile = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>

      <div>
        <div className="leader-hero-container">
          <div className="leader-hero-name">
            <div>{singleLeader?.name}</div>
            <p>{singleLeader?.designation}</p>
          </div>
          <div className="leader-hero-img-container">
            <div>
              <img src={singleLeader?.imageUrl} alt="Leader" />
            </div>
          </div>
        </div>

        <div className="leader-content-container">
          <div className="leader-info-container">
            <div>
              <div className="leader-profile-container">
                <div className="leader-profile-img">
                  <img src={singleLeader?.imageUrl} alt="Leader" />
                </div>
                <div>
                  <div className="leader-profile-name">{singleLeader?.name}</div>
                  <div className="leader-profile-role">{singleLeader?.designation}</div>
                  <div className="leader-icons">
                    <div>
                      <a href={`mailto:${singleLeader?.email}`} target="_blank" rel="noreferrer">
                        <div className="leader-icon-container">
                          <FaEnvelope className="footer-facebook-icon" />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href={singleLeader?.linkedin} target="_blank" rel="noreferrer">
                        <div className="leader-icon-container">
                          <FaLinkedinIn className="footer-linkedin-icon" />
                        </div>
                      </a>
                    </div>
                    {singleLeader?.file?.fileUrl && (
                      <div
                        onClick={() =>
                          downloadFile(singleLeader.file.fileUrl, singleLeader.name)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <div className="leader-icon-container">
                          <FaFileDownload className="footer-linkedin-icon" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="leader-profile-line">
                {singleLeader?.quote}
              </div>
            </div>
          </div>

          <div>
            <p>{singleLeader?.des}</p>
          </div>
        </div>

        <div className="leader-carousel-container">
          {/* Pass correct data or key */}
          <LeaderCarousel data={singleLeader?.name} />
        </div>
      </div>

      <div>
        <Footer />
        <MobileFooter />
      </div>
    </div>
  );
}

export default LeaderPage;
