
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../styles/SingleCaseStudy.css";
// import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";
// import Footer from "../components/Footer";
// import MobileFooter from "../components/MobileFooter";
// import data from "../Data/SingleCaseStudy.json";
// import CaseStudyAudio from "../components/CaseStudy/CaseStudyaudio";
// import RelatedCaseStudy from "../components/CaseStudy/RelatedCaseStudy";

// function SingleCaseStudy() {
//   const [caseStudy, setCaseStudy] = useState(null);
//   const { id } = useParams();
//   const formattedId = id.replace(/-+/g, "-");

//   const [relatedCases, setRelatedCases] = useState([]);
//   console.log("Extracted ID from URL----:", id);

//   useEffect(() => {
//     console.log("Received ID:", id);
//     console.log("JSON Data:", data);

//     let selectedCaseStudy = null;
//     let allCaseStudies = [];

//     data.singlecasestudy.forEach((category) => {
//       category.data.forEach((study) => {
//         allCaseStudies.push(study);
//         if (study.id === formattedId) {
//           selectedCaseStudy = study;
//         }
//       });
//     });

//     console.log("Selected Case Study:", selectedCaseStudy);

//     if (selectedCaseStudy) {
//       setCaseStudy(selectedCaseStudy);
//       const related = allCaseStudies
//         .filter((study) => study.id !== formattedId)
//         .slice(0, 5);
//       setRelatedCases(related);
//       console.log(related, "-----------");
//     } else {
//       console.error("Case study not found!");
//     }
//   }, [id]);

//   if (!caseStudy) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <NavBar />
//       <SideBar />
//       <div>
//         <div className="single-casestudy-section">
//           <div className="single-casestudy-section-overlay">
//             <div className="single-casestudy-title test-seclection-white">
//               {caseStudy?.title}
//             </div>
//           </div>
//         </div>

//         <div>
//           <div
//             className="single-casestudy-heading-card-container"
//             style={{
//               backgroundImage: `url(${caseStudy.backgroundImage || ""})`,
//             }}
//           >
//             <div className="single-casestudy-heading test-seclection-white">
//               {caseStudy?.title}
//             </div>
//           </div>
//         </div>

//         <CaseStudyAudio />

//         <div className="single-casestudy-content-container">
//           <div>
//             <div className="single-casestudy-layout1-title test-seclection-blue">
//               {caseStudy?.overview?.overviewtitle}
//             </div>
//             <p className="single-casestudy-layout1-des test-seclection-blue">
//               {caseStudy?.overview?.description}
//             </p>

//             <div className="single-casestudy-layout1-img-content-container">
//               {caseStudy?.imageContent?.imageSrc && (
//                 <div>
//                   <img
//                     src={caseStudy?.imageContent.imageSrc}
//                     alt="Overview"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       userSelect: "none",
//                     }}
//                   />
//                 </div>
//               )}
//               <div>
//                 {caseStudy?.imageContent?.content?.map((text, index) => (
//                   <p key={index} className="test-seclection-blue-img-cont">
//                     {text}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="single-casestudy-layout1-title test-seclection-blue">
//             <p>{caseStudy?.gallerytittle}</p>
//           </div>

//           {caseStudy?.gallery && caseStudy.gallery.length > 0 && (
//             <div className="single-casestudy-layout2">
//               {caseStudy.gallery.map((img, index) => (
//                 <div key={index}>
//                   <img
//                     src={img}
//                     alt={`Gallery ${index}`}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//           <div className="challenges">
//             <div
//               className="single-casestudy-layout3"
//               style={{ display: "flex" }}
//             >
//               <div>
//                 {caseStudy?.challenges?.map((challenge, index) => (
//                   <div key={index}>
//                     <div className="single-casestudy-layout3-title test-seclection-blue">
//                       {challenge.challengestitle}
//                     </div>
//                     <p className="test-seclection-blue-challenge">
//                       {challenge.description}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               {caseStudy?.imageContent?.imageSrc && (
//                 <div>
//                   <img
//                     src={caseStudy.imageContent.imageSrc}
//                     alt="Challenge"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       userSelect: "none",
//                     }}
//                   />
//                 </div>
//               )}
//             </div>
//             <div className="relatable-casestudy">
//               <RelatedCaseStudy relatedCases={relatedCases} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }

// export default SingleCaseStudy;

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/SingleCaseStudy.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import data from "../Data/SingleCaseStudy.json";
import CaseStudyAudio from "../components/CaseStudy/CaseStudyaudio";
import RelatedCaseStudy from "../components/CaseStudy/RelatedCaseStudy";
import loading from "../assets/loading.png";


function SingleCaseStudy() {
  const [caseStudy, setCaseStudy] = useState(null);
  const { id } = useParams();
  const formattedId = id.replace(/-+/g, "-");
  const [showButton, setShowButton] = useState(false);
  const [showHelpPage, setShowHelpPage] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const popupRef = useRef(null)

  const [relatedCases, setRelatedCases] = useState([]);
  console.log("Extracted ID from URL----:", id);

   useEffect(() => {
     const handleScroll = () => {
       const scrollY = window.scrollY || document.documentElement.scrollTop;
       const windowHeight = window.innerHeight;
       const documentHeight = document.documentElement.scrollHeight;
       const bottomOffset = 1000; // Adjust this value as needed

       if (scrollY > 1500) {
         if (scrollY + windowHeight >= documentHeight - bottomOffset) {
           setShowButton(false); // Hide when near bottom
         } else {
           setShowButton(true); // Show otherwise
         }
       } else {
         setShowButton(false); // Hide before 1500px
       }
     };

     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);

     const handleClick = () => {
       setShowHelpPage(true);
       setShowForm(true);
     };

     useEffect(()=>{
      if(showForm){
        document.body.style.overflow="hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";        
      }else{
        document.body.style.overflow = "auto";
        document.body.style.position = "";
        document.body.style.width = "";
      }

      return()=>{
        document.body.style.overflow = "auto";
        document.body.style.position = "";
        document.body.style.width = "";
      }
     },[showForm])

     const handleWheel = (e) =>{
      const container = e.currentTarget;
      if(container.scrollHeight > container.clientHeigth){
        e.preventDefault();
        e.preventPropagation();
      }
     }
  useEffect(() => {
    console.log("Received ID:", id);
    console.log("JSON Data:", data);

    let selectedCaseStudy = null;
    let allCaseStudies = [];

    data.singlecasestudy.forEach((category) => {
      category.data.forEach((study) => {
        allCaseStudies.push(study);
        if (study.id === formattedId) {
          selectedCaseStudy = study;
        }
      });
    });

    console.log("Selected Case Study:", selectedCaseStudy);
//filter realted casestudy

    if (selectedCaseStudy) {
      setCaseStudy(selectedCaseStudy);
      const related = allCaseStudies
        .filter((study) => study.id !== formattedId)
        .slice(0, 5);
      setRelatedCases(related);
      console.log(related, "-----------");
    } else {
      console.error("Case study not found!");
    }
  }, [id]);

  if (!caseStudy) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <SideBar />
      <div>
        <div className="single-casestudy-section">
          <div className="single-casestudy-section-overlay">
            <div className="single-casestudy-title test-seclection-white">
              {caseStudy?.title}
            </div>
          </div>
        </div>

        <div>
          <div
            className="single-casestudy-heading-card-container"
            style={{
              backgroundImage: `url(${caseStudy.backgroundImage || ""})`,
            }}
          >
            <div className="single-casestudy-heading test-seclection-white">
              {caseStudy?.title}
            </div>
          </div>
        </div>

        <CaseStudyAudio />

        <div className="single-casestudy-content-container">
          <div>
            <div className="single-casestudy-layout1-title test-seclection-blue">
              {caseStudy?.overview?.overviewtitle}
            </div>

            <p className="single-casestudy-layout1-des test-seclection-blue">
              {caseStudy?.overview?.description}
            </p>

            <div className="single-casestudy-layout1-img-content-container">
              {caseStudy?.imageContent?.imageSrc && (
                <div>
                  <img
                    src={caseStudy?.imageContent.imageSrc}
                    alt="Overview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      userSelect: "none",
                    }}
                  />
                </div>
              )}
              <div>
                <h4 className="background">Background</h4>
                {caseStudy?.imageContent?.content?.map((text, index) => (
                  <p key={index} className="test-seclection-blue-img-cont">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* salient feature */}
          <div className="salient-features">
            <h2 className="single-casestudy-layout1-title test-selection-blue">
              Salient Features
            </h2>
            <ul>
              <li>Highly efficient</li>
              <li>Portability due to its battery operation</li>
              <li>Lightweight due to optimized selection of material</li>
              <li>Occupies less space</li>
              <li>High temperature operability</li>
            </ul>
          </div>
          {/* Problem Statement */}
          <div className="problem-statement">
            <h2 className="single-casestudy-layout1-title test-selection-blue">
              Problem Statement
            </h2>
            <p className="problem-statement-para1">
              Traditional chili handling methods often involve several
              challenges that can negatively impact product quality.
              Additionally, manual handling of chili is labor-intensive,
              time-consuming, and can lead to repetitive strain injuries.
            </p>
            <ul className="problem-statement-para2">
              <li>
                <span className="highlight">Inconsistent Drying:</span> The
                drying process was time-consuming and often resulted in uneven
                moisture content.
              </li>
              <li>
                <span className="highlight">Manual Labor:</span> The manual
                handling of chili was labour-intensive.
              </li>
              <li>
                <span className="highlight">Chili Breakage:</span> Manual usage
                of ladle caused breakage in chili which affects the quality.
              </li>
              <li>
                <span className="highlight">Ambitious Temperature:</span> The
                chili is generally dried at 50°C – 60°C. Hence working under
                these conditions can pose several hazards to human health.
              </li>
            </ul>
          </div>

          {/* Help Button------------------------- */}
          {showButton && !showHelpPage && (
            <button onClick={handleClick} className="help-button">
              <img
                src={loading}
                alt=""
                style={{
                  width: "30px",
                }}
              />
              How Stacia Can help |       ᐱ
            </button>
          )}

          {/* Help Page Section */}
          {showForm && showHelpPage && (
            <div className="help-section">
              <div
                className="help-container"
                onWheel={handleWheel}
                ref={popupRef}
              >
                <div className="help-sidebar">
                  <img
                    src={loading}
                    alt=""
                    style={{
                      width: "30px",
                    }}
                  />
                  <h2>How stacia can help</h2>

                  <div className="help-tabs">
                    <button className="active">Services</button>
                    <button>Products</button>
                    <button>Projects</button>
                  </div>
                  <ul className="help-links">
                    <li>Mechanical</li>
                    <li className="active">Electronics</li>
                    <li>Tech</li>
                    <li>column 1</li>
                    <li>column 2</li>
                    <li>column 3</li>
                  </ul>
                </div>

                <div className="help-card-section">
                  <div className="help-card">
                    <img
                      src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                      alt="Car"
                    />
                    <h3>Placeholder text</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Ullamcorper eu
                      egestas tempor nunc nec habitant. Dolor vulputate tempor
                      sagittis et maecenas praesent congue ac. Blandit in
                      sagittis sem quis lectus aliquam. Lorem ipsum dolor sit
                      amet consectetur. Blandit in sagittis sem quis lectus
                      aliquam.
                    </p>
                    <a href="#">Know more →</a>
                  </div>
                </div>

                <button
                  className="help-close-btn"
                  onClick={() => {
                    setShowHelpPage(false);
                    setShowForm(false);
                  }}
                >
                  ×
                </button>
              </div>
            </div>
          )}

          {/* Development Process */}
          <div className="development-process">
            <h2 className="single-casestudy-layout1-title test-selection-blue">
              Development Process
            </h2>
            <div>
              <h3 className="">Ideation:</h3>
              <p className="test-selection-blue">
                The ideation process for the chili ladling machine at Aachi
                Masala was driven by the observation and analysis of existing
                challenges within their chili handling operations. Through field
                visits and interactions with plant personnel, it became evident
                that the current methods of chili ladling were inefficient,
                time-consuming, and prone to product damage.
              </p>
              <p className="test-selection-blue">
                To address these challenges, a creative and innovative solution
                was sought. Understanding the unique properties of chili, and
                leveraging technological advancements, the concept of a
                specialized chili ladling machine emerged.
              </p>
              <p>
                This machine would automate the process, improve efficiency, and
                ensure consistent quality, ultimately enhancing the overall
                productivity and profitability of Aachi Masala's chili
                production.
              </p>
            </div>
            <div>
              <h3 className="single-casestudy-layout1-subtitle test-selection-blue">
                Design & Prototype:
              </h3>
              <p className="test-selection-blue">
                The development of the chili ladling machine involved a series
                of iterations to refine its design and functionality. Initial
                concepts focused on fixed incline mechanisms, which proved
                ineffective in efficiency.
              </p>
              <p>
                In the initial two prototypes, the chili encountered
                difficulties in traversing. The twisting and intertwining of the
                chili resulted in blockages and uneven movement, hindering the
                efficient
              </p>
              <p>
                Through iterative testing and experimentation, the team
                eventually integrated a conveyor belt system into the design.
                This proved to be the most effective solution for handling large
                quantities of chili while minimizing breakage and ensuring
                consistent processing. The conveyor belt design allowed for
                efficient movement and mixing of the chili, addressing the
                challenges encountered in earlier prototypes.
              </p>
            </div>
          </div>
          {/* Challenges Faced */}
          <div className="Challenges-Faced">
            <h2>Challenges Faced</h2>
            <p>
              One of the primary challenges encountered during the development
              of the chili ladling machine was determining the optimal conveyor
              angle and RPM speed.
            </p>
            <ul>
              <li>
                <span className="highlight">Conveyor Angle:</span> TFinding the
                ideal angle for the conveyor belt was crucial to ensure proper
                movement and distribution of the chili. An angle that was too
                steep could cause the chili to slide off the belt, while an
                angle that was too shallow might not provide sufficient
                movement.
              </li>
              <li>
                <span className="highlight">Increased Efficiency:</span> The
                machine streamlined the chili handling process, reducing labor
                costs and increasing overall productivity.
              </li>
              <li>
                <span className="highlight">RPM Speed:</span> The RPM speed of
                the conveyor belt also needed to be carefully calibrated. Too
                high a speed could lead to excessive breakage of the chili,
                while too low a speed might result in inefficient processing.
              </li>
              <li>
                Through extensive testing and experimentation, the optimal
                conveyor angle and RPM speed were determined to be and 110 RPM,
                respectively. These settings provided the necessary balance
                between efficient chili movement and minimal breakage.
              </li>
            </ul>
          </div>
          {/* Impact and Benefits */}
          <div className="impact-benefits">
            <h2 className="single-casestudy-layout1-title test-selection-blue">
              Impact and Benefits
            </h2>
            <ul>
              <li>
                <span className="highlight">Improved Hygiene:</span> The
                automated handling process reduced the risk of contamination,
                ensuring the safety and quality of the final product.
              </li>
              <li>
                <span className="highlight">Increased Efficiency:</span> The
                machine streamlined the chili handling process, reducing labor
                costs and increasing overall productivity.
              </li>
              <li>
                <span className="highlight">Consistent Drying:</span> The
                controlled drying chamber ensured even drying of chili,
                resulting in a more uniform product.
              </li>
              <li>
                <span className="highlight">Reduced Breakage:</span> The gentle
                handling mechanism minimized chili breakage, improving product
                yield and reducing waste.
              </li>
            </ul>
          </div>
          <div className="single-casestudy-layout1-title test-seclection-blue">
            <p>{caseStudy?.gallerytittle}</p>
          </div>
          {caseStudy?.gallery && caseStudy.gallery.length > 0 && (
            <div className="single-casestudy-layout2">
              {caseStudy.gallery.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Gallery ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="challenges">
            <div
              className="single-casestudy-layout3"
              style={{ display: "flex" }}
            >
              <div>
                {caseStudy?.challenges?.map((challenge, index) => (
                  <div key={index}>
                    <div className="single-casestudy-layout3-title test-seclection-blue">
                      {challenge.challengestitle}
                    </div>
                    <p className="test-seclection-blue-challenge">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
              {caseStudy?.imageContent?.imageSrc && (
                <div>
                  {/* <img
                    src={caseStudy.imageContent.imageSrc}
                    alt="Challenge"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      userSelect: "none",
                    }}
                  /> */}
                </div>
              )}
            </div>
            <div className="relatable-casestudy">
              <RelatedCaseStudy relatedCases={relatedCases} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <MobileFooter />
    </>
  );
}

export default SingleCaseStudy;