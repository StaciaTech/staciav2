import React, { useEffect, useState, Suspense, useRef } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import stacia from "../assets/newsroom.png";
import newsRoom from "../Data/Newroom.json";
import "../styles/NewsRoom.css";
import LoadingStar from "../components/LoadingStar";

// Lazy load components
const NavBar = React.lazy(() => import("../components/NavBar"));
const SideBar = React.lazy(() => import("../components/SideBar"));
const Footer = React.lazy(() => import("../components/Footer"));
const MobileFooter = React.lazy(() => import("../components/MobileFooter"));
const Star = React.lazy(() => import("../components/Star"));
const AboutCarousel = React.lazy(() =>
  import("../components/ReUsableComp/AboutCarousel")
);

const newsArr = [
  {
    name: "All",
    key: "",
  },
  {
    name: "Articles",
    key: "articles",
  },
  {
    name: "Stacia News",
    key: "news",
  },
  {
    name: "Featuring",
    key: "featuring",
  },
  {
    name: "Achievements",
    key: "achievements",
  },
  {
    name: "Awards",
    key: "awards",
  },
];

const CarouselArr = [
  { title: "lorem ipsum lorem Ipsum" },
  { title: "lorem ipsum lorem Ipsum" },
  { title: "lorem ipsum lorem Ipsum" },
];

function NewsRoomPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const tabContainerRef = useRef(null); // Ref for the tab container
  const [selectedTab, setSelectedTab] = useState("");
  const [newsData, setNewsData] = useState(newsRoom.news);

  // Set initial tab from navigation state
  useEffect(() => {
    const categoryFromNav = location.state?.selectedCategory;
    if (categoryFromNav) {
      const tabKey = newsArr.find((tab) => tab.name === categoryFromNav)?.key;
      if (tabKey) {
        setSelectedTab(tabKey);
        // Scroll to tab container after a small delay
        setTimeout(() => {
          tabContainerRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.state]);

  useEffect(() => {
    if (selectedTab) {
      setNewsData(
        newsRoom.news.filter((news) => news.category === selectedTab)
      );
    } else {
      setNewsData(newsRoom.news);
    }
  }, [selectedTab]);

  const [itemsPos, setItemPos] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setItemPos(true);
      } else {
        setItemPos(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Function to check if the URL is a YouTube link
  const isYouTubeUrl = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  // Function to get YouTube embed URL
  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Render media (image or video) based on the JSON data
  const renderMedia = (item) => {
    if (item.image?.videoUrl) {
      if (isYouTubeUrl(item.image.videoUrl)) {
        return (
          <iframe
            src={getYouTubeEmbedUrl(item.image.videoUrl)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "350px" }}
          ></iframe>
        );
      } else {
        return <video src={item.image.videoUrl} controls />;
      }
    } else {
      return <img src={item.image?.imageUrl} alt="" loading="lazy" />;
    }
  };

  return (
    <Suspense fallback={<LoadingStar />}>
      <div>
        <div className="nav_style">
          <NavBar />
          <SideBar />
        </div>
        <div>
          <div className="news-hero">
            <div>
              <span>Newsroom</span>
              <Star />
            </div>
          </div>
          <div className="news-container">
            <div className="news-container-title">News For You</div>
            <div className="news-container-top">
              <div className="news-container-top1">
                <img src={stacia} alt="" loading="lazy" />
              </div>
              <div className="news-container-top1">
                <div className="news-container-top2">
                  <h1>Stacia Corp Innovation</h1>
                </div>
                <div className="news-container-top3" onClick={()=>{
                  navigate('/products')
                  window.scrollTo(0,0)
                }
                }
                style={{cursor:'pointer'}}
                  >
                  Read More <IoIosArrowForward />
                </div>
              </div>
            </div>
            <div>
              {CarouselArr.map((eachItem, i) => {
                return <div key={i}></div>;
              })}
            </div>
            <div
              ref={tabContainerRef} // Attach ref to the tab container
              className={`news-tab-container ${
                itemsPos ? "move-up" : "move-down"
              }`}
            >
              {newsArr.map((eachNews, i) => (
                <div
                  key={i}
                  className={`news-tab ${
                    eachNews.key === selectedTab ? "news-tab-active" : ""
                  }`}
                  onClick={() => setSelectedTab(eachNews.key)}
                >
                  {eachNews.name}
                </div>
              ))}
            </div>
            {selectedTab === "featuring" ? (
              <div>
                {newsData?.map((newsItem, i) => (
                  <div key={i}>
                    <div className="news-card-item-video">
                      {renderMedia(newsItem)}
                    </div>
                    <div className="news-card-item-detail">
                      {newsItem.detail}
                    </div>
                    <div className="news-card-item-date">{newsItem.date}</div>
                    <div className="news-cards-container">
                      <div>
                        <div className="news-card-item-img">
                          {renderMedia(newsItem)}
                        </div>
                        <div className="news-card-item-title">
                          {newsItem.title}
                        </div>
                        <div className="news-card-item-date">
                          {newsItem.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {selectedTab !== "awards" ? (
                  <div className="news-cards-container">
                    {newsData?.map((newsItem, i) => (
                      <div
                        key={i}
                        // onClick={() => {
                        //   navigate(
                        //     `${selectedTab}/${
                        //       newsItem.title.split(" ").join("-") ||
                        //       newsItem.mainTitle.split(" ").join("-")
                        //     }`
                        //   );
                        //   window.scrollTo(0, 0);
                        // }}
                      >
                        <div className="news-card-item-img">
                          {renderMedia(newsItem)}
                        </div>
                        <div className="news-card-item-title">
                          {(selectedTab === "news" || "All") &&  newsItem.image?.videoUrl ? (
                            <a
                              href={newsItem.image.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="videoLink"                     
                            >
                              {newsItem.title}
                            </a>
                          ) : (
                            newsItem.title
                          )}
                        </div>
                        <div className="news-card-item-date">
                          {newsItem.date}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    {newsData?.map((newsItem, i) => {
                      return (
                        <div key={i} className="news-achivement-container">
                          <div className="news-chive-content">
                            <div>{newsItem.title}</div>
                            <p>{newsItem.description}</p>
                          </div>
                          <div className="news-achive-img">
                            {renderMedia(newsItem)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div>
          <Footer />
          <MobileFooter />
        </div>
      </div>
    </Suspense>
  );
}

export default NewsRoomPage;
