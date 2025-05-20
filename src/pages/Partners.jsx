import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import "../styles/Partners.css";
import data from "../Data/About.json"; // Import the JSON file

function Partners() {
  // No need for useState or useEffect since data is static
  console.log(data.partners); // Logging the data for debugging

  return (
    <div>
      <div>
        <NavBar />
        <SideBar />
      </div>
      <div>
        <div className="partners-hero" >Partnership</div>
      </div>
      <div className="partners-container">
        <div className="partner-title">Our Partnership</div>
        <div className="partner-heading">Stacia: Empowering Futures, Engineering Solutions</div>
        <p className="partner-des">
          Our mission is to empower businesses with innovative and reliable IT solutions that enhance productivity and drive sustainable growth.
        </p>

        <div className="partners-img-container">
          {data.images.map((eachItem, i) => (
            <div key={i}>
              <img src={eachItem} alt={`Partner image ${i + 1}`} />
            </div>
          ))}
        </div>
        <div className="partners-detail-container">
          {data.partners.map((eachItem, i) => (
            <div key={i} className="partner-data-card">
              <div className="partner-data-card-content">
                <div>{eachItem.title}</div>
                <p>{eachItem.description}</p>
              </div>
              <div className="partner-data-card-img">
                <img src={eachItem.image.imageUrl} alt={eachItem.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default Partners;
