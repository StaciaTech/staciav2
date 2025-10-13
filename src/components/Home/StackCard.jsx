import React from "react";
import { useNavigate } from "react-router-dom";
import { useTransform, motion } from "framer-motion";
// import data from "../../Data/Home.json"
function StackCard({
  eachHomeProduct,
  eachHomeService,
  i,
  proDetails,
  range,
  progress,
  targetScale,
}) {
  const navigateTo = useNavigate();
  const scale = useTransform(progress, range, [1, targetScale]);
  const topPosition = `calc(100% - 90% + ${30 * i}px)`;

  // Determine if this is a product or service
  const isService = !!eachHomeService;
  const item = isService ? eachHomeService : eachHomeProduct;

  // Handle navigation paths for products vs services
  let depKey, productKey, CategoryKey, navigationPath;
  
  if (isService) {
    // For services, use service-specific properties
    depKey = item.depName ? item.depName.split(" ").join("-") : "services";
    productKey = item.title ? item.title.split(" ").join("-") : "service";
    CategoryKey = item.catName ? item.catName.split(" ").join("-") : "general";
    navigationPath = `/services/${productKey}`;
  } else {
    // For products, use product-specific properties
    depKey = item.depName ? item.depName.split(" ").join("-") : "products";
    productKey = item.title ? item.title.split(" ").join("-") : "product";
    CategoryKey = item.catName ? item.catName.split(" ").join("-") : "general";
    navigationPath = `/products/${depKey}/${CategoryKey}/${productKey}`;
  }

  console.log(depKey, productKey, CategoryKey, isService ? 'service' : 'product');
  
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
            <img src={item.imageUrl} alt="" />
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
            {item.title}
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
            {item.domainName || item.category || 'General'}
          </div>
          <div className="content1">
            <p className="test-seclection-white">{item.pDes1 || item.description || ''}</p>
          </div>
          <div className="content1">
            <p className="test-seclection-white">{item.pDes2 || item.shortDescription || ''}</p>
          </div>
          <div
            className="learn-more"
            onClick={() => {
              navigateTo(navigationPath);
              window.scrollTo(0, 0);
            }}
            style={{ cursor: "pointer" }}
          >
            Read More
          </div>
        </div>
      </div>
    </motion.li>
  );
}
export default StackCard;
