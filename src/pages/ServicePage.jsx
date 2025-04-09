import React, { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/services.css";
import "../styles/ServiceCard.css";
import "../styles/SingleService.css";
import MobileFooter from "../components/MobileFooter";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";


import serviceData from "../Data/Services.json";

function ServicePage() {
  const navigate = useNavigate();
  const params = useParams();

  const [ServiceData, setServiceData] = useState([]);
  const [activeDepartment, setActiveDepartment] = useState("");
  // const apiUrl = process.env.REACT_APP_API_URL;

  const sectionsRef = useRef([]); // To track section DOM nodes

  // Fetch Services Data
  // const FetchServices = async () => {
  //   try {
  //     const res = await axios.get(`${apiUrl}/service/all-service-index`);
  //     setServiceData(res.data.docs);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   FetchServices();
  // }, []);



  useEffect(() => {
    // Simulate fetching data from a local JSON file
    setServiceData(serviceData);
  }, []);

  // Update activeDepartment from URL params or default to first department
  useEffect(() => {
    if (params.department) {
      setActiveDepartment(params.department);
    } else if (ServiceData.length > 0) {
      setActiveDepartment(ServiceData[0].name);
    }
  }, [ServiceData, params.department]);

  // Scroll to the active department on mount
  useEffect(() => {
    if (ServiceData && activeDepartment) {
      const section = document.getElementById(activeDepartment);
      if (section) {
        const yOffset = -80; // Adjust for the navbar height
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [activeDepartment, ServiceData]);

  // Use Intersection Observer to activate dots based on visible sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveDepartment(entry.target.id);
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.6, // Trigger when 60% of the section is in view
      }
    );

    // Observe each section
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [sectionsRef]);





  return (
    <>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      {!ServiceData.length ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="service-hero-container">
            <div className="service-title">
              <span style={{ userSelect: "none" }}>Our Services</span>
            </div>
          </div>
          <div className="mobile-navigation-tabs">
            {ServiceData.map((eachItem, i) => (
              <div
                key={i}
                onClick={() => {
                  setActiveDepartment(eachItem.name);
                  document
                    .getElementById(eachItem.name)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={
                  activeDepartment === eachItem.name
                    ? "active-service-mob-tab"
                    : ""
                }
              >
                {eachItem.name}
              </div>
            ))}
          </div>
          <div className="service-page-content-container">
            <div className="service-page-main-dots-container">
              {ServiceData.map((eachItem, i) => (
                <DepartmentDot
                  key={i}
                  eachItem={eachItem}
                  activeDepartment={activeDepartment}
                  setActiveDepartment={setActiveDepartment}
                />
              ))}
            </div>
            <div>
              {ServiceData.map((eachItem, i) => (
                <div
                  className="all-services"
                  key={i}
                  id={eachItem.name}
                  ref={(el) => (sectionsRef.current[i] = el)}
                >
                  <div className="all-service-dept-title">{eachItem.name}</div>
                  <div className="all-service-box">
                    {eachItem?.categories?.map((data, i) => (
                      <div className="service-card" key={i}>
                        <div
                          className="service-card-img-box"
                          onClick={() => {
                            window.scrollTo(0, 0);
                            navigate(
                              `/services/${eachItem.name
                                .split(" ")
                                .join("-")}/${data.name.split(" ").join("-")}`
                            );
                          }}
                        >
                          <img src={data.imageUrl} alt="" />
                        </div>
                        <div className="service-content-box">
                          <div className="feature-title">{data.name}</div>
                          <div className="feature-para">{data.description}</div>
                          <div
                            className="know-more"
                            onClick={() => {
                              navigate(
                                `/services/${eachItem.name
                                  .split(" ")
                                  .join("-")}/${data.name.split(" ").join("-")}`
                              )
                              window.scrollTo(0, 0);
                            }}
                          >
                            <span>Know More</span>
                            <IoIosArrowForward />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )
      }
      <Footer />
      <MobileFooter />
    </>
  );
}

export default ServicePage;

const DepartmentDot = ({ eachItem, activeDepartment, setActiveDepartment }) => {
  const [showDept, setShowDept] = useState(false);
  return (
    <div className="service-page-dept-container">
      <div
        className={`service-page-main-dots ${eachItem.name === activeDepartment
          ? "service-page-main-dots-active"
          : ""
          }`}
        onClick={() => {
          setActiveDepartment(eachItem.name);
          document
            .getElementById(eachItem.name)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        onMouseOver={() => setShowDept(true)}
        onMouseOut={() => setShowDept(false)}
      ></div>
      {showDept && (
        <div className="service-page-dept-name">{eachItem.name}</div>
      )}
    </div>
  );
};











// function ServicePage() {
//   const navigate = useNavigate();
//   const params = useParams();
//   const [activeDepartment, setActiveDepartment] = useState("");
//   const sectionsRef = useRef([]); // To track section DOM nodes

//   useEffect(() => {
//     if (params.department) {
//       setActiveDepartment(params.department);
//     } else if (serviceData.services.length > 0) {
//       setActiveDepartment(serviceData.services[0].id);
//     }
//   }, [params.department]);

//   // Scroll to the active department on mount
//   useEffect(() => {
//     if (activeDepartment) {
//       const section = document.getElementById(activeDepartment);
//       if (section) {
//         const yOffset = -80; // Adjust for the navbar height
//         const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     }
//   }, [activeDepartment]);
