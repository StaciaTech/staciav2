
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