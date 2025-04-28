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




import React, { useRef } from "react";
import "../../styles/Services/EachService.css";
import NavBar from "../NavBar"; // Ensure default export in NavBar.jsx
import SideBar from "../SideBar"; // Ensure default export in SideBar.jsx
import Footer from "../Footer"; // Ensure default export in Footer.jsx
import MobileFooter from "../MobileFooter"; // Ensure default export in MobileFooter.jsx
import Star from "../Star"; // Ensure default export in Star.jsx
import { SlLike } from "react-icons/sl";
import FAQComp from "../FAQComp"; // Ensure default export in FAQComp.jsx
import { useParams } from "react-router-dom";
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";

// Import JSON data
import servicesData from "../../Data/Services.json"; // Verify this path

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
    <div>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      <div className="each-service-hero-section">
        <div className="each-service-title">
          <span>{singleService?.title || "Service Not Found"}</span>
          <Star />
        </div>
      </div>
      <div className="each-service-container">
        <div className="each-service-section1">
          <div className="each-service-section1-img">
            <img
              src="https://media.istockphoto.com/id/1977348709/photo/laughing-young-businesswoman-talking-with-colleagues-in-an-office-hallway.webp?a=1&b=1&s=612x612&w=0&k=20&c=1QrGBVFBZyfg0zm_EETpeG49dbAjIPDEOxKRtf7L16Q="
              alt=""
            />
          </div>
          <div className="each-service-section1-content">
            <div>Overview</div>
            <p>{singleService?.description || "No description available."}</p>
          </div>
        </div>
        <div className="each-service-howWeDo-section">
          {singleService?.whatWeDo?.length ? (
            <HorizontalScrollContainer singleServiceWhatweDo={singleService.whatWeDo} />
          ) : (
            <div />
          )}
        </div>
        <div className="each-service-howWeDo-section-mob">
          <HorizontalScrollMobile singleServiceWhatweDo={singleService?.whatWeDo || []} />
        </div>
        <div className="each-service-card-section">
          {cardsData.map((eachItem, i) => (
            <div key={i} className="each-service-card">
              <div>
                <img
                  src="https://media.istockphoto.com/id/1977348709/photo/laughing-young-businesswoman-talking-with-colleagues-in-an-office-hallway.webp?a=1&b=1&s=612x612&w=0&k=20&c=1QrGBVFBZyfg0zm_EETpeG49dbAjIPDEOxKRtf7L16Q="
                  alt=""
                />
              </div>
              <p>{eachItem.des}</p>
            </div>
          ))}
        </div>
        <FAQComp />
      </div>
      <div>
        <Footer />
        <MobileFooter />
      </div>
    </div>
  );
}

// const HorizontalScrollContainer = ({ singleServiceWhatweDo }) => {
//   const targetRef = useRef(null);
//   // const { scrollYProgress } = useScroll({
//   //   target: targetRef,
//   // });

//   // const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

//   // const dragX = useMotionValue(0);
//   // const [width, setWidth] = React.useState(0);

//   // React.useEffect(()=>{
//   //   if(targetRef.current){
//   //     const scrollWidth = targetRef.current.scrollWidth;
//   //     const offsetWidth = targetRef.current.offsetWidth;
//   //     setWidth(scrollWidth - offsetWidth)
//   //   }
//   // },[singleServiceWhatweDo])
//   // const x = useTransform(dragX,(latest)=>Math.min(0, Math.max(-width,latest)))
//   return (
//     <div ref={targetRef} 
//     style={{ 
//     // height: "300vh", 
//     position: "relative" }}
//     >
//       <div
//         style={{
//           height: "50vh",
//           position: "sticky",
//           top: "80px",
//           overflowX: "auto"
//         }}
//         className="no-scrollbar"
//       >
//         <div className="each-service-howWeDo-title">How We Do?</div>
//         <p className="each-service-howWeDo-des">
//           Problem Solved, Step by Step. Your Guide to a Smooth Solution.
//         </p>
//         {/* <motion.div style={{ display: "flex", columnGap: "6rem", x }}> */}
//         <div style={{ display: "flex", columnGap: "6rem", padding:"0.2rem" }}>

//           {singleServiceWhatweDo.map((eachItem, i) => (
//             <div key={i} className="each-service-howWeDo-step">
//               <div className="each-service-howWeDo-step-icon">
//                 <SlLike color="#fff" fontSize={28} />
//               </div>
//               <div className="each-service-howWeDo-step-title">
//                 {eachItem.title}
//               </div>
//               <p className="each-service-howWeDo-step-des">{eachItem.des}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


const HorizontalScrollContainer = ({ singleServiceWhatweDo }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
  return (
    <>
      <div ref={targetRef} style={{ height: "50vh", position: "relative", }} >
        <div
          // className="career-hiring-data-container"
          className="howWeDo-container"
        >
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
                <p className="each-service-howWeDo-step-des">
                  {eachItem?.des}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
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

export default EachServicePage; // Ensure this is present
