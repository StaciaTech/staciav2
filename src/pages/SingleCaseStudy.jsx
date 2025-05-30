// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import "../styles/SingleCaseStudy.css";
// // // // import NavBar from "../components/NavBar";
// // // // import SideBar from "../components/SideBar";
// // // // import Footer from "../components/Footer";
// // // // import MobileFooter from "../components/MobileFooter";
// // // // import data from "../Data/SingleCaseStudy.json";
// // // // import CaseStudyAudio from "../components/CaseStudy/CaseStudyaudio";
// // // // import RelatedCaseStudy from "../components/CaseStudy/RelatedCaseStudy";

// // // // function SingleCaseStudy() {
// // // //   const [caseStudy, setCaseStudy] = useState(null);
// // // //   const { id } = useParams();
// // // //   const formattedId = id.replace(/-+/g, "-");

// // // //   const [relatedCases, setRelatedCases] = useState([]);
// // // //   console.log("Extracted ID from URL----:", id);

// // // //   useEffect(() => {
// // // //     console.log("Received ID:", id);
// // // //     console.log("JSON Data:", data);

// // // //     let selectedCaseStudy = null;
// // // //     let allCaseStudies = [];

// // // //     data.singlecasestudy.forEach((category) => {
// // // //       category.data.forEach((study) => {
// // // //         allCaseStudies.push(study);
// // // //         if (study.id === formattedId) {
// // // //           selectedCaseStudy = study;
// // // //         }
// // // //       });
// // // //     });

// // // //     console.log("Selected Case Study:", selectedCaseStudy);

// // // //     if (selectedCaseStudy) {
// // // //       setCaseStudy(selectedCaseStudy);
// // // //       const related = allCaseStudies
// // // //         .filter((study) => study.id !== formattedId)
// // // //         .slice(0, 5);
// // // //       setRelatedCases(related);
// // // //       console.log(related, "-----------");
// // // //     } else {
// // // //       console.error("Case study not found!");
// // // //     }
// // // //   }, [id]);

// // // //   if (!caseStudy) {
// // // //     return <div>Loading...</div>;
// // // //   }

// // // //   return (
// // // //     <>
// // // //       <NavBar />
// // // //       <SideBar />
// // // //       <div>
// // // //         <div className="single-casestudy-section">
// // // //           <div className="single-casestudy-section-overlay">
// // // //             <div className="single-casestudy-title test-seclection-white">
// // // //               {caseStudy?.title}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div>
// // // //           <div
// // // //             className="single-casestudy-heading-card-container"
// // // //             style={{
// // // //               backgroundImage: `url(${caseStudy.backgroundImage || ""})`,
// // // //             }}
// // // //           >
// // // //             <div className="single-casestudy-heading test-seclection-white">
// // // //               {caseStudy?.title}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <CaseStudyAudio />

// // // //         <div className="single-casestudy-content-container">
// // // //           <div>
// // // //             <div className="single-casestudy-layout1-title test-seclection-blue">
// // // //               {caseStudy?.overview?.overviewtitle}
// // // //             </div>
// // // //             <p className="single-casestudy-layout1-des test-seclection-blue">
// // // //               {caseStudy?.overview?.description}
// // // //             </p>

// // // //             <div className="single-casestudy-layout1-img-content-container">
// // // //               {caseStudy?.imageContent?.imageSrc && (
// // // //                 <div>
// // // //                   <img
// // // //                     src={caseStudy?.imageContent.imageSrc}
// // // //                     alt="Overview"
// // // //                     style={{
// // // //                       width: "100%",
// // // //                       height: "100%",
// // // //                       objectFit: "cover",
// // // //                       userSelect: "none",
// // // //                     }}
// // // //                   />
// // // //                 </div>
// // // //               )}
// // // //               <div>
// // // //                 {caseStudy?.imageContent?.content?.map((text, index) => (
// // // //                   <p key={index} className="test-seclection-blue-img-cont">
// // // //                     {text}
// // // //                   </p>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="single-casestudy-layout1-title test-seclection-blue">
// // // //             <p>{caseStudy?.gallerytittle}</p>
// // // //           </div>

// // // //           {caseStudy?.gallery && caseStudy.gallery.length > 0 && (
// // // //             <div className="single-casestudy-layout2">
// // // //               {caseStudy.gallery.map((img, index) => (
// // // //                 <div key={index}>
// // // //                   <img
// // // //                     src={img}
// // // //                     alt={`Gallery ${index}`}
// // // //                     style={{
// // // //                       width: "100%",
// // // //                       height: "100%",
// // // //                       objectFit: "cover",
// // // //                     }}
// // // //                   />
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //           <div className="challenges">
// // // //             <div
// // // //               className="single-casestudy-layout3"
// // // //               style={{ display: "flex" }}
// // // //             >
// // // //               <div>
// // // //                 {caseStudy?.challenges?.map((challenge, index) => (
// // // //                   <div key={index}>
// // // //                     <div className="single-casestudy-layout3-title test-seclection-blue">
// // // //                       {challenge.challengestitle}
// // // //                     </div>
// // // //                     <p className="test-seclection-blue-challenge">
// // // //                       {challenge.description}
// // // //                     </p>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //               {caseStudy?.imageContent?.imageSrc && (
// // // //                 <div>
// // // //                   <img
// // // //                     src={caseStudy.imageContent.imageSrc}
// // // //                     alt="Challenge"
// // // //                     style={{
// // // //                       width: "100%",
// // // //                       height: "100%",
// // // //                       objectFit: "cover",
// // // //                       userSelect: "none",
// // // //                     }}
// // // //                   />
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //             <div className="relatable-casestudy">
// // // //               <RelatedCaseStudy relatedCases={relatedCases} />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <Footer />
// // // //       <MobileFooter />
// // // //     </>
// // // //   );
// // // // }

// // // // export default SingleCaseStudy;

// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import "../styles/SingleCaseStudy.css";
// // // // import NavBar from "../components/NavBar";
// // // // import SideBar from "../components/SideBar";
// // // // import Footer from "../components/Footer";
// // // // import MobileFooter from "../components/MobileFooter";
// // // // import data from "../Data/SingleCaseStudy.json";
// // // // import CaseStudyAudio from "../components/CaseStudy/CaseStudyaudio";
// // // // import RelatedCaseStudy from "../components/CaseStudy/RelatedCaseStudy";

// // // // function SingleCaseStudy() {
// // // //   const [caseStudy, setCaseStudy] = useState(null);
// // // //   const { id } = useParams();
// // // //   const formattedId = id.replace(/-+/g, "-");

// // // //   const [relatedCases, setRelatedCases] = useState([]);
// // // //   console.log("Extracted ID from URL----:", id);

// // // //   useEffect(() => {
// // // //     console.log("Received ID:", id);
// // // //     console.log("JSON Data:", data);

// // // //     let selectedCaseStudy = null;
// // // //     let allCaseStudies = [];

// // // //     data.singlecasestudy.forEach((category) => {
// // // //       category.data.forEach((study) => {
// // // //         allCaseStudies.push(study);
// // // //         if (study.id === formattedId) {
// // // //           selectedCaseStudy = study;
// // // //         }
// // // //       });
// // // //     });

// // // //     console.log("Selected Case Study:", selectedCaseStudy);
// // // // //filter realted casestudy

// // // //     if (selectedCaseStudy) {
// // // //       setCaseStudy(selectedCaseStudy);
// // // //       const related = allCaseStudies
// // // //         .filter((study) => study.id !== formattedId)
// // // //         .slice(0, 5);
// // // //       setRelatedCases(related);
// // // //       console.log(related, "-----------");
// // // //     } else {
// // // //       console.error("Case study not found!");
// // // //     }
// // // //   }, [id]);

// // // //   if (!caseStudy) {
// // // //     return <div>Loading...</div>;
// // // //   }

// // // //   return (
// // // //     <>
// // // //       <NavBar />
// // // //       <SideBar />
// // // //       <div>
// // // //         <div className="single-casestudy-section">
// // // //           <div className="single-casestudy-section-overlay">
// // // //             <div className="single-casestudy-title test-seclection-white">
// // // //               {caseStudy?.title}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div>
// // // //           <div
// // // //             className="single-casestudy-heading-card-container"
// // // //             style={{
// // // //               backgroundImage: `url(${caseStudy.backgroundImage || ""})`,
// // // //             }}
// // // //           >
// // // //             <div className="single-casestudy-heading test-seclection-white">
// // // //               {caseStudy?.title}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <CaseStudyAudio />

// // // //         <div className="single-casestudy-content-container">
// // // //           <div>
// // // //             <div className="single-casestudy-layout1-title test-seclection-blue">
// // // //               {caseStudy?.overview?.overviewtitle}
// // // //             </div>

// // // //             <p className="single-casestudy-layout1-des test-seclection-blue">
// // // //               {caseStudy?.overview?.description}
// // // //             </p>

// // // //             <div className="single-casestudy-layout1-img-content-container">
// // // //               {caseStudy?.imageContent?.imageSrc && (
// // // //                 <div>
// // // //                   <img
// // // //                     src={caseStudy?.imageContent.imageSrc}
// // // //                     alt="Overview"
// // // //                     style={{
// // // //                       width: "100%",
// // // //                       height: "100%",
// // // //                       objectFit: "cover",
// // // //                       userSelect: "none",
// // // //                     }}
// // // //                   />
// // // //                 </div>
// // // //               )}
// // // //               <div>
// // // //                <h4 className="background">Background</h4>
// // // //                 {caseStudy?.imageContent?.content?.map((text, index) => (
// // // //                   <p key={index} className="test-seclection-blue-img-cont">
// // // //                     {text}
// // // //                   </p>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           {/* salient feature */}
// // // //           <div className="salient-features">
// // // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // // //               Salient Features
// // // //             </h2>
// // // //             <ul>
// // // //               <li>Highly efficient</li>
// // // //               <li>Portability due to its battery operation</li>
// // // //               <li>Lightweight due to optimized selection of material</li>
// // // //               <li>Occupies less space</li>
// // // //               <li>High temperature operability</li>
// // // //             </ul>
// // // //           </div>
// // // //           {/* Problem Statement */}
// // // //           <div className="problem-statement">
// // // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // // //               Problem Statement
// // // //             </h2>
// // // //             <p className="problem-statement-para1">
// // // //               Traditional chili handling methods often involve several
// // // //               challenges that can negatively impact product quality.
// // // //               Additionally, manual handling of chili is labor-intensive,
// // // //               time-consuming, and can lead to repetitive strain injuries.
// // // //             </p>
// // // //             <ul className="problem-statement-para2">
// // // //               <li>
// // // //                 <span className="highlight">Inconsistent Drying:</span> The
// // // //                 drying process was time-consuming and often resulted in uneven
// // // //                 moisture content.
// // // //               </li>
// // // //               <li>
// // // //                 <span className="highlight">Manual Labor:</span> The manual
// // // //                 handling of chili was labour-intensive.
// // // //               </li>
// // // //               <li>
// // // //                 <span className="highlight">Chili Breakage:</span> Manual usage
// // // //                 of ladle caused breakage in chili which affects the quality.
// // // //               </li>
// // // //               <li>
// // // //                 <span className="highlight">Ambitious Temperature:</span> The
// // // //                 chili is generally dried at 50°C – 60°C. Hence working under
// // // //                 these conditions can pose several hazards to human health.
// // // //               </li>
// // // //             </ul>
// // // //           </div>
// // // //           {/* Development Process */}
// // // //           <div className="development-process">
// // // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // // //               Development Process
// // // //             </h2>
// // // //             <div>

// // // //               <h3 className="">Ideation:</h3>
// // // //               <p className="test-selection-blue">
// // // //                 The ideation process for the chili ladling machine at Aachi
// // // //                 Masala was driven by the observation and analysis of existing
// // // //                 challenges within their chili handling operations. Through field
// // // //                 visits and interactions with plant personnel, it became evident
// // // //                 that the current methods of chili ladling were inefficient,
// // // //                 time-consuming, and prone to product damage.
// // // //               </p>
// // // //               <p className="test-selection-blue">
// // // //                 To address these challenges, a creative and innovative solution
// // // //                 was sought. Understanding the unique properties of chili, and
// // // //                 leveraging technological advancements, the concept of a
// // // //                 specialized chili ladling machine emerged.
// // // //               </p>
// // // //               <p>
// // // //                 This machine would automate the process, improve efficiency, and
// // // //                 ensure consistent quality, ultimately enhancing the overall
// // // //                 productivity and profitability of Aachi Masala's chili
// // // //                 production.
// // // //               </p>
// // // //             </div>
// // // //             <div>
// // // //               <h3 className="single-casestudy-layout1-subtitle test-selection-blue">
// // // //                 Design & Prototype:
// // // //               </h3>
// // // //               <p className="test-selection-blue">
// // // //                 The development of the chili ladling machine involved a series
// // // //                 of iterations to refine its design and functionality. Initial
// // // //                 concepts focused on fixed incline mechanisms, which proved
// // // //                 ineffective in efficiency.
// // // //               </p>
// // // //               <p>
// // // //                 In the initial two prototypes, the chili encountered
// // // //                 difficulties in traversing. The twisting and intertwining of the
// // // //                 chili resulted in blockages and uneven movement, hindering the
// // // //                 efficient
// // // //               </p>
// // // //               <p>
// // // //                 Through iterative testing and experimentation, the team
// // // //                 eventually integrated a conveyor belt system into the design.
// // // //                 This proved to be the most effective solution for handling large
// // // //                 quantities of chili while minimizing breakage and ensuring
// // // //                 consistent processing. The conveyor belt design allowed for
// // // //                 efficient movement and mixing of the chili, addressing the
// // // //                 challenges encountered in earlier prototypes.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //           {/* Challenges Faced */}
// // // //           <div className="Challenges-Faced">
// // // //             <h2>Challenges Faced</h2>
// // // //             <p>
// // // //               One of the primary challenges encountered during the development
// // // //               of the chili ladling machine was determining the optimal conveyor
// // // //               angle and RPM speed.
// // // //             </p>
// // // //             <ul>
// // // //               <li>
// // // //                 <span className="highlight">Conveyor Angle:</span> TFinding the
// // // //                 ideal angle for the conveyor belt was crucial to ensure proper
// // // //                 movement and distribution of the chili. An angle that was too
// // // //                 steep could cause the chili to slide off the belt, while an
// // // //                 angle that was too shallow might not provide sufficient
// // // //                 movement.
// // // //               </li>
// // // //               <li>
// // // //                 <span className="highlight">Increased Efficiency:</span> The
// // // //                 machine streamlined the chili handling process, reducing labor
// // // //                 costs and increasing overall productivity.
// // // //               </li>
// // // //               <li>
// // // //                 <span className="highlight">RPM Speed:</span> The RPM speed of
// // // //                 the conveyor belt also needed to be carefully calibrated. Too
// // // //                 high a speed could lead to excessive breakage of the chili,
// // // //                 while too low a speed might result in inefficient processing.
// // // //               </li>
// // // //               <li>
// // // //                 Through extensive testing and experimentation, the optimal
// // // //                 conveyor angle and RPM speed were determined to be and 110 RPM,
// // // //                 respectively. These settings provided the necessary balance
// // // //                 between efficient chili movement and minimal breakage.
// // // //               </li>
// // // //             </ul>
// // // //           </div>
// // // //           {/* Impact and Benefits */}
// // // //           <div className="impact-benefits">
// // // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // // //               Impact and Benefits
// // // //             </h2>
// // // //             <ul>
// // // //               <li>
// // // //                 <span className="highlight">Improved Hygiene:</span> The
// // // //                 automated handling process reduced the risk of contamination,
// // // //                 ensuring the safety and quality of the final product.
// // // //               </li>
// // // //               <li>
// // // //                 <span className="highlight">Increased Efficiency:</span> The
// // // //                 machine streamlined the chili handling process, reducing labor
// // // //                 costs and increasing overall productivity.
// // // //               </li>
// // // //               <li>
// // // //                 <span className="highlight">Consistent Drying:</span> The
// // // //                 controlled drying chamber ensured even drying of chili,
// // // //                 resulting in a more uniform product.
// // // //               </li>
// // // //               <li>
// // // //                 <span className="highlight">Reduced Breakage:</span> The gentle
// // // //                 handling mechanism minimized chili breakage, improving product
// // // //                 yield and reducing waste.
// // // //               </li>
// // // //             </ul>
// // // //           </div>
// // // //           <div className="single-casestudy-layout1-title test-seclection-blue">
// // // //             <p>{caseStudy?.gallerytittle}</p>
// // // //           </div>
// // // //           {caseStudy?.gallery && caseStudy.gallery.length > 0 && (
// // // //             <div className="single-casestudy-layout2">
// // // //               {caseStudy.gallery.map((img, index) => (
// // // //                 <div key={index}>
// // // //                   <img
// // // //                     src={img}
// // // //                     alt={`Gallery ${index}`}
// // // //                     style={{
// // // //                       width: "100%",
// // // //                       height: "100%",
// // // //                       objectFit: "cover",
// // // //                     }}
// // // //                   />
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //           <div className="challenges">
// // // //             <div
// // // //               className="single-casestudy-layout3"
// // // //               style={{ display: "flex" }}
// // // //             >
// // // //               <div>
// // // //                 {caseStudy?.challenges?.map((challenge, index) => (
// // // //                   <div key={index}>
// // // //                     <div className="single-casestudy-layout3-title test-seclection-blue">
// // // //                       {challenge.challengestitle}
// // // //                     </div>
// // // //                     <p className="test-seclection-blue-challenge">
// // // //                       {challenge.description}
// // // //                     </p>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //               {caseStudy?.imageContent?.imageSrc && (
// // // //                 <div>
// // // //                   {/* <img
// // // //                     src={caseStudy.imageContent.imageSrc}
// // // //                     alt="Challenge"
// // // //                     style={{
// // // //                       width: "100%",
// // // //                       height: "100%",
// // // //                       objectFit: "cover",
// // // //                       userSelect: "none",
// // // //                     }}
// // // //                   /> */}
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //             <div className="relatable-casestudy">
// // // //               <RelatedCaseStudy relatedCases={relatedCases} />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <Footer />
// // // //       <MobileFooter />
// // // //     </>
// // // //   );
// // // // }

// // // // export default SingleCaseStudy;

// // // import React, { useEffect, useState, useRef } from "react";
// // // import { useParams, Link } from "react-router-dom";
// // // import "../styles/SingleCaseStudy.css";
// // // import NavBar from "../components/NavBar";
// // // import SideBar from "../components/SideBar";
// // // import Footer from "../components/Footer";
// // // import MobileFooter from "../components/MobileFooter";
// // // import CaseStudyAudio from "../components/CaseStudy/CaseStudyaudio";
// // // import data from "../Data/SingleCaseStudy.json";
// // // import loading from "../assets/loading.png";

// // // import { IoMdClose } from "react-icons/io";

// // // function SingleCaseStudy() {
// // //   const [caseStudy, setCaseStudy] = useState(null);
// // //   const [otherCaseStudies, setOtherCaseStudies] = useState([]);
// // //   const { id } = useParams();

// // //   const [showButton, setShowButton] = useState(false);
// // //   const [showHelpPage, setShowHelpPage] = useState(false);
// // //   const [showForm, setShowForm] = useState(false);
// // //   const popupRef = useRef(null);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const scrollY = window.scrollY || document.documentElement.scrollTop;
// // //       const windowHeight = window.innerHeight;
// // //       const documentHeight = document.documentElement.scrollHeight;
// // //       const bottomOffset = 1000; // Adjust this value as needed
// // //       if (scrollY > 4200) {
// // //         if (scrollY + windowHeight >= documentHeight - bottomOffset) {
// // //           setShowButton(false); // Hide when near bottom
// // //         } else {
// // //           setShowButton(true); // Show otherwise
// // //         }
// // //       } else {
// // //         setShowButton(false); // Hide before 1500px
// // //       }
// // //     };
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const handleClick = () => {
// // //     setShowHelpPage(true);
// // //     setShowForm(true);
// // //   };
// // //   useEffect(() => {
// // //     if (showForm) {
// // //       // Store the current scroll position
// // //       const scrollY = window.scrollY;
// // //       document.body.style.position = "fixed";
// // //       document.body.style.top = `-${scrollY}px`;
// // //       document.body.style.width = "100%";
// // //       document.body.style.overflow = "hidden";
// // //     } else {
// // //       // Restore the scroll position
// // //       const scrollY = document.body.style.top;
// // //       document.body.style.position = "";
// // //       document.body.style.top = "";
// // //       document.body.style.width = "";
// // //       document.body.style.overflow = "auto";
// // //       window.scrollTo(0, parseInt(scrollY || "0") * -1);
// // //     }
// // //     return () => {
// // //       // Reset on unmount
// // //       document.body.style.position = "";
// // //       document.body.style.top = "";
// // //       document.body.style.width = "";
// // //       document.body.style.overflow = "auto";
// // //     };
// // //   }, [showForm]);

// // //   const handleWheel = (e) => {
// // //     const container = e.currentTarget;
// // //     if (container.scrollHeight > container.clientHeight) {
// // //       e.preventDefault();
// // //       e.preventPropagation();
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     let selectedCaseStudy = null;
// // //     let allCaseStudies = [];

// // //     // Find the current case study and collect all case studies
// // //     data.singlecasestudy.forEach((category) => {
// // //       category.data.forEach((study) => {
// // //         if (study.id === id) {
// // //           selectedCaseStudy = study;
// // //         }
// // //         allCaseStudies.push(study);
// // //       });
// // //     });

// // //     if (selectedCaseStudy) {
// // //       setCaseStudy(selectedCaseStudy);
// // //       // Filter out the current case study and limit to 3 others
// // //       const others = allCaseStudies
// // //         .filter((study) => study.id !== id)
// // //         .slice(0, 5);
// // //       setOtherCaseStudies(others);
// // //     } else {
// // //       console.error("Case study not found!");
// // //     }
// // //   }, [id]);

// // //   if (!caseStudy) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   return (
// // //     <>
// // //       <NavBar />
// // //       <SideBar />
// // //       <div>
// // //         <div className="single-casestudy-section">
// // //           <div className="single-casestudy-section-overlay">
// // //             <div className="single-casestudy-title test-seclection-white">
// // //               {caseStudy.title}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div>
// // //           <div
// // //             className="single-casestudy-heading-card-container"
// // //             style={{
// // //               backgroundImage: `url(${caseStudy.backgroundImage || ""})`,
// // //             }}
// // //           >
// // //             <div className="single-casestudy-heading test-seclection-white">
// // //               {caseStudy.title}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="single-casestudy-content-container">
// // //           <div>
// // //             <CaseStudyAudio />
// // //           </div>
// // //           <div>
// // //             <div className="single-casestudy-layout1-title test-seclection-blue">
// // //               {caseStudy.overview.overviewtitle}
// // //             </div>

// // //             <p className="single-casestudy-layout1-des test-seclection-blue">
// // //               {caseStudy.overview.description}
// // //             </p>

// // //             <div className="single-casestudy-layout1-img-content-container">
// // //               {caseStudy.imageContent.imageSrc && (
// // //                 <div>
// // //                   <img
// // //                     src={caseStudy.imageContent.imageSrc}
// // //                     alt="Overview"
// // //                     style={{
// // //                       width: "100%",
// // //                       height: "100%",
// // //                       objectFit: "cover",
// // //                       userSelect: "none",
// // //                     }}
// // //                   />
// // //                 </div>
// // //               )}
// // //               <div>
// // //                 <h4 className="background">
// // //                   {caseStudy.imageContent.imagetitle}
// // //                 </h4>
// // //                 {caseStudy.imageContent.content.map((text, index) => (
// // //                   <p key={index} className="test-seclection-blue-img-cont">
// // //                     {text}
// // //                   </p>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //             <p className="single-casestudy-layout1-des test-seclection-blue">
// // //               {caseStudy.Backgrounddes.description1}
// // //             </p>
// // //             <p className="single-casestudy-layout1-des test-seclection-blue">
// // //               {caseStudy.Backgrounddes.description2}
// // //             </p>
// // //           </div>

// // //           {/* Problem Statement */}
// // //           <div className="problem-statement">
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.problemStatement.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.problemStatement.description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.problemStatement.issues.map((issue, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{issue.highlight}:</span>{" "}
// // //                   {issue.text}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.problemStatement.des1}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.problemStatement.des2}
// // //             </p>
// // //           </div>

// // //           {showButton && !showHelpPage && (
// // //             <button onClick={handleClick} className="help-button">
// // //               <img
// // //                 src={loading}
// // //                 alt=""
// // //                 style={{
// // //                   width: "30px",
// // //                 }}
// // //               />
// // //               How Stacia Can help
// // //             </button>
// // //           )}

// // //           {/* Help Page Section */}
// // //           {showForm && showHelpPage && (
// // //             <div className="help-section">
// // //               <div
// // //                 className="help-container"
// // //                 onWheel={handleWheel}
// // //                 ref={popupRef}
// // //               >
// // //                 <div className="help-sidebar">
// // //                   <img
// // //                     src={loading}
// // //                     alt=""
// // //                     style={{
// // //                       width: "30px",
// // //                     }}
// // //                   />
// // //                   <h2>How Stacia Can Help</h2>

// // //                   {/* Tabs */}
// // //                   <div className="help-tabs">
// // //                     {caseStudy.helpbox.map((tab, index) => (
// // //                       <button
// // //                         key={index}
// // //                         className={tab === "Services" ? "active" : ""}
// // //                       >
// // //                         {tab}
// // //                       </button>
// // //                     ))}
// // //                   </div>

// // //                   {/* Links */}
// // //                   <ul className="help-links">
// // //                     {[
// // //                       "Mechanical",
// // //                       "Electronics",
// // //                       "Tech",
// // //                       "column 1",
// // //                       "column 2",
// // //                       "column 3",
// // //                     ].map((link, index) => (
// // //                       <li
// // //                         key={index}
// // //                         className={link === "Electronics" ? "active" : ""}
// // //                       >
// // //                         {link}
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>

// // //                 {/* Help Card Section */}
// // //                 <div className="help-card-section">
// // //                   {[
// // //                     {
// // //                       img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
// // //                       title: "Placeholder text",
// // //                       description:
// // //                         "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. Blandit in sagittis sem quis lectus aliquam.",
// // //                       link: "#",
// // //                     },
// // //                   ].map((card, index) => (
// // //                     <div className="help-card" key={index}>
// // //                       <img src={card.img} alt={card.title} />
// // //                       <h3>{card.title}</h3>
// // //                       <p>{card.description}</p>
// // //                       <a href={card.link}>Know more →</a>
// // //                     </div>
// // //                   ))}
// // //                 </div>

// // //                 {/* Close Button */}
// // //                 <button
// // //                   className="help-close-btn"
// // //                   onClick={() => {
// // //                     setShowHelpPage(false);
// // //                     setShowForm(false);
// // //                   }}
// // //                 >
// // //                  <IoMdClose />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Case Analysis */}
// // //           <div className="development-process">
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseAnalysis.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.des3}
// // //             </p>
// // //             {/* Challenges */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseAnalysis.title1}
// // //             </h2>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.CaseAnalysis.Challenges.map((feature, index) => (
// // //                 <li key={index} className="li-text">{feature}</li>
// // //               ))}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.des4}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.des5}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.des6}
// // //             </p>

// // //             {/* Proposed Solution */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseAnalysis.ProposedSolution.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.ProposedSolution.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.CaseAnalysis.ProposedSolution.benefits.map(
// // //                 (benefits, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{benefits.highlight}:</span>{" "}
// // //                     {benefits.text}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.ProposedSolution.des7}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.ProposedSolution.des8}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.ProposedSolution.des9}
// // //             </p>

// // //             {/* Key Mechanized Processes */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.title}
// // //             </h2>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.Processes.map(
// // //                 (Processes, index) => (
// // //                   <li key={index}className="li-text">
// // //                     <span className="highlight">{Processes.Process}:</span>{" "}
// // //                     {Processes.Description}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>

// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des10}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des11}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des12}
// // //             </p>

// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des13}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des14}
// // //             </p>

// // //             {/* Statistics */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.Statistics.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.Statistics.condent.MarketGrowth.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {Object.values(caseStudy.Statistics.condent).map(
// // //                 (feature, index) => (
// // //                   <li key={index} className="li-text">
// // //                     {feature.Description || "No feature description"}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>

// // //             {/* Economic Impact */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.EconomicImpact.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.EconomicImpact.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.EconomicImpact.Impacts.map((Impacts, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{Impacts.highlight}:</span>{" "}
// // //                   {Impacts.text}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* Strategies to Overcome Barriers */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.StrategiesToOvercome.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.StrategiesToOvercome.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.StrategiesToOvercome.Strategies.map(
// // //                 (Strategies, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{Strategies.strategy}:</span>{" "}
// // //                     {Strategies.description}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>

// // //             {/* Future Trends */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.FutureTrends.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.FutureTrends.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.FutureTrends.Trends.map((Trends, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{Trends.technology}:</span>{" "}
// // //                   {Trends.description}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* Impact on Employment */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.ImpactOnEmployment.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.ImpactOnEmployment.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.ImpactOnEmployment.JobDisplacement.map(
// // //                 (JobDisplacement, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{JobDisplacement.area}:</span>{" "}
// // //                     {JobDisplacement.description}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>

// // //             {/* Regional Variations */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.RegionalVariations.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.RegionalVariations.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.RegionalVariations.AdoptionFactors.map(
// // //                 (AdoptionFactors, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{AdoptionFactors.factor}:</span>{" "}
// // //                     {AdoptionFactors.description}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>

// // //             {/* Environmental Impact */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.EnvironmentalImpact.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.EnvironmentalImpact.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.EnvironmentalImpact.Impacts.map((Impacts, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{Impacts.impact}:</span>{" "}
// // //                   {Impacts.description}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* Quality and Safety */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.QualityAndSafety.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.QualityAndSafety.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.QualityAndSafety.Improvements.map(
// // //                 (Improvements, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{Improvements.process}:</span>{" "}
// // //                     {Improvements.description}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>

// // //             {/* Farmer Perspectives */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.FarmerPerspectives.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.FarmerPerspectives.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.FarmerPerspectives.BenefitsForFarmers.map(
// // //                 (BenefitsForFarmers, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">
// // //                       {BenefitsForFarmers.benefit}:
// // //                     </span>{" "}
// // //                     {BenefitsForFarmers.description}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>
// // //           </div>

// // //           {/* Development Process */}
// // //           <div className="development-process">
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.developmentProcess.title}
// // //             </h2>
// // //             {caseStudy.developmentProcess.sections.map((section, index) => (
// // //               <div key={index}>
// // //                 <h3 className={section.subtitleClass || ""}>
// // //                   {section.subtitle}
// // //                 </h3>
// // //                 {section.paragraphs.map((para, paraIndex) => (
// // //                   <p
// // //                     key={paraIndex}
// // //                     className={para.className || "test-selection-blue"}
// // //                   >
// // //                     {para.text}
// // //                   </p>
// // //                 ))}
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Challenges Faced */}
// // //           <div className="Challenges-Faced">
// // //             <h2>{caseStudy.challengesFaced.title}</h2>
// // //             <p>{caseStudy.challengesFaced.description}</p>
// // //             <ul>
// // //               {caseStudy.challengesFaced.issues.map((issues, index) => (
// // //                 <li key={index} className="li-text">
// // //                   {issues.highlight ? (
// // //                     <>
// // //                       <span className="highlight">{issues.highlight}:</span>{" "}
// // //                       {issues.text}
// // //                     </>
// // //                   ) : (
// // //                     issues.text
// // //                   )}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* Impact and Benefits */}
// // //           <div className="impact-benefits">
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.impactBenefits.title}
// // //             </h2>
// // //             <ul>
// // //               {caseStudy.impactBenefits.benefits.map((benefits, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{benefits.highlight}:</span>{" "}
// // //                   {benefits.text}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           <div className="single-casestudy-layout1-title test-seclection-blue">
// // //             <p>
// // //               {/* {caseStudy.gallerytittle} */} Industries
// // //               </p>
// // //           </div>
// // //           {caseStudy.gallery && caseStudy.gallery.length > 0 && (
// // //             <div className="single-casestudy-layout2">
// // //               {caseStudy.gallery.map((img, index) => (
// // //                 <div key={index}>
// // //                   <img
// // //                     src={img}
// // //                     alt={`Gallery ${index}`}
// // //                     style={{
// // //                       width: "100%",
// // //                       height: "100%",
// // //                       objectFit: "cover",
// // //                     }}
// // //                   />
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}

// // //           <div className="challenges">
// // //             <div className="single-casestudy-layout3">
// // //               <div className="conclusion">
// // //                 {caseStudy.challenges.map((challenge, index) => (
// // //                   <div key={index}>
// // //                     <div className="single-casestudy-layout3-title test-seclection-blue">
// // //                       {challenge.challengestitle}
// // //                     </div>
// // //                     <p className="test-seclection-blue-challenge">
// // //                       {challenge.description}
// // //                     </p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Other Case Studies Section */}
// // //         <div className="other-case-studies">
// // //           <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //             Other Case Studies
// // //           </h2>
// // //           <div className="other-case-studies-grid">
// // //             {otherCaseStudies.map((study, index) => (
// // //               <div className="other-case-study-card" key={index}>
// // //                 <Link to={`/case-study/single-caseStudy/${study.id}`}>
// // //                   <img
// // //                     src={
// // //                       study.imageURL ||
// // //                       "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
// // //                     }
// // //                     alt={study.title}
// // //                     style={{
// // //                       width: "100%",
// // //                       height: "280px",
// // //                       objectFit: "cover",
// // //                       borderRadius: "8px 8px 0 0",
// // //                     }}
// // //                     onClick={() => window.scrollTo(0, 0)}
// // //                   />
// // //                 </Link>
// // //                 <div className="other-case-study-content">
// // //                   <h3>{study.title}</h3>
// // //                   <p>
// // //                     {study.overview.description.length > 100
// // //                       ? `${study.overview.description.substring(0, 100)}...`
// // //                       : study.overview.description}
// // //                   </p>
// // //                   <Link
// // //                     to={`/case-study/single-caseStudy/${study.id}`}
// // //                     onClick={() => window.scrollTo(0, 0)}
// // //                     className="know-more-link"
// // //                   >
// // //                     Know more →
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <Footer />
// // //       <MobileFooter />
// // //     </>
// // //   );
// // // }

// // // export default SingleCaseStudy;

// // // import React, { useEffect, useState, useRef } from "react";
// // // import { useParams, Link } from "react-router-dom";
// // // import "../styles/SingleCaseStudy.css";
// // // import NavBar from "../components/NavBar";
// // // import SideBar from "../components/SideBar";
// // // import Footer from "../components/Footer";
// // // import MobileFooter from "../components/MobileFooter";
// // // import CaseStudyAudio from "../components/CaseStudy/CaseStudyaudio";
// // // import data from "../Data/SingleCaseStudy.json";
// // // import loading from "../assets/loading.png";
// // // import { IoMdClose } from "react-icons/io";

// // // function SingleCaseStudy() {
// // //   const [caseStudy, setCaseStudy] = useState(null);
// // //   const [otherCaseStudies, setOtherCaseStudies] = useState([]);
// // //   const [activeTab, setActiveTab] = useState(null); // For tab selection
// // //   const [hoveredTitle, setHoveredTitle] = useState(null); // For hover state
// // //   const { id } = useParams();

// // //   const [showButton, setShowButton] = useState(false);
// // //   const [showHelpPage, setShowHelpPage] = useState(false);
// // //   const [showForm, setShowForm] = useState(false);
// // //   const popupRef = useRef(null);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const scrollY = window.scrollY || document.documentElement.scrollTop;
// // //       const windowHeight = window.innerHeight;
// // //       const documentHeight = document.documentElement.scrollHeight;
// // //       const bottomOffset = 1000;
// // //       if (scrollY > 4200) {
// // //         if (scrollY + windowHeight >= documentHeight - bottomOffset) {
// // //           setShowButton(false);
// // //         } else {
// // //           setShowButton(true);
// // //         }
// // //       } else {
// // //         setShowButton(false);
// // //       }
// // //     };
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const handleClick = () => {
// // //     setShowHelpPage(true);
// // //     setShowForm(true);
// // //     if (caseStudy?.helpbox?.tabs?.length > 0) {
// // //       setActiveTab(caseStudy.helpbox.tabs[0]); // Set first tab as active
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (showForm) {
// // //       const scrollY = window.scrollY;
// // //       document.body.style.position = "fixed";
// // //       document.body.style.top = `-${scrollY}px`;
// // //       document.body.style.width = "100%";
// // //       document.body.style.overflow = "hidden";
// // //     } else {
// // //       const scrollY = document.body.style.top;
// // //       document.body.style.position = "";
// // //       document.body.style.top = "";
// // //       document.body.style.width = "";
// // //       document.body.style.overflow = "auto";
// // //       window.scrollTo(0, parseInt(scrollY || "0") * -1);
// // //     }
// // //     return () => {
// // //       document.body.style.position = "";
// // //       document.body.style.top = "";
// // //       document.body.style.width = "";
// // //       document.body.style.overflow = "auto";
// // //     };
// // //   }, [showForm]);

// // //   const handleWheel = (e) => {
// // //     const container = e.currentTarget;
// // //     if (container.scrollHeight > container.clientHeight) {
// // //       e.preventDefault();
// // //       e.preventPropagation();
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     let selectedCaseStudy = null;
// // //     let allCaseStudies = [];

// // //     data.singlecasestudy.forEach((category) => {
// // //       category.data.forEach((study) => {
// // //         if (study.id === id) {
// // //           selectedCaseStudy = study;
// // //         }
// // //         allCaseStudies.push(study);
// // //       });
// // //     });

// // //     if (selectedCaseStudy) {
// // //       setCaseStudy(selectedCaseStudy);
// // //       const others = allCaseStudies
// // //         .filter((study) => study.id !== id)
// // //         .slice(0, 5);
// // //       setOtherCaseStudies(others);
// // //     } else {
// // //       console.error("Case study not found!");
// // //     }
// // //   }, [id]);

// // //   if (!caseStudy) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   // Filter cards based on the active tab
// // //   const filteredCards = caseStudy.helpbox?.cards?.filter(
// // //     (card) => card.tab === activeTab
// // //   ) || [];

// // //   // Get the card to display based on the hovered title, or the first card by default
// // //   const displayedCard =
// // //     filteredCards.find((card) => card.title === hoveredTitle) ||
// // //     filteredCards[0] ||
// // //     null;

// // //   return (
// // //     <>
// // //       <NavBar />
// // //       <SideBar />
// // //       <div>
// // //         {/* <div className="single-casestudy-section">
// // //           <div className="single-casestudy-section-overlay">
// // //             <div className="single-casestudy-title test-seclection-white">
// // //               {caseStudy.title}
// // //             </div>
// // //           </div>
// // //         </div> */}

// // //         <div>
// // //           <div
// // //             className="single-casestudy-heading-card-container"
// // //             style={{
// // //               backgroundImage: `url(${caseStudy.backgroundImage || ""})`,
// // //             }}
// // //           >
// // //             <div className="single-casestudy-heading test-seclection-white">
// // //               {caseStudy.title}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="single-casestudy-content-container">
// // //           <div>
// // //             <CaseStudyAudio />
// // //           </div>
// // //           <div>
// // //             <div className="single-casestudy-layout1-title test-seclection-blue">
// // //               {caseStudy.overview.overviewtitle}
// // //             </div>

// // //             <p className="single-casestudy-layout1-des test-seclection-blue">
// // //               {caseStudy.overview.description}
// // //             </p>

// // //             <div className="single-casestudy-layout1-img-content-container">
// // //               {caseStudy.imageContent.imageSrc && (
// // //                 <div>
// // //                   <img
// // //                     src={caseStudy.imageURL}
// // //                     alt="Overview"
// // //                     style={{
// // //                       width: "100%",
// // //                       height: "100%",
// // //                       objectFit: "cover",
// // //                       userSelect: "none",
// // //                     }}
// // //                   />
// // //                 </div>
// // //               )}
// // //               <div>
// // //                 <h4 className="background">
// // //                   {caseStudy.imageContent.imagetitle}
// // //                 </h4>
// // //                 {caseStudy.imageContent.content.map((text, index) => (
// // //                   <p key={index} className="test-seclection-blue-img-cont">
// // //                     {text}
// // //                   </p>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //             <p className="single-casestudy-layout1-des test-seclection-blue">
// // //               {caseStudy.Backgrounddes.description1}
// // //             </p>
// // //             <p className="single-casestudy-layout1-des test-seclection-blue">
// // //               {caseStudy.Backgrounddes.description2}
// // //             </p>
// // //           </div>

// // //           {/* Problem Statement */}
// // //           <div className="problem-statement">
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.problemStatement.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.problemStatement.description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.problemStatement.issues.map((issue, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{issue.highlight}:</span>{" "}
// // //                   {issue.text}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.problemStatement.des1}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.problemStatement.des2}
// // //             </p>
// // //           </div>

// // //           {showButton && !showHelpPage && (
// // //             <button onClick={handleClick} className="help-button">
// // //               <img
// // //                 src={loading}
// // //                 alt="Loading"
// // //                 style={{
// // //                   width: "30px",
// // //                 }}
// // //               />
// // //               How Stacia Can Help
// // //             </button>
// // //           )}

// // //           {/* Help Page Section */}
// // //           {showForm && showHelpPage && caseStudy.helpbox && (
// // //             <div className="help-section">
// // //               <div className="help-container" onWheel={handleWheel} ref={popupRef}>
// // //                 <div className="help-sidebar">
// // //                   <img
// // //                     src={loading}
// // //                     alt="Loading"
// // //                     style={{
// // //                       width: "30px",
// // //                     }}
// // //                   />
// // //                   <h2>How Stacia Can Help</h2>

// // //                   {/* Tabs */}
// // //                   <div className="help-tabs">
// // //                     {caseStudy.helpbox.tabs.map((tab, index) => (
// // //                       <button
// // //                         key={index}
// // //                         className={activeTab === tab ? "active" : ""}
// // //                         onClick={() => {
// // //                           setActiveTab(tab);
// // //                           setHoveredTitle(null); // Reset hovered title when switching tabs
// // //                         }}
// // //                       >
// // //                         {tab}
// // //                       </button>
// // //                     ))}
// // //                   </div>

// // //                   {/* Titles List */}
// // //                   {activeTab && (
// // //                     <ul className="help-links">
// // //                       {filteredCards.map((card, index) => (
// // //                         <li
// // //                           key={index}
// // //                           className={hoveredTitle === card.title ? "active" : ""}
// // //                           onMouseEnter={() => setHoveredTitle(card.title)}
// // //                           onMouseLeave={() => setHoveredTitle(null)}
// // //                         >
// // //                           {card.title}
// // //                         </li>
// // //                       ))}
// // //                     </ul>
// // //                   )}
// // //                 </div>

// // //                 {/* Help Card Section (Right Side) */}
// // //                 <div className="help-card-section">
// // //                   {displayedCard ? (
// // //                     <div className="help-card">
// // //                       <img src={displayedCard.img} alt={displayedCard.title} />
// // //                       <h3>{displayedCard.title}</h3>
// // //                       <p>{displayedCard.description}</p>
// // //                       <a href={displayedCard.link}>Know more →</a>
// // //                     </div>
// // //                   ) : (
// // //                     <p>No cards available for this tab.</p>
// // //                   )}
// // //                 </div>

// // //                 {/* Close Button */}
// // //                 <button
// // //                   className="help-close-btn"
// // //                   onClick={() => {
// // //                     setShowHelpPage(false);
// // //                     setShowForm(false);
// // //                     setHoveredTitle(null); // Reset on close
// // //                   }}
// // //                 >
// // //                   <IoMdClose />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Rest of the sections remain unchanged */}
// // //           {/* Case Analysis */}
// // //           <div className="development-process">
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseAnalysis.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.des3}
// // //             </p>
// // //             {/* Challenges */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseAnalysis.title1}
// // //             </h2>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.CaseAnalysis.Challenges.map((feature, index) => (
// // //                 <li key={index} className="li-text">{feature}</li>
// // //               ))}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.des4}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.des5}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.des6}
// // //             </p>

// // //             {/* Proposed Solution */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseAnalysis.ProposedSolution.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.ProposedSolution.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.CaseAnalysis.ProposedSolution.benefits.map(
// // //                 (benefits, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{benefits.highlight}:</span>{" "}
// // //                     {benefits.text}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.ProposedSolution.des7}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.ProposedSolution.des8}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.ProposedSolution.des9}
// // //             </p>

// // //             {/* Key Mechanized Processes */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.title}
// // //             </h2>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.Processes.map(
// // //                 (Processes, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{Processes.Process}:</span>{" "}
// // //                     {Processes.Description}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>

// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des10}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des11}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des12}
// // //             </p>

// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des13}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des14}
// // //             </p>

// // //             {/* Statistics */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.Statistics.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.Statistics.condent.MarketGrowth.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {Object.values(caseStudy.Statistics.condent).map(
// // //                 (feature, index) => (
// // //                   <li key={index} className="li-text">
// // //                     {feature.Description || "No feature description"}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>

// // //             {/* Economic Impact */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.EconomicImpact.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.EconomicImpact.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.EconomicImpact.Impacts.map((Impacts, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{Impacts.highlight}:</span>{" "}
// // //                   {Impacts.text}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.EconomicImpact.description2}
// // //             </p>

// // //             {/* ChallengesandBarriers */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.ChallengesandBarriers.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.ChallengesandBarriers.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.ChallengesandBarriers.Impacts.map((Impacts, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{Impacts.highlight}:</span>{" "}
// // //                   {Impacts.text}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.ChallengesandBarriers.description2}
// // //             </p>

// // //             {/* Strategies to Overcome Barriers */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.StrategiesToOvercome.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.StrategiesToOvercome.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.StrategiesToOvercome.Strategies.map(
// // //                 (Strategies, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{Strategies.strategy}:</span>{" "}
// // //                     {Strategies.description}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>

// // //             {/* Future Trends */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.FutureTrends.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.FutureTrends.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.FutureTrends.Trends.map((Trends, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{Trends.technology}:</span>{" "}
// // //                   {Trends.description}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* Impact on Employment */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.ImpactOnEmployment.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.ImpactOnEmployment.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.ImpactOnEmployment.JobDisplacement.map(
// // //                 (JobDisplacement, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{JobDisplacement.area}:</span>{" "}
// // //                     {JobDisplacement.description}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.ImpactOnEmployment.JustCreation.map((JustCreation, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{JustCreation.area}</span>: {JustCreation.description}
// // //                   <ul className="problem-statement-para2">
// // //                     {JustCreation.job.map((job, subIndex) => (
// // //                       <li key={subIndex} className="li-text">
// // //                         <span className="highlight">{job.strategy}</span> {job.description}
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.ImpactOnEmployment.JustTransitionStrategies.map((JustTransitionStrategies, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{JustTransitionStrategies.area}</span>: {JustTransitionStrategies.description}
// // //                   <ul className="problem-statement-para2">
// // //                     {JustTransitionStrategies.job.map((job, subIndex) => (
// // //                       <li key={subIndex} className="li-text">
// // //                         <span className="highlight">{job.strategy}</span> {job.description}
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* Regional Variations Section */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.RegionalVariations.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.RegionalVariations.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.RegionalVariations.AdoptionFactors.map((AdoptionFactor, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{AdoptionFactor.factor}:</span> {AdoptionFactor.description}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* Case Studies Section */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseStudies.title}
// // //             </h2>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.CaseStudies.Case.map((item, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{item.Region}:</span> {item.Description}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* Challenges in Regions with Low Adoption Rates Section */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.ChallengesInRegion.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.ChallengesInRegion.ChallengesDescription}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.ChallengesInRegion.ChallengesInLowAdoptionRegions.map((challenge, index) => (
// // //                 <li key={index} className="li-text">{challenge}</li>
// // //               ))}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.ChallengesInRegion.ChallengesDescription1}
// // //             </p>

// // //             {/* Environmental Impact */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.EnvironmentalImpact.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.EnvironmentalImpact.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.EnvironmentalImpact.Impacts.map((Impacts, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{Impacts.impact}:</span>{" "}
// // //                   {Impacts.description}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* Quality and Safety */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.QualityAndSafety.title}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.QualityAndSafety.Description}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.QualityAndSafety.Improvements.map(
// // //                 (Improvements, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{Improvements.process}:</span>{" "}
// // //                     {Improvements.description}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>

// // //             {/* Farmer Perspectives Section */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.FarmerPerspectives.title}
// // //             </h2>

// // //             <p className="problem-statement-para1">
// // //               {caseStudy.FarmerPerspectives.Description}
// // //             </p>

// // //             {/* Benefits for Farmers */}
// // //             <h3 className="problem-statement-subheading">
// // //               {caseStudy.FarmerPerspectives.BenefitsForFarmers.title}
// // //             </h3>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.FarmerPerspectives.BenefitsForFarmers.benifits.map((item, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{item.benefit}:</span> {item.description}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* Challenges Faced by Farmers */}
// // //             <h3 className="problem-statement-subheading">
// // //               {caseStudy.FarmerPerspectives.ChallengesFacedByFarmers.title}
// // //             </h3>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.FarmerPerspectives.ChallengesFacedByFarmers.challenges.map((item, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{item.challenge}:</span> {item.description}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* Strategies to Promote Adoption */}
// // //             {caseStudy.FarmerPerspectives.StrategiesToPromoteAdoptionAmongSmallholderFarmers.title && (
// // //               <h3 className="problem-statement-subheading">
// // //                 {caseStudy.FarmerPerspectives.StrategiesToPromoteAdoptionAmongSmallholderFarmers.title}
// // //               </h3>
// // //             )}
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.FarmerPerspectives.StrategiesToPromoteAdoptionAmongSmallholderFarmers.strategies.map((item, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{item.strategy}:</span> {item.description}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //           </div>

// // //           {/* Development Process */}
// // //           <div className="development-process">
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.developmentProcess.title}
// // //             </h2>
// // //             {caseStudy.developmentProcess.sections.map((section, index) => (
// // //               <div key={index}>
// // //                 <h3 className={section.subtitleClass || ""}>
// // //                   {section.subtitle}
// // //                 </h3>
// // //                 {section.paragraphs.map((para, paraIndex) => (
// // //                   <p
// // //                     key={paraIndex}
// // //                     className={para.className || "test-selection-blue"}
// // //                   >
// // //                     {para.text}
// // //                   </p>
// // //                 ))}
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Challenges Faced */}
// // //           <div className="Challenges-Faced">
// // //             <h2>{caseStudy.challengesFaced.title}</h2>
// // //             <p>{caseStudy.challengesFaced.description}</p>
// // //             <ul>
// // //               {caseStudy.challengesFaced.issues.map((issues, index) => (
// // //                 <li key={index} className="li-text">
// // //                   {issues.highlight ? (
// // //                     <>
// // //                       <span className="highlight">{issues.highlight}:</span>{" "}
// // //                       {issues.text}
// // //                     </>
// // //                   ) : (
// // //                     issues.text
// // //                   )}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* Impact and Benefits */}
// // //           <div className="impact-benefits">
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.impactBenefits.title}
// // //             </h2>
// // //             <ul>
// // //               {caseStudy.impactBenefits.benefits.map((benefits, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{benefits.highlight}:</span>{" "}
// // //                   {benefits.text}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           <div className="single-casestudy-layout1-title test-seclection-blue">
// // //             <p>Industries</p>
// // //           </div>
// // //           {caseStudy.gallery && caseStudy.gallery.length > 0 && (
// // //             <div className="single-casestudy-layout2">
// // //               {caseStudy.gallery.map((img, index) => (
// // //                 <div key={index}>
// // //                   <img
// // //                     src={img}
// // //                     alt={`Gallery ${index}`}
// // //                     style={{
// // //                       width: "100%",
// // //                       height: "100%",
// // //                       objectFit: "cover",
// // //                     }}
// // //                   />
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}

// // //           <div className="challenges">
// // //             <div className="single-casestudy-layout3">
// // //               <div className="conclusion">
// // //                 {caseStudy.challenges.map((challenge, index) => (
// // //                   <div key={index}>
// // //                     <div className="single-casestudy-layout3-title test-seclection-blue">
// // //                       {challenge.challengestitle}
// // //                     </div>
// // //                     <p className="test-seclection-blue-challenge">
// // //                       {challenge.description}
// // //                     </p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Other Case Studies Section */}
// // //         <div className="other-case-studies">
// // //           <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //             Other Case Studies
// // //           </h2>
// // //           <div className="other-case-studies-grid">
// // //             {otherCaseStudies.map((study, index) => (
// // //               <div className="other-case-study-card" key={index}>
// // //                 <Link to={`/case-study/single-caseStudy/${study.id}`}>
// // //                   <img
// // //                     src={
// // //                       study.imageURL ||
// // //                       "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
// // //                     }
// // //                     alt={study.title}
// // //                     style={{
// // //                       width: "100%",
// // //                       height: "280px",
// // //                       objectFit: "cover",
// // //                       borderRadius: "8px 8px 0 0",
// // //                     }}
// // //                     onClick={() => window.scrollTo(0, 0)}
// // //                   />
// // //                 </Link>
// // //                 <div className="other-case-study-content">
// // //                   <h3>{study.title}</h3>
// // //                   <p>
// // //                     {study.overview.description.length > 100
// // //                       ? `${study.overview.description.substring(0, 100)}...`
// // //                       : study.overview.description}
// // //                   </p>
// // //                   <Link
// // //                     to={`/case-study/single-caseStudy/${study.id}`}
// // //                     onClick={() => window.scrollTo(0, 0)}
// // //                     className="know-more-link"
// // //                   >
// // //                     Know more →
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <Footer />
// // //       <MobileFooter />
// // //     </>
// // //   );
// // // }

// // // export default SingleCaseStudy;

// // // import React, { useEffect, useState, useRef } from "react";
// // // import { useParams, Link } from "react-router-dom";
// // // import "../styles/SingleCaseStudy.css";
// // // import NavBar from "../components/NavBar";
// // // import SideBar from "../components/SideBar";
// // // import Footer from "../components/Footer";
// // // import MobileFooter from "../components/MobileFooter";
// // // import CaseStudyAudio from "../components/CaseStudy/CaseStudyaudio";
// // // import data from "../Data/SingleCaseStudy.json";
// // // import loading from "../assets/loading.png";
// // // import { IoMdClose } from "react-icons/io";

// // // import SuggestionCasestudys from "../components/ReUsableComp/SuggestionCasestudys";
// // // import SuggestionProjects from "../components/ReUsableComp/SuggestionProjects";
// // // import SuggestionProducts from "../components/ReUsableComp/SuggestionProducts";
// // // import SuggestionService from "../components/ReUsableComp/SuggestionService";
// // // import SuggestionArticles from "../components/ReUsableComp/SuggestionArticles";

// // // function SingleCaseStudy() {
// // //   const [caseStudy, setCaseStudy] = useState(null);
// // //   const [otherCaseStudies, setOtherCaseStudies] = useState([]);
// // //   const [activeTab, setActiveTab] = useState(null);
// // //   const [hoveredTitle, setHoveredTitle] = useState(null);
// // //   const { id } = useParams();
// // //   const [showButton, setShowButton] = useState(false);
// // //   const [showHelpPage, setShowHelpPage] = useState(false);
// // //   const [showForm, setShowForm] = useState(false);
// // //   const popupRef = useRef(null);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const scrollY = window.scrollY || document.documentElement.scrollTop;
// // //       const windowHeight = window.innerHeight;
// // //       const documentHeight = document.documentElement.scrollHeight;
// // //       const bottomOffset = 800;
// // //       if (scrollY > 4200 && scrollY + windowHeight < documentHeight - bottomOffset) {
// // //         setShowButton(true);
// // //       } else {
// // //         setShowButton(false);
// // //       }
// // //     };
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const handleClick = () => {
// // //     setShowHelpPage(true);
// // //     setShowForm(true);
// // //     if (caseStudy?.helpbox?.tabs?.length > 0) {
// // //       setActiveTab(caseStudy.helpbox.tabs[0]);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (showForm) {
// // //       const scrollY = window.scrollY;
// // //       document.body.style.position = "fixed";
// // //       document.body.style.top = `-${scrollY}px`;
// // //       document.body.style.width = "100%";
// // //       document.body.style.overflow = "hidden";
// // //     } else {
// // //       const scrollY = document.body.style.top;
// // //       document.body.style.position = "";
// // //       document.body.style.top = "";
// // //       document.body.style.width = "";
// // //       document.body.style.overflow = "auto";
// // //       window.scrollTo(0, parseInt(scrollY || "0") * -1);
// // //     }
// // //     return () => {
// // //       document.body.style.position = "";
// // //       document.body.style.top = "";
// // //       document.body.style.width = "";
// // //       document.body.style.overflow = "auto";
// // //     };
// // //   }, [showForm]);

// // //   const handleWheel = (e) => {
// // //     const container = e.currentTarget;
// // //     if (container.scrollHeight > container.clientHeight) {
// // //       e.preventDefault();
// // //       e.stopPropagation();
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     let selectedCaseStudy = null;
// // //     let allCaseStudies = [];

// // //     data.singlecasestudy.forEach((category) => {
// // //       category.data.forEach((study) => {
// // //         if (study.id === id) {
// // //           selectedCaseStudy = study;
// // //         }
// // //         allCaseStudies.push(study);
// // //       });
// // //     });

// // //     if (selectedCaseStudy) {
// // //       setCaseStudy(selectedCaseStudy);
// // //       const others = allCaseStudies.filter((study) => study.id !== id).slice(0, 5);
// // //       setOtherCaseStudies(others);
// // //     } else {
// // //       console.error("Case study not found for ID:", id);
// // //     }
// // //   }, [id]);

// // //   if (!caseStudy) {
// // //     return (
// // //       <div className="loading-container">
// // //         {/* <img src={loading} alt="Loading" style={{ width: "50px" }} /> */}
// // //         <p>Loading case study...</p>
// // //       </div>
// // //     );
// // //   }

// // //   const filteredCards = caseStudy?.helpbox?.cards?.filter((card) => card.tab === activeTab) || [];
// // //   const displayedCard =
// // //     filteredCards.find((card) => card.title === hoveredTitle) ||
// // //     filteredCards[0] ||
// // //     null;

// // //   return (
// // //     <>
// // //       <NavBar />
// // //       <SideBar />
// // //       <div>
// // //         <div
// // //           className="single-casestudy-heading-card-container"
// // //           style={{
// // //             backgroundImage: `url(${caseStudy.backgroundImage || ""})`,
// // //           }}
// // //         >
// // //           <div className="single-casestudy-heading test-seclection-white">
// // //             {caseStudy.title || "Untitled Case Study"}
// // //           </div>
// // //         </div>

// // //         <div className="single-casestudy-content-container">
// // //           <div>
// // //             {/* <CaseStudyAudio /> */}
// // //             <CaseStudyAudio caseStudyId={id} />
// // //           </div>
// // //           <div>
// // //             <div className="single-casestudy-layout1-title test-seclection-blue">
// // //               {caseStudy.overview?.overviewtitle || "Overview"}
// // //             </div>
// // //             <p className="single-casestudy-layout1-des test-seclection-blue">
// // //               {caseStudy.overview?.description || "No description available."}
// // //             </p>

// // //             <div className="single-casestudy-layout1-img-content-container">
// // //               {caseStudy.imageContent?.imageSrc && (
// // //                 <div>
// // //                   <img
// // //                     src={caseStudy.imageURL || caseStudy.imageContent.imageSrc}
// // //                     alt="Overview"
// // //                     style={{
// // //                       width: "100%",
// // //                       height: "100%",
// // //                       objectFit: "cover",
// // //                       userSelect: "none",
// // //                     }}
// // //                   />
// // //                 </div>
// // //               )}
// // //               <div>
// // //                 <h4 className="background">
// // //                   {caseStudy.imageContent?.imagetitle || "Background"}
// // //                 </h4>
// // //                 {caseStudy.imageContent?.content?.map((text, index) => (
// // //                   <p key={index} className="test-seclection-blue-img-cont">
// // //                     {text}
// // //                   </p>
// // //                 )) || <p>No background content available.</p>}
// // //               </div>
// // //             </div>
// // //             <p className="single-casestudy-layout1-des test-seclection-blue">
// // //               {caseStudy.Backgrounddes?.description1 || ""}
// // //             </p>
// // //             <p className="single-casestudy-layout1-des test-seclection-blue">
// // //               {caseStudy.Backgrounddes?.description2 || ""}
// // //             </p>
// // //           </div>

// // //           {/* Problem Statement */}
// // //           <div className="problem-statement">
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.problemStatement?.title || "Problem Statement"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.problemStatement?.description ||
// // //                 "No description available."}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.problemStatement?.issues?.map((issue, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{issue.highlight}:</span>{" "}
// // //                   {issue.text}
// // //                 </li>
// // //               )) || <li>No issues listed.</li>}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.problemStatement?.des1 || ""}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.problemStatement?.des2 || ""}
// // //             </p>
// // //           </div>

// // //           {showButton && !showHelpPage && (
// // //             <button onClick={handleClick} className="help-button">
// // //               <img src={loading} alt="Loading" style={{ width: "30px" }} />
// // //               How Stacia Can Help
// // //             </button>
// // //           )}

// // //           {/* Help Page Section */}
// // //           {showForm && showHelpPage && caseStudy.helpbox && (
// // //             <div className="help-section">
// // //               <div
// // //                 className="help-container"
// // //                 onWheel={handleWheel}
// // //                 ref={popupRef}
// // //               >
// // //                 <div className="help-sidebar">
// // //                   <img src={loading} alt="Loading" style={{ width: "30px" }} />
// // //                   <h2>How Stacia Can Help</h2>
// // //                   <div className="help-tabs">
// // //                     {caseStudy.helpbox?.tabs?.map((tab, index) => (
// // //                       <button
// // //                         key={index}
// // //                         className={activeTab === tab ? "active" : ""}
// // //                         onClick={() => {
// // //                           setActiveTab(tab);
// // //                           setHoveredTitle(null);
// // //                         }}
// // //                       >
// // //                         {tab}
// // //                       </button>
// // //                     )) || <p>No tabs available.</p>}
// // //                   </div>
// // //                   {activeTab && (
// // //                     <ul className="help-links">
// // //                       {filteredCards.map((card, index) => (
// // //                         <li
// // //                           key={index}
// // //                           className={
// // //                             hoveredTitle === card.title ? "active" : ""
// // //                           }
// // //                           onMouseEnter={() => setHoveredTitle(card.title)}
// // //                           onMouseLeave={() => setHoveredTitle(null)}
// // //                         >
// // //                           {card.title}
// // //                         </li>
// // //                       ))}
// // //                     </ul>
// // //                   )}
// // //                 </div>
// // //                 <div className="help-card-section">
// // //                   {displayedCard ? (
// // //                     <div className="help-card">
// // //                       <img src={displayedCard.img} alt={displayedCard.title} />
// // //                       <h3>{displayedCard.title}</h3>
// // //                       <p>{displayedCard.description}</p>
// // //                       <a href={displayedCard.link}>Know more →</a>
// // //                     </div>
// // //                   ) : (
// // //                     <p>No cards available for this tab.</p>
// // //                   )}
// // //                 </div>
// // //                 <button
// // //                   className="help-close-btn"
// // //                   onClick={() => {
// // //                     setShowHelpPage(false);
// // //                     setShowForm(false);
// // //                     setHoveredTitle(null);
// // //                   }}
// // //                 >
// // //                   <IoMdClose />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Case Analysis */}
// // //           <div className="development-process">
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseAnalysis?.title || "Case Analysis"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis?.des3 || ""}
// // //             </p>
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseAnalysis?.title1 || "Challenges"}
// // //             </h2>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.CaseAnalysis?.Challenges?.map((feature, index) => (
// // //                 <li key={index} className="li-text">
// // //                   {feature}
// // //                 </li>
// // //               )) || <li>No challenges listed.</li>}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis?.des4 || ""}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis?.des5 || ""}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis?.des6 || ""}
// // //             </p>

// // //             {/* Proposed Solution */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseAnalysis?.ProposedSolution?.title ||
// // //                 "Proposed Solution"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis?.ProposedSolution?.Description || ""}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.CaseAnalysis?.ProposedSolution?.benefits?.map(
// // //                 (benefit, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{benefit.highlight}:</span>{" "}
// // //                     {benefit.text}
// // //                   </li>
// // //                 )
// // //               ) || <li>No benefits listed.</li>}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis?.ProposedSolution?.des7 || ""}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis?.ProposedSolution?.des8 || ""}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis?.ProposedSolution?.des9 || ""}
// // //             </p>

// // //             {/* Key Mechanized Processes */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.title ||
// // //                 "Key Processes"}
// // //             </h2>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.Processes?.map(
// // //                 (process, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{process.Process}:</span>{" "}
// // //                     {process.Description}
// // //                   </li>
// // //                 )
// // //               ) || <li>No processes listed.</li>}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.des10 || ""}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.des11 || ""}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.des12 || ""}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.des13 || ""}
// // //             </p>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.des14 || ""}
// // //             </p>

// // //             {/* Statistics */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.Statistics?.title || "Statistics"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.Statistics?.condent?.MarketGrowth?.Description || ""}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {(caseStudy.Statistics?.condent &&
// // //                 Object.values(caseStudy.Statistics.condent).map(
// // //                   (feature, index) => (
// // //                     <li key={index} className="li-text">
// // //                       {feature.Description || "No feature description"}
// // //                     </li>
// // //                   )
// // //                 )) || <li>No statistics available.</li>}
// // //             </ul>

// // //             {/* Economic Impact */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.EconomicImpact?.title || "Economic Impact"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.EconomicImpact?.Description || ""}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.EconomicImpact?.Impacts?.map((impact, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{impact.highlight}:</span>{" "}
// // //                   {impact.text}
// // //                 </li>
// // //               )) || <li>No impacts listed.</li>}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.EconomicImpact?.description2 || ""}
// // //             </p>

// // //             {/* Challenges and Barriers */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.ChallengesandBarriers?.title ||
// // //                 "Challenges and Barriers"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.ChallengesandBarriers?.Description || ""}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.ChallengesandBarriers?.Impacts?.map(
// // //                 (impact, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{impact.highlight}:</span>{" "}
// // //                     {impact.text}
// // //                   </li>
// // //                 )
// // //               ) || <li>No challenges listed.</li>}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.ChallengesandBarriers?.description2 || ""}
// // //             </p>

// // //             {/* Strategies to Overcome Barriers */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.StrategiesToOvercome?.title ||
// // //                 "Strategies to Overcome"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.StrategiesToOvercome?.Description || ""}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.StrategiesToOvercome?.Strategies?.map(
// // //                 (strategy, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{strategy.strategy}:</span>{" "}
// // //                     {strategy.description}
// // //                   </li>
// // //                 )
// // //               ) || <li>No strategies listed.</li>}
// // //             </ul>

// // //             {/* Future Trends */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.FutureTrends?.title || "Future Trends"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.FutureTrends?.Description || ""}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.FutureTrends?.Trends?.map((trend, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{trend.technology}:</span>{" "}
// // //                   {trend.description}
// // //                 </li>
// // //               )) || <li>No trends listed.</li>}
// // //             </ul>

// // //             {/* Impact on Employment */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.ImpactOnEmployment?.title || "Impact on Employment"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.ImpactOnEmployment?.Description || ""}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.ImpactOnEmployment?.JobDisplacement?.map(
// // //                 (job, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{job.area}:</span>{" "}
// // //                     {job.description}
// // //                   </li>
// // //                 )
// // //               ) || <li>No job displacement details.</li>}
// // //             </ul>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.ImpactOnEmployment?.JustCreation?.map(
// // //                 (creation, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{creation.area}</span>:{" "}
// // //                     {creation.description}
// // //                     <ul className="problem-statement-para2">
// // //                       {creation.job?.map((job, subIndex) => (
// // //                         <li key={subIndex} className="li-text">
// // //                           <span className="highlight">{job.strategy}</span>{" "}
// // //                           {job.description}
// // //                         </li>
// // //                       )) || <li>No jobs listed.</li>}
// // //                     </ul>
// // //                   </li>
// // //                 )
// // //               ) || <li>No job creation details.</li>}
// // //             </ul>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.ImpactOnEmployment?.JustTransitionStrategies?.map(
// // //                 (strategy, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{strategy.area}</span>:{" "}
// // //                     {strategy.description}
// // //                     <ul className="problem-statement-para2">
// // //                       {strategy.job?.map((job, subIndex) => (
// // //                         <li key={subIndex} className="li-text">
// // //                           <span className="highlight">{job.strategy}</span>{" "}
// // //                           {job.description}
// // //                         </li>
// // //                       )) || <li>No strategies listed.</li>}
// // //                     </ul>
// // //                   </li>
// // //                 )
// // //               ) || <li>No transition strategies listed.</li>}
// // //             </ul>

// // //             {/* Regional Variations */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.RegionalVariations?.title || "Regional Variations"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.RegionalVariations?.Description || ""}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.RegionalVariations?.AdoptionFactors?.map(
// // //                 (factor, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{factor.factor}:</span>{" "}
// // //                     {factor.description}
// // //                   </li>
// // //                 )
// // //               ) || <li>No adoption factors listed.</li>}
// // //             </ul>

// // //             {/* Case Studies */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.CaseStudies?.title || "Case Studies"}
// // //             </h2>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.CaseStudies?.Case?.map((item, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{item.Region}:</span>{" "}
// // //                   {item.Description}
// // //                 </li>
// // //               )) || <li>No case studies available.</li>}
// // //             </ul>

// // //             {/* Challenges in Regions with Low Adoption Rates */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.ChallengesInRegion?.title || "Challenges in Regions"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.ChallengesInRegion?.ChallengesDescription || ""}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.ChallengesInRegion?.ChallengesInLowAdoptionRegions?.map(
// // //                 (challenge, index) => (
// // //                   <li key={index} className="li-text">
// // //                     {challenge}
// // //                   </li>
// // //                 )
// // //               ) || <li>No challenges listed.</li>}
// // //             </ul>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.ChallengesInRegion?.ChallengesDescription1 || ""}
// // //             </p>

// // //             {/* Environmental Impact */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.EnvironmentalImpact?.title || "Environmental Impact"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.EnvironmentalImpact?.Description || ""}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.EnvironmentalImpact?.Impacts?.map((impact, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{impact.impact}:</span>{" "}
// // //                   {impact.description}
// // //                 </li>
// // //               )) || <li>No impacts listed.</li>}
// // //             </ul>

// // //             {/* Quality and Safety */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.QualityAndSafety?.title || "Quality and Safety"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.QualityAndSafety?.Description || ""}
// // //             </p>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.QualityAndSafety?.Improvements?.map(
// // //                 (improvement, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{improvement.process}:</span>{" "}
// // //                     {improvement.description}
// // //                   </li>
// // //                 )
// // //               ) || <li>No improvements listed.</li>}
// // //             </ul>

// // //             {/* Farmer Perspectives */}
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.FarmerPerspectives?.title ||
// // //                 "Stakeholder Perspectives"}
// // //             </h2>
// // //             <p className="problem-statement-para1">
// // //               {caseStudy.FarmerPerspectives?.Description || ""}
// // //             </p>
// // //             <h3 className="problem-statement-subheading">
// // //               {caseStudy.FarmerPerspectives?.BenefitsForFarmers?.title ||
// // //                 "Benefits"}
// // //             </h3>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.FarmerPerspectives?.BenefitsForFarmers?.benifits?.map(
// // //                 (item, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{item.benefit}:</span>{" "}
// // //                     {item.description}
// // //                   </li>
// // //                 )
// // //               ) || <li>No benefits listed.</li>}
// // //             </ul>
// // //             <h3 className="problem-statement-subheading">
// // //               {caseStudy.FarmerPerspectives?.ChallengesFacedByFarmers?.title ||
// // //                 "Challenges"}
// // //             </h3>
// // //             <ul className="problem-statement-para2">
// // //               {caseStudy.FarmerPerspectives?.ChallengesFacedByFarmers?.challenges?.map(
// // //                 (item, index) => (
// // //                   <li key={index} className="li-text">
// // //                     <span className="highlight">{item.challenge}:</span>{" "}
// // //                     {item.description}
// // //                   </li>
// // //                 )
// // //               ) || <li>No challenges listed.</li>}
// // //             </ul>
// // //             {caseStudy.FarmerPerspectives
// // //               ?.StrategiesToPromoteAdoptionAmongSmallholderFarmers?.strategies
// // //               ?.length > 0 && (
// // //               <>
// // //                 <h3 className="problem-statement-subheading">
// // //                   {caseStudy.FarmerPerspectives
// // //                     ?.StrategiesToPromoteAdoptionAmongSmallholderFarmers
// // //                     ?.title || "Strategies"}
// // //                 </h3>
// // //                 <ul className="problem-statement-para2">
// // //                   {caseStudy.FarmerPerspectives?.StrategiesToPromoteAdoptionAmongSmallholderFarmers?.strategies?.map(
// // //                     (item, index) => (
// // //                       <li key={index} className="li-text">
// // //                         <span className="highlight">{item.strategy}:</span>{" "}
// // //                         {item.description}
// // //                       </li>
// // //                     )
// // //                   ) || <li>No strategies listed.</li>}
// // //                 </ul>
// // //               </>
// // //             )}
// // //           </div>

// // //           {/* Development Process */}
// // //           <div className="development-process">
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.developmentProcess?.title || "Development Process"}
// // //             </h2>
// // //             {caseStudy.developmentProcess?.sections?.map((section, index) => (
// // //               <div key={index}>
// // //                 <h3 className={section.subtitleClass || ""}>
// // //                   {section.subtitle}
// // //                 </h3>
// // //                 {section.paragraphs?.map((para, paraIndex) => (
// // //                   <p
// // //                     key={paraIndex}
// // //                     className={para.className || "test-selection-blue"}
// // //                   >
// // //                     {para.text}
// // //                   </p>
// // //                 )) || <p>No paragraphs available.</p>}
// // //               </div>
// // //             )) || <p>No development process sections available.</p>}
// // //           </div>

// // //           {/* Challenges Faced */}
// // //           <div className="Challenges-Faced">
// // //             <h2>{caseStudy.challengesFaced?.title || "Challenges Faced"}</h2>
// // //             <p>{caseStudy.challengesFaced?.description || ""}</p>
// // //             <ul>
// // //               {caseStudy.challengesFaced?.issues?.map((issue, index) => (
// // //                 <li key={index} className="li-text">
// // //                   {issue.highlight ? (
// // //                     <>
// // //                       <span className="highlight">{issue.highlight}:</span>{" "}
// // //                       {issue.text}
// // //                     </>
// // //                   ) : (
// // //                     issue.text
// // //                   )}
// // //                 </li>
// // //               )) || <li>No issues listed.</li>}
// // //             </ul>
// // //           </div>

// // //           {/* Impact and Benefits */}
// // //           <div className="impact-benefits">
// // //             <h2 className="single-casestudy-layout1-title test-selection-blue">
// // //               {caseStudy.impactBenefits?.title || "Impact and Benefits"}
// // //             </h2>
// // //             <ul>
// // //               {caseStudy.impactBenefits?.benefits?.map((benefit, index) => (
// // //                 <li key={index} className="li-text">
// // //                   <span className="highlight">{benefit.highlight}:</span>{" "}
// // //                   {benefit.text}
// // //                 </li>
// // //               )) || <li>No benefits listed.</li>}
// // //             </ul>
// // //           </div>

// // //           <div className="single-casestudy-layout1-title test-seclection-blue">
// // //             <p>Industries</p>
// // //           </div>
// // //           {caseStudy.gallery?.length > 0 && (
// // //             <div className="single-casestudy-layout2">
// // //               {caseStudy.gallery.map((img, index) => (
// // //                 <div key={index}>
// // //                   <img
// // //                     src={img}
// // //                     alt={`Gallery ${index}`}
// // //                     style={{
// // //                       width: "100%",
// // //                       height: "100%",
// // //                       objectFit: "cover",
// // //                     }}
// // //                   />
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}

// // //           <div className="challenges">
// // //             <div className="single-casestudy-layout3">
// // //               <div className="conclusion">
// // //                 {caseStudy.challenges?.map((challenge, index) => (
// // //                   <div key={index}>
// // //                     <div className="single-casestudy-layout3-title test-seclection-blue">
// // //                       {challenge.challengestitle}
// // //                     </div>
// // //                     <p className="test-seclection-blue-challenge">
// // //                       {challenge.description}
// // //                     </p>
// // //                   </div>
// // //                 )) || <p>No conclusion available.</p>}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Other Case Studies Section */}
// // //        <SuggestionCasestudys/>
// // //       </div>

// // //       <Footer />
// // //       <MobileFooter />
// // //     </>
// // //   );
// // // }

// // // export default SingleCaseStudy;


// import React, { useEffect, useState, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import "../styles/SingleCaseStudy.css";
// import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";
// import Footer from "../components/Footer";
// import MobileFooter from "../components/MobileFooter";
// import CaseStudyAudio from "../components/CaseStudy/CaseStudyaudio";
// import data from "../Data/SingleCaseStudy.json";
// import loading from "../assets/loading.png";
// import { IoMdClose } from "react-icons/io";

// import SuggestionCasestudys from "../components/ReUsableComp/SuggestionCasestudys";
// import SuggestionProjects from "../components/ReUsableComp/SuggestionProjects";
// import SuggestionProducts from "../components/ReUsableComp/SuggestionProducts";
// import SuggestionService from "../components/ReUsableComp/SuggestionService";
// import SuggestionArticles from "../components/ReUsableComp/SuggestionArticles";

// function SingleCaseStudy() {
//   const [caseStudy, setCaseStudy] = useState(null);
//   const [otherCaseStudies, setOtherCaseStudies] = useState([]);
//   const [activeTab, setActiveTab] = useState(null);
//   const [hoveredTitle, setHoveredTitle] = useState(null);
//   const { id } = useParams();
//   const [showButton, setShowButton] = useState(false);
//   const [showHelpPage, setShowHelpPage] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const popupRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY || document.documentElement.scrollTop;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.documentElement.scrollHeight;
//       const bottomOffset = 800;
//       if (
//         scrollY > 4200 &&
//         scrollY + windowHeight < documentHeight - bottomOffset
//       ) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleClick = () => {
//     setShowHelpPage(true);
//     setShowForm(true);
//     if (caseStudy?.helpbox?.tabs?.length > 0) {
//       setActiveTab(caseStudy.helpbox.tabs[0]);
//     }
//   };

//   useEffect(() => {
//     if (showForm) {
//       const scrollY = window.scrollY;
//       document.body.style.position = "fixed";
//       document.body.style.top = `-${scrollY}px`;
//       document.body.style.width = "100%";
//       document.body.style.overflow = "hidden";
//     } else {
//       const scrollY = document.body.style.top;
//       document.body.style.position = "";
//       document.body.style.top = "";
//       document.body.style.width = "";
//       document.body.style.overflow = "auto";
//       window.scrollTo(0, parseInt(scrollY || "0") * -1);
//     }
//     return () => {
//       document.body.style.position = "";
//       document.body.style.top = "";
//       document.body.style.width = "";
//       document.body.style.overflow = "auto";
//     };
//   }, [showForm]);

//   const handleWheel = (e) => {
//     const container = e.currentTarget;
//     if (container.scrollHeight > container.clientHeight) {
//       e.preventDefault();
//       e.stopPropagation();
//     }
//   };

//   useEffect(() => {
//     let selectedCaseStudy = null;
//     let allCaseStudies = [];

//     data.singlecasestudy.forEach((category) => {
//       category.data.forEach((study) => {
//         if (study.id === id) {
//           selectedCaseStudy = study;
//         }
//         allCaseStudies.push(study);
//       });
//     });

//     if (selectedCaseStudy) {
//       setCaseStudy(selectedCaseStudy);
//       const others = allCaseStudies
//         .filter((study) => study.id !== id)
//         .slice(0, 5);
//       setOtherCaseStudies(others);
//     } else {
//       console.error("Case study not found for ID:", id);
//     }
//   }, [id]);

//   if (!caseStudy) {
//     return (
//       <div className="loading-container">
//         <p>Loading case study...</p>
//       </div>
//     );
//   }

//   const filteredCards =
//     caseStudy?.helpbox?.cards?.filter((card) => card.tab === activeTab) || [];
//   const displayedCard =
//     filteredCards.find((card) => card.title === hoveredTitle) ||
//     filteredCards[0] ||
//     null;

//   return (
//     <>
//       <NavBar />
//       <SideBar />
//       <div>
//         <div
//           className="case-study-header" // Changed from single-casestudy-heading-card-container
//           style={{
//             backgroundImage: `url(${caseStudy.backgroundImage || ""})`,
//           }}
//         >
//           <div className="case-study-title">
//             {" "}
//             {/* Changed from single-casestudy-heading test-seclection-white */}
//             {caseStudy.title || "Untitled Case Study"}
//           </div>
//         </div>

//         <div className="case-study-content">
//           {" "}
//           {/* Changed from single-casestudy-content-container */}
//           <div>
//             <CaseStudyAudio caseStudyId={id} />
//           </div>
//           <div>
//             <div className="case-study-overview-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.overview?.overviewtitle || "Overview"}
//             </div>
//             <p className="overview-description test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-des */}
//               {caseStudy.overview?.description || "No description available."}
//             </p>

//             <div className="overview-image-content">
//               {" "}
//               {/* Changed from single-casestudy-layout1-img-content-container */}
//               {caseStudy.imageContent?.imageSrc && (
//                 <div>
//                   <img
//                     src={caseStudy.imageURL || caseStudy.imageContent.imageSrc}
//                     alt="Overview"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       userSelect: "none",
//                     }}
//                   />
//                 </div>
//               )}
//               <div>
//                 <h4 className="background-title">
//                   {" "}
//                   {/* Changed from background */}
//                   {caseStudy.imageContent?.imagetitle || "Background"}
//                 </h4>
//                 {caseStudy.imageContent?.content?.map((text, index) => (
//                   <p key={index} className="background-content">
//                     {" "}
//                     {/* Changed from test-seclection-blue-img-cont */}
//                     {text}
//                   </p>
//                 )) || <p>No background content available.</p>}
//               </div>
//             </div>
//             <p className="background-description-1">
//               {" "}
//               {/* Changed from single-casestudy-layout1-des */}
//               {caseStudy.Backgrounddes?.description1 || ""}
//             </p>
//             <p className="background-description-2">
//               {" "}
//               {/* Changed from single-casestudy-layout1-des */}
//               {caseStudy.Backgrounddes?.description2 || ""}
//             </p>
//           </div>
//           {/* Problem Statement */}
//           <div className="problem-statement-section">
//             {" "}
//             {/* Changed from problem-statement */}
//             <h2 className="problem-statement-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.problemStatement?.title || "Problem Statement"}
//             </h2>
//             <p className="problem-statement-description">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.problemStatement?.description ||
//                 "No description available."}
//             </p>
//             <ul className="problem-statement-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.problemStatement?.issues?.map((issue, index) => (
//                 <li key={index} className="problem-statement-list-item">
//                   {" "}
//                   {/* Changed from li-text */}
//                   <span className="highlight">{issue.highlight}:</span>{" "}
//                   {issue.text}
//                 </li>
//               )) || <li>No issues listed.</li>}
//             </ul>
//             <p className="problem-statement-description-1">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.problemStatement?.des1 || ""}
//             </p>
//             <p className="problem-statement-description-2">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.problemStatement?.des2 || ""}
//             </p>
//           </div>
//           {showButton && !showHelpPage && (
//             <button onClick={handleClick} className="help-button">
//               <img src={loading} alt="Loading" style={{ width: "30px" }} />
//               How Stacia Can Help
//             </button>
//           )}
//           {/* Help Page Section */}
//           {showForm && showHelpPage && caseStudy.helpbox && (
//             <div className="help-section">
//               <div
//                 className="help-popup" // Changed from help-container
//                 onWheel={handleWheel}
//                 ref={popupRef}
//               >
//                 <div className="help-sidebar">
//                   <img src={loading} alt="Loading" style={{ width: "30px" }} />
//                   <h2>How Stacia Can Help</h2>
//                   <div className="help-tabs">
//                     {caseStudy.helpbox?.tabs?.map((tab, index) => (
//                       <button
//                         key={index}
//                         className={activeTab === tab ? "active" : ""}
//                         onClick={() => {
//                           setActiveTab(tab);
//                           setHoveredTitle(null);
//                         }}
//                       >
//                         {tab}
//                       </button>
//                     )) || <p>No tabs available.</p>}
//                   </div>
//                   {activeTab && (
//                     <ul className="help-links">
//                       {filteredCards.map((card, index) => (
//                         <li
//                           key={index}
//                           className={
//                             hoveredTitle === card.title ? "active" : ""
//                           }
//                           onMouseEnter={() => setHoveredTitle(card.title)}
//                           onMouseLeave={() => setHoveredTitle(null)}
//                         >
//                           {card.title}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//                 <div className="help-card-section">
//                   {displayedCard ? (
//                     <div className="help-card">
//                       <img src={displayedCard.img} alt={displayedCard.title} />
//                       <h3>{displayedCard.title}</h3>
//                       <p>{displayedCard.description}</p>
//                       <a href={displayedCard.link}>Know more →</a>
//                     </div>
//                   ) : (
//                     <p>No cards available for this tab.</p>
//                   )}
//                 </div>
//                 <button
//                   className="help-close-button" // Changed from help-close-btn
//                   onClick={() => {
//                     setShowHelpPage(false);
//                     setShowForm(false);
//                     setHoveredTitle(null);
//                   }}
//                 >
//                   <IoMdClose />
//                 </button>
//               </div>
//             </div>
//           )}
//           {/* Case Analysis */}
//           <div className="case-analysis-section">
//             {" "}
//             {/* Changed from development-process */}
//             <h2 className="case-analysis-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.CaseAnalysis?.title || "Case Analysis"}
//             </h2>
//             <p className="case-analysis-description-1">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.CaseAnalysis?.des3 || ""}
//             </p>
//             <h2 className="challenges-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.CaseAnalysis?.title1 || "Challenges"}
//             </h2>
//             <ul className="challenges-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.CaseAnalysis?.Challenges?.map((feature, index) => (
//                 <li key={index} className="challenges-list-item">
//                   {" "}
//                   {/* Changed from li-text */}
//                   {feature}
//                 </li>
//               )) || <li>No challenges listed.</li>}
//             </ul>
//             <p className="case-analysis-description-2">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.CaseAnalysis?.des4 || ""}
//             </p>
//             <p className="case-analysis-description-3">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.CaseAnalysis?.des5 || ""}
//             </p>
//             <p className="case-analysis-description-4">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.CaseAnalysis?.des6 || ""}
//             </p>
//             {/* Proposed Solution */}
//             <h2 className="proposed-solution-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.CaseAnalysis?.ProposedSolution?.title ||
//                 "Proposed Solution"}
//             </h2>
//             <p className="proposed-solution-description">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.CaseAnalysis?.ProposedSolution?.Description || ""}
//             </p>
//             <ul className="proposed-solution-benefits">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.CaseAnalysis?.ProposedSolution?.benefits?.map(
//                 (benefit, index) => (
//                   <li key={index} className="benefit-list-item">
//                     {" "}
//                     {/* Changed from li-text */}
//                     <span className="highlight">{benefit.highlight}:</span>{" "}
//                     {benefit.text}
//                   </li>
//                 )
//               ) || <li>No benefits listed.</li>}
//             </ul>
//             <p className="proposed-solution-description-1">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.CaseAnalysis?.ProposedSolution?.des7 || ""}
//             </p>
//             <p className="proposed-solution-description-2">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.CaseAnalysis?.ProposedSolution?.des8 || ""}
//             </p>
//             <p className="proposed-solution-description-3">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.CaseAnalysis?.ProposedSolution?.des9 || ""}
//             </p>
//             {/* Key Mechanized Processes */}
//             <h2 className="key-processes-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.title ||
//                 "Key Processes"}
//             </h2>
//             <ul className="key-processes-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.Processes?.map(
//                 (process, index) => (
//                   <li key={index} className="process-list-item">
//                     {" "}
//                     {/* Changed from li-text */}
//                     <span className="highlight">{process.Process}:</span>{" "}
//                     {process.Description}
//                   </li>
//                 )
//               ) || <li>No processes listed.</li>}
//             </ul>
//             <p className="key-processes-description-1">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.des10 || ""}
//             </p>
//             <p className="key-processes-description-2">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.des11 || ""}
//             </p>
//             <p className="key-processes-description-3">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.des12 || ""}
//             </p>
//             <p className="key-processes-description-4">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.des13 || ""}
//             </p>
//             <p className="key-processes-description-5">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.CaseAnalysis?.KeyMechanizedProcesses?.des14 || ""}
//             </p>
//             {/* Statistics */}
//             <h2 className="statistics-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.Statistics?.title || "Statistics"}
//             </h2>
//             <p className="statistics-description">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.Statistics?.condent?.MarketGrowth?.Description || ""}
//             </p>
//             <ul className="statistics-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {(caseStudy.Statistics?.condent &&
//                 Object.values(caseStudy.Statistics.condent).map(
//                   (feature, index) => (
//                     <li key={index} className="statistics-list-item">
//                       {" "}
//                       {/* Changed from li-text */}
//                       {feature.Description || "No feature description"}
//                     </li>
//                   )
//                 )) || <li>No statistics available.</li>}
//             </ul>
//             {/* Economic Impact */}
//             <h2 className="temp5-sec4-title">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.EconomicImpact?.title || "Economic Impact"}
//             </h2>
//             <p className="economic-impact-description">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.EconomicImpact?.Description || ""}
//             </p>
//             <ul className="economic-impact-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.EconomicImpact?.Impacts?.map((impact, index) => (
//                 <li key={index} className="economic-impact-list-item">
//                   {" "}
//                   {/* Changed from li-text */}
//                   <span className="highlight">{impact.highlight}:</span>{" "}
//                   {impact.text}
//                 </li>
//               )) || <li>No impacts listed.</li>}
//             </ul>
//             <p className="economic-impact-description-2">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.EconomicImpact?.description2 || ""}
//             </p>
//             {/* Challenges and Barriers */}
//             <div className="split">
//               {/* Challenges and Barriers Section */}
//               <div>
//                 <h2 className="challenges-barriers-title test-selection-blue">
//                   {caseStudy.ChallengesandBarriers?.title ||
//                     "Challenges and Barriers"}
//                 </h2>
//                 <p className="challenges-barriers-description">
//                   {caseStudy.ChallengesandBarriers?.Description || ""}
//                 </p>
//                 <ul className="challenges-barriers-list">
//                   {caseStudy.ChallengesandBarriers?.Impacts?.map(
//                     (impact, index) => (
//                       <li key={index} className="challenges-barriers-list-item">
//                         <span className="highlight">{impact.highlight}:</span>{" "}
//                         {impact.text}
//                       </li>
//                     )
//                   ) || <li>No challenges listed.</li>}
//                 </ul>
//                 <p className="challenges-barriers-description-2">
//                   {caseStudy.ChallengesandBarriers?.description2 || ""}
//                 </p>
//               </div>

//               {/* Strategies to Overcome Barriers Section */}
//               <div>
//                 <h2 className="strategies-overcome-title test-selection-blue">
//                   {caseStudy.StrategiesToOvercome?.title ||
//                     "Strategies to Overcome"}
//                 </h2>
//                 <p className="strategies-overcome-description">
//                   {caseStudy.StrategiesToOvercome?.Description || ""}
//                 </p>
//                 <ul className="strategies-overcome-list">
//                   {caseStudy.StrategiesToOvercome?.Strategies?.map(
//                     (strategy, index) => (
//                       <li key={index} className="strategies-overcome-list-item">
//                         <span className="highlight">{strategy.strategy}:</span>{" "}
//                         {strategy.description}
//                       </li>
//                     )
//                   ) || <li>No strategies listed.</li>}
//                 </ul>
//               </div>
//             </div>
//             {/* Future Trends */}
//             <h2 className="future-trends-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.FutureTrends?.title || "Future Trends"}
//             </h2>
//             <p className="future-trends-description">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.FutureTrends?.Description || ""}
//             </p>
//             <ul className="future-trends-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.FutureTrends?.Trends?.map((trend, index) => (
//                 <li key={index} className="future-trends-list-item">
//                   {" "}
//                   {/* Changed from li-text */}
//                   <span className="highlight">{trend.technology}:</span>{" "}
//                   {trend.description}
//                 </li>
//               )) || <li>No trends listed.</li>}
//             </ul>
//             {/* Impact on Employment */}
//             <h2 className="employment-impact-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.ImpactOnEmployment?.title || "Impact on Employment"}
//             </h2>
//             <p className="employment-impact-description">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.ImpactOnEmployment?.Description || ""}
//             </p>
//             <ul className="job-displacement-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.ImpactOnEmployment?.JobDisplacement?.map(
//                 (job, index) => (
//                   <li key={index} className="job-displacement-list-item">
//                     {" "}
//                     {/* Changed from li-text */}
//                     <span className="highlight">{job.area}:</span>{" "}
//                     {job.description}
//                   </li>
//                 )
//               ) || <li>No job displacement details.</li>}
//             </ul>
//             <ul className="job-creation-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.ImpactOnEmployment?.JustCreation?.map(
//                 (creation, index) => (
//                   <li key={index} className="job-creation-list-item">
//                     {" "}
//                     {/* Changed from li-text */}
//                     <span className="highlight">{creation.area}</span>:{" "}
//                     {creation.description}
//                     <ul className="job-creation-sublist">
//                       {" "}
//                       {/* Changed from problem-statement-para2 */}
//                       {creation.job?.map((job, subIndex) => (
//                         <li
//                           key={subIndex}
//                           className="job-creation-sublist-item"
//                         >
//                           {" "}
//                           {/* Changed from li-text */}
//                           <span className="highlight">{job.strategy}</span>{" "}
//                           {job.description}
//                         </li>
//                       )) || <li>No jobs listed.</li>}
//                     </ul>
//                   </li>
//                 )
//               ) || <li>No job creation details.</li>}
//             </ul>
//             <ul className="transition-strategies-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.ImpactOnEmployment?.JustTransitionStrategies?.map(
//                 (strategy, index) => (
//                   <li key={index} className="transition-strategies-list-item">
//                     {" "}
//                     {/* Changed from li-text */}
//                     <span className="highlight">{strategy.area}</span>:{" "}
//                     {strategy.description}
//                     <ul className="transition-strategies-sublist">
//                       {" "}
//                       {/* Changed from problem-statement-para2 */}
//                       {strategy.job?.map((job, subIndex) => (
//                         <li
//                           key={subIndex}
//                           className="transition-strategies-sublist-item"
//                         >
//                           {" "}
//                           {/* Changed from li-text */}
//                           <span className="highlight">{job.strategy}</span>{" "}
//                           {job.description}
//                         </li>
//                       )) || <li>No strategies listed.</li>}
//                     </ul>
//                   </li>
//                 )
//               ) || <li>No transition strategies listed.</li>}
//             </ul>
//             {/* Regional Variations */}
//             <h2 className="regional-variations-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.RegionalVariations?.title || "Regional Variations"}
//             </h2>
//             <p className="regional-variations-description">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.RegionalVariations?.Description || ""}
//             </p>
//             <ul className="adoption-factors-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.RegionalVariations?.AdoptionFactors?.map(
//                 (factor, index) => (
//                   <li key={index} className="adoption-factors-list-item">
//                     {" "}
//                     {/* Changed from li-text */}
//                     <span className="highlight">{factor.factor}:</span>{" "}
//                     {factor.description}
//                   </li>
//                 )
//               ) || <li>No adoption factors listed.</li>}
//             </ul>
//             {/* Case Studies */}
//             <h2 className="case-studies-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.CaseStudies?.title || "Case Studies"}
//             </h2>
//             <ul className="case-studies-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.CaseStudies?.Case?.map((item, index) => (
//                 <li key={index} className="case-studies-list-item">
//                   {" "}
//                   {/* Changed from li-text */}
//                   <span className="highlight">{item.Region}:</span>{" "}
//                   {item.Description}
//                 </li>
//               )) || <li>No case studies available.</li>}
//             </ul>
//             {/* Challenges in Regions with Low Adoption Rates */}
//             <h2 className="regional-challenges-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.ChallengesInRegion?.title || "Challenges in Regions"}
//             </h2>
//             <p className="regional-challenges-description">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.ChallengesInRegion?.ChallengesDescription || ""}
//             </p>
//             <ul className="regional-challenges-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.ChallengesInRegion?.ChallengesInLowAdoptionRegions?.map(
//                 (challenge, index) => (
//                   <li key={index} className="regional-challenges-list-item">
//                     {" "}
//                     {/* Changed from li-text */}
//                     {challenge}
//                   </li>
//                 )
//               ) || <li>No challenges listed.</li>}
//             </ul>
//             <p className="regional-challenges-description-2">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.ChallengesInRegion?.ChallengesDescription1 || ""}
//             </p>
//             {/* Environmental Impact */}
//             <h2 className="environmental-impact-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.EnvironmentalImpact?.title || "Environmental Impact"}
//             </h2>
//             <p className="environmental-impact-description">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.EnvironmentalImpact?.Description || ""}
//             </p>
//             <ul className="environmental-impact-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.EnvironmentalImpact?.Impacts?.map((impact, index) => (
//                 <li key={index} className="environmental-impact-list-item">
//                   {" "}
//                   {/* Changed from li-text */}
//                   <span className="highlight">{impact.impact}:</span>{" "}
//                   {impact.description}
//                 </li>
//               )) || <li>No impacts listed.</li>}
//             </ul>
//             {/* Quality and Safety */}
//             <h2 className="quality-safety-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.QualityAndSafety?.title || "Quality and Safety"}
//             </h2>
//             <p className="quality-safety-description">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.QualityAndSafety?.Description || ""}
//             </p>
//             <ul className="quality-safety-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.QualityAndSafety?.Improvements?.map(
//                 (improvement, index) => (
//                   <li key={index} className="quality-safety-list-item">
//                     {" "}
//                     {/* Changed from li-text */}
//                     <span className="highlight">
//                       {improvement.process}:
//                     </span>{" "}
//                     {improvement.description}
//                   </li>
//                 )
//               ) || <li>No improvements listed.</li>}
//             </ul>
//             {/* Farmer Perspectives */}
//             <h2 className="stakeholder-perspectives-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.FarmerPerspectives?.title ||
//                 "Stakeholder Perspectives"}
//             </h2>
//             <p className="stakeholder-perspectives-description">
//               {" "}
//               {/* Changed from problem-statement-para1 */}
//               {caseStudy.FarmerPerspectives?.Description || ""}
//             </p>
//             <h3 className="farmer-benefits-subheading">
//               {" "}
//               {/* Changed from problem-statement-subheading */}
//               {caseStudy.FarmerPerspectives?.BenefitsForFarmers?.title ||
//                 "Benefits"}
//             </h3>
//             <ul className="farmer-benefits-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.FarmerPerspectives?.BenefitsForFarmers?.benifits?.map(
//                 (item, index) => (
//                   <li key={index} className="farmer-benefits-list-item">
//                     {" "}
//                     {/* Changed from li-text */}
//                     <span className="highlight">{item.benefit}:</span>{" "}
//                     {item.description}
//                   </li>
//                 )
//               ) || <li>No benefits listed.</li>}
//             </ul>
//             <h3 className="farmer-challenges-subheading">
//               {" "}
//               {/* Changed from problem-statement-subheading */}
//               {caseStudy.FarmerPerspectives?.ChallengesFacedByFarmers?.title ||
//                 "Challenges"}
//             </h3>
//             <ul className="farmer-challenges-list">
//               {" "}
//               {/* Changed from problem-statement-para2 */}
//               {caseStudy.FarmerPerspectives?.ChallengesFacedByFarmers?.challenges?.map(
//                 (item, index) => (
//                   <li key={index} className="farmer-challenges-list-item">
//                     {" "}
//                     {/* Changed from li-text */}
//                     <span className="highlight">{item.challenge}:</span>{" "}
//                     {item.description}
//                   </li>
//                 )
//               ) || <li>No challenges listed.</li>}
//             </ul>
//             {caseStudy.FarmerPerspectives
//               ?.StrategiesToPromoteAdoptionAmongSmallholderFarmers?.strategies
//               ?.length > 0 && (
//               <>
//                 <h3 className="farmer-adoption-strategies-subheading">
//                   {" "}
//                   {/* Changed from problem-statement-subheading */}
//                   {caseStudy.FarmerPerspectives
//                     ?.StrategiesToPromoteAdoptionAmongSmallholderFarmers
//                     ?.title || "Strategies"}
//                 </h3>
//                 <ul className="farmer-adoption-strategies-list">
//                   {" "}
//                   {/* Changed from problem-statement-para2 */}
//                   {caseStudy.FarmerPerspectives?.StrategiesToPromoteAdoptionAmongSmallholderFarmers?.strategies?.map(
//                     (item, index) => (
//                       <li
//                         key={index}
//                         className="farmer-adoption-strategies-list-item"
//                       >
//                         {" "}
//                         {/* Changed from li-text */}
//                         <span className="highlight">{item.strategy}:</span>{" "}
//                         {item.description}
//                       </li>
//                     )
//                   ) || <li>No strategies listed.</li>}
//                 </ul>
//               </>
//             )}
//           </div>
//           {/* Development Process */}
//           <div className="development-process-section">
//             {" "}
//             {/* Changed from development-process */}
//             <h2 className="development-process-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.developmentProcess?.title || "Development Process"}
//             </h2>
//             {caseStudy.developmentProcess?.sections?.map((section, index) => (
//               <div key={index}>
//                 <h3
//                   className={
//                     section.subtitleClass || "development-process-subheading"
//                   }
//                 >
//                   {" "}
//                   {/* Updated to use dynamic class or default */}
//                   {section.subtitle}
//                 </h3>
//                 {section.paragraphs?.map((para, paraIndex) => (
//                   <p
//                     key={paraIndex}
//                     className={
//                       para.className ||
//                       "development-process-text test-selection-blue"
//                     } // Updated to use dynamic class or default
//                   >
//                     {para.text}
//                   </p>
//                 )) || <p>No paragraphs available.</p>}
//               </div>
//             )) || <p>No development process sections available.</p>}
//           </div>
//           {/* Challenges Faced */}
//           <div className="challenges-faced-section">
//             {" "}
//             {/* Changed from Challenges-Faced */}
//             <h2 className="challenges-faced-title">
//               {" "}
//               {/* Changed from no specific class */}
//               {caseStudy.challengesFaced?.title || "Challenges Faced"}
//             </h2>
//             <p className="challenges-faced-description">
//               {" "}
//               {/* Added specific class */}
//               {caseStudy.challengesFaced?.description || ""}
//             </p>
//             <ul className="challenges-faced-list">
//               {" "}
//               {/* Added specific class */}
//               {caseStudy.challengesFaced?.issues?.map((issue, index) => (
//                 <li key={index} className="challenges-faced-list-item">
//                   {" "}
//                   {/* Changed from li-text */}
//                   {issue.highlight ? (
//                     <>
//                       <span className="highlight">{issue.highlight}:</span>{" "}
//                       {issue.text}
//                     </>
//                   ) : (
//                     issue.text
//                   )}
//                 </li>
//               )) || <li>No issues listed.</li>}
//             </ul>
//           </div>
//           {/* Impact and Benefits */}
//           <div className="impact-benefits-section">
//             {" "}
//             {/* Changed from impact-benefits */}
//             <h2 className="impact-benefits-title test-selection-blue">
//               {" "}
//               {/* Changed from single-casestudy-layout1-title */}
//               {caseStudy.impactBenefits?.title || "Impact and Benefits"}
//             </h2>
//             <ul className="impact-benefits-list">
//               {" "}
//               {/* Added specific class */}
//               {caseStudy.impactBenefits?.benefits?.map((benefit, index) => (
//                 <li key={index} className="impact-benefits-list-item">
//                   {" "}
//                   {/* Changed from li-text */}
//                   <span className="highlight">{benefit.highlight}:</span>{" "}
//                   {benefit.text}
//                 </li>
//               )) || <li>No benefits listed.</li>}
//             </ul>
//           </div>
//           <div className="industries-section">
//             {" "}
//             {/* Changed from single-casestudy-layout1-title test-seclection-blue */}
//             <p>Industries</p>
//           </div>
//           {caseStudy.gallery?.length > 0 && (
//             <div className="gallery-grid">
//               {" "}
//               {/* Changed from single-casestudy-layout2 */}
//               {caseStudy.gallery.map((img, index) => (
//                 <div key={index}>
//                   <img
//                     src={img}
//                     alt={`Gallery ${index}`}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//           <div className="conclusion-section">
//             {" "}
//             {/* Changed from challenges */}
//             <div className="conclusion-content">
//               {" "}
//               {/* Changed from single-casestudy-layout3 */}
//               <div className="conclusion-details">
//                 {" "}
//                 {/* Changed from conclusion */}
//                 {caseStudy.challenges?.map((challenge, index) => (
//                   <div key={index}>
//                     <div className="conclusion-title test-selection-blue">
//                       {" "}
//                       {/* Changed from single-casestudy-layout3-title */}
//                       {challenge.challengestitle}
//                     </div>
//                     <p className="conclusion-description">
//                       {" "}
//                       {/* Changed from test-seclection-blue-challenge */}
//                       {challenge.description}
//                     </p>
//                   </div>
//                 )) || <p>No conclusion available.</p>}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Other Case Studies Section */}
//         <SuggestionService />
//         <SuggestionProducts />
//         <SuggestionCasestudys />
//       </div>

//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }

// export default SingleCaseStudy;




// //praveen kumar 



import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/SingleCaseStudy.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import CaseStudyAudio from "../components/CaseStudy/CaseStudyaudio";
import data from "../Data/SingleCaseStudy.json";
import loading from "../assets/loading.png";
import { IoMdClose } from "react-icons/io";

import SuggestionCasestudys from "../components/ReUsableComp/SuggestionCasestudys";
import SuggestionProjects from "../components/ReUsableComp/SuggestionProjects";
import SuggestionProducts from "../components/ReUsableComp/SuggestionProducts";
import SuggestionService from "../components/ReUsableComp/SuggestionService";
import SuggestionArticles from "../components/ReUsableComp/SuggestionArticles";
import LoadingStar from "../components/LoadingStar";

// Helper function to render lists dynamically
const renderList = (items, keyPrefix, listClass, itemClass, highlightClass = "highlight") => {
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <ul className={listClass}>
      {items.map((item, index) => {
        // If item is a string, render it directly
        if (typeof item === "string") {
          return (
            <li key={`${keyPrefix}-${index}`} className={itemClass}>
              {item}
            </li>
          );
        }
        // If item is an object, render its description or text
        const content = item.description || item.Description || item.text;
        const highlight = item.highlight || item.area || item.strategy || item.technology || item.factor || item.Region || item.impact || item.process || item.benefit || item.challenge;
        return (
          <li key={`${keyPrefix}-${index}`} className={itemClass}>
            {highlight && <span className={highlightClass}>{highlight}:</span>}{" "}
            {content}
          </li>
        );
      })}
    </ul>
  );
};

// Helper function to render nested lists (e.g., for job creation, transition strategies)
const renderNestedList = (items, keyPrefix, listClass, itemClass, sublistClass, highlightClass = "highlight") => {
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <ul className={listClass}>
      {items.map((item, index) => (
        <li key={`${keyPrefix}-${index}`} className={itemClass}>
          <span className={highlightClass}>{item.area || item.strategy}:</span>{" "}
          {item.description}
          {item.job && (
            <ul className={sublistClass}>
              {item.job.map((subItem, subIndex) => (
                <li key={`${keyPrefix}-sub-${subIndex}`} className={`${itemClass}-sublist-item`}>
                  <span className={highlightClass}>{subItem.strategy}:</span>{" "}
                  {subItem.description}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

function SingleCaseStudy() {
  const [caseStudy, setCaseStudy] = useState(null);
  const [otherCaseStudies, setOtherCaseStudies] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const { id } = useParams();
  const [showButton, setShowButton] = useState(false);
  const [showHelpPage, setShowHelpPage] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const bottomOffset = 800;
      if (
        scrollY > 4200 &&
        scrollY + windowHeight < documentHeight - bottomOffset
      ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setShowHelpPage(true);
    setShowForm(true);
    if (caseStudy?.helpbox?.tabs?.length > 0) {
      setActiveTab(caseStudy.helpbox.tabs[0]);
    }
  };

  useEffect(() => {
    if (showForm) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "auto";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  const handleWheel = (e) => {
    const container = e.currentTarget;
    if (container.scrollHeight > container.clientHeight) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  useEffect(() => {
    let selectedCaseStudy = null;
    let allCaseStudies = [];

    data.singlecasestudy.forEach((category) => {
      category.data.forEach((study) => {
        if (study.id === id) {
          selectedCaseStudy = study;
        }
        allCaseStudies.push(study);
      });
    });

    if (selectedCaseStudy) {
      setCaseStudy(selectedCaseStudy);
      const others = allCaseStudies
        .filter((study) => study.id !== id)
        .slice(0, 5);
      setOtherCaseStudies(others);
    } else {
      console.error("Case study not found for ID:", id);
    }
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="loading-container">
        <p><LoadingStar/></p>
      </div>
    );
  }

  const filteredCards =
    caseStudy?.helpbox?.cards?.filter((card) => card.tab === activeTab) || [];
  const displayedCard =
    filteredCards.find((card) => card.title === hoveredTitle) ||
    filteredCards[0] ||
    null;

  return (
    <>
      <NavBar />
      <SideBar />
      <div>
        <div
          className="case-study-header"
          style={{
            backgroundImage: `url(${caseStudy.backgroundImage || ""})`,
          }}
        >
          <div className="case-study-title">
            {caseStudy.title}
          </div>
        </div>

        <div className="case-study-content">
          <div>
            <CaseStudyAudio caseStudyId={id} />
          </div>

          {/* Overview Section */}
          {(caseStudy.overview || caseStudy.imageContent || caseStudy.Backgrounddes) && (
            <div>
              {caseStudy.overview?.overviewtitle && (
                <div className="case-study-overview-title test-selection-blue">
                  {caseStudy.overview.overviewtitle}
                </div>
              )}
              {caseStudy.overview?.description && (
                <p className="overview-description test-selection-blue">
                  {caseStudy.overview.description}
                </p>
              )}
              {(caseStudy.imageContent?.imageSrc || caseStudy.imageContent?.content || caseStudy.imageContent?.imagetitle) && (
                <div className="overview-image-content">
                  {caseStudy.imageContent?.imageSrc && (
                    <div>
                      <img
                        src={caseStudy.imageURL || caseStudy.imageContent.imageSrc}
                        alt="Overview"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          userSelect: "none",
                        }}
                      />
                    </div>
                  )}
                  {caseStudy.imageContent?.imagetitle && (
                    <h4 className="background-title">
                      {/* {caseStudy.imageContent.imagetitle} */}
                      
                    </h4>
                  )}
                  {caseStudy.imageContent?.content && (
                   
                    <div>
                     <h4 className="background-title">
                      {caseStudy.imageContent.imagetitle}
                      
                    </h4>
                      {caseStudy.imageContent.content.map((text, index) => (
                        <p key={index} className="background-content">
                          {text}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {caseStudy.Backgrounddes?.description1 && (
                
                <p className="background-description-1">
                  {caseStudy.Backgrounddes.description1}
                </p>
              )}
              {caseStudy.Backgrounddes?.description2 && (
                <p className="background-description-2">
                  {caseStudy.Backgrounddes.description2}
                </p>
              )}
            </div>
          )}

          {/* Problem Statement Section */}
          {caseStudy.problemStatement && (
            <div className="problem-statement-section">
              {caseStudy.problemStatement.title && (
                <h2 className="problem-statement-title test-selection-blue">
                  {caseStudy.problemStatement.title}
                </h2>
              )}
              {caseStudy.problemStatement.description && (
                <p className="problem-statement-description">
                  {caseStudy.problemStatement.description}
                </p>
              )}
              {renderList(
                caseStudy.problemStatement.issues,
                "problem-statement",
                "problem-statement-list",
                "problem-statement-list-item"
              )}
              {caseStudy.problemStatement.des1 && (
                <p className="problem-statement-description-1">
                  {caseStudy.problemStatement.des1}
                </p>
              )}
              {caseStudy.problemStatement.des2 && (
                <p className="problem-statement-description-2">
                  {caseStudy.problemStatement.des2}
                </p>
              )}
            </div>
          )}

          {/* Help Page Section */}
          {showButton && !showHelpPage && (
            <button onClick={handleClick} className="help-button">
              <img src={loading} alt="Loading" style={{ width: "30px" }} />
              How Stacia Can Help
            </button>
          )}
          {showForm && showHelpPage && caseStudy.helpbox && (
            <div className="help-section">
              <div
                className="help-popup"
                onWheel={handleWheel}
                ref={popupRef}
              >
                <div className="help-sidebar">
                  <img src={loading} alt="Loading" style={{ width: "30px" }} />
                  <h2>How Stacia Can Help</h2>
                  {caseStudy.helpbox?.tabs?.length > 0 && (
                    <div className="help-tabs">
                      {caseStudy.helpbox.tabs.map((tab, index) => (
                        <button
                          key={index}
                          className={activeTab === tab ? "active" : ""}
                          onClick={() => {
                            setActiveTab(tab);
                            setHoveredTitle(null);
                          }}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  )}
                  {activeTab && filteredCards.length > 0 && (
                    <ul className="help-links">
                      {filteredCards.map((card, index) => (
                        <li
                          key={index}
                          className={
                            hoveredTitle === card.title ? "active" : ""
                          }
                          onMouseEnter={() => setHoveredTitle(card.title)}
                          onMouseLeave={() => setHoveredTitle(null)}
                        >
                          {card.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {displayedCard && (
                  <div className="help-card-section">
                    <div className="help-card">
                      <img src={displayedCard.img} alt={displayedCard.title} />
                      <h3>{displayedCard.title}</h3>
                      <p>{displayedCard.description}</p>
                      <a href={displayedCard.link}>Know more →</a>
                    </div>
                  </div>
                )}
                <button
                  className="help-close-button"
                  onClick={() => {
                    setShowHelpPage(false);
                    setShowForm(false);
                    setHoveredTitle(null);
                  }}
                >
                  <IoMdClose />
                </button>
              </div>
            </div>
          )}

          {/* Case Analysis Section */}
          {caseStudy.CaseAnalysis && (
            <div className="case-analysis-section">
              {caseStudy.CaseAnalysis.title && (
                <h2 className="case-analysis-title test-selection-blue">
                  {caseStudy.CaseAnalysis.title}
                </h2>
              )}
              {caseStudy.CaseAnalysis.des3 && (
                <p className="case-analysis-description-1">
                  {caseStudy.CaseAnalysis.des3}
                </p>
              )}
              {caseStudy.CaseAnalysis.title1 && (
                <h2 className="challenges-title test-selection-blue">
                  {caseStudy.CaseAnalysis.title1}
                </h2>
              )}
              {renderList(
                caseStudy.CaseAnalysis.Challenges,
                "case-analysis-challenges",
                "challenges-list",
                "challenges-list-item"
              )}
              {caseStudy.CaseAnalysis.des4 && (
                <p className="case-analysis-description-2">
                  {caseStudy.CaseAnalysis.des4}
                </p>
              )}
              {caseStudy.CaseAnalysis.des5 && (
                <p className="case-analysis-description-3">
                  {caseStudy.CaseAnalysis.des5}
                </p>
              )}
              {caseStudy.CaseAnalysis.des6 && (
                <p className="case-analysis-description-4">
                  {caseStudy.CaseAnalysis.des6}
                </p>
              )}

              {/* Proposed Solution */}
              {caseStudy.CaseAnalysis.ProposedSolution && (
                <>
                  {caseStudy.CaseAnalysis.ProposedSolution.title && (
                    <h2 className="proposed-solution-title test-selection-blue">
                      {caseStudy.CaseAnalysis.ProposedSolution.title}
                    </h2>
                  )}
                  {caseStudy.CaseAnalysis.ProposedSolution.Description && (
                    <p className="proposed-solution-description">
                      {caseStudy.CaseAnalysis.ProposedSolution.Description}
                    </p>
                  )}
                  {renderList(
                    caseStudy.CaseAnalysis.ProposedSolution.benefits,
                    "proposed-solution",
                    "proposed-solution-benefits",
                    "benefit-list-item"
                  )}
                  {caseStudy.CaseAnalysis.ProposedSolution.des7 && (
                    <p className="proposed-solution-description-1">
                      {caseStudy.CaseAnalysis.ProposedSolution.des7}
                    </p>
                  )}
                  {caseStudy.CaseAnalysis.ProposedSolution.des8 && (
                    <p className="proposed-solution-description-2">
                      {caseStudy.CaseAnalysis.ProposedSolution.des8}
                    </p>
                  )}
                  {caseStudy.CaseAnalysis.ProposedSolution.des9 && (
                    <p className="proposed-solution-description-3">
                      {caseStudy.CaseAnalysis.ProposedSolution.des9}
                    </p>
                  )}
                </>
              )}

              {/* Key Mechanized Processes */}
              {caseStudy.CaseAnalysis.KeyMechanizedProcesses && (
                <>
                  {caseStudy.CaseAnalysis.KeyMechanizedProcesses.title && (
                    <h2 className="key-processes-title test-selection-blue">
                      {caseStudy.CaseAnalysis.KeyMechanizedProcesses.title}
                    </h2>
                  )}
                  {renderList(
                    caseStudy.CaseAnalysis.KeyMechanizedProcesses.Processes?.map((proc) => ({
                      highlight: proc.Process,
                      description: proc.Description,
                    })),
                    "key-processes",
                    "key-processes-list",
                    "process-list-item"
                  )}
                  {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des10 && (
                    <p className="key-processes-description-1">
                      {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des10}
                    </p>
                  )}
                  {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des11 && (
                    <p className="key-processes-description-2">
                      {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des11}
                    </p>
                  )}
                  {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des12 && (
                    <p className="key-processes-description-3">
                      {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des12}
                    </p>
                  )}
                  {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des13 && (
                    <p className="key-processes-description-4">
                      {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des13}
                    </p>
                  )}
                  {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des14 && (
                    <p className="key-processes-description-5">
                      {caseStudy.CaseAnalysis.KeyMechanizedProcesses.des14}
                    </p>
                  )}
                </>
              )}
            </div>
          )}

          {/* Statistics Section */}
          {caseStudy.Statistics && (
            <div>
              {caseStudy.Statistics.title && (
                <h2 className="statistics-title test-selection-blue">
                  {caseStudy.Statistics.title}
                </h2>
              )}
              {caseStudy.Statistics.condent?.MarketGrowth?.Description && (
                <p className="statistics-description">
                  {caseStudy.Statistics.condent.MarketGrowth.Description}
                </p>
              )}
              {caseStudy.Statistics.condent && (
                renderList(
                  Object.values(caseStudy.Statistics.condent).map((item) => ({
                    description: item.Description,
                    highlight: item.Source // Optionally use Source as a highlight
                  })),
                  "statistics",
                  "statistics-list",
                  "statistics-list-item"
                )
              )}
            </div>
          )}

          {/* Economic Impact Section */}
          {caseStudy.EconomicImpact && (
            <div>
              {caseStudy.EconomicImpact.title && (
                <h2 className="temp5-sec4-title">
                  {caseStudy.EconomicImpact.title}
                </h2>
              )}
              {caseStudy.EconomicImpact.Description && (
                <p className="economic-impact-description">
                  {caseStudy.EconomicImpact.Description}
                </p>
              )}
              {renderList(
                caseStudy.EconomicImpact.Impacts,
                "economic-impact",
                "economic-impact-list",
                "economic-impact-list-item"
              )}
              {caseStudy.EconomicImpact.description2 && (
                <p className="economic-impact-description-2">
                  {caseStudy.EconomicImpact.description2}
                </p>
              )}
            </div>
          )}

          {/* Challenges and Barriers & Strategies to Overcome */}
          {(caseStudy.ChallengesandBarriers || caseStudy.StrategiesToOvercome) && (
            <div className="split">
              {caseStudy.ChallengesandBarriers && (
                <div>
                  {caseStudy.ChallengesandBarriers.title && (
                    <h2 className="challenges-barriers-title test-selection-blue">
                      {caseStudy.ChallengesandBarriers.title}
                    </h2>
                  )}
                  {caseStudy.ChallengesandBarriers.Description && (
                    <p className="challenges-barriers-description">
                      {caseStudy.ChallengesandBarriers.Description}
                    </p>
                  )}
                  {renderList(
                    caseStudy.ChallengesandBarriers.Impacts,
                    "challenges-barriers",
                    "challenges-barriers-list",
                    "challenges-barriers-list-item"
                  )}
                  {caseStudy.ChallengesandBarriers.description2 && (
                    <p className="challenges-barriers-description-2">
                      {caseStudy.ChallengesandBarriers.description2}
                    </p>
                  )}
                </div>
              )}
              {caseStudy.StrategiesToOvercome && (
                <div>
                  {caseStudy.StrategiesToOvercome.title && (
                    <h2 className="strategies-overcome-title test-selection-blue">
                      {caseStudy.StrategiesToOvercome.title}
                    </h2>
                  )}
                  {caseStudy.StrategiesToOvercome.Description && (
                    <p className="strategies-overcome-description">
                      {caseStudy.StrategiesToOvercome.Description}
                    </p>
                  )}
                  {renderList(
                    caseStudy.StrategiesToOvercome.Strategies?.map((strat) => ({
                      highlight: strat.strategy,
                      description: strat.description,
                    })),
                    "strategies-overcome",
                    "strategies-overcome-list",
                    "strategies-overcome-list-item"
                  )}
                </div>
              )}
            </div>
          )}

          {/* Future Trends Section */}
          {caseStudy.FutureTrends && (
            <div>
              {caseStudy.FutureTrends.title && (
                <h2 className="future-trends-title test-selection-blue">
                  {caseStudy.FutureTrends.title}
                </h2>
              )}
              {caseStudy.FutureTrends.Description && (
                <p className="future-trends-description">
                  {caseStudy.FutureTrends.Description}
                </p>
              )}
              {renderList(
                caseStudy.FutureTrends.Trends?.map((trend) => ({
                  highlight: trend.technology,
                  description: trend.description,
                })),
                "future-trends",
                "future-trends-list",
                "future-trends-list-item"
              )}
            </div>
          )}

          {/* Impact on Employment Section */}
          {caseStudy.ImpactOnEmployment && (
            <div>
              {caseStudy.ImpactOnEmployment.title && (
                <h2 className="employment-impact-title test-selection-blue">
                  {caseStudy.ImpactOnEmployment.title}
                </h2>
              )}
              {caseStudy.ImpactOnEmployment.Description && (
                <p className="employment-impact-description">
                  {caseStudy.ImpactOnEmployment.Description}
                </p>
              )}
              {renderList(
                caseStudy.ImpactOnEmployment.JobDisplacement?.map((job) => ({
                  highlight: job.area,
                  description: job.description,
                })),
                "job-displacement",
                "job-displacement-list",
                "job-displacement-list-item"
              )}
              {renderNestedList(
                caseStudy.ImpactOnEmployment.JustCreation,
                "job-creation",
                "job-creation-list",
                "job-creation-list-item",
                "job-creation-sublist"
              )}
              {renderNestedList(
                caseStudy.ImpactOnEmployment.JustTransitionStrategies,
                "transition-strategies",
                "transition-strategies-list",
                "transition-strategies-list-item",
                "transition-strategies-sublist"
              )}
            </div>
          )}

          {/* Regional Variations Section */}
          {caseStudy.RegionalVariations && (
            <div>
              {caseStudy.RegionalVariations.title && (
                <h2 className="regional-variations-title test-selection-blue">
                  {caseStudy.RegionalVariations.title}
                </h2>
              )}
              {caseStudy.RegionalVariations.Description && (
                <p className="regional-variations-description">
                  {caseStudy.RegionalVariations.Description}
                </p>
              )}
              {renderList(
                caseStudy.RegionalVariations.AdoptionFactors?.map((factor) => ({
                  highlight: factor.factor,
                  description: factor.description,
                })),
                "adoption-factors",
                "adoption-factors-list",
                "adoption-factors-list-item"
              )}
            </div>
          )}

          {/* Case Studies Section */}
          {caseStudy.CaseStudies && (
            <div>
              {caseStudy.CaseStudies.title && (
                <h2 className="case-studies-title test-selection-blue">
                  {caseStudy.CaseStudies.title}
                </h2>
              )}
              {renderList(
                caseStudy.CaseStudies.Case?.map((item) => ({
                  highlight: item.Region,
                  description: item.Description,
                })),
                "case-studies",
                "case-studies-list",
                "case-studies-list-item"
              )}
            </div>
          )}

          {/* Challenges in Regions with Low Adoption Rates */}
          {caseStudy.ChallengesInRegion && (
            <div>
              {caseStudy.ChallengesInRegion.title && (
                <h2 className="regional-challenges-title test-selection-blue">
                  {caseStudy.ChallengesInRegion.title}
                </h2>
              )}
              {caseStudy.ChallengesInRegion.ChallengesDescription && (
                <p className="regional-challenges-description">
                  {caseStudy.ChallengesInRegion.ChallengesDescription}
                </p>
              )}
              {renderList(
                caseStudy.ChallengesInRegion.ChallengesInLowAdoptionRegions,
                "regional-challenges",
                "regional-challenges-list",
                "regional-challenges-list-item"
              )}
              {caseStudy.ChallengesInRegion.ChallengesDescription1 && (
                <p className="regional-challenges-description-2">
                  {caseStudy.ChallengesInRegion.ChallengesDescription1}
                </p>
              )}
            </div>
          )}

          {/* Environmental Impact Section */}
          {caseStudy.EnvironmentalImpact && (
            <div>
              {caseStudy.EnvironmentalImpact.title && (
                <h2 className="environmental-impact-title test-selection-blue">
                  {caseStudy.EnvironmentalImpact.title}
                </h2>
              )}
              {caseStudy.EnvironmentalImpact.Description && (
                <p className="environmental-impact-description">
                  {caseStudy.EnvironmentalImpact.Description}
                </p>
              )}
              {renderList(
                caseStudy.EnvironmentalImpact.Impacts?.map((impact) => ({
                  highlight: impact.impact,
                  description: impact.description,
                })),
                "environmental-impact",
                "environmental-impact-list",
                "environmental-impact-list-item"
              )}
            </div>
          )}

          {/* Quality and Safety Section */}
          {caseStudy.QualityAndSafety && (
            <div>
              {caseStudy.QualityAndSafety.title && (
                <h2 className="quality-safety-title test-selection-blue">
                  {caseStudy.QualityAndSafety.title}
                </h2>
              )}
              {caseStudy.QualityAndSafety.Description && (
                <p className="quality-safety-description">
                  {caseStudy.QualityAndSafety.Description}
                </p>
              )}
              {renderList(
                caseStudy.QualityAndSafety.Improvements?.map((improvement) => ({
                  highlight: improvement.process,
                  description: improvement.description,
                })),
                "quality-safety",
                "quality-safety-list",
                "quality-safety-list-item"
              )}
            </div>
          )}

          {/* Farmer Perspectives Section */}
          {caseStudy.FarmerPerspectives && (
            <div className="case-analysis-section">
              {caseStudy.FarmerPerspectives.title && (
                <h2 className="stakeholder-perspectives-title test-selection-blue">
                  {caseStudy.FarmerPerspectives.title}
                </h2>
              )}
              {caseStudy.FarmerPerspectives.Description && (
                <p className="stakeholder-perspectives-description">
                  {caseStudy.FarmerPerspectives.Description}
                </p>
              )}
              {caseStudy.FarmerPerspectives.BenefitsForFarmers && (
                <>
                  {caseStudy.FarmerPerspectives.BenefitsForFarmers.title && (
                    <h3 className="farmer-benefits-subheading">
                      {caseStudy.FarmerPerspectives.BenefitsForFarmers.title}
                    </h3>
                  )}
                  {renderList(
                    caseStudy.FarmerPerspectives.BenefitsForFarmers.benifits?.map((item) => ({
                      highlight: item.benefit,
                      description: item.description,
                    })),
                    "farmer-benefits",
                    "farmer-benefits-list",
                    "farmer-benefits-list-item"
                  )}
                </>
              )}
              {caseStudy.FarmerPerspectives.ChallengesFacedByFarmers && (
                <>
                  {caseStudy.FarmerPerspectives.ChallengesFacedByFarmers.title && (
                    <h3 className="farmer-challenges-subheading">
                      {caseStudy.FarmerPerspectives.ChallengesFacedByFarmers.title}
                    </h3>
                  )}
                  {renderList(
                    caseStudy.FarmerPerspectives.ChallengesFacedByFarmers.challenges?.map((item) => ({
                      highlight: item.challenge,
                      description: item.description,
                    })),
                    "farmer-challenges",
                    "farmer-challenges-list",
                    "farmer-challenges-list-item"
                  )}
                </>
              )}
              {caseStudy.FarmerPerspectives.StrategiesToPromoteAdoptionAmongSmallholderFarmers && (
                <>
                  {caseStudy.FarmerPerspectives.StrategiesToPromoteAdoptionAmongSmallholderFarmers.title && (
                    <h3 className="farmer-adoption-strategies-subheading">
                      {caseStudy.FarmerPerspectives.StrategiesToPromoteAdoptionAmongSmallholderFarmers.title}
                    </h3>
                  )}
                  {renderList(
                    caseStudy.FarmerPerspectives.StrategiesToPromoteAdoptionAmongSmallholderFarmers.strategies?.map((item) => ({
                      highlight: item.strategy,
                      description: item.description,
                    })),
                    "farmer-adoption-strategies",
                    "farmer-adoption-strategies-list",
                    "farmer-adoption-strategies-list-item"
                  )}
                </>
              )}
            </div>
          )}

          {/* Development Process Section */}
          {caseStudy.developmentProcess?.sections?.length > 0 && (
            <div className="development-process-section">
              {caseStudy.developmentProcess.title && (
                <h2 className="development-process-title test-selection-blue">
                  {caseStudy.developmentProcess.title}
                </h2>
              )}
              {caseStudy.developmentProcess.sections.map((section, index) => (
                <div key={index}>
                  {section.subtitle && (
                    <h3 className={section.subtitleClass || "development-process-subheading"}>
                      {section.subtitle}
                    </h3>
                  )}
                  {section.paragraphs?.map((para, paraIndex) => (
                    <p
                      key={paraIndex}
                      className={
                        para.className || "development-process-text test-selection-blue"
                      }
                    >
                      {para.text}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Challenges Faced Section */}
          {caseStudy.challengesFaced && (
            <div className="challenges-faced-section">
              {caseStudy.challengesFaced.title && (
                <h2 className="challenges-faced-title">
                  {caseStudy.challengesFaced.title}
                </h2>
              )}
              {caseStudy.challengesFaced.description && (
                <p className="challenges-faced-description">
                  {caseStudy.challengesFaced.description}
                </p>
              )}
              {renderList(
                caseStudy.challengesFaced.issues,
                "challenges-faced",
                "challenges-faced-list",
                "challenges-faced-list-item"
              )}
            </div>
          )}

          {/* Impact and Benefits Section */}
          {caseStudy.impactBenefits && (
            <div className="impact-benefits-section">
              {caseStudy.impactBenefits.title && (
                <h2 className="impact-benefits-title test-selection-blue">
                  {caseStudy.impactBenefits.title}
                </h2>
              )}
              {renderList(
                caseStudy.impactBenefits.benefits,
                "impact-benefits",
                "impact-benefits-list",
                "impact-benefits-list-item"
              )}
            </div>
          )}

          {/* Industries Section */}
          <div className="industries-section">
            <p>Industries</p>
          </div>

          {/* Gallery Section */}
          {caseStudy.gallery?.length > 0 && (
            <div className="gallery-grid">
              {caseStudy.gallery.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Gallery ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Conclusion Section */}
          {caseStudy.challenges?.length > 0 && (
            <div className="conclusion-section">
              <div className="conclusion-content">
                {caseStudy.challenges.map((challenge, index) => (
                  <div key={index} className="conclusion-details">
                    {challenge.challengestitle && (
                      <div className="conclusion-title test-selection-blue">
                        {challenge.challengestitle}
                      </div>
                    )}
                    {challenge.description && (
                      <p className="conclusion-description">
                        {challenge.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Other Case Studies Section */}
        <SuggestionService />
        <SuggestionProducts />
        <SuggestionCasestudys />
      </div>

      <Footer />
      <MobileFooter />
    </>
  );
}

export default SingleCaseStudy;
