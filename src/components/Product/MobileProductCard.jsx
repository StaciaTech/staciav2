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
  const productKey = proId;
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
        to={`/products/${FoundDept.id}/${FoundCat.id}/${productKey}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        Read More
      </Link>
    </div>
  );
}
