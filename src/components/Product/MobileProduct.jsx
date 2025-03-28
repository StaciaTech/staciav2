import React from "react";
import MobileProductCard from "./MobileProductCard";

export default function MobileProduct({ productData, FoundCat, FoundDept }) {
  return (
    <div className="mobile-product">
      {/* <div className="mobile-product-section1">
        <div className="mobile-product-title">Stacia Corp Products</div>
        <div className="mobile-product-overview">
          <div className="mobile-overview--title">Overview</div>
          <p>
            At Stacia Corp, we develop cutting-edge products that drive
            innovation across industries. From advanced agricultural machinery
            to smart home solutions and industrial automation, our products are
            designed to enhance efficiency, sustainability, and user
            convenience. Each product is crafted with precision to meet the
            unique needs of our customers, ensuring quality and performance at
            every level.{" "}
          </p>
        </div>
      </div> */}
      <div className="mobile-product-section2">
        {productData.map((eachPro) => (
          <MobileProductCard
            proId = {eachPro.id}
            proName={eachPro.title}
            proImg={eachPro.imageUrl}
            // color={data.color}
            proDesc={eachPro.description}
            // proId={data._id}
            FoundDept={FoundDept}
            FoundCat={FoundCat}
          />
        ))}
      </div>
    </div>
  );
}
