// import React, { useEffect, useRef } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import { useState } from "react";
// import "../styles/career.css";
// import CareerComponent from "../components/CareerComponent";
// import LifeStaciaImg1 from "../assets/cr-img-1.png";
// import LifeStaciaImg2 from "../assets/cr-img-2.png";
// import LifeStaciaImg3 from "../assets/cr-img3.png";
// import LifeStaciaImg4 from "../assets/careerGroup.png";
// import CareerMobileCulture from "../components/careers/careerMobileCulture";
// import MobileFooter from "../components/MobileFooter";
// import SideBar from "../components/SideBar";
// import Star from "../components/Star";
// import axios from "axios";
// import JobForm from "../components/careers/JobForm";
// import CareerSvg1 from "../assets/careerSvg1.svg";
// import CareerSvg2 from "../assets/careerSvg2.svg";
// import CareerSvg3 from "../assets/careerSvg3.svg";
// import CareerSvg4 from "../assets/careerSvg4.svg";
// import CareerSvg5 from "../assets/careerSvg5.svg";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion, useTransform, useScroll } from "framer-motion";




// import careersData from "../Data/Career.json";

// //hiring data
// const HiringData = [
//   {
//     image: CareerSvg1,
//     title: "Resume Screening",
//     des: "The first step in our hiring process is reviewing resumes to assess candidates' qualifications, experience, and relevance to the job role. Our HR team evaluates key aspects such as educational background, work experience, technical skills, and achievements. Candidates who meet the required criteria are shortlisted for the next stage.",
//   },
//   {
//     image: CareerSvg2,
//     title: "Telephonic Interview",
//     des: "Shortlisted candidates are contacted for a brief telephonic interview. This step helps us understand the candidate’s communication skills, career aspirations, and initial fit for the role. Basic technical and role-specific questions may be asked to gauge their familiarity with the job requirements.",
//   },
//   {
//     image: CareerSvg3,
//     title: "Technical Interview",
//     des: "Candidates who clear the telephonic round proceed to the technical interview. This stage is conducted by subject matter experts or hiring managers to assess the candidate’s problem-solving abilities, domain knowledge, and hands-on experience. Depending on the role, this interview may include:",
//   },
//   {
//     image: CareerSvg4,
//     title: "Assignment Round",
//     des: "For certain roles, candidates are given a practical assignment or project to complete within a specified timeframe. This allows us to evaluate their ability to apply theoretical knowledge to real-world problems, their approach to problem-solving, and their efficiency in execution. The assignment is reviewed by the hiring team to determine the candidate’s technical proficiency and creativity",
//   },
//   {
//     image: CareerSvg5,
//     title: "Onbording",
//     des: "Once a candidate successfully clears all interview stages, they receive an offer letter and begin the onboarding process. This includes: 1) Document verification and completion of necessary formalities, 2) Introduction to company policies, teams, and work environment, 3) Training sessions (if applicable), 4) Allocation of necessary resources and tools for their role",
//   },
// ];
// gsap.registerPlugin(ScrollTrigger);

// function CareerPage() {
//   const [showApplication, setShowApplication] = useState(false);
//   // console.log(showApplication);  //api fetch


//   const [careers, setCareers] = useState([]);
//   const closeForm = () => {
//     setShowApplication(false);
//   };


//   // const apiUrl = process.env.REACT_APP_API_URL;


//   // const fetchCareers = async () => {
//   //   try {
//   //     const res = await axios.get(`${apiUrl}/career/list`);
//   //     // console.log(res.data.data);
//   //     setCareers(res.data.data);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchCareers();
//   // }, []);

//   useEffect(() => {
//     setCareers(careersData);
//   }, []);

//   const [showMore, setShowMore] = useState(null);
//   const toggleShowMore = (i) => {
//     setShowMore(showMore === i ? null : i);
//   };

//   //horizontal scrolling

//   return (
//     <div className={showApplication ? "fixed" : ""}>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       <div className="career-hero-section">
//         <div className="career-hero-contents">
//           <div className="career-title-section">
//             <div className="career-title">
//               <span className="test-seclection-white">Careers</span>
//               <Star />
//             </div>
//             <div
//               style={{ opacity: "0.6", fontSize: "30px", fontWeight: 500 }}
//               className="test-seclection-white"
//             >
//               In Stacia Corp
//             </div>
//           </div>
//           <div className="career-info-section">
//             <div className="career-info-section-heading test-seclection-white">
//               Come, join us!
//               <span
//                 style={{ color: "#0047FF", padding: "0rem 1rem" }}
//                 className="test-seclection-white"
//               >
//                 We're hiring.
//               </span>
//             </div>
//             <div className="career-hero-info test-seclection-white">
//               "At our core, we are driven by the belief that everyone should
//               have the opportunity to discover and pursue their dream job. Our
//               relentless dedication is focused on making this a reality. Join us
//               now and take the first step toward your dream career!"
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div
//           style={{
//             textAlign: "center",
//             userSelect: "none",
//           }}
//           className="career-headings"
//         >
//           Opportunities
//         </div>
//         {careers?.map((eachJob, index) => {
//           return (
//             <CareerComponent
//               key={index}
//               i={index}
//               data={eachJob}
//               showMore={showMore}
//               toggleShowMore={toggleShowMore}
//               showApplication={showApplication}
//               setShowApplication={setShowApplication}
//             />
//           );
//         })}
//       </div>
//       <div className="career-hiring-process">
//         <div className="career-headings">Hiring Procedure</div>
//         <div className="career-hiring-data-desk">
//           <HorizontalScrollContainer />
//         </div>
//         <div className="career-hiring-data-mob-container">
//           {HiringData.map((eachStep, i) => (
//             <div key={i} className="panel">
//               <div className="career-hiring-item-num">{`0${i + 1}`}</div>
//               <div className="career-hiring-illustrate">
//                 <img src={eachStep.image} alt="" />
//               </div>
//               <div className="career-hiring-item-title">{eachStep.title}</div>
//               <p className="career-hiring-item-des">{eachStep.des}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="life-at-stacia">
//         <div className="career-headings">Life @ Stacia Corp</div>
//         <div className="image-layout-container">
//           <div className="img-container1">
//             <img src={LifeStaciaImg1} alt="" className="Life-Img" />
//           </div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               gap: "1rem",
//             }}
//           >
//             <div className="img-container2">
//               <img src={LifeStaciaImg2} alt="" className="Life-Img" />
//             </div>
//             <div className="img-container3">
//               <img src={LifeStaciaImg3} alt="" className="Life-Img" />
//             </div>
//           </div>
//           <div className="img-container4">
//             <img src={LifeStaciaImg4} alt="" className="Life-Img" />
//           </div>
//         </div>
//       </div>
//       <div style={{ margin: "1rem" }}>
//         <CareerMobileCulture />
//       </div>
//       <div
//         style={{
//           marginLeft: "80px",
//           marginRight: "80px",
//           marginBottom: "10rem",
//         }}
//       >
//         <div className="our-cultures">
//           <div className="career-headings">Our Culture</div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               // flexWrap: "wrap",
//               flex: "1 fr",
//             }}
//           >
//             <div>
//               <div className="culture-titles">Office Environment</div>
//               <p className="culture-contents">
//                 At Stacia Corp, our office environment is designed to inspire
//                 innovation, creativity, foster collaboration, and support
//                 productivity. We believe that where you work is just as
//                 important as how you work, which is why we’ve created a dynamic
//                 and welcoming space that reflects our commitment to innovation
//                 and teamwork. Open, Collaborative Spaces.
//               </p>
//             </div>
//             <div>
//               <div className="culture-titles">Working Model</div>
//               <p className="culture-contents">
//                 At Stacia Corp, we believe that flexibility and collaboration
//                 are key to driving innovation and productivity. Our working
//                 model is built around agile principles. Teams are empowered to
//                 move quickly, adapt to changing needs, and continuously improve
//                 processes. With regular check-ins, feedback loops, and sprint
//                 planning, we ensure that we remain responsive to both internal
//                 and client needs.
//               </p>
//             </div>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               // flexWrap: "wrap",
//               flex: "1 fr",
//             }}
//           >
//             <div>
//               <div className="culture-titles">Co-workers Environment</div>
//               <p className="culture-contents">
//                 At Stacia Corp, we pride ourselves on fostering a positive,
//                 inclusive, and supportive co-worker environment where everyone
//                 feels valued and empowered to succeed. Our team is more than
//                 just colleagues—we are a community of talented individuals
//                 working together to achieve great things.
//               </p>
//             </div>
//             <div>
//               <div className="culture-titles">Open Communication</div>
//               <p className="culture-contents">
//                 Transparent communication is key to our success. We maintain an
//                 open-door policy that encourages feedback, discussion, and the
//                 sharing of ideas. This approach ensures that every voice is
//                 heard and valued, creating a more cohesive team. Our diverse
//                 workforce brings a wealth of perspectives and experiences,
//                 enriching our collaborative efforts. We embrace this diversity,
//                 recognizing that it leads to more creative problem-solving and
//                 innovative solutions
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <MobileFooter />{" "}
//       <>{showApplication && <JobForm closeForm={closeForm} />}</>
//     </div>
//   );
// }

// export default CareerPage;

// // const HorizontalScrollContainer = () => {
// //   const targetRef = useRef(null);
// //   // const { scrollYProgress } = useScroll({
// //   //   target: targetRef,
// //   // });

// //   // const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
// //   return (
// //     <div ref={targetRef} style={{
// //       //  height: "300vh",
// //      position: "relative" }}>
// //       <div
// //         className="career-hiring-data-container"
// //         style={{
// //           height: "100vh",
// //           position: "sticky",
// //           top: "80px",
// //           overflowX:"auto",
// //           // whiteSpace:"nowrap"
// //         }}
// //       >
// //         {/* <motion.div style={{ display: "flex", columnGap: "12rem", x }}> */}
// //         <div style={{ display: "flex", columnGap: "12rem", padding:"0.2rem" }}>

// //           {HiringData.map((eachStep, i) => (
// //             <div key={i} className="panel">
// //               <div className="career-hiring-item-num">{`0${i + 1}`}</div>
// //               <div className="career-hiring-illustrate">
// //                 <img src={eachStep.image} alt="" />
// //               </div>
// //               <div className="career-hiring-item-title">{eachStep.title}</div>
// //               <p className="career-hiring-item-des">{eachStep.des}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// const HorizontalScrollContainer = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-35%"]);
//   return (
//     <div ref={targetRef} style={{ height: "300vh", position: "relative" }}>
//       <div
//         className="career-hiring-data-container"
//         style={{
//           height: "100vh",
//           position: "sticky",
//           top: "80px",
//         }}
//       >
//         <motion.div style={{ display: "flex", columnGap: "12rem", x }}>
//           {HiringData.map((eachStep, i) => (
//             <div key={i} className="panel">
//               <div className="career-hiring-item-num">{`0${i + 1}`}</div>
//               <div className="career-hiring-illustrate">
//                 <img src={eachStep.image} alt="" />
//               </div>
//               <div className="career-hiring-item-title">{eachStep.title}</div>
//               <p className="career-hiring-item-des">{eachStep.des}</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };




//praveen

// import React, { useEffect, useRef, Suspense } from "react";
// import { useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion, useTransform, useScroll } from "framer-motion";
// import careersData from "../Data/Career.json";
// import LifeStaciaImg1 from "../assets/cr-img-1.png";
// import LifeStaciaImg2 from "../assets/cr-img-2.png";
// import LifeStaciaImg3 from "../assets/cr-img3.png";
// import LifeStaciaImg4 from "../assets/careerGroup.png";
// import CareerSvg1 from "../assets/careerSvg1.svg";
// import CareerSvg2 from "../assets/careerSvg2.svg";
// import CareerSvg3 from "../assets/careerSvg3.svg";
// import CareerSvg4 from "../assets/careerSvg4.svg";
// import CareerSvg5 from "../assets/careerSvg5.svg";
// import "../styles/career.css";
// import LoadingStar from "../components/LoadingStar";

// // Lazy load components
// const NavBar = React.lazy(() => import("../components/NavBar"));
// const Footer = React.lazy(() => import("../components/Footer"));
// const CareerComponent = React.lazy(() =>
//   import("../components/CareerComponent")
// );
// const CareerMobileCulture = React.lazy(() =>
//   import("../components/careers/careerMobileCulture")
// );
// const MobileFooter = React.lazy(() => import("../components/MobileFooter"));
// const SideBar = React.lazy(() => import("../components/SideBar"));
// const Star = React.lazy(() => import("../components/Star"));
// const JobForm = React.lazy(() => import("../components/careers/JobForm"));

// // Hiring data
// const HiringData = [
//   {
//     image: CareerSvg1,
//     title: "Resume Screening",
//     des: "The first step in our hiring process is reviewing resumes to assess candidates' qualifications, experience, and relevance to the job role. Our HR team evaluates key aspects such as educational background, work experience, technical skills, and achievements. Candidates who meet the required criteria are shortlisted for the next stage.",
//   },
//   {
//     image: CareerSvg2,
//     title: "Telephonic Interview",
//     des: "Shortlisted candidates are contacted for a brief telephonic interview. This step helps us understand the candidate’s communication skills, career aspirations, and initial fit for the role. Basic technical and role-specific questions may be asked to gauge their familiarity with the job requirements.",
//   },
//   {
//     image: CareerSvg3,
//     title: "Technical Interview",
//     des: "Candidates who clear the telephonic round proceed to the technical interview. This stage is conducted by subject matter experts or hiring managers to assess the candidate’s problem-solving abilities, domain knowledge, and hands-on experience. Depending on the role, this interview may include:",
//   },
//   {
//     image: CareerSvg4,
//     title: "Assignment Round",
//     des: "For certain roles, candidates are given a practical assignment or project to complete within a specified timeframe. This allows us to evaluate their ability to apply theoretical knowledge to real-world problems, their approach to problem-solving, and their efficiency in execution. The assignment is reviewed by the hiring team to determine the candidate’s technical proficiency and creativity",
//   },
//   {
//     image: CareerSvg5,
//     title: "Onboarding",
//     des: "Once a candidate successfully clears all interview stages, they receive an offer letter and begin the onboarding process. This includes: 1) Document verification and completion of necessary formalities, 2) Introduction to company policies, teams, and work environment, 3) Training sessions (if applicable), 4) Allocation of necessary resources and tools for their role",
//   },
// ];

// gsap.registerPlugin(ScrollTrigger);

// function CareerPage() {
//   const [showApplication, setShowApplication] = useState(false);
//   const [careers, setCareers] = useState([]);
//   const [showMore, setShowMore] = useState(null);

//   const closeForm = () => {
//     setShowApplication(false);
//   };

//   useEffect(() => {
//     setCareers(careersData);
//   }, []);

//   const toggleShowMore = (i) => {
//     setShowMore(showMore === i ? null : i);
//   };

//   return (
//     <Suspense fallback={<div>
//             <LoadingStar />
//           </div>}>
//       <div className={showApplication ? "fixed" : ""}>
//         <div className="nav_style">
//           <NavBar />
//           <SideBar />
//         </div>
//         <div className="career-hero-section">
//           <div className="career-hero-contents">
//             <div className="career-title-section">
//               <div className="career-title">
//                 <span className="test-seclection-white">Careers</span>
//                 <Star />
//               </div>
//               <div
//                 style={{ opacity: "0.6", fontSize: "30px", fontWeight: 500 }}
//                 className="test-seclection-white"
//               >
//                 In Stacia Corp
//               </div>
//             </div>
//             <div className="career-info-section">
//               <div className="career-info-section-heading test-seclection-white">
//                 Come, join us!
//                 <span
//                   style={{ color: "#0047FF", padding: "0rem 1rem" }}
//                   className="test-seclection-white"
//                 >
//                   We're hiring.
//                 </span>
//               </div>
//               <div className="career-hero-info test-seclection-white">
//                 "At our core, we are driven by the belief that everyone should
//                 have the opportunity to discover and pursue their dream job. Our
//                 relentless dedication is focused on making this a reality. Join
//                 us now and take the first step toward your dream career!"
//               </div>
//             </div>
//           </div>
//         </div>
//         <div id="Opportunies">
//           <div
//             style={{
//               textAlign: "center",
//               userSelect: "none",
//             }}
//             className="career-headings"
//           >
//             Opportunities
//           </div>
//           {careers?.map((eachJob, index) => (
//             <CareerComponent
//               key={index}
//               i={index}
//               data={eachJob}
//               showMore={showMore}
//               toggleShowMore={toggleShowMore}
//               showApplication={showApplication}
//               setShowApplication={setShowApplication}
//             />
//           ))}
//         </div>
//         <div className="career-hiring-process" id="HiringProcedure">
//           <div className="career-headings">Hiring Procedure</div>
//           <div className="career-hiring-data-desk">
//             <HorizontalScrollContainer />
//           </div>
//           <div className="career-hiring-data-mob-container">
//             {HiringData.map((eachStep, i) => (
//               <div key={i} className="panel">
//                 <div className="career-hiring-item-num">{`0${i + 1}`}</div>
//                 <div className="career-hiring-illustrate">
//                   <img src={eachStep.image} alt="" />
//                 </div>
//                 <div className="career-hiring-item-title">{eachStep.title}</div>
//                 <p className="career-hiring-item-des">{eachStep.des}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="life-at-stacia" id="LifeStacia Corp">
//           <div className="career-headings">Life @ Stacia Corp</div>
//           <div className="image-layout-container">
//             <div className="img-container1">
//               <img src={LifeStaciaImg1} alt="" className="Life-Img" />
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 gap: "1rem",

//               }}
//             >
//               <div className="img-container2">
//                 <img src={LifeStaciaImg2} alt="" className="Life-Img" />
//               </div>
//               <div className="img-container3">
//                 <img src={LifeStaciaImg3} alt="" className="Life-Img" />
//               </div>
//             </div>
//             <div className="img-container4">
//               <img src={LifeStaciaImg4} alt="" className="Life-Img" />
//             </div>
//           </div>
//         </div>
//         <div style={{ margin: "1rem" }}>
//           <CareerMobileCulture />
//         </div>
//         <div
//           style={{
//             marginLeft: "80px",
//             marginRight: "80px",
//             marginBottom: "10rem",
//           }}
//           id="Ourculture"
//         >
//           <div className="our-cultures">
//             <div className="career-headings">Our Culture</div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 flex: "1 fr",
//               }}
//             >
//               <div>
//                 <div className="culture-titles">Office Environment</div>
//                 <p className="culture-contents">
//                   At Stacia Corp, our office environment is designed to inspire
//                   innovation, creativity, foster collaboration, and support
//                   productivity. We believe that where you work is just as
//                   important as how you work, which is why we’ve created a
//                   dynamic and welcoming space that reflects our commitment to
//                   innovation and teamwork. Open, Collaborative Spaces.
//                 </p>
//               </div>
//               <div>
//                 <div className="culture-titles">Working Model</div>
//                 <p className="culture-contents">
//                   At Stacia Corp, we believe that flexibility and collaboration
//                   are key to driving innovation and productivity. Our working
//                   model is built around agile principles. Teams are empowered to
//                   move quickly, adapt to changing needs, and continuously
//                   improve processes. With regular check-ins, feedback loops, and
//                   sprint planning, we ensure that we remain responsive to both
//                   internal and client needs.
//                 </p>
//               </div>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 flex: "1 fr",
//               }}
//             >
//               <div>
//                 <div className="culture-titles">Co-workers Environment</div>
//                 <p className="culture-contents">
//                   At Stacia Corp, we pride ourselves on fostering a positive,
//                   inclusive, and supportive co-worker environment where everyone
//                   feels valued and empowered to succeed. Our team is more than
//                   just colleagues—we are a community of talented individuals
//                   working together to achieve great things.
//                 </p>
//               </div>
//               <div>
//                 <div className="culture-titles">Open Communication</div>
//                 <p className="culture-contents">
//                   Transparent communication is key to our success. We maintain
//                   an open-door policy that encourages feedback, discussion, and
//                   the sharing of ideas. This approach ensures that every voice
//                   is heard and valued, creating a more cohesive team. Our
//                   diverse workforce brings a wealth of perspectives and
//                   experiences, enriching our collaborative efforts. We embrace
//                   this diversity, recognizing that it leads to more creative
//                   problem-solving and innovative solutions
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//         <MobileFooter />
//         {showApplication && <JobForm closeForm={closeForm} />}
//       </div>
//     </Suspense>
//   );
// }

// const HorizontalScrollContainer = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const [xRange, setXRange] = useState(["1%", "-35%"]);

//   useEffect(() => {
//     const updateRange = () => {
//       const width = window.innerWidth;

//       if (width <= 768) {
//         setXRange(["1%", "-80%"]); // mobile
//       } else if (width <= 1366) {
//         setXRange(["1%", "-90%"]); // small screen and big screen
//       } else {
//         setXRange(["1%", "-35%"]); //1920
//       }
//     };

//     updateRange();  //Initial call
//     window.addEventListener("resize", updateRange);

//     return () => window.removeEventListener("resize", updateRange);
//   }, []);

//   const x = useTransform(scrollYProgress, [0, 1], xRange);

//   return (
//     <div ref={targetRef} style={{ height: "300vh", position: "relative" }}>
//       <div
//         className="career-hiring-data-container"
//         style={{
//           height: "92vh",
//           position: "sticky",
//           top: "80px",
//         }}
//       >
//         <motion.div style={{ display: "flex", columnGap: "12rem", x }}>
//           {HiringData.map((eachStep, i) => (
//             <div key={i} className="panel">
//               <div className="career-hiring-item-num">{`0${i + 1}`}</div>
//               <div className="career-hiring-illustrate">
//                 <img src={eachStep.image} alt="" />
//               </div>
//               <div className="career-hiring-item-title">{eachStep.title}</div>
//               <p className="career-hiring-item-des">{eachStep.des}</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };


// export default CareerPage;


// import React, { useEffect, useRef, Suspense } from "react";
// import { useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion, useTransform, useScroll } from "framer-motion";
// import { useParams } from "react-router-dom";
// import careersData from "../Data/Career.json";
// import LifeStaciaImg1 from "../assets/cr-img-1.png";
// import LifeStaciaImg2 from "../assets/cr-img-2.png";
// import LifeStaciaImg3 from "../assets/cr-img3.png";
// import LifeStaciaImg4 from "../assets/careerGroup.png";
// import CareerSvg1 from "../assets/careerSvg1.svg";
// import CareerSvg2 from "../assets/careerSvg2.svg";
// import CareerSvg3 from "../assets/careerSvg3.svg";
// import CareerSvg4 from "../assets/careerSvg4.svg";
// import CareerSvg5 from "../assets/careerSvg5.svg";
// import "../styles/career.css";
// import LoadingStar from "../components/LoadingStar";

// // Lazy load components
// const NavBar = React.lazy(() => import("../components/NavBar"));
// const Footer = React.lazy(() => import("../components/Footer"));
// const CareerComponent = React.lazy(() =>
//   import("../components/CareerComponent")
// );
// const CareerMobileCulture = React.lazy(() =>
//   import("../components/careers/careerMobileCulture")
// );
// const MobileFooter = React.lazy(() => import("../components/MobileFooter"));
// const SideBar = React.lazy(() => import("../components/SideBar"));
// const Star = React.lazy(() => import("../components/Star"));
// const JobForm = React.lazy(() => import("../components/careers/JobForm"));

// // Hiring data
// const HiringData = [
//   {
//     image: CareerSvg1,
//     title: "Resume Screening",
//     des: "The first step in our hiring process is reviewing resumes to assess candidates' qualifications, experience, and relevance to the job role. Our HR team evaluates key aspects such as educational background, work experience, technical skills, and achievements. Candidates who meet the required criteria are shortlisted for the next stage.",
//   },
//   {
//     image: CareerSvg2,
//     title: "Telephonic Interview",
//     des: "Shortlisted candidates are contacted for a brief telephonic interview. This step helps us understand the candidate’s communication skills, career aspirations, and initial fit for the role. Basic technical and role-specific questions may be asked to gauge their familiarity with the job requirements.",
//   },
//   {
//     image: CareerSvg3,
//     title: "Technical Interview",
//     des: "Candidates who clear the telephonic round proceed to the technical interview. This stage is conducted by subject matter experts or hiring managers to assess the candidate’s problem-solving abilities, domain knowledge, and hands-on experience. Depending on the role, this interview may include:",
//   },
//   {
//     image: CareerSvg4,
//     title: "Assignment Round",
//     des: "For certain roles, candidates are given a practical assignment or project to complete within a specified timeframe. This allows us to evaluate their ability to apply theoretical knowledge to real-world problems, their approach to problem-solving, and their efficiency in execution. The assignment is reviewed by the hiring team to determine the candidate’s technical proficiency and creativity",
//   },
//   {
//     image: CareerSvg5,
//     title: "Onboarding",
//     des: "Once a candidate successfully clears all interview stages, they receive an offer letter and begin the onboarding process. This includes: 1) Document verification and completion of necessary formalities, 2) Introduction to company policies, teams, and work environment, 3) Training sessions (if applicable), 4) Allocation of necessary resources and tools for their role",
//   },
// ];

// gsap.registerPlugin(ScrollTrigger);

// function CareerPage() {
//   const [showApplication, setShowApplication] = useState(false);
//   const [careers, setCareers] = useState([]);
//   const [showMore, setShowMore] = useState(null);
//   const params = useParams();

//   const closeForm = () => {
//     setShowApplication(false);
//   };

//   useEffect(() => {
//     setCareers(careersData);
//   }, []);

//   // Scroll to section based on URL params
//   useEffect(() => {
//     const validSections = [
//       "Opportunies",
//       "HiringProcedure",
//       "LifeStaciaCorp",
//       "Ourculture",
//     ];
//     const sectionKey = params.key || null;

//     console.log("URL Parameter:", sectionKey); // Debug: Log the URL parameter

//     if (sectionKey && validSections.includes(sectionKey)) {
//       const attemptScroll = () => {
//         const section = document.getElementById(sectionKey);
//         if (section) {
//           console.log(`Found section: ${sectionKey}`); // Debug: Confirm section found
//           const y = section.getBoundingClientRect().top + window.pageYOffset - 80;
//           window.scrollTo({ top: y, behavior: "smooth" });
//         } else {
//           console.warn(`Section with ID "${sectionKey}" not found in DOM. Retrying...`);
//           // Retry after a longer delay if section is not found
//           setTimeout(attemptScroll, 500);
//         }
//       };

//       // Initial attempt after 500ms to allow lazy-loaded components to render
//       const timer = setTimeout(() => {
//         requestAnimationFrame(attemptScroll);
//       }, 500);

//       return () => clearTimeout(timer);
//     } else {
//       console.log("No valid section key or no key provided, scrolling to top.");
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [params.key]);

//   const toggleShowMore = (i) => {
//     setShowMore(showMore === i ? null : i);
//   };

//   return (
//     <Suspense fallback={<div><LoadingStar /></div>}>
//       <div className={showApplication ? "fixed" : ""}>
//         <div className="nav_style">
//           <NavBar />
//           <SideBar />
//         </div>
//         <div className="career-hero-section">
//           <div className="career-hero-contents">
//             <div className="career-title-section">
//               <div className="career-title">
//                 <span className="test-seclection-white">Careers</span>
//                 <Star />
//               </div>
//               <div
//                 style={{ opacity: "0.6", fontSize: "30px", fontWeight: 500 }}
//                 className="test-seclection-white"
//               >
//                 In Stacia Corp
//               </div>
//             </div>
//             <div className="career-info-section">
//               <div className="career-info-section-heading test-seclection-white">
//                 Come, join us!
//                 <span
//                   style={{ color: "#0047FF", padding: "0rem 1rem" }}
//                   className="test-seclection-white"
//                 >
//                   We're hiring.
//                 </span>
//               </div>
//               <div className="career-hero-info test-seclection-white">
//                 "At our core, we are driven by the belief that everyone should
//                 have the opportunity to discover and pursue their dream job. Our
//                 relentless dedication is focused on making this a reality. Join
//                 us now and take the first step toward your dream career!"
//               </div>
//             </div>
//           </div>
//         </div>
//         <div id="Opportunies">
//           <div
//             style={{
//               textAlign: "center",
//               userSelect: "none",
//             }}
//             className="career-headings"
//           >
//             Opportunities
//           </div>
//           {careers?.map((eachJob, index) => (
//             <CareerComponent
//               key={index}
//               i={index}
//               data={eachJob}
//               showMore={showMore}
//               toggleShowMore={toggleShowMore}
//               showApplication={showApplication}
//               setShowApplication={setShowApplication}
//             />
//           ))}
//         </div>
//         <div className="career-hiring-process" id="HiringProcedure">
//           <div className="career-headings">Hiring Procedure</div>
//           <div className="career-hiring-data-desk">
//             <HorizontalScrollContainer />
//           </div>
//           <div className="career-hiring-data-mob-container">
//             {HiringData.map((eachStep, i) => (
//               <div key={i} className="panel">
//                 <div className="career-hiring-item-num">{`0${i + 1}`}</div>
//                 <div className="career-hiring-illustrate">
//                   <img src={eachStep.image} alt="" />
//                 </div>
//                 <div className="career-hiring-item-title">{eachStep.title}</div>
//                 <p className="career-hiring-item-des">{eachStep.des}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="life-at-stacia" id="LifeStaciaCorp">
//           <div className="career-headings">Life @ Stacia Corp</div>
//           <div className="image-layout-container">
//             <div className="img-container1">
//               <img src={LifeStaciaImg1} alt="" className="Life-Img" />
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 gap: "1rem",
//               }}
//             >
//               <div className="img-container2">
//                 <img src={LifeStaciaImg2} alt="" className="Life-Img" />
//               </div>
//               <div className="img-container3">
//                 <img src={LifeStaciaImg3} alt="" className="Life-Img" />
//               </div>
//             </div>
//             <div className="img-container4">
//               <img src={LifeStaciaImg4} alt="" className="Life-Img" />
//             </div>
//           </div>
//         </div>
//         <div style={{ margin: "1rem" }}>
//           <CareerMobileCulture />
//         </div>
//         <div
//           style={{
//             marginLeft: "80px",
//             marginRight: "80px",
//             marginBottom: "10rem",
//           }}
//           id="Ourculture"
//         >
//           <div className="our-cultures">
//             <div className="career-headings">Our Culture</div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 flex: "1 fr",
//               }}
//             >
//               <div>
//                 <div className="culture-titles">Office Environment</div>
//                 <p className="culture-contents">
//                   At Stacia Corp, our office environment is designed to inspire
//                   innovation, creativity, foster collaboration, and support
//                   productivity. We believe that where you work is just as
//                   important as how you work, which is why we’ve created a
//                   dynamic and welcoming space that reflects our commitment to
//                   innovation and teamwork. Open, Collaborative Spaces.
//                 </p>
//               </div>
//               <div>
//                 <div className="culture-titles">Working Model</div>
//                 <p className="culture-contents">
//                   At Stacia Corp, we believe that flexibility and collaboration
//                   are key to driving innovation and productivity. Our working
//                   model is built around agile principles. Teams are empowered to
//                   move quickly, adapt to changing needs, and continuously
//                   improve processes. With regular check-ins, feedback loops, and
//                   sprint planning, we ensure that we remain responsive to both
//                   internal and client needs.
//                 </p>
//               </div>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 flex: "1 fr",
//               }}
//             >
//               <div>
//                 <div className="culture-titles">Co-workers Environment</div>
//                 <p className="culture-contents">
//                   At Stacia Corp, we pride ourselves on fostering a positive,
//                   inclusive, and supportive co-worker environment where everyone
//                   feels valued and empowered to succeed. Our team is more than
//                   just colleagues—we are a community of talented individuals
//                   working together to achieve great things.
//                 </p>
//               </div>
//               <div>
//                 <div className="culture-titles">Open Communication</div>
//                 <p className="culture-contents">
//                   Transparent communication is key to our success. We maintain
//                   an open-door policy that encourages feedback, discussion, and
//                   the sharing of ideas. This approach ensures that every voice
//                   is heard and valued, creating a more cohesive team. Our
//                   diverse workforce brings a wealth of perspectives and
//                   experiences, enriching our collaborative efforts. We embrace
//                   this diversity, recognizing that it leads to more creative
//                   problem-solving and innovative solutions
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//         <MobileFooter />
//         {showApplication && <JobForm closeForm={closeForm} />}
//       </div>
//     </Suspense>
//   );
// }

// const HorizontalScrollContainer = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const [xRange, setXRange] = useState(["1%", "-35%"]);

//   useEffect(() => {
//     const updateRange = () => {
//       const width = window.innerWidth;

//       if (width <= 768) {
//         setXRange(["1%", "-80%"]); // mobile
//       } else if (width <= 1366) {
//         setXRange(["1%", "-90%"]); // small screen and big screen
//       } else {
//         setXRange(["1%", "-35%"]); //1920
//       }
//     };

//     updateRange(); // Initial call
//     window.addEventListener("resize", updateRange);

//     return () => window.removeEventListener("resize", updateRange);
//   }, []);

//   const x = useTransform(scrollYProgress, [0, 1], xRange);

//   return (
//     <div ref={targetRef} style={{ height: "300vh", position: "relative" }}>
//       <div
//         className="career-hiring-data-container"
//         style={{
//           height: "92vh",
//           position: "sticky",
//           top: "80px",
//         }}
//       >
//         <motion.div style={{ display: "flex", columnGap: "12rem", x }}>
//           {HiringData.map((eachStep, i) => (
//             <div key={i} className="panel">
//               <div className="career-hiring-item-num">{`0${i + 1}`}</div>
//               <div className="career-hiring-illustrate">
//                 <img src={eachStep.image} alt="" />
//               </div>
//               <div className="career-hiring-item-title">{eachStep.title}</div>
//               <p className="career-hiring-item-des">{eachStep.des}</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CareerPage;




import React, { useEffect, useRef, Suspense } from "react";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useTransform, useScroll } from "framer-motion";
import { useParams } from "react-router-dom";
import careersData from "../Data/Career.json";
import LifeStaciaImg1 from "../assets/cr-img-1.png";
import LifeStaciaImg2 from "../assets/cr-img-2.png";
import LifeStaciaImg3 from "../assets/cr-img3.png";
import LifeStaciaImg4 from "../assets/careerGroup.png";
import CareerSvg1 from "../assets/careerSvg1.svg";
import CareerSvg2 from "../assets/careerSvg2.svg";
import CareerSvg3 from "../assets/careerSvg3.svg";
import CareerSvg4 from "../assets/careerSvg4.svg";
import CareerSvg5 from "../assets/careerSvg5.svg";
import "../styles/career.css";
import LoadingStar from "../components/LoadingStar";

// Lazy load components
const NavBar = React.lazy(() => import("../components/NavBar"));
const Footer = React.lazy(() => import("../components/Footer"));
const CareerComponent = React.lazy(() => import("../components/CareerComponent"));
const CareerMobileCulture = React.lazy(() =>
  import("../components/careers/careerMobileCulture")
);
const MobileFooter = React.lazy(() => import("../components/MobileFooter"));
const SideBar = React.lazy(() => import("../components/SideBar"));
const Star = React.lazy(() => import("../components/Star"));
const JobForm = React.lazy(() => import("../components/careers/JobForm"));

// Hiring data
const HiringData = [
  {
    image: CareerSvg1,
    title: "Resume Screening",
    des: "The first step in our hiring process is reviewing resumes to assess candidates' qualifications, experience, and relevance to the job role. Our HR team evaluates key aspects such as educational background, work experience, technical skills, and achievements. Candidates who meet the required criteria are shortlisted for the next stage.",
  },
  {
    image: CareerSvg2,
    title: "Telephonic Interview",
    des: "Shortlisted candidates are contacted for a brief telephonic interview. This step helps us understand the candidate’s communication skills, career aspirations, and initial fit for the role. Basic technical and role-specific questions may be asked to gauge their familiarity with the job requirements.",
  },
  {
    image: CareerSvg3,
    title: "Technical Interview",
    des: "Candidates who clear the telephonic round proceed to the technical interview. This stage is conducted by subject matter experts or hiring managers to assess the candidate’s problem-solving abilities, domain knowledge, and hands-on experience. Depending on the role, this interview may include:",
  },
  {
    image: CareerSvg4,
    title: "Assignment Round",
    des: "For certain roles, candidates are given a practical assignment or project to complete within a specified timeframe. This allows us to evaluate their ability to apply theoretical knowledge to real-world problems, their approach to problem-solving, and their efficiency in execution. The assignment is reviewed by the hiring team to determine the candidate’s technical proficiency and creativity",
  },
  {
    image: CareerSvg5,
    title: "Onboarding",
    des: "Once a candidate successfully clears all interview stages, they receive an offer letter and begin the onboarding process. This includes: 1) Document verification and completion of necessary formalities, 2) Introduction to company policies, teams, and work environment, 3) Training sessions (if applicable), 4) Allocation of necessary resources and tools for their role",
  },
];

gsap.registerPlugin(ScrollTrigger);

function CareerPage() {
  const [showApplication, setShowApplication] = useState(false);
  const [careers, setCareers] = useState([]);
  const [showMore, setShowMore] = useState(null);
  const params = useParams();

  const closeForm = () => {
    setShowApplication(false);
  };

  useEffect(() => {
    setCareers(careersData);
  }, []);

  // Scroll to section based on URL params (robust + normalized)
  useEffect(() => {
    // valid section ids (lowercase) — matches the JSON you gave
    const validSections = [
      "opportunities",
      "hiringprocedure",
      "lifestaciacorp",
      "ourculture",
    ];

    // get raw key (handles cases where route provides full path like "career/opportunities")
    const rawKey = params.key || "";
    const extractKey = (k) => {
      if (!k) return "";
      // if the param contains slashes, take last segment
      const parts = k.split("/").filter(Boolean);
      return parts.length ? parts[parts.length - 1] : k;
    };

    let key = extractKey(rawKey).toLowerCase();

    if (!key) {
      // no key -> scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (!validSections.includes(key)) {
      // not a recognized key -> scroll to top (or ignore)
      console.warn(`Unrecognized section key "${key}". Scrolling to top.`);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // retry logic: try multiple times because lazy-loaded components may mount after initial run
    let cancelled = false;
    const maxAttempts = 10;

    const attemptScroll = (attempt = 1) => {
      if (cancelled) return;
      const section = document.getElementById(key);
      if (section) {
        // found: scroll to it (offset 80 to account for fixed header)
        const y = section.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (attempt < maxAttempts) {
        // schedule another attempt with slight backoff
        const delay = 250 * attempt; // 250ms, 500ms, 750ms...
        setTimeout(() => {
          // use rAF to try once more synchronously when DOM paints
          requestAnimationFrame(() => attemptScroll(attempt + 1));
        }, delay);
      } else {
        // final fallback: scroll top
        console.warn(
          `Could not find section with id="${key}" after ${maxAttempts} attempts.`
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // start attempts after a short delay to allow lazy components to start rendering
    const starterTimer = setTimeout(() => requestAnimationFrame(() => attemptScroll(1)), 300);

    return () => {
      cancelled = true;
      clearTimeout(starterTimer);
    };
  }, [params.key]);

  const toggleShowMore = (i) => {
    setShowMore(showMore === i ? null : i);
  };

  return (
    <Suspense fallback={<div><LoadingStar /></div>}>
      <div className={showApplication ? "fixed" : ""}>
        <div className="nav_style">
          <NavBar />
          <SideBar />
        </div>

        <div className="career-hero-section">
          <div className="career-hero-contents">
            <div className="career-title-section">
              <div className="career-title">
                <span className="test-seclection-white">Careers</span>
                <Star />
              </div>
              <div
                style={{ opacity: "0.6", fontSize: "30px", fontWeight: 500 }}
                className="test-seclection-white"
              >
                In Stacia Corp
              </div>
            </div>

            <div className="career-info-section">
              <div className="career-info-section-heading test-seclection-white">
                Come, join us!
                <span
                  style={{ color: "#0047FF", padding: "0rem 1rem" }}
                  className="test-seclection-white"
                >
                  We're hiring.
                </span>
              </div>
              <div className="career-hero-info test-seclection-white">
                "At our core, we are driven by the belief that everyone should
                have the opportunity to discover and pursue their dream job. Our
                relentless dedication is focused on making this a reality. Join
                us now and take the first step toward your dream career!"
              </div>
            </div>
          </div>
        </div>

        {/* NOTE: IDs below are lowercase and match JSON paths */}
        <div id="opportunities">
          <div
            style={{
              textAlign: "center",
              userSelect: "none",
            }}
            className="career-headings"
          >
            Opportunities
          </div>
          {careers?.map((eachJob, index) => (
            <CareerComponent
              key={index}
              i={index}
              data={eachJob}
              showMore={showMore}
              toggleShowMore={toggleShowMore}
              showApplication={showApplication}
              setShowApplication={setShowApplication}
            />
          ))}
        </div>

        <div className="career-hiring-process" id="hiringprocedure">
          <div className="career-headings">Hiring Procedure</div>
          <div className="career-hiring-data-desk">
            <HorizontalScrollContainer />
          </div>
          <div className="career-hiring-data-mob-container">
            {HiringData.map((eachStep, i) => (
              <div key={i} className="panel">
                <div className="career-hiring-item-num">{`0${i + 1}`}</div>
                <div className="career-hiring-illustrate">
                  <img src={eachStep.image} alt="" />
                </div>
                <div className="career-hiring-item-title">{eachStep.title}</div>
                <p className="career-hiring-item-des">{eachStep.des}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="life-at-stacia" id="lifestaciacorp">
          <div className="career-headings">Life @ Stacia Corp</div>
          <div className="image-layout-container">
            <div className="img-container1">
              <img src={LifeStaciaImg1} alt="" className="Life-Img" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <div className="img-container2">
                <img src={LifeStaciaImg2} alt="" className="Life-Img" />
              </div>
              <div className="img-container3">
                <img src={LifeStaciaImg3} alt="" className="Life-Img" />
              </div>
            </div>
            <div className="img-container4">
              <img src={LifeStaciaImg4} alt="" className="Life-Img" />
            </div>
          </div>
        </div>

        <div style={{ margin: "1rem" }}>
          <CareerMobileCulture />
        </div>

        <div
          style={{
            marginLeft: "80px",
            marginRight: "80px",
            marginBottom: "10rem",
          }}
          id="ourculture"
        >
          <div className="our-cultures">
            <div className="career-headings">Our Culture</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flex: "1 fr",
              }}
            >
              <div>
                <div className="culture-titles">Office Environment</div>
                <p className="culture-contents">
                  At Stacia Corp, our office environment is designed to inspire
                  innovation, creativity, foster collaboration, and support
                  productivity. We believe that where you work is just as
                  important as how you work, which is why we’ve created a
                  dynamic and welcoming space that reflects our commitment to
                  innovation and teamwork. Open, Collaborative Spaces.
                </p>
              </div>
              <div>
                <div className="culture-titles">Working Model</div>
                <p className="culture-contents">
                  At Stacia Corp, we believe that flexibility and collaboration
                  are key to driving innovation and productivity. Our working
                  model is built around agile principles. Teams are empowered to
                  move quickly, adapt to changing needs, and continuously
                  improve processes. With regular check-ins, feedback loops, and
                  sprint planning, we ensure that we remain responsive to both
                  internal and client needs.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flex: "1 fr",
              }}
            >
              <div>
                <div className="culture-titles">Co-workers Environment</div>
                <p className="culture-contents">
                  At Stacia Corp, we pride ourselves on fostering a positive,
                  inclusive, and supportive co-worker environment where everyone
                  feels valued and empowered to succeed. Our team is more than
                  just colleagues—we are a community of talented individuals
                  working together to achieve great things.
                </p>
              </div>
              <div>
                <div className="culture-titles">Open Communication</div>
                <p className="culture-contents">
                  Transparent communication is key to our success. We maintain
                  an open-door policy that encourages feedback, discussion, and
                  the sharing of ideas. This approach ensures that every voice
                  is heard and valued, creating a more cohesive team. Our
                  diverse workforce brings a wealth of perspectives and
                  experiences, enriching our collaborative efforts. We embrace
                  this diversity, recognizing that it leads to more creative
                  problem-solving and innovative solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <MobileFooter />
        {showApplication && <JobForm closeForm={closeForm} />}
      </div>
    </Suspense>
  );
}

const HorizontalScrollContainer = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [xRange, setXRange] = useState(["1%", "-35%"]);

  useEffect(() => {
    const updateRange = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setXRange(["1%", "-80%"]); // mobile
      } else if (width <= 1366) {
        setXRange(["1%", "-90%"]); // small screen and big screen
      } else {
        setXRange(["1%", "-35%"]); //1920
      }
    };

    updateRange(); // Initial call
    window.addEventListener("resize", updateRange);

    return () => window.removeEventListener("resize", updateRange);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], xRange);

  return (
    <div ref={targetRef} style={{ height: "300vh", position: "relative" }}>
      <div
        className="career-hiring-data-container"
        style={{
          height: "92vh",
          position: "sticky",
          top: "80px",
        }}
      >
        <motion.div style={{ display: "flex", columnGap: "12rem", x }}>
          {HiringData.map((eachStep, i) => (
            <div key={i} className="panel">
              <div className="career-hiring-item-num">{`0${i + 1}`}</div>
              <div className="career-hiring-illustrate">
                <img src={eachStep.image} alt="" />
              </div>
              <div className="career-hiring-item-title">{eachStep.title}</div>
              <p className="career-hiring-item-des">{eachStep.des}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CareerPage;
