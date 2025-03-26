import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import "../styles/Partners.css";
import axios from "axios";

function Partners() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [partnersData, setPartnersData] = useState();

  const FetchPartners = async () => {
    try {
      const res = await axios.get(`${apiUrl}/partnership/index`);
      setPartnersData(res.data.docs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchPartners();
  }, []);
  console.log(partnersData?.data);

  return (
    <div>
      <div>
        <NavBar />
        <SideBar />
      </div>
      <div>
        <div className="partners-hero">Partners</div>
      </div>
      <div className="partners-container">
        <div className="partner-title">Our Partnership</div>
        <div className="partner-heading">Stacia fkjdslk fhsjkfjsa fsdafj</div>
        <p className="partner-des">
          Lorem, ipsum dolor. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Suscipit labore corrupti consectetur. Quo
          consequatur labore quae incidunt quis autem rem.
        </p>

        <div className="partners-img-container">
          {partnersData?.images.map((eachItem, i) => (
            <div key={i}>
              <img src={eachItem} alt="" />
            </div>
          ))}
        </div>
        <div>
          {partnersData?.data.map((eachItem, i) => (
            <div key={i} className="partner-data-card">
              <div className="partner-data-card-content">
                <div>{eachItem.title}</div>
                <p>{eachItem.description}</p>
              </div>
              <div className="partner-data-card-img">
                <img src={eachItem.image.imageUrl} alt="" />
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
