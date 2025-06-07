import React, { Suspense, useEffect, useRef, useState } from "react";
import "../styles/About.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import Star from "../components/Star";
import Stacialogo from "../assets/aboutstacialogo.svg";
import fiveLogo from "../assets/5yrs.png";
// import { PiPottedPlant } from "react-icons/pi";
import Marquee from "react-fast-marquee";
// import AboutCarousel from "../components/ReUsableComp/AboutCarousel";
import { useNavigate, useParams } from "react-router-dom";
import data from "../Data/About.json";
// import ClientComponent from "./Client";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiPlantRoots } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { VscChip } from "react-icons/vsc";

import Loadingstar from "../components/LoadingStar"
const AboutCarousel = React.lazy(()=>import("../components/ReUsableComp/AboutCarousel"));
const ClientComponent = React.lazy(()=> import("./Client"));


const Industries = [
  {
    id: 1,
    title: "Food-Processing",
    img: <MdOutlineFoodBank />,
  },
  {
    id: 2,
    title: "agriculture",
    img: <GiPlantRoots />,
  },
  {
    id: 3,
    title: "Energy",
    img: <SlEnergy />,
  },
  {
    id: 4,
    title: "Manufacturing",
    img: <MdOutlinePrecisionManufacturing />,
  },
  {
    id: 5,
    title: "Consumer Electronic",
    img: <VscChip />,
  },
  {
    id: 6,
    title: "Automotive",
    img: <FaCarSide />,
  },
];

function About() {
  const navigate = useNavigate();
  const params = useParams();

  // Use static data from the JSON file
  const [Leaders, setLeaders] = useState(data.leaders);
  const [staciaHistory, setStaciaHistory] = useState(data.staciaHistory);
  const [teamData, setTeamData] = useState(data.teamData);
  const [whyus, setWhyus] = useState(data.whyus);
  const [activeSection, setActiveSection] = useState(0)

  // Years section animation
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);


    // Ensure first dot is active on initial load or URL param scroll to milestone
  useEffect(() => {
    if (params.key === "milestone" || !params.key) {
      const firstSection = sectionsRef.current[0];
      if (firstSection) {
        const rect = firstSection.getBoundingClientRect();
        const isVisible = rect.top >= -150 && rect.bottom <= window.innerHeight + 150;
        if (isVisible) {
          setActiveIndex(0);
        }
      }
    }
  }, [params.key, staciaHistory]);

 


  // IntersectionObserver for scrolling 

  // useEffect(()=>{ 
  //   const observer = new IntersectionObserver(

  //     (entries)=>{
  //       entries.forEach((entry)=>{
  //         if(entry.isIntersecting){
  //           const index = sectionsRef.current.indexOf(entry.target);
  //           setActiveSection(index);
  //         }
  //       })
  //     },{threshold:0.8}  // Trigger when 80% of section is visible
  //   );
  //   sectionsRef.current.forEach((section)=>{
  //     if(section){
  //       observer.observe(section)
  //     }
  //   })
  //   return () =>{
  //     sectionsRef.current.forEach((section)=>{
  //       if(section){
  //         observer.unobserve(section)
  //       }
  //     })
  //   }
  // },[staciaHistory])

  // const scrollToSection = (index)=>{
  //   sectionsRef.current[index].scrollIntoView({behavior:"smooth"});
  // }

//pk

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxIntersection = -1;
        let mostVisibleIndex = activeSection;

        entries.forEach((entry) => {
          const index = sectionsRef.current.indexOf(entry.target);
          if (index !== -1) {
            const intersectionRatio = entry.intersectionRatio;
            if (intersectionRatio > maxIntersection) {
              maxIntersection = intersectionRatio;
              mostVisibleIndex = index;
            }
          }
        });

        if (maxIntersection > 0) {
          setActiveSection(mostVisibleIndex);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        root: containerRef.current,
        rootMargin: '0px 0px -20% 0px',
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [staciaHistory]);

  const scrollToSection = (index) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });
      setActiveSection(index);
    }
  };

  
  // Scroll by params
  useEffect(() => {
    if (params.key) {
      const section = document.getElementById(params.key);
      if (section) {
        setTimeout(() => {
          const y = section.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 0);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [params.key]);

  

  return (
    <div>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      <div className="about-hero">
        <div className="about-hero-text">
          <span>About Us</span>
          <Star />
        </div>
      </div>
      <div className="about-section-holder">
        <div id="about-us">
          <div className="about-section-title test-seclection-blue">
            About us
          </div>
          <div className="about-section1-container">
            <div className="pad-about">
              <div className="about-section1-left-title test-seclection-blue">
                Engineering The Future, Together
              </div>
              <div className="about-section1-left-title-item-container test-seclection-blue">
                <div className="about-section1-left-title-item ">
                  <div className="test-seclection-blue">20+</div>
                  <p className="test-seclection-blue">people</p>
                </div>
                <div className="about-section1-left-title-item">
                  <div className="test-seclection-blue">200+</div>
                  <p className="test-seclection-blue">projects</p>
                </div>
                <div className="about-section1-left-title-item">
                  <div className="test-seclection-blue">5+ years</div>
                  <p className="test-seclection-blue">Experience</p>
                </div>
              </div>
            </div>
            <div>
              <div className="test-seclection-blue">
                <img src={Stacialogo} alt="" />
              </div>
              <p className="about-section1-right-text test-seclection-blue">
                At Stacia Corp, we are dedicated to transforming industries
                through cutting-edge innovation and sustainable practices.
                Founded with a mission to address real-world challenges, Stacia
                Corp is more than just a company—it’s a movement aimed at
                redefining efficiency, productivity, and impact across critical
                sectors. We specialize in: Designing Special Purpose Machines
                (SPMs) and test rigs. Customized software solutions and SaaS
                products. Electronic product innovation, integrating advanced
                technology with everyday needs. Recognized as a Government of
                India-certified startup, Stacia Corp has been honored with
                numerous awards and accolades. In December 2024, our founders,
                Mr. Sarabesh Sriram, and Mr. Lakshman PV, were bestowed with the
                "Entrepreneur of the Year" award by Krishi Jagran and ICAR,
                solidifying our leadership in innovation and entrepreneurship.
                With over 200 completed projects across diverse industries,
                Stacia Corp is a recognized leader in: Special Purpose Machines
                (SPMs). Test rigs and industrial machinery. Industry 4.0
                solutions, empowering businesses to embrace the future of
                automation and smart manufacturing
              </p>
            </div>
          </div>
        </div>
        <div className="about-section2-container" id="our-story">
          <div>
            <div className="about-section-title test-seclection-blue">
              Our Story
            </div>
            <div className="about-section2-heading test-seclection-blue">
              A Story of Passion, creativity and innovation
            </div>
            <p className="about-section2-text test-seclection-blue">
              Stacia Corp is a MSME, and Government of India recognised Start-up
              created as a R&D centre aimed to solve engineering problems for
              industries of various genres. Stacia Corp provides efficient and
              effective solutions in the form of engineering design or
              innovative ideas. We also specialise in providing niche,
              customizable solutions to client. Stacia has successfully executed
              a variety of projects in different verticals. We have often served
              as a client's one- stop-shop throughout the life cycle of product
              design & development. This approach helps the client engage with
              Stacia Corp's expertise from plan to production. Through this
              approach Stacia collaborates and handholds the client in
              identifying and solving roadblocks in the business process. We
              have demonstrated cutting-edge expertise in providing solutions in
              launching new products. In a short span we have forayed into
              several such product development for our clients.
            </p>
          </div>
          <div className="about-section2-img-container">
            <img
              src="https://plus.unsplash.com/premium_photo-1687382111414-7b87afa5da34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGltYWdlfGVufDB8fDB8fHwws"
              alt=""
            />
          </div>
        </div>
        <div className="about-section3-container" id="milestone">
          <div className="about-section3-dot-container">
            {staciaHistory?.map((a, i) => (
              <div
                key={i}
                className={`about-section3-dots ${
                  activeSection === i ? "about-active-dot" : ""
                }`}
                onClick={() => scrollToSection(i)}
              ></div>
            ))}
          </div>
          <div className="about-section3-snap-container">
            {staciaHistory?.map((eachSec, i) => (
              <div
                key={i}
                ref={(el) => (sectionsRef.current[i] = el)}
                className="about-section3-info-container"
              >
                <div className="about-section3-achivment-container">
                  {eachSec.achivement ? (
                    <div>
                      {eachSec.achivement?.map((eachAch, i) => (
                        <div key={i} className="about-section3-achivment-card">
                          <div className="about-section3-achivment-title test-seclection-blue">
                            {eachAch.title}
                          </div>
                          <p className="about-section3-achivment-des test-seclection-blue">
                            {eachAch.des}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="about-sect-3-img">
                      <img src={eachSec.imageUrl} alt="" />
                    </div>
                  )}
                </div>
                <div className="about-section3-content-container">
                  <div className="about-section3-year test-seclection-blue">
                    {eachSec.year}
                  </div>
                  <div className="about-section3-title test-seclection-blue">
                    {eachSec.title}
                  </div>
                  <p className="about-section3-des test-seclection-blue">
                    {eachSec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-section4-container" id="our-mission">
          <div>
            <div className="about-section-title test-seclection-blue">
              Our Mission
            </div>
            <div className="about-section4-heading test-seclection-blue">
              Innovating Today, Transforming Tomorrow
            </div>
            <p className="about-section4-des test-seclection-blue">
              We forge collaborative pathways from inspiration to impact. With
              an empathetic understanding of your vision, we orchestrate the
              seamless convergence of cutting-edge mechanical engineering,
              electronics innovation, software development expertise, web
              application ingenuity, Data science, and AI. As a unified force,
              we empower you to bring transformative products and services to
              life. Fostering enduring partnerships built on efficiency,
              effectiveness, and unwavering commitment to quality, we ensure
              your success becomes our success.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
        <div className="about-section5-container" id="our-vision">
          <div>
            <img
              src="https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div>
            <div className="about-section-title test-seclection-blue">
              Our Vision
            </div>
            <div className="about-section5-heading test-seclection-blue">
              Empowering Progress, Leading Innovation
            </div>
            <p className="about-section5-des test-seclection-blue">
              We envision a future co-created with our clients, where empathetic
              understanding fuels the seamless convergence of cutting-edge
              engineering disciplines. Our symphony of mechanical engineering
              expertise, electronics innovation, software development ingenuity,
              and web application brilliance empowers clients to realize their
              most transformative visions. United by a relentless pursuit of
              excellence, we embark on a shared journey to craft groundbreaking
              solutions that leave an indelible mark on the world.
            </p>
          </div>
        </div>
        <div className="about-section6-container">
          <div>
            <div>
              <img src={Stacialogo} alt="" />
              <div className="about-section6-title test-seclection-blue">
                Celebrating Five Years Excellence
              </div>
            </div>
          </div>
          <div className="about-section6-img-container">
            <img src={fiveLogo} alt="" />
          </div>
          <div>
            <p className="about-section6-des test-seclection-blue">
              Five years ago, we embarked on a journey of innovation and growth.
              Today, we celebrate the remarkable achievements and milestones
              we've reached together. Thank you to our dedicated team, loyal
              customers, and supportive partners for making this possible.
              Here's to many more years of success
            </p>
          </div>
        </div>
        <div className="about-whyus-section" id="why-us">
          <div className="about-whyus-section-title test-seclection-blue">
            Why Stacia?
          </div>
          <p className="about-whyus-des test-seclection-blue">
            The name "Stacia" is rich in meaning—derived from Greek, it
            signifies "resurrection," while in old Italian, it denotes "smart
            and intelligent." This perfectly aligns with our philosophy of
            providing smart, intelligent solutions to rejuvenate and transform
            business prospects. Our logo reflects this ethos, combining colors
            that symbolize creative thinking, trust, and reliability—values that
            are at the core of everything we do.
          </p>
          <div className="about-whyus-grid">
            {whyus?.map((eachItem, i) => {
              const givenIndex = i + 1;
              const doubledigit =
                givenIndex.toString().length > 1
                  ? givenIndex
                  : `0${givenIndex}`;

              return (
                <div key={i}>
                  <div className="about-whyus-num test-seclection-blue">
                    {doubledigit}
                  </div>
                  <div className="about-whyus-title test-seclection-blue">
                    {eachItem.title}
                  </div>
                  <p className="about-whyus-des test-seclection-blue">
                    {eachItem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="about-section7-container" id="our-purpose">
          <div>
            <div className="about-section-title test-seclection-blue">
              Our purpose
            </div>
            <div className="about-section7-blue-square-container">
              <div className="about-section7-blue-square"></div>
              <p className="about-section7-des test-seclection-blue">
                At Stacia Corp, we believe in India's immense potential to lead
                the world in innovation. Inspired by China's lead in global
                patents, our founders, Mr. Sarabesh Sriram and Mr. Lakshman PV,
                envisioned a future where India stood at the forefront of the
                Global Innovation Index. Stacia Corp embodies this vision,
                dedicated to fostering a culture of innovation that drives
                global progress while putting India on the map as a hub for
                transformative technologies.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
        <div className="about-section8-container" id="our-expertise">
          <Suspense fallback={<div>Loading carousel....</div>}>
            <AboutCarousel />
          </Suspense>
        </div>
        <div className="about-section9-container" id="industries-covered">
          <div className="about-section9-title test-seclection-blue">
            Industries Covered
          </div>
          <p className="about-section9-des test-seclection-blue">
            Our innovative solutions cater to a diverse range of industries,
            enabling businesses to enhance productivity, streamline operations,
            adopt sustainable practices, and embrace cutting-edge technological
            advancements.
          </p>
          <div className="about-section9-item-container">
            {Industries.map((eachItem, i) => {
              return (
                <div key={i} className="about-section9-item">
                  <div className="about-section9-icon-contaienr">
                    {/* <PiPottedPlant className="about-section9-icon" /> */}
                    <div className="about-section9-icon">{eachItem.img}</div>
                  </div>
                  <div className="about-section9-item-name test-seclection-blue">
                    {eachItem.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="about-section4-container" id="partnerships-and-clients">
          <div>
            <div className="about-section-title test-seclection-blue">
              Partnerships and Clients
            </div>
            <div className="about-section4-heading partner-section test-seclection-blue">
              Stacia: Building Bridges, Driving Growth.
            </div>
            <p className="about-section4-des test-seclection-blue">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              rem temporibus quibusdam quo, sunt nostrum debitis minus nesciunt
              adipisci illo praesentium facere distinctio, dolorem iure non
              libero quam accusamus cum voluptatem obcaecati labore explicabo.
              Sit voluptatibus quae molestiae modi temporibus!
            </p>
            <div
              className="know-more"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/partners`);
              }}
            >
              Read More
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
        <Suspense
          fallback={
            <div>
              <Loadingstar />
            </div>
          }
        >
          <ClientComponent />
        </Suspense>
        <div className="about-section10-container" id="our-leadership">
          <div className="about-section-title test-seclection-blue">
            Our Leadership
          </div>
          <div>
            {Leaders?.map((eachLead, i) => {
              const leaderRouteKey = eachLead.name.split(" ").join("-");
              return (
                <div key={i} className="about-section10-lead-card">
                  <div className="about-section10-lead-img">
                    <img src={eachLead.imageUrl} alt="" />
                  </div>
                  <div className="about-section10-lead-card-content">
                    <div className="name test-seclection-blue">
                      {eachLead.name}
                    </div>
                    <div className="role test-seclection-blue">
                      {eachLead.designation}
                    </div>
                    <p className="description test-seclection-blue">
                      {eachLead.description}
                    </p>
                    <div
                      className="know-more pointer"
                      onClick={() => {
                        window.scrollTo(0, 0);
                        navigate(`/about/leader/${leaderRouteKey}`);
                      }}
                    >
                      Read More
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="about-section11-container" id="meet-our-team">
        {/* Title */}
        <div className="about-section11-title test-seclection-blue">
          Meet Our Team
        </div>

        {/* Description */}
        <p className="about-section11-des test-seclection-blue">
          At Stacia Corp, our talented team, led by founders Mr. Sarabesh Sriram
          and Mr. Lakshman PV, combines expertise in engineering, software, and
          electronics. Together, we drive innovation, delivering transformative
          solutions with creativity, collaboration, and a passion for
          excellence, shaping the future of industries worldwide.
        </p>

        {/* Desktop Card Marquee */}
        <div className="about-team-marquee-desk">
          <div className="about-team-marquee">
            {/* Render teamData three times for smoother looping */}
            <div className="marquee-content">
              {teamData?.map((eachMem, i) => (
                <TeamCard key={`set1-${i}`} eachMem={eachMem} />
              ))}
            </div>
            <div className="marquee-content">
              {teamData?.map((eachMem, i) => (
                <TeamCard key={`set2-${i}`} eachMem={eachMem} />
              ))}
            </div>
            <div className="marquee-content">
              {teamData?.map((eachMem, i) => (
                <TeamCard key={`set3-${i}`} eachMem={eachMem} />
              ))}
            </div>
            <div className="marquee-content">
              {teamData?.map((eachMem, i) => (
                <TeamCard key={`set4-${i}`} eachMem={eachMem} />
              ))}
            </div>
            <div className="marquee-content">
              {teamData?.map((eachMem, i) => (
                <TeamCard key={`set5-${i}`} eachMem={eachMem} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Static Cards */}
        <div className="about-team-marquee-mob">
          {teamData?.map((eachMem, i) => (
            <TeamCard key={`mob-${i}`} eachMem={eachMem} />
          ))}
        </div>
      </div>
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default About;

const TeamCard = ({ eachMem }) => {
  const [showCardDetails, setShowCardDetails] = useState(false);

  return (
    <div
      className={`about-team-card ${
        showCardDetails ? "about-team-card-active" : ""
      }`}
      onClick={() => setShowCardDetails(!showCardDetails)}
    >
      <div className="about-team-img">
        <img src={eachMem.imageUrl} alt="" />
      </div>
      <div className="about-team-name test-seclection-blue">
        {eachMem.fullName}
      </div>
      <div className="about-team-role test-seclection-blue">
        {eachMem.designation}
      </div>
      <p className="about-team-des test-seclection-blue">{eachMem.outlook}</p>
    </div>
  );
};