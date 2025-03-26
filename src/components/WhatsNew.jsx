import React, { useState, useEffect } from "react";
import Star from "../assets/loadingStar.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function WhatsNew({ handleClose }) {
  const [whatsNew, setWhatsNew] = useState();
  const [hoveringSection, setHoveringSection] = useState();
  const [hoveringTitle, setHoveringTitle] = useState("events");

  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const FetchWhatsNew = async () => {
    try {
      const res = await axios.get(`${apiUrl}/client/whats-new`);
      setWhatsNew(res.data.docs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchWhatsNew();
  }, []);

  useEffect(() => {
    if (whatsNew) {
      const hoverData = whatsNew[hoveringTitle];
      setHoveringSection(hoverData);
    }
  }, [hoveringTitle, whatsNew]);

  console.log("logged");

  return (
    <div className="whats-new">
      <div className="whats-new-left">
        <div className="whats-new-links">
          <div
            className="whats-new-link"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/events");
              handleClose();
            }}
            onMouseEnter={() => setHoveringTitle("events")}
          >
            Events
            <img src={Star} alt="" className="whats-new-link-active-start" />
          </div>
          <div
            className="whats-new-link"
            onMouseEnter={() => setHoveringTitle("products")}
          >
            Product's Updates
            <img src={Star} alt="" className="whats-new-link-active-start" />
          </div>
          <div
            className="whats-new-link"
            onMouseEnter={() => setHoveringTitle("caseStudy")}
          >
            Case Study
            <img src={Star} alt="" className="whats-new-link-active-start" />
          </div>
          <div
            className="whats-new-link"
            onMouseEnter={() => setHoveringTitle("articles")}
          >
            Articles
            <img src={Star} alt="" className="whats-new-link-active-start" />
          </div>
          <div
            className="whats-new-link"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/news");
              handleClose();
            }}
            onMouseEnter={() => setHoveringTitle("newsroom")}
          >
            Newsroom
            <img src={Star} alt="" className="whats-new-link-active-start" />
          </div>
        </div>
      </div>
      <div className="whats-new-right">
        <div className="whats-new-right-grid-container">
          {hoveringSection?.map((eachItem, i) => (
            <div
              key={i}
              className="whats-new-grid-item"
              style={{
                backgroundImage: `url(${
                  eachItem.imageUrl || eachItem.mainImageUrl
                })`,
              }}
            >
              <div style={{ position: "relative", zIndex: 1 }}>
                <div>{eachItem.title}</div>
                <p className="whats-new-grid-item-des">
                  {eachItem.des || eachItem.mainDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{ color: "#0047ff", paddingTop: "1rem", textAlign: "end" }}
          onClick={() => {
            window.scrollTo(0, 0);
            handleClose();
          }}
        >
          See More
        </div>
      </div>
    </div>
  );
}
