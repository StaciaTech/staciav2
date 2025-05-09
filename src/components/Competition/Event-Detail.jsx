

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import NavBar from "../NavBar";
// import Footer from "../Footer";
// import SideBar from "../SideBar";
// import MobileFooter from "../MobileFooter";
// import Star from "../Star";
// import "../../styles/Eventspage.css";
// import { FaCalendarAlt } from "react-icons/fa";
// import { GoClockFill } from "react-icons/go";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoIosArrowForward } from "react-icons/io";
// import eventData from "../../Data/Compition.json";

// function EventDetails() {
//   const { title } = useParams();
//   // Decode and normalize the title from the URL
//   const paramsTitle = decodeURIComponent(title).trim();
//   const [singleEvent, setSingleEvent] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Log the paramsTitle for debugging
//     console.log("URL Title (paramsTitle):", paramsTitle);
//     console.log("Available Event Titles in JSON:", eventData.map(e => e.title));

//     try {
//       // Normalize titles for comparison (lowercase, remove extra spaces)
//       const foundEvent = eventData.find((eachEvent) => {
//         const eventTitle = eachEvent.title.trim().toLowerCase();
//         const searchTitle = paramsTitle.toLowerCase();
//         // Exact match or partial match (if URL is truncated)
//         return eventTitle === searchTitle || eventTitle.startsWith(searchTitle);
//       });

//       if (!foundEvent) {
//         setError("Event not found. Please check the event title or browse our events list.");
//         return;
//       }
//       setSingleEvent(foundEvent);
//     } catch (err) {
//       setError("Failed to load event data");
//       console.error("Error in finding event:", err);
//     }
//   }, [paramsTitle]);

//   // Function to format date as "2nd February 2025"
//   const formatDate = (dateString) => {
//     if (!dateString || !/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) {
//       return "No date available";
//     }
//     try {
//       const [day, month, year] = dateString.split("/").map(Number);
//       const dateObj = new Date(year, month - 1, day);
//       if (isNaN(dateObj.getTime())) {
//         return "Invalid date";
//       }
//       const dayNum = dateObj.getDate();
//       const monthName = dateObj.toLocaleString("default", { month: "long" });
//       const yearNum = dateObj.getFullYear();

//       const getOrdinalSuffix = (day) => {
//         if (day > 3 && day < 21) return "th";
//         switch (day % 10) {
//           case 1:
//             return "st";
//           case 2:
//             return "nd";
//           case 3:
//             return "rd";
//           default:
//             return "th";
//         }
//       };

//       return `${dayNum}${getOrdinalSuffix(dayNum)} ${monthName} ${yearNum}`;
//     } catch {
//       return "Invalid date";
//     }
//   };

//   if (error) {
//     return (
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//         <div style={{ padding: "5rem", textAlign: "center", color: "red" }}>
//           {error}
//         </div>
//         <Footer />
//         <MobileFooter />
//       </div>
//     );
//   }

//   if (!singleEvent) {
//     return (
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//         <div style={{ padding: "5rem", textAlign: "center" }}>
//           Loading event details...
//         </div>
//         <Footer />
//         <MobileFooter />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       <div className="events-hero">
//         <div>
//           <span>{singleEvent.title}</span>
//           <Star />
//         </div>
//       </div>
//       <div className="single-event-container">
//         <h1 className="single-event-title">{singleEvent.title}</h1>
//         <div className="single-event-details-container">
//           <div>
//             <FaCalendarAlt aria-hidden="true" />
//             <span>{formatDate(singleEvent.date)}</span>
//           </div>
//           <div style={{ height: "2rem", borderLeft: "2px solid #e5e5e5" }} />
//           <div>
//             <GoClockFill aria-hidden="true" />
//             <span>
//               {singleEvent.startTime && singleEvent.endTime
//                 ? `${singleEvent.startTime} - ${singleEvent.endTime}`
//                 : "Time not specified"}
//             </span>
//           </div>
//           <div style={{ height: "2rem", borderLeft: "2px solid #e5e5e5" }} />
//           <div>
//             <FaLocationDot aria-hidden="true" />
//             <span>{singleEvent.location || "Location not specified"}</span>
//           </div>
//         </div>
//         <div className="single-event-content-container">
//           <div className="single-event-text">
//             <p>{singleEvent.detail || "No details available for this event."}</p>
//           </div>
//           <div className="single-event-img">
//             <img
//               src={singleEvent.imageUrl || "/assets/default-event.png"}
//               alt={`${singleEvent.title} event illustration`}
//             />
//           </div>
//         </div>
//         <a
//           href={singleEvent.link || "#"}
//           className="know-more"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label={`Register for ${singleEvent.title}`}
//         >
//           <span>Register Now</span>
//           <IoIosArrowForward aria-hidden="true" />
//         </a>
//       </div>
//       <Footer />
//       <MobileFooter />
//     </div>
//   );
// }

// export default EventDetails;






import React, { useEffect, useState, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Eventspage.css";
import { FaCalendarAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import eventData from "../../Data/Compition.json";
// Lazy load all components
const NavBar = lazy(() => import("../NavBar"));
const Footer = lazy(() => import("../Footer"));
const SideBar = lazy(() => import("../SideBar"));
const MobileFooter = lazy(() => import("../MobileFooter"));
const Star = lazy(() => import("../Star"));
const EventDetails = () => {
  const { title } = useParams();
  // Decode and normalize the title from the URL
  const paramsTitle = decodeURIComponent(title).trim();
  const [singleEvent, setSingleEvent] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Log the paramsTitle for debugging
    console.log("URL Title (paramsTitle):", paramsTitle);
    console.log(
      "Available Event Titles in JSON:",
      eventData.map((e) => e.title)
    );
    try {
      // Normalize titles for comparison (lowercase, remove extra spaces)
      const foundEvent = eventData.find((eachEvent) => {
        const eventTitle = eachEvent.title.trim().toLowerCase();
        const searchTitle = paramsTitle.toLowerCase();
        // Exact match or partial match (if URL is truncated)
        return eventTitle === searchTitle || eventTitle.startsWith(searchTitle);
      });
      if (!foundEvent) {
        setError(
          "Event not found. Please check the event title or browse our events list."
        );
        return;
      }
      setSingleEvent(foundEvent);
    } catch (err) {
      setError("Failed to load event data");
      console.error("Error in finding event:", err);
    }
  }, [paramsTitle]);
  // Function to format date as "2nd February 2025"
  const formatDate = (dateString) => {
    if (!dateString || !/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) {
      return "No date available";
    }
    try {
      const [day, month, year] = dateString.split("/").map(Number);
      const dateObj = new Date(year, month - 1, day);
      if (isNaN(dateObj.getTime())) {
        return "Invalid date";
      }
      const dayNum = dateObj.getDate();
      const monthName = dateObj.toLocaleString("default", { month: "long" });
      const yearNum = dateObj.getFullYear();
      const getOrdinalSuffix = (day) => {
        if (day > 3 && day < 21) return "th";
        switch (day % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      };
      return `${dayNum}${getOrdinalSuffix(dayNum)} ${monthName} ${yearNum}`;
    } catch {
      return "Invalid date";
    }
  };
  if (error) {
    return (
      <div className="nav_style">
        <Suspense fallback={<div>Loading Navigation...</div>}>
          <NavBar />
        </Suspense>
        <Suspense fallback={<div>Loading Sidebar...</div>}>
          <SideBar />
        </Suspense>
        <div style={{ padding: "5rem", textAlign: "center", color: "red" }}>
          {error}
        </div>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
        <Suspense fallback={<div>Loading Mobile Footer...</div>}>
          <MobileFooter />
        </Suspense>
      </div>
    );
  }
  if (!singleEvent) {
    return (
      <div className="nav_style">
        <Suspense fallback={<div>Loading Navigation...</div>}>
          <NavBar />
        </Suspense>
        <Suspense fallback={<div>Loading Sidebar...</div>}>
          <SideBar />
        </Suspense>
        <div style={{ padding: "5rem", textAlign: "center" }}>
          Loading event details...
        </div>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
        <Suspense fallback={<div>Loading Mobile Footer...</div>}>
          <MobileFooter />
        </Suspense>
      </div>
    );
  }
  return (
    <div>
      <div className="nav_style">
        <Suspense fallback={<div>Loading Navigation...</div>}>
          <NavBar />
        </Suspense>
        <Suspense fallback={<div>Loading Sidebar...</div>}>
          <SideBar />
        </Suspense>
      </div>
      <div className="events-hero">
        <div>
          <span>{singleEvent.title}</span>
          <Suspense fallback={<div>Loading Star...</div>}>
            <Star />
          </Suspense>
        </div>
      </div>
      <div className="single-event-container">
        <h1 className="single-event-title">{singleEvent.title}</h1>
        <div className="single-event-details-container">
          <div>
            <FaCalendarAlt aria-hidden="true" />
            <span>{formatDate(singleEvent.date)}</span>
          </div>
          <div style={{ height: "2rem", borderLeft: "2px solid #E5E5E5" }} />
          <div>
            <GoClockFill aria-hidden="true" />
            <span>
              {singleEvent.startTime && singleEvent.endTime
                ? `${singleEvent.startTime} - ${singleEvent.endTime}`
                : "Time not specified"}
            </span>
          </div>
          <div style={{ height: "2rem", borderLeft: "2px solid #E5E5E5" }} />
          <div>
            <FaLocationDot aria-hidden="true" />
            <span>{singleEvent.location || "Location not specified"}</span>
          </div>
        </div>
        <div className="single-event-content-container">
          <div className="single-event-text">
            <p>
              {singleEvent.detail || "No details available for this event."}
            </p>
          </div>
          <div className="single-event-img">
            <img
              src={singleEvent.imageUrl || "/assets/default-event.png"}
              alt={`${singleEvent.title} event illustration`}
              loading="lazy"
            />
          </div>
        </div>
        <a
          href={singleEvent.link || "#"}
          className="know-more"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Register for ${singleEvent.title}`}
        >
          <span>Register Now</span>
          <IoIosArrowForward aria-hidden="true" />
        </a>
      </div>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
      <Suspense fallback={<div>Loading Mobile Footer...</div>}>
        <MobileFooter />
      </Suspense>
    </div>
  );
};
// Export with Suspense wrapper
export default function LazyEventDetails() {
  return (
    <Suspense fallback={<div>Loading Event Details...</div>}>
      <EventDetails />
    </Suspense>
  );
}