import React from "react";
import { Link } from "react-router-dom";

export default function MobileProductCard({
  proId,
  proName,
  proImg,
  proDesc, 
  FoundCat,
  FoundDept,
}) {
  const depKey = FoundDept.name.split(" ").join("-");
  console.log(depKey, "MobileProductCard")

  const productKey = proName.split(" ").join("-");
  // const productKey = proName.split(" ").join("-");
  console.log(productKey, "productKey");


  return (
    <div className="mobile-product-card" style={{ backgroundColor: "" }}>
      <div className="mb-product-card-title">{proName}</div>
      <div className="mb-pro-img-box">
        <img src={proImg} alt="" />
      </div>
      <div className="pro-head">{proName}</div>

      <div className="pro-para">
        <p>{proDesc}</p>
      </div>

      <Link
        className="mb-pro-read-more"
        // to={`/products/${FoundDept}/${FoundCat.id}/${productKey}`}
        to={`/products/${FoundDept.name}/${FoundCat.name.split(" ").join("-")}/${productKey}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        Read More
      </Link>
    </div>
  );
}
