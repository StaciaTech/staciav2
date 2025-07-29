import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import whatsNewData from "../Data/Whatsnew.json";
import "../styles/whatsNew.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function WhatsNew({ handleClose }) {
  const [whatsNew] = useState(whatsNewData);
  const [hoveringSection, setHoveringSection] = useState();
  const [hoveringTitle, setHoveringTitle] = useState("events");
  const [activeItem, setActiveItem] = useState(null);
  const [newsroomSubCat, setNewsroomSubCat] = useState(null);

  const newsroomSubCats = [
    "Articles",
    "Stacia News",
    "Featuring",
    "Achievements",
    "Awards",
  ];
  
  const newsroomSubCatContainerRef = useRef(null);
  const scrollRef = useRef(null); // Ref to scroll target
  const location = useLocation();
  const navigate = useNavigate();

  const [canScrollSubUp, setCanScrollSubUp] = useState(false);
  const [canScrollSubDown, setCanScrollSubDown] = useState(false);

  // Receive selected category from navigation
  useEffect(() => {
    const categoryFromNav = location.state?.selectedCategory;

    if (categoryFromNav && newsroomSubCats.includes(categoryFromNav)) {
      setHoveringTitle("newsroom");
      setNewsroomSubCat(categoryFromNav);

      // Scroll into view within dropdown
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);

      // Clear the state after use
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // Set section based on hoveringTitle
  useEffect(() => {
    if (whatsNew && whatsNew[hoveringTitle]) {
      const hoverData = whatsNew[hoveringTitle];
      if (hoveringTitle === "newsroom" && newsroomSubCat) {
        const filtered = hoverData.filter(
          (item) => item.subcategory === newsroomSubCat
        );
        setHoveringSection(filtered.length ? filtered : hoverData);
        setActiveItem(filtered[0] || hoverData[0]);
      } else {
        setHoveringSection(hoverData);
        setActiveItem(hoverData[0]);
      }
    }

    if (hoveringTitle !== "newsroom") {
      setNewsroomSubCat(null);
    } else {
      setNewsroomSubCat((prev) => prev || newsroomSubCats[0]);
    }
  }, [hoveringTitle, newsroomSubCat, whatsNew]);

  // Disable body scroll
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  // Handle Newsroom subcategory scroll logic
  useEffect(() => {
    const checkSubScrollability = () => {
      const container = newsroomSubCatContainerRef.current;
      if (container) {
        const { scrollHeight, clientHeight, scrollTop } = container;
        setCanScrollSubDown(scrollHeight > clientHeight + scrollTop);
        setCanScrollSubUp(scrollTop > 0);
      }
    };

    const timer = setTimeout(checkSubScrollability, 0);
    return () => clearTimeout(timer);
  }, [newsroomSubCats, hoveringTitle]);

  const handleSubScroll = () => {
    const container = newsroomSubCatContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      setCanScrollSubUp(scrollTop > 0);
      setCanScrollSubDown(!isAtBottom);
    }
  };

  const scrollSubUp = () => {
    const container = newsroomSubCatContainerRef.current;
    if (container) {
      const itemHeight = container.firstChild?.offsetHeight || 40;
      container.scrollTop -= itemHeight;
    }
  };

  const scrollSubDown = () => {
    const container = newsroomSubCatContainerRef.current;
    if (container) {
      const itemHeight = container.firstChild?.offsetHeight || 40;
      container.scrollTop += itemHeight;
    }
  };

  const handleSubCatHover = (subCat) => {
    setNewsroomSubCat(subCat);
  };

  const handleSubCatNavigate = (subCat) => {
    window.scrollTo(0, 0);
    navigate("/news", {
      state: { selectedCategory: subCat },
    });
    handleClose();
  };

  return (
    <div className="whats-new">
      <div className="whats-new-left">
        <div className="whats-new-links">
          <div
            className={`whats-new-link ${hoveringTitle === "events" ? "active" : ""}`}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/events");
              handleClose();
            }}
            onMouseEnter={() => setHoveringTitle("events")}
          >
            Events
          </div>
          <div
            className={`whats-new-link ${hoveringTitle === "products" ? "active" : ""}`}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/products");
              handleClose();
            }}
            onMouseEnter={() => setHoveringTitle("products")}
          >
            Product's Updates
          </div>
          <div
            className={`whats-new-link ${hoveringTitle === "caseStudy" ? "active" : ""}`}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/case-study");
              handleClose();
            }}
            onMouseEnter={() => setHoveringTitle("caseStudy")}
          >
            Case Study
          </div>
          <div
            className={`whats-new-link ${hoveringTitle === "articles" ? "active" : ""}`}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/article");
              handleClose();
            }}
            onMouseEnter={() => setHoveringTitle("articles")}
          >
            Articles
          </div>
          <div
            className={`whats-new-link ${hoveringTitle === "newsroom" ? "active" : ""}`}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/news");
              handleClose();
            }}
            onMouseEnter={() => setHoveringTitle("newsroom")}
          >
            Newsroom
          </div>
        </div>
      </div>

      {hoveringTitle === "newsroom" && (
        <div className="whats-new-subcat-container" ref={scrollRef}>
          <div className="whats-new-items-heading">Newsroom Categories</div>
          <div
            className="whats-new-item-holder"
            style={{ position: "relative", height: "100%" }}
          >
            <div className="whats-new-dot-container">
              {newsroomSubCats.map((dot, i) => (
                <div
                  key={i}
                  className={`whats-new-dot ${dot === newsroomSubCat ? "whats-new-dot-active" : ""}`}
                ></div>
              ))}
            </div>
            {newsroomSubCats.length > 5 && (
              <div className="arrow-wrapper">
                {canScrollSubUp && (
                  <span
                    onClick={scrollSubUp}
                    className="arrow-up"
                    aria-label="Scroll sub up"
                  >
                    <IoIosArrowUp />
                  </span>
                )}
                {canScrollSubDown && (
                  <span
                    onClick={scrollSubDown}
                    className="arrow-down"
                    aria-label="Scroll sub down"
                  >
                    <IoIosArrowDown />
                  </span>
                )}
              </div>
            )}
            <div
              className="whats-new-subcat-item-container"
              ref={newsroomSubCatContainerRef}
              onScroll={handleSubScroll}
            >
              {newsroomSubCats.map((subCat, i) => (
                <div
                  key={i}
                  onMouseEnter={() => handleSubCatHover(subCat)}
                  onClick={() => handleSubCatNavigate(subCat)}
                  className="pointer"
                >
                  <div
                    className={`whats-new-subcat-item ${subCat === newsroomSubCat ? "subcat-active" : ""}`}
                  >
                    {subCat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
                cursor: "pointer",
                backgroundImage: `url(${eachItem.imageUrl || eachItem.mainImageUrl})`,
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
            navigate("/news");
            handleClose();
          }}
        >
          See More
        </div>
      </div>
    </div>
  );
}