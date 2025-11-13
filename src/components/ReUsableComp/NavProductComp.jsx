// import React, { useEffect, useRef, useState } from "react";
// import "../../styles/NavProductComp.css";
// import Star from "../../assets/loadingStar.svg";
// import {
//   IoIosArrowDown,
//   IoIosArrowForward,
//   IoIosArrowUp,
// } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import data from "../../Data/ProductPage.json";
// import { FaLariSign } from "react-icons/fa6";

// function NavProductComp({ handleClose }) {
//   const navigate = useNavigate();
//   const [productData, setProductData] = useState();
//   const categoryContainerRef = useRef(null); // Ref for the main category container
//   const subCategoryContainerRef = useRef(null); // Ref for the sub-category container

//   const [showSubCats, setShowSubCats] = useState(false);
//   const [showProducts, setShowproducts] = useState(false);
//   const [MainCatArr, setMaincatArr] = useState();
//   const [subCatsArr, setSubccatsArr] = useState();
//   const [deptname, setDeptname] = useState();
//   const [mainCatName, setMainCatName] = useState();
//   const [subCatName, setSubCatName] = useState();
//   const [displayProducts, setDisplayProducts] = useState();
//   const [finalProductArr, setFinalProductArr] = useState();
//   const [showUpArrow, setShowUpArrow] = useState(false);
//   const [showDownArrow, setShowDownArrow] = useState(false);
//   const [showSubUpArrow, setShowSubUpArrow] = useState(false);
//   const [showSubDownArrow, setShowSubDownArrow] = useState(false);


//   useEffect(() => {
//     if(!data.department|| !Array.isArray(data.department)){
//       console.error("Invalid ProductPage.json data",data)
//       return;
//     }

//     setProductData(data.department);

//     const defaultDept = data.department?.[0];
//     const defaultCategory = defaultDept?.category?.[0];
//     const defaultProduct = defaultCategory?.products?.[0];

//     if (defaultDept && defaultCategory && Array.isArray(defaultCategory.products) &&  defaultProduct) {
//       setDeptname(defaultDept.name);
//       setMaincatArr(defaultDept.category.map((cat) => cat.name));
//       setMainCatName(defaultCategory.name);
//       setFinalProductArr(defaultCategory.products);
//       setSubccatsArr(defaultCategory.products.map((prod) => prod.title));
//       setSubCatName(defaultProduct.title);
//       setDisplayProducts(defaultProduct);
//       setShowSubCats(true);
//       setShowproducts(true);
//     }else{
//       console.warn("No valid default department, category or product found")
//     }

//     document.body.classList.add("no-scroll");
//     return () => {
//       document.body.classList.remove("no-scroll");
//     };
//   }, []);



//   const DeptArr = productData?.map((item) => item.name) || [];

//   const HandleDeptHovever = (DeptName) => {
//     setDeptname(DeptName);
//     const MainCatArrObj = productData?.find((item) => item.name === DeptName);
//     if (MainCatArrObj && Array.isArray(MainCatArrObj.category)) {
//       const categories = MainCatArrObj.category;
//       const firstCategory = categories[0];
//       const firstProduct = firstCategory?.products[0];
//       setMaincatArr(MainCatArrObj?.category?.map((item) => item.name));

//       if (firstCategory && Array.isArray(firstCategory.products)) {
//         setMainCatName(firstCategory?.name);
//         setFinalProductArr(firstCategory?.products);
//         const subCatTitles = firstCategory?.products?.map((pro) => pro.title);
//         setSubccatsArr(subCatTitles);
//         setShowSubCats(true);
//         if (firstProduct) {
//           setSubCatName(firstProduct.title);
//           setDisplayProducts(firstProduct);
//           setShowproducts(true);
//         }
//       }else{
//         setShowSubCats(false);
//         setShowproducts(false);
//         setSubccatsArr([]);
//         setFinalProductArr([]);
//         setSubCatName("");
//         setDisplayProducts(null)
//       }
//     }
//   };

//   const HandleMainCatHover = (MainCat) => {
//     const MainCatArrObj = productData?.find((item) => item.name === deptname);
//     const subCatObj = MainCatArrObj?.category?.find(
//       (item) => item.name === MainCat
//     );

//     // Check if the category has products
//     if ( subCatObj && Array.isArray(subCatObj.products) && subCatObj?.products?.length > 0) {
//       setMainCatName(MainCat);
//       setFinalProductArr(subCatObj?.products);
//       if (subCatObj && Array.isArray(subCatObj.products) && subCatObj.products.length) {
//         const productTitles = subCatObj?.products?.map(
//           (eachSubCat) => eachSubCat.title
//         );
//         setSubccatsArr(productTitles);
//         const firstProduct = subCatObj.products?.[0];
//         if (firstProduct) {
//           setSubCatName(firstProduct.title);
//           setDisplayProducts(firstProduct);
//           setShowproducts(true);
//         }
//       }
//       setShowSubCats(true);
//     }else{
//       // Reset states if no products
//       setShowSubCats(false)
//       setShowproducts(false)
//       setSubccatsArr([])
//       setFinalProductArr([])
//       setSubCatName(null)
//       setDisplayProducts(null)
//     }
//   };

//   const HandleSubCatHover = (SubCat) => {
//     setSubCatName(SubCat);
//     const ProductsFound = finalProductArr?.find(
//       (item) => item.title === SubCat
//     );
//     if(ProductsFound){
//       setDisplayProducts(ProductsFound);
//       setShowproducts(true);
//     }    
//   };

//   const scrollUp = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
//       container.scrollTop -= itemHeight;
//     }
//   };

//   const scrollDown = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
//       container.scrollTop += itemHeight;
//     }
//   };

//   const scrollSubUp = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
//       container.scrollTop -= itemHeight;
//     }
//   };

//   const scrollSubDown = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
//       container.scrollTop += itemHeight;
//     }
//   };

//   const handleScroll = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const { scrollTop, scrollHeight, clientHeight } = container;
//       const lastItem = container.lastChild;
//       const lastItemOffset = lastItem
//         ? lastItem.offsetTop + lastItem.offsetHeight
//         : scrollHeight;
//       setShowUpArrow(scrollTop > 0);
//       setShowDownArrow(scrollTop + clientHeight < lastItemOffset);
//     }
//   };

//   const handleSubScroll = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const { scrollTop, scrollHeight, clientHeight } = container;
//       const lastItem = container.lastChild;
//       const lastItemOffset = lastItem
//         ? lastItem.offsetTop + lastItem.offsetHeight
//         : scrollHeight;
//       setShowSubUpArrow(scrollTop > 0);
//       setShowSubDownArrow(scrollTop + clientHeight < lastItemOffset);
//     }
//   };

//   function findProductPath(productData =[], productTitle) {
//     if(!Array.isArray(productData)){
//       console.error("productdata is not an array:" , productData);
//       return null;
//     }    
//       for (let department of productData) {
//         if(!department?.category || !Array.isArray(department.category)){
//           console.warn("Invalid or missing category for department", department);
//           continue;
//         }
//         for (let category of department.category) {
//           if(!Array.isArray(category.products)){
//             console.warn("category products is not iterable for category:", category);
//             continue;
//           }
//           for (let product of category.products) {
//             if (product.title === productTitle) {
//               return { department, category, product };
//             }
//           }
//         }
//       }
//       return null;

//   }

//   function findCategoryPath(productData =[], productCategory) {
//     if (!Array.isArray(productData)) {
//       console.error("productData is not an array:",productData);
//       return null;
//     }
//       for (let department of productData) {
//         if(!department?.category || !Array.isArray(department.category)){
//           console.warn("Invalid or missing category for department", department);
//           continue;
//         }
//         for (let category of department.category) {
//           if (category.name === productCategory) {
//             return { department, category };
//           }
//         }
//       }    
//     return null;
//   }

//   const productCategoryNavigator = (categoryTitle) => {
//     const result = findCategoryPath(productData, categoryTitle);
//     if (result) {
//       navigate(
//         `/products/${result.department.name
//           .split(" ")
//           .join("-")}/${result.category?.name.split(" ").join("-")}`
//       );
//       handleClose()
//     } else {
//       console.warn("Product not found", categoryTitle);
//     }
//   };

//   const singleProductNavigator = (productTitle) => {
//     if(!productTitle){
//       console.warn("Invalid productTitle", productTitle);
//       return;
//     }

//     const result = findProductPath(productData, productTitle);
//     if (result) {
//       const productKey = productTitle.split(" ").join("-");
//       navigate(
//         `/products/${result.department.name
//           .split(" ")
//           .join("-")}/${result.category.name
//           .split(" ")
//           .join("-")}/${productKey}`
//       );
//       handleClose()
//     } else {
//       console.warn("Product not found",productTitle);
//     }
//   };

//   return (
//     <div className="NavProductComp-container">
//       {productData ? (<div className="navProComp-container">
//         <div className="navProComp-dept-container">
//           <div className="navprocomp-items-heading">Departments</div>
//           <div className="navproComp-item-holder">
//             <div className="navProComp-dot-container">
//               {/* {DeptArr?.map((dot, i) => (
//                 <div
//                   key={i}
//                   className={`navProComp-dot ${dot === deptname ? "navProComp-dot-active" : ""}`}
//                 ></div>
//               ))} */}
//             </div>
//             <div className="navProComp-mainCat-item-container">
//               {DeptArr?.map((eachCat, i) => (
//                 <div
//                   key={i}
//                   onMouseEnter={() => HandleDeptHovever(eachCat)}
//                   onClick={() => {
//                     navigate(`/products/${eachCat}`);
//                     handleClose();
//                   }}
//                   className="pointer"
//                 >
//                   <div
//                     className={`navProComp-dept-item ${
//                       eachCat === deptname ? "mainCat-active" : ""
//                     }`}
//                   >
//                     {eachCat}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {MainCatArr?.length && (
//           <div className="navProComp-mainCat-container">
//             <div className="navprocomp-items-heading">Categories</div>
//             <div
//               className="navproComp-item-holder"
//               style={{ position: "relative", height: "100%" }}
//             >
//               <div className="navProComp-dot-container">
//                 {MainCatArr?.map((dot, i) => (
//                   <div
//                     key={i}
//                     className={`navProComp-dot ${
//                       dot === mainCatName ? "navProComp-dot-active" : ""
//                     }`}
//                   ></div>
//                 ))}
//               </div>
//               <div className="arrow-wrapper">
//                 {showUpArrow && (
//                   <span
//                     onClick={scrollUp}
//                     className="arrow-up"
//                     aria-label="Scroll up"
//                   >
//                     <IoIosArrowUp />
//                   </span>
//                 )}
//                 {showDownArrow && (
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
//                 onScroll={handleScroll}
//               >
//                 {MainCatArr?.map((eachCat, i) => (
//                   <div
//                     key={i}
//                     onMouseEnter={() => HandleMainCatHover(eachCat)}
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       productCategoryNavigator(eachCat);
//                       handleClose();
//                     }}
//                     className="pointer"
//                   >
//                     <div
//                       className={`navProComp-mainCat-item ${
//                         eachCat === mainCatName ? "mainCat-active" : ""
//                       }`}
//                     >
//                       {eachCat}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//         {showSubCats && subCatsArr?.length && (
//           <div className="navProComp-subCat-container">
//             <div className="navprocomp-items-heading">Products</div>
//             <div
//               className="navproComp-item-holder"
//               style={{ position: "relative", height: "100%" }}
//             >
//               <div className="navProComp-dot-container">
//                 {subCatsArr?.map((dot, i) => (
//                   <div
//                     key={i}
//                     className={`navProComp-dot ${
//                       dot === subCatName ? "navProComp-dot-active" : ""
//                     }`}
//                   ></div>
//                 ))}
//               </div>
//               <div className="arrow-wrapper">
//                 {showSubUpArrow && (
//                   <span
//                     onClick={scrollSubUp}
//                     aria-label="Scroll sub up"
//                     className="arrow-up"
//                   >
//                     <IoIosArrowUp />
//                   </span>
//                 )}
//                 {showSubDownArrow && (
//                   <span
//                     onClick={scrollSubDown}
//                     aria-label="Scroll sub down"
//                     className="arrow-down"
//                   >
//                     <IoIosArrowDown />
//                   </span>
//                 )}
//               </div>
//               <div
//                 className="navProComp-subCat-item-container"
//                 ref={subCategoryContainerRef}
//                 onScroll={handleSubScroll}
//               >
//                 {subCatsArr?.map((eachItem, i) => (
//                   <div
//                     key={i}
//                     onMouseEnter={() => HandleSubCatHover(eachItem)}
//                     className="pointer"
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       singleProductNavigator(eachItem);
//                       handleClose();
//                     }}
//                   >
//                     <div
//                       className={`navProComp-mainCat-item ${
//                         eachItem === subCatName ? "mainCat-active" : ""
//                       }`}
//                     >
//                       {eachItem}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//         {showProducts && displayProducts && (
//           <div className="navProComp-products-container">
//             <div className="navProComp-products-holder">
//               <div>
//                 <div
//                   onClick={() => {
//                     window.scrollTo(0, 0);
//                     singleProductNavigator(displayProducts.title);
//                     handleClose();
//                   }}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <div className="navProComp-products-img">
//                     <img src={displayProducts.imageUrl} alt="" loading="lazy"/>
//                   </div>
//                   <div className="navProComp-products-title">
//                     {displayProducts.title}
//                   </div>
//                   <div className="navProComp-products-des">
//                     {displayProducts.description}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="navProComp-products-more"
//               onClick={() => {
//                 window.scrollTo(0, 0);
//                 singleProductNavigator(displayProducts.title);
//                 handleClose();
//               }}
//             >
//               <span>See More</span>
//               <IoIosArrowForward />
//             </div>
//           </div>
//         )}
//       </div>)
//        : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }

// export default NavProductComp;

//pk


// import React, { useEffect, useRef, useState } from "react";
// import "../../styles/NavProductComp.css";
// import Star from "../../assets/loadingStar.svg";
// import {
//   IoIosArrowDown,
//   IoIosArrowForward,
//   IoIosArrowUp,
// } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import data from "../../Data/ProductPage.json";
// import { FaLariSign } from "react-icons/fa6";
// import LoadingStar from "../LoadingStar";

// function NavProductComp({ handleClose }) {
//   const navigate = useNavigate();
//   const [productData, setProductData] = useState();
//   const deptContainerRef = useRef(null); // Ref for the departments container
//   const categoryContainerRef = useRef(null); // Ref for the main category container
//   const subCategoryContainerRef = useRef(null); // Ref for the sub-category container

//   const [showSubCats, setShowSubCats] = useState(false);
//   const [showProducts, setShowproducts] = useState(false);
//   const [MainCatArr, setMaincatArr] = useState([]);
//   const [subCatsArr, setSubccatsArr] = useState([]);
//   const [deptname, setDeptname] = useState();
//   const [mainCatName, setMainCatName] = useState();
//   const [subCatName, setSubCatName] = useState();
//   const [displayProducts, setDisplayProducts] = useState();
//   const [finalProductArr, setFinalProductArr] = useState();
//   const [canScrollDeptUp, setCanScrollDeptUp] = useState(false); // For Departments up arrow
//   const [canScrollDeptDown, setCanScrollDeptDown] = useState(false); // For Departments down arrow
//   const [canScrollCatUp, setCanScrollCatUp] = useState(false); // For Categories up arrow
//   const [canScrollCatDown, setCanScrollCatDown] = useState(false); // For Categories down arrow
//   const [canScrollSubUp, setCanScrollSubUp] = useState(false); // For Products up arrow
//   const [canScrollSubDown, setCanScrollSubDown] = useState(false); // For Products down arrow

//   useEffect(() => {
//     if (!data.department || !Array.isArray(data.department)) {
//       console.error("Invalid ProductPage.json data", data);
//       return;
//     }

//     setProductData(data.department);

//     const defaultDept = data.department?.[0];
//     const defaultCategory = defaultDept?.category?.[0];
//     const defaultProduct = defaultCategory?.products?.[0];

//     if (
//       defaultDept &&
//       defaultCategory &&
//       Array.isArray(defaultCategory.products) &&
//       defaultProduct
//     ) {
//       setDeptname(defaultDept.name);
//       setMaincatArr(defaultDept.category.map((cat) => cat.name));
//       setMainCatName(defaultCategory.name);
//       setFinalProductArr(defaultCategory.products);
//       setSubccatsArr(defaultCategory.products.map((prod) => prod.title));
//       setSubCatName(defaultProduct.title);
//       setDisplayProducts(defaultProduct);
//       setShowSubCats(true);
//       setShowproducts(true);
//     } else {
//       console.warn("No valid default department, category or product found");
//     }

//     document.body.classList.add("no-scroll");
//     return () => {
//       document.body.classList.remove("no-scroll");
//     };
//   }, []);

//   const DeptArr = productData?.map((item) => item.name) || [];

//   // Check scrollability for Departments whenever DeptArr changes
//   useEffect(() => {
//     const checkDeptScrollability = () => {
//       if (deptContainerRef.current) {
//         const container = deptContainerRef.current;
//         const { scrollHeight, clientHeight } = container;
//         setCanScrollDeptDown(scrollHeight > clientHeight);
//         setCanScrollDeptUp(container.scrollTop > 0);
//       }
//     };

//     const timer = setTimeout(checkDeptScrollability, 0);
//     return () => clearTimeout(timer);
//   }, [DeptArr]);

//   // Check scrollability for Categories whenever MainCatArr changes
//   useEffect(() => {
//     const checkCatScrollability = () => {
//       if (categoryContainerRef.current) {
//         const container = categoryContainerRef.current;
//         const { scrollHeight, clientHeight } = container;
//         setCanScrollCatDown(scrollHeight > clientHeight);
//         setCanScrollCatUp(container.scrollTop > 0);
//       }
//     };

//     const timer = setTimeout(checkCatScrollability, 0);
//     return () => clearTimeout(timer);
//   }, [MainCatArr]);

//   // Check scrollability for Products whenever subCatsArr changes
//   useEffect(() => {
//     const checkSubScrollability = () => {
//       if (subCategoryContainerRef.current) {
//         const container = subCategoryContainerRef.current;
//         const { scrollHeight, clientHeight } = container;
//         setCanScrollSubDown(scrollHeight > clientHeight);
//         setCanScrollSubUp(container.scrollTop > 0);
//       }
//     };

//     const timer = setTimeout(checkSubScrollability, 0);
//     return () => clearTimeout(timer);
//   }, [subCatsArr]);

//   const HandleDeptHovever = (DeptName) => {
//     setDeptname(DeptName);
//     const MainCatArrObj = productData?.find((item) => item.name === DeptName);
//     if (MainCatArrObj && Array.isArray(MainCatArrObj.category)) {
//       const categories = MainCatArrObj.category;
//       const firstCategory = categories[0];
//       const firstProduct = firstCategory?.products[0];
//       setMaincatArr(MainCatArrObj?.category?.map((item) => item.name) || []);

//       if (firstCategory && Array.isArray(firstCategory.products)) {
//         setMainCatName(firstCategory?.name);
//         setFinalProductArr(firstCategory?.products);
//         const subCatTitles =
//           firstCategory?.products?.map((pro) => pro.title) || [];
//         setSubccatsArr(subCatTitles);
//         setShowSubCats(true);
//         if (firstProduct) {
//           setSubCatName(firstProduct.title);
//           setDisplayProducts(firstProduct);
//           setShowproducts(true);
//         }
//       } else {
//         setShowSubCats(false);
//         setShowproducts(false);
//         setSubccatsArr([]);
//         setFinalProductArr([]);
//         setSubCatName("");
//         setDisplayProducts(null);
//       }
//     }
//   };

//   const HandleMainCatHover = (MainCat) => {
//     const MainCatArrObj = productData?.find((item) => item.name === deptname);
//     const subCatObj = MainCatArrObj?.category?.find(
//       (item) => item.name === MainCat
//     );

//     if (
//       subCatObj &&
//       Array.isArray(subCatObj.products) &&
//       subCatObj?.products?.length > 0
//     ) {
//       setMainCatName(MainCat);
//       setFinalProductArr(subCatObj?.products);
//       if (
//         subCatObj &&
//         Array.isArray(subCatObj.products) &&
//         subCatObj.products.length
//       ) {
//         const productTitles =
//           subCatObj?.products?.map((eachSubCat) => eachSubCat.title) || [];
//         setSubccatsArr(productTitles);
//         const firstProduct = subCatObj.products?.[0];
//         if (firstProduct) {
//           setSubCatName(firstProduct.title);
//           setDisplayProducts(firstProduct);
//           setShowproducts(true);
//         }
//       }
//       setShowSubCats(true);
//     } else {
//       setShowSubCats(false);
//       setShowproducts(false);
//       setSubccatsArr([]);
//       setFinalProductArr([]);
//       setSubCatName(null);
//       setDisplayProducts(null);
//     }
//   };

//   const HandleSubCatHover = (SubCat) => {
//     setSubCatName(SubCat);
//     const ProductsFound = finalProductArr?.find(
//       (item) => item.title === SubCat
//     );
//     if (ProductsFound) {
//       setDisplayProducts(ProductsFound);
//       setShowproducts(true);
//     }
//   };

//   const scrollDeptUp = () => {
//     if (deptContainerRef.current) {
//       const container = deptContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollTop -= itemHeight;
//     }
//   };

//   const scrollDeptDown = () => {
//     if (deptContainerRef.current) {
//       const container = deptContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollTop += itemHeight;
//     }
//   };

//   const scrollUp = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollTop -= itemHeight;
//     }
//   };

//   const scrollDown = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollTop += itemHeight;
//     }
//   };

//   const scrollSubUp = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollTop -= itemHeight;
//     }
//   };

//   const scrollSubDown = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollTop += itemHeight;
//     }
//   };

//   const handleDeptScroll = () => {
//     if (deptContainerRef.current) {
//       const container = deptContainerRef.current;
//       const { scrollTop, scrollHeight, clientHeight } = container;
//       const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
//       setCanScrollDeptUp(scrollTop > 0);
//       setCanScrollDeptDown(!isAtBottom);
//       console.log(
//         "Dept Scroll - scrollTop:",
//         scrollTop,
//         "clientHeight:",
//         clientHeight,
//         "scrollHeight:",
//         scrollHeight,
//         "canScrollDeptDown:",
//         !isAtBottom
//       );
//     }
//   };

//   const handleScroll = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const { scrollTop, scrollHeight, clientHeight } = container;
//       const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
//       setCanScrollCatUp(scrollTop > 0);
//       setCanScrollCatDown(!isAtBottom);
//       console.log(
//         "Cat Scroll - scrollTop:",
//         scrollTop,
//         "clientHeight:",
//         clientHeight,
//         "scrollHeight:",
//         scrollHeight,
//         "canScrollCatDown:",
//         !isAtBottom
//       );
//     }
//   };

//   const handleSubScroll = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const { scrollTop, scrollHeight, clientHeight } = container;
//       const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
//       setCanScrollSubUp(scrollTop > 0);
//       setCanScrollSubDown(!isAtBottom);
//       console.log(
//         "Sub Scroll - scrollTop:",
//         scrollTop,
//         "clientHeight:",
//         clientHeight,
//         "scrollHeight:",
//         scrollHeight,
//         "canScrollSubDown:",
//         !isAtBottom
//       );
//     }
//   };

//   function findProductPath(productData = [], productTitle) {
//     if (!Array.isArray(productData)) {
//       console.error("productdata is not an array:", productData);
//       return null;
//     }
//     for (let department of productData) {
//       if (!department?.category || !Array.isArray(department.category)) {
//         console.warn("Invalid or missing category for department", department);
//         continue;
//       }
//       for (let category of department.category) {
//         if (!Array.isArray(category.products)) {
//           console.warn(
//             "category products is not iterable for category:",
//             category
//           );
//           continue;
//         }
//         for (let product of category.products) {
//           if (product.title === productTitle) {
//             return { department, category, product };
//           }
//         }
//       }
//     }
//     return null;
//   }

//   function findCategoryPath(productData = [], productCategory) {
//     if (!Array.isArray(productData)) {
//       console.error("productData is not an array:", productData);
//       return null;
//     }
//     for (let department of productData) {
//       if (!department?.category || !Array.isArray(department.category)) {
//         console.warn("Invalid or missing category for department", department);
//         continue;
//       }
//       for (let category of department.category) {
//         if (category.name === productCategory) {
//           return { department, category };
//         }
//       }
//     }
//     return null;
//   }

//   const productCategoryNavigator = (categoryTitle) => {
//     const result = findCategoryPath(productData, categoryTitle);
//     if (result) {
//       navigate(
//         `/products/${result.department.name
//           .split(" ")
//           .join("-")}/${result.category?.name.split(" ").join("-")}`
//       );
//       handleClose();
//     } else {
//       console.warn("Product not found", categoryTitle);
//     }
//   };

//   const singleProductNavigator = (productTitle) => {
//     if (!productTitle) {
//       console.warn("Invalid productTitle", productTitle);
//       return;
//     }

//     const result = findProductPath(productData, productTitle);
//     if (result) {
//       const productKey = productTitle.split(" ").join("-");
//       navigate(
//         `/products/${result.department.name
//           .split(" ")
//           .join("-")}/${result.category.name
//           .split(" ")
//           .join("-")}/${productKey}`
//       );
//       handleClose();
//     } else {
//       console.warn("Product not found", productTitle);
//     }
//   };

//   return (
//     <div className="NavProductComp-container">
//       {productData ? (
//         <div className="navProComp-container">
//           <div className="navProComp-dept-container">
//             <div className="navprocomp-items-heading">Departments</div>
//             <div
//               className="navproComp-item-holder"
//               style={{ position: "relative", height: "100%" }}
//             >
//               <div className="navProComp-dot-container">
//                 {/* {DeptArr?.map((dot, i) => (
//                   <div
//                     key={i}
//                     className={`navProComp-dot ${dot === deptname ? "navProComp-dot-active" : ""}`}
//                   ></div>
//                 ))} */}
//               </div>
//               {DeptArr?.length > 5 && (
//                 <div className="arrow-wrapper">
//                   {canScrollDeptUp && (
//                     <span
//                       onClick={scrollDeptUp}
//                       className="arrow-up"
//                       aria-label="Scroll up"
//                     >
//                       <IoIosArrowUp />
//                     </span>
//                   )}
//                   {canScrollDeptDown && (
//                     <span
//                       onClick={scrollDeptDown}
//                       className="arrow-down"
//                       aria-label="Scroll down"
//                     >
//                       <IoIosArrowDown />
//                     </span>
//                   )}
//                 </div>
//               )}
//               <div
//                 className="navProComp-mainCat-item-container"
//                 ref={deptContainerRef}
//                 onScroll={handleDeptScroll}
//               >
//                 {DeptArr?.map((eachCat, i) => (
//                   <div
//                     key={i}
//                     onMouseEnter={() => HandleDeptHovever(eachCat)}
//                     onClick={() => {
//                       navigate(`/products/${eachCat}`);
//                       handleClose();
//                     }}
//                     className="pointer"
//                   >
//                     <div
//                       className={`navProComp-dept-item ${
//                         eachCat === deptname ? "mainCat-active" : ""
//                       }`}
//                     >
//                       {eachCat}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           {MainCatArr.length > 0 && (
//             <div className="navProComp-mainCat-container">
//               <div className="navprocomp-items-heading">Categories</div>
//               <div
//                 className="navproComp-item-holder"
//                 style={{ position: "relative", height: "100%" }}
//               >
//                 <div className="navProComp-dot-container">
//                   {MainCatArr.map((dot, i) => (
//                     <div
//                       key={i}
//                       className={`navProComp-dot ${
//                         dot === mainCatName ? "navProComp-dot-active" : ""
//                       }`}
//                     ></div>
//                   ))}
//                 </div>
//                 {MainCatArr.length > 5 && (
//                   <div className="arrow-wrapper">
//                     {canScrollCatUp && (
//                       <span
//                         onClick={scrollUp}
//                         className="arrow-up"
//                         aria-label="Scroll up"
//                       >
//                         <IoIosArrowUp />
//                       </span>
//                     )}
//                     {canScrollCatDown && (
//                       <span
//                         onClick={scrollDown}
//                         className="arrow-down"
//                         aria-label="Scroll down"
//                       >
//                         <IoIosArrowDown />
//                       </span>
//                     )}
//                   </div>
//                 )}
//                 <div
//                   className="navProComp-mainCat-item-container"
//                   ref={categoryContainerRef}
//                   onScroll={handleScroll}
//                 >
//                   {MainCatArr.map((eachCat, i) => (
//                     <div
//                       key={i}
//                       onMouseEnter={() => HandleMainCatHover(eachCat)}
//                       onClick={() => {
//                         window.scrollTo(0, 0);
//                         productCategoryNavigator(eachCat);
//                         handleClose();
//                       }}
//                       className="pointer"
//                     >
//                       <div
//                         className={`navProComp-mainCat-item ${
//                           eachCat === mainCatName ? "mainCat-active" : ""
//                         }`}
//                       >
//                         {eachCat}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//           {showSubCats && subCatsArr.length > 0 && (
//             <div className="navProComp-subCat-container">
//               <div className="navprocomp-items-heading">Products</div>
//               <div
//                 className="navproComp-item-holder"
//                 style={{ position: "relative", height: "100%" }}
//               >
//                 <div className="navProComp-dot-container">
//                   {subCatsArr.map((dot, i) => (
//                     <div
//                       key={i}
//                       className={`navProComp-dot ${
//                         dot === subCatName ? "navProComp-dot-active" : ""
//                       }`}
//                     ></div>
//                   ))}
//                 </div>
//                 {subCatsArr.length > 5 && (
//                   <div className="arrow-wrapper">
//                     {canScrollSubUp && (
//                       <span
//                         onClick={scrollSubUp}
//                         aria-label="Scroll sub up"
//                         className="arrow-up"
//                       >
//                         <IoIosArrowUp />
//                       </span>
//                     )}
//                     {canScrollSubDown && (
//                       <span
//                         onClick={scrollSubDown}
//                         aria-label="Scroll sub down"
//                         className="arrow-down"
//                       >
//                         <IoIosArrowDown />
//                       </span>
//                     )}
//                   </div>
//                 )}
//                 <div
//                   className="navProComp-subCat-item-container"
//                   ref={subCategoryContainerRef}
//                   onScroll={handleSubScroll}
//                 >
//                   {subCatsArr.map((eachItem, i) => (
//                     <div
//                       key={i}
//                       onMouseEnter={() => HandleSubCatHover(eachItem)}
//                       className="pointer"
//                       onClick={() => {
//                         window.scrollTo(0, 0);
//                         singleProductNavigator(eachItem);
//                         handleClose();
//                       }}
//                     >
//                       <div
//                         className={`navProComp-mainCat-item ${
//                           eachItem === subCatName ? "mainCat-active" : ""
//                         }`}
//                       >
//                         {eachItem}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//           {showProducts && displayProducts && (
//             <div className="navProComp-products-container">
//               <div className="navProComp-products-holder">
//                 <div>
//                   <div
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       singleProductNavigator(displayProducts.title);
//                       handleClose();
//                     }}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <div className="navProComp-products-img">
//                       <img
//                         src={displayProducts.imageUrl}
//                         alt=""
//                         loading="lazy"
//                       />
//                     </div>
//                     <div className="navProComp-products-title">
//                       {displayProducts.title}
//                     </div>
//                     <div className="navProComp-products-des">
//                       {displayProducts.description}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="navProComp-products-more"
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                   singleProductNavigator(displayProducts.title);
//                   handleClose();
//                 }}
//               >
//                 <span>See More</span>
//                 <IoIosArrowForward />
//               </div>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div><LoadingStar/></div>
//       )}
//     </div>
//   );
// }

// export default NavProductComp;




// import React, { useEffect, useRef, useState } from "react";
// import "../../styles/NavProductComp.css";
// import {
//   IoIosArrowDown,
//   IoIosArrowForward,
//   IoIosArrowUp,
// } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import data from "../../Data/ProductPage.json";
// import LoadingStar from "../LoadingStar";

// function NavProductComp({ handleClose }) {
//   const navigate = useNavigate();
//   const [productData, setProductData] = useState();
//   const deptContainerRef = useRef(null);
//   const categoryContainerRef = useRef(null);
//   const subCategoryContainerRef = useRef(null);

//   const [showSubCats, setShowSubCats] = useState(false);
//   const [showProducts, setShowproducts] = useState(false);
//   const [MainCatArr, setMaincatArr] = useState([]);
//   const [subCatsArr, setSubccatsArr] = useState([]);
//   const [deptname, setDeptname] = useState();
//   const [mainCatName, setMainCatName] = useState();
//   const [subCatName, setSubCatName] = useState();
//   const [displayProducts, setDisplayProducts] = useState();
//   const [finalProductArr, setFinalProductArr] = useState([]);
//   const [canScrollDeptUp, setCanScrollDeptUp] = useState(false);
//   const [canScrollDeptDown, setCanScrollDeptDown] = useState(false);
//   const [canScrollCatUp, setCanScrollCatUp] = useState(false);
//   const [canScrollCatDown, setCanScrollCatDown] = useState(false);
//   const [canScrollSubUp, setCanScrollSubUp] = useState(false);
//   const [canScrollSubDown, setCanScrollSubDown] = useState(false);

//   useEffect(() => {
//     if (!data.department || !Array.isArray(data.department)) {
//       console.error("Invalid ProductPage.json data", data);
//       return;
//     }

//     setProductData(data.department);

//     const defaultDept = data.department?.[0];
//     const defaultCategory = defaultDept?.category?.[0];
//     const defaultProduct = defaultCategory?.products?.[0];

//     if (defaultDept && defaultCategory) {
//       setDeptname(defaultDept.name);
//       setMaincatArr(defaultDept.category.map((cat) => cat.name));
//       setMainCatName(defaultCategory.name);
//       setFinalProductArr(defaultCategory.products || []);
//       setSubccatsArr(
//         Array.isArray(defaultCategory.products)
//           ? defaultCategory.products.map((prod) => prod.title)
//           : []
//       );

//       if (defaultProduct) {
//         setSubCatName(defaultProduct.title);
//         setDisplayProducts(defaultProduct);
//         setShowSubCats(true);
//         setShowproducts(true);
//       } else {
//         // category has no products -> show category card instead of product card
//         setSubCatName(null);
//         setDisplayProducts(null);
//         setShowSubCats(true);
//         setShowproducts(false);
//       }
//     } else {
//       console.warn("No valid default department or category found");
//     }

//     document.body.classList.add("no-scroll");
//     return () => {
//       document.body.classList.remove("no-scroll");
//     };
//   }, []);

//   const DeptArr = productData?.map((item) => item.name) || [];

//   // scrollability checks (same as before)
//   useEffect(() => {
//     const checkDeptScrollability = () => {
//       if (deptContainerRef.current) {
//         const container = deptContainerRef.current;
//         const { scrollHeight, clientHeight } = container;
//         setCanScrollDeptDown(scrollHeight > clientHeight);
//         setCanScrollDeptUp(container.scrollTop > 0);
//       }
//     };
//     const timer = setTimeout(checkDeptScrollability, 0);
//     return () => clearTimeout(timer);
//   }, [DeptArr]);

//   useEffect(() => {
//     const checkCatScrollability = () => {
//       if (categoryContainerRef.current) {
//         const container = categoryContainerRef.current;
//         const { scrollHeight, clientHeight } = container;
//         setCanScrollCatDown(scrollHeight > clientHeight);
//         setCanScrollCatUp(container.scrollTop > 0);
//       }
//     };
//     const timer = setTimeout(checkCatScrollability, 0);
//     return () => clearTimeout(timer);
//   }, [MainCatArr]);

//   useEffect(() => {
//     const checkSubScrollability = () => {
//       if (subCategoryContainerRef.current) {
//         const container = subCategoryContainerRef.current;
//         const { scrollHeight, clientHeight } = container;
//         setCanScrollSubDown(scrollHeight > clientHeight);
//         setCanScrollSubUp(container.scrollTop > 0);
//       }
//     };
//     const timer = setTimeout(checkSubScrollability, 0);
//     return () => clearTimeout(timer);
//   }, [subCatsArr]);

//   function findProductPath(productData = [], productTitle) {
//     if (!Array.isArray(productData)) {
//       console.error("productdata is not an array:", productData);
//       return null;
//     }
//     for (let department of productData) {
//       if (!department?.category || !Array.isArray(department.category)) continue;
//       for (let category of department.category) {
//         if (!Array.isArray(category.products)) continue;
//         for (let product of category.products) {
//           if (product.title === productTitle) return { department, category, product };
//         }
//       }
//     }
//     return null;
//   }

//   function findCategoryPath(productData = [], productCategory) {
//     if (!Array.isArray(productData)) {
//       console.error("productData is not an array:", productData);
//       return null;
//     }
//     for (let department of productData) {
//       if (!department?.category || !Array.isArray(department.category)) continue;
//       for (let category of department.category) {
//         if (category.name === productCategory) return { department, category };
//       }
//     }
//     return null;
//   }

//   const productCategoryNavigator = (categoryTitle) => {
//     const result = findCategoryPath(productData, categoryTitle);
//     if (result) {
//       navigate(
//         `/products/${result.department.name.split(" ").join("-")}/${result.category?.name.split(" ").join("-")}`
//       );
//       handleClose();
//     } else {
//       console.warn("Product category not found", categoryTitle);
//     }
//   };

//   const singleProductNavigator = (productTitle) => {
//     if (!productTitle) {
//       console.warn("Invalid productTitle", productTitle);
//       return;
//     }
//     const result = findProductPath(productData, productTitle);
//     if (result) {
//       const productKey = productTitle.split(" ").join("-");
//       navigate(
//         `/products/${result.department.name.split(" ").join("-")}/${result.category.name.split(" ").join("-")}/${productKey}`
//       );
//       handleClose();
//     } else {
//       console.warn("Product not found", productTitle);
//     }
//   };

//   // helpers: get currently selected category object
//   const getCurrentCategoryObj = () => {
//     if (!productData || !deptname || !mainCatName) return null;
//     const deptObj = productData.find((d) => d.name === deptname);
//     if (!deptObj || !Array.isArray(deptObj.category)) return null;
//     return deptObj.category.find((c) => c.name === mainCatName) || null;
//   };

//   // handlers for hover selection
//   const HandleDeptHovever = (DeptName) => {
//     setDeptname(DeptName);
//     const MainCatArrObj = productData?.find((item) => item.name === DeptName);
//     if (MainCatArrObj && Array.isArray(MainCatArrObj.category)) {
//       const categories = MainCatArrObj.category;
//       const firstCategory = categories[0];
//       const firstProduct = firstCategory?.products?.[0];
//       setMaincatArr(MainCatArrObj?.category?.map((item) => item.name) || []);

//       if (firstCategory && Array.isArray(firstCategory.products)) {
//         setMainCatName(firstCategory?.name);
//         setFinalProductArr(firstCategory?.products || []);
//         const subCatTitles = firstCategory?.products?.map((pro) => pro.title) || [];
//         setSubccatsArr(subCatTitles);
//         setShowSubCats(true);
//         if (firstProduct) {
//           setSubCatName(firstProduct.title);
//           setDisplayProducts(firstProduct);
//           setShowproducts(true);
//         } else {
//           setSubCatName(null);
//           setDisplayProducts(null);
//           setShowproducts(false);
//         }
//       } else {
//         // if category missing structure
//         setShowSubCats(false);
//         setShowproducts(false);
//         setSubccatsArr([]);
//         setFinalProductArr([]);
//         setSubCatName("");
//         setDisplayProducts(null);
//       }
//     }
//   };

//   const HandleMainCatHover = (MainCat) => {
//     const MainCatArrObj = productData?.find((item) => item.name === deptname);
//     const subCatObj = MainCatArrObj?.category?.find((item) => item.name === MainCat);

//     if (subCatObj) {
//       setMainCatName(MainCat);
//       setFinalProductArr(subCatObj.products || []);
//       if (Array.isArray(subCatObj.products) && subCatObj.products.length) {
//         const productTitles = subCatObj?.products?.map((eachSubCat) => eachSubCat.title) || [];
//         setSubccatsArr(productTitles);
//         const firstProduct = subCatObj.products?.[0];
//         if (firstProduct) {
//           setSubCatName(firstProduct.title);
//           setDisplayProducts(firstProduct);
//           setShowproducts(true);
//         } else {
//           setSubCatName(null);
//           setDisplayProducts(null);
//           setShowproducts(false);
//         }
//       } else {
//         // category exists but has no products
//         setSubccatsArr([]);
//         setSubCatName(null);
//         setDisplayProducts(null);
//         setShowproducts(false);
//       }
//       setShowSubCats(true);
//     } else {
//       setShowSubCats(false);
//       setShowproducts(false);
//       setSubccatsArr([]);
//       setFinalProductArr([]);
//       setSubCatName(null);
//       setDisplayProducts(null);
//     }
//   };

//   const HandleSubCatHover = (SubCat) => {
//     setSubCatName(SubCat);
//     const ProductsFound = finalProductArr?.find((item) => item.title === SubCat);
//     if (ProductsFound) {
//       setDisplayProducts(ProductsFound);
//       setShowproducts(true);
//     }
//   };

//   // scroll helpers (same as before)
//   const scrollDeptUp = () => {
//     if (deptContainerRef.current) {
//       const container = deptContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollTop -= itemHeight;
//     }
//   };

//   const scrollDeptDown = () => {
//     if (deptContainerRef.current) {
//       const container = deptContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollTop += itemHeight;
//     }
//   };

//   const scrollUp = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollTop -= itemHeight;
//     }
//   };

//   const scrollDown = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollTop += itemHeight;
//     }
//   };

//   const scrollSubUp = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollTop -= itemHeight;
//     }
//   };

//   const scrollSubDown = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const itemHeight = container.firstChild?.offsetHeight || 40;
//       container.scrollTop += itemHeight;
//     }
//   };

//   const handleDeptScroll = () => {
//     if (deptContainerRef.current) {
//       const container = deptContainerRef.current;
//       const { scrollTop, scrollHeight, clientHeight } = container;
//       const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
//       setCanScrollDeptUp(scrollTop > 0);
//       setCanScrollDeptDown(!isAtBottom);
//     }
//   };

//   const handleScroll = () => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       const { scrollTop, scrollHeight, clientHeight } = container;
//       const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
//       setCanScrollCatUp(scrollTop > 0);
//       setCanScrollCatDown(!isAtBottom);
//     }
//   };

//   const handleSubScroll = () => {
//     if (subCategoryContainerRef.current) {
//       const container = subCategoryContainerRef.current;
//       const { scrollTop, scrollHeight, clientHeight } = container;
//       const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
//       setCanScrollSubUp(scrollTop > 0);
//       setCanScrollSubDown(!isAtBottom);
//     }
//   };

//   // render helper for category card when category has no products
//   const currentCategoryObj = getCurrentCategoryObj();

//   const renderCategoryCard = (category) => {
//     if (!category) return null;
//     return (
//       <div className="navProComp-products-container">
//         <div className="navProComp-products-holder">
//           <div>
//             <div
//               style={{ cursor: category.link ? "pointer" : "default" }}
//             >
//               <div className="navProComp-products-img">
//                 {category.imageUrl ? (
//                   <img src={category.imageUrl} alt={category.name} loading="lazy" />
//                 ) : (
//                   <div style={{ height: "15rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     No Image
//                   </div>
//                 )}
//               </div>
//               <div className="navProComp-products-title">{category.name}</div>
//               <div className="navProComp-products-des">{category.description}</div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="navProComp-products-more"
//           onClick={() => {
//             // if there's an external link, open it; otherwise navigate to category internal page
//             if (category.link) {
//               window.open(category.link, "_blank");
//               handleClose();
//             } else {
//               productCategoryNavigator(category.name);
//             }
//           }}
//         >
//           <span>{category.link ? "Visit" : "See More"}</span>
//           <IoIosArrowForward />
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="NavProductComp-container">
//       {productData ? (
//         <div className="navProComp-container">
//           <div className="navProComp-dept-container">
//             <div className="navprocomp-items-heading">Departments</div>
//             <div className="navproComp-item-holder" style={{ position: "relative", height: "100%" }}>
//               <div className="navProComp-dot-container" />
//               {DeptArr?.length > 5 && (
//                 <div className="arrow-wrapper">
//                   {canScrollDeptUp && (
//                     <span onClick={scrollDeptUp} className="arrow-up" aria-label="Scroll up">
//                       <IoIosArrowUp />
//                     </span>
//                   )}
//                   {canScrollDeptDown && (
//                     <span onClick={scrollDeptDown} className="arrow-down" aria-label="Scroll down">
//                       <IoIosArrowDown />
//                     </span>
//                   )}
//                 </div>
//               )}
//               <div className="navProComp-mainCat-item-container" ref={deptContainerRef} onScroll={handleDeptScroll}>
//                 {DeptArr?.map((eachCat, i) => (
//                   <div
//                     key={i}
//                     onMouseEnter={() => HandleDeptHovever(eachCat)}
//                     onClick={() => {
//                       navigate(`/products/${eachCat}`);
//                       handleClose();
//                     }}
//                     className="pointer"
//                   >
//                     <div className={`navProComp-dept-item ${eachCat === deptname ? "mainCat-active" : ""}`}>
//                       {eachCat}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {MainCatArr.length > 0 && (
//             <div className="navProComp-mainCat-container">
//               <div className="navprocomp-items-heading">Categories</div>
//               <div className="navproComp-item-holder" style={{ position: "relative", height: "100%" }}>
//                 <div className="navProComp-dot-container">
//                   {MainCatArr.map((dot, i) => (
//                     <div key={i} className={`navProComp-dot ${dot === mainCatName ? "navProComp-dot-active" : ""}`} />
//                   ))}
//                 </div>
//                 {MainCatArr.length > 5 && (
//                   <div className="arrow-wrapper">
//                     {canScrollCatUp && (
//                       <span onClick={scrollUp} className="arrow-up" aria-label="Scroll up">
//                         <IoIosArrowUp />
//                       </span>
//                     )}
//                     {canScrollCatDown && (
//                       <span onClick={scrollDown} className="arrow-down" aria-label="Scroll down">
//                         <IoIosArrowDown />
//                       </span>
//                     )}
//                   </div>
//                 )}
//                 <div className="navProComp-mainCat-item-container" ref={categoryContainerRef} onScroll={handleScroll}>
//                   {MainCatArr.map((eachCat, i) => (
//                     <div
//                       key={i}
//                       onMouseEnter={() => HandleMainCatHover(eachCat)}
//                       onClick={() => {
//                         window.scrollTo(0, 0);
//                         productCategoryNavigator(eachCat);
//                         handleClose();
//                       }}
//                       className="pointer"
//                     >
//                       <div className={`navProComp-mainCat-item ${eachCat === mainCatName ? "mainCat-active" : ""}`}>
//                         {eachCat}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {showSubCats && subCatsArr.length > 0 && (
//             <div className="navProComp-subCat-container">
//               <div className="navprocomp-items-heading">Products</div>
//               <div className="navproComp-item-holder" style={{ position: "relative", height: "100%" }}>
//                 <div className="navProComp-dot-container">
//                   {subCatsArr.map((dot, i) => (
//                     <div key={i} className={`navProComp-dot ${dot === subCatName ? "navProComp-dot-active" : ""}`} />
//                   ))}
//                 </div>
//                 {subCatsArr.length > 5 && (
//                   <div className="arrow-wrapper">
//                     {canScrollSubUp && (
//                       <span onClick={scrollSubUp} aria-label="Scroll sub up" className="arrow-up">
//                         <IoIosArrowUp />
//                       </span>
//                     )}
//                     {canScrollSubDown && (
//                       <span onClick={scrollSubDown} aria-label="Scroll sub down" className="arrow-down">
//                         <IoIosArrowDown />
//                       </span>
//                     )}
//                   </div>
//                 )}
//                 <div className="navProComp-subCat-item-container" ref={subCategoryContainerRef} onScroll={handleSubScroll}>
//                   {subCatsArr.map((eachItem, i) => (
//                     <div
//                       key={i}
//                       onMouseEnter={() => HandleSubCatHover(eachItem)}
//                       className="pointer"
//                       onClick={() => {
//                         window.scrollTo(0, 0);
//                         singleProductNavigator(eachItem);
//                         handleClose();
//                       }}
//                     >
//                       <div className={`navProComp-mainCat-item ${eachItem === subCatName ? "mainCat-active" : ""}`}>
//                         {eachItem}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* RIGHT PANEL: show product card if product exists, otherwise show category card */}
//           {showProducts && displayProducts ? (
//             <div className="navProComp-products-container">
//               <div className="navProComp-products-holder">
//                 <div>
//                   <div
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       singleProductNavigator(displayProducts.title);
//                       handleClose();
//                     }}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <div className="navProComp-products-img">
//                       <img src={displayProducts.imageUrl} alt="" loading="lazy" />
//                     </div>
//                     <div className="navProComp-products-title">{displayProducts.title}</div>
//                     <div className="navProComp-products-des">{displayProducts.description}</div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="navProComp-products-more"
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                   singleProductNavigator(displayProducts.title);
//                   handleClose();
//                 }}
//               >
//                 <span>See More</span>
//                 <IoIosArrowForward />
//               </div>
//             </div>
//           ) : (
//             // show category card (if available)
//             renderCategoryCard(currentCategoryObj)
//           )}
//         </div>
//       ) : (
//         <div><LoadingStar /></div>
//       )}
//     </div>
//   );
// }

// export default NavProductComp;



import React, { useEffect, useState, useRef } from "react";
import "../../styles/NavProductComp.css";
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import ProjectsData from "../../Data/ProjectData2.json";

function ProjectDropdown({ handleClose }) {
  const navigate = useNavigate();
  const projectData = ProjectsData.Departments;

  const categoryContainerRef = useRef(null);
  const subCategoryContainerRef = useRef(null);

  const [deptName, setDeptName] = useState("");
  const [mainCatName, setMainCatName] = useState("");
  const [subCatName, setSubCatName] = useState("");

  const [MainCatArr, setMainCatArr] = useState([]);
  const [subCatsArr, setSubCatsArr] = useState([]);
  const [finalProjectArr, setFinalProjectArr] = useState([]);

  const [displayProject, setDisplayProject] = useState(null);
  const [showSubCats, setShowSubCats] = useState(true);
  const [showProjects, setShowProjects] = useState(true);

  const [canScrollCatUp, setCanScrollCatUp] = useState(false);
  const [canScrollCatDown, setCanScrollCatDown] = useState(false);
  const [canScrollSubUp, setCanScrollSubUp] = useState(false);
  const [canScrollSubDown, setCanScrollSubDown] = useState(false);

  const DeptArr = projectData.map((item) => item.name);

  useEffect(() => {
    const firstDept = projectData[0];
    const firstCat = firstDept?.categories[0];
    const firstProj = firstCat?.products[0];

    setDeptName(firstDept.name);
    setMainCatArr(firstDept.categories.map((c) => c.name));
    setMainCatName(firstCat.name);

    setFinalProjectArr(firstCat.products);

    if (firstCat.products.length > 0) {
      setSubCatsArr(firstCat.products.map((p) => p.title));
      setSubCatName(firstProj.title);
      setDisplayProject(firstProj);
    } else {
      setDisplayProject(null); // category fallback
    }

    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  function getCurrentCategoryObj() {
    const dept = projectData.find((d) => d.name === deptName);
    if (!dept) return null;
    return dept.categories.find((c) => c.name === mainCatName) || null;
  }

  const HandleDeptHover = (dName) => {
    setDeptName(dName);
    const deptObj = projectData.find((d) => d.name === dName);

    const firstCat = deptObj.categories[0];
    const firstProj = firstCat.products[0];

    setMainCatArr(deptObj.categories.map((c) => c.name));
    setMainCatName(firstCat.name);

    setFinalProjectArr(firstCat.products);

    if (firstCat.products.length > 0) {
      setSubCatsArr(firstCat.products.map((p) => p.title));
      setSubCatName(firstProj.title);
      setDisplayProject(firstProj);
    } else {
      setSubCatsArr([]);
      setDisplayProject(null);
    }
  };

  const HandleMainCatHover = (cat) => {
    setMainCatName(cat);

    const deptObj = projectData.find((d) => d.name === deptName);
    const catObj = deptObj.categories.find((c) => c.name === cat);

    setFinalProjectArr(catObj.products);

    if (catObj.products.length > 0) {
      const firstProj = catObj.products[0];
      setSubCatsArr(catObj.products.map((p) => p.title));
      setSubCatName(firstProj.title);
      setDisplayProject(firstProj);
    } else {
      setSubCatsArr([]);
      setDisplayProject(null);
    }
  };

  const HandleSubCatHover = (projTitle) => {
    setSubCatName(projTitle);
    const proj = finalProjectArr.find((p) => p.title === projTitle);
    setDisplayProject(proj);
  };

  const singleProjectNavigator = (title) => {
    const dept = projectData.find((d) =>
      d.categories.some((c) => c.products.some((p) => p.title === title))
    );

    const cat = dept.categories.find((c) =>
      c.products.some((p) => p.title === title)
    );

    const proj = cat.products.find((p) => p.title === title);

    navigate(
      `/project/${dept.name.replace(/ /g, "-")}/${cat.name.replace(
        / /g,
        "-"
      )}/${proj.title.replace(/ /g, "-")}`
    );
    handleClose();
  };

  const categoryNavigator = (catName) => {
    const dept = projectData.find((d) =>
      d.categories.some((c) => c.name === catName)
    );

    navigate(
      `/project/${dept.name.replace(/ /g, "-")}/${catName.replace(/ /g, "-")}`
    );
    handleClose();
  };

  // Scroll Handling
  const scrollUp = () => {
    categoryContainerRef.current.scrollTop -= 40;
  };
  const scrollDown = () => {
    categoryContainerRef.current.scrollTop += 40;
  };

  const scrollSubUp = () => {
    subCategoryContainerRef.current.scrollTop -= 40;
  };
  const scrollSubDown = () => {
    subCategoryContainerRef.current.scrollTop += 40;
  };

  // ================= RETURN UI =================
  return (
    <div className="NavProductComp-container">
      <div className="navProComp-container">

        {/* === DEPARTMENTS === */}
        <div className="navProComp-dept-container">
          <div className="navprocomp-items-heading">Departments</div>

          <div className="navproComp-item-holder">
            <div className="navProComp-dot-container"></div>

            <div className="navProComp-mainCat-item-container">
              {DeptArr.map((d, i) => (
                <div
                  key={i}
                  onMouseEnter={() => HandleDeptHover(d)}
                  onClick={() =>
                    navigate(`/project/${d.replace(/ /g, "-")}`)
                  }
                >
                  <div
                    className={`navProComp-dept-item ${d === deptName ? "mainCat-active" : ""
                      }`}
                  >
                    {d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === CATEGORIES === */}
        <div className="navProComp-mainCat-container">
          <div className="navprocomp-items-heading">Categories</div>

          <div className="navproComp-item-holder">

            <div className="navProComp-dot-container">
              {MainCatArr.map((c, i) => (
                <div
                  key={i}
                  className={`navProComp-dot ${c === mainCatName ? "navProComp-dot-active" : ""
                    }`}
                ></div>
              ))}
            </div>

            {/* Scroll arrows */}
            {MainCatArr.length > 5 && (
              <div className="arrow-wrapper">
                {canScrollCatUp && (
                  <span className="arrow-up" onClick={scrollUp}>
                    <IoIosArrowUp />
                  </span>
                )}
                {canScrollCatDown && (
                  <span className="arrow-down" onClick={scrollDown}>
                    <IoIosArrowDown />
                  </span>
                )}
              </div>
            )}

            <div
              className="navProComp-mainCat-item-container"
              ref={categoryContainerRef}
            >
              {MainCatArr.map((c, i) => (
                <div
                  key={i}
                  onMouseEnter={() => HandleMainCatHover(c)}
                  onClick={() => categoryNavigator(c)}
                >
                  <div
                    className={`navProComp-mainCat-item ${c === mainCatName ? "mainCat-active" : ""
                      }`}
                  >
                    {c}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === PROJECTS === */}
        <div className="navProComp-subCat-container">
          <div className="navprocomp-items-heading">Projects</div>

          <div className="navproComp-item-holder">
            <div className="navProComp-dot-container">
              {subCatsArr.map((p, i) => (
                <div
                  key={i}
                  className={`navProComp-dot ${p === subCatName ? "navProComp-dot-active" : ""
                    }`}
                ></div>
              ))}
            </div>

            <div
              className="navProComp-subCat-item-container"
              ref={subCategoryContainerRef}
            >
              {subCatsArr.length === 0 && (
                <div className="navProComp-empty-card">No Products</div>
              )}

              {subCatsArr.map((p, i) => (
                <div
                  key={i}
                  onMouseEnter={() => HandleSubCatHover(p)}
                  onClick={() => singleProjectNavigator(p)}
                >
                  <div
                    className={`navProComp-mainCat-item ${p === subCatName ? "mainCat-active" : ""
                      }`}
                  >
                    {p}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === RIGHT SIDE DISPLAY === */}
        <div className="navProComp-products-container">
          <div className="navProComp-products-holder">

            {displayProject ? (
              <div>
                <div>
                  <div className="navProComp-products-img">
                    <img
                      src={displayProject.mainImageUrl}
                      alt={displayProject.title}
                    />
                  </div>

                  <div className="navProComp-products-title">
                    {displayProject.title}
                  </div>

                  <div className="navProComp-products-des">
                    {displayProject.mainDesc}
                  </div>
                </div>
              </div>
            ) : (
              // CATEGORY FALLBACK CARD
              (() => {
                const cat = getCurrentCategoryObj();
                if (!cat)
                  return <div className="navProComp-empty-card">No Preview</div>;

                return (
                  <div>
                    <div>
                      <div className="navProComp-products-img">
                        <img src={cat.imageUrl} alt={cat.name} />
                      </div>

                      <div className="navProComp-products-title">{cat.name}</div>

                      <div className="navProComp-products-des">
                        {cat.description}
                      </div>
                    </div>
                  </div>
                );
              })()
            )}
          </div>

          {/* SEE MORE BUTTON */}
          <div
            className="navProComp-products-more"
            onClick={() => {
              const cat = getCurrentCategoryObj();

              if (displayProject) {
                singleProjectNavigator(displayProject.title);
              } else if (cat.link) {
                window.open(cat.link, "_blank");
              } else {
                categoryNavigator(mainCatName);
              }
            }}
          >
            <span>See More</span>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDropdown;
