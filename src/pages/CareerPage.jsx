import React, { useEffect, useRef, Suspense } from "react";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useTransform, useScroll } from "framer-motion";
import careersData from "../Data/Career.json";
import LifeStaciaImg1 from "../assets/cr-img-1.png";
import LifeStaciaImg2 from "../assets/cr-img-2.png";
import LifeStaciaImg3 from "../assets/cr-img3.png";
import LifeStaciaImg4 from "../assets/careerGroup.png";
import CareerSvg1 from "../assets/careerSvg1.svg";
import CareerSvg2 from "../assets/careerSvg2.svg";
import CareerSvg3 from "../assets/careerSvg3.svg";
import CareerSvg4 from "../assets/careerSvg4.svg";
import CareerSvg5 from "../assets/careerSvg5.svg";
import "../styles/career.css";

// Lazy load components
const NavBar = React.lazy(() => import("../components/NavBar"));
const Footer = React.lazy(() => import("../components/Footer"));
const CareerComponent = React.lazy(() =>
  import("../components/CareerComponent")
);
const CareerMobileCulture = React.lazy(() =>
  import("../components/careers/careerMobileCulture")
);
const MobileFooter = React.lazy(() => import("../components/MobileFooter"));
const SideBar = React.lazy(() => import("../components/SideBar"));
const Star = React.lazy(() => import("../components/Star"));
const JobForm = React.lazy(() => import("../components/careers/JobForm"));

// Hiring data
const HiringData = [
  {
    image: CareerSvg1,
    title: "Resume Screening",
    des: "The first step in our hiring process is reviewing resumes to assess candidates' qualifications, experience, and relevance to the job role. Our HR team evaluates key aspects such as educational background, work experience, technical skills, and achievements. Candidates who meet the required criteria are shortlisted for the next stage.",
  },
  {
    image: CareerSvg2,
    title: "Telephonic Interview",
    des: "Shortlisted candidates are contacted for a brief telephonic interview. This step helps us understand the candidate’s communication skills, career aspirations, and initial fit for the role. Basic technical and role-specific questions may be asked to gauge their familiarity with the job requirements.",
  },
  {
    image: CareerSvg3,
    title: "Technical Interview",
    des: "Candidates who clear the telephonic round proceed to the technical interview. This stage is conducted by subject matter experts or hiring managers to assess the candidate’s problem-solving abilities, domain knowledge, and hands-on experience. Depending on the role, this interview may include:",
  },
  {
    image: CareerSvg4,
    title: "Assignment Round",
    des: "For certain roles, candidates are given a practical assignment or project to complete within a specified timeframe. This allows us to evaluate their ability to apply theoretical knowledge to real-world problems, their approach to problem-solving, and their efficiency in execution. The assignment is reviewed by the hiring team to determine the candidate’s technical proficiency and creativity",
  },
  {
    image: CareerSvg5,
    title: "Onboarding",
    des: "Once a candidate successfully clears all interview stages, they receive an offer letter and begin the onboarding process. This includes: 1) Document verification and completion of necessary formalities, 2) Introduction to company policies, teams, and work environment, 3) Training sessions (if applicable), 4) Allocation of necessary resources and tools for their role",
  },
];

gsap.registerPlugin(ScrollTrigger);

function CareerPage() {
  const [showApplication, setShowApplication] = useState(false);
  const [careers, setCareers] = useState([]);
  const [showMore, setShowMore] = useState(null);

  const closeForm = () => {
    setShowApplication(false);
  };

  useEffect(() => {
    setCareers(careersData);
  }, []);

  const toggleShowMore = (i) => {
    setShowMore(showMore === i ? null : i);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={showApplication ? "fixed" : ""}>
        <div className="nav_style">
          <NavBar />
          <SideBar />
        </div>
        <div className="career-hero-section">
          <div className="career-hero-contents">
            <div className="career-title-section">
              <div className="career-title">
                <span className="test-seclection-white">Careers</span>
                <Star />
              </div>
              <div
                style={{ opacity: "0.6", fontSize: "30px", fontWeight: 500 }}
                className="test-seclection-white"
              >
                In Stacia Corp
              </div>
            </div>
            <div className="career-info-section">
              <div className="career-info-section-heading test-seclection-white">
                Come, join us!
                <span
                  style={{ color: "#0047FF", padding: "0rem 1rem" }}
                  className="test-seclection-white"
                >
                  We're hiring.
                </span>
              </div>
              <div className="career-hero-info test-seclection-white">
                "At our core, we are driven by the belief that everyone should
                have the opportunity to discover and pursue their dream job. Our
                relentless dedication is focused on making this a reality. Join
                us now and take the first step toward your dream career!"
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              textAlign: "center",
              userSelect: "none",
            }}
            className="career-headings"
          >
            Opportunities
          </div>
          {careers?.map((eachJob, index) => (
            <CareerComponent
              key={index}
              i={index}
              data={eachJob}
              showMore={showMore}
              toggleShowMore={toggleShowMore}
              showApplication={showApplication}
              setShowApplication={setShowApplication}
            />
          ))}
        </div>
        <div className="career-hiring-process">
          <div className="career-headings">Hiring Procedure</div>
          <div className="career-hiring-data-desk">
            <HorizontalScrollContainer />
          </div>
          <div className="career-hiring-data-mob-container">
            {HiringData.map((eachStep, i) => (
              <div key={i} className="panel">
                <div className="career-hiring-item-num">{`0${i + 1}`}</div>
                <div className="career-hiring-illustrate">
                  <img src={eachStep.image} alt="" />
                </div>
                <div className="career-hiring-item-title">{eachStep.title}</div>
                <p className="career-hiring-item-des">{eachStep.des}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="life-at-stacia">
          <div className="career-headings">Life @ Stacia Corp</div>
          <div className="image-layout-container">
            <div className="img-container1">
              <img src={LifeStaciaImg1} alt="" className="Life-Img" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                
              }}
            >
              <div className="img-container2">
                <img src={LifeStaciaImg2} alt="" className="Life-Img" />
              </div>
              <div className="img-container3">
                <img src={LifeStaciaImg3} alt="" className="Life-Img" />
              </div>
            </div>
            <div className="img-container4">
              <img src={LifeStaciaImg4} alt="" className="Life-Img" />
            </div>
          </div>
        </div>
        <div style={{ margin: "1rem" }}>
          <CareerMobileCulture />
        </div>
        <div
          style={{
            marginLeft: "80px",
            marginRight: "80px",
            marginBottom: "10rem",
          }}
        >
          <div className="our-cultures">
            <div className="career-headings">Our Culture</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flex: "1 fr",
              }}
            >
              <div>
                <div className="culture-titles">Office Environment</div>
                <p className="culture-contents">
                  At Stacia Corp, our office environment is designed to inspire
                  innovation, creativity, foster collaboration, and support
                  productivity. We believe that where you work is just as
                  important as how you work, which is why we’ve created a
                  dynamic and welcoming space that reflects our commitment to
                  innovation and teamwork. Open, Collaborative Spaces.
                </p>
              </div>
              <div>
                <div className="culture-titles">Working Model</div>
                <p className="culture-contents">
                  At Stacia Corp, we believe that flexibility and collaboration
                  are key to driving innovation and productivity. Our working
                  model is built around agile principles. Teams are empowered to
                  move quickly, adapt to changing needs, and continuously
                  improve processes. With regular check-ins, feedback loops, and
                  sprint planning, we ensure that we remain responsive to both
                  internal and client needs.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flex: "1 fr",
              }}
            >
              <div>
                <div className="culture-titles">Co-workers Environment</div>
                <p className="culture-contents">
                  At Stacia Corp, we pride ourselves on fostering a positive,
                  inclusive, and supportive co-worker environment where everyone
                  feels valued and empowered to succeed. Our team is more than
                  just colleagues—we are a community of talented individuals
                  working together to achieve great things.
                </p>
              </div>
              <div>
                <div className="culture-titles">Open Communication</div>
                <p className="culture-contents">
                  Transparent communication is key to our success. We maintain
                  an open-door policy that encourages feedback, discussion, and
                  the sharing of ideas. This approach ensures that every voice
                  is heard and valued, creating a more cohesive team. Our
                  diverse workforce brings a wealth of perspectives and
                  experiences, enriching our collaborative efforts. We embrace
                  this diversity, recognizing that it leads to more creative
                  problem-solving and innovative solutions
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <MobileFooter />
        {showApplication && <JobForm closeForm={closeForm} />}
      </div>
    </Suspense>
  );
}

const HorizontalScrollContainer = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);
  return (
    <div ref={targetRef} style={{ height: "300vh", position: "relative" }}>
      <div
        className="career-hiring-data-container"
        style={{
          height: "100vh",
          position: "sticky",
          top: "80px",
        }}
      >
        <motion.div style={{ display: "flex", columnGap: "12rem", x }}>
          {HiringData.map((eachStep, i) => (
            <div key={i} className="panel">
              <div className="career-hiring-item-num">{`0${i + 1}`}</div>
              <div className="career-hiring-illustrate">
                <img src={eachStep.image} alt="" />
              </div>
              <div className="career-hiring-item-title">{eachStep.title}</div>
              <p className="career-hiring-item-des">{eachStep.des}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CareerPage;
