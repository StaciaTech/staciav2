// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import vector from "../../assets/vector1.png";
// import "../../styles/competition/EventList.css";
// import { GoArrowLeft, GoArrowRight, GoArrowDown } from "react-icons/go";
// import { FaCalendarAlt, FaDownload } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";
// import dateimg from "../../assets/calendar.png";
// import eventtag from "../../assets/event-tag.png";

// import eventData from "../../Data/Compition.json";


// // Sample event data
// // const eventsData = [
// //     {
// //         id: 1,
// //         title: "Electronics Symposium 2025",
// //         description: "Passion fueled creativity and innovation within the company. Team members are driven to develop groundbreaking solutions to address the oddest pressing industry needs and challenges.",
// //         date: "March 22, 2025",
// //         eventTags: "Electronics, Innovation",
// //         imageUrl: "https://example.com/electronics.jpg",
// //         department: "Electronics",
// //     },
// //     {
// //         id: 2,
// //         title: "Tech Summit",
// //         description: "Passion fueled creativity and innovation within the company. Team members are driven to develop groundbreaking solutions to address the oddest pressing industry needs and challenges.",
// //         date: "March 24, 2025",
// //         eventTags: "AI, Technology",
// //         imageUrl: "https://example.com/tech.jpg",
// //         department: "Technology",
// //     },
// //     {
// //         id: 3,
// //         title: "Mech Design Workshop",
// //         description: "Passion fueled creativity and innovation within the company. Team members are driven to develop groundbreaking solutions to address the oddest pressing industry needs and challenges.",
// //         date: "March 25, 2025",
// //         eventTags: "MechEng, Design",
// //         imageUrl: "https://example.com/mech.jpg",
// //         department: "Mechanical",
// //     },
// //     {
// //         id: 4,
// //         title: "Circuit Debugging Contest",
// //         description: "Passion fueled creativity and innovation within the company. Team members are driven to develop groundbreaking solutions to address the oddest pressing industry needs and challenges.",
// //         date: "March 26, 2025",
// //         eventTags: "Electronics, Contest",
// //         imageUrl: "https://example.com/circuit.jpg",
// //         department: "Electronics",
// //     },
// //     {
// //         id: 5,
// //         title: "Future Robotics Expo",
// //         description: "Passion fueled creativity and innovation within the company. Team members are driven to develop groundbreaking solutions to address the oddest pressing industry needs and challenges.",
// //         date: "April 1, 2025",
// //         eventTags: "Tech, Robotics",
// //         imageUrl: "https://example.com/robotics.jpg",
// //         department: "Technology",
// //     },
// // ];

// const EventList = () => {
//     const navigate = useNavigate();
//     const [filter, setFilter] = useState("All"); // All, Ongoing, Upcoming
//     const [department, setDepartment] = useState("All"); // All, Electronics, Technology, Mechanical 
//     const [currentIndex, setCurrentIndex] = useState(0); // Carousel state
//     // const currentDate = new Date("March 24, 2025");

//     const [events, setEvents] = useState([]);


//     const currentDate = new Date();

//     useEffect(() => {

//         setEvents(eventData);
//     }, []);



//     // Function to format date as "2nd February 2025"
//     const formatDate = (dateString) => {
//         const [day, month, year] = dateString.split("/").map(Number);
//         const dateObj = new Date(year, month - 1, day); // month - 1 because months are 0-based
//         const dayNum = dateObj.getDate();
//         const monthName = dateObj.toLocaleString("default", { month: "long" });
//         const yearNum = dateObj.getFullYear();

//         // Add ordinal suffix (st, nd, rd, th) to day
//         const getOrdinalSuffix = (day) => {
//             if (day > 3 && day < 21) return "th"; // 11th to 20th are always "th"
//             switch (day % 10) {
//                 case 1:
//                     return "st";
//                 case 2:
//                     return "nd";
//                 case 3:
//                     return "rd";
//                 default:
//                     return "th";
//             }
//         };

//         return `${dayNum}${getOrdinalSuffix(dayNum)} ${monthName} ${yearNum}`;
//     };

//     const parseDate = (dateString) => {
//         const [day, month, year] = dateString.split("/").map(Number);
//         return new Date(year, month - 1, day);
//     };



//     // Filter events based on status and department
//     const filteredEvents = events.filter(event => {
//         const eventDate = parseDate(event.date);
//         const isToday = eventDate.toDateString() === currentDate.toDateString();
//         const timeDiff = eventDate - currentDate;
//         const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
//         const isNextOneOrTwoDays = dayDiff > 0 && dayDiff <= 2;
//         const isFuture = dayDiff > 0;

//         if (filter === "Ongoing" && !isToday) return false;
//         if (filter === "Upcoming" && !(isNextOneOrTwoDays || isFuture)) return false;
//         if (department !== "All" && event.department !== department) return false;

//         return true;
//     });

//     // Carousel navigation functions
//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === filteredEvents.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? filteredEvents.length - 1 : prevIndex - 1
//         );
//     };

//     const goToSlide = (index) => {
//         setCurrentIndex(index);
//     };

//     // EventCard component
//     const EventCard = ({ event }) => {
//         console.log("EventCard received event:", event);
//         if (!event || typeof event !== 'object') {
//             console.error("EventCard: event prop is invalid:", event);
//             return <div className="event-card1">Error: Invalid event data</div>;
//         }

//         const title = event.title || "No Title";
//         const description = event.description || "No Description";
//         const date = event.date;
//         const eventTags = event.eventTags || "No Tags";
//         const imageUrl = event.imageUrl || "https://via.placeholder.com/150";
//         const id = event.id || "unknown";

//         return (
//             <div className="event-card1">
//                 <div className="event-content1">


//                     <div className="event-image-container2">
//                         <img src={imageUrl} alt="Event" className="event-image2" />
//                     </div>
//                     <h2 className="event-title1">{title}</h2>
//                     <p className="event-description1">{description}</p>
//                     <p className="event-details1">
//                         <img src={dateimg} className="event-icon1" alt="icon" /> <h4>{date ? formatDate(date) : "No date available"}</h4>
//                         <img src={eventtag} className="event-icon1" alt="icon" /> <h4>{eventTags}</h4>
//                     </p>
//                     <button
//                         onClick={() => {
//                             window.scrollTo(0, 0);
//                             title && navigate(`/event/${title}`);
//                         }}
//                         className="learn-more-btn1"
//                     >
//                         Learn More <IoIosArrowForward />
//                     </button>
//                     <div className="button-group1">
//                         <button className="register-btn1">Register Now</button>
//                         <button className="download-btn1">
//                             <GoArrowDown /> Download Details
//                         </button>
//                     </div>
//                 </div>
//                 <div className="event-image-container1">
//                     <img src={imageUrl} alt="Event" className="event-image1" />
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="event-list">
//             {/* <h1>Events</h1> */}
//             <div className="filters">
//                 <div className="department-filter">

//                     <div className="all-btn-evt">

//                         <button value="All" className="all-btn" onClick={(e) => setDepartment(e.target.value)} >All Events</button>
//                         <button value="Electronics" className="all-btn" onClick={(e) => setDepartment(e.target.value)}> Electronic Events </button>
//                         <button value="Mechanical" className="all-btn" onClick={(e) => setDepartment(e.target.value)}> Mechanical Events </button>
//                         <button value="Technology" className="all-btn" onClick={(e) => setDepartment(e.target.value)}> Tech Events </button>


//                     </div>



//                     {/* mobile view */}
//                     <div className="winner-section1-mob-btn-container">
//                         <select value={department} onChange={(e) => setDepartment(e.target.value)}>
//                             <option value="All">All Departments</option>
//                             <option value="Electronics">Electronics</option>
//                             <option value="Technology">Technology</option>
//                             <option value="Mechanical">Mechanical</option>
//                         </select>
//                     </div>

//                     <div style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         flexWrap: "wrap",
//                         gap: "1rem"
//                     }}>
//                         <div className="status-filter">
//                             <button onClick={() => setFilter("All")}>All</button>
//                             <button onClick={() => setFilter("Ongoing")}>Ongoing</button>
//                             <button onClick={() => setFilter("Upcoming")}>Upcoming</button>
//                         </div>
//                         <div className="winner-section1-btn-container">
//                             <div>
//                                 <GoArrowLeft onClick={prevSlide} size={24} />
//                             </div>
//                             <div>
//                                 <GoArrowRight onClick={nextSlide} size={24} />
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 <div className="winner-section1-mob-btn-container">
//                     <div>
//                         <GoArrowLeft onClick={prevSlide} size={24} />
//                     </div>
//                     <div>
//                         <GoArrowRight onClick={nextSlide} size={24} />
//                     </div>
//                 </div>
//             </div>
//             <div className="events-container1">
//                 {filteredEvents.length > 0 ? (
//                     <EventCard event={filteredEvents[currentIndex]} /> // Display only the current event
//                 ) : (
//                     <p>No events found for this filter.</p>
//                 )}
//             </div>
//             <div className="carousel-dots">
//                 {filteredEvents.map((_, index) => (
//                     <span
//                         key={index}
//                         className={`dot ${index === currentIndex ? "active" : ""}`}
//                         onClick={() => goToSlide(index)}
//                     ></span>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default EventList;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/competition/EventList.css";
import { GoArrowLeft, GoArrowRight, GoArrowDown } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import dateimg from "../../assets/calendar.png";
import vector from "../../assets/Vector2.png";
import eventtag from "../../assets/event-tag.png";
import eventData from "../../Data/Compition.json";

const EventList = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState("All"); // All, Ongoing, Upcoming
    const [department, setDepartment] = useState("All"); // All, Electronics, Technology, Mechanical 
    const [currentIndex, setCurrentIndex] = useState(0); // Carousel state
    const [events, setEvents] = useState([]);
    const currentDate = new Date();

    useEffect(() => {
        setEvents(eventData);
    }, []);

    // Function to format date as "2nd February 2025"
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

    // Filter events based on status and department
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

    // Carousel navigation functions
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === filteredEvents.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? filteredEvents.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // EventCard component
    const EventCard = ({ event }) => {
        if (!event || typeof event !== 'object') {
            return <div className="event-card1">Error: Invalid event data</div>;
        }

        const { title = "No Title",link = "No Link", description = "No Description", date, eventTags = "No Tags", imageUrl = "https://via.placeholder.com/150", id = "unknown" } = event;

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
                    {/* <button
                        onClick={() => {
                            window.scrollTo(0, 0);
                            title && navigate(`/event/${title}`);
                        }}
                        className="learn-more-btn1"
                    >
                        Learn More <IoIosArrowForward />
                    </button> */}

                    <button
                        onClick={() => {
                            window.scrollTo(0, 0);
                            title && navigate(`/event/${title}`);
                        }}
                        className="learn-more-btn1"
                    >
                        Learn More
                        <img src={vector} alt="Arrow" className="arrow-icon" />
                    </button>
                    <div className="button-group1">
                        {/* <button className="register-btn1">Register Now</button> */}
                        {/* Register Button */}
                        <a
                            href={link}
                            className="register-btn1"
                        >
                            Register Now
                        </a>
                        <button className="download-btn1">
                            <GoArrowDown className="event-icon3" /> Download Details
                        </button>
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
                        <button
                            className={`all-btn ${department === "All" ? "active" : ""}`}
                            onClick={() => setDepartment("All")}
                        >
                            All Events
                        </button>
                        <button
                            className={`all-btn ${department === "Electronics" ? "active" : ""}`}
                            onClick={() => setDepartment("Electronics")}
                        >
                            Electronic Events
                        </button>
                        <button
                            className={`all-btn ${department === "Mechanical" ? "active" : ""}`}
                            onClick={() => setDepartment("Mechanical")}
                        >
                            Mechanical Events
                        </button>
                        <button
                            className={`all-btn ${department === "Technology" ? "active" : ""}`}
                            onClick={() => setDepartment("Technology")}
                        >
                            Tech Events
                        </button>
                    </div>

                    {/* Mobile view */}
                    <div className="winner-section1-mob-btn-container">
                        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                            <option value="All">All Departments</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Technology">Technology</option>
                            <option value="Mechanical">Mechanical</option>
                        </select>
                    </div>

                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "1rem"
                    }}>
                        <div className="status-filter">
                            <button
                                className={filter === "All" ? "active" : ""}
                                onClick={() => setFilter("All")}
                            >
                                All
                            </button>
                            <button
                                className={filter === "Ongoing" ? "active" : ""}
                                onClick={() => setFilter("Ongoing")}
                            >
                                Ongoing
                            </button>
                            <button
                                className={filter === "Upcoming" ? "active" : ""}
                                onClick={() => setFilter("Upcoming")}
                            >
                                Upcoming
                            </button>
                        </div>
                        <div className="winner-section1-btn-container">
                            <div>
                                <GoArrowLeft onClick={prevSlide} size={24} />
                            </div>
                            <div>
                                <GoArrowRight onClick={nextSlide} size={24} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="winner-section1-mob-btn-container">
                    <div>
                        <GoArrowLeft onClick={prevSlide} size={24} />
                    </div>
                    <div>
                        <GoArrowRight onClick={nextSlide} size={24} />
                    </div>
                </div>
            </div>
            <div className="events-container1">
                {filteredEvents.length > 0 ? (
                    <EventCard event={filteredEvents[currentIndex]} />
                ) : (
                    <p>No events found for this filter.</p>
                )}
            </div>
            <div className="carousel-dots">
                {filteredEvents.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default EventList;