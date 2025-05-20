import React, { useState, useEffect, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import whatsNewData from "../Data/Whatsnew.json"; // Adjust path as needed
import "../styles/whatsNew.css";

// Lazy load components
const Star = React.lazy(() => import("../components/Star"));

export default function WhatsNew({ handleClose }) {
  const [whatsNew] = useState(whatsNewData);
  const [hoveringSection, setHoveringSection] = useState();
  const [hoveringTitle, setHoveringTitle] = useState("events");
  const [activeItem, SetActiveItem] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (whatsNew && whatsNew[hoveringTitle]) {
      const hoverData = whatsNew[hoveringTitle];
      setHoveringSection(hoverData);
      if (hoverData.length > 0) {
        SetActiveItem(hoverData[0]);
      }
    }
  }, [hoveringTitle, whatsNew]);

  useEffect(() => {
    setHoveringTitle("events");
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="whats-new">
        <div className="whats-new-left">
          <div className="whats-new-links">
            <div
              className={`whats-new-link ${
                hoveringTitle === "events" ? "active" : ""
              }`}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/events");
                handleClose();
              }}
              onMouseEnter={() => setHoveringTitle("events")}
            >
              Events
              {/* <Star className="whats-new-link-active-start" /> */}
            </div>
            <div
              className="whats-new-link"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/products");
                handleClose();
              }}
              onMouseEnter={() => setHoveringTitle("products")}
            >
              Product's Updates
              {/* <Star className="whats-new-link-active-start" /> */}
            </div>
            <div
              className="whats-new-link"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/case-study");
                handleClose();
              }}
              onMouseEnter={() => setHoveringTitle("caseStudy")}
            >
              Case Study
              {/* <Star className="whats-new-link-active-start" /> */}
            </div>
            <div
              className="whats-new-link"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/article");
                handleClose();
              }}
              onMouseEnter={() => setHoveringTitle("articles")}
            >
              Articles
              {/* <Star className="whats-new-link-active-start" /> */}
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
              {/* <Star className="whats-new-link-active-start" /> */}
            </div>
          </div>
        </div>
        <div className="whats-new-right">
          <div className="whats-new-right-grid-container">
            {hoveringSection?.map((eachItem, i) => (
              <div
                key={i}
                className="whats-new-grid-item"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/competition");
                  handleClose();
                }}
                style={{
                  cursor:'pointer',
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
            style={{
              color: "#0047ff",
              paddingTop: "1rem",
              textAlign: "end",
              cursor: "pointer",
            }}
            onClick={() => {
              window.scrollTo(0, 0);
              handleClose();
            }}
          ></div>
        </div>
      </div>
    </Suspense>
  );
}
