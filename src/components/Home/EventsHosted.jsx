import React from "react";
import "../../styles/Home/EventsHosted.css";
import { FaChevronRight } from "react-icons/fa";


import { useNavigate } from "react-router-dom";

function EventsHosted() {

  const navigateTo = useNavigate();
  const googleForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSe-I8bmXElAO0rzbJjFutZF-RVsTX-jFV-nPhmBMeKjfK1J2g/viewform?usp=send_form",
      "_blank"
    );
  }
  return (
    <div className="events-hosted-container">
      <div className="events-hosted-title">Events</div>
      <div className="events-img-container">
        {/* <img src={eventshosted} alt="events hosted" /> */}
        <div className="events-text-holder">
          <div className="events-header">Hackathon</div>
          <div className="events-details">
            Save the date! Our Hackathon kicks off on 26/02/2023 at 9:00AM,
            hosted at Guindy. Get ready to code, collaborate, and redefine the
            future of technology!
          </div>
          <div className="events-button-holder">
            <button className="event-btn register-now-btn" onClick={googleForm}>
              Register Now{" "}
              <FaChevronRight
                style={{ verticalAlign: "middle", marginLeft: "1rem" }}
              />
            </button>
            <button className="event-btn events-view-details-btn" onClick={() => {
                        window.scrollTo(0, 0);
                        navigateTo(`/competition`);
                      }}>
              View Details{" "}
              <FaChevronRight
                style={{ verticalAlign: "middle", marginLeft: "1rem" }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="more-case-mobile"


        onClick={() => {
          navigateTo("/competition");
          window.scrollTo(0, 0);
        }}
        style={{ cursor: "pointer" }}
      >
        More Events {""}
        < FaChevronRight />

      </div> */}
    </div>
  );
}

export default EventsHosted;
