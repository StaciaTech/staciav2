import React, { useState, useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";
import "../../styles/ProductDetails.css";
import { useNavigate } from "react-router-dom";
import data from "../../Data/ProductPage.json";

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
              <img
                src={SelectedProduct?.imageUrl}
                alt={SelectedProduct?.title}
                loading="lazy"
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
      <Footer />
      <MobileFooter />
    </Suspense>
  );
}
