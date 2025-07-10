import React, { useEffect, useRef, useState } from "react";
import "../styles/Popup.css";
import { GoArrowRight } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Popup() {
  const [show, setShow] = useState(true);
  const popupContentRef = useRef(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent2, setShowContent2] = useState(false);

  const carouselData = [
    {
      content1: "Meet Our Latest Product",
      content2: "EDIFAI - Your Personalized learning model",
    },
    {
      content1: "Join To Innovate",
      content2: "Join Our Tech Team as a MERN Developer",
    },
    { content1: "Hackathon", content2: "Tech Summit 2025" },
  ];

  useEffect(() => {
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [show]);

  useEffect(() => {
    let timeout;
    if (showContent2) {
      timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        setShowContent2(false);
      }, 3000); // wait 3s after content2
    } else {
      timeout = setTimeout(() => {
        setShowContent2(true);
      }, 3000); // wait 3s after content1
    }

    return () => clearTimeout(timeout);
  }, [showContent2]);

  const { content1, content2 } = carouselData[currentIndex];
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  }, 5000); // Show each pair for 5 seconds

  return () => clearInterval(interval);
}, []);


  const handleClickOutside = (e) => {
    if (
      popupContentRef.current &&
      !popupContentRef.current.contains(e.target)
    ) {
      setShow(false);
    }
  };

  return (
    show && (
      <div className="popup" onClick={handleClickOutside}>
        <div className="popup-content" ref={popupContentRef}>
          <div className="top-container">
            <div className="heading">Featured</div>
            <button className="close-btn" onClick={() => setShow(false)}>
              <IoCloseSharp />
            </button>
          </div>
          <div className="boxes">
            <div className="col1">
              <div
                className="box1"
                onClick={() =>
                  navigate(
                    "/project/Mechanical/Food-Processing/Custom-Chili-Ladling-Machine-for-Aachi-Group"
                  )
                }
                style={{ cursor: "pointer" }}
              >
                {/* <img src={} alt="" /> */}
                <h3>Projects</h3>
                <div className="description">
                  <p>Chili-Ladling-Machine</p>
                  <a href="#" style={{ marginLeft: "5px" }}>
                    Learn more
                  </a>
                </div>
              </div>
              <div
                className="box2"
                onClick={() =>
                  navigate("/services/Mechanical/Industrial-Automation")
                }
                style={{ cursor: "pointer" }}
              >
                <h3>Services</h3>
                <div className="description">
                  <p>Industrial-Automation</p>
                  <a href="#" style={{ marginLeft: "5px" }}>
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col2"
              onClick={() =>
                navigate("/products/Mechanical/Agri-and-Food-Processing-SPM")
              }
              style={{ cursor: "pointer" }}
            >
              <div className="box3"></div>
              <h3>Products</h3>
              <div className="description">
                <p>Agri-and-Food-Processing-SPM</p>
                <a href="#" style={{ color: "black", marginLeft: "5px" }}>
                  Learn more
                </a>
              </div>
            </div>
            <div className="col3">
              <div
                className="box4"
                onClick={() =>
                  navigate("/case-study/single-caseStudy/Case-Study-1")
                }
              >
                <h3>Acheivements</h3>
                <div className="description">
                  <p>Brief one liner</p>
                  <a href="#" style={{ marginLeft: "5px" }}>
                    Learn more
                  </a>
                </div>
              </div>
              <div className="box5">
                <div className="box5-content">
                  <p className="box">News</p>
                  <div className="carousel-container">
                    <div className="carousel-slide">
                      <div className="box5-content1">
                        <Typewriter
                          key={content1 + currentIndex}
                          options={{ delay: 40, autoStart: true }}
                          onInit={(typewriter) => {
                            typewriter.typeString(content1).start();
                          }}
                        />
                      </div>
                      <div className="box5-content2">
                        <Typewriter
                          key={content2 + currentIndex}
                          options={{ delay: 40, autoStart: true }}
                          onInit={(typewriter) => {
                            typewriter.typeString(content2).start();
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="go-button">
                    <GoArrowRight style={{ color: "#565656" }} size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <div
              className="button1"
              onClick={() => {
                navigate("/");
                setShow(false);
              }}
            >
              Stay in Stacia Corp
            </div>
            <div className="button2">
              <a
                href="https://staciatech.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Switch to Stacia Tech
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Popup;
