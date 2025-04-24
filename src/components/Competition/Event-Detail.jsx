import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SideBar from "../SideBar";
import MobileFooter from "../MobileFooter";
import { useParams } from "react-router-dom";
import Star from "../Star";
import "../../styles/Eventspage.css";
import { FaCalendarAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import Modal from "react-modal";
import JobForm from "../careers/JobForm";
import EventForm from "../EventForm";
import { IoIosArrowForward } from "react-icons/io";

import eventData from "../../Data/Compition.json";

// // import placeholderImage from "../../assets/default-event.png"; // Fallback image

// import eventData from "../Data/Event.json";




function EventDetails() {
  const params = useParams();
  const paramsTitle = params.title.split("-").join(" ");
  console.log(paramsTitle);

  const [singleEvent, setSingleEvent] = useState(null);

  useEffect(() => {
    const foundEvent = eventData.find((eachEvent) => eachEvent.title === paramsTitle);
    setSingleEvent(foundEvent);
  }, [paramsTitle]);

  console.log(singleEvent);

  const [showEventForm, setShowEventForm] = useState(false);

  const FormCloseHandler = () => {
    setShowEventForm(false);
  };

  //model style

  const ModelStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgb(13, 2, 37,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      width: "40%",
      minHeight: "50%",
      inset: 0,
      margin: "auto",
      position: "relative",
      borderRadius: "1rem",
      padding: "0",
      boxSizing: "border-box",
    },
  };


  // Function to format date as "2nd February 2025"
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("/").map(Number);
    const dateObj = new Date(year, month - 1, day); // month - 1 because months are 0-based
    const dayNum = dateObj.getDate();
    const monthName = dateObj.toLocaleString("default", { month: "long" });
    const yearNum = dateObj.getFullYear();

    // Add ordinal suffix (st, nd, rd, th) to day
    const getOrdinalSuffix = (day) => {
      if (day > 3 && day < 21) return "th"; // 11th to 20th are always "th"
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
  };


  const date = singleEvent?.date;

  return (
    <div style={showEventForm ? { position: "fixed" } : { position: "static" }}>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      <div>
        <div className="events-hero">
          <div>
            <span>{paramsTitle}</span>
            <Star />
          </div>
        </div>
        <div className="single-event-container">
          <div className="single-event-title">{paramsTitle}</div>
          <div className="single-event-details-container">
            <div>
              <FaCalendarAlt />
              <div>{date ? formatDate(date) : "No date available"}</div>
            </div>
            <div style={{ height: "2rem", borderLeft: "2px solid #e5e5e5" }} />
            <div>
              <GoClockFill />
              <div>{singleEvent?.startTime}-{singleEvent?.endTime}</div>
            </div>
            <div style={{ height: "2rem", borderLeft: "2px solid #e5e5e5" }} />
            <div>
              <FaLocationDot />
              <div>{singleEvent?.location}</div>
            </div>
          </div>
          <div className="single-event-content-container">
            <div className="single-event-text">
              <p>{singleEvent?.detail}</p>
            </div>
            <div className="single-event-img">
              <img src={singleEvent?.imageUrl} alt="" />
            </div>
          </div>
          {/* <div onClick={() => setShowEventForm(true)} className="know-more">
            <span>Register Now</span> <IoIosArrowForward />
          </div> */}

          {/* Register Button */}
          <a
            href={singleEvent?.link || "#"}
            className="know-more"
          >
             <span>Register Now</span> <IoIosArrowForward />  
          </a>

        </div>
      </div>
      <div>
        <Footer />
        <MobileFooter />
      </div>
      <Modal
        isOpen={showEventForm}
        onRequestClose={FormCloseHandler}
        style={ModelStyles}
      >
        <EventForm
          eventTitle={singleEvent?.title}
          closeForm={FormCloseHandler}
        />
      </Modal>
    </div>
  );
}

export default EventDetails;




// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import NavBar from "../NavBar";
// import Footer from "../Footer";
// import Star from "../Star";

// // import placeholderImage from "../../assets/default-event.png"; // Fallback image

// export default function EventDetails() {
//     const { eventId } = useParams();
//     const [pastEvents, setPastEvents] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const apiUrl = process.env.REACT_APP_API_URL;

//     // const apiUrl = isPastEvent ? `${apiUrl}/competition/pastEvents/${eventId}` : `${apiUrl}/competition/events/${eventId}`;


//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await axios.get(`${apiUrl}/competition/pastEvents`);
//                 if (res.data && Array.isArray(res.data.docs)) {
//                     setPastEvents(res.data.docs);
//                 } else {
//                     throw new Error("Invalid API response format.");
//                 }
//             } catch (err) {
//                 console.error("Error fetching past events:", err.message);
//                 setError("Failed to load past events.");
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, [apiUrl]);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p style={{ color: "red" }}>{error}</p>;
//     if (!pastEvents.length) return <p>No events found.</p>;

//     // Find event by _id, fallback to first event if not found
//     const event = pastEvents.find((e) => e._id === eventId) || pastEvents[0];

//     return (
//         <div>
//             <NavBar />
//             <div className="about-hero">
//                 <div className="about-hero-text">
//                     <span>Hackathon</span>
//                     <Star />
//                 </div>
//             </div>

//             <div style={{ maxWidth: "1200px", margin: "50px auto", padding: "20px" }}>
//                 <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#333" }}>
//                     {event.title || "Untitled Event"}
//                 </h2>
//                 <div style={{ display: "flex", alignItems: "center", gap: "15px", marginTop: "15px", color: "#444" }}>
//                     <span>{event.eventTags || "No tag"}</span>
//                     <span>{event.date || "No date available"}</span>
//                     <span>{event.startTime || "No time specified"}
//                     -{event.endTime || "No time specified"}</span>
//                     <span>{event.location || "Location unknown"}</span>
//                 </div>
//                 <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
//                     <div style={{ flex: "2", color: "#555" }}>
//                         <p>{event.detail || "No details available for this event."}</p>
//                         <a href={event.registerLink || "#"}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             style={{ color: "#0047FF", fontWeight: "bold", marginTop: "20px", display: "inline-block", textDecoration: "none" }}>
//                             Register Now →
//                         </a>
//                     </div>
//                     <div style={{ flex: "1" , objectFit: "fill", width:"530px" , height: "320px" }}>
//                         <img src={event.imageUrl || "Image"}
//                             alt={event.title || "Event Image"}
//                             style={{ width: "100%", borderRadius: "10px" }} />
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }
