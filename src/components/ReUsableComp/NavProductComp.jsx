// import React, { useEffect, useState } from "react";
// import "../../styles/NavProductComp.css";
// import Star from "../../assets/loadingStar.svg";
// import { IoIosArrowForward } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// function NavProductComp({ handleClose }) {
//   const navigate = useNavigate();
//   const apiUrl = process.env.REACT_APP_API_URL;

//   const [productData, setProductData] = useState();

//   const FetchProducts = async () => {
//     try {
//       const res = await axios.get(`${apiUrl}/product/all-products-index`);
//       console.log(res.data.docs,"Product Data");
//       setProductData(res.data.docs);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     FetchProducts();
//   }, []);

//   const [showSubCats, setShowSubCats] = useState(false);
//   const [showProducts, setShowproducts] = useState(false);
//   const [hoveringOnDept, setHoveringOnDept] = useState(false);
//   const [hoveringOnMain, setHoveringOnmain] = useState(false);
//   const [MainCatArr, setMaincatArr] = useState();
//   const [subCatsArr, setSubccatsArr] = useState();
//   const [deptname, setDeptname] = useState();
//   const [mainCatName, setMainCatName] = useState();
//   const [subCatName, setSubCatName] = useState();
//   const [displayProducts, setDisplayProducts] = useState();
//   const [finalProductArr, setFinalProductArr] = useState();

//   const DeptArr = productData?.map((item) => item.name);
//   // console.log(DeptArr);

//   // console.log(MainCatArrObj?.category);

//   const HandleDeptHovever = (DeptName) => {
//     // console.log("hovered");

//     setDeptname(DeptName);
//     const MainCatArrObj = productData?.find((item) => item.name === DeptName);
//     if (MainCatArrObj) {
//       setMaincatArr(MainCatArrObj?.categories?.map((item) => item.name));
//     }
//   };

//   const HandleMainCatHover = (MainCat) => {
//     // console.log(MainCat);

//     const MainCatArrObj = productData?.find((item) => item.name === deptname);
//     // console.log(MainCatArrObj?.categories);

//     setMainCatName(MainCat);
//     const subCatObj = MainCatArrObj?.categories?.find(
//       (item) => item.name === MainCat
//     );
//     // console.log(subCatObj);
//     setFinalProductArr(subCatObj?.products);
//     // console.log(subCatObj?.products);

//     if (subCatObj) {
//       setShowSubCats([]);
//       setSubccatsArr(
//         subCatObj?.products?.map((eachSubCat) => eachSubCat.title)
//       );
//     }
//     setShowSubCats(true);
//   };
//   // console.log(subCatsArr);
//   const HandleSubCatHover = (SubCat) => {
//     setSubCatName(SubCat);
//     // console.log(SubCat);
//     // console.log(finalProductArr);

//     // const subCatObj = productDropdownArr.find(
//     //   (item) => item.Category === mainCatName
//     // );
//     // console.log(subCatObj);

//     const ProductsFound = finalProductArr?.find(
//       (item) => item.title === SubCat
//     );
//     setDisplayProducts(ProductsFound);
//     // console.log(displayProducts);

//     setShowproducts(true);
//   };
//   // console.log(displayProducts);
//   function findProductPath(productData, productTitle) {
//     if (productData) {
//       for (let department of productData) {
//         for (let category of department.categories) {
//           for (let product of category.products) {
//             if (product.title === productTitle) {
//               return { department, category, product };
//             }
//           }
//         }
//       }
//       return null; // If product is not found
//     }
//   }

//   function findCategoryPath(productData, productCategory) {
//     if (productData) {
//       for (let department of productData) {
//         for (let category of department.categories) {
//           if (category.name === productCategory) {
//             return { department, category };
//           }
//         }
//       }
//     }
//     return null; // If category is not found
//   }

//   const productCategoryNavigator = (categoryTitle) => {
//     const result = findCategoryPath(productData, categoryTitle);
//     if (result) {
//       console.log("Department:", result.department);
//       console.log("Category:", result.category);
//       const CategoryKey = result.category.name.split(" ");
//       console.log(CategoryKey);

//       navigate(
//         `/products/${result.department.name
//           .split(" ")
//           .join("-")}/${result.category.name.split(" ").join("-")}`
//       );
//     } else {
//       console.log("Product not found");
//     }
//   };

//   // Usage example

//   const singleProductNavigator = (productTitle) => {
//     // const productTitle = "CarBon";
//     const result = findProductPath(productData, productTitle);

//     if (result) {
//       console.log("Department:", result.department);
//       console.log("Category:", result.category);
//       console.log("Product:", result.product);
//       const productKey = productTitle.split(" ").join("-");
//       console.log(productKey);

//       navigate(
//         `/products/${result.department.name
//           .split(" ")
//           .join("-")}/${result.category.name
//           .split(" ")
//           .join("-")}/${productKey}`
//       );
//     } else {
//       console.log("Product not found");
//     }
//   };

//   // const result = findProductPath(productData, productTitle);

//   return (
//     <div className="NavProductComp-container">
//       <div className="navProComp-container">
//         <div className="navProComp-dept-container">
//           <div className="navprocomp-items-heading">Department</div>
//           <div className="navproComp-item-holder">
//             <div className="navProComp-dot-container">
//               {/* {hoveringOnDept &&
//                 DeptArr?.map((dot, i) => (
//                   <div
//                     key={i}
//                     className={`navProComp-dot ${
//                       dot === mainCatName ? "navProComp-dot-active" : ""
//                     }`}
//                   ></div>
//                 ))} */}
//             </div>
//             <div
//               className="navProComp-mainCat-item-container"
//               onMouseEnter={() => setHoveringOnDept(true)}
//               onMouseLeave={() => setHoveringOnDept(false)}
//             >
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
//                   {eachCat === deptname && (
//                     <div>
//                       <img src={Star} alt="" style={{ width: "18px" }} />
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {MainCatArr?.length && (
//           <>
//             <div className="navProComp-mainCat-container">
//               <div className="navprocomp-items-heading">Industry</div>
//               <div className="navproComp-item-holder">
//                 <div className="navProComp-dot-container">
//                   {hoveringOnMain &&
//                     MainCatArr?.map((dot, i) => (
//                       <div
//                         key={i}
//                         className={`navProComp-dot ${
//                           dot === mainCatName ? "navProComp-dot-active" : ""
//                         }`}
//                       ></div>
//                     ))}
//                 </div>
//                 <div
//                   className="navProComp-mainCat-item-container"
//                   onMouseEnter={() => setHoveringOnmain(true)}
//                   onMouseLeave={() => setHoveringOnmain(false)}
//                 >
//                   {MainCatArr?.map((eachCat, i) => (
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
//                       {eachCat === mainCatName && (
//                         <div>
//                           <img src={Star} alt="" style={{ width: "18px" }} />
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//         {showSubCats && subCatsArr?.length && (
//           <>
//             <div className="navProComp-subCat-container">
//               <div className="navprocomp-items-heading">Products</div>
//               <div className="navproComp-item-holder">
//                 <div className="navProComp-dot-container">
//                   {subCatsArr?.map((dot, i) => (
//                     <div
//                       key={i}
//                       className={`navProComp-dot ${
//                         dot === subCatName ? "navProComp-dot-active" : ""
//                       }`}
//                     ></div>
//                   ))}
//                 </div>
//                 <div className="navProComp-subCat-item-container">
//                   {subCatsArr?.map((eachItem, i) => (
//                     <div
//                       key={i}
//                       onMouseEnter={() => HandleSubCatHover(eachItem)}
//                       className="pointer"
//                       onClick={() => {
//                         window.scrollTo(0, 0);
//                         // navigate(`/products/${eachItem}`);
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
//                       {eachItem === subCatName && (
//                         <div>
//                           <img src={Star} alt="" style={{ width: "18px" }} />
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//         {showProducts && displayProducts && (
//           <div className="navProComp-products-container">
//             <div className="navProComp-products-holder">
//               {/* {finalProductArr?.slice(0, 1).map((eachPro, i) => ( */}
//               <div>
//                 <div>
//                   <div className="navProComp-products-img">
//                     <img src={displayProducts.imageUrl} alt="" />
//                   </div>
//                   <div className="navProComp-products-title">
//                     {displayProducts.title}
//                   </div>
//                   <div className="navProComp-products-des">
//                     {displayProducts.des}
//                   </div>
//                 </div>
//               </div>
//               {/* ))} */}
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
//       </div>
//     </div>
//   );
// }

// export default NavProductComp;











// Static


// import React, { useEffect, useState } from "react";
// import "../../styles/NavProductComp.css";
// import Star from "../../assets/loadingStar.svg";
// import { IoIosArrowForward } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import data from '../../Data/ProductPage.json'

// function NavProductComp({ handleClose }) {
//   const navigate = useNavigate();
//   const Details = data.department;
//   // console.log(Details,"Details")

//   const [productData, setProductData] = useState();  


//   useEffect(() => {
//     setProductData(data.department);

//   const defaultDept = data.department?.[0];
//   const defaultCategory = defaultDept?.category?.[0];
//   const defaultProduct = defaultCategory?.products?.[0];

//   if (defaultDept && defaultCategory && defaultProduct) {
//     // Set default department name
//     setDeptname(defaultDept.name);

//     // Set all main categories of this department
//     setMaincatArr(defaultDept.category.map((cat) => cat.name));

//     // Set selected main category
//     setMainCatName(defaultCategory.name);

//     // Set products under selected category
//     setFinalProductArr(defaultCategory.products);

//     // Set product titles (for subcategories)
//     setSubccatsArr(defaultCategory.products.map((prod) => prod.title));

//     // Set default selected product
//     setSubCatName(defaultProduct.title);
//     setDisplayProducts(defaultProduct);

//     // Show subcategories and product section
//     setShowSubCats(true);
//     setShowproducts(true);
//   }

//   document.body.classList.add("no-scroll");

//   return() =>{
//     document.body.classList.remove("no-scroll")
//   }
//   }, []);

//   console.log(productData, "ProductData");

 

//   const [showSubCats, setShowSubCats] = useState(false);
//   const [showProducts, setShowproducts] = useState(false);
//   const [hoveringOnDept, setHoveringOnDept] = useState(false);
//   const [hoveringOnMain, setHoveringOnmain] = useState(false);
//   const [MainCatArr, setMaincatArr] = useState();
//   const [subCatsArr, setSubccatsArr] = useState();
//   const [deptname, setDeptname] = useState();
//   const [mainCatName, setMainCatName] = useState();
//   const [subCatName, setSubCatName] = useState();
//   const [displayProducts, setDisplayProducts] = useState();
//   const [finalProductArr, setFinalProductArr] = useState();

//   const DeptArr = productData?.map((item) => item.name);
//   // console.log(DeptArr, "DepartmentNames");

//   // console.log(MainCatArrObj?.category);

//   const HandleDeptHovever = (DeptName) => {
//     // console.log("hovered");

//     setDeptname(DeptName);
//     const MainCatArrObj = productData?.find((item) => item.name === DeptName);
//     console.log(MainCatArrObj,"MainCatArrObj")
//     // Default
//     if (MainCatArrObj) {
//       const categories = MainCatArrObj.category || [];
//       console.log(categories, "DefaultCategory")
//       const firstCategory = categories[0];
//       const firstProduct = firstCategory?.products[0];
//       console.log(categories,firstCategory, firstProduct, "Moses*****")
//       // Set main categories for department
//       setMaincatArr(MainCatArrObj?.category?.map((item) => item.name));

//       if(firstCategory){
//         setMainCatName(firstCategory?.name);
//         setFinalProductArr(firstCategory?.products);

//         const subCatTitles = firstCategory?.products?.map((pro)=>pro.title);
//         setSubccatsArr(subCatTitles);
//         setShowSubCats(true);
//         if(firstProduct){
//           setSubCatName(firstProduct.title);
//           setDisplayProducts(firstProduct);
//           setShowproducts(true);
//         }
//       }
//     }
//   };

//   const HandleMainCatHover = (MainCat) => {
//     // console.log(MainCat);

//     const MainCatArrObj = productData?.find((item) => item.name=== deptname);
//     // console.log(MainCatArrObj?.category);

//     setMainCatName(MainCat);
//     const subCatObj = MainCatArrObj?.category?.find(
//       (item) => item.name === MainCat
//     );
//     console.log(subCatObj, "SubCategory");

//     setFinalProductArr(subCatObj?.products);
//     console.log(subCatObj?.products);

//     if (subCatObj) {
//       // Default 
//       const productTitles = subCatObj?.products?.map((eachSubCat) => eachSubCat.title);
//       // setShowSubCats([]);
//       // setSubccatsArr(
//       //   subCatObj?.products?.map((eachSubCat) => eachSubCat.title)
//       // );
//     setSubccatsArr(productTitles);

//     // Set deafualt first product

//     const firstProduct  = subCatObj.products?.[0];
//     if(firstProduct){
//       setSubCatName(firstProduct.title);
//       setDisplayProducts(firstProduct);
//       setShowproducts(true)
//     }
//     }
//     setShowSubCats(true);
//   };

//   console.log(subCatsArr, "SubCategoryArray");
//   const HandleSubCatHover = (SubCat) => {
//     setSubCatName(SubCat);
//     // console.log(SubCat);
//     // console.log(finalProductArr);

//     // const subCatObj = productDropdownArr.find(
//     //   (item) => item.Category === mainCatName
//     // );
//     // console.log(subCatObj);

//     const ProductsFound = finalProductArr?.find(
//       (item) => item.title === SubCat
//     );
//     console.log(ProductsFound,"ProductsFound")
//     setDisplayProducts(ProductsFound);
//     // console.log(displayProducts);

//     setShowproducts(true);
//   };
//   // console.log(displayProducts);
//   function findProductPath(productData, productTitle) {
//     if (productData) {
//       for (let department of productData) {
//         for (let category of department.category) {
//           for (let product of category.products) {
//             if (product.title === productTitle) {
//               return { department, category, product };
//             }
//           }
//         }
//       }
//       return null; // If product is not found
//     }
//   }

//   function findCategoryPath(productData, productCategory) {
//     if (productData) {
//       for (let department of productData) {
//         for (let category of department.category) {
//           if (category.name === productCategory) {
//             return { department, category };
//           }
//         }
//       }
//     }
//     return null; // If category is not found
//   }

//   const productCategoryNavigator = (categoryTitle) => {
//     const result = findCategoryPath(productData, categoryTitle);
//     if (result) {
//       console.log("Department:", result.department);
//       console.log("Category:", result.category);
//       const CategoryKey = result.category.name.split(" ");
//       console.log(CategoryKey);

//       navigate(
//         `/products/${result.department.name
//           .split(" ")
//           .join("-")}/${result.category.name.split(" ").join("-")}`
//       );
//     } else {
//       console.log("Product not found");
//     }
//   };

//   // Usage example

//   const singleProductNavigator = (productTitle) => {
//     // const productTitle = "CarBon";
//     const result = findProductPath(productData, productTitle);

//     if (result) {
//       console.log("Department:", result.department);
//       console.log("Category:", result.category);
//       console.log("Product:", result.product);
//       const productKey = productTitle.split(" ").join("-");
//       console.log(productKey);

//       navigate(
//         `/products/${result.department.name
//           .split(" ")
//           .join("-")}/${result.category.name
//           .split(" ")
//           .join("-")}/${productKey}`
//       );
//     } else {
//       console.log("Product not found");
//     }
//   };

  
  
//   // const result = findProductPath(productData, productTitle);

//   return (
//     <div className="NavProductComp-container">
//       <div className="navProComp-container">
//         <div className="navProComp-dept-container">
//           <div className="navprocomp-items-heading">Departments</div>
//           <div className="navproComp-item-holder">
//             <div className="navProComp-dot-container">
//               {/* {hoveringOnDept &&
//                 DeptArr?.map((dot, i) => (
//                   <div
//                     key={i}
//                     className={`navProComp-dot ${
//                       dot === mainCatName ? "navProComp-dot-active" : ""
//                     }`}
//                   ></div>
//                 ))} */}
//             </div>
//             <div
//               className="navProComp-mainCat-item-container"
//               onMouseEnter={() => setHoveringOnDept(true)}
//               onMouseLeave={() => setHoveringOnDept(false)}
//             >
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
//                   {/* {eachCat === deptname && (
//                     <div>
//                       <img src={Star} alt="" style={{ width: "18px" }} />
//                     </div>
//                   )} */}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {MainCatArr?.length && (
//           <>
//             <div className="navProComp-mainCat-container">
//               <div className="navprocomp-items-heading">Categories</div>
//               <div className="navproComp-item-holder">
//                 <div className="navProComp-dot-container">
//                   {hoveringOnMain &&
//                     MainCatArr?.map((dot, i) => (
//                       <div
//                         key={i}
//                         className={`navProComp-dot ${
//                           dot === mainCatName ? "navProComp-dot-active" : ""
//                         }`}
//                       ></div>
//                     ))}
//                 </div>
//                 <div
//                   className="navProComp-mainCat-item-container"
//                   onMouseEnter={() => setHoveringOnmain(true)}
//                   onMouseLeave={() => setHoveringOnmain(false)}
//                 >
//                   {MainCatArr?.map((eachCat, i) => (
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
//                       {/* {eachCat === mainCatName && (
//                         <div>
//                           <img src={Star} alt="" style={{ width: "18px" }} />
//                         </div>
//                       )} */}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//         {showSubCats && subCatsArr?.length && (
//           <>
//             <div className="navProComp-subCat-container">
//               <div className="navprocomp-items-heading">Products</div>
//               <div className="navproComp-item-holder">
//                 <div className="navProComp-dot-container">
//                   {subCatsArr?.map((dot, i) => (
//                     <div
//                       key={i}
//                       className={`navProComp-dot ${
//                         dot === subCatName ? "navProComp-dot-active" : ""
//                       }`}
//                     ></div>
//                   ))}
//                 </div>
//                 <div className="navProComp-subCat-item-container">
//                   {subCatsArr?.map((eachItem, i) => (
//                     <div
//                       key={i}
//                       onMouseEnter={() => HandleSubCatHover(eachItem)}
//                       className="pointer"
//                       onClick={() => {
//                         window.scrollTo(0, 0);
//                         // navigate(`/products/${eachItem}`);
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
//                       {/* {eachItem === subCatName && (
//                         <div>
//                           <img src={Star} alt="" style={{ width: "18px" }} />
//                         </div>
//                       )} */}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//         {showProducts && displayProducts && (
//           <div className="navProComp-products-container">
//             <div className="navProComp-products-holder">
//               {/* {finalProductArr?.slice(0, 1).map((eachPro, i) => ( */}
//               <div>
//                 <div onClick={() => {
//                 window.scrollTo(0, 0);
//                 singleProductNavigator(displayProducts.title);
//                 handleClose();
//               }} 
//               style={{cursor:"pointer"}}>
//                   <div className="navProComp-products-img">
//                     <img src={displayProducts.imageUrl} alt="" />
//                   </div>
//                   <div className="navProComp-products-title">
//                     {displayProducts.title}
//                   </div>
//                   <div className="navProComp-products-des">
//                     {displayProducts.description}
//                   </div>
//                 </div>
//               </div>
//               {/* ))} */}
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
//       </div>
//     </div>
//     // <>
//     // <h1>NavProductComp</h1>
//     // </>
//   );
// }

// export default NavProductComp;


import React, { useEffect, useRef, useState } from "react";
import "../../styles/NavProductComp.css";
import Star from "../../assets/loadingStar.svg";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import data from '../../Data/ProductPage.json'

function NavProductComp({ handleClose }) {
  const navigate = useNavigate();
  const Details = data.department;

  const [productData, setProductData] = useState();  
  const categoryContainerRef = useRef(null); // Ref for the scrollable container

  useEffect(() => {
    setProductData(data.department);

    const defaultDept = data.department?.[0];
    const defaultCategory = defaultDept?.category?.[0];
    const defaultProduct = defaultCategory?.products?.[0];

    if (defaultDept && defaultCategory && defaultProduct) {
      setDeptname(defaultDept.name);
      setMaincatArr(defaultDept.category.map((cat) => cat.name));
      setMainCatName(defaultCategory.name);
      setFinalProductArr(defaultCategory.products);
      setSubccatsArr(defaultCategory.products.map((prod) => prod.title));
      setSubCatName(defaultProduct.title);
      setDisplayProducts(defaultProduct);
      setShowSubCats(true);
      setShowproducts(true);
    }

    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const [showSubCats, setShowSubCats] = useState(false);
  const [showProducts, setShowproducts] = useState(false);
  const [MainCatArr, setMaincatArr] = useState();
  const [subCatsArr, setSubccatsArr] = useState();
  const [deptname, setDeptname] = useState();
  const [mainCatName, setMainCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [displayProducts, setDisplayProducts] = useState();
  const [finalProductArr, setFinalProductArr] = useState();
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);

  const DeptArr = productData?.map((item) => item.name);

  const HandleDeptHovever = (DeptName) => {
    setDeptname(DeptName);
    const MainCatArrObj = productData?.find((item) => item.name === DeptName);
    console.log(MainCatArrObj, "MainCatObjProductPage")
    if (MainCatArrObj) {
      const categories = MainCatArrObj.category || [];
      const firstCategory = categories[0];
      const firstProduct = firstCategory?.products[0];
      setMaincatArr(MainCatArrObj?.category?.map((item) => item.name));

      if(firstCategory){
        setMainCatName(firstCategory?.name);
        setFinalProductArr(firstCategory?.products);
        const subCatTitles = firstCategory?.products?.map((pro)=>pro.title);
        setSubccatsArr(subCatTitles);
        setShowSubCats(true);
        if(firstProduct){
          setSubCatName(firstProduct.title);
          setDisplayProducts(firstProduct);
          setShowproducts(true);
        }
      }
    }
  };

  const HandleMainCatHover = (MainCat) => {
    const MainCatArrObj = productData?.find((item) => item.name === deptname);
    setMainCatName(MainCat);
    const subCatObj = MainCatArrObj?.category?.find(
      (item) => item.name === MainCat
    );

    setFinalProductArr(subCatObj?.products);
    if (subCatObj) {
      const productTitles = subCatObj?.products?.map((eachSubCat) => eachSubCat.title);
      setSubccatsArr(productTitles);
      const firstProduct = subCatObj.products?.[0];
      if(firstProduct){
        setSubCatName(firstProduct.title);
        setDisplayProducts(firstProduct);
        setShowproducts(true);
      }
    }
    setShowSubCats(true);
  };

  const HandleSubCatHover = (SubCat) => {
    setSubCatName(SubCat);
    const ProductsFound = finalProductArr?.find(
      (item) => item.title === SubCat
    );
    setDisplayProducts(ProductsFound);
    setShowproducts(true);
  };

  const scrollUp = () => {
    if(categoryContainerRef.current){
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px
      // if no items
      container.scrollTop = itemHeight;
    }
  }

  const scrollDown = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
      container.scrollTop += itemHeight;
    }
  };

  const handleScroll = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      setShowUpArrow(scrollTop > 0);
      setShowDownArrow(scrollHeight - (scrollTop + clientHeight) > 0);
    }
  };


  function findProductPath(productData, productTitle) {
    if (productData) {
      for (let department of productData) {
        for (let category of department.category) {
          for (let product of category.products) {
            if (product.title === productTitle) {
              return { department, category, product };
            }
          }
        }
      }
      return null;
    }
  }

  function findCategoryPath(productData, productCategory) {
    if (productData) {
      for (let department of productData) {
        for (let category of department.category) {
          if (category.name === productCategory) {
            return { department, category };
          }
        }
      }
    }
    return null;
  }

  const productCategoryNavigator = (categoryTitle) => {
    const result = findCategoryPath(productData, categoryTitle);
    if (result) {
      navigate(
        `/products/${result.department.name
          .split(" ")
          .join("-")}/${result.category.name.split(" ").join("-")}`
      );
    } else {
      console.log("Product not found");
    }
  };

  const singleProductNavigator = (productTitle) => {
    const result = findProductPath(productData, productTitle);
    if (result) {
      const productKey = productTitle.split(" ").join("-");
      navigate(
        `/products/${result.department.name
          .split(" ")
          .join("-")}/${result.category.name
          .split(" ")
          .join("-")}/${productKey}`
      );
    } else {
      console.log("Product not found");
    }
  };

  return (
    <div className="NavProductComp-container">
      <div className="navProComp-container">
        <div className="navProComp-dept-container">
          <div className="navprocomp-items-heading">Departments</div>
          <div className="navproComp-item-holder">
            <div className="navProComp-dot-container">
              {/* {DeptArr?.map((dot, i) => (
                <div
                  key={i}
                  className={`navProComp-dot ${dot === deptname ? "navProComp-dot-active" : ""}`}
                ></div>
              ))} */}
            </div>
            <div className="navProComp-mainCat-item-container">
              {DeptArr?.map((eachCat, i) => (
                <div
                  key={i}
                  onMouseEnter={() => HandleDeptHovever(eachCat)}
                  onClick={() => {
                    navigate(`/products/${eachCat}`);
                    handleClose();
                  }}
                  className="pointer"
                >
                  <div
                    className={`navProComp-dept-item ${eachCat === deptname ? "mainCat-active" : ""}`}
                  >
                    {eachCat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {MainCatArr?.length && (
          <>
            <div className="navProComp-mainCat-container">
              <div className="navprocomp-items-heading">Categories</div>
              <div className="navproComp-item-holder">
                <div className="navProComp-dot-container">
                  {MainCatArr?.map((dot, i) => (
                    <div
                      key={i}
                      className={`navProComp-dot ${dot === mainCatName ? "navProComp-dot-active" : ""}`}
                    ></div>
                  ))}
                </div>
                <div className="navProComp-mainCat-item-container"
                ref={categoryContainerRef}
                onScroll={handleScroll}
                >
                  {MainCatArr?.map((eachCat, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => HandleMainCatHover(eachCat)}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        productCategoryNavigator(eachCat);
                        handleClose();
                      }}
                      className="pointer"
                    >
                      <div
                        className={`navProComp-mainCat-item ${eachCat === mainCatName ? "mainCat-active" : ""}`}
                      >
                        {eachCat}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "0.5rem 0" }}>
                {showUpArrow && (
                  <span
                    onClick={scrollUp}
                    style={{ cursor: "pointer", fontSize: "1.2rem", color: "#0047ff" }}
                  >
                    <IoIosArrowUp />
                  </span>
                )}                
              </div>
              
              </div>
              {showDownArrow && (
                  <span
                    onClick={scrollDown}
                    style={{ cursor: "pointer", fontSize: "1.2rem", color: "#0047ff" }}
                  >
                    <IoIosArrowDown />
                  </span>
                )}
            </div>
          </>
        )}
        {showSubCats && subCatsArr?.length && (
          <>
            <div className="navProComp-subCat-container">
              <div className="navprocomp-items-heading">Products</div>
              <div className="navproComp-item-holder">
                <div className="navProComp-dot-container">
                  {subCatsArr?.map((dot, i) => (
                    <div
                      key={i}
                      className={`navProComp-dot ${dot === subCatName ? "navProComp-dot-active" : ""}`}
                    ></div>
                  ))}
                </div>
                <div className="navProComp-subCat-item-container">
                  {subCatsArr?.map((eachItem, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => HandleSubCatHover(eachItem)}
                      className="pointer"
                      onClick={() => {
                        window.scrollTo(0, 0);
                        singleProductNavigator(eachItem);
                        handleClose();
                      }}
                    >
                      <div
                        className={`navProComp-mainCat-item ${eachItem === subCatName ? "mainCat-active" : ""}`}
                      >
                        {eachItem}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        {showProducts && displayProducts && (
          <div className="navProComp-products-container">
            <div className="navProComp-products-holder">
              <div>
                <div
                  onClick={() => {
                    window.scrollTo(0, 0);
                    singleProductNavigator(displayProducts.title);
                    handleClose();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="navProComp-products-img">
                    <img src={displayProducts.imageUrl} alt="" />
                  </div>
                  <div className="navProComp-products-title">
                    {displayProducts.title}
                  </div>
                  <div className="navProComp-products-des">
                    {displayProducts.description}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="navProComp-products-more"
              onClick={() => {
                window.scrollTo(0, 0);
                singleProductNavigator(displayProducts.title);
                handleClose();
              }}
            >
              <span>See More</span>
              <IoIosArrowForward />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavProductComp;