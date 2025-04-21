
import React, { useEffect, useState } from "react";
import "../styles/LeaderPage.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import p1 from "../assets/sarabesh.png";
// import LeaderCarousel from "../components/ReUsableComp/LeaderCarousel";
import LeaderCarousel from "../components/ReUsableComp/LeaderCareousel";
import { useParams } from "react-router-dom";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
import data from "../Data/About.json";

function LeaderPage() {
  const [singleLeader, setSingleLeader] = useState();
  const params = useParams();
  const Leaderkeyname = params.name.split("-").join(" ");

  const [Leaders, setLeaders] = useState(data.leaders);

  useEffect(() => {
    const foundLeader = Leaders.find(
      (leader) => leader.name === Leaderkeyname
    );
    setSingleLeader(foundLeader);
  }, [Leaderkeyname]);

  return (
    <div>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      <div>
        <div className="leader-hero-container">
          <div className="leader-hero-name">
            <div>{singleLeader?.name}</div>
            <p>{singleLeader?.designation}</p>
          </div>
          <div className="leader-hero-img-container">
            <div>
              <img src={singleLeader?.imageUrl} alt="Leader" />
            </div>
          </div>
        </div>

        <div className="leader-content-container">
          <div className="leader-info-container">
            <div>
              <div className="leader-profile-container">
                <div className="leader-profile-img">
                  <img src={singleLeader?.imageUrl} alt="Leader" />
                </div>
                <div>
                  <div className="leader-profile-name">{singleLeader?.name}</div>
                  <div className="leader-profile-role">{singleLeader?.designation}</div>
                  <div className="leader-icons">
                    
                    <div>
                      <a href={`mailto:${singleLeader?.email}`} target="/blank" rel="noreferrer">
                        <div className="leader-icon-container">
                          <FaEnvelope className="footer-facebook-icon" />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href={singleLeader?.linkedin} target="_blank" rel="noreferrer">
                        <div className="leader-icon-container">
                          <FaLinkedinIn className="footer-linkedin-icon" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="leader-profile-line">
                {singleLeader?.quote}
              </div>
            </div>
          </div>
          <div>
            <p>{singleLeader?.des}</p>
          </div>
        </div>
        <div className="leader-carousel-container">
          <LeaderCarousel data={singleLeader?.name}/>
        </div>
      </div>
      <div>
        <Footer />
        <MobileFooter />
      </div>
    </div>
  );
}

export default LeaderPage;
