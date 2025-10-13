// Static

// import React, { useState, useEffect } from "react";
// import NavBar from "../NavBar";
// import Footer from "../Footer";
// import "../../styles/ProductDetails.css";
// import { useParams } from "react-router-dom";
// import prev from "../../assets/prev.png";
// import next from "../../assets/next.png";
// // import Model from "./Model";
// import MobileFooter from "../MobileFooter";
// import SideBar from "../SideBar";
// import LoadingStar from "../LoadingStar";
// import { useNavigate } from "react-router-dom";
// import Star from "../Star";
// import data from "../../Data/ProductPage.json";

// export default function SingleProduct() {
//   const navigateTo = useNavigate();
//   const params = useParams();
//   // console.log(params,"params")

//   // console.log(params.department,"paramsDepartment");

//   const productKey = params.id;
//   console.log(productKey, "ProductKey");

//   const DeptKey = params.department 
//   console.log(DeptKey,"DepartmentKey")

//   const [productData, setProductData] = useState([]);

//   // const FetchProducts = () => {
//   //   try {
//   //     setProductData(data.department);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   useEffect(() => {
//     // FetchProducts();
//     setProductData(data.department)
//   }, []);

//   console.log(productData, "ProductData");

//   const FoundDep = productData.find((eachDep) => {
//     return eachDep.name === params.department;
//   });
//   console.log(FoundDep, "Department");

//   const FoundCat = FoundDep?.category.find((eachCat) => {
//     return eachCat.name.split(" ").join("-") === params.category;
//   });
//   console.log(FoundCat, "Category");

//   const CatogeryKey = FoundCat?.name.split(" ").join("-")
//   // console.log(CatogeryKey, "CatogeryKey");

//   const proData = FoundCat?.products;
//   // console.log(proData, "Moses**ProdData");

//   const product = proData?.find(
//     (eachPro) => eachPro?.title?.split(" ").join("-") === params.id
//     );
//   // console.log(product, "Product");

//   const [SelectedProduct, setSelectedProduct] = useState({});

//   // const FetchSingleProduct = () => {
//   //   try{
//   //     if(product){
//   //       setSelectedProduct(product);
//   //     }
//   //   } catch(error){
//   //     console.error(error)
//   //   }
//   //   };

//   useEffect(() => {
//     if (product) {
//       setSelectedProduct(product);
//     }
//   }, [product]);

//   // console.log(SelectedProduct, "SelectedProduct");

//   // const RemainingProducts = FoundCat?.products.filter(
//   //   (eachPro) => eachPro.title !== productKey
//   // );

//   // const RemainingProducts = FoundCat?.products?.filter(
//   //   (eachProduct) => eachProduct.title !== productKey
//   // );

//   const RemainingProducts = FoundCat?.products.filter((eachPro)=> eachPro?.title?.split(" ").join("-") !== params.id)
//   // const RemainingProducts = FoundCat?.products.filter((eachPro)=> eachPro.title.split() !== params.id)

//   // console.log(RemainingProducts, "Remaining Products");

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide(
//       (currentSlide + 1) % SelectedProduct?.productDetails?.length
//     );
//   };
//   const previousSlide = () => {
//     setCurrentSlide(
//       (currentSlide - 1 + SelectedProduct?.productDetails?.length) %
//         SelectedProduct?.productDetails.length
//     );
//   };
//   // console.log(SelectedProduct.productDetails, "Product**Details");

//   return (
//     <>
//       <div>
//         <NavBar />
//         <SideBar />
//       </div>
//       {!SingleProduct ? (
//         <div>
//           <LoadingStar />
//         </div>
//       ) : (
//         <div>
//           <div>
//             <div className="product-details">
//               <div className="product-details2">
//                 <div style={{ marginTop: "40px" }}>
//                   <div className="single-product-name test-seclection-white">
//                     <Star />
//                     {SelectedProduct?.title}
//                   </div>
//                   <div className="product-category">
//                     <span className="test-seclection-white">
//                       {SelectedProduct?.domainName}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="single-pro-container">
//                   <div className="single-pro-container2">
//                     <div className="single-pro-overview">
//                       {/* <Star /> */}
//                       <span style={{ userSelect: "none" }}>Overview</span>
//                     </div>
//                     <p className="test-seclection-white">
//                       {SelectedProduct?.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <div className="product-3d-img">
//                 <div className="img-box">
//                     <img src={thisProduct.productImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                 </div>
//                 <div style={{ width: '100%', textAlign: 'end', fontSize: '18px', fontWeight: '900', color: 'rgba(13, 2, 37, 0.20)' }}>Rotate the Object for Real Experience</div>
//             </div> */}

//             {/* {SelectedProduct?.animationUrl && (
//               <Model
//                 ModelFile={SelectedProduct?.animationUrl}
//                 sizeMultiplier={5}
//               />
//             )} */}
//             {
//               <div className="img-box"
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   src={SelectedProduct?.imageUrl} alt={SelectedProduct?.title}
//                   // style={{ width: "40%", minHeight: "40vh",padding:"25px" }}
//                 />
//               </div>
//             }

//              {/* <div className="product-3d-img">
//                 <div className="img-box">
//                     <img src={SelectedProduct.imageUrl} alt=""  />
//                 </div>
//                 <div style={{ width: '100%', textAlign: 'end', fontSize: '18px', fontWeight: '900', color: 'rgba(13, 2, 37, 0.20)' }}>Rotate the Object for Real Experience</div>
//             </div> */}

//             <div className="rotate-text">
//               {/* <div className="mobile-rotate-text">
//                 Rotate the Object for Real Experience
//               </div> */}
//             </div>
//             {SelectedProduct.productDetails && (
//               <div
//                 style={{
//                   minHeight: "100vh",
//                   width: "100%",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <div>
//                   <div className="split-screen-carousel">
//                     <div
//                       className=""
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         margin:'15px'
//                       }}
//                     >
//                       <p className="skip">{""}</p>
//                       <div
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "20px",
//                           userSelect: "none",                          
//                         }}
//                       >
//                         <div
//                           onClick={previousSlide}
//                           style={{
//                             width: "40px",
//                             height: "40px",
//                             cursor: "pointer",
//                           }}
//                         >
//                           <img
//                             src={prev}
//                             alt=""
//                             style={{ width: "100%", height: "100%" }}
//                           />
//                         </div>
//                         <div
//                           onClick={nextSlide}
//                           style={{
//                             width: "40px",
//                             height: "40px",
//                             cursor: "pointer",
//                           }}
//                         >
//                           <img
//                             src={next}
//                             alt=""
//                             style={{ width: "100%", height: "100%" }}
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="split">
//                       <div className="image-area">
//                         <img
//                           src={
//                             SelectedProduct?.productDetails[currentSlide]
//                               ?.imageUrl
//                           }
//                           alt="slide "
//                           style={{ userSelect: "none" }}
//                         />
//                       </div>
//                       <div className="text-area">
//                         <div className="paras">
//                           <p className="test-seclection-blue">
//                             {
//                               SelectedProduct?.productDetails[currentSlide]
//                                 ?.title
//                             }
//                           </p>
//                           <p className="test-seclection-blue">
//                             {
//                               SelectedProduct?.productDetails[currentSlide]
//                                 ?.description
//                             }
//                           </p>
//                         </div>

//                         {/* <div
//                           className=""
//                           style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                           }}
//                         >
//                           <p className="skip">{""}</p>
//                           <div
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                               gap: "20px",
//                               userSelect: "none",
//                             }}
//                           >
//                             <div
//                               onClick={previousSlide}
//                               style={{
//                                 width: "40px",
//                                 height: "40px",
//                                 cursor: "pointer",
//                               }}
//                             >
//                               <img
//                                 src={prev}
//                                 alt=""
//                                 style={{ width: "100%", height: "100%" }}
//                               />
//                             </div>
//                             <div
//                               onClick={nextSlide}
//                               style={{
//                                 width: "40px",
//                                 height: "40px",
//                                 cursor: "pointer",
//                               }}
//                             >
//                               <img
//                                 src={next}
//                                 alt=""
//                                 style={{ width: "100%", height: "100%" }}
//                               />
//                             </div>
//                           </div>
//                         </div> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <div>varitaion</div> */}
//               </div>
//             )}
//             <div className="full-desc">
//               <div className="pro-title test-seclection-blue">
//                 {SelectedProduct?.title}
//               </div>
//               <div className="prodesc test-seclection-blue">
//                 {SelectedProduct?.briefDetails}
//               </div>
//             </div>
//           </div>
//           <>
//             <div className="remaining-products-card-container-holder">
//               <div className="single-other-service-title">Other Products</div>
//               <div className="remaining-products-card-container">
//                 {RemainingProducts?.map((eachPro, i) => {
//                   const ProductKey =eachPro ? eachPro?.title?.split(" ").join("-") : "";
//                   return (
//                     <>
//                       {i < 6 && (
//                         <div key={i}>
//                           <div className="single-product-card">
//                             <div
//                               // style={{ width: "100%", height: "20rem" }}
//                               className="single-product-card-img-container pointer"
//                               onClick={() => {
//                                 navigateTo(
//                                   `/products/${DeptKey}/${CatogeryKey}/${ProductKey}`
//                                 );
//                                 window.scrollTo(0, 0);
//                               }}
//                             >
//                               <img
//                                 src={eachPro?.imageUrl}
//                                 alt=""
//                                 style={{
//                                   width: "100%",
//                                   height: "100%",
//                                   objectFit: "contain",
//                                 }}
//                               />
//                             </div>
//                             <div
//                               className="single-product-card-title pointer test-seclection-blue"
//                               onClick={() => {
//                                 navigateTo(
//                                   `/products/${DeptKey}/${CatogeryKey}/${ProductKey}`
//                                 );
//                                 window.scrollTo(0, 0);
//                               }}
//                             >
//                               {eachPro?.title}
//                             </div>
//                             <p className="single-product-card-des test-seclection-blue">
//                               {eachPro?.description}
//                             </p>
//                           </div>
//                         </div>
//                       )}
//                     </>
//                   );
//                 })}
//               </div>
//             </div>
//           </>
//         </div>
//       )}
//       <Footer />
//       <MobileFooter />
//     </>
//     // <>
//     // <h1>Single Product</h1>
//     // </>
//   );
// }



// // import React from 'react'
// // import Template5 from '../../Templets/Template5'

// // const SingleProduct = () => {
// //   return (
// //     <div>
// //       <Template5/>
// //     </div>
// //   )
// // }

// // export default SingleProduct


//lazy loading


import React, { useState, useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";
import "../../styles/ProductDetails.css";
import { useNavigate } from "react-router-dom";
import data from "../../Data/ProductPage.json";
import SuggestionProducts from "../ReUsableComp/SuggestionProducts";
import SuggestionService from "../ReUsableComp/SuggestionService";
import KnowMoreSection from "./KnowMoreSection";
import SingleProductImage from "../ThreeJS/SingleProductImage";

// Lazy load components
const NavBar = lazy(() => import("../NavBar"));
const Footer = lazy(() => import("../Footer"));
const MobileFooter = lazy(() => import("../MobileFooter"));
const SideBar = lazy(() => import("../SideBar"));
const LoadingStar = lazy(() => import("../LoadingStar"));
const Star = lazy(() => import("../Star"));

export default function SingleProduct() {
  const navigateTo = useNavigate();
  const params = useParams();

  const productKey = params.id;
  console.log(productKey, "ProductKey");

  const DeptKey = params.department;
  console.log(DeptKey, "DepartmentKey");

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(data.department);
  }, []);

  console.log(productData, "ProductData");

  const FoundDep = productData.find((eachDep) => {
    return eachDep.name === params.department;
  });
  console.log(FoundDep, "Department");

  const FoundCat = FoundDep?.category.find((eachCat) => {
    return eachCat.name.split(" ").join("-") === params.category;
  });
  console.log(FoundCat, "Category");

  const CatogeryKey = FoundCat?.name.split(" ").join("-");

  const proData = FoundCat?.products;

  const product = proData?.find(
    (eachPro) => eachPro?.title?.split(" ").join("-") === params.id
  );

  const [SelectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    if (product) {
      setSelectedProduct(product);
    }
  }, [product]);

  const RemainingProducts = FoundCat?.products.filter(
    (eachPro) => eachPro?.title?.split(" ").join("-") !== params.id
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      (currentSlide + 1) % SelectedProduct?.productDetails?.length
    );
  };
  const previousSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + SelectedProduct?.productDetails?.length) %
      SelectedProduct?.productDetails.length
    );
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <NavBar />
        <SideBar />
      </div>
      {!product ? (
        <div>
          <LoadingStar />
        </div>
      ) : (
        <div>
          <div>
            encio
            <div className="product-details">
              <div className="product-details2">
                <div style={{ marginTop: "40px" }}>
                  <div className="single-product-name test-seclection-white">
                    <Star />
                    {SelectedProduct?.title}
                  </div>
                  <div className="product-category">
                    <span className="test-seclection-white">
                      {SelectedProduct?.domainName}
                    </span>
                  </div>
                </div>
                <div className="single-pro-container">
                  <div className="single-pro-container2">
                    <div className="single-pro-overview">
                      <span style={{ userSelect: "none" }}>Overview</span>
                    </div>
                    <p className="test-seclection-white">
                      {SelectedProduct?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="img-box"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

              }}
            >
              {/* <img
                src={SelectedProduct?.imageUrl}
                alt={SelectedProduct?.title}
                loading="lazy"
              /> */}// inside render
              <SingleProductImage
              
                modelUrl={SelectedProduct?.animationUrl}  // e.g. "/models/bottle.glb" or null
                imageUrl={SelectedProduct?.imageUrl}      // fallback image
                autoRotate={true}
              />
            </div>
            <div className="rotate-text"></div>
            {SelectedProduct.productDetails && (
              <div
                style={{
                  minHeight: "100vh",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <div className="split-screen-carousel">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "15px",
                      }}
                    >
                      <p className="skip">{""}</p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                          userSelect: "none",
                        }}
                      >
                        <div
                          onClick={previousSlide}
                          style={{
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src={prev}
                            alt="Previous"
                            style={{ width: "100%", height: "100%" }}
                            loading="lazy"
                          />
                        </div>
                        <div
                          onClick={nextSlide}
                          style={{
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src={next}
                            alt="Next"
                            style={{ width: "100%", height: "100%" }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="split">
                      <div className="image-area">
                        <img
                          src={
                            SelectedProduct?.productDetails[currentSlide]
                              ?.imageUrl
                          }
                          alt="slide"
                          style={{ userSelect: "none" }}
                          loading="lazy"
                        />
                      </div>
                      <div className="text-area">
                        <div className="paras">
                          <p className="test-seclection-blue">
                            {
                              SelectedProduct?.productDetails[currentSlide]
                                ?.title
                            }
                          </p>
                          <p className="test-seclection-blue">
                            {
                              SelectedProduct?.productDetails[currentSlide]
                                ?.description
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="full-desc">
              <div className="pro-title test-seclection-blue">
                {SelectedProduct?.title}
              </div>
              <div className="prodesc test-seclection-blue">
                {SelectedProduct?.briefDetails}
              </div>
            </div>

            {/* Know More About Product Section */}
            {/* <KnowMoreSection productData={SelectedProduct} /> */}
          </div>
          <div className="remaining-products-card-container-holder">
            <div className="single-other-service-title">Other Products</div>
            <div className="remaining-products-card-container">
              {RemainingProducts?.map((eachPro, i) => {
                const ProductKey = eachPro
                  ? eachPro?.title?.split(" ").join("-")
                  : "";
                return (
                  <React.Fragment key={i}>
                    {i < 6 && (
                      <div>
                        <div className="single-product-card">
                          <div
                            className="single-product-card-img-container pointer"
                            onClick={() => {
                              navigateTo(
                                `/products/${DeptKey}/${CatogeryKey}/${ProductKey}`
                              );
                              window.scrollTo(0, 0);
                            }}
                          >
                            <img
                              src={eachPro?.imageUrl}
                              alt={eachPro?.title}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                              loading="lazy"
                            />
                          </div>
                          <div
                            className="single-product-card-title pointer test-seclection-blue"
                            onClick={() => {
                              navigateTo(
                                `/products/${DeptKey}/${CatogeryKey}/${ProductKey}`
                              );
                              window.scrollTo(0, 0);
                            }}
                          >
                            {eachPro?.title}
                          </div>
                          <p className="single-product-card-des test-seclection-blue">
                            {eachPro?.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div>
        <SuggestionService />
        <SuggestionProducts />
      </div>
      <Footer />
      <MobileFooter />
    </Suspense>
  );
}