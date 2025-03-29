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



// import EventCard from "../components/Competition/Event-Card";

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
                <EventList />
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




