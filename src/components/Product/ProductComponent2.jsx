import React from "react";
import { Link } from "react-router-dom";

export default function ProductComponent2({
  bigText1,
  bigText2,
  productName,
  productImg,
  des,
  id,
  bgColor,
  FoundDept,
  FoundCat,
}) {
  function trimAfterTwoWords(str) {
    // Split the string into an array of words
    const words = str.split(" ");

    // Keep the first two words
    const firstTwoWords = words.slice(0, 2);

    // Join the first two words back together with a space
    return firstTwoWords.join(" ");
  }

  const bigText1Trim = trimAfterTwoWords(bigText1);
  const bigText2Trim = trimAfterTwoWords(bigText2);

  
  const productKey = productName.split(" ").join("-");
  console.log(productKey);
  console.log()

  return (
    <div className="p-section pro3" style={{ backgroundColor: bgColor }}>
      <div className="product-name p1">{bigText1Trim}</div>
      <div className="pro2-container">
        <div className="pro2-left">
          <div className="pname test-seclection-blue">{productName}</div>
          <p
            style={{ marginTop: "30px" }}
            className="pro-comp-des test-seclection-blue"
          >
            {des}
          </p>
          <Link
            className="all-know-more"
            to={`/products/${FoundDept.name}/${FoundCat.name}/${productKey}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            Read more
          </Link>
        </div>
        <div className="pro3-right">
          <div className="slice">{bigText2Trim}</div>
          <div className="pro3-right-img">
            <img
              src={productImg}
              alt=""
              style={{
                zIndex: "2",
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


// Static

// import React from "react";
// import { Link, useParams } from "react-router-dom";

// export default function ProductComponent2({
//   bigText1,
//   bigText2,
//   productName,
//   productImg,
//   des,
//   id,
//   bgColor,
//   FoundDept,
//   FoundCat,
// }) {
//   function trimAfterTwoWords(str) {
//     // Split the string into an array of words
//     const words = str.split(" ");

//     // Keep the first two words
//     const firstTwoWords = words.slice(0, 2);

//     // Join the first two words back together with a space
//     return firstTwoWords.join(" ");
//   }

//   const bigText1Trim = trimAfterTwoWords(bigText1);
//   const bigText2Trim = trimAfterTwoWords(bigText2);

//    const params = useParams();
//    const categoryKey = params.category.split(" ").join("-");
//    console.log(params.category, "Category");


//   const CategoryName = FoundCat.name.split(" ").join("-");
//   console.log(CategoryName,"CategoryNameNew")


//   const productKey = productName?.split(" ").join("-");

  

//   return (
//     <div className="p-section pro3" style={{ backgroundColor: bgColor }}>
//       <div className="product-name p1">{bigText1Trim}</div>
//       <div className="pro2-container">
//         <div className="pro2-left">
//           <div className="pname test-seclection-blue">
//             {productName} 
//             </div>
//           <p
//             style={{ marginTop: "30px" }}
//             className="pro-comp-des test-seclection-blue"
//           >
//             {des}
//           </p>
//           <Link
//             className="all-know-more"
//             to={`/products/${FoundDept.name}/${categoryKey}/${productKey}`}
//             onClick={() => window.scrollTo(0, 0)}
//           >
//             Read more
//           </Link>
//         </div>
//         <div className="pro3-right">
//           <div className="slice">{bigText2Trim}</div>
//           <div className="pro3-right-img">
//             <img
//               src={productImg}
//               alt=""
//               style={{
//                 zIndex: "2",
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "contain",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
