// import React from "react";
// import "../styles/competition.css";
// import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";
// import Footer from "../components/Footer";
// import MobileFooter from "../components/MobileFooter";
// // import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";

// import Banner from "../components/Competition/Banner";
// import Winners from "../components/Competition/Winner";
// import PastEventCard from "../components/Competition/Past-event";
// // import EventCard from "../components/Competition/Event-Card";

// import EventList from "../components/Competition/EventList";

// // import back from "../assets/leftarrow.png";
// // import next from "../assets/rightarrow.png";
// // import vector from "../assets/vector1.png";
// // import download from "../assets/downarrow.png";
// // import evelivetag from "../assets/evelivetag.png";



// const CompetitionPage = () => {


//     return (
//         <div>
//             <div className="nav_style">
//                 <NavBar />
//                 <SideBar />
//             </div>
//             <div>
//                 <Banner />
//             </div>
//             <div>
//                 <EventList />
//             </div>
//             <div>
//                 <Winners />
//             </div>
//             <div>
//                 <PastEventCard />
//             </div>
//             <div>
//                 <Footer />
//                 <MobileFooter />
//             </div>
//         </div>
//     );
// };

// export default CompetitionPage;




import React, { Suspense } from "react";
import "../styles/competition.css";
// import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
// Lazy load components
const NavBar = React.lazy(() => import("../components/NavBar"));
const SideBar = React.lazy(() => import("../components/SideBar"));
const Footer = React.lazy(() => import("../components/Footer"));
const MobileFooter = React.lazy(() => import("../components/MobileFooter"));
const Banner = React.lazy(() => import("../components/Competition/Banner"));
const Winners = React.lazy(() => import("../components/Competition/Winner"));
const PastEventCard = React.lazy(() =>
    import("../components/Competition/Past-event")
);
const EventList = React.lazy(() =>
    import("../components/Competition/EventList")
);
// import back from "../assets/leftarrow.png";
// import next from "../assets/rightarrow.png";
// import vector from "../assets/vector1.png";
// import download from "../assets/downarrow.png";
// import evelivetag from "../assets/evelivetag.png";
const CompetitionPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    );
};
export default CompetitionPage;
