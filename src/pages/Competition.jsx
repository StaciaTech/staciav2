import React, { useEffect, useState, useRef } from "react";
import "../styles/competition.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";

import Banner from "../components/Competition/Banner";
import Winners from "../components/Competition/Winner";
import PastEventCard from "../components/Competition/Past-event";



import EventCard from "../components/Competition/Event-Card";

import EventList from "../components/Competition/EventList";




// import back from "../assets/leftarrow.png";
// import next from "../assets/rightarrow.png";
// import vector from "../assets/vector1.png";
// import download from "../assets/downarrow.png";
// import evelivetag from "../assets/evelivetag.png";



const CompetitionPage = () => {


    return (
        <div>
            <div className="nav_style">
                <NavBar />
                <SideBar />
            </div>
            <div>
                <Banner />
            </div>
            <div>
                <div className="live-event">
                    <div className="all-btn-evt">
                        <Link to="/competition/all-events" className="all-btn">All Events</Link>
                        <Link to="/competition/tech" className="all-btn"> Tech Events </Link>
                        <Link to="/competition/mechanical" className="all-btn"> Mechanical Events </Link>
                        <Link to="/competition/electronics" className="all-btn"> Electronic Events </Link>
                    </div>

                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "1rem"
                    }}>
                        <div className="cnt-btn-evt">
                            <Link className="cnt-btn" to={"all"}>All</Link>
                            <Link className="cnt-btn" to={"ongoing"}>Ongoing</Link>
                            <Link className="cnt-btn" to={"upcoming"}>Upcoming</Link>
                        </div>

                        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                            {/* <button onClick={scrollLeft} style={{ border: "0px", background: "none", cursor: "pointer" }}>
                            <img src={back} alt="Previous Events" style={{ width: "30px" }} />
                            </button>
                             <button onClick={scrollRight} style={{ border: "0px", background: "none", cursor: "pointer" }}>
                            <img src={next} alt="Next Events" style={{ width: "30px" }} />
                            </button> */}
                        </div>
                        {/* <EventCard /> */}
                    </div>




                </div>
            </div>

            <div>
                {/* <EventList /> */}
            </div>
            <div>
                <Winners />
            </div>

            <div>
                <PastEventCard />
            </div>
            <div>
                <Footer />
                <MobileFooter />
            </div>





        </div>
    );
};

export default CompetitionPage;




