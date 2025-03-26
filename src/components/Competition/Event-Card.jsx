
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import vector from "../../assets/vector1.png";
// import download from "../../assets/downarrow.png";
// import evelivetag from "../../assets/evelivetag.png";



// const EventCard = ({ event }) => {
//     const navigate = useNavigate();

//     return (
//         <div style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             border: "1px solid #B9BCC7",
//             borderRadius: "10px",
//             padding: "20px",
//             marginBottom: "20px",
//             background: "#F8FAFF"
//         }}>
//             <div style={{ flex: 1 }}>
//                 <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>{event.title}</h2>
//                 <p style={{ color: "#6B6084", marginBottom: "10px" }}>{event.description}</p>
//                 <p style={{ color: "#374151", fontWeight: "bold", marginBottom: "10px" }}>
//                     <img src={evelivetag} style={{ width: "4%" }} alt="icon" /> {event.date} &nbsp;&nbsp;
//                     <img src={evelivetag} style={{ width: "4%" }} alt="icon" /> {event.eventTags}
//                 </p>
//                 <button
//                     onClick={() => navigate(`/event/${event.id}`)}
//                     style={{
//                         border: "none",
//                         color: "#0047FF",
//                         background: "#F8FAFF",
//                         padding: "10px 20px",
//                         cursor: "pointer",
//                         marginBottom: "10px"
//                     }}
//                 >
//                     Learn More <img src={vector} alt="arrow" style={{ marginLeft: "5px" }} />
//                 </button>
//                 <div style={{display:"flex" }}>
//                     <button style={{
//                         padding: "10px 20px",
//                         backgroundColor: "#2563EB",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         cursor: "pointer",
//                         marginRight: "10px"
//                     }}>
//                         Register Now
//                     </button>
//                     <button style={{
//                         padding: "10px 20px",
//                         backgroundColor: "#E5E7EB",
//                         border: "none",
//                         borderRadius: "5px",
//                         cursor: "pointer",
//                         display: "flex",
//                         alignItems: "center"
//                     }}>
//                         <img src={download} style={{ width: "15px", marginRight: "5px" }} alt="download" /> Download Details
//                     </button>
//                 </div>
//             </div>
//             <div style={{ flex: 1, textAlign: "right" }}>
//                 <img
//                     src={event.imageUrl}
//                     alt="Event"
//                     style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}
//                 />
//             </div>
//         </div>
//     );
// };

// export default EventCard;




import React from 'react';
import { useNavigate } from 'react-router-dom';
// import vector from "../../assets/vector1.png";
// import download from "../../assets/downarrow.png";
// import evelivetag from "../../assets/evelivetag.png";

import { FaCalendarAlt , FaDownload } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


import "../../styles/competition/EventCard.css";

const EventCard = ({ event }) => {
    const navigate = useNavigate();

    return (
        <div className="event-card">
            <div className="event-content">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-description">{event.description}</p>
                <p className="event-details">
                   <FaCalendarAlt />{event.date} 
                   <FaCalendarAlt />{event.eventTags}
                </p>
                <button 
                    onClick={() => navigate(`/event/${event.id}`)}
                    className="learn-more-btn"
                >
                    Learn More <IoIosArrowForward />
                </button>
                <div className="button-group">
                    <button className="register-btn">
                        Register Now
                    </button>
                    <button className="download-btn">
                       <FaDownload/>Download Details
                    </button>
                </div>
            </div>
            <div className="event-image-container">
                <img
                    src={event.imageUrl}
                    alt="Event"
                    className="event-image"
                />
            </div>
        </div>
    );
};

export default EventCard;
