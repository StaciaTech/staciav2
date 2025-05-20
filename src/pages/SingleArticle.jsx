import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/SingleArticle.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import SideBar from "../components/SideBar";
// import CaseStudyaudio from "../components/CaseStudy/CaseStudyaudio";
import ArticleAudio from '../components/Articles/ArticleAudio'
import articlesData from "../Data/SingleArticle.json";
import ArticleAudio from '../components/Articles/ArticleAudio';

function SingleArticle() {
  const { title } = useParams();
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    setArticleData(articlesData.articles || []);
  }, []);

  const decodedTitle = decodeURIComponent(title?.replace(/-/g, " ") || "");
  const singleArticle = articleData.find(
    (art) =>
      art.title?.toLowerCase().trim() === decodedTitle.toLowerCase().trim()
  );

  const getFirstTwoWords = (str = "") => str.split(" ").slice(0, 2).join(" ");

  const renderLoadingOrError = (message) => (
    <>
      <NavBar />
      <SideBar />
      <div className="single-article-content-card-container">
        <p>{message}</p>
      </div>
      <Footer />
      <MobileFooter />
    </>
  );

  if (!articleData.length) return renderLoadingOrError("Loading article data...");
  if (!singleArticle) return renderLoadingOrError(`Article not found for title: ${decodedTitle}`);

  return (
    <>
      <NavBar />
      <SideBar />

      {/* <div className="single-article-section">
        <div className="single-article-section-overlay">
          <div className="single-article-title test-seclection-white">
            {singleArticle.title}
          </div>
        </div>
      </div> */}

      <div
        className="single-article-heading-card-container"
        style={{
          backgroundImage: `url(${
            singleArticle.mainImageUrl || "/default-image.jpg"
          })`,
        }}
      >
        <div className="single-article-heading test-seclection-white">
          {/* {getFirstTwoWords(singleArticle.title)} */}

          {singleArticle.title}
        </div>
      </div>

      <div className="single-article-content-card-container">
        {/* <CaseStudyaudio /> */}
        <ArticleAudio articleTitle={decodedTitle} />

        {singleArticle.sections.map((section, index) => (
          <div key={index}>
            <div className="single-article-main-title test-seclection-blue">
              {section.section_title}
            </div>

            {section.imageUrl && (
              <div className="single-article-main-title test-seclection-blue">
                <img
                  src={section.imageUrl}
                  alt=""
                  style={{
                    width: "100%",
                    height: "20%",
                    objectFit: "cover",
                    userSelect: "none",
                    marginTop: "2rem",
                  }}
                />
              </div>
            )}

            <div className="single-article-main-content-container">
              <div className="single-article-main-content-content">
                {Array.isArray(section.content)
                  ? section.content.map((item, i) => (
                      <li key={i} className="li-text">
                        <span className="highlight">
                          {item.point ||
                            item.application ||
                            item.benefit ||
                            item.challenge}
                          :
                        </span>{" "}
                        {item.description}
                      </li>
                    ))
                  : [
                      "content",
                      "content1",
                      "content2",
                      "slogan",
                      "content3",
                    ].map((key, i) =>
                      section[key] ? (
                        <p
                          key={i}
                          style={{ color: "#6B6084" }}
                          className="single-casestudy-layout1-des test-seclection-blue"
                        >
                          {section[key]}
                        </p>
                      ) : null
                    )}
              </div>
            </div>
          </div>
        ))}

        {singleArticle.references?.length > 0 && (
          <div>
            <div className="single-article-main-title test-seclection-blue">
              References
            </div>
            <div className="single-article-main-content-container">
              <div className="single-article-main-content-content">
                {singleArticle.references.map((ref, i) => (
                  <p
                    key={i}
                    style={{ color: "#6B6084" }}
                    className="test-seclection-blue"
                  >
                    {ref}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <MobileFooter />
    </>
  );
}

export default SingleArticle;
