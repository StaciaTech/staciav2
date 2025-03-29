
import React, { useRef, useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "../../styles/competition/Winner.css";
import winnersData from "../../Data/Winner.json";
import dateimg from "../../assets/calendar.png";
import eventtag from "../../assets/event-tag.png";



function Winners() {
    const [winners, setWinners] = useState([]);
    const [eventInfo, setEventInfo] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        try {
            const data = winnersData.docs[0];
            setEventInfo({
                event: data.event,
                date: data.date,
                category: data.category,
                description: data.description
            });
            setWinners(data.data);
        } catch (error) {
            console.error("Error loading winners data:", error);
        }
    }, []);

    // Unified scroll function
    const scrollToIndex = (index) => {
        const newIndex = Math.max(0, Math.min(index, winners.length - 1));
        setCurrentIndex(newIndex);

        if (scrollContainerRef.current) {
            const cardWidth = window.innerWidth <= 768 ?
                window.innerWidth * 0.9 : // Mobile width
                window.innerWidth * 0.3; // Desktop width
            const scrollAmount = cardWidth * newIndex;

            scrollContainerRef.current.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const scrollLeft = () => {
        scrollToIndex(currentIndex - 1);
    };

    const scrollRight = () => {
        scrollToIndex(currentIndex + 1);
    };

    // Mobile-specific scroll functions
    const mobscrollLeft = () => {
        scrollToIndex(currentIndex - 1);
    };

    const mobscrollRight = () => {
        scrollToIndex(currentIndex + 1);
    };

    if (winners.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="winner-container">
            <div className="winner-section1-container-title">Our Latest Winners</div>
            <div className="winner-section1-main-des-container">
                <div className="winner-header">
                    <span className="winner-event">{eventInfo.event}</span>
                    <div className="Winner-date-category">
                        <span className="winner-date">
                            <img src={dateimg} alt="Date" className="date-icon" />
                            {eventInfo.date}</span>
                        <span className="winner-category">
                            <img src={eventtag} alt="Date" className="date-icon" />
                            {eventInfo.category}</span>
                    </div>
                    <div>
                        <p>{eventInfo.description}</p>
                    </div>
                </div>

                {/* Desktop navigation */}
                <div className="winner-section1-btn-container">


                    <div>
                        <GoArrowLeft size={24} onClick={scrollLeft}
                            disabled={currentIndex === 0}
                            className={currentIndex === 0 ? "disabled" : ""} />
                    </div>


                    <div>
                        <GoArrowRight size={24} onClick={scrollRight}
                            disabled={currentIndex === winners.length - 1}
                            className={currentIndex === winners.length - 1 ? "disabled" : ""} />

                    </div>
                </div>


            </div>

            <div className="winner-section1-items-container" ref={scrollContainerRef}>
                {winners.map((eachItem, i) => (
                    <div key={i} className="winner-section1-item-card">
                        <div className="winner-section1-items-img">
                            <img src={eachItem.imageUrl} alt={eachItem.title} />
                        </div>
                        <div className="winner-section1-item-content">
                            <div>{eachItem.title}</div>
                            <p>{eachItem.details}</p>
                        </div>
                    </div>
                ))}
            </div>


            {/* Carousel dots */}
            <div className="carousel-dots">
                {winners.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => scrollToIndex(index)}
                    ></span>
                ))}
            </div>

            {/* Mobile navigation */}
            <div className="winner-section1-mob-btn-container">


                <div>
                    <GoArrowLeft size={24} onClick={mobscrollLeft}
                        disabled={currentIndex === 0}
                        className={currentIndex === 0 ? "disabled" : ""} />

                </div>
                <div>
                    <GoArrowRight size={24} onClick={mobscrollRight}
                        disabled={currentIndex === winners.length - 1}
                        className={currentIndex === winners.length - 1 ? "disabled" : ""} />
                </div>

            </div>
        </div>
    );
}

export default Winners;