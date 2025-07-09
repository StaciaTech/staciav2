import React, { useEffect, useRef, useState } from "react";
import "../styles/Popup.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Popup() {
  const [show, setShow] = useState(true);
  const popupContentRef = useRef(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    { content1: "Meet Our Latest Product", content2: "EDIFAI - Your Personalized learning model" },
    { content1: "Join To Innovate", content2: "Join Our Tech Team as a MERN Developer" },
    { content1: "Hackathon", content2: "Tech Summit 2025" },
  ];

  useEffect(() => {
    // Enable or disable background scroll
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Auto carousel
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000); // 3 seconds interval

    return () => {
      document.body.classList.remove("no-scroll");
      clearInterval(interval); // Cleanup interval on unmount or show change
    };
  }, [show, carouselData.length]);

  // Handle click outside the popup-content
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
              <div className="box1" onClick={()=>navigate('/project/Mechanical/Food-Processing/Custom-Chili-Ladling-Machine-for-Aachi-Group')} style={{cursor:'pointer'}}>
                <h3 >Projects</h3>
                <div className="description">
                  <p>Chili-Ladling-Machine</p>
                  <a href="#" style={{ marginLeft: "5px" }}>Learn more</a>
                </div>
              </div>
              <div className="box2" onClick={()=>navigate('/services/Mechanical/Industrial-Automation')} style={{cursor:'pointer'}}>
                <h3>Services</h3>
                <div className="description">
                  <p>Industrial-Automation</p>
                  <a href="#" style={{ marginLeft: "5px" }}>Learn more</a>
                </div>
              </div>
            </div>
            <div className="col2" style={{position:"relative"}} onClick={()=>navigate('/products/Mechanical/Agri-and-Food-Processing-SPM')}  style={{cursor:'pointer'}}>
              <div className="box3" ></div>
              <h3>Products</h3>
              <div className="description">
                <p>Agri-and-Food-Processing-SPM</p>
                <a href="#" style={{ color: "black", marginLeft: "5px" }}>Learn more</a>
              </div>
              {/* <div style={{position:"absolute",inset:0,borderRadius:"1rem" ,backgroundImage:"liner"}}></div> */}
            </div>
            <div className="col3">
              <div className="box4" onClick={()=>navigate('/case-study/single-caseStudy/Case-Study-1')}>
                <h3>Acheivements</h3>
                <div className="description">
                  <p>Brief one liner</p>
                  <a href="#" style={{ marginLeft: "5px" }}>Learn more</a>
                </div>
              </div>
              <div className="box5">
                <div className="box5-content">
                  <p className="box">News</p>
                  <div className="carousel-container">
                    <div className="carousel-slide">
                      <div className="box5-content1">{carouselData[currentIndex].content1}</div>
                      <div className="box5-content2">{carouselData[currentIndex].content2}</div>
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
            <div className="button1" onClick={() => {
              navigate('/');
              setShow(false);
            }}>Stay in Stacia Corp</div>
            <div className="button2"><a href="https://staciatech.com/" target="_blank">Switch to Stacia Tech</a></div>
          </div>
        </div>
      </div>
    )
  );
}

export default Popup;