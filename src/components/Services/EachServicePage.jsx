// import React, { useEffect, useRef, useState } from "react";
// import "../../styles/Services/EachService.css";
// import NavBar from "../NavBar";
// import SideBar from "../SideBar";
// import Footer from "../Footer";
// import MobileFooter from "../MobileFooter";
// import Star from "../Star";
// import { SlLike } from "react-icons/sl";
// import FAQComp from "../FAQComp";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { motion, useTransform, useScroll } from "framer-motion";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const cardsData = [
//   {
//     des: "lorem ipsum dolor sit amet, consectetur adip occum primis in faucibus et justo",
//   },
//   {
//     des: "lorem ipsum dolor sit amet, consectetur adip occum primis in faucibus et justo",
//   },
//   {
//     des: "lorem ipsum dolor sit amet, consectetur adip occum primis in faucibus et justo",
//   },
// ];

// function EachServicePage() {
//   const apiUrl = process.env.REACT_APP_API_URL;
//   const params = useParams();
//   const productKey = params.title.split("-").join(" ");
//   const [singleService, setSingleService] = useState();

//   const FetchService = async () => {
//     try {
//       const res = await axios.get(`${apiUrl}/service/show/${productKey}`);
//       setSingleService(res.data.doc);
//     } catch (error) {}
//   };

//   useEffect(() => {
//     FetchService();
//   }, []);

//   return (
//     <div>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       <div className="each-service-hero-section">
//         <div className="each-service-title">
//           <span>{singleService?.title}</span>
//           <Star />
//         </div>
//       </div>
//       <div className="each-service-container">
//         <div className="each-service-section1">
//           <div className="each-service-section1-img">
//             <img
//               src="https://media.istockphoto.com/id/1977348709/photo/laughing-young-businesswoman-talking-with-colleagues-in-an-office-hallway.webp?a=1&b=1&s=612x612&w=0&k=20&c=1QrGBVFBZyfg0zm_EETpeG49dbAjIPDEOxKRtf7L16Q="
//               alt=""
//             />
//           </div>
//           <div className="each-service-section1-content">
//             <div>Overview</div>
//             <p>{singleService?.des}</p>
//           </div>
//         </div>
//         <div className="each-service-howWeDo-section">
//           {singleService?.whatWeDo.length ? (
//             <HorizontalScrollContainer
//               singleServiceWhatweDo={singleService?.whatWeDo}
//             />
//           ) : (
//             <div />
//           )}
//         </div>
//         <div className="each-service-howWeDo-section-mob">
//           <HorizontalScrollMobile
//             singleServiceWhatweDo={
//               singleService?.whatWeDo ? singleService?.whatWeDo : []
//             }
//           />
//         </div>
//         <div className="each-service-card-section">
//           {cardsData.map((eachItem, i) => (
//             <div key={i} className="each-service-card">
//               <div>
//                 <img
//                   src="https://media.istockphoto.com/id/1977348709/photo/laughing-young-businesswoman-talking-with-colleagues-in-an-office-hallway.webp?a=1&b=1&s=612x612&w=0&k=20&c=1QrGBVFBZyfg0zm_EETpeG49dbAjIPDEOxKRtf7L16Q="
//                   alt=""
//                 />
//               </div>
//               <p>{eachItem.des}</p>
//             </div>
//           ))}
//         </div>
//         <FAQComp />
//       </div>
//       <div>
//         <Footer />
//         <MobileFooter />
//       </div>
//     </div>
//   );
// }

// export default EachServicePage;

// const HorizontalScrollContainer = ({ singleServiceWhatweDo }) => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
//   return (
//     <>
//       <div ref={targetRef} style={{ height: "300vh", position: "relative" }}>
//         <div
//           // className="career-hiring-data-container"
//           style={{
//             height: "100vh",
//             position: "sticky",
//             top: "80px",
//             // display: "flex",
//             overflow: "hidden",
//           }}
//         >
//           <div className="each-service-howWeDo-title">How We Do?</div>
//           <p className="each-service-howWeDo-des">
//             Problem Solved, Step by Step. Your Guide to a Smooth Solution.
//           </p>
//           <motion.div style={{ display: "flex", columnGap: "6rem", x }}>
//             {singleServiceWhatweDo?.map((eachItem, i) => (
//               <div key={i} className="each-service-howWeDo-step">
//                 <div className="each-service-howWeDo-step-icon">
//                   <SlLike color="#fff" fontSize={28} />
//                 </div>
//                 <div className="each-service-howWeDo-step-title">
//                   {eachItem?.title}
//                 </div>
//                 <p className="each-service-howWeDo-step-des">
//                   {eachItem?.desc}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// const HorizontalScrollMobile = ({ singleServiceWhatweDo }) => {
//   return (
//     <div>
//       <div className="each-service-howWeDo-title">How We Do?</div>
//       <p className="each-service-howWeDo-des">
//         Problem Solved, Step by Step. Your Guide to a Smooth Solution.
//       </p>
//       <div style={{ display: "flex", columnGap: "3rem", overflowX: "auto" }}>
//         {singleServiceWhatweDo?.map((eachItem, i) => (
//           <div key={i} className="each-service-howWeDo-step">
//             <div className="each-service-howWeDo-step-icon">
//               <SlLike color="#fff" fontSize={28} />
//             </div>
//             <div className="each-service-howWeDo-step-title">
//               {eachItem?.title}
//             </div>
//             <p className="each-service-howWeDo-step-des">{eachItem?.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };




// import React, { useRef } from "react";
// import "../../styles/Services/EachService.css";
// import NavBar from "../NavBar"; // Ensure default export in NavBar.jsx
// import SideBar from "../SideBar"; // Ensure default export in SideBar.jsx
// import Footer from "../Footer"; // Ensure default export in Footer.jsx
// import MobileFooter from "../MobileFooter"; // Ensure default export in MobileFooter.jsx
// import Star from "../Star"; // Ensure default export in Star.jsx
// import { SlLike } from "react-icons/sl";
// import FAQComp from "../FAQComp"; // Ensure default export in FAQComp.jsx
// import { useParams } from "react-router-dom";
// import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";

// // Import JSON data
// import servicesData from "../../Data/Services.json"; // Verify this path

// // Static card data
// const cardsData = [
//   { des: "lorem ipsum dolor sit amet, consectetur adip occum primis in faucibus et justo" },
//   { des: "lorem ipsum dolor sit amet, consectetur adip occum primis in faucibus et justo" },
//   { des: "lorem ipsum dolor sit amet, consectetur adip occum primis in faucibus et justo" },
// ];

// function EachServicePage() {
//   const params = useParams();
//   const productKey = params.title.split("-").join(" ").toLowerCase();

//   // Find the matching service from the imported JSON data
//   const singleService = servicesData
//     .flatMap(department => department.categories.flatMap(category => category.services))
//     .find(service => service.title.toLowerCase() === productKey);

//   return (
//     <div>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       <div className="each-service-hero-section">
//         <div className="each-service-title">
//           <span>{singleService?.title || "Service Not Found"}</span>
//           <Star />
//         </div>
//       </div>
//       <div className="each-service-container">
//         <div className="each-service-section1">
//           <div className="each-service-section1-img">
//             <img
//               src={singleService?.imageUrl || "No image available."}
//               alt=""
//             />
//           </div>
//           <div className="each-service-section1-content">
//             <div>Overview</div>
//             <p>{singleService?.oneLine || "No description available."}</p>
//           </div>
//         </div>
//         <div className="each-service-howWeDo-section">
//           {singleService?.whatWeDo?.length ? (
//             <HorizontalScrollContainer singleServiceWhatweDo={singleService.whatWeDo} />
//           ) : (
//             <div />
//           )}
//         </div>
//         <div className="each-service-howWeDo-section-mob">
//           <HorizontalScrollMobile singleServiceWhatweDo={singleService?.whatWeDo || []} />
//         </div>
//         {/* <div className="each-service-card-section">
//           {cardsData.map((eachItem, i) => (
//             <div key={i} className="each-service-card">
//               <div>
//                 <img
//                   src="https://media.istockphoto.com/id/1977348709/photo/laughing-young-businesswoman-talking-with-colleagues-in-an-office-hallway.webp?a=1&b=1&s=612x612&w=0&k=20&c=1QrGBVFBZyfg0zm_EETpeG49dbAjIPDEOxKRtf7L16Q="
//                   alt=""
//                 />
//               </div>
//               <p>{eachItem.des}</p>
//             </div>
//           ))}
//         </div> */}
//         <FAQComp />
//       </div>
//       <div>
//         <Footer />
//         <MobileFooter />
//       </div>
//     </div>
//   );
// }

// // const HorizontalScrollContainer = ({ singleServiceWhatweDo }) => {
// //   const targetRef = useRef(null);
// //   // const { scrollYProgress } = useScroll({
// //   //   target: targetRef,
// //   // });

// //   // const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

// //   // const dragX = useMotionValue(0);
// //   // const [width, setWidth] = React.useState(0);

// //   // React.useEffect(()=>{
// //   //   if(targetRef.current){
// //   //     const scrollWidth = targetRef.current.scrollWidth;
// //   //     const offsetWidth = targetRef.current.offsetWidth;
// //   //     setWidth(scrollWidth - offsetWidth)
// //   //   }
// //   // },[singleServiceWhatweDo])
// //   // const x = useTransform(dragX,(latest)=>Math.min(0, Math.max(-width,latest)))
// //   return (
// //     <div ref={targetRef} 
// //     style={{ 
// //     // height: "300vh", 
// //     position: "relative" }}
// //     >
// //       <div
// //         style={{
// //           height: "50vh",
// //           position: "sticky",
// //           top: "80px",
// //           overflowX: "auto"
// //         }}
// //         className="no-scrollbar"
// //       >
// //         <div className="each-service-howWeDo-title">How We Do?</div>
// //         <p className="each-service-howWeDo-des">
// //           Problem Solved, Step by Step. Your Guide to a Smooth Solution.
// //         </p>
// //         {/* <motion.div style={{ display: "flex", columnGap: "6rem", x }}> */}
// //         <div style={{ display: "flex", columnGap: "6rem", padding:"0.2rem" }}>

// //           {singleServiceWhatweDo.map((eachItem, i) => (
// //             <div key={i} className="each-service-howWeDo-step">
// //               <div className="each-service-howWeDo-step-icon">
// //                 <SlLike color="#fff" fontSize={28} />
// //               </div>
// //               <div className="each-service-howWeDo-step-title">
// //                 {eachItem.title}
// //               </div>
// //               <p className="each-service-howWeDo-step-des">{eachItem.des}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// const HorizontalScrollContainer = ({ singleServiceWhatweDo }) => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
//   return (
//     <>
//       <div ref={targetRef} style={{ height: "50vh", position: "relative", }} >
//         <div
//           // className="career-hiring-data-container"
//           className="howWeDo-container"
//         >
//           <div className="each-service-howWeDo-title">How We Do?</div>
//           <p className="each-service-howWeDo-des">
//             Problem Solved, Step by Step. Your Guide to a Smooth Solution.
//           </p>
//           <motion.div style={{ display: "flex", columnGap: "6rem", x }}>
//             {singleServiceWhatweDo?.map((eachItem, i) => (
//               <div key={i} className="each-service-howWeDo-step">
//                 <div className="each-service-howWeDo-step-icon">
//                   <SlLike color="#fff" fontSize={28} />
//                 </div>
//                 <div className="each-service-howWeDo-step-title">
//                   {eachItem?.title}
//                 </div>
//                 <p className="each-service-howWeDo-step-des">
//                   {eachItem?.des}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };


// const HorizontalScrollMobile = ({ singleServiceWhatweDo }) => {
//   return (
//     <div>
//       <div className="each-service-howWeDo-title">How We Do?</div>
//       <p className="each-service-howWeDo-des">
//         Problem Solved, Step by Step. Your Guide to a Smooth Solution.
//       </p>
//       <div style={{ display: "flex", columnGap: "3rem", overflowX: "auto" }}>
//         {singleServiceWhatweDo.map((eachItem, i) => (
//           <div key={i} className="each-service-howWeDo-step">
//             <div className="each-service-howWeDo-step-icon">
//               <SlLike color="#fff" fontSize={28} />
//             </div>
//             <div className="each-service-howWeDo-step-title">
//               {eachItem.title}
//             </div>
//             <p className="each-service-howWeDo-step-des">{eachItem.des}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EachServicePage; // Ensure this is present


//lazy loading



// import React, { useRef, lazy, Suspense } from "react";
// import "../../styles/Services/EachService.css";
// import { SlLike } from "react-icons/sl";
// import { useParams } from "react-router-dom";
// import { motion, useTransform, useScroll } from "framer-motion";
// import servicesData from "../../Data/Services.json";

// import SuggestionService from "../ReUsableComp/SuggestionService";

// // Lazy load components
// const NavBar = lazy(() => import("../NavBar"));
// const SideBar = lazy(() => import("../SideBar"));
// const Star = lazy(() => import("../Star"));
// const Footer = lazy(() => import("../Footer"));
// const MobileFooter = lazy(() => import("../MobileFooter"));
// const FAQComp = lazy(() => import("../FAQComp"));

// // Static card data
// const cardsData = [
//   { des: "lorem ipsum dolor sit amet, consectetur adip occum primis in faucibus et justo" },
//   { des: "lorem ipsum dolor sit amet, consectetur adip occum primis in faucibus et justo" },
//   { des: "lorem ipsum dolor sit amet, consectetur adip occum primis in faucibus et justo" },
// ];

// function EachServicePage() {
//   const params = useParams();
//   const productKey = params.title.split("-").join(" ").toLowerCase();

//   // Find the matching service from the imported JSON data
//   const singleService = servicesData
//     .flatMap(department => department.categories.flatMap(category => category.services))
//     .find(service => service.title.toLowerCase() === productKey);

//   return (
//     <Suspense fallback={<div>Loading Service Page...</div>}>
//       <div>
//         <div className="nav_style">
//           <Suspense fallback={<div>Loading Navigation...</div>}>
//             <NavBar />
//           </Suspense>
//           <Suspense fallback={<div>Loading Sidebar...</div>}>
//             <SideBar />
//           </Suspense>
//         </div>
//         <div className="each-service-hero-section">
//           <div className="each-service-title">
//             <span>{singleService?.title || "Service Not Found"}</span>
//             <Suspense fallback={<div>Loading Star...</div>}>
//               <Star />
//             </Suspense>
//           </div>
//         </div>
//         <div className="each-service-container">
//           <div className="each-service-section1">
//             <div className="each-service-section1-img">
//               <img
//                 src={singleService?.imageUrl || "No image available."}
//                 alt={singleService?.title || "Service"}
//                 loading="lazy"
//               />
//             </div>
//             <div className="each-service-section1-content">
//               <div>Overview</div>
//               <p>{singleService?.oneLine || "No description available."}</p>
//             </div>
//           </div>
//           <div className="each-service-howWeDo-section">
//             {singleService?.whatWeDo?.length ? (
//               <HorizontalScrollContainer singleServiceWhatweDo={singleService.whatWeDo} />
//             ) : (
//               <div />
//             )}
//           </div>
//           <div className="each-service-howWeDo-section-mob">
//             <HorizontalScrollMobile singleServiceWhatweDo={singleService?.whatWeDo || []} />
//           </div>
//           {/* Commented-out section with image, adding loading="lazy" for completeness */}
//           {/* <div className="each-service-card-section">
//             {cardsData.map((eachItem, i) => (
//               <div key={i} className="each-service-card">
//                 <div>
//                   <img
//                     src="https://media.istockphoto.com/id/1977348709/photo/laughing-young-businesswoman-talking-with-colleagues-in-an-office-hallway.webp?a=1&b=1&s=612x612&w=0&k=20&c=1QrGBVFBZyfg0zm_EETpeG49dbAjIPDEOxKRtf7L16Q="
//                     alt="Card"
//                     loading="lazy"
//                   />
//                 </div>
//                 <p>{eachItem.des}</p>
//               </div>
//             ))}
//           </div> */}
//           <Suspense fallback={<div>Loading FAQs...</div>}>
//             <FAQComp />
//           </Suspense>
//         </div>
//         <div>
//           <SuggestionService />
//         </div>
//         <div>
//           <Suspense fallback={<div>Loading Footer...</div>}>
//             <Footer />
//           </Suspense>
//           <Suspense fallback={<div>Loading Mobile Footer...</div>}>
//             <MobileFooter />
//           </Suspense>
//         </div>
//       </div>
//     </Suspense>
//   );
// }

// const HorizontalScrollContainer = ({ singleServiceWhatweDo }) => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
//   return (
//     <div ref={targetRef} style={{ height: "50vh", position: "relative" }}>
//       <div className="howWeDo-container">
//         <div className="each-service-howWeDo-title">How We Do?</div>
//         <p className="each-service-howWeDo-des">
//           Problem Solved, Step by Step. Your Guide to a Smooth Solution.
//         </p>
//         <motion.div style={{ display: "flex", columnGap: "6rem", x }}>
//           {singleServiceWhatweDo?.map((eachItem, i) => (
//             <div key={i} className="each-service-howWeDo-step">
//               <div className="each-service-howWeDo-step-icon">
//                 <SlLike color="#fff" fontSize={28} />
//               </div>
//               <div className="each-service-howWeDo-step-title">
//                 {eachItem?.title}
//               </div>
//               <p className="each-service-howWeDo-step-des">
//                 {eachItem?.des}
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// const HorizontalScrollMobile = ({ singleServiceWhatweDo }) => {
//   return (
//     <div>
//       <div className="each-service-howWeDo-title">How We Do?</div>
//       <p className="each-service-howWeDo-des">
//         Problem Solved, Step by Step. Your Guide to a Smooth Solution.
//       </p>
//       <div style={{ display: "flex", columnGap: "3rem", overflowX: "auto" }}>
//         {singleServiceWhatweDo.map((eachItem, i) => (
//           <div key={i} className="each-service-howWeDo-step">
//             <div className="each-service-howWeDo-step-icon">
//               <SlLike color="#fff" fontSize={28} />
//             </div>
//             <div className="each-service-howWeDo-step-title">
//               {eachItem.title}
//             </div>
//             <p className="each-service-howWeDo-step-des">{eachItem.des}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EachServicePage;



//praveen

import React, { useRef, lazy, Suspense } from "react";
import "../../styles/Services/EachService.css";
import { SlLike } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { motion, useTransform, useScroll } from "framer-motion";
import servicesData from "../../Data/Services.json";
import { useState, useEffect } from "react";
import SuggestionProducts from "../ReUsableComp/SuggestionProducts"

import SuggestionService from "../ReUsableComp/SuggestionService";
import LoadingStar from "../LoadingStar";
import imgban from "../../assets/serviceDefaultImg.png";
import BentoCarousel from "./BentoCarousel";
import BusinessStartupGuide from "../../pages/Bussiness.jsx";

// Lazy load components
const NavBar = lazy(() => import("../NavBar"));
const SideBar = lazy(() => import("../SideBar"));
const SpecificHeroSection = lazy(() => import("../SpecificHeroSection"));
const Star = lazy(() => import("../Star"));
const Footer = lazy(() => import("../Footer"));
const MobileFooter = lazy(() => import("../MobileFooter"));
const FAQComp = lazy(() => import("../FAQComp"));

const items = [
  { title: "Welcome", description: "First slide — will move up then start carousel" },
  { title: "Feature A", description: "Info about feature A" },
  { title: "Feature B", description: "Info about feature B" },
  { title: "End", description: "Last slide" },
];

// Static card data
const cardsData = [
  { des: "lorem ipsum dolor sit amet, consectetur adip occum primis in faucibus et justo" },
  { des: "lorem ipsum dolor sit amet, consectetur adip occum primis in faucibus et justo" },
  { des: "lorem ipsum dolor sit amet, consectetur adip occum primis in faucibus et justo" },
];


function EachServicePage() {
  const params = useParams();
  const productKey = params.title.split("-").join(" ").toLowerCase();

  // Find the matching service from the imported JSON data
  const singleService = servicesData
    .flatMap(department => department.categories.flatMap(category => category.services))
    .find(service => service.title.toLowerCase() === productKey);

  return (
    <Suspense
      fallback={
        <div>
          <LoadingStar />
        </div>
      }
    >
      <div>
        <div className="nav_style">
          <Suspense
            fallback={
              <div>
                <LoadingStar />
              </div>
            }
          >
            <NavBar />
          </Suspense>
          <Suspense
            fallback={
              <div>
                <LoadingStar />
              </div>
            }
          >
            <SideBar />
          </Suspense>
        </div>
        {/* <div className="each-service-hero-section">
          <div className="each-service-title">
            <span>{singleService?.title || "Service Not Found"}</span>
            <Suspense
              fallback={
                <div>
                  <LoadingStar />
                </div>
              }
            >
              <Star />
            </Suspense>
          </div>
        </div> */}
        <SpecificHeroSection item={singleService} />
        <BusinessStartupGuide dept={singleService?.department} />


        <div ><BentoCarousel /></div>
        <div className="each-service-container">
          {/* <div className="each-service-section1">
            <div className="each-service-section1-img">
              <img
                src={singleService?.imageUrl || "No image available."}
                alt={singleService?.title || "Service"}
                loading="lazy"
              />
            </div>
            <div className="each-service-section1-content">
              <div>Overview</div>
              <p>{singleService?.oneLine || "No description available."}</p>
            </div>
          </div> */}
          <div className="each-service-howWeDo-section">
            {singleService?.whatWeDo?.length ? (
              <HorizontalScrollContainer
                singleServiceWhatweDo={singleService.whatWeDo}
              />
            ) : (
              <div />
            )}
          </div>
          <div className="each-service-howWeDo-section-mob">
            <HorizontalScrollMobile
              singleServiceWhatweDo={singleService?.whatWeDo || []}
            />
          </div>
          {/* Commented-out section with image, adding loading="lazy" for completeness */}
          {/* <div className="each-service-card-section">
            {cardsData.map((eachItem, i) => (
              <div key={i} className="each-service-card">
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1977348709/photo/laughing-young-businesswoman-talking-with-colleagues-in-an-office-hallway.webp?a=1&b=1&s=612x612&w=0&k=20&c=1QrGBVFBZyfg0zm_EETpeG49dbAjIPDEOxKRtf7L16Q="
                    alt="Card"
                    loading="lazy"
                  />
                </div>
                <p>{eachItem.des}</p>
              </div>
            ))}
          </div> */}
          <Suspense
            fallback={
              <div>
                <LoadingStar />
              </div>
            }
          >
            <FAQComp />
          </Suspense>
        </div>


        <div>
          <SuggestionProducts />
          <SuggestionService />
        </div>
        <div>
          <Suspense
            fallback={
              <div>
                <LoadingStar />
              </div>
            }
          >
            <Footer />
          </Suspense>
          <Suspense
            fallback={
              <div>
                <LoadingStar />
              </div>
            }
          >
            <MobileFooter />
          </Suspense>
        </div>
      </div>
    </Suspense>
  );
}
const HorizontalScrollContainer = ({ singleServiceWhatweDo }) => {
  const targetRef = useRef(null);

  // Use scroll progress to track when the section's bottom reaches the viewport bottom
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end", "start"], // Start when section top hits viewport bottom, end when section bottom hits viewport top
  });

  // Responsive xRange based on screen width
  const [xRange, setXRange] = useState(["0%", "-100%"]);

  useEffect(() => {
    const updateRange = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setXRange(["0%", "-80%"]); // Mobile
      } else if (width <= 1366) {
        setXRange(["0%", "-90%"]); // Small and big screens
      } else {
        setXRange(["0%", "-5%"]); // 1920px and above
      }
    };

    updateRange(); // Initial call
    window.addEventListener("resize", updateRange);

    return () => window.removeEventListener("resize", updateRange);
  }, []);

  // Map scroll progress to the responsive xRange
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", xRange[1]]);


  return (
    <div ref={targetRef} style={{ height: "50vh", position: "relative" }}>
      <div className="howWeDo-container">
        <div className="each-service-howWeDo-title">How We Do?</div>
        <p className="each-service-howWeDo-des">
          Problem Solved, Step by Step. Your Guide to a Smooth Solution.
        </p>
        <motion.div style={{ display: "flex", columnGap: "6rem", x }}>
          {singleServiceWhatweDo?.map((eachItem, i) => (
            <div key={i} className="each-service-howWeDo-step">
              <div className="each-service-howWeDo-step-icon">
                <SlLike color="#fff" fontSize={28} />
              </div>
              <div className="each-service-howWeDo-step-title">
                {eachItem?.title}
              </div>
              <p className="each-service-howWeDo-step-des">{eachItem?.des}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const HorizontalScrollMobile = ({ singleServiceWhatweDo }) => {
  return (
    <div>
      <div className="each-service-howWeDo-title">How We Do?</div>
      <p className="each-service-howWeDo-des">
        Problem Solved, Step by Step. Your Guide to a Smooth Solution.
      </p>
      <div style={{ display: "flex", columnGap: "3rem", overflowX: "auto" }}>
        {singleServiceWhatweDo.map((eachItem, i) => (
          <div key={i} className="each-service-howWeDo-step">
            <div className="each-service-howWeDo-step-icon">
              <SlLike color="#fff" fontSize={28} />
            </div>
            <div className="each-service-howWeDo-step-title">
              {eachItem.title}
            </div>
            <p className="each-service-howWeDo-step-des">{eachItem.des}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default EachServicePage;