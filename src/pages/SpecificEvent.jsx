import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import { useParams } from "react-router-dom";
import Star from "../components/Star";
import "../styles/Eventspage.css";
import { FaCalendarAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import Modal from "react-modal";
import JobForm from "../components/careers/JobForm";
import EventForm from "../components/EventForm";
import { IoIosArrowForward } from "react-icons/io";

function SpecificEvent() {
  const params = useParams();
  const paramsTitle = params.title.split("-").join(" ");
  console.log(paramsTitle);

  const apiUrl = process.env.REACT_APP_API_URL;
  const [events, setEvents] = useState();
  const [singleEvent, setSingleEvent] = useState();

  const FetchEvents = async () => {
    try {
      const res = await axios.get(`${apiUrl}/event/index`);
      setEvents(res.data.docs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchEvents();
  }, []);
  useEffect(() => {
    setSingleEvent(
      events?.find((eachEvent) => eachEvent.title === paramsTitle)
    );
  }, [paramsTitle, events]);
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
              <div>{singleEvent?.eventDate}</div>
            </div>
            <div style={{ height: "2rem", borderLeft: "2px solid #e5e5e5" }} />
            <div>
              <GoClockFill />
              <div>{singleEvent?.displayTime}</div>
            </div>
            <div style={{ height: "2rem", borderLeft: "2px solid #e5e5e5" }} />
            <div>
              <FaLocationDot />
              <div>{singleEvent?.eventDate}</div>
            </div>
          </div>
          <div className="single-event-content-container">
            <div className="single-event-text">
              <p>{singleEvent?.description}</p>
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

export default SpecificEvent;
