import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import Star from "../components/Star";
import "../styles/NewsRoom.css";
import axios from "axios";
import AboutCarousel from "../components/ReUsableComp/AboutCarousel";
import { el } from "intl-tel-input/i18n";


import newsRoom from "../Data/Newroom.json";

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
    name: "StaciaNews",
    key: "news",
  },
  {
    name: "Achievements & Awards",
    key: "awards",
  },
];

const CarouselArr = [
  { title: "lorem ipsum lorem Ipsum" },
  { title: "lorem ipsum lorem Ipsum" },
  { title: "lorem ipsum lorem Ipsum" },
];

function NewsRoomPage() {
  // const apiUrl = process.env.REACT_APP_API_URL;
  // const [selectedTab, setSelectedTab] = useState("");
  // const [newsData, setNewsData] = useState();

  // const FetchNewsRoom = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${apiUrl}/client/newsroom?query=${selectedTab}`
  //     );
  //     setNewsData(res.data.docs);
  //   } catch (error) {}
  // };
  // useEffect(() => {
  //   FetchNewsRoom();
  // }, [selectedTab]);


  const [selectedTab, setSelectedTab] = useState("");
  const [newsData, setNewsData] = useState(newsRoom.news);

  useEffect(() => {
    if (selectedTab) {
      setNewsData(newsRoom.news.filter((news) => news.category === selectedTab));
    } else {
      setNewsData(newsRoom.news);
    }
  }, [selectedTab]);
   

  console.log(newsData);

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

  return (
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
          <div>News For You</div>
          <div>
            {CarouselArr.map((eachItem, i) => {
              return <div></div>;
            })}
          </div>
          <div
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
          {/* <div>{FoundObj.video && <video src={FoundObj.video} />}</div> */}
          {selectedTab !== "awards" ? (
            <div className="news-cards-container">
              {newsData?.map((newsItem, i) => (
                <div key={i}>
                  <div className="news-card-item-img">
                    <img src={newsItem.image.imageUrl} alt="" />
                  </div>
                  <div className="news-card-item-title">{newsItem.title}</div>
                  <div className="news-card-item-date">Jan 2 2025</div>
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
                      <img src={newsItem.image.imageUrl} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div>
        <Footer />
        <MobileFooter />
      </div>
    </div>
  );
}

export default NewsRoomPage;
