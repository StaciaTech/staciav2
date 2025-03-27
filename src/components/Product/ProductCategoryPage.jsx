// import React, { useEffect, useState } from "react";
// import NavBar from "../NavBar";
// import SideBar from "../SideBar";
// import Star from "../Star";
// import Footer from "../Footer";
// import MobileFooter from "../MobileFooter";
// import CustomCursor from "../CustomCursor";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";

// const catData = [{ title: "Lorem" }, { title: "Ipsum" }];

// function ProductCategoryPage() {
//   const params = useParams();
//   console.log(params.department);

//   const [cursorVisible, setCursorVisible] = useState(false);
//   const navigate = useNavigate();
//   const apiUrl = process.env.REACT_APP_API_URL;

//   const [productData, setProductData] = useState();

//   const FetchProducts = async () => {
//     try {
//       const res = await axios.get(`${apiUrl}/product/all-products-index`);
//       // console.log(res.data.docs);
//       setProductData(res.data.docs);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     FetchProducts();
//   }, []);

//   useEffect(() => {
//     if (productData && params.department) {
//       const section = document.getElementById(params.department);
//       if (section) {
//         setTimeout(() => {
//           const yOffset = -80; // Adjust for the 80px navbar
//           const y =
//             section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: "smooth" });
//         }, 0);
//       }
//     } else if (productData) {
//       // Scroll to the top if no specific department is in params
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [params.department, productData]);

//   return (
//     <div>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       <div className="cat-product_container">
//         <div className="cat-product_section cat-p-section">
//           <div className="cat-product_text">
//             <span className="test-seclection-white">Stacia Corp Products</span>
//             <Star />
//           </div>
//         </div>
//       </div>
//       {productData && (
//         <>
//           {productData?.map((eachItem, i) => (
//             <div
//               className="product-category-main-container"
//               id={eachItem.name}
//               key={i}
//             >
//               <div className="category-title">
//                 {eachItem.name}  
//                 </div>
//               {eachItem.categories.map((eachCat, i) => (
//                 <div className="product-categoryPage-container" key={i}>
//                   <div className="product-category-content-container">
//                     <div className="product-category-content-title test-seclection-blue">
//                        {eachCat.name} 
//                     </div>
//                     <p
//                       style={{ color: "#6B6084" }}
//                       className="test-seclection-blue"
//                     >
//                       {eachCat?.description} 
//                        </p>
//                     <div>
//                       <div
//                         style={{
//                           color: "#0047ff",
//                           fontFamily: "EuclidMedium",
//                           userSelect: "none",
//                         }}
//                       >
//                         Products
//                       </div>
//                       <div className="product-category-productName-container">
//                         {eachCat?.products.slice(0, 5).map((eachPro, i) => (
//                           <div
//                             key={i}
//                             onClick={() => {
//                               window.scrollTo(0, 0);
//                               const deptKey = eachItem?.name
//                                 .split(" ")
//                                 .join("-");
//                               const catKey = eachCat?.name.split(" ").join("-");
//                               const productKey = eachPro?.title
//                                 .split(" ")
//                                 .join("-");
//                               navigate(
//                                 `/products/${deptKey}/${catKey}/${productKey}`
//                               );
//                             }}
//                           >
//                             {eachPro.title} 
//                           </div>
//                         ))}
//                       </div>
//                       <div
//                         className="know-more pointer"
//                         style={{ margin: "10px 0px" }}
//                         onClick={() => {
//                           window.scrollTo(0, 0);
//                           const deptKey = eachItem?.name.split(" ").join("-");
//                           const catKey = eachCat?.name.split(" ").join("-");
//                           navigate(`/products/${deptKey}/${catKey}`);
//                         }}
//                       >
//                         <span>Learn more</span>
//                         <IoIosArrowForward />
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     // className="product-category-img-container"
//                     className={`product-category-img-container hover-component ${
//                       cursorVisible ? "hide-default-cursor" : ""
//                     }`}
//                     onMouseEnter={() => setCursorVisible(true)}
//                     onMouseLeave={() => setCursorVisible(false)}
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       const deptKey = eachItem?.name.split(" ").join("-");
//                       const catKey = eachCat?.name.split(" ").join("-");
//                       navigate(`/products/${deptKey}/${catKey}`);
//                     }}
//                   >
//                     <CustomCursor
//                       isVisible={cursorVisible}
//                       text={"View all Products"}
//                     />
//                     <img src={eachCat.imageUrl} alt="" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </>
//       )}
//       <Footer />
//       <MobileFooter />
//     </div>
//   );
// }

// export default ProductCategoryPage;






// Static 



// import React, { useEffect, useState } from "react";
// import NavBar from "../NavBar";
// import SideBar from "../SideBar";
// import Star from "../Star";
// import Footer from "../Footer";
// import MobileFooter from "../MobileFooter";
// import CustomCursor from "../CustomCursor";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";
// import data from '../../Data/ProductPage.json'

// const catData = [{ title: "Lorem" }, { title: "Ipsum" }];

// function ProductCategoryPage() {
//   const params = useParams();

//   const [cursorVisible, setCursorVisible] = useState(false);
//   const navigate = useNavigate();


//   const [productData, setProductData] = useState();

//   const FetchProducts = () => {
//     try {
//       setProductData(data.department);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // console.log(productData,"ProductCategoryPage *******");

//   useEffect(() => {
//     FetchProducts();
//   }, []);

//   useEffect(() => {
//     if (productData && params.department) {
//       const section = document.getElementById(params.department);
//       if (section) {
//         setTimeout(() => {
//           const yOffset = -80; // Adjust for the 80px navbar
//           const y =
//             section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: "smooth" });
//         }, 0);
//       }
//     } else if (productData) {
//       // Scroll to the top if no specific department is in params
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [params.department, productData]);

//   return (
//     <div>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       <div className="cat-product_container">
//         <div className="cat-product_section cat-p-section">
//           <div className="cat-product_text">
//             <span className="test-seclection-white">Stacia Corp Products</span>
//             <Star />
//           </div>
//         </div>
//       </div>
//       {productData && (
//         <>
//           {productData?.map((eachItem, i) => (
//             <div
//               className="product-category-main-container"
//               id={eachItem.name}
//               key={i}
//             >
//               <div className="category-title">{eachItem.name}</div>
//               {eachItem.category?.map((eachCat, i) => (
//                 <div className="product-categoryPage-container" key={i}>
//                   <div className="product-category-content-container">
//                     <div className="product-category-content-title test-seclection-blue">
//                        {eachCat.name}
//                     </div>
//                     <p
//                       style={{ color: "#6B6084" }}
//                       className="test-seclection-blue"
//                     >
//                       {eachCat.description}
//                     </p>
//                     <div>
//                       <div
//                         style={{
//                           color: "#0047ff",
//                           fontFamily: "EuclidMedium",
//                           userSelect: "none",
//                         }}
//                       >
//                         Products
//                       </div>
//                       <div className="product-category-productName-container">
//                         {eachCat?.products?.map((eachPro, i) => (
//                           <div
//                             key={i}
//                             onClick={() => {
//                               window.scrollTo(0, 0);
//                               const deptKey = eachItem name
//                                 .split(" ")
//                                 .join("-");
//                               const catKey = eachCat.name.split(" ").join("-");
//                               const productKey = eachPro.title
//                                 .split(" ")
//                                 .join("-");
//                               navigate(
//                                 `/products/${deptKey}/${catKey}/${productKey}`
//                               );
//                             }}
//                           >
//                             {eachPro.title}
//                           </div>
//                         ))}
//                       </div>
//                       <div
//                         className="know-more pointer"
//                         style={{ margin: "10px 0px" }}
//                         onClick={() => {
//                           window.scrollTo(0, 0);
//                           const deptKey = eachItem.name.split(" ").join("-");
//                           const catKey = eachCat.name.split(" ").join("-");
//                           navigate(`/products/${deptKey}/${catKey}`);
//                         }}
//                       >
//                         <span>Learn more</span>
//                         <IoIosArrowForward />
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     // className="product-category-img-container"
//                     className={`product-category-img-container hover-component ${
//                       cursorVisible ? "hide-default-cursor" : ""
//                     }`}
//                     onMouseEnter={() => setCursorVisible(true)}
//                     onMouseLeave={() => setCursorVisible(false)}
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       const deptKey = eachItem.name.split(" ").join("-");
//                       const catKey = eachCat.name.split(" ").join("-");
//                       navigate(`/products/${deptKey}/${catKey}`);
//                     }}
//                   >
//                     <CustomCursor
//                       isVisible={cursorVisible}
//                       text={"View all Products"}
//                     />
//                     <img src={eachCat.imageUrl} alt="" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </>
//       )}
//       <Footer />
//       <MobileFooter />
//     </div>
//   );
// }

// export default ProductCategoryPage;




import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Star from "../Star";
import Footer from "../Footer";
import MobileFooter from "../MobileFooter";
import CustomCursor from "../CustomCursor";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import data from '../../Data/ProductPage.json'

const catData = [{ title: "Lorem" }, { title: "Ipsum" }];

function ProductCategoryPage() {
  const params = useParams();

  const [cursorVisible, setCursorVisible] = useState(false);
  const navigate = useNavigate();


  const [productData, setProductData] = useState();

  const FetchProducts = () => {
    try {
      setProductData(data.department);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(productData,"ProductCategoryPage *******");

  useEffect(() => {
    FetchProducts();
  }, []);

  useEffect(() => {
    if (productData && params.department) {
      const section = document.getElementById(params.department);
      if (section) {
        setTimeout(() => {
          const yOffset = -80; // Adjust for the 80px navbar
          const y =
            section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 0);
      }
    } else if (productData) {
      // Scroll to the top if no specific department is in params
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [params.department, productData]);

  return (
    <div>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      <div className="cat-product_container">
        <div className="cat-product_section cat-p-section">
          <div className="cat-product_text">
            <span className="test-seclection-white">Stacia Corp Products</span>
            <Star />
          </div>
        </div>
      </div>
      {productData && (
        <>
          {productData?.map((eachItem, i) => (
            <div
              className="product-category-main-container"
              id={eachItem.name}
              key={i}
            >
              <div className="category-title">{eachItem.name}</div>
              {eachItem.category?.map((eachCat, i) => (
                <div className="product-categoryPage-container" key={i}>
                  <div className="product-category-content-container">
                    <div className="product-category-content-title test-seclection-blue">
                       {eachCat.name}
                    </div>
                    <p
                      style={{ color: "#6B6084" }}
                      className="test-seclection-blue"
                    >
                      {eachCat.description}
                    </p>
                    <div>
                      <div
                        style={{
                          color: "#0047ff",
                          fontFamily: "EuclidMedium",
                          userSelect: "none",
                        }}
                      >
                        Products
                      </div>
                      <div className="product-category-productName-container">
                        {eachCat?.products?.map((eachPro, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              window.scrollTo(0, 0);
                              const deptKey = eachItem.id
                                .split(" ")
                                .join("-");
                              const catKey = eachCat.id
                              const productKey = eachPro.id
                                .split(" ")
                                .join("-");
                              navigate(
                                `/products/${deptKey}/${catKey}/${productKey}`
                              );
                            }}
                          >
                            {eachPro.title}
                          </div>
                        ))}
                      </div>
                      <div
                        className="know-more pointer"
                        style={{ margin: "10px 0px" }}
                        onClick={() => {
                          window.scrollTo(0, 0);
                          // const deptKey = eachItem.name.split(" ").join("-");
                          const deptKey = eachItem.id;

                          // const catKey = eachCat.name.split(" ").join("-");
                          const catKey = eachCat.id;
                          navigate(`/products/${deptKey}/${catKey}`);
                        }}
                      >
                        <span>Learn more</span>
                        <IoIosArrowForward />
                      </div>
                    </div>
                  </div>
                  <div
                    // className="product-category-img-container"
                    className={`product-category-img-container hover-component ${
                      cursorVisible ? "hide-default-cursor" : ""
                    }`}
                    onMouseEnter={() => setCursorVisible(true)}
                    onMouseLeave={() => setCursorVisible(false)}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      // const deptKey = eachItem.name.split(" ").join("-");
                      const deptKey = eachItem.id

                      // const catKey = eachCat.name.split(" ").join("-");
                      const catKey = eachCat.id

                      navigate(`/products/${deptKey}/${catKey}`);
                    }}
                  >
                    <CustomCursor
                      isVisible={cursorVisible}
                      text={"View all Products"}
                    />
                    <img src={eachCat.imageUrl} alt="" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </>
      )}
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default ProductCategoryPage;