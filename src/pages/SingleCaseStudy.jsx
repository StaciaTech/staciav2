// import React from "react";
// import "../styles/SingleCaseStudy.css";
// import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";
// import Footer from "../components/Footer";
// import MobileFooter from "../components/MobileFooter";
// import Cs1 from "../assets/csimg1.png";
// import Cs2 from "../assets/csimg2.png";

// function SingleCaseStudy() {
//   return (
//     <>
//       <NavBar />
//       <SideBar />
//       <div>
//         <div className="single-casestudy-section">
//           <div className="single-casestudy-section-overlay">
//             <div className="single-casestudy-title test-seclection-white">
//               Mechanization and Precision Sowing
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             className="single-casestudy-heading-card-container"
//             style={{
//               backgroundImage: `url(${Cs2})`,
//             }}
//           >
//             <div className="single-casestudy-heading test-seclection-white">
//               Mechanization and Precision Sowing
//             </div>
//           </div>
//         </div>
//         <div className="single-casestudy-content-container">
//           <div>
//             {/* <div>Published by</div> */}
//             {/* <div>Audio</div> */}
//             <div className="single-casestudy-layout1-title test-seclection-blue">
//               Mechanization and Precision Sowing in Sesame Cultivation in India
//             </div>
//             <p className="single-casestudy-layout1-des test-seclection-blue">
//               India is one of the largest producers of sesame, with cultivation
//               spread across various states under diverse climatic conditions
//               such as summer, rainfed, cold weather, and rain fallow regions.
//               Approximately 1.8 million hectares of land are used for sesame
//               cultivation each year. However, the average yield remains less
//               than 500 kg per acre due to outdated farming practices such as
//               broadcasting.
//             </p>
//             <div className="single-casestudy-layout1-img-content-container">
//               <div>
//                 <img
//                   src={Cs1}
//                   alt=""
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     userSelect: "none",
//                   }}
//                 />
//               </div>
//               <div>
//                 <p className="test-seclection-blue">
//                   Most farmers use the traditional broadcasting method for
//                   sowing, where 2 kg of sesame seeds are scattered per acre.
//                   This leads to uneven distribution, lower germination rates,
//                   and higher labor costs.
//                 </p>
//                 <p className="test-seclection-blue">
//                   In some areas like Cuddalore and Salem in Tamil Nadu, line
//                   sowing has been adopted, and farmers experience yields of over
//                   700 kg per acre. Despite the improvement, this method relies
//                   entirely on manual labor and lacks mechanization.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="single-casestudy-layout2-title test-seclection-blue">

//             </div>
//             <div className="single-casestudy-layout2">
//               <div>
//                 <img
//                   src="https://plus.unsplash.com/premium_photo-1709440655728-295d8c1cb722?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZCUyMHNjYXByfGVufDB8fDB8fHww"
//                   alt=""
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="https://plus.unsplash.com/premium_photo-1709440655728-295d8c1cb722?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZCUyMHNjYXByfGVufDB8fDB8fHww"
//                   alt=""
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="https://plus.unsplash.com/premium_photo-1709440655728-295d8c1cb722?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZCUyMHNjYXByfGVufDB8fDB8fHww"
//                   alt=""
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="https://images.unsplash.com/photo-1567274333060-04b18e634717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZCUyMHNjYXBlfGVufDB8fDB8fHww"
//                   alt=""
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="single-casestudy-layout3">
//               <div>
//                 <div className="single-casestudy-layout3-title test-seclection-blue">
//                   Labor-intensive
//                 </div>
//                 <p className="test-seclection-blue">
//                   Sowing, thinning, and harvesting require significant manual
//                   labor, consuming over 50% of the total cultivation cost.
//                 </p>
//                 <div className="single-casestudy-layout3-title test-seclection-blue">
//                   Irrigation and Water Wastage
//                 </div>
//                 <p className="test-seclection-blue">
//                   Broadcasting often leads to overuse of irrigation water due to
//                   poor seed distribution and higher plant density.
//                 </p>
//                 <div className="single-casestudy-layout3-title test-seclection-blue">
//                   Low Yield
//                 </div>
//                 <p className="test-seclection-blue">
//                   Broadcasting results in lower yields, particularly in rainfed
//                   areas where the average could be increased by 1.8 times, and
//                   irrigated areas by up to 4 times with proper mechanization and
//                   line sowing techniques.
//                 </p>
//               </div>
//               <div>
//                 <img
//                   src={Cs1}
//                   alt=""
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     userSelect: "none",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div>
//           <div className="single-casestudy-layout4">
//             <div className="single-casestudy-layout4-title">
//               Related Case study
//             </div>
//             <div className="single-casestudy-layout4-grid-container">
//               <div>
//                 <div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
//                     alt=""
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>{" "}
//                 <div>
//                   <div>lorem ipsum</div>
//                   <div>Lorem ipsum dolor sit amet.</div>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
//                     placeat eligendi in nulla facilis eos.
//                   </p>
//                 </div>
//               </div>
//               <div>
//                 <div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
//                     alt=""
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>{" "}
//                 <div>
//                   <div>lorem ipsum</div>
//                   <div>Lorem ipsum dolor sit amet.</div>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
//                     placeat eligendi in nulla facilis eos.
//                   </p>
//                 </div>
//               </div>
//               <div>
//                 <div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
//                     alt=""
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>{" "}
//                 <div>
//                   <div>lorem ipsum</div>
//                   <div>Lorem ipsum dolor sit amet.</div>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
//                     placeat eligendi in nulla facilis eos.
//                   </p>
//                 </div>
//               </div>
//               <div>
//                 <div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
//                     alt=""
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>{" "}
//                 <div>
//                   <div>lorem ipsum</div>
//                   <div>Lorem ipsum dolor sit amet.</div>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
//                     placeat eligendi in nulla facilis eos.
//                   </p>
//                 </div>
//               </div>
//               <div>
//                 <div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
//                     alt=""
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>{" "}
//                 <div>
//                   <div>lorem ipsum</div>
//                   <div>Lorem ipsum dolor sit amet.</div>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
//                     placeat eligendi in nulla facilis eos.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> */}
//       </div>
//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }

// export default SingleCaseStudy;

//Static

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

//     const selectedCaseStudy = data.singlecasestudy.find(
//       (study) => study.id === formattedId
//     );

//     console.log("Selected Case Study:", selectedCaseStudy);

//     if (selectedCaseStudy) {
//       setCaseStudy(selectedCaseStudy);

//       const related = data.singlecasestudy //related-------
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

//           {/* gallery-tittle */}
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













import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/SingleCaseStudy.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import data from "../Data/SingleCaseStudy.json";
import CaseStudyAudio from "../components/CaseStudy/CaseStudyaudio";
import RelatedCaseStudy from "../components/CaseStudy/RelatedCaseStudy";

function SingleCaseStudy() {
  const [caseStudy, setCaseStudy] = useState(null);
  const { id } = useParams();
  const formattedId = id.replace(/-+/g, "-");

  const [relatedCases, setRelatedCases] = useState([]);
  console.log("Extracted ID from URL----:", id);

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
                {caseStudy?.imageContent?.content?.map((text, index) => (
                  <p key={index} className="test-seclection-blue-img-cont">
                    {text}
                  </p>
                ))}
              </div>
            </div>
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
                  <img
                    src={caseStudy.imageContent.imageSrc}
                    alt="Challenge"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      userSelect: "none",
                    }}
                  />
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
