import React from "react";
import "../../styles/Home/Articles.css";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

function SingleArticleCard() {
  const navigate = useNavigate();
  return (
    <div className="article-outline-holder"
      onClick={() => {
        navigate("/article");
        window.scrollTo(0, 0);
      }}>
      <div className="single-article-card-image">
        <div className="article-text-container">
          <div className="article-author-name test-seclection-white">
            Stacia Power Solutions
          </div>
          <div className="card-article-title test-seclection-white">
            Nanostructured Photovoltaic Cells
          </div>
          <div className="card-article-body test-seclection-white">
            Nanostructured Photovoltaics is a new type of solar technology that
            uses nanometer-sized structures to harvest sunlight. Nanostructured
            photovoltaic cells (NPsVCs) have the potential to revolutionize
            solar energy generation because they can be made to be much more
            efficient than traditional solar cells.
          </div>
          <div
            className="article-learn-more-link pointer"
            onClick={() => {
              navigate("/article");
              window.scrollTo(0, 0);
            }}
          >
            Read More &gt;{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
function Articles() {
  return (
    <div>
      <div className="articles-title">Articles</div>
      <div className="article-slider">
        {/* <Marquee
          style={{
            display: "flex",
            alignItems: "flex-end",
            height: "100%",
            position: "relative",
          }}
          speed={50}
          pauseOnHover={true}
        > */}
        <SingleArticleCard />
        {/* <SingleArticleCard />
          <SingleArticleCard />
          <SingleArticleCard />
          <SingleArticleCard /> */}
        {/* </Marquee> */}
      </div>
    </div>
  );
}

export default Articles;
