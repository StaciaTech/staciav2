
// // import React, { useEffect, useState, useRef } from "react";
// // import "../../styles/NavProductComp.css";
// // import {
// //   IoIosArrowForward,
// //   IoIosArrowUp,
// //   IoIosArrowDown,
// // } from "react-icons/io";
// // import { useNavigate } from "react-router-dom";
// // import casedoc from "../../Data/SingleCaseStudy.json";
// // import article from "../../Data/Articles.json";

// // function ResourceDropDown({ handleClose }) {
// //   const navigate = useNavigate();

// //   const categoryContainerRef = useRef(null); // Ref for the main category container
// //   const subCategoryContainerRef = useRef(null); // Ref for the sub-category container

// //   const [articlesData, setArticlesData] = useState([]);
// //   const [caseStudyData, setCaseStudyData] = useState([]);
// //   const [showSubCats, setShowSubCats] = useState(false);
// //   const [showProducts, setShowproducts] = useState(false);
// //   const [deptname, setDeptname] = useState();
// //   const [MainCatArr, setMaincatArr] = useState();
// //   const [mainCatName, setMainCatName] = useState();
// //   const [subCatsArr, setSubccatsArr] = useState();
// //   const [subCatName, setSubCatName] = useState();
// //   const [displayProducts, setDisplayProducts] = useState();
// //   const [finalProductArr, setFinalProductArr] = useState();
// //   const [showUpArrow, setShowUpArrow] = useState(false);
// //   const [showDownArrow, setShowDownArrow] = useState(false);
// //   const [showSubUpArrow, setShowSubUpArrow] = useState(false);
// //   const [showSubDownArrow, setShowSubDownArrow] = useState(false);

// //   const ResourceArr = [
// //     { name: "Article", cats: articlesData },
// //     { name: "Case Study", cats: caseStudyData },
// //   ];
// //   const DeptArr = ResourceArr?.map((item) => item.name);

// //   useEffect(() => {
// //     setCaseStudyData(casedoc?.singlecasestudy || []);
// //     setArticlesData(article.docs || []);

// //     const defaultDept = ResourceArr?.[0];
// //     const defaultCategory = defaultDept?.cats?.[0];
// //     const defaultProduct = defaultCategory?.data?.[0];

// //     if (defaultDept && defaultCategory && defaultProduct) {
// //       setDeptname(defaultDept.name);
// //       setMaincatArr(defaultDept.cats.map((cat) => cat.name));
// //       setMainCatName(defaultCategory.name);
// //       setFinalProductArr(defaultCategory.data);
// //       setSubccatsArr(defaultCategory.data.map((item) => item.title));
// //       setSubCatName(defaultProduct.title);
// //       setDisplayProducts(defaultProduct);
// //       setShowSubCats(true);
// //       setShowproducts(true);
// //     }

// //     document.body.classList.add("no-scroll");
// //     return () => {
// //       document.body.classList.remove("no-scroll");
// //     };
// //   }, [articlesData.length, caseStudyData.length]);

// //   const HandleDeptHovever = (DeptName) => {
// //     setDeptname(DeptName);
// //     const MainCatArrObj = ResourceArr?.find((item) => item.name === DeptName);
// //     if (MainCatArrObj) {
// //       const categories = MainCatArrObj.cats || [];
// //       const firstCategory = categories[0];
// //       const firstProduct = firstCategory?.data[0];

// //       setMaincatArr(MainCatArrObj.cats.map((item) => item.name));

// //       if (firstCategory) {
// //         setMainCatName(firstCategory.name);
// //         setFinalProductArr(firstCategory.data);
// //         const subCatTitles = firstCategory.data.map((item) => item.title);
// //         setSubccatsArr(subCatTitles);
// //         setShowSubCats(true);
// //         if (firstProduct) {
// //           setSubCatName(firstProduct.title);
// //           setDisplayProducts(firstProduct);
// //           setShowproducts(true);
// //         }
// //       }
// //     }
// //   };

// //   const HandleMainCatHover = (MainCat) => {
// //     const MainCatArrObj = ResourceArr?.find((item) => item.name === deptname);
// //     setMainCatName(MainCat);
// //     const subCatObj = MainCatArrObj?.cats?.find(
// //       (item) => item.name === MainCat
// //     );

// //     setFinalProductArr(subCatObj?.data);
// //     if (subCatObj) {
// //       const productTitles = subCatObj.data.map(
// //         (eachSubCat) => eachSubCat.title
// //       );
// //       setSubccatsArr(productTitles);
// //       const firstProduct = subCatObj.data?.[0];
// //       if (firstProduct) {
// //         setSubCatName(firstProduct.title);
// //         setDisplayProducts(firstProduct);
// //         setShowproducts(true);
// //       }
// //     }
// //     setShowSubCats(true);
// //   };

// //   const HandleSubCatHover = (SubCat) => {
// //     setSubCatName(SubCat);
// //     const ProductsFound = finalProductArr?.find(
// //       (item) => item.title === SubCat
// //     );
// //     setDisplayProducts(ProductsFound);
// //     setShowproducts(true);
// //   };

// //   const scrollUp = () => {
// //     if (categoryContainerRef.current) {
// //       const container = categoryContainerRef.current;
// //       const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
// //       container.scrollTop -= itemHeight;
// //     }
// //   };

// //   const scrollDown = () => {
// //     if (categoryContainerRef.current) {
// //       const container = categoryContainerRef.current;
// //       const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
// //       container.scrollTop += itemHeight;
// //     }
// //   };

// //   const scrollSubUp = () => {
// //     if (subCategoryContainerRef.current) {
// //       const container = subCategoryContainerRef.current;
// //       const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
// //       container.scrollTop -= itemHeight;
// //     }
// //   };

// //   const scrollSubDown = () => {
// //     if (subCategoryContainerRef.current) {
// //       const container = subCategoryContainerRef.current;
// //       const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
// //       container.scrollTop += itemHeight;
// //     }
// //   };

// //   const handleScroll = () => {
// //     if (categoryContainerRef.current) {
// //       const container = categoryContainerRef.current;
// //       const { scrollTop, scrollHeight, clientHeight } = container;
// //       const lastItem = container.lastChild;
// //       const lastItemOffset = lastItem
// //         ? lastItem.offsetTop + lastItem.offsetHeight
// //         : scrollHeight;
// //       setShowUpArrow(scrollTop > 0);
// //       setShowDownArrow(scrollTop + clientHeight < lastItemOffset);
// //     }
// //   };

// //   const handleSubScroll = () => {
// //     if (subCategoryContainerRef.current) {
// //       const container = subCategoryContainerRef.current;
// //       const { scrollTop, scrollHeight, clientHeight } = container;
// //       const lastItem = container.lastChild;
// //       const lastItemOffset = lastItem
// //         ? lastItem.offsetTop + lastItem.offsetHeight
// //         : scrollHeight;
// //       setShowSubUpArrow(scrollTop > 0);
// //       setShowSubDownArrow(scrollTop + clientHeight < lastItemOffset);
// //     }
// //   };

// //   function findProductPath(resourceData, productTitle) {
// //     for (let section of resourceData) {
// //       for (let category of section.cats) {
// //         for (let item of category.data) {
// //           if (item.title === productTitle) {
// //             return { section, category, item };
// //           }
// //         }
// //       }
// //     }
// //     return null;
// //   }

// //   function findCategoryPath(resourceData, categoryName) {
// //     for (let section of resourceData) {
// //       for (let category of section.cats) {
// //         if (category.name === categoryName) {
// //           return { section, category };
// //         }
// //       }
// //     }
// //     return null;
// //   }

// //   const productCategoryNavigator = (categoryName) => {
// //     const result = findCategoryPath(ResourceArr, categoryName);
// //     if (result) {
// //       const resSlug = result.section.name.toLowerCase().replace(/\s+/g, "-");
// //       const deptSlug = result.category.name.replace(/\s+/g, "-");
// //       navigate(`/${resSlug}/${deptSlug}`);
// //       handleClose();
// //     }
// //   };

// //   const singleProductNavigator = (productTitle) => {
// //     const result = findProductPath(ResourceArr, productTitle);
// //     if (result) {
// //       const resSlug = result.section.name.toLowerCase().replace(/\s+/g, "-");
// //       const deptSlug = result.category.name.replace(/\s+/g, "-");
// //       if (result.section.name === "Case Study") {
// //         navigate(`/case-study/single-caseStudy/${result.item.id || ""}`);
// //       } else {
// //         const titleSlug = result.item.title.replace(/\s+/g, "-");
// //         navigate(`/${resSlug}/${deptSlug}/${titleSlug}`);
// //       }
// //       handleClose();
// //     }
// //   };

// //   return (
// //     <div className="NavProductComp-container">
// //       <div className="navProComp-container">
// //         <div className="navProComp-dept-container">
// //           <div className="navprocomp-items-heading">Sections</div>
// //           <div className="navproComp-item-holder">
// //             <div className="navProComp-dot-container">
// //               {/* {DeptArr?.map((dot, i) => (
// //                 <div
// //                   key={i}
// //                   className={`navProComp-dot ${dot === deptname ? "navProComp-dot-active" : ""}`}
// //                 ></div>
// //               ))} */}
// //             </div>
// //             <div className="navProComp-mainCat-item-container">
// //               {DeptArr?.map((eachCat, i) => (
// //                 <div
// //                   key={i}
// //                   onMouseEnter={() => HandleDeptHovever(eachCat)}
// //                   onClick={() => {
// //                     navigate(`/${eachCat.toLowerCase().replace(/\s+/g, "-")}`);
// //                     handleClose();
// //                   }}
// //                   className="pointer"
// //                 >
// //                   <div
// //                     className={`navProComp-dept-item ${
// //                       eachCat === deptname ? "mainCat-active" : ""
// //                     }`}
// //                   >
// //                     {eachCat}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //         {MainCatArr?.length && (
// //           <div className="navProComp-mainCat-container">
// //             <div className="navprocomp-items-heading">Departments</div>
// //             <div className="navproComp-item-holder">
// //               <div className="navProComp-dot-container">
// //                 {MainCatArr?.map((dot, i) => (
// //                   <div
// //                     key={i}
// //                     className={`navProComp-dot ${
// //                       dot === mainCatName ? "navProComp-dot-active" : ""
// //                     }`}
// //                   ></div>
// //                 ))}
// //               </div>
// //               <div className="arrow-wrapper">
// //                               {showUpArrow && (
// //                                 <span
// //                                   onClick={scrollUp}
// //                                   className="arrow-up"
// //                                   aria-label="Scroll up"
// //                                 >
// //                                   <IoIosArrowUp />
// //                                 </span>
// //                               )}
// //                               {showDownArrow && (
// //                                 <span
// //                                   onClick={scrollDown}
// //                                   className="arrow-down"
// //                                   aria-label="Scroll down"
// //                                 >
// //                                   <IoIosArrowDown />
// //                                 </span>
// //                               )}
// //                             </div>
// //               <div className="navProComp-mainCat-item-container" 
// //               ref={categoryContainerRef}
// //               onScroll={handleScroll}>
// //                 {MainCatArr?.map((eachCat, i) => (
// //                   <div
// //                     key={i}
// //                     onMouseEnter={() => HandleMainCatHover(eachCat)}
// //                     onClick={() => {
// //                       window.scrollTo(0, 0);
// //                       productCategoryNavigator(eachCat);
// //                     }}
// //                     className="pointer"
// //                   >
// //                     <div
// //                       className={`navProComp-mainCat-item ${
// //                         eachCat === mainCatName ? "mainCat-active" : ""
// //                       }`}
// //                     >
// //                       {eachCat}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //         {showSubCats && subCatsArr?.length && (
// //           <div className="navProComp-subCat-container">
// //             <div className="navprocomp-items-heading">Resources</div>
// //             <div className="navproComp-item-holder">
// //               <div className="navProComp-dot-container">
// //                 {subCatsArr?.map((dot, i) => (
// //                   <div
// //                     key={i}
// //                     className={`navProComp-dot ${
// //                       dot === subCatName ? "navProComp-dot-active" : ""
// //                     }`}
// //                   ></div>
// //                 ))}
// //               </div>         
// //                <div className="arrow-wrapper">
// //                               {showSubUpArrow && (
// //                                 <span
// //                                   onClick={scrollSubUp}                    
// //                                   aria-label="Scroll sub up"
// //                                   className="arrow-up"
// //                                 >
// //                                   <IoIosArrowUp />
// //                                 </span>
// //                               )}
// //                               {showSubDownArrow && (
// //                                 <span
// //                                   onClick={scrollSubDown}                    
// //                                   aria-label="Scroll sub down"
// //                                   className="arrow-down"
// //                                 >
// //                                   <IoIosArrowDown />
// //                                 </span>
// //                               )}
// //                             </div>     
// //               <div className="navProComp-subCat-item-container"
// //               ref={subCategoryContainerRef}
// //               onScroll={handleSubScroll}>
// //                 {subCatsArr?.map((eachItem, i) => (
// //                   <div
// //                     key={i}
// //                     onMouseEnter={() => HandleSubCatHover(eachItem)}
// //                     onClick={() => {
// //                       window.scrollTo(0, 0);
// //                       singleProductNavigator(eachItem);
// //                     }}
// //                     className="pointer"
// //                   >
// //                     <div
// //                       className={`navProComp-mainCat-item ${
// //                         eachItem === subCatName ? "mainCat-active" : ""
// //                       }`}
// //                     >
// //                       {eachItem}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //         {showProducts && displayProducts && (
// //           <div className="navProComp-products-container">
// //             <div className="navProComp-products-holder">
// //               <div>
// //                 <div
// //                   onClick={() => {
// //                     window.scrollTo(0, 0);
// //                     singleProductNavigator(displayProducts.title);
// //                   }}
// //                   style={{ cursor: "pointer" }}
// //                 >
// //                   <div className="navProComp-products-img">
// //                     <img
// //                       src={
// //                         displayProducts.imageURL || displayProducts.mainImageUrl
// //                       }
// //                       alt={displayProducts.title}
// //                     />
// //                   </div>
// //                   <div className="navProComp-products-title">
// //                     {displayProducts.title}
// //                   </div>
// //                   <div className="navProComp-products-des">
// //                     {displayProducts.description}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div
// //               className="navProComp-products-more"
// //               onClick={() => {
// //                 window.scrollTo(0, 0);
// //                 singleProductNavigator(displayProducts.title);
// //               }}
// //             >
// //               <span>Know More</span>
// //               <IoIosArrowForward />
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default ResourceDropDown;



// // src/components/ResourceDropDown.jsx
// import React, { useEffect, useState, useRef } from "react";
// import { IoIosArrowForward, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import "../../styles/NavProductComp.css";
// import casedoc from "../../data/SingleCaseStudy.json"; // Case study JSON
// import article from "../../data/Articles.json"; // Article JSON (assumed structure)

// function ResourceDropDown({ handleClose }) {
//   const navigate = useNavigate();
//   const categoryContainerRef = useRef(null);
//   const subCategoryContainerRef = useRef(null);

//   // Consolidated state for dropdown data
//   const [dropdownState, setDropdownState] = useState({
//     deptName: "Article", // Default section
//     mainCatName: "",
//     subCatName: "",
//     mainCatArr: [],
//     subCatsArr: [],
//     finalProductArr: [],
//     displayProduct: null,
//   });

//   // Scroll arrow visibility states
//   const [scrollArrows, setScrollArrows] = useState({
//     showUpArrow: false,
//     showDownArrow: false,
//     showSubUpArrow: false,
//     showSubDownArrow: false,
//   });

//   // Resource data structure
//   const resourceArr = [
//     { name: "Article", cats: article?.docs || [] },
//     { name: "Case Study", cats: casedoc?.singlecasestudy || [] },
//   ];
//   const deptArr = resourceArr.map((item) => item.name);

//   // Initialize dropdown with default data
//   useEffect(() => {
//     const defaultDept = resourceArr[0]; // Article
//     const defaultCategory = defaultDept?.cats[0];
//     const defaultProduct = defaultCategory?.data[0];

//     if (defaultDept && defaultCategory && defaultProduct) {
//       setDropdownState({
//         deptName: defaultDept.name,
//         mainCatName: defaultCategory.name,
//         subCatName: defaultProduct.title,
//         mainCatArr: defaultDept.cats.map((cat) => cat.name),
//         subCatsArr: defaultCategory.data.map((item) => item.title),
//         finalProductArr: defaultCategory.data,
//         displayProduct: defaultProduct,
//       });
//     }

//     // Prevent body scroll when dropdown is open
//     document.body.classList.add("no-scroll");
//     return () => document.body.classList.remove("no-scroll");
//   }, []);

//   // Handle department selection
//   const handleDeptHover = (deptName) => {
//     const dept = resourceArr.find((item) => item.name === deptName);
//     if (!dept) return;

//     const firstCategory = dept.cats[0];
//     const firstProduct = firstCategory?.data[0];

//     setDropdownState((prev) => ({
//       ...prev,
//       deptName,
//       mainCatName: firstCategory?.name || "",
//       subCatName: firstProduct?.title || "",
//       mainCatArr: dept.cats.map((cat) => cat.name),
//       subCatsArr: firstCategory?.data.map((item) => item.title) || [],
//       finalProductArr: firstCategory?.data || [],
//       displayProduct: firstProduct || null,
//     }));
//   };

//   // Handle main category selection
//   const handleMainCatHover = (mainCat) => {
//     const dept = resourceArr.find((item) => item.name === dropdownState.deptName);
//     const category = dept?.cats.find((cat) => cat.name === mainCat);
//     if (!category) return;

//     const firstProduct = category.data[0];

//     setDropdownState((prev) => ({
//       ...prev,
//       mainCatName: mainCat,
//       subCatName: firstProduct?.title || "",
//       subCatsArr: category.data.map((item) => item.title),
//       finalProductArr: category.data,
//       displayProduct: firstProduct || null,
//     }));
//   };

//   // Handle sub-category (product) selection
//   const handleSubCatHover = (subCat) => {
//     const product = dropdownState.finalProductArr.find(
//       (item) => item.title === subCat
//     );
//     if (!product) return;

//     setDropdownState((prev) => ({
//       ...prev,
//       subCatName: subCat,
//       displayProduct: product,
//     }));
//   };

//   // Scroll handlers
//   const scrollUp = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollBy({ top: -itemHeight, behavior: "smooth" });
//     }
//   };

//   const scrollDown = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollBy({ top: itemHeight, behavior: "smooth" });
//     }
//   };

//   const scrollSubUp = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollBy({ top: -itemHeight, behavior: "smooth" });
//     }
//   };

//   const scrollSubDown = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollBy({ top: itemHeight, behavior: "smooth" });
//     }
//   };

//   // Scroll visibility handler (debounced for performance)
//   const handleScroll = () => {
//     if (categoryContainerRef.current) {
//       const { scrollTop, scrollHeight, clientHeight } = categoryContainerRef.current;
//       setScrollArrows((prev) => ({
//         ...prev,
//         showUpArrow: scrollTop > 0,
//         showDownArrow: scrollTop + clientHeight < scrollHeight,
//       }));
//     }
//   };

//   const handleSubScroll = () => {
//     if (subCategoryContainerRef.current) {
//       const { scrollTop, scrollHeight, clientHeight } = subCategoryContainerRef.current;
//       setScrollArrows((prev) => ({
//         ...prev,
//         showSubUpArrow: scrollTop > 0,
//         showSubDownArrow: scrollTop + clientHeight < scrollHeight,
//       }));
//     }
//   };

//   // Attach scroll listeners
//   useEffect(() => {
//     const categoryContainer = categoryContainerRef.current;
//     const subCategoryContainer = subCategoryContainerRef.current;

//     if (categoryContainer) {
//       categoryContainer.addEventListener("scroll", handleScroll);
//       handleScroll(); // Initial check
//     }
//     if (subCategoryContainer) {
//       subCategoryContainer.addEventListener("scroll", handleSubScroll);
//       handleSubScroll(); // Initial check
//     }

//     return () => {
//       if (categoryContainer) categoryContainer.removeEventListener("scroll", handleScroll);
//       if (subCategoryContainer) subCategoryContainer.removeEventListener("scroll", handleSubScroll);
//     };
//   }, []);

//   // Navigation helpers
//   const productCategoryNavigator = (categoryName) => {
//     const dept = resourceArr.find((item) => item.name === dropdownState.deptName);
//     const category = dept?.cats.find((cat) => cat.name === categoryName);
//     if (!category) return;

//     const sectionSlug = dept.name.toLowerCase().replace(/\s+/g, "-");
//     const categorySlug = category.name.toLowerCase().replace(/\s+/g, "-");
//     navigate(`/${sectionSlug}/${categorySlug}`);
//     handleClose();
//   };

//   const singleProductNavigator = (productTitle) => {
//     const dept = resourceArr.find((item) => item.name === dropdownState.deptName);
//     const category = dept?.cats.find((cat) => cat.name === dropdownState.mainCatName);
//     const product = category?.data.find((item) => item.title === productTitle);
//     if (!product) return;

//     const sectionSlug = dept.name.toLowerCase().replace(/\s+/g, "-");
//     const categorySlug = category.name.toLowerCase().replace(/\s+/g, "-");

//     if (dept.name === "Case Study") {
//       navigate(`/case-study/single-caseStudy/${product.id || ""}`);
//     } else {
//       const titleSlug = product.title.toLowerCase().replace(/\s+/g, "-");
//       navigate(`/${sectionSlug}/${categorySlug}/${titleSlug}`);
//     }
//     handleClose();
//   };

//   return (
//     <div className="NavProductComp-container">
//       <div className="navProComp-container">
//         {/* Sections (Departments) */}
//         <div className="navProComp-dept-container">
//           <div className="navprocomp-items-heading">Sections</div>
//           <div className="navproComp-item-holder">
//             <div className="navProComp-mainCat-item-container">
//               {deptArr.map((dept, i) => (
//                 <div
//                   key={i}
//                   onMouseEnter={() => handleDeptHover(dept)}
//                   onClick={() => {
//                     navigate(`/${dept.toLowerCase().replace(/\s+/g, "-")}`);
//                     handleClose();
//                   }}
//                   className="pointer"
//                 >
//                   <div
//                     className={`navProComp-dept-item ${dept === dropdownState.deptName ? "mainCat-active" : ""
//                       }`}
//                   >
//                     {dept}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Categories */}
//         {dropdownState.mainCatArr.length > 0 && (
//           <div className="navProComp-mainCat-container">
//             <div className="navprocomp-items-heading">Departments</div>
//             <div className="navproComp-item-holder">
//               <div className="navProComp-dot-container">
//                 {dropdownState.mainCatArr.map((cat, i) => (
//                   <div
//                     key={i}
//                     className={`navProComp-dot ${cat === dropdownState.mainCatName ? "navProComp-dot-active" : ""
//                       }`}
//                   />
//                 ))}
//               </div>
//               <div className="arrow-wrapper">
//                 {scrollArrows.showUpArrow && (
//                   <span
//                     onClick={scrollUp}
//                     className="arrow-up"
//                     aria-label="Scroll up"
//                   >
//                     <IoIosArrowUp />
//                   </span>
//                 )}
//                 {scrollArrows.showDownArrow && (
//                   <span
//                     onClick={scrollDown}
//                     className="arrow-down"
//                     aria-label="Scroll down"
//                   >
//                     <IoIosArrowDown />
//                   </span>
//                 )}
//               </div>
//               <div
//                 className="navProComp-mainCat-item-container"
//                 ref={categoryContainerRef}
//               >
//                 {dropdownState.mainCatArr.map((cat, i) => (
//                   <div
//                     key={i}
//                     onMouseEnter={() => handleMainCatHover(cat)}
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       productCategoryNavigator(cat);
//                     }}
//                     className="pointer"
//                   >
//                     <div
//                       className={`navProComp-mainCat-item ${cat === dropdownState.mainCatName ? "mainCat-active" : ""
//                         }`}
//                     >
//                       {cat}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Sub-categories (Resources) */}
//         {dropdownState.subCatsArr.length > 0 && (
//           <div className="navProComp-subCat-container">
//             <div className="navprocomp-items-heading">Resources</div>
//             <div className="navproComp-item-holder">
//               <div className="navProComp-dot-container">
//                 {dropdownState.subCatsArr.map((subCat, i) => (
//                   <div
//                     key={i}
//                     className={`navProComp-dot ${subCat === dropdownState.subCatName ? "navProComp-dot-active" : ""
//                       }`}
//                   />
//                 ))}
//               </div>
//               <div className="arrow-wrapper">
//                 {scrollArrows.showSubUpArrow && (
//                   <span
//                     onClick={scrollSubUp}
//                     className="arrow-up"
//                     aria-label="Scroll sub up"
//                   >
//                     <IoIosArrowUp />
//                   </span>
//                 )}
//                 {scrollArrows.showSubDownArrow && (
//                   <span
//                     onClick={scrollSubDown}
//                     className="arrow-down"
//                     aria-label="Scroll sub down"
//                   >
//                     <IoIosArrowDown />
//                   </span>
//                 )}
//               </div>
//               <div
//                 className="navProComp-subCat-item-container"
//                 ref={subCategoryContainerRef}
//               >
//                 {dropdownState.subCatsArr.map((subCat, i) => (
//                   <div
//                     key={i}
//                     onMouseEnter={() => handleSubCatHover(subCat)}
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       singleProductNavigator(subCat);
//                     }}
//                     className="pointer"
//                   >
//                     <div
//                       className={`navProComp-mainCat-item ${subCat === dropdownState.subCatName ? "mainCat-active" : ""
//                         }`}
//                     >
//                       {subCat}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Product Details */}
//         {dropdownState.displayProduct && (
//           <div className="navProComp-products-container">
//             <div className="navProComp-products-holder">
//               <div
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                   singleProductNavigator(dropdownState.displayProduct.title);
//                 }}
//                 style={{ cursor: "pointer" }}
//               >
//                 <div className="navProComp-products-img">
//                   <img
//                     src={dropdownState.displayProduct.imageURL}
//                     alt={dropdownState.displayProduct.title}
//                     onError={(e) => (e.target.src = "/assets/fallback-image.webp")} // Fallback image
//                   />
//                 </div>
//                 <div className="navProComp-products-title">
//                   {dropdownState.displayProduct.title}
//                 </div>
//                 <div className="navProComp-products-des">
//                   {dropdownState.displayProduct.description || "No description available."}
//                 </div>
//               </div>
//             </div>
//             <div
//               className="navProComp-products-more"
//               onClick={() => {
//                 window.scrollTo(0, 0);
//                 singleProductNavigator(dropdownState.displayProduct.title);
//               }}
//             >
//               <span>Know More</span>
//               <IoIosArrowForward />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ResourceDropDown;




// src/components/ResourceDropDown.jsx
// import React, { useEffect, useState, useRef } from "react";
// import { IoIosArrowForward, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import "../../styles/NavProductComp.css";
// import casedoc from "../../Data/SingleCaseStudy.json"; // Case study JSON
// import article from "../../Data/Articles.json"; // Article JSON

// function ResourceDropDown({ handleClose }) {
//   const navigate = useNavigate();
//   const categoryContainerRef = useRef(null);
//   const subCategoryContainerRef = useRef(null);

//   const [dropdownState, setDropdownState] = useState({
//     deptName: "Article",
//     mainCatName: "",
//     subCatName: "",
//     mainCatArr: [],
//     subCatsArr: [],
//     finalProductArr: [],
//     displayProduct: null,
//   });

//   const [scrollArrows, setScrollArrows] = useState({
//     showUpArrow: false,
//     showDownArrow: false,
//     showSubUpArrow: false,
//     showSubDownArrow: false,
//   });

//   // Resource data structure
//   const resourceArr = [
//     { name: "Article", cats: article?.docs || [] },
//     { name: "Case Study", cats: casedoc?.singlecasestudy || [] },
//   ];
//   const deptArr = resourceArr.map((item) => item.name);

//   // Initialize dropdown with default data
//   useEffect(() => {
//     const defaultDept = resourceArr[0]; // Article
//     if (!defaultDept) return;

//     // Deduplicate category names
//     const uniqueCategories = [...new Set(defaultDept.cats.map((cat) => cat.name))];
//     const defaultCategoryName = uniqueCategories[0];
//     const defaultCategoryData = defaultDept.cats
//       .filter((cat) => cat.name === defaultCategoryName)
//       .flatMap((cat) => cat.data);
//     const defaultProduct = defaultCategoryData[0];

//     if (defaultCategoryName && defaultProduct) {
//       setDropdownState({
//         deptName: defaultDept.name,
//         mainCatName: defaultCategoryName,
//         subCatName: defaultProduct.title,
//         mainCatArr: uniqueCategories,
//         subCatsArr: defaultCategoryData.map((item) => item.title),
//         finalProductArr: defaultCategoryData,
//         displayProduct: defaultProduct,
//       });
//     }

//     document.body.classList.add("no-scroll");
//     return () => document.body.classList.remove("no-scroll");
//   }, []);

//   // Handle department selection
//   const handleDeptHover = (deptName) => {
//     const dept = resourceArr.find((item) => item.name === deptName);
//     if (!dept) return;

//     // Deduplicate category names
//     const uniqueCategories = [...new Set(dept.cats.map((cat) => cat.name))];
//     const firstCategoryName = uniqueCategories[0];
//     const firstCategoryData = dept.cats
//       .filter((cat) => cat.name === firstCategoryName)
//       .flatMap((cat) => cat.data);
//     const firstProduct = firstCategoryData[0];

//     setDropdownState((prev) => ({
//       ...prev,
//       deptName,
//       mainCatName: firstCategoryName || "",
//       subCatName: firstProduct?.title || "",
//       mainCatArr: uniqueCategories,
//       subCatsArr: firstCategoryData.map((item) => item.title) || [],
//       finalProductArr: firstCategoryData || [],
//       displayProduct: firstProduct || null,
//     }));
//   };

//   // Handle main category selection
//   const handleMainCatHover = (mainCat) => {
//     const dept = resourceArr.find((item) => item.name === dropdownState.deptName);
//     const categoryData = dept?.cats
//       .filter((cat) => cat.name === mainCat)
//       .flatMap((cat) => cat.data);
//     if (!categoryData || categoryData.length === 0) return;

//     const firstProduct = categoryData[0];

//     setDropdownState((prev) => ({
//       ...prev,
//       mainCatName: mainCat,
//       subCatName: firstProduct?.title || "",
//       subCatsArr: categoryData.map((item) => item.title),
//       finalProductArr: categoryData,
//       displayProduct: firstProduct || null,
//     }));
//   };

//   // Handle sub-category (product) selection
//   const handleSubCatHover = (subCat) => {
//     const product = dropdownState.finalProductArr.find(
//       (item) => item.title === subCat
//     );
//     if (!product) return;

//     setDropdownState((prev) => ({
//       ...prev,
//       subCatName: subCat,
//       displayProduct: product,
//     }));
//   };

//   // Scroll handlers
//   const scrollUp = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollBy({ top: -itemHeight, behavior: "smooth" });
//     }
//   };

//   const scrollDown = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollBy({ top: itemHeight, behavior: "smooth" });
//     }
//   };

//   const scrollSubUp = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollBy({ top: -itemHeight, behavior: "smooth" });
//     }
//   };

//   const scrollSubDown = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollBy({ top: itemHeight, behavior: "smooth" });
//     }
//   };

//   // Scroll visibility handler
//   const handleScroll = () => {
//     if (categoryContainerRef.current) {
//       const { scrollTop, scrollHeight, clientHeight } = categoryContainerRef.current;
//       setScrollArrows((prev) => ({
//         ...prev,
//         showUpArrow: scrollTop > 0,
//         showDownArrow: scrollTop + clientHeight < scrollHeight,
//       }));
//     }
//   };

//   const handleSubScroll = () => {
//     if (subCategoryContainerRef.current) {
//       const { scrollTop, scrollHeight, clientHeight } = subCategoryContainerRef.current;
//       setScrollArrows((prev) => ({
//         ...prev,
//         showSubUpArrow: scrollTop > 0,
//         showSubDownArrow: scrollTop + clientHeight < scrollHeight,
//       }));
//     }
//   };

//   // Attach scroll listeners
//   useEffect(() => {
//     const categoryContainer = categoryContainerRef.current;
//     const subCategoryContainer = subCategoryContainerRef.current;

//     if (categoryContainer) {
//       categoryContainer.addEventListener("scroll", handleScroll);
//       handleScroll();
//     }
//     if (subCategoryContainer) {
//       subCategoryContainer.addEventListener("scroll", handleSubScroll);
//       handleSubScroll();
//     }

//     return () => {
//       if (categoryContainer) categoryContainer.removeEventListener("scroll", handleScroll);
//       if (subCategoryContainer) subCategoryContainer.removeEventListener("scroll", handleSubScroll);
//     };
//   }, []);

//   // Navigation helpers
//   const productCategoryNavigator = (categoryName) => {
//     const dept = resourceArr.find((item) => item.name === dropdownState.deptName);
//     const categoryExists = dept?.cats.some((cat) => cat.name === categoryName);
//     if (!categoryExists) return;

//     const sectionSlug = dept.name.toLowerCase().replace(/\s+/g, "-");
//     const categorySlug = categoryName.toLowerCase().replace(/\s+/g, "-");
//     navigate(`/${sectionSlug}/${categorySlug}`);
//     handleClose();
//   };

//   const singleProductNavigator = (productTitle) => {
//     const dept = resourceArr.find((item) => item.name === dropdownState.deptName);
//     const category = dept?.cats.find((cat) => cat.name === dropdownState.mainCatName);
//     const product = category?.data.find((item) => item.title === productTitle);
//     if (!product) return;

//     const sectionSlug = dept.name.toLowerCase().replace(/\s+/g, "-");
//     const categorySlug = category.name.toLowerCase().replace(/\s+/g, "-");

//     if (dept.name === "Case Study") {
//       navigate(`/case-study/single-caseStudy/${product.id || ""}`);
//     } else {
//       const titleSlug = product.title.toLowerCase().replace(/\s+/g, "-");
//       navigate(`/${sectionSlug}/${categorySlug}/${titleSlug}`);
//     }
//     handleClose();
//   };

//   return (
//     <div className="NavProductComp-container">
//       <div className="navProComp-container">
//         {/* Sections */}
//         <div className="navProComp-dept-container">
//           <div className="navprocomp-items-heading">Sections</div>
//           <div className="navproComp-item-holder">
//             <div className="navProComp-mainCat-item-container">
//               {deptArr.map((dept, i) => (
//                 <div
//                   key={i}
//                   onMouseEnter={() => handleDeptHover(dept)}
//                   onClick={() => {
//                     navigate(`/${dept.toLowerCase().replace(/\s+/g, "-")}`);
//                     handleClose();
//                   }}
//                   className="pointer"
//                 >
//                   <div
//                     className={`navProComp-dept-item ${
//                       dept === dropdownState.deptName ? "mainCat-active" : ""
//                     }`}
//                   >
//                     {dept}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Categories */}
//         {dropdownState.mainCatArr.length > 0 && (
//           <div className="navProComp-mainCat-container">
//             <div className="navprocomp-items-heading">Departments</div>
//             <div className="navproComp-item-holder">
//               <div className="navProComp-dot-container">
//                 {dropdownState.mainCatArr.map((cat, i) => (
//                   <div
//                     key={i}
//                     className={`navProComp-dot ${
//                       cat === dropdownState.mainCatName ? "navProComp-dot-active" : ""
//                     }`}
//                   />
//                 ))}
//               </div>
//               <div className="arrow-wrapper">
//                 {scrollArrows.showUpArrow && (
//                   <span
//                     onClick={scrollUp}
//                     className="arrow-up"
//                     aria-label="Scroll up"
//                   >
//                     <IoIosArrowUp />
//                   </span>
//                 )}
//                 {scrollArrows.showDownArrow && (
//                   <span
//                     onClick={scrollDown}
//                     className="arrow-down"
//                     aria-label="Scroll down"
//                   >
//                     <IoIosArrowDown />
//                   </span>
//                 )}
//               </div>
//               <div
//                 className="navProComp-mainCat-item-container"
//                 ref={categoryContainerRef}
//               >
//                 {dropdownState.mainCatArr.map((cat, i) => (
//                   <div
//                     key={i}
//                     onMouseEnter={() => handleMainCatHover(cat)}
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       productCategoryNavigator(cat);
//                     }}
//                     className="pointer"
//                   >
//                     <div
//                       className={`navProComp-mainCat-item ${
//                         cat === dropdownState.mainCatName ? "mainCat-active" : ""
//                       }`}
//                     >
//                       {cat}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Sub-categories (Resources) */}
//         {dropdownState.subCatsArr.length > 0 && (
//           <div className="navProComp-subCat-container">
//             <div className="navprocomp-items-heading">Resources</div>
//             <div className="navproComp-item-holder">
//               <div className="navProComp-dot-container">
//                 {dropdownState.subCatsArr.map((subCat, i) => (
//                   <div
//                     key={i}
//                     className={`navProComp-dot ${
//                       subCat === dropdownState.subCatName ? "navProComp-dot-active" : ""
//                     }`}
//                   />
//                 ))}
//               </div>
//               <div className="arrow-wrapper">
//                 {scrollArrows.showSubUpArrow && (
//                   <span
//                     onClick={scrollSubUp}
//                     className="arrow-up"
//                     aria-label="Scroll sub up"
//                   >
//                     <IoIosArrowUp />
//                   </span>
//                 )}
//                 {scrollArrows.showSubDownArrow && (
//                   <span
//                     onClick={scrollSubDown}
//                     className="arrow-down"
//                     aria-label="Scroll sub down"
//                   >
//                     <IoIosArrowDown />
//                   </span>
//                 )}
//               </div>
//               <div
//                 className="navProComp-subCat-item-container"
//                 ref={subCategoryContainerRef}
//               >
//                 {dropdownState.subCatsArr.map((subCat, i) => (
//                   <div
//                     key={i}
//                     onMouseEnter={() => handleSubCatHover(subCat)}
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       singleProductNavigator(subCat);
//                     }}
//                     className="pointer"
//                   >
//                     <div
//                       className={`navProComp-mainCat-item ${
//                         subCat === dropdownState.subCatName ? "mainCat-active" : ""
//                       }`}
//                     >
//                       {subCat}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Product Details */}
//         {dropdownState.displayProduct && (
//           <div className="navProComp-products-container">
//             <div className="navProComp-products-holder">
//               <div
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                   singleProductNavigator(dropdownState.displayProduct.title);
//                 }}
//                 style={{ cursor: "pointer" }}
//               >
//                 <div className="navProComp-products-img">
//                   <img
//                     src={dropdownState.displayProduct.imageURL}
//                     alt={dropdownState.displayProduct.title}
//                     onError={(e) => (e.target.src = "/assets/fallback-image.webp")}
//                   />
//                 </div>
//                 <div className="navProComp-products-title">
//                   {dropdownState.displayProduct.title}
//                 </div>
//                 {/* <div className="navProComp-products-des">
//                   {dropdownState.displayProduct.description || "No description available."}
//                 </div> */}
//               </div>
//             </div>
//             <div
//               className="navProComp-products-more"
//               onClick={() => {
//                 window.scrollTo(0, 0);
//                 singleProductNavigator(dropdownState.displayProduct.title);
//               }}
//             >
//               <span>Know More</span>
//               <IoIosArrowForward />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ResourceDropDown;




// import React, { useEffect, useState, useRef } from "react";
// import { IoIosArrowForward, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import "../../styles/NavProductComp.css";
// import casedoc from "../../Data/SingleCaseStudy.json"; // Case study JSON
// import article from "../../Data/SingleArticle.json"; // Article JSON

// function ResourceDropDown({ handleClose }) {
//   const navigate = useNavigate();
//   const categoryContainerRef = useRef(null);
//   const subCategoryContainerRef = useRef(null);

//   const [dropdownState, setDropdownState] = useState({
//     deptName: "Article",
//     mainCatName: "",
//     subCatName: "",
//     mainCatArr: [],
//     subCatsArr: [],
//     finalProductArr: [],
//     displayProduct: null,
//   });

//   const [scrollArrows, setScrollArrows] = useState({
//     showUpArrow: false,
//     showDownArrow: false,
//     showSubUpArrow: false,
//     showSubDownArrow: false,
//   });

//   // Resource data structure
//   const resourceArr = [
//     { name: "Article", cats: article?.articles || [] },
//     { name: "Case Study", cats: casedoc?.singlecasestudy || [] },
//   ];
//   const deptArr = resourceArr.map((item) => item.name);

//   // Initialize dropdown with default data
//   useEffect(() => {
//     const defaultDept = resourceArr.find((dept) => dept.name === "Article");
//     if (!defaultDept || !defaultDept.cats.length) return;

//     // Deduplicate category names based on department (for articles) or name (for case studies)
//     const uniqueCategories = [
//       ...new Set(
//         defaultDept.cats.map((cat) =>
//           defaultDept.name === "Article" ? cat.department : cat.name
//         )
//       ),
//     ];
//     const defaultCategoryName = uniqueCategories[0];
//     const defaultCategoryData = defaultDept.cats.filter(
//       (cat) =>
//         (defaultDept.name === "Article" ? cat.department : cat.name) ===
//         defaultCategoryName
//     );
//     const defaultProduct =
//       defaultDept.name === "Article"
//         ? defaultCategoryData[0]
//         : defaultCategoryData[0]?.data[0];

//     if (defaultCategoryName && defaultProduct) {
//       setDropdownState({
//         deptName: defaultDept.name,
//         mainCatName: defaultCategoryName,
//         subCatName: defaultProduct.title,
//         mainCatArr: uniqueCategories,
//         subCatsArr: defaultCategoryData
//           .flatMap((cat) => (defaultDept.name === "Article" ? [cat] : cat.data))
//           .map((item) => item.title),
//         finalProductArr: defaultCategoryData.flatMap((cat) =>
//           defaultDept.name === "Article" ? [cat] : cat.data
//         ),
//         displayProduct: defaultProduct,
//       });
//     }

//     document.body.classList.add("no-scroll");
//     return () => document.body.classList.remove("no-scroll");
//   }, []);

//   // Handle department selection
//   const handleDeptHover = (deptName) => {
//     const dept = resourceArr.find((item) => item.name === deptName);
//     if (!dept || !dept.cats.length) return;

//     // Deduplicate category names
//     const uniqueCategories = [
//       ...new Set(
//         dept.cats.map((cat) => (dept.name === "Article" ? cat.department : cat.name))
//       ),
//     ];
//     const firstCategoryName = uniqueCategories[0];
//     const firstCategoryData = dept.cats.filter(
//       (cat) =>
//         (dept.name === "Article" ? cat.department : cat.name) === firstCategoryName
//     );
//     const firstProduct =
//       dept.name === "Article"
//         ? firstCategoryData[0]
//         : firstCategoryData[0]?.data[0];

//     setDropdownState((prev) => ({
//       ...prev,
//       deptName,
//       mainCatName: firstCategoryName || "",
//       subCatName: firstProduct?.title || "",
//       mainCatArr: uniqueCategories,
//       subCatsArr: firstCategoryData
//         .flatMap((cat) => (dept.name === "Article" ? [cat] : cat.data))
//         .map((item) => item.title),
//       finalProductArr: firstCategoryData.flatMap((cat) =>
//         dept.name === "Article" ? [cat] : cat.data
//       ),
//       displayProduct: firstProduct || null,
//     }));
//   };

//   // Handle main category selection
//   const handleMainCatHover = (mainCat) => {
//     const dept = resourceArr.find((item) => item.name === dropdownState.deptName);
//     const categoryData = dept?.cats.filter(
//       (cat) =>
//         (dept.name === "Article" ? cat.department : cat.name) === mainCat
//     );
//     if (!categoryData || categoryData.length === 0) return;

//     const firstProduct =
//       dept.name === "Article" ? categoryData[0] : categoryData[0]?.data[0];

//     setDropdownState((prev) => ({
//       ...prev,
//       mainCatName: mainCat,
//       subCatName: firstProduct?.title || "",
//       subCatsArr: categoryData
//         .flatMap((cat) => (dept.name === "Article" ? [cat] : cat.data))
//         .map((item) => item.title),
//       finalProductArr: categoryData.flatMap((cat) =>
//         dept.name === "Article" ? [cat] : cat.data
//       ),
//       displayProduct: firstProduct || null,
//     }));
//   };

//   // Handle sub-category (product) selection
//   const handleSubCatHover = (subCat) => {
//     const product = dropdownState.finalProductArr.find(
//       (item) => item.title === subCat
//     );
//     if (!product) return;

//     setDropdownState((prev) => ({
//       ...prev,
//       subCatName: subCat,
//       displayProduct: product,
//     }));
//   };

//   // Scroll handlers
//   const scrollUp = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollBy({ top: -itemHeight, behavior: "smooth" });
//     }
//   };

//   const scrollDown = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollBy({ top: itemHeight, behavior: "smooth" });
//     }
//   };

//   const scrollSubUp = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollBy({ top: -itemHeight, behavior: "smooth" });
//     }
//   };

//   const scrollSubDown = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollBy({ top: itemHeight, behavior: "smooth" });
//     }
//   };

//   // Scroll visibility handler
//   const handleScroll = () => {
//     if (categoryContainerRef.current) {
//       const { scrollTop, scrollHeight, clientHeight } = categoryContainerRef.current;
//       setScrollArrows((prev) => ({
//         ...prev,
//         showUpArrow: scrollTop > 0,
//         showDownArrow: scrollTop + clientHeight < scrollHeight,
//       }));
//     }
//   };

//   const handleSubScroll = () => {
//     if (subCategoryContainerRef.current) {
//       const { scrollTop, scrollHeight, clientHeight } = subCategoryContainerRef.current;
//       setScrollArrows((prev) => ({
//         ...prev,
//         showSubUpArrow: scrollTop > 0,
//         showSubDownArrow: scrollTop + clientHeight < scrollHeight,
//       }));
//     }
//   };

//   // Attach scroll listeners
//   useEffect(() => {
//     const categoryContainer = categoryContainerRef.current;
//     const subCategoryContainer = subCategoryContainerRef.current;

//     if (categoryContainer) {
//       categoryContainer.addEventListener("scroll", handleScroll);
//       handleScroll();
//     }
//     if (subCategoryContainer) {
//       subCategoryContainer.addEventListener("scroll", handleSubScroll);
//       handleSubScroll();
//     }

//     return () => {
//       if (categoryContainer) categoryContainer.removeEventListener("scroll", handleScroll);
//       if (subCategoryContainer) subCategoryContainer.removeEventListener("scroll", handleSubScroll);
//     };
//   }, [dropdownState.mainCatArr, dropdownState.subCatsArr]);

//   // Navigation helpers
//   const productCategoryNavigator = (categoryName) => {
//     const dept = resourceArr.find((item) => item.name === dropdownState.deptName);
//     const categoryExists = dept?.cats.some(
//       (cat) =>
//         (dept.name === "Article" ? cat.department : cat.name) === categoryName
//     );
//     if (!categoryExists) return;

//     const sectionSlug = dept.name.toLowerCase().replace(/\s+/g, "-");
//     const categorySlug = categoryName.toLowerCase().replace(/\s+/g, "-");
//     navigate(`/${sectionSlug}/${categorySlug}`);
//     handleClose();
//   };

//   const singleProductNavigator = (productTitle) => {
//     const dept = resourceArr.find((item) => item.name === dropdownState.deptName);
//     const category = dept?.cats.find(
//       (cat) =>
//         (dept.name === "Article" ? cat.department : cat.name) ===
//         dropdownState.mainCatName
//     );
//     const product =
//       dept.name === "Article"
//         ? category
//         : category?.data.find((item) => item.title === productTitle);
//     if (!product) return;

//     const sectionSlug = dept.name.toLowerCase().replace(/\s+/g, "-");
//     const categorySlug = dropdownState.mainCatName.toLowerCase().replace(/\s+/g, "-");

//     if (dept.name === "Case Study") {
//       navigate(`/case-study/single-caseStudy/${product.id || ""}`);
//     } else {
//       const titleSlug = product.title.toLowerCase().replace(/\s+/g, "-");
//       navigate(`/${sectionSlug}/${categorySlug}/${titleSlug}`);
//     }
//     handleClose();
//   };

//   return (
//     <div className="NavProductComp-container">
//       <div className="navProComp-container">
//         {/* Sections */}
//         <div className="navProComp-dept-container">
//           <div className="navprocomp-items-heading">Sections</div>
//           <div className="navproComp-item-holder">
//             <div className="navProComp-mainCat-item-container">
//               {deptArr.map((dept, i) => (
//                 <div
//                   key={i}
//                   onMouseEnter={() => handleDeptHover(dept)}
//                   onClick={() => {
//                     navigate(`/${dept.toLowerCase().replace(/\s+/g, "-")}`);
//                     handleClose();
//                   }}
//                   className="pointer"
//                 >
//                   <div
//                     className={`navProComp-dept-item ${dept === dropdownState.deptName ? "mainCat-active" : ""
//                       }`}
//                   >
//                     {dept}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Categories */}
//         {dropdownState.mainCatArr.length > 0 && (
//           <div className="navProComp-mainCat-container">
//             <div className="navprocomp-items-heading">Departments</div>
//             <div className="navproComp-item-holder">
//               <div className="navProComp-dot-container">
//                 {dropdownState.mainCatArr.map((cat, i) => (
//                   <div
//                     key={i}
//                     className={`navProComp-dot ${cat === dropdownState.mainCatName ? "navProComp-dot-active" : ""
//                       }`}
//                   />
//                 ))}
//               </div>
//               <div className="arrow-wrapper">
//                 {scrollArrows.showUpArrow && (
//                   <span
//                     onClick={scrollUp}
//                     className="arrow-up"
//                     aria-label="Scroll up"
//                   >
//                     <IoIosArrowUp />
//                   </span>
//                 )}
//                 {scrollArrows.showDownArrow && (
//                   <span
//                     onClick={scrollDown}
//                     className="arrow-down"
//                     aria-label="Scroll down"
//                   >
//                     <IoIosArrowDown />
//                   </span>
//                 )}
//               </div>
//               <div
//                 className="navProComp-mainCat-item-container"
//                 ref={categoryContainerRef}
//               >
//                 {dropdownState.mainCatArr.map((cat, i) => (
//                   <div
//                     key={i}
//                     onMouseEnter={() => handleMainCatHover(cat)}
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       productCategoryNavigator(cat);
//                     }}
//                     className="pointer"
//                   >
//                     <div
//                       className={`navProComp-mainCat-item ${cat === dropdownState.mainCatName ? "mainCat-active" : ""
//                         }`}
//                     >
//                       {cat}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Sub-categories (Resources) */}
//         {dropdownState.subCatsArr.length > 0 && (
//           <div className="navProComp-subCat-container">
//             <div className="navprocomp-items-heading">Resources</div>
//             <div className="navproComp-item-holder">
//               <div className="navProComp-dot-container">
//                 {dropdownState.subCatsArr.map((subCat, i) => (
//                   <div
//                     key={i}
//                     className={`navProComp-dot ${subCat === dropdownState.subCatName ? "navProComp-dot-active" : ""
//                       }`}
//                   />
//                 ))}
//               </div>
//               <div className="arrow-wrapper">
//                 {scrollArrows.showSubUpArrow && (
//                   <span
//                     onClick={scrollSubUp}
//                     className="arrow-up"
//                     aria-label="Scroll sub up"
//                   >
//                     <IoIosArrowUp />
//                   </span>
//                 )}
//                 {scrollArrows.showSubDownArrow && (
//                   <span
//                     onClick={scrollSubDown}
//                     className="arrow-down"
//                     aria-label="Scroll sub down"
//                   >
//                     <IoIosArrowDown />
//                   </span>
//                 )}
//               </div>
//               <div
//                 className="navProComp-subCat-item-container"
//                 ref={subCategoryContainerRef}
//               >
//                 {dropdownState.subCatsArr.map((subCat, i) => (
//                   <div
//                     key={i}
//                     onMouseEnter={() => handleSubCatHover(subCat)}
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       singleProductNavigator(subCat);
//                     }}
//                     className="pointer"
//                   >
//                     <div
//                       className={`navProComp-mainCat-item ${subCat === dropdownState.subCatName ? "mainCat-active" : ""
//                         }`}
//                     >
//                       {subCat}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Product Details */}
//         {dropdownState.displayProduct && (
//           <div className="navProComp-products-container">
//             <div className="navProComp-products-holder">
//               <div
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                   singleProductNavigator(dropdownState.displayProduct.title);
//                 }}
//                 style={{ cursor: "pointer" }}
//               >
//                 <div className="navProComp-products-img">
//                   <img
//                     src={
//                       dropdownState.deptName === "Article"
//                         ? dropdownState.displayProduct.mainImageUrl
//                         : dropdownState.displayProduct.imageURL
//                     }
//                     alt={dropdownState.displayProduct.title}
//                     onError={(e) => (e.target.src = "/assets/fallback-image.webp")}
//                   />
//                 </div>
//                 <div className="navProComp-products-title">
//                   {dropdownState.displayProduct.title}
//                 </div>
//               </div>
//             </div>
//             <div
//               className="navProComp-products-more"
//               onClick={() => {
//                 window.scrollTo(0, 0);
//                 singleProductNavigator(dropdownState.displayProduct.title);
//               }}
//             >
//               <span>Know More</span>
//               <IoIosArrowForward />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ResourceDropDown;



//pk arrow concept


import React, { useEffect, useState, useRef } from "react";
import {
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../../styles/NavProductComp.css";
import casedoc from "../../Data/SingleCaseStudy.json"; // Case study JSON
import article from "../../Data/SingleArticle.json"; // Article JSON

function ResourceDropDown({ handleClose }) {
  const navigate = useNavigate();
  const categoryContainerRef = useRef(null);
  const subCategoryContainerRef = useRef(null);

  const [dropdownState, setDropdownState] = useState({
    deptName: "Article",
    mainCatName: "",
    subCatName: "",
    mainCatArr: [],
    subCatsArr: [],
    finalProductArr: [],
    displayProduct: null,
  });

  const [scrollArrows, setScrollArrows] = useState({
    canScrollCatUp: false, // For Departments up arrow
    canScrollCatDown: false, // For Departments down arrow
    canScrollSubUp: false, // For Resources up arrow
    canScrollSubDown: false, // For Resources down arrow
  });

  // Resource data structure
  const resourceArr = [
    { name: "Article", cats: article?.articles || [] },
    { name: "Case Study", cats: casedoc?.singlecasestudy || [] },
  ];
  const deptArr = resourceArr.map((item) => item.name);

  // Initialize dropdown with default data
  useEffect(() => {
    const defaultDept = resourceArr.find((dept) => dept.name === "Article");
    if (!defaultDept || !defaultDept.cats.length) return;

    // Deduplicate category names based on department (for articles) or name (for case studies)
    const uniqueCategories = [
      ...new Set(
        defaultDept.cats.map((cat) =>
          defaultDept.name === "Article" ? cat.department : cat.name
        )
      ),
    ];
    const defaultCategoryName = uniqueCategories[0];
    const defaultCategoryData = defaultDept.cats.filter(
      (cat) =>
        (defaultDept.name === "Article" ? cat.department : cat.name) ===
        defaultCategoryName
    );
    const defaultProduct =
      defaultDept.name === "Article"
        ? defaultCategoryData[0]
        : defaultCategoryData[0]?.data[0];

    if (defaultCategoryName && defaultProduct) {
      setDropdownState({
        deptName: defaultDept.name,
        mainCatName: defaultCategoryName,
        subCatName: defaultProduct.title,
        mainCatArr: uniqueCategories,
        subCatsArr: defaultCategoryData
          .flatMap((cat) => (defaultDept.name === "Article" ? [cat] : cat.data))
          .map((item) => item.title),
        finalProductArr: defaultCategoryData.flatMap((cat) =>
          defaultDept.name === "Article" ? [cat] : cat.data
        ),
        displayProduct: defaultProduct,
      });
    }

    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  // Check scrollability for Departments whenever mainCatArr changes
  useEffect(() => {
    const checkCatScrollability = () => {
      if (categoryContainerRef.current) {
        const container = categoryContainerRef.current;
        const { scrollHeight, clientHeight } = container;
        setScrollArrows((prev) => ({
          ...prev,
          canScrollCatDown: scrollHeight > clientHeight,
          canScrollCatUp: container.scrollTop > 0,
        }));
      }
    };

    const timer = setTimeout(checkCatScrollability, 0);
    return () => clearTimeout(timer);
  }, [dropdownState.mainCatArr]);

  // Check scrollability for Resources whenever subCatsArr changes
  useEffect(() => {
    const checkSubScrollability = () => {
      if (subCategoryContainerRef.current) {
        const container = subCategoryContainerRef.current;
        const { scrollHeight, clientHeight } = container;
        setScrollArrows((prev) => ({
          ...prev,
          canScrollSubDown: scrollHeight > clientHeight,
          canScrollSubUp: container.scrollTop > 0,
        }));
      }
    };

    const timer = setTimeout(checkSubScrollability, 0);
    return () => clearTimeout(timer);
  }, [dropdownState.subCatsArr]);

  // Handle department selection
  const handleDeptHover = (deptName) => {
    const dept = resourceArr.find((item) => item.name === deptName);
    if (!dept || !dept.cats.length) return;

    // Deduplicate category names
    const uniqueCategories = [
      ...new Set(
        dept.cats.map((cat) =>
          dept.name === "Article" ? cat.department : cat.name
        )
      ),
    ];
    const firstCategoryName = uniqueCategories[0];
    const firstCategoryData = dept.cats.filter(
      (cat) =>
        (dept.name === "Article" ? cat.department : cat.name) ===
        firstCategoryName
    );
    const firstProduct =
      dept.name === "Article"
        ? firstCategoryData[0]
        : firstCategoryData[0]?.data[0];

    setDropdownState((prev) => ({
      ...prev,
      deptName,
      mainCatName: firstCategoryName || "",
      subCatName: firstProduct?.title || "",
      mainCatArr: uniqueCategories,
      subCatsArr: firstCategoryData
        .flatMap((cat) => (dept.name === "Article" ? [cat] : cat.data))
        .map((item) => item.title),
      finalProductArr: firstCategoryData.flatMap((cat) =>
        dept.name === "Article" ? [cat] : cat.data
      ),
      displayProduct: firstProduct || null,
    }));
  };

  // Handle main category selection
  const handleMainCatHover = (mainCat) => {
    const dept = resourceArr.find(
      (item) => item.name === dropdownState.deptName
    );
    const categoryData = dept?.cats.filter(
      (cat) => (dept.name === "Article" ? cat.department : cat.name) === mainCat
    );
    if (!categoryData || categoryData.length === 0) return;

    const firstProduct =
      dept.name === "Article" ? categoryData[0] : categoryData[0]?.data[0];

    setDropdownState((prev) => ({
      ...prev,
      mainCatName: mainCat,
      subCatName: firstProduct?.title || "",
      subCatsArr: categoryData
        .flatMap((cat) => (dept.name === "Article" ? [cat] : cat.data))
        .map((item) => item.title),
      finalProductArr: categoryData.flatMap((cat) =>
        dept.name === "Article" ? [cat] : cat.data
      ),
      displayProduct: firstProduct || null,
    }));
  };

  // Handle sub-category (product) selection
  const handleSubCatHover = (subCat) => {
    const product = dropdownState.finalProductArr.find(
      (item) => item.title === subCat
    );
    if (!product) return;

    setDropdownState((prev) => ({
      ...prev,
      subCatName: subCat,
      displayProduct: product,
    }));
  };

  // Scroll handlers
  const scrollUp = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40;
      container.scrollBy({ top: -itemHeight, behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40;
      container.scrollBy({ top: itemHeight, behavior: "smooth" });
    }
  };

  const scrollSubUp = () => {
    if (subCategoryContainerRef.current) {
      const container = subCategoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40;
      container.scrollBy({ top: -itemHeight, behavior: "smooth" });
    }
  };

  const scrollSubDown = () => {
    if (subCategoryContainerRef.current) {
      const container = subCategoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40;
      container.scrollBy({ top: itemHeight, behavior: "smooth" });
    }
  };

  // Scroll visibility handler
  const handleScroll = () => {
    if (categoryContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        categoryContainerRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      setScrollArrows((prev) => ({
        ...prev,
        canScrollCatUp: scrollTop > 0,
        canScrollCatDown: !isAtBottom,
      }));
      console.log(
        "Cat Scroll - scrollTop:",
        scrollTop,
        "clientHeight:",
        clientHeight,
        "scrollHeight:",
        scrollHeight,
        "canScrollCatDown:",
        !isAtBottom
      );
    }
  };

  const handleSubScroll = () => {
    if (subCategoryContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        subCategoryContainerRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      setScrollArrows((prev) => ({
        ...prev,
        canScrollSubUp: scrollTop > 0,
        canScrollSubDown: !isAtBottom,
      }));
      console.log(
        "Sub Scroll - scrollTop:",
        scrollTop,
        "clientHeight:",
        clientHeight,
        "scrollHeight:",
        scrollHeight,
        "canScrollSubDown:",
        !isAtBottom
      );
    }
  };

  // Attach scroll listeners
  useEffect(() => {
    const categoryContainer = categoryContainerRef.current;
    const subCategoryContainer = subCategoryContainerRef.current;

    if (categoryContainer) {
      categoryContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    if (subCategoryContainer) {
      subCategoryContainer.addEventListener("scroll", handleSubScroll);
      handleSubScroll();
    }

    return () => {
      if (categoryContainer)
        categoryContainer.removeEventListener("scroll", handleScroll);
      if (subCategoryContainer)
        subCategoryContainer.removeEventListener("scroll", handleSubScroll);
    };
  }, [dropdownState.mainCatArr, dropdownState.subCatsArr]);

  // Navigation helpers
  const productCategoryNavigator = (categoryName) => {
    const dept = resourceArr.find(
      (item) => item.name === dropdownState.deptName
    );
    const categoryExists = dept?.cats.some(
      (cat) =>
        (dept.name === "Article" ? cat.department : cat.name) === categoryName
    );
    if (!categoryExists) return;

    const sectionSlug = dept.name.toLowerCase().replace(/\s+/g, "-");
    const categorySlug = categoryName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${sectionSlug}/${categorySlug}`);
    handleClose();
  };

  const singleProductNavigator = (productTitle) => {
    const dept = resourceArr.find(
      (item) => item.name === dropdownState.deptName
    );
    const category = dept?.cats.find(
      (cat) =>
        (dept.name === "Article" ? cat.department : cat.name) ===
        dropdownState.mainCatName
    );
    const product =
      dept.name === "Article"
        ? category
        : category?.data.find((item) => item.title === productTitle);
    if (!product) return;

    const sectionSlug = dept.name.toLowerCase().replace(/\s+/g, "-");
    const categorySlug = dropdownState.mainCatName
      .toLowerCase()
      .replace(/\s+/g, "-");

    if (dept.name === "Case Study") {
      navigate(`/case-study/single-caseStudy/${product.id || ""}`);
    } else {
      const titleSlug = product.title.toLowerCase().replace(/\s+/g, "-");
      navigate(`/${sectionSlug}/${categorySlug}/${titleSlug}`);
    }
    handleClose();
  };

  return (
    <div className="NavProductComp-container">
      <div className="navProComp-container">
        {/* Sections */}
        <div className="navProComp-dept-container">
          <div className="navprocomp-items-heading">Sections</div>
          <div className="navproComp-item-holder">
            <div className="navProComp-mainCat-item-container">
              {deptArr.map((dept, i) => (
                <div
                  key={i}
                  onMouseEnter={() => handleDeptHover(dept)}
                  onClick={() => {
                    navigate(`/${dept.toLowerCase().replace(/\s+/g, "-")}`);
                    handleClose();
                  }}
                  className="pointer"
                >
                  <div
                    className={`navProComp-dept-item ${
                      dept === dropdownState.deptName ? "mainCat-active" : ""
                    }`}
                  >
                    {dept}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories (Departments) */}
        {dropdownState.mainCatArr.length > 0 && (
          <div className="navProComp-mainCat-container">
            <div className="navprocomp-items-heading">Departments</div>
            <div className="navproComp-item-holder">
              <div className="navProComp-dot-container">
                {dropdownState.mainCatArr.map((cat, i) => (
                  <div
                    key={i}
                    className={`navProComp-dot ${
                      cat === dropdownState.mainCatName
                        ? "navProComp-dot-active"
                        : ""
                    }`}
                  />
                ))}
              </div>
              {dropdownState.mainCatArr.length > 5 && (
                <div className="arrow-wrapper">
                  {scrollArrows.canScrollCatUp && (
                    <span
                      onClick={scrollUp}
                      className="arrow-up"
                      aria-label="Scroll up"
                    >
                      <IoIosArrowUp />
                    </span>
                  )}
                  {scrollArrows.canScrollCatDown && (
                    <span
                      onClick={scrollDown}
                      className="arrow-down"
                      aria-label="Scroll down"
                    >
                      <IoIosArrowDown />
                    </span>
                  )}
                </div>
              )}
              <div
                className="navProComp-mainCat-item-container"
                ref={categoryContainerRef}
              >
                {dropdownState.mainCatArr.map((cat, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => handleMainCatHover(cat)}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      productCategoryNavigator(cat);
                    }}
                    className="pointer"
                  >
                    <div
                      className={`navProComp-mainCat-item ${
                        cat === dropdownState.mainCatName
                          ? "mainCat-active"
                          : ""
                      }`}
                    >
                      {cat}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Sub-categories (Resources) */}
        {dropdownState.subCatsArr.length > 0 && (
          <div className="navProComp-subCat-container">
            <div className="navprocomp-items-heading">Resources</div>
            <div className="navproComp-item-holder">
              <div className="navProComp-dot-container">
                {dropdownState.subCatsArr.map((subCat, i) => (
                  <div
                    key={i}
                    className={`navProComp-dot ${
                      subCat === dropdownState.subCatName
                        ? "navProComp-dot-active"
                        : ""
                    }`}
                  />
                ))}
              </div>
              {dropdownState.subCatsArr.length > 5 && (
                <div className="arrow-wrapper">
                  {scrollArrows.canScrollSubUp && (
                    <span
                      onClick={scrollSubUp}
                      className="arrow-up"
                      aria-label="Scroll sub up"
                    >
                      <IoIosArrowUp />
                    </span>
                  )}
                  {scrollArrows.canScrollSubDown && (
                    <span
                      onClick={scrollSubDown}
                      className="arrow-down"
                      aria-label="Scroll sub down"
                    >
                      <IoIosArrowDown />
                    </span>
                  )}
                </div>
              )}
              <div
                className="navProComp-subCat-item-container"
                ref={subCategoryContainerRef}
              >
                {dropdownState.subCatsArr.map((subCat, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => handleSubCatHover(subCat)}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      singleProductNavigator(subCat);
                    }}
                    className="pointer"
                  >
                    <div
                      className={`navProComp-mainCat-item ${
                        subCat === dropdownState.subCatName
                          ? "mainCat-active"
                          : ""
                      }`}
                    >
                      {subCat}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Product Details */}
        {dropdownState.displayProduct && (
          <div className="navProComp-products-container">
            <div className="navProComp-products-holder">
              <div
                onClick={() => {
                  window.scrollTo(0, 0);
                  singleProductNavigator(dropdownState.displayProduct.title);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="navProComp-products-img">
                  <img
                    src={
                      dropdownState.deptName === "Article"
                        ? dropdownState.displayProduct.mainImageUrl
                        : dropdownState.displayProduct.imageURL
                    }
                    alt={dropdownState.displayProduct.title}
                    onError={(e) =>
                      (e.target.src = "/assets/fallback-image.webp")
                    }
                  />
                </div>
                <div className="navProComp-products-title">
                  {dropdownState.displayProduct.title}
                </div>
              </div>
            </div>
            <div
              className="navProComp-products-more"
              onClick={() => {
                window.scrollTo(0, 0);
                singleProductNavigator(dropdownState.displayProduct.title);
              }}
            >
              <span>Know More</span>
              <IoIosArrowForward />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourceDropDown;