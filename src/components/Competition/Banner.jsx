// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import bancal from "../../assets/bancal.png";
// import "../../styles/competition/Banner.css";
// import eventData from "../../Data/Compition.json";

// const Banner = () => {
//   const [banners, setBanners] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Current date
//   const currentDate = new Date();

//   // Fetch banners
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setBanners(eventData);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   // Function to parse DD/MM/YYYY string to Date object
//   const parseDate = (dateString) => {
//     const [day, month, year] = dateString.split("/").map(Number);
//     return new Date(year, month - 1, day); // month - 1 because months are 0-based
//   };

//   // Function to format date as "20th June 2025"
//   const formatDate = (dateString) => {
//     const date = parseDate(dateString);
//     const day = date.getDate();
//     const month = date.toLocaleString("default", { month: "long" });
//     const year = date.getFullYear();

//     // Add ordinal suffix (st, nd, rd, th) to day
//     const getOrdinalSuffix = (day) => {
//       if (day > 3 && day < 21) return "th"; // 11th to 20th are always "th"
//       switch (day % 10) {
//         case 1:
//           return "st";
//         case 2:
//           return "nd";
//         case 3:
//           return "rd";
//         default:
//           return "th";
//       }
//     };

//     return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
//   };

//   // Filter events
//   const futureEvents = banners.filter((event) => parseDate(event.date) > currentDate);

//   // Auto-slider effect
//   useEffect(() => {
//     if (futureEvents.length > 0) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % futureEvents.length); // Updated to use futureEvents.length
//       }, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [futureEvents]);

//   if (loading) return <p className="loading">Loading...</p>;
//   if (error) return <p className="error-message1">{error}</p>;
//   if (!futureEvents.length) return <p className="no-data">No upcoming events found.</p>;

//   return (
//     <div className="banner-container">
//       {/* Background Image */}
//       <img
//         src={futureEvents[currentIndex]?.bannerUrl}
//         alt={futureEvents[currentIndex]?.bannerTitle}
//         className="banner-image"
//       />

//       {/* Overlay Content */}
//       <div className="banner-overlay">
//         <div className="banner-content">
//           {/* Event Title */}
//           <h1 className="banner-title">
//             {futureEvents[currentIndex]?.bannerTitle || "No Upcoming Event"}
//           </h1>

//           {/* Event Date & Tag */}
//           <div className="banner-details">
//             <span className="banner-info">
//               <img src={bancal} alt="calendar" className="icon" />{" "}
//               {formatDate(futureEvents[currentIndex]?.date)}
//             </span>
//             <span className="banner-info">
//               <img src={bancal} alt="tag" className="icon" />{" "}
//               {futureEvents[currentIndex]?.eventTags}
//             </span>
//           </div>

//           {/* Register Button */}
//           <a
//             href={futureEvents[currentIndex]?.link || "#"}
//             className="register-button"
//           >
//             Register Now
//           </a>
//         </div>
//       </div>

//       {/* Navigation Dots */}
//       <div className="navigation-dots">
//         {futureEvents.map((_, index) => (
//           <button
//             key={index}
//             className={`dot ${currentIndex === index ? "active" : ""}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;


import React, { useState, useEffect } from "react";
import axios from "axios";
import bancal from "../../assets/bancal.png";
import "../../styles/competition/Banner.css";
import eventData from "../../Data/Compition.json";
const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Current date
  const currentDate = new Date();
  // Fetch banners
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setBanners(eventData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);
  // Function to parse DD/MM/YYYY string to Date object
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day); // month - 1 because months are 0-based
  };
  // Function to format date as "20th June 2025"
  const formatDate = (dateString) => {
    const date = parseDate(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
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
    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
  };
  // Filter events
  const futureEvents = banners.filter((event) => parseDate(event.date) > currentDate);
  // Auto-slider effect
  useEffect(() => {
    if (futureEvents.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % futureEvents.length); // Updated to use futureEvents.length
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [futureEvents]);
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error-message1">{error}</p>;
  if (!futureEvents.length) return <p className="no-data">No upcoming events found.</p>;
  return (
    <div className="banner-container">
      {/* Background Image */}
      <img
        src={futureEvents[currentIndex]?.bannerUrl}
        alt={futureEvents[currentIndex]?.bannerTitle}
        className="banner-image"
        loading="lazy"
      />
      {/* Overlay Content */}
      <div className="banner-overlay">
        <div className="banner-content">
          {/* Event Title */}
          <h1 className="banner-title">
            {futureEvents[currentIndex]?.bannerTitle || "No Upcoming Event"}
          </h1>
          {/* Event Date & Tag */}
          <div className="banner-details">
            <span className="banner-info">
              <img
                src={bancal}
                alt="calendar"
                className="icon"
                loading="lazy"
              />{" "}
              {formatDate(futureEvents[currentIndex]?.date)}
            </span>
            <span className="banner-info">
              <img src={bancal} alt="tag" className="icon" loading="lazy" />{" "}
              {futureEvents[currentIndex]?.eventTags}
            </span>
          </div>
          {/* Register Button */}
          <a
            href={futureEvents[currentIndex]?.link || "#"}
            className="register-button"
          >
            Register Now
          </a>
        </div>
      </div>
      {/* Navigation Dots */}
      <div className="navigation-dots">
        {futureEvents.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default Banner;