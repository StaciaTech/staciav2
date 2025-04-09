import { React, useEffect } from "react";
import reverse from "../../assets/reverse.png";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../redux/slice/productSlice";

export default function MobileStackScroll() {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const homeMobileProducts = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("Redux State:", homeMobileProducts);

  // console.log(homeMobileProducts.isLoading);

  const homeMobileProductData = homeMobileProducts.data || [];
  // const homeMobileProductData = homeMobileProducts.data.productPSPosition;
  // console.log(homeMobileProductData);

  return (
    <>
      <div className="mobile-stack-scroll">
        {homeMobileProducts.isLoading ? (
          <div>
            <div className="mobile-stack-card">
              <div
                style={{
                  padding: "20px",
                }}
              >
                <div className="mobile-card-stack-title"></div>
                <div className="mobile-stack-domain"></div>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="mobile-card-stack-img-box">
                  <div
                    style={{
                      height: "200px",
                      width: "100%",
                      backgroundColor: "#fff1",
                      borderRadius: "10px",
                    }}
                  ></div>
                </div>
              </div>

              <div style={{ padding: "20px" }}>
                <div className="mobile-card-stack-para">
                  <p></p>
                </div>
                {/* <div
              className="mobile-card-stack-learn-more"
              onClick={() => navigateTo(`/product/${eachProduct._id}`)}
            >
              Read More
            </div> */}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {homeMobileProductData?.map((eachProduct, index) => (
              // {homeMobileProductData.map((eachProduct, index) => (
              <div
                className="mobile-stack-card"
                style={{ position: "sticky", top: "12%" }}
                key={index}
              >
                <div
                  style={{
                    padding: "20px",
                  }}
                >
                  <div className="mobile-card-stack-title">
                    {eachProduct.title}
                  </div>
                  <div className="mobile-stack-domain">
                    {eachProduct.domainName}
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="mobile-card-stack-img-box">
                    <img src={eachProduct.imageUrl} alt="" />
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  <div className="mobile-card-stack-para">
                    <p>{eachProduct.des}</p>
                  </div>
                  <div
                    className="mobile-card-stack-learn-more"
                    onClick={() => {
                      // navigateTo(`/products/${eachProduct.title}`);
                      navigateTo(
                        `/products/${eachProduct.depName}/${eachProduct.catName
                          .split(" ")
                          .join("-")}/${eachProduct.title.split(" ").join("-")}`
                      );
                      window.scrollTo(0, 0);
                    }}
                  >
                    Read More
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
