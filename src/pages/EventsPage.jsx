// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";
// import Footer from "../components/Footer";
// import MobileFooter from "../components/MobileFooter";
// import Star from "../components/Star";
// import "../styles/Eventspage.css";
// import { IoIosArrowForward } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// import eventsData from "../Data/Event.json";


// function EventsPage() {
//   const navigate = useNavigate();
//   // const apiUrl = process.env.REACT_APP_API_URL;
//   // const [events, setEvents] = useState();

//   // const FetchEvents = async () => {
//   //   try {
//   //     const res = await axios.get(`${apiUrl}/event/index`);
//   //     setEvents(res.data.docs);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   FetchEvents();
//   // }, []);
//   // console.log(events);

//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     setEvents(eventsData.events);
//   }, []);

//   console.log(events);

//   return (
//     <div>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       <div>
//         <div className="events-hero">
//           <div>
//             <span>Events</span>
//             <Star />
//           </div>
//         </div>
//         <div className="events-container">
//           {events?.map((eachEvent, i) => {
//             const eventKey = eachEvent.title.split(" ").join("-");
//             return (
//               <div
//                 key={i}
//                 style={{ backgroundImage: `url(${eachEvent?.imageUrl})` }}
//                 className="event-card"
//               >
//                 <div>
//                   <div className="event-title">{eachEvent?.title}</div>
//                   <p className="event-des">{eachEvent?.description}</p>
//                   <div className="event-btn-container">
//                     <div className="event-register">
//                       <span>Register Now</span>
//                       <IoIosArrowForward />
//                     </div>
//                     <div
//                       className="event-view"
//                       onClick={() => {
//                         window.scrollTo(0, 0);
//                         navigate(`/events/${eventKey}`);
//                       }}
//                     >
//                       <span>View Details</span>
//                       <IoIosArrowForward />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <div className="events-mob-container">
//           {events?.map((eachEvent, i) => {
//             const eventKey = eachEvent.title.split(" ").join("-");
//             return (
//               <div key={i}>
//                 <div className="events-mob-img">
//                   <img src={eachEvent.imageUrl} alt="" />
//                 </div>
//                 <div className="events-mob-title">{eachEvent.title}</div>
//                 <p className="events-mob-des">{eachEvent.description}</p>
//                 <div className="event-mob-btn-container">
//                   <div className="event-mob-register">
//                     <span>Register Now</span>
//                     <IoIosArrowForward />
//                   </div>
//                   <div
//                     className="event-mob-view"
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       navigate(`/events/${eventKey}`);
//                     }}
//                   >
//                     <span>View Details</span>
//                     <IoIosArrowForward />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div>
//         <Footer />
//         <MobileFooter />
//       </div>
//     </div>
//   );
// }

// export default EventsPage;

import React, { useEffect, useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import eventsData from "../Data/Event.json";
import "../styles/Eventspage.css";

// Lazy load components
const NavBar = React.lazy(() => import("../components/NavBar"));
const SideBar = React.lazy(() => import("../components/SideBar"));
const Footer = React.lazy(() => import("../components/Footer"));
const MobileFooter = React.lazy(() => import("../components/MobileFooter"));
const Star = React.lazy(() => import("../components/Star"));
import "../styles/Eventspage.css";

// Lazy load components
const NavBar = React.lazy(() => import("../components/NavBar"));
const SideBar = React.lazy(() => import("../components/SideBar"));
const Footer = React.lazy(() => import("../components/Footer"));
const MobileFooter = React.lazy(() => import("../components/MobileFooter"));
const Star = React.lazy(() => import("../components/Star"));

function EventsPage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData.events);
  }, []);

  console.log(events);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className="nav_style">
          <NavBar />
          <SideBar />
        </div>
        <div>
          <div className="events-hero">
            <div>
              <span>Events</span>
              <Star />
            </div>
          </div>
          <div className="events-container">
            {events?.map((eachEvent, i) => {
              const eventKey = eachEvent.title.split(" ").join("-");
              return (
                <div
                  key={i}
                  style={{ backgroundImage: `url(${eachEvent?.imageUrl})` }}
                  className="event-card"
                >
                  <div>
                    <div className="event-title">{eachEvent?.title}</div>
                    <p className="event-des">{eachEvent?.description}</p>
                    <div className="event-btn-container">
                      <div className="event-register">
                        <span>Register Now</span>
                        <IoIosArrowForward />
                      </div>
                      <div
                        className="event-view"
                        onClick={() => {
                          window.scrollTo(0, 0);
                          navigate(`/events/${eventKey}`);
                        }}
                      >
                        <span>View Details</span>
                        <IoIosArrowForward />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="events-mob-container">
            {events?.map((eachEvent, i) => {
              const eventKey = eachEvent.title.split(" ").join("-");
              return (
                <div key={i}>
                  <div className="events-mob-img">
                    <img src={eachEvent.imageUrl} alt="" loading="lazy" />
                  </div>
                  <div className="events-mob-title">{eachEvent.title}</div>
                  <p className="events-mob-des">{eachEvent.description}</p>
                  <div className="event-mob-btn-container">
                    <div className="event-mob-register">
                      <span>Register Now</span>
                      <IoIosArrowForward />
                    </div>
                    <div
                      className="event-mob-view"
                      onClick={() => {
                        window.scrollTo(0, 0);
                        navigate(`/events/${eventKey}`);
                      }}
                    >
                      <span>View Details</span>
                      <IoIosArrowForward />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Footer />
          <MobileFooter />
        </div>
      </div>
    </Suspense>
  );
}

export default EventsPage;