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


import React, { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import LoadingStar from "../components/LoadingStar";
import Star from "../components/Star";
import "../styles/Home.css"; // Inline critical CSS and minify this file
// Lazy-loaded components
const NavBar = lazy(() => import("../components/NavBar"));
const Footer = lazy(() => import("../components/Footer"));
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
// Uncomment if reverse.png is used in the critical path
// import reverse from "../assets/reverse.png";
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
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Word-changing animation state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true); // Delay animation until after initial render
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
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
              <div className="heroText">
                <span>Stacia Corp Redefining</span> <Star />
              </div>
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
        {/* Stack Scroll Section */}
        <div className="stack-scroll-container">
          <StackScroll />
        </div>
        {/* Other Sections */}
        <MobileStackScroll />
        <ClientComponent />
        <ServiceDisplay />
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
