// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import vector from "../../assets/vector1.png";
// // import download from "../../assets/downarrow.png";
// // import evelivetag from "../../assets/evelivetag.png";
// import '../../styles/competition/EventxList.css';


// import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// import { FaCalendarAlt, FaDownload } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";


// // import "../../styles/competition/EventCard.css";

// // Sample event data (replace with real data as needed)
// const eventsData = [
//     // {
//     //     id: 1,
//     //     title: "Electronics Symposium 2025",
//     //     description: "A deep dive into next-gen circuits.",
//     //     date: "March 22, 2025",
//     //     eventTags: "Electronics, Innovation",
//     //     imageUrl: "https://example.com/electronics.jpg",
//     //     department: "Electronics",
//     // },
//     // {
//     //     id: 2,
//     //     title: "Tech Summit",
//     //     description: "Exploring AI and cloud tech.",
//     //     date: "March 24, 2025", // Today
//     //     eventTags: "AI, Technology",
//     //     imageUrl: "https://example.com/tech.jpg",
//     //     department: "Technology",
//     // },
//     // {
//     //     id: 3,
//     //     title: "Mech Design Workshop",
//     //     description: "Hands-on mechanical design session.",
//     //     date: "March 25, 2025", // Next day
//     //     eventTags: "MechEng, Design",
//     //     imageUrl: "https://example.com/mech.jpg",
//     //     department: "Mechanical Engineering",
//     // },
//     // {
//     //     id: 4,
//     //     title: "Circuit Debugging Contest",
//     //     description: "Electronics challenge.",
//     //     date: "March 26, 2025", // Day after next
//     //     eventTags: "Electronics, Contest",
//     //     imageUrl: "https://example.com/circuit.jpg",
//     //     department: "Electronics",
//     // },
//     // {
//     //     id: 5,
//     //     title: "Future Robotics Expo",
//     //     description: "Robotics showcase.",
//     //     date: "April 1, 2025", // Future event
//     //     eventTags: "Tech, Robotics",
//     //     imageUrl: "https://example.com/robotics.jpg",
//     //     department: "Technology",
//     // },
// ];


// //   Handle navigation
// const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//         prevIndex === winners.length - 1 ? 0 : prevIndex + 1
//     );
// };

// const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? winners.length - 1 : prevIndex - 1
//     );
// };

// const goToSlide = (index) => {
//     setCurrentIndex(index);
// };

// if (winners.length === 0) {
//     return <div>Loading...</div>;
// }

// const currentWinner = winners[currentIndex];


// const EventList = () => {
//     const navigate = useNavigate();
//     const [filter, setFilter] = useState("All"); // All, Ongoing, Upcoming
//     const [department, setDepartment] = useState("All"); // All, Electronics, Technology, Mechanical Engineering
//     const currentDate = new Date("March 24, 2025"); // Current date from your input

//     // Filter events based on status and department
//     const filteredEvents = eventsData.filter(event => {
//         const eventDate = new Date(event.date);
//         const isToday = eventDate.toDateString() === currentDate.toDateString();

//         // Calculate the difference in days
//         const timeDiff = eventDate - currentDate;
//         const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
//         const isNextOneOrTwoDays = dayDiff > 0 && dayDiff <= 2;
//         const isFuture = dayDiff > 0;

//         // Status filter
//         if (filter === "Ongoing" && !isToday) return false;
//         if (filter === "Upcoming" && !(isNextOneOrTwoDays || isFuture)) return false;

//         // Department filter
//         if (department !== "All" && event.department !== department) return false;

//         return true;
//     });

//     //   const EventCard = ({ event }) => (
//     //     <div className="event-card">
//     //       <div className="event-content">
//     //         <h2 className="event-title">{event.title}</h2>
//     //         <p className="event-description">{event.description}</p>
//     //         <p className="event-details">
//     //           <img src={vector} className="event-icon" alt="icon" /> {event.date}   
//     //           <img src={vector} className="event-icon" alt="icon" /> {event.eventTags}
//     //         </p>
//     //         <button 
//     //           onClick={() => navigate(`/event/${event.id}`)}
//     //           className="learn-more-btn"
//     //         >
//     //           Learn More <img src={vector} alt="arrow" className="arrow-icon" />
//     //         </button>
//     //         <div className="button-group">
//     //           <button className="register-btn">Register Now</button>
//     //           <button className="download-btn">
//     //             <img src={vector} className="download-icon" alt="download" /> Download Details
//     //           </button>
//     //         </div>
//     //       </div>
//     //       <div className="event-image-container">
//     //         <img src={event.imageUrl} alt="Event" className="event-image" />
//     //       </div>
//     //     </div>
//     //   );




//     const EventCard = ({ event }) => {
//         const navigate = useNavigate();

//         return (
//             <div className="event-card">
//                 <div className="event-content">
//                     <h2 className="event-title">{event.title}</h2>
//                     <p className="event-description">{event.description}</p>
//                     <p className="event-details">
//                         <FaCalendarAlt />{event.date}
//                         <FaCalendarAlt />{event.eventTags}
//                     </p>
//                     <button
//                         onClick={() => navigate(`/event/${event.id}`)}
//                         className="learn-more-btn"
//                     >
//                         Learn More <IoIosArrowForward />
//                     </button>
//                     <div className="button-group">
//                         <button className="register-btn">
//                             Register Now
//                         </button>
//                         <button className="download-btn">
//                             <FaDownload />Download Details
//                         </button>
//                     </div>
//                 </div>
//                 <div className="event-image-container">
//                     <img
//                         src={event.imageUrl}
//                         alt="Event"
//                         className="event-image"
//                     />
//                 </div>
//             </div>
//         );
//     };


//     return (
//         <div className="event-list">
//             <h1>Events</h1>
//             <div className="filters">

//                 <div className="department-filter">
//                     <select value={department} onChange={(e) => setDepartment(e.target.value)}>
//                         <option value="All">All Departments</option>
//                         <option value="Electronics">Electronics</option>
//                         <option value="Technology">Technology</option>
//                         <option value="Mechanical Engineering">Mechanical Engineering</option>
//                     </select>
//                 </div>

//                 <div className="status-filter">
//                     <button onClick={() => setFilter("All")}>All</button>
//                     <button onClick={() => setFilter("Ongoing")}>Ongoing</button>
//                     <button onClick={() => setFilter("Upcoming")}>Upcoming</button>
//                 </div>
//                 <div className="winner-section1-btn-container">
//                     <div>
//                         <GoArrowLeft onClick={prevSlide} size={24} />
//                     </div>
//                     <div>
//                         <GoArrowRight onClick={nextSlide} size={24} />
//                     </div>
//                 </div>

//                 <div className="winner-section1-mob-btn-container">
//                     <div>
//                         <GoArrowLeft onClick={prevSlides} size={24} />
//                     </div>
//                     <div>
//                         <GoArrowRight onClick={nextSlide} size={24} />
//                     </div>
//                 </div>
//             </div>
//             <div className="events-container">
//                 {filteredEvents.length > 0 ? (
//                     filteredEvents.map(event => <EventCard key={event.id} event={event} />)
//                 ) : (
//                     <p>No events found for this filter.</p>
//                 )}
//             </div>

//             <div className="carousel-dots">
//                 {winners.map((_, index) => (
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