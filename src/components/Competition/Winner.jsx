import React, { useRef, useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight ,GoEyeClosed } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import "../../styles/competition/Winner.css";
import winnersData from "../../Data/Winner.json";
import dateimg from "../../assets/calendar.png";
import eventtag from "../../assets/event-tag.png";
function Winners() {
    const [winners, setWinners] = useState([]);
    const [eventInfo, setEventInfo] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const scrollContainerRef = useRef(null);
    const popupRef = useRef(null)

    useEffect(() => {
        try {
            const data = winnersData.docs[0];
            setEventInfo({
                event: data.event,
                date: data.date,
                category: data.category,
                description: data.description,
            });
            setWinners(data.data);
        } catch (error) {
            console.error("Error loading winners data:", error);
        }
    }, []);

    useEffect(() => {
        if (showForm) {
            document.body.style.overflow ="hidden";
            document.body.style.position= "fixed";
            document.body.style.width = "100%";
        }else{
            document.body.style.overflow = "auto";
            document.body.style.position= "";
            document.body.style.width = "";
        }
        return()=>{
            document.body.style.overflow = "auto";
            document.body.style.position= "";
            document.body.style.width = "";
        }
    },[showForm])

    
    const scrollToIndex = (index) => {
        const newIndex = Math.max(0, Math.min(index, winners.length - 1));
        setCurrentIndex(newIndex);
        if (scrollContainerRef.current) {
            const cardWidth =
                window.innerWidth <= 768
                    ? window.innerWidth * 0.9
                    : window.innerWidth * 0.3;
            const scrollAmount = cardWidth * newIndex;
            scrollContainerRef.current.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };
    const scrollLeft = () => scrollToIndex(currentIndex - 1);
    const scrollRight = () => scrollToIndex(currentIndex + 1);
    const mobscrollLeft = () => scrollToIndex(currentIndex - 1);
    const mobscrollRight = () => scrollToIndex(currentIndex + 1);

    const handleDownloadClick = (certificate) => {
        setSelectedCertificate(certificate);
        setShowForm(true);
    };
    const handleWheel = (e)=>{
        const container = e.currentTarget
        if(container.scrollHeight > container.clientHeight){
            e.preventDefault();
            e.preventPropagation();
        }
    }
    if (winners.length === 0) {
        return <div>Loading...</div>;
    }

    // useEffect(() => {

    //     document.body.classList.add("no-scroll");
    //     return () => document.body.classList.remove("no-scroll")

    // }, [])
    return (
        <div className="winner-container">
            <div className="winner-section1-container-title">Our Latest Winners</div>
            <div className="winner-section1-main-des-container">
                <div className="winner-header">
                    <span className="winner-event">{eventInfo.event}</span>
                    <div className="Winner-date-category">
                        <span className="winner-date">
                            <img src={dateimg} alt="Date" className="date-icon" />
                            {eventInfo.date}
                        </span>
                        <span className="winner-category">
                            <img src={eventtag} alt="Category" className="date-icon" />
                            {eventInfo.category}
                        </span>
                    </div>
                    <div>
                        <p>{eventInfo.description}</p>
                    </div>
                </div>
                <div className="winner-section1-btn-container">
                    <div>
                        <GoArrowLeft
                            size={24}
                            onClick={scrollLeft}
                            disabled={currentIndex === 0}
                            className={currentIndex === 0 ? "disabled" : ""}
                        />
                    </div>
                    <div>
                        <GoArrowRight
                            size={24}
                            onClick={scrollRight}
                            disabled={currentIndex === winners.length - 1}
                            className={currentIndex === winners.length - 1 ? "disabled" : ""}
                        />
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
                            <button className="register-btn1" onClick={() => handleDownloadClick(eachItem)}>
                                View Certificate 
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {winners.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => scrollToIndex(index)}
                    ></span>
                ))}
            </div>
            <div className="winner-section1-mob-btn-container">
                <div>
                    <GoArrowLeft
                        size={24}
                        onClick={mobscrollLeft}
                        disabled={currentIndex === 0}
                        className={currentIndex === 0 ? "disabled" : ""}
                    />
                </div>
                <div>
                    <GoArrowRight
                        size={24}
                        onClick={mobscrollRight}
                        disabled={currentIndex === winners.length - 1}
                        className={currentIndex === winners.length - 1 ? "disabled" : ""}
                    />
                </div>
            </div>
            {/* Certificate popup */}
            {showForm && selectedCertificate && (
                <div className="popup-form-overlay">
                    <div className="popup-form-container" onWheel={handleWheel} ref={popupRef}>
                        <h3>Certificate Preview</h3> 
                        <div>
                        <button
                            type="button"
                            className="close-btn"
                            onClick={() => setShowForm(false)}
                        >
                            <IoMdClose />
                        </button>
                        </div>
                        {/* <a
                            href={selectedCertificate.certificateUrl} target="/blank"
                            rel="noopener noreferrer"   // Security improvement
                        // href={`/${selectedCertificate.certificateUrl}/${selectedCertificate.id}`}
                        // target="_blank"
                        // rel="noopener noreferrer"   // Security improvement
                        // id={selectedCertificate.id}

                        > */}
                        {/* 
                        <a
                            href={`/${selectedCertificate.certificateUrl}/${ selectedCertificate.id }`}  // Encode the id
                            target="_blank"
                            rel="noopener noreferrer"   // Security improvement
                            id={selectedCertificate.id}
                        > */}
                        {/* <a href={`/certificates/${selectedCertificate.id}`} target="_blank" rel="noopener noreferrer">
                            <img src={selectedCertificate.certificateUrl} alt="Preview" />
                        </a> */}
                        {/* <img
                                src={selectedCertificate.certificateUrl}
                                alt="Certificate"
                                className="certificate-preview-img"
                            /></a> */}



                        <a
                            href={`/certificates/${encodeURIComponent(selectedCertificate.id)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={selectedCertificate.certificateUrl} alt="Preview" className="certificate-preview-img" />
                        </a>

                        <div>

                            <a
                                href={selectedCertificate.dowloadCertificate}
                                download
                                className="download-btn"
                            >
                                Download
                            </a>
                        </div>
                        {/* <button
                            type="button"
                            className="close-btn"
                            onClick={() => setShowForm(false)}
                        >
                            <IoMdClose />
                        </button> */}
                    </div>
                </div>
            )}
        </div>
    );
}
export default Winners;