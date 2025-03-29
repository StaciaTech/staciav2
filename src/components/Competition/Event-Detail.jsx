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




// function EventDetails() {
//   const params = useParams();
//   const paramsTitle = params.title.split("-").join(" ");
//   console.log(paramsTitle);

//   const apiUrl = process.env.REACT_APP_API_URL;
//   // const [events, setEvents] = useState();
//   const [singleEvent, setSingleEvent] = useState();

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

//   const [events, setEvents] = useState([]);

//     useEffect(() => {
//       setEvents(eventsData.events);
//     }, []);
//   useEffect(() => {
//     setSingleEvent(
//       events?.find((eachEvent) => eachEvent.title === paramsTitle)
//     );
//   }, [paramsTitle, events]);
//   console.log(singleEvent);

//   const [showEventForm, setShowEventForm] = useState(false);

//   const FormCloseHandler = () => {
//     setShowEventForm(false);
//   };


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
          <div onClick={() => setShowEventForm(true)} className="know-more">
            <span>Register Now</span> <IoIosArrowForward />
          </div>
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
