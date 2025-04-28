import React, { useEffect, useState } from "react";
import "../styles/SingleArticle.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import SideBar from "../components/SideBar";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleArticle() {
  const params = useParams();

  // const [singleArticle, setSingleArticle] = useState();
  const apiUrl = process.env.REACT_APP_API_URL;

  const [articleData, setArticleData] = useState();

  const FetchArticle = async () => {
    try {
      const res = await axios.get(`${apiUrl}/articles/list`);
      // console.log(res.data.docs);
      setArticleData(res.data.docs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchArticle();
  }, []);
  const singleArticle = articleData?.find(
    (eachArt) => eachArt.mainTitle === params.title
  );

  function getFirstTwoWords(str) {
    // Split the string into words using space as a delimiter
    const words = str.split(" ");

    // Get the first two words
    const firstTwoWords = words.slice(0, 2);

    // Join them back into a string and return
    return firstTwoWords.join(" ");
  }

  return (
    <>
      <NavBar />
      <SideBar />
      <div>
        <div className="single-article-section">
          <div className="single-article-section-overlay">
            <div className="single-article-title test-seclection-white">
              {singleArticle && getFirstTwoWords(singleArticle.mainTitle)}
            </div>
          </div>
        </div>
        <div>
          <div
            className="single-article-heading-card-container"
            style={{
              backgroundImage: `url(${singleArticle?.mainImageUrl})`,
            }}
          >
            <div className="single-article-heading test-seclection-white">
              {singleArticle && getFirstTwoWords(singleArticle.mainTitle)}
            </div>
          </div>
        </div>
        <div className="single-article-content-card-container">
          <div>
            <div className="single-article-main-title test-seclection-blue">
              {singleArticle?.content[0].title}
            </div>
            <div className="single-article-main-content-container">
              <div className="single-article-main-content-content">
                {singleArticle?.content[0].description.map((eachDes, i) => (
                  <p
                    key={i}
                    style={{ color: "#6B6084" }}
                    className="test-seclection-blue"
                  >
                    {eachDes}
                  </p>
                ))}
              </div>
              <div className="single-article-main-content-image">
                <img
                  src={singleArticle?.content[0].imageUrl}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="single-article-layout-2">
              <div className="single-article-layout-2-content-container">
                {/* <div>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1666874445308-d75e7fcb5952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBpbmslMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div> */}
                <div style={{ marginTop: "5rem" }}>
                  <div className="single-article-layout-2-content-title test-seclection-blue">
                    {singleArticle?.content[1].title}
                  </div>
                  {singleArticle?.content[1].description.map((eachDes, i) => (
                    <p
                      className="single-article-layout-2-content-des test-seclection-blue"
                      key={i}
                      style={{ color: "#6B6084" }}
                    >
                      {eachDes}
                    </p>
                  ))}
                </div>
              </div>
              <div className="single-article-layout-2-image-container">
                <img src={singleArticle?.content[1].imageUrl} alt="" />
              </div>
            </div>
          </div>
          {/* <div className="single-article-layout3">
            <div>
              <div className="single-article-layout3-num">01</div>
              <div className="single-article-layout3-title">
                Lorem ipsum dolor sit amet.
              </div>
              <p style={{ color: "#6B6084" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                earum dolore itaque quasi minima libero modi enim, in officiis,
                tenetur at quisquam distinctio dolorem fugit nesciunt reiciendis
                facere iste impedit?
              </p>
            </div>
            <div>
              <div className="single-article-layout3-num">02</div>
              <div className="single-article-layout3-title">
                Lorem ipsum dolor sit amet.
              </div>
              <p style={{ color: "#6B6084" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                earum dolore itaque quasi minima libero modi enim, in officiis,
                tenetur at quisquam distinctio dolorem fugit nesciunt reiciendis
                facere iste impedit?
              </p>
            </div>
            <div>
              <div className="single-article-layout3-num">03</div>
              <div className="single-article-layout3-title">
                Lorem ipsum dolor sit amet.
              </div>
              <p style={{ color: "#6B6084" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                earum dolore itaque quasi minima libero modi enim, in officiis,
                tenetur at quisquam distinctio dolorem fugit nesciunt reiciendis
                facere iste impedit?
              </p>
            </div>
            <div>
              <div className="single-article-layout3-num">04</div>
              <div className="single-article-layout3-title">
                Lorem ipsum dolor sit amet.
              </div>
              <p style={{ color: "#6B6084" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                earum dolore itaque quasi minima libero modi enim, in officiis,
                tenetur at quisquam distinctio dolorem fugit nesciunt reiciendis
                facere iste impedit?
              </p>
            </div>
          </div> */}
          <div>
            <div className="single-article-layout4-title">
              {singleArticle?.content[2].title}
            </div>
            <div className="single-article-layout4">
              <div>
                <img
                  src={singleArticle?.content[2].imageUrl}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div>
                {singleArticle?.content[2].description.map((eachDes, i) => (
                  <p
                    key={i}
                    style={{ color: "#6B6084" }}
                    className="test-seclection-blue"
                  >
                    {eachDes}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* <div style={{ padding: "5rem 0rem" }}>
            <div className="single-article-layout5-title">Related Articles</div>
            <div className="single-article-layout5">
              {RelatedArticles.map((eachArt, i) => (
                <div key={i}>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1682403137176-2e4082c33331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGluayUyMHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <div className="single-article-layout5-heading">
                    {eachArt.title}
                  </div>
                  <div className="single-article-layout5-des">
                    {eachArt.date}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
      <MobileFooter />
    </>
  );
}

export default SingleArticle;
