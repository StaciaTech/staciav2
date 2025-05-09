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
//       setProductData(data.department || []);
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
//                               const deptKey = eachItem?.name.split(" ").join("-");
//                               const catKey = eachCat?.name.split(" ").join("-");
//                               const productKey = eachPro?.title.split(" ").join("-");
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
//                           // const deptKey = eachItem.name.split(" ").join("-");
//                           const deptKey = eachItem?.name;

//                           // const catKey = eachCat.name.split(" ").join("-");
//                           const catKey = eachCat?.name.split(" ").join("-");
//                           navigate(`/products/${deptKey}/${catKey}`);
//                         }}
//                       >
//                         <span>Read More</span>
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
//                       // const deptKey = eachItem.id

//                       const catKey = eachCat.name.split(" ").join("-");
//                       // const catKey = eachCat.id

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


// With dot container
// import React, { useEffect, useState, useRef } from "react";
// import NavBar from "../NavBar";
// import SideBar from "../SideBar";
// import Star from "../Star";
// import Footer from "../Footer";
// import MobileFooter from "../MobileFooter";
// import CustomCursor from "../CustomCursor";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";
// import data from '../../Data/ProductPage.json'

// function ProductCategoryPage() {
//   const params = useParams();
//   const navigate = useNavigate();

//   const [cursorVisible, setCursorVisible] = useState(false);
//   const [productData, setProductData] = useState([]);
//   const [activeDepartment, setActiveDepartment] = useState("");
//   const [isDotClickScroll, setIsDotClickScroll] = useState(false);

//   const sectionsRef = useRef({});
//   const scrollTimeoutRef = useRef(null);

//   // Simulate fetching data
//   const FetchProducts = () => {
//     try {
//       setProductData(data.department || []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     FetchProducts();
//   }, []);

//   // Set initial active department from URL or default
//   useEffect(() => {
//     if (params.department) {
//       setActiveDepartment(params.department);
//     } else if (productData.length > 0) {
//       setActiveDepartment(productData[0].name);
//     }
//   }, [productData, params.department]);

//   // Scroll to department from URL or dot click
//   useEffect(() => {
//     if (productData.length && activeDepartment && !isDotClickScroll) {
//       const section = document.getElementById(activeDepartment);
//       if (section) {
//         const yOffset = -80; // Adjust for navbar
//         const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     }
//   }, [activeDepartment, productData, isDotClickScroll]);

//   // Intersection Observer for updating active department during scrolling
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (!isDotClickScroll) {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActiveDepartment(entry.target.id);
//             }
//           });
//         }
//       },
//       {
//         root: null,
//         threshold: 0.3,
//       }
//     );

//     productData.forEach((item) => {
//       const section = sectionsRef.current[item.name];
//       if (section) observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, [productData, isDotClickScroll]);

//   // Handle dot click
//   const handleDotClick = (departmentName) => {
//     if (scrollTimeoutRef.current) {
//       clearTimeout(scrollTimeoutRef.current);
//     }

//     setIsDotClickScroll(true);
//     setActiveDepartment(departmentName);

//     const section = document.getElementById(departmentName);
//     if (section) {
//       const yOffset = -80;
//       const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });

//       scrollTimeoutRef.current = setTimeout(() => {
//         setIsDotClickScroll(false);
//       }, 1200);
//     }
//   };

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
//       {!productData.length ? (
//         <div>Loading...</div>
//       ) : (
//         <div className="service-page-content-container">
//           <div className="service-page-main-dots-container">
//             {productData.map((eachItem, i) => (
//               <DepartmentDot
//                 key={i}
//                 eachItem={eachItem}
//                 activeDepartment={activeDepartment}
//                 setActiveDepartment={handleDotClick}
//               />
//             ))}
//           </div>
//           <div>
//             {productData.map((eachItem, i) => (
//               <div
//                 className="product-category-main-container"
//                 id={eachItem.name}
//                 key={i}
//                 ref={(el) => (sectionsRef.current[eachItem.name] = el)}
//               >
//                 <div className="category-title">{eachItem.name}</div>
//                 {eachItem.category?.map((eachCat, i) => (
//                   <div className="product-categoryPage-container" key={i}>
//                     <div className="product-category-content-container">
//                       <div className="product-category-content-title test-seclection-blue">
//                         {eachCat.name}
//                       </div>
//                       <p
//                         style={{ color: "#6B6084" }}
//                         className="test-seclection-blue"
//                       >
//                         {eachCat.description}
//                       </p>
//                       <div>
//                         <div
//                           style={{
//                             color: "#0047ff",
//                             fontFamily: "EuclidMedium",
//                             userSelect: "none",
//                           }}
//                         >
//                           Products
//                         </div>
//                         <div className="product-category-productName-container">
//                           {eachCat?.products?.map((eachPro, i) => (
//                             <div
//                               key={i}
//                               onClick={() => {
//                                 window.scrollTo(0, 0);
//                                 const deptKey = eachItem.name.split(" ").join("-");
//                                 const catKey = eachCat.name.split(" ").join("-");
//                                 const productKey = eachPro.title.split(" ").join("-");
//                                 navigate(
//                                   `/products/${deptKey}/${catKey}/${productKey}`
//                                 );
//                               }}
//                             >
//                               {eachPro.title}
//                             </div>
//                           ))}
//                         </div>
//                         <div
//                           className="know-more pointer"
//                           style={{ margin: "10px 0px" }}
//                           onClick={() => {
//                             window.scrollTo(0, 0);
//                             const deptKey = eachItem.name.split(" ").join("-");
//                             const catKey = eachCat.name.split(" ").join("-");
//                             navigate(`/products/${deptKey}/${catKey}`);
//                           }}
//                         >
//                           <span>Read More</span>
//                           <IoIosArrowForward />
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       className={`product-category-img-container hover-component ${
//                         cursorVisible ? "hide-default-cursor" : ""
//                       }`}
//                       onMouseEnter={() => setCursorVisible(true)}
//                       onMouseLeave={() => setCursorVisible(false)}
//                       onClick={() => {
//                         window.scrollTo(0, 0);
//                         const deptKey = eachItem.name.split(" ").join("-");
//                         const catKey = eachCat.name.split(" ").join("-");
//                         navigate(`/products/${deptKey}/${catKey}`);
//                       }}
//                     >
//                       <CustomCursor
//                         isVisible={cursorVisible}
//                         text={"View all Products"}
//                       />
//                       <img src={eachCat.imageUrl} alt="" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       <Footer />
//       <MobileFooter />
//     </div>
//   );
// }

// const DepartmentDot = ({ eachItem, activeDepartment, setActiveDepartment }) => {
//   const [showDept, setShowDept] = useState(false);

//   useEffect(() => {
//     if (eachItem.name === activeDepartment) {
//       setShowDept(true);
//       const timeoutId = setTimeout(() => {
//         setShowDept(false);
//       }, 3000);
//       return () => clearTimeout(timeoutId);
//     } else {
//       setShowDept(false);
//     }
//   }, [activeDepartment, eachItem.name]);

//   return (
//     <div className="service-page-dept-container">
//       <div
//         className={`service-page-main-dots ${
//           eachItem.name === activeDepartment ? "service-page-main-dots-active" : ""
//         }`}
//         onClick={() => setActiveDepartment(eachItem.name)}
//         onMouseOver={() => setShowDept(true)}
//         onMouseOut={() => setShowDept(false)}
//       ></div>
//       {showDept && <div className="service-page-dept-name">{eachItem.name}</div>}
//     </div>  
//   );
// };

// export default ProductCategoryPage;



import React, { useEffect, useState, useRef } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Star from "../Star";
import Footer from "../Footer";
import MobileFooter from "../MobileFooter";
import CustomCursor from "../CustomCursor";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import data from '../../Data/ProductPage.json'

function ProductCategoryPage() {
  const params = useParams();
  const navigate = useNavigate();

  const [cursorVisible, setCursorVisible] = useState(false);
  const [productData, setProductData] = useState([]);
  const [activeDepartment, setActiveDepartment] = useState("");
  const [isDotClickScroll, setIsDotClickScroll] = useState(false);

  const sectionsRef = useRef({});
  const scrollTimeoutRef = useRef(null);

  // Simulate fetching data
  const FetchProducts = () => {
    try {
      setProductData(data.department || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  // Set initial active department from URL or default
  useEffect(() => {
    if (params.department) {
      setActiveDepartment(params.department);
    } else if (productData.length > 0) {
      setActiveDepartment(productData[0].name);
    }
  }, [productData, params.department]);
  // Scroll to department from URL or dot click
  useEffect(() => {
    if (productData.length && activeDepartment && !isDotClickScroll) {
      const section = document.getElementById(activeDepartment);
      if (section) {
        const yOffset = -80; // Adjust for navbar
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [activeDepartment, productData, isDotClickScroll]);
  // Intersection Observer for updating active department during scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!isDotClickScroll) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveDepartment(entry.target.id);
            }
          });
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );
    productData.forEach((item) => {
      const section = sectionsRef.current[item.name];
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [productData, isDotClickScroll]);

  // Handle dot click
  const handleDotClick = (departmentName) => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    setIsDotClickScroll(true);
    setActiveDepartment(departmentName);

    const section = document.getElementById(departmentName);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      scrollTimeoutRef.current = setTimeout(() => {
        setIsDotClickScroll(false);
      }, 1200);
    }
  };
  return (
    <div>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      <div className="cat-product_container">
        <div className="cat-product_section cat-p-section">
          <div className="cat-product_text">
            <span className="test-seclection-white">
              Stacia Corp Products
            </span>
            <Star />
          </div>
        </div>
      </div>
      {!productData.length ? (
        <div>Loading...</div>
      ) : (
        <div className="service-page-content-container">
          <div className="mobile-navigation-tabs">
            {productData.map((eachItem, i) => (
              <div
                key={i}
                onClick={() => handleDotClick(eachItem.name)}
                className={
                  activeDepartment === eachItem.name
                    ? "active-service-mob-tab"
                    : ""
                }
              >
                {eachItem.name}
              </div>
            ))}
          </div>
          <div className="service-page-main-dots-container">
            {productData.map((eachItem, i) => (
              <DepartmentDot
                key={i}
                eachItem={eachItem}
                activeDepartment={activeDepartment}
                setActiveDepartment={handleDotClick}
              />
            ))}
          </div>
          <div>
            {productData.map((eachItem, i) => (
              <div
                className="product-category-main-container"
                id={eachItem.name}
                key={i}
                ref={(el) => (sectionsRef.current[eachItem.name] = el)}
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
                                const deptKey = eachItem.name
                                  .split(" ")
                                  .join("-");
                                const catKey = eachCat.name
                                  .split(" ")
                                  .join("-");
                                const productKey = eachPro.title
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
                            const deptKey = eachItem.name.split(" ").join("-");
                            const catKey = eachCat.name.split(" ").join("-");
                            navigate(`/products/${deptKey}/${catKey}`);
                          }}
                        >
                          <span>Read More</span>
                          <IoIosArrowForward />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`product-category-img-container hover-component ${
                        cursorVisible ? "hide-default-cursor" : ""
                      }`}
                      onMouseEnter={() => setCursorVisible(true)}
                      onMouseLeave={() => setCursorVisible(false)}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        const deptKey = eachItem.name.split(" ").join("-");
                        const catKey = eachCat.name.split(" ").join("-");
                        navigate(`/products/${deptKey}/${catKey}`);
                      }}
                    >
                      <CustomCursor
                        isVisible={cursorVisible}
                        text={"View all Products"}
                      />
                      <img src={eachCat.imageUrl} alt="" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
      <MobileFooter />
    </div>
  );
}

const DepartmentDot = ({ eachItem, activeDepartment, setActiveDepartment }) => {
  const [showDept, setShowDept] = useState(false);

  useEffect(() => {
    if (eachItem.name === activeDepartment) {
      setShowDept(true);
      const timeoutId = setTimeout(() => {
        setShowDept(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    } else {
      setShowDept(false);
    }
  }, [activeDepartment, eachItem.name]);
  return (
    <div className="service-page-dept-container">
      <div
        className={`service-page-main-dots ${
          eachItem.name === activeDepartment ? "service-page-main-dots-active" : ""
        }`}
        onClick={() => setActiveDepartment(eachItem.name)}
        onMouseOver={() => setShowDept(true)}
        onMouseOut={() => setShowDept(false)}
      ></div>
      {showDept && <div className="service-page-dept-name">{eachItem.name}</div>}
    </div>  
  );
};

export default ProductCategoryPage;
