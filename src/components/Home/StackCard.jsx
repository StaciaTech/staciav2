import React from "react";
import { useNavigate } from "react-router-dom";
import { useTransform, motion } from "framer-motion";
function StackCard({
  eachHomeProduct,
  i,
  proDetails,
  range,
  progress,
  targetScale,
}) {
  const navigateTo = useNavigate();
  const scale = useTransform(progress, range, [1, targetScale]);
  const topPosition = `calc(100% - 90% + ${40 * i}px)`;

  const productKey = eachHomeProduct.title.split(" ").join("-");

  const CategoryKey = eachHomeProduct.domainName.split(" ").join("-");

  return (
    <motion.li
      style={{
        scale,
        position: "sticky",
        top: topPosition,
      }}
    >
      <div
        className="card__content"
        style={{
          background: proDetails[i % proDetails.length].background,
        }}
      >
        <div className="card-img-box">
          <div className="card-img-cover">
            <img src={eachHomeProduct.imageUrl} alt="" />
          </div>
        </div>
        <div className="card-content-box">
          <div
            style={{
              fontSize: "2vw",
              fontFamily: "EuclidMedium",
              color: "#fff",
            }}
            className="test-seclection-white"
          >
            {eachHomeProduct.title}
          </div>
          <div
            style={{
              fontSize: "1vw",
              fontFamily: "EuclidMedium",
              color: "#fff",
              padding: "0.5rem 0rem",
            }}
            className="test-seclection-white"
          >
            {eachHomeProduct.domainName}
          </div>
          <div className="content1">
            <p className="test-seclection-white">{eachHomeProduct.pDes1}</p>
          </div>
          <div className="content1">
            <p className="test-seclection-white">{eachHomeProduct.pDes2}</p>
          </div>
          <div
            className="learn-more"
            onClick={() => {
              navigateTo(`/products/department/${CategoryKey}/${productKey}`);
              window.scrollTo(0, 0);
            }}
            style={{ cursor: "pointer" }}
          >
            Learn more
          </div>
        </div>
      </div>
    </motion.li>
  );
}
export default StackCard;
