import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import eventData from "../../Data/Compition.json";
import vector from "../../assets/Vector.png";
import plus from "../../assets/plus-large_svgrepo.com.png";
import dateIcon from "../../assets/evedate.png";
import "../../styles/competition/PastEventsList.css";

const PastEventCard = ({ _id, imageUrl, title, description, date, eventTags }) => {
    const navigate = useNavigate();

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

    return (
        <div className="past-event-card">
            <div
                // className="event-image"
                // style={{
                //     backgroundImage: `url(${imageUrl || "default-image.jpg"})`,
                // }}
                
            >
                <img src={imageUrl}  className="event-img" />
            </div>

            <div className="event-content">
                <span className="event-tag">{eventTags || "No Tags"}</span>

                <h3 className="event-title-past">{title || "Untitled Event"}</h3>
                <p className="event-description">{description || "No description available."}</p>

                <p className="event-date">
                    <img src={dateIcon} alt="Date" className="date-icon" />
                    <h4>{date ? formatDate(date) : "No date available"}</h4>
                </p>

                <button
                    onClick={() => {
                        window.scrollTo(0, 0);
                        title && navigate(`/event/${title}`);
                    }}
                    className="learn"
                >
                    Read More
                    <img src={vector} alt="Arrow" className="arrow-icon" />
                </button>
            </div>
        </div>
    );
};

const PastEventsList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);

    const currentDate = new Date();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setEvents(eventData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    const parseDate = (dateString) => {
        const [day, month, year] = dateString.split("/").map(Number);
        return new Date(year, month - 1, day);
    };

    const pastEvents = events.filter((event) => parseDate(event.date) < currentDate);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    return (
        <div className="past-events-container">
            <h1 className="past-events-title">Past Events</h1>

            {loading && <p>Loading past events...</p>}
            {error && <p className="error-message">{error}</p>}

            <div className="events-grid">
                {!loading && !error && pastEvents.length > 0 ? (
                    pastEvents.slice(0, visibleCount).map((event) => (
                        <PastEventCard key={event.id || event._id} {...event} />
                    ))
                ) : (
                    !loading && !error && <p>No past events found.</p>
                )}
            </div>

            <div className="show-more-container">
                {visibleCount < pastEvents.length && (
                    <div className="show-more-wrapper">
                        <div className="line-1"></div>
                        <button onClick={handleShowMore} className="show-more-btn">
                            <img src={plus} alt="Show More" className="plus-icon" />
                        </button>
                        <div className="line-1"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PastEventsList;