import React from "react";
import MobileProductCard from "./MobileProductCard";

export default function MobileProduct({ productData, FoundCat, FoundDept }) {
  return (
    <div className="mobile-product">
      
      <div className="mobile-product-section2">
        {productData.map((eachPro) => (
          <MobileProductCard
            proId={eachPro.id}
            proName={eachPro.title}
            proImg={eachPro.imageUrl}
            // color={data.color}
            proDesc={eachPro.description}
            FoundDept={FoundDept}
            FoundCat={FoundCat}
          />
        ))}
      </div>
    </div>
  );
}
