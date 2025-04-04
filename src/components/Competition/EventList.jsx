import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/competition/EventList.css";
import { GoArrowLeft, GoArrowRight, GoArrowDown } from "react-icons/go";
import { FaCalendarAlt, FaDownload } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import dateimg from "../../assets/calendar.png";
import eventtag from "../../assets/event-tag.png";
import eventData from "../../Data/Compition.json";

const EventList = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState("All"); // All, Ongoing, Upcoming
    const [department, setDepartment] = useState("All"); // All, Electronics, Technology, Mechanical 
    const [currentIndex, setCurrentIndex] = useState(0); // Carousel state
    const [activeStatus, setActiveStatus] = useState("All"); // Track active status button
    const [activeDept, setActiveDept] = useState("All"); // Track active department button
    const [events, setEvents] = useState([]);
    const currentDate = new Date();

    useEffect(() => {
        setEvents(eventData);
    }, []);

    const formatDate = (dateString) => {
        const [day, month, year] = dateString.split("/").map(Number);
        const dateObj = new Date(year, month - 1, day);
        const dayNum = dateObj.getDate();
        const monthName = dateObj.toLocaleString("default", { month: "long" });
        const yearNum = dateObj.getFullYear();
        const getOrdinalSuffix = (day) => {
            if (day > 3 && day < 21) return "th";
            switch (day % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        };
        return `${dayNum}${getOrdinalSuffix(dayNum)} ${monthName} ${yearNum}`;
    };

    const parseDate = (dateString) => {
        const [day, month, year] = dateString.split("/").map(Number);
        return new Date(year, month - 1, day);
    };

    const filteredEvents = events.filter(event => {
        const eventDate = parseDate(event.date);
        const isToday = eventDate.toDateString() === currentDate.toDateString();
        const timeDiff = eventDate - currentDate;
        const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        const isNextOneOrTwoDays = dayDiff > 0 && dayDiff <= 2;
        const isFuture = dayDiff > 0;

        if (filter === "Ongoing" && !isToday) return false;
        if (filter === "Upcoming" && !(isNextOneOrTwoDays || isFuture)) return false;
        if (department !== "All" && event.department !== department) return false;

        return true;
    });

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === filteredEvents.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredEvents.length - 1 : prevIndex - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const handleStatusClick = (status) => {
        setFilter(status);
        setActiveStatus(status); // Set the clicked status as active
    };

    const handleDeptClick = (dept) => {
        setDepartment(dept);
        setActiveDept(dept); // Set the clicked department as active
    };

    const EventCard = ({ event }) => {
        if (!event || typeof event !== 'object') {
            return <div className="event-card1">Error: Invalid event data</div>;
        }

        const { title = "No Title", description = "No Description", date, eventTags = "No Tags", imageUrl = "https://via.placeholder.com/150", id = "unknown" } = event;

        return (
            <div className="event-card1">
                <div className="event-content1">
                    <div className="event-image-container2">
                        <img src={imageUrl} alt="Event" className="event-image2" />
                    </div>
                    <h2 className="event-title1">{title}</h2>
                    <p className="event-description1">{description}</p>
                    <p className="event-details1">
                        <img src={dateimg} className="event-icon1" alt="icon" /> <h4>{date ? formatDate(date) : "No date available"}</h4>
                        <img src={eventtag} className="event-icon1" alt="icon" /> <h4>{eventTags}</h4>
                    </p>
                    <button onClick={() => { window.scrollTo(0, 0); title && navigate(`/event/${title}`); }} className="learn-more-btn1">
                        Learn More <IoIosArrowForward />
                    </button>
                    <div className="button-group1">
                        <button className="register-btn1">Register Now</button>
                        <button className="download-btn1"><GoArrowDown /> Download Details</button>
                    </div>
                </div>
                <div className="event-image-container1">
                    <img src={imageUrl} alt="Event" className="event-image1" />
                </div>
            </div>
        );
    };

    return (
        <div className="event-list">
            <div className="filters">
                <div className="department-filter">
                    <div className="all-btn-evt">
                        <button className={`all-btn ${activeDept === "All" ? "active" : ""}`} onClick={() => handleDeptClick("All")}>All Events</button>
                        <button className={`all-btn ${activeDept === "Electronics" ? "active" : ""}`} onClick={() => handleDeptClick("Electronics")}>Electronic Events</button>
                        <button className={`all-btn ${activeDept === "Mechanical" ? "active" : ""}`} onClick={() => handleDeptClick("Mechanical")}>Mechanical Events</button>
                        <button className={`all-btn ${activeDept === "Technology" ? "active" : ""}`} onClick={() => handleDeptClick("Technology")}>Tech Events</button>
                    </div>
                    <div className="winner-section1-mob-btn-container">
                        <select value={department} onChange={(e) => handleDeptClick(e.target.value)}>
                            <option value="All">All Departments</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Technology">Technology</option>
                            <option value="Mechanical">Mechanical</option>
                        </select>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                        <div className="status-filter">
                            <button className={activeStatus === "All" ? "active" : ""} onClick={() => handleStatusClick("All")}>All</button>
                            <button className={activeStatus === "Ongoing" ? "active" : ""} onClick={() => handleStatusClick("Ongoing")}>Ongoing</button>
                            <button className={activeStatus === "Upcoming" ? "active" : ""} onClick={() => handleStatusClick("Upcoming")}>Upcoming</button>
                        </div>
                        <div className="winner-section1-btn-container">
                            <div><GoArrowLeft onClick={prevSlide} size={24} /></div>
                            <div><GoArrowRight onClick={nextSlide} size={24} /></div>
                        </div>
                    </div>
                </div>
                <div className="winner-section1-mob-btn-container">
                    <div><GoArrowLeft onClick={prevSlide} size={24} /></div>
                    <div><GoArrowRight onClick={nextSlide} size={24} /></div>
                </div>
            </div>
            <div className="events-container1">
                {filteredEvents.length > 0 ? <EventCard event={filteredEvents[currentIndex]} /> : <p>No events found for this filter.</p>}
            </div>
            <div className="carousel-dots">
                {filteredEvents.map((_, index) => (
                    <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} onClick={() => goToSlide(index)}></span>
                ))}
            </div>
        </div>
    );
};

export default EventList;