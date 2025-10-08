// import React, { useEffect, useState, lazy, Suspense } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/Home.css";  

// import ClientComponent from "./Client";
// import reverse from "../assets/reverse.png";
// import HomeCaseStudy from "../components/Home/HomeCaseStudy";
// // import Four from "../components/Home/Four";
// // import Testimonials from "../components/Home/Testimonials";
// // import ServiceDisplay from "../components/Home/ServiceDisplay";
// // import { graphcms, QUERY_SLUG_CATEGORIES } from "../Graphql/Queries";
// // import StackScroll from "./StackScroll";
// // import MobileStackScroll from "../components/Home/MobileStackScroll";
// // import MobileFooter from "../components/MobileFooter";
// import EventsHosted from "../components/Home/EventsHosted";
// import OurProjects from "../components/Home/OurProjects";
// // import Articles from "../components/Home/Articles";
// // import SideBar from "../components/SideBar";
// // import MobileArticle from "../components/Home/MobileArticle";
// import Star from "../components/Star";
// import { motion } from "framer-motion";
// import LoadingStar from "../components/LoadingStar";
// const Four = React.lazy(() => import("../components/Home/Four"));
// const Testimonials = React.lazy(() =>
//   import("../components/Home/Testimonials")
// );
// const ServiceDisplay = React.lazy(() =>
//   import("../components/Home/ServiceDisplay")
// );
// const StackScroll = React.lazy(() => import("./StackScroll"));
// const MobileStackScroll = React.lazy(() =>
//   import("../components/Home/MobileStackScroll")
// );
// const MobileFooter = React.lazy(() => import("../components/MobileFooter"));
// const Articles = React.lazy(() => import("../components/Home/Articles"));
// const SideBar = React.lazy(() => import("../components/SideBar"));
// const MobileArticle = React.lazy(() =>
//   import("../components/Home/MobileArticle")
// );


// const words = [
//   "Innovation",
//   "Growth",
//   "Productivity",
//   "Efficiency",
//   "Development",
//   "Transformation",
//   "Optimization",
//   "Progress",
//   "Sustainability",
//   "Scalability",
// ];

// function HomePage() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [currentWordIndex, setCurrentWordIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 3000); // Change word every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div>
//       <div className="nav_style">
//         <NavBar />
//         <React.Suspense fallback={<LoadingStar />}>
//           <SideBar />
//         </React.Suspense>
//       </div>
//       {/* <JobForm /> */}
//       {/* home */}
//       <div className="home">
//         <div className="homeSection">
//           <div className="texts">
//             <div className="heroText">
//               <span>Stacia Corp Redefining</span> <Star />
//             </div>
//             <div className="changingText">
//               {/* <AnimatePresence wait> */}
//               <motion.div
//                 key={currentWordIndex} // Change key to trigger remount
//                 initial={{ opacity: 0, y: 20 }} // Start position and opacity
//                 animate={{ opacity: 1, y: 0 }} // End position and opacity
//                 exit={{ opacity: 0, y: -20 }} // Exit position and opacity
//                 transition={{ duration: 0.5 }} // Animation duration
//                 className="changing-word"
//               >
//                 {words[currentWordIndex]}
//               </motion.div>
//               {/* </AnimatePresence> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* product */}
//       <div className="stack-scroll-container">
//         <React.Suspense fallback={<LoadingStar />}>
//           <StackScroll />
//         </React.Suspense>
//       </div>
//       {/* <DestopStacking /> */}
//       <React.Suspense fallback={<LoadingStar />}>
//         <MobileStackScroll />
//       </React.Suspense>
//       {/* client */}

//       <ClientComponent />
//       {/* our services */}
//       <div>
//         <React.Suspense fallback={<LoadingStar />}>
//           <ServiceDisplay />
//         </React.Suspense>
//       </div>



//       {/* Events */}
//       <EventsHosted />


//       {/* case study */}
//       <HomeCaseStudy />


//       {/* Home Projects */}
//       <OurProjects /> 


//       {/* Home Articles  */}

//       <React.Suspense fallback={<LoadingStar />}>
//         <Articles />
//       </React.Suspense>

//       <React.Suspense fallback={<LoadingStar />}>
//         <MobileArticle />
//       </React.Suspense>
//       {/* foundation four */}
//       <React.Suspense fallback={<LoadingStar />}>
//         <Four />
//       </React.Suspense>
//       {/* testimonials */}
//       <React.Suspense fallback={<LoadingStar />}>
//         <Testimonials />
//       </React.Suspense>
//       <Footer />
//       <React.Suspense fallback={<LoadingStar />}>
//         <MobileFooter />
//       </React.Suspense>
//     </div>
//   );
// }

// export default HomePage;


// import React, { useEffect, useState, lazy, Suspense } from "react";
// import { motion } from "framer-motion";
// import LoadingStar from "../components/LoadingStar";
// import Star from "../components/Star";
// import "../styles/Home.css";
// import Popup from "../components/Popup";


// // Lazy-loaded components
// const NavBar = lazy(() => import("../components/NavBar"));
// const Footer = lazy(() => import("../components/Footer"));
// const ToggleButton = lazy(() => import("../components/Home/ToggleButton"));
// const StackScroll = lazy(() => import("./StackScroll"));
// const EventsHosted = lazy(() => import("../components/Home/EventsHosted"));
// const OurProjects = lazy(() => import("../components/Home/OurProjects"));
// const Four = lazy(() => import("../components/Home/Four"));
// const Testimonials = lazy(() => import("../components/Home/Testimonials"));
// const ServiceDisplay = lazy(() => import("../components/Home/ServiceDisplay"));
// const MobileStackScroll = lazy(() =>
//   import("../components/Home/MobileStackScroll")
// );
// const MobileFooter = lazy(() => import("../components/MobileFooter"));
// const Articles = lazy(() => import("../components/Home/Articles"));
// const SideBar = lazy(() => import("../components/SideBar"));
// const MobileArticle = lazy(() => import("../components/Home/MobileArticle"));
// const HomeCaseStudy = lazy(() => import("../components/Home/HomeCaseStudy"));
// const ClientComponent = lazy(() => import("./Client"));
// const WhatsNewSection = lazy(() => import("../components/Home/WhatsNewSection"));
// const OurHistoryTimeline = lazy(() => import("../components/Home/OurHistory"));

// const words = [
//   "Innovation",
//   "Growth",
//   "Productivity",
//   "Efficiency",
//   "Development",
//   "Transformation",
//   "Optimization",
//   "Progress",
//   "Sustainability",
//   "Scalability",
// ];

// function HomePage() {
//   // State management
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);
//   const [selectedToggle, setSelectedToggle] = useState("products");

//   // Scroll to top on mount
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Word-changing animation effect
//   useEffect(() => {
//     setIsMounted(true);
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Handle toggle button selection
//   const handleToggleChange = (selection) => {
//     setSelectedToggle(selection);
//     console.log("Selected:", selection);
//   };

//   return (
//     <React.Suspense fallback={<LoadingStar />}>
//       <div>
//         {/* Navigation */}
//         <div className="nav_style">
//           <NavBar />
//           <SideBar />
//         </div>

//         {/* Hero Section */}
//         <div className="home">
//           <div className="homeSection">
//             <div className="texts">
//               <div className="heroText" style={{ display: "flex" }}>
//                 <span>Stacia Corp Redefining </span> <Star />
//               </div>
//               <Popup />

//               <div className="changingText">
//                 {isMounted && (
//                   <motion.div
//                     key={currentWordIndex}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.5 }}
//                     className="changing-word"
//                   >
//                     {words[currentWordIndex]}
//                   </motion.div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stack Scroll Section with Toggle */}
//         <div className="stack-scroll-container">
//           <div
//             style={{
//               display: "flex",
//               margin: "1rem",
//               paddingBottom: "1rem",
//               justifyContent: "flex-end",
//               alignItems: "center",
//               position: " sticky",
//               top: "20px",
//               // backgroundColor: "white", 
//               zIndex: "100"

//             }}
//           // className="toggle-container1"
//           >
//             <ToggleButton onToggle={handleToggleChange} />
//           </div>
//           <StackScroll onToggle={selectedToggle} />
//         </div>

//         {/* Other Sections */}
//         <MobileStackScroll onToggle={selectedToggle} />
//         <ClientComponent />
//         {/* <ServiceDisplay /> */}
//         <WhatsNewSection />
//         <OurHistoryTimeline />
//         <EventsHosted />
//         <HomeCaseStudy />
//         <OurProjects />
//         <Articles />
//         <MobileArticle />
//         <Four />
//         <Testimonials />
//         <Footer />
//         <MobileFooter />
//       </div>
//     </React.Suspense>
//   );
// }

// export default HomePage;

import React, { useEffect, useState, lazy, Suspense, useRef } from "react";
import { motion } from "framer-motion";
import LoadingStar from "../components/LoadingStar";
import Star from "../components/Star";
import "../styles/Home.css";
import Popup from "../components/Popup";

// Lazy-loaded components
const NavBar = lazy(() => import("../components/NavBar"));
const Footer = lazy(() => import("../components/Footer"));
const ToggleButton = lazy(() => import("../components/Home/ToggleButton"));
const StackScroll = lazy(() => import("./StackScroll"));
const EventsHosted = lazy(() => import("../components/Home/EventsHosted"));
const OurProjects = lazy(() => import("../components/Home/OurProjects"));
const Four = lazy(() => import("../components/Home/Four"));
const Testimonials = lazy(() => import("../components/Home/Testimonials"));
const ServiceDisplay = lazy(() => import("../components/Home/ServiceDisplay"));
const MobileStackScroll = lazy(() =>
  import("../components/Home/MobileStackScroll")
);
const MobileFooter = lazy(() => import("../components/MobileFooter"));
const Articles = lazy(() => import("../components/Home/Articles"));
const SideBar = lazy(() => import("../components/SideBar"));
const MobileArticle = lazy(() => import("../components/Home/MobileArticle"));
const HomeCaseStudy = lazy(() => import("../components/Home/HomeCaseStudy"));
const ClientComponent = lazy(() => import("./Client"));
const WhatsNewSection = lazy(() => import("../components/Home/WhatsNewSection"));
const OurHistoryTimeline = lazy(() => import("../components/Home/OurHistory"));

const words = [
  "Innovation",
  "Growth",
  "Productivity",
  "Efficiency",
  "Development",
  "Transformation",
  "Optimization",
  "Progress",
  "Sustainability",
  "Scalability",
];

function HomePage() {
  // State management
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedToggle, setSelectedToggle] = useState("products");
  const [isToggleVisible, setIsToggleVisible] = useState(true);
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Word-changing animation effect
  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (header) {
        const headerRect = header.getBoundingClientRect();
        const isSticky = headerRect.top <= 20; // Matches top: 20px
        header.style.justifyContent = isSticky ? "center" : "flex-end";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle toggle button selection
  const handleToggleChange = (selection) => {
    setSelectedToggle(selection);
    console.log("Selected:", selection);
  };

  // Callback for last card visibility
  const handleLastCardVisible = (isVisible) => {
    setIsToggleVisible(isVisible);
  };

  return (
    <React.Suspense fallback={<LoadingStar />}>
      <div>
        {/* Navigation */}
        <div className="nav_style">
          <NavBar />
          <SideBar />
        </div>

        {/* Hero Section */}
        <div className="home">
          <div className="homeSection">
            <div className="texts">
              <div className="heroText" style={{ display: "flex" }}>
                <span>Stacia Corp Redefining </span> <Star />
              </div>
              <Popup />

              <div className="changingText">
                {isMounted && (
                  <motion.div
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="changing-word"
                  >
                    {words[currentWordIndex]}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stack Scroll Section with Toggle */}
        <div className="stack-scroll-container" ref={containerRef}>
          <div
            ref={headerRef}
            style={{
              display: "flex",
              margin: "1rem",
              paddingBottom: "1rem",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "sticky",
              top: "20px",
              zIndex: "100",
              // backgroundColor: "white"
            }}
          >
            {/* {isToggleVisible && <ToggleButton onToggle={handleToggleChange} />} */}
          </div>
          <StackScroll onToggle={selectedToggle} onLastCardVisible={handleLastCardVisible} />
        </div>

        {/* Other Sections */}
        <MobileStackScroll onToggle={selectedToggle} />
        <ClientComponent />
        <ServiceDisplay />  
        {/* <WhatsNewSection /> */}
        <OurHistoryTimeline />
        <EventsHosted />
        <HomeCaseStudy />
        <OurProjects />
        <Articles />
        <MobileArticle />
        <Four />
        <Testimonials />
        <Footer />
        <MobileFooter />
      </div>
    </React.Suspense>
  );
}

export default HomePage;