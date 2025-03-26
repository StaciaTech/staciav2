import React, { useEffect, useState } from "react";
import "../styles/LeaderPage.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import p1 from "../assets/sarabesh.png";
import AboutCarousel from "../components/ReUsableComp/AboutCarousel";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function LeaderPage() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [Leaders, setLeaders] = useState();
  const [singleLeader, setSingleLeader] = useState();
  const params = useParams();
  const Leaderkeyname = params.name.split("-").join(" ");

  const FetchData = async (endpoint, setData) => {
    try {
      const res = await axios.get(`${apiUrl}/${endpoint}`);
      setData(res.data.docs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData("founders/index", setLeaders);
  }, []);

  useEffect(() => {
    if (Leaders && Leaderkeyname) {
      const foundLeader = Leaders.find(
        (leader) => leader.name === Leaderkeyname
      );
      setSingleLeader(foundLeader);
    }
  }, [Leaderkeyname, Leaders]);

  console.log(singleLeader);

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
              <img src={p1} alt="" />
            </div>
          </div>
        </div>
        <div className="leader-content-container">
          <div className="leader-info-container">
            <div>
              <div className="leader-profile-container">
                <div className="leader-profile-img">
                  <img src={p1} alt="" />
                </div>
                <div>
                  <div className="leader-profile-name">
                    {singleLeader?.name}
                  </div>
                  <div className="leader-profile-role">
                    {singleLeader?.designation}
                  </div>
                  <div className="leader-icons">
                    <div>
                      <a
                        href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA=="
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="leader-icon-container">
                          <FaInstagram className="footer-insta-icon" />
                        </div>
                        {/* <img src={InstaIcon} alt="" /> */}
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://x.com/StaciaCorp"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="leader-icon-container">
                          <BsTwitterX className="footer-twitter-icon" />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.facebook.com/staciacorp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="leader-icon-container">
                          <FaFacebookF className="footer-facebook-icon" />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/company/staciacorp"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="leader-icon-container">
                          <FaLinkedinIn className="footer-linkedin-icon" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="leader-profile-line">
                Leading change through technology, with a vision for the future.
              </div>
            </div>
          </div>
          <div>
            <p>{singleLeader?.description} </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas
              tempor nunc nec habitant. Dolor vulputate tempor sagittis et
              maecenas praesent congue ac. Blandit in sagittis sem quis lectus
              aliquam. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
              sit amet consectetur. Ullamcorper eu egestas tempor nunc nec
              habitant. Ullamcorper eu egestas tempor nunc nec habitant. Dolor
              vulputate tempor sagittis et maecenas praesent congue ac. Blandit
              in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet
              consectetur. Ullamcorper eu egestas tempor nunc nec habitant.
              Dolor vulputate tempor sagittis et maecenas praesent congue ac.
              Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit
              amet consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas
              tempor nunc nec habitant. Dolor vulputate tempor sagittis et
              maecenas praesent congue ac. Blandit in sagittis sem quis lectus
              aliquam. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
              sit amet consectetur. Ullamcorper eu egestas tempor nunc nec
              habitant. Ullamcorper eu egestas tempor nunc nec habitant. Dolor
              vulputate tempor sagittis et maecenas praesent congue ac. Blandit
              in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet
              consectetur. Ullamcorper eu egestas tempor nunc nec habitant.
              Dolor vulputate tempor sagittis et maecenas praesent congue ac.
              Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit
              amet consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas
              tempor nunc nec habitant. Dolor vulputate tempor sagittis et
              maecenas praesent congue ac. Blandit in sagittis sem quis lectus
              aliquam. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
              sit amet consectetur. Ullamcorper eu egestas tempor nunc nec
              habitant. Ullamcorper eu egestas tempor nunc nec habitant. Dolor
              vulputate tempor sagittis et maecenas praesent congue ac. Blandit
              in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet
              consectetur. Ullamcorper eu egestas tempor nunc nec habitant.
              Dolor vulputate tempor sagittis et maecenas praesent congue ac.
              Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit
              amet consectetur.
            </p>
          </div>
        </div>
        <div className="leader-carousel-container">
          <AboutCarousel />
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
