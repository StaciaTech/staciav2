// import React, { useEffect, useState, useRef } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/services.css";
// import "../styles/ServiceCard.css";
// import "../styles/SingleService.css";
// import MobileFooter from "../components/MobileFooter";
// import SideBar from "../components/SideBar";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { IoIosArrowForward } from "react-icons/io";
// import serviceData from "../Data/Services.json";
// import CustomCursor from "../components/CustomCursor";

// function ServicePage() {
//   const navigate = useNavigate();
//   const params = useParams();

//   const [ServiceData, setServiceData] = useState([]);
//   const [activeDepartment, setActiveDepartment] = useState("");
//   const [cursorVisible, setCursorVisible] = useState(false);
//   const [isManualScroll, setIsManualScroll] = useState(false);
  
//   // const apiUrl = process.env.REACT_APP_API_URL;

//   const sectionsRef = useRef({}); // To track section DOM nodes

//   // Fetch Services Data
//   // const FetchServices = async () => {
//   //   try {
//   //     const res = await axios.get(`${apiUrl}/service/all-service-index`);
//   //     setServiceData(res.data.docs);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   FetchServices();
//   // }, []);



//   useEffect(() => {
//     // Simulate fetching data from a local JSON file
//     setServiceData(serviceData);
//   }, []);

//   // Update activeDepartment from URL params or default to first department
//   useEffect(() => {
//     if (params.department) {
//       setActiveDepartment(params.department);
//     } else if (ServiceData.length > 0) {
//       setActiveDepartment(ServiceData[0].name);
//     }
//   }, [ServiceData, params.department]);

//   // Scroll to the active department on mount
//   useEffect(() => {
//     if (ServiceData.length && activeDepartment) {
//       const section = document.getElementById(activeDepartment);
//       if (section) {
//         const yOffset = -80; // Adjust for the navbar height
//         const y =
//           section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     }
//   }, [activeDepartment, ServiceData]);

//   // Use Intersection Observer to activate dots based on visible sections
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             console.log("Intersecting:", entry.target.id);
//             setActiveDepartment(entry.target.id);
//           }
//         });
//       },
//       {
//         root: null, // Use the viewport as the root
//         threshold: 0.3 // Trigger when 30% of the section is in view
//       }
//     );

//     // Observe each section
//     ServiceData.forEach((item)=>{
//       const section = sectionsRef.current[item.name];
//       if(section) observer.observe(section)
//     })
//     // Object.values(sectionsRef.current).forEach((section)=>{
//     //   if (section) observer.observe(section);
//     // });  
    

//     // Cleanup observer on component unmount
//     return () => observer.disconnect();
//   }, [ServiceData, isManualScroll]);

// const handleDotClick = (departmentName)=>{
//   setIsManualScroll(true);  // Set manual scroll flag
//   setActiveDepartment(departmentName);
//   const section = document.getElementById(departmentName);
//   if(section){
//     const yOffset = -80;
//     const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//     window.scrollTo({top:y, behavior:'smooth'})
//     // Reset Manual scroll flag after scroll animation ( approximate duration)
//     setTimeout(()=>{
//       setIsManualScroll(false);
//     },1000) // Adjust timout based on scroll animation duration
//   }

// }



//   return (
//     <>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       {!ServiceData.length ? (
//         <div>Loading...</div>
//       ) : (
//         <>
//           <div className="service-hero-container">
//             <div className="service-title">
//               <span style={{ userSelect: "none" }}>Our Services</span>
//             </div>
//           </div>
//           <div className="mobile-navigation-tabs">
//             {ServiceData.map((eachItem, i) => (
//               <div
//                 key={i}
//                 // onClick={() => {
//                 //   setActiveDepartment(eachItem.name);
//                 //   document
//                 //     .getElementById(eachItem.name)
//                 //     ?.scrollIntoView({ behavior: "smooth", block: "start" });
//                 // }}
//                 onClick={()=> handleDotClick(eachItem.name)}
//                 className={
//                   activeDepartment === eachItem.name
//                     ? "active-service-mob-tab"
//                     : ""
//                 }
//               >
//                 {eachItem.name}
//               </div>
//             ))}
//           </div>
//           <div className="service-page-content-container">
//             <div className="service-page-main-dots-container">
//               {ServiceData.map((eachItem, i) => (
//                 <DepartmentDot
//                   key={i}
//                   eachItem={eachItem}
//                   activeDepartment={activeDepartment}
//                   // setActiveDepartment={setActiveDepartment}
//                   setActiveDepartment={handleDotClick} // Pass handleDotClick
//                 />
//               ))}
//             </div>
//             <div>
//               {ServiceData.map((eachItem, i) => (
//                 <div
//                   className="all-services"
//                   key={i}
//                   id={eachItem.name}
//                   ref={(el) => (sectionsRef.current[eachItem.name] = el)}
//                 >
//                   <div className="all-service-dept-title">{eachItem.name}</div>
//                   <div className="all-service-box">
//                     {eachItem?.categories?.map((data, i) => (
//                       <div className="service-card" key={i}>
//                         <div
//                           className="service-card-img-box"
//                           // className={``}
//                           onMouseEnter={()=> setCursorVisible(true)}
//                           onMouseLeave={()=> setCursorVisible(false)}
//                           onClick={() => {
//                             window.scrollTo(0, 0);
//                             navigate(
//                               `/services/${eachItem.name
//                                 .split(" ")
//                                 .join("-")}/${data.name.split(" ").join("-")}`
//                             );
//                           }}                          
//                         >
//                           <CustomCursor 
//                            isVisible={cursorVisible}
//                            text={"Know more"}
//                           />
//                           <img src={data.imageUrl} alt="" style={{cursor:"none"}} />
//                         </div>
//                         <div className="service-content-box">
//                           <div className="feature-title">{data.name}</div>
//                           <div className="feature-para">{data.description}</div>
//                           <div
//                             className="know-more"
//                             onClick={() => {
//                               navigate(
//                                 `/services/${eachItem.name
//                                   .split(" ")
//                                   .join("-")}/${data.name.split(" ").join("-")}`
//                               )
//                               window.scrollTo(0, 0);
//                             }}
//                             style={{cursor:"pointer"}}
//                           >
//                             <span>Know More</span>
//                             <IoIosArrowForward />
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )
//       }
//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }

// export default ServicePage;

// const DepartmentDot = ({ eachItem, activeDepartment, setActiveDepartment }) => {
//   const [showDept, setShowDept] = useState(false);

//   useEffect(() => {
//     if (eachItem.name === activeDepartment) {
//       setShowDept(true);
//       const timeoutId = setTimeout(() => {
//         setShowDept(false);
//       }, 3000); // Hide after 3 seconds
//       return () => clearTimeout(timeoutId); // Cleanup timeout on unmount or change
//     } else {
//       setShowDept(false); // Ensure dept name is hidden for non-active dots
//     }
//   }, [activeDepartment, eachItem.name]);
  
//   return (
//     <div className="service-page-dept-container">
//       <div
//         className={`service-page-main-dots ${eachItem.name === activeDepartment 
//           ? "service-page-main-dots-active"
//           : ""
//           }`}
//         onClick={() => {
//           setActiveDepartment(eachItem.name); // Call HandledotClick
//           document
//             .getElementById(eachItem.name)
//             ?.scrollIntoView({ behavior: "smooth", block: "start" });
//         }}
//         onMouseOver={() => setShowDept(true)}
//         onMouseOut={() => setShowDept(false)}
//       ></div> 
//       {showDept && (
//         <div className="service-page-dept-name">
//           {eachItem.name}
//         </div>
//       )}
      
//     </div>
   
//   );
// };











// // function ServicePage() {
// //   const navigate = useNavigate();
// //   const params = useParams();
// //   const [activeDepartment, setActiveDepartment] = useState("");
// //   const sectionsRef = useRef([]); // To track section DOM nodes

// //   useEffect(() => {
// //     if (params.department) {
// //       setActiveDepartment(params.department);
// //     } else if (serviceData.services.length > 0) {
// //       setActiveDepartment(serviceData.services[0].id);
// //     }
// //   }, [params.department]);

// //   // Scroll to the active department on mount
// //   useEffect(() => {
// //     if (activeDepartment) {
// //       const section = document.getElementById(activeDepartment);
// //       if (section) {
// //         const yOffset = -80; // Adjust for the navbar height
// //         const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// //         window.scrollTo({ top: y, behavior: "smooth" });
// //       }
// //     }
// //   }, [activeDepartment]);





// First result

// import React, { useEffect, useState, useRef } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/services.css";
// import "../styles/ServiceCard.css";
// import "../styles/SingleService.css";
// import MobileFooter from "../components/MobileFooter";
// import SideBar from "../components/SideBar";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";
// import serviceData from "../Data/Services.json";
// import CustomCursor from "../components/CustomCursor";

// function ServicePage() {
//   const navigate = useNavigate();
//   const params = useParams();

//   const [ServiceData, setServiceData] = useState([]);
//   const [activeDepartment, setActiveDepartment] = useState("");
//   const [cursorVisible, setCursorVisible] = useState(false);
//   const [isManualScroll, setIsManualScroll] = useState(false); // Tracks manual dot clicks

//   const sectionsRef = useRef({});
//   const scrollTimeoutRef = useRef(null); // To manage scroll timeout

//   // Simulate fetching data
//   useEffect(() => {
//     setServiceData(serviceData);
//   }, []);

//   // Set initial active department from URL or default
//   useEffect(() => {
//     if (params.department) {
//       setActiveDepartment(params.department);
//     } else if (ServiceData.length > 0) {
//       setActiveDepartment(ServiceData[0].name);
//     }
//   }, [ServiceData, params.department]);

//   // Scroll to active department on mount or when changed (not during manual scroll)
//   useEffect(() => {
//     if (ServiceData.length && activeDepartment && !isManualScroll) {
//       const section = document.getElementById(activeDepartment);
//       if (section) {
//         const yOffset = -80; // Adjust for navbar
//         const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     }
//   }, [activeDepartment, ServiceData, isManualScroll]);

//   // Intersection Observer for updating active department during natural scrolling
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (!isManualScroll) { // Only update if not manually scrolling
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActiveDepartment(entry.target.id);
//             }
//           });
//         }
//       },
//       {
//         root: null,
//         threshold: 0.5, // Increased threshold for more reliable detection
//       }
//     );

//     ServiceData.forEach((item) => {
//       const section = sectionsRef.current[item.name];
//       if (section) observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, [ServiceData, isManualScroll]);

//   // Handle dot click
//   const handleDotClick = (departmentName) => {
//     if (scrollTimeoutRef.current) {
//       clearTimeout(scrollTimeoutRef.current); // Clear any existing timeout
//     }

//     setIsManualScroll(true); // Disable observer updates
//     setActiveDepartment(departmentName); // Set target department

//     const section = document.getElementById(departmentName);
//     if (section) {
//       const yOffset = -80;
//       const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });

//       // Reset manual scroll after animation
//       scrollTimeoutRef.current = setTimeout(() => {
//         setIsManualScroll(false);
//       }, 1200); // Increased to ensure scroll completes
//     }
//   };

//   return (
//     <>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       {!ServiceData.length ? (
//         <div>Loading...</div>
//       ) : (
//         <>
//           <div className="service-hero-container">
//             <div className="service-title">
//               <span style={{ userSelect: "none" }}>Our Services</span>
//             </div>
//           </div>
//           <div className="mobile-navigation-tabs">
//             {ServiceData.map((eachItem, i) => (
//               <div
//                 key={i}
//                 onClick={() => handleDotClick(eachItem.name)}
//                 className={
//                   activeDepartment === eachItem.name
//                     ? "active-service-mob-tab"
//                     : ""
//                 }
//               >
//                 {eachItem.name}
//               </div>
//             ))}
//           </div>
//           <div className="service-page-content-container">
//             <div className="service-page-main-dots-container">
//               {ServiceData.map((eachItem, i) => (
//                 <DepartmentDot
//                   key={i}
//                   eachItem={eachItem}
//                   activeDepartment={activeDepartment}
//                   setActiveDepartment={handleDotClick} // Use handleDotClick
//                 />
//               ))}
//             </div>
//             <div>
//               {ServiceData.map((eachItem, i) => (
//                 <div
//                   className="all-services"
//                   key={i}
//                   id={eachItem.name}
//                   ref={(el) => (sectionsRef.current[eachItem.name] = el)}
//                 >
//                   <div className="all-service-dept-title">{eachItem.name}</div>
//                   <div className="all-service-box">
//                     {eachItem?.categories?.map((data, i) => (
//                       <div className="service-card" key={i}>
//                         <div
//                           className="service-card-img-box"
//                           onMouseEnter={() => setCursorVisible(true)}
//                           onMouseLeave={() => setCursorVisible(false)}
//                           onClick={() => {
//                             window.scrollTo(0, 0);
//                             navigate(
//                               `/services/${eachItem.name
//                                 .split(" ")
//                                 .join("-")}/${data.name.split(" ").join("-")}`
//                             );
//                           }}
//                         >
//                           <CustomCursor isVisible={cursorVisible} text={"Know more"} />
//                           <img src={data.imageUrl} alt="" style={{ cursor: "none" }} />
//                         </div>
//                         <div className="service-content-box">
//                           <div className="feature-title">{data.name}</div>
//                           <div className="feature-para">{data.description}</div>
//                           <div
//                             className="know-more"
//                             onClick={() => {
//                               navigate(
//                                 `/services/${eachItem.name
//                                   .split(" ")
//                                   .join("-")}/${data.name.split(" ").join("-")}`
//                               );
//                               window.scrollTo(0, 0);
//                             }}
//                             style={{ cursor: "pointer" }}
//                           >
//                             <span>Know More</span>
//                             <IoIosArrowForward />
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }

// const DepartmentDot = ({ eachItem, activeDepartment, setActiveDepartment }) => {
//   const [showDept, setShowDept] = useState(false);

//   useEffect(() => {
//     if (eachItem.name === activeDepartment) {
//       setShowDept(true);
//       const timeoutId = setTimeout(() => {
//         setShowDept(false);
//       }, 3000);
//       return () => clearTimeout(timeoutId);
//     } else {
//       setShowDept(false);
//     }
//   }, [activeDepartment, eachItem.name]);

//   return (
//     <div className="service-page-dept-container">
//       <div
//         className={`service-page-main-dots ${
//           eachItem.name === activeDepartment ? "service-page-main-dots-active" : ""
//         }`}
//         onClick={() => setActiveDepartment(eachItem.name)}
//         onMouseOver={() => setShowDept(true)}
//         onMouseOut={() => setShowDept(false)}
//       ></div>
//       {showDept && <div className="service-page-dept-name">{eachItem.name}</div>}
//     </div>
//   );
// };

// export default ServicePage;
import React, { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/services.css";
import "../styles/ServiceCard.css";
import "../styles/SingleService.css";
import MobileFooter from "../components/MobileFooter";
import SideBar from "../components/SideBar";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import serviceData from "../Data/Services.json";
import CustomCursor from "../components/CustomCursor";

function ServicePage() {
  const navigate = useNavigate();
  const params = useParams();

  const [ServiceData, setServiceData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // State for filtered data
  const [activeDepartment, setActiveDepartment] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL"); // State for active filter
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isDotClickScroll, setIsDotClickScroll] = useState(false);

  const sectionsRef = useRef({});
  const scrollTimeoutRef = useRef(null);

  // Simulate fetching data
  useEffect(() => {
    setServiceData(serviceData);
    setFilteredData(serviceData); // Initially show all data
  }, []);

  // Set initial active department from URL or default
  useEffect(() => {
    if (params.department) {
      setActiveDepartment(params.department);
    } else if (ServiceData.length > 0) {
      setActiveDepartment(ServiceData[0].name);
    }
  }, [ServiceData, params.department]);

  // Scroll to active department on mount or when changed
  useEffect(() => {
    if (ServiceData.length && activeDepartment && !isDotClickScroll) {
      const section = document.getElementById(activeDepartment);
      if (section) {
        const yOffset = -80;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [activeDepartment, ServiceData, isDotClickScroll]);

  // Intersection Observer for updating active department during scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!isDotClickScroll) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveDepartment(entry.target.id);
            }
          });
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    ServiceData.forEach((item) => {
      const section = sectionsRef.current[item.name];
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [ServiceData, isDotClickScroll]);

  // Handle dot click
  const handleDotClick = (departmentName) => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    setIsDotClickScroll(true);
    setActiveDepartment(departmentName);

    const section = document.getElementById(departmentName);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      scrollTimeoutRef.current = setTimeout(() => {
        setIsDotClickScroll(false);
      }, 1200);
    }
  };

  // Handle filter click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (filter === "ALL") {
      setFilteredData(ServiceData);
    } else {
      setFilteredData(ServiceData.filter((item) => item.name === filter));
    }
  };

  return (
    <>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      {!ServiceData.length ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="service-hero-container">
            <div className="service-title">
              <span style={{ userSelect: "none" }}>Our Services</span>
            </div>
          </div>
          {/* Filter Tabs */}
          <div
            className="filter-tabs"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              margin: "20px 0",
            }}
          >
            <button
              onClick={() => handleFilterClick("ALL")}
              style={{
                padding: "10px 20px",
                backgroundColor: activeFilter === "ALL" ? "#007bff" : "#f0f0f0",
                color: activeFilter === "ALL" ? "#fff" : "#000",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              ALL
            </button>
            {ServiceData.map((item, i) => (
              <button
                key={i}
                onClick={() => handleFilterClick(item.name)}
                style={{
                  padding: "10px 20px",
                  backgroundColor:
                    activeFilter === item.name ? "#007bff" : "#f0f0f0",
                  color: activeFilter === item.name ? "#fff" : "#000",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="mobile-navigation-tabs">
            {ServiceData.map((eachItem, i) => (
              <div
                key={i}
                onClick={() => handleDotClick(eachItem.name)}
                className={
                  activeDepartment === eachItem.name
                    ? "active-service-mob-tab"
                    : ""
                }
              >
                {eachItem.name}
              </div>
            ))}
          </div>
          <div className="service-page-content-container">
            <div className="service-page-main-dots-container">
              {ServiceData.map((eachItem, i) => (
                <DepartmentDot
                  key={i}
                  eachItem={eachItem}
                  activeDepartment={activeDepartment}
                  setActiveDepartment={handleDotClick}
                />
              ))}
            </div>
            <div>
              {filteredData.map((eachItem, i) => (
                <div
                  className="all-services"
                  key={i}
                  id={eachItem?.name}
                  ref={(el) => (sectionsRef.current[eachItem?.name] = el)}
                >
                  <div className="all-service-dept-title">{eachItem?.name}</div>
                  <div className="all-service-box">
                    {eachItem?.categories?.map((data, i) => (
                      <div className="service-card" key={i}>
                        <div
                          className="service-card-img-box"
                          onMouseEnter={() => setCursorVisible(true)}
                          onMouseLeave={() => setCursorVisible(false)}
                          onClick={() => {
                            window.scrollTo(0, 0);
                            navigate(
                              `/services/${eachItem?.name
                                .split(" ")
                                .join("-")}/${data?.name.split(" ").join("-")}`
                            );
                          }}
                        >
                          <CustomCursor
                            isVisible={cursorVisible}
                            text={"Know more"}
                          />
                          <img
                            src={data.imageUrl}
                            alt=""
                            style={{ cursor: "none" }}
                          />
                        </div>
                        <div className="service-content-box">
                          <div className="feature-title">{data.name}</div>
                          <div className="feature-para">{data.description}</div>
                          <div
                            className="know-more"
                            onClick={() => {
                              navigate(
                                `/services/${eachItem.name
                                  .split(" ")
                                  .join("-")}/${data.name.split(" ").join("-")}`
                              );
                              window.scrollTo(0, 0);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <span>Know More</span>
                            <IoIosArrowForward />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <Footer />
      <MobileFooter />
    </>
  );
}

const DepartmentDot = ({ eachItem, activeDepartment, setActiveDepartment }) => {
  const [showDept, setShowDept] = useState(false);

  useEffect(() => {
    if (eachItem.name === activeDepartment) {
      setShowDept(true);
      const timeoutId = setTimeout(() => {
        setShowDept(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    } else {
      setShowDept(false);
    }
  }, [activeDepartment, eachItem.name]);

  return (
    <div className="service-page-dept-container">
      <div
        className={`service-page-main-dots ${
          eachItem.name === activeDepartment
            ? "service-page-main-dots-active"
            : ""
        }`}
        onClick={() => setActiveDepartment(eachItem.name)}
        onMouseOver={() => setShowDept(true)}
        onMouseOut={() => setShowDept(false)}
      ></div>
      {showDept && (
        <div className="service-page-dept-name">{eachItem.name}</div>
      )}
    </div>
  );
};

export default ServicePage;