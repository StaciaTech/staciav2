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


import React, { useEffect, useState } from "react";
import "../../styles/NavProductComp.css";
import Star from "../../assets/loadingStar.svg";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import data from '../../Data/ProductPage.json'

function NavProductComp({ handleClose }) {
  const navigate = useNavigate();
  // const apiUrl = process.env.REACT_APP_API_URL;

  const Details = data.department;
  console.log(Details,"Details")

  const [productData, setProductData] = useState();

  // const FetchProducts = () => {
  //   try {
  //     setProductData(data.department);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  useEffect(() => {
    // FetchProducts();
    setProductData(data.department)
  }, []);


  console.log(productData, "ProductData");

  const [showSubCats, setShowSubCats] = useState(false);
  const [showProducts, setShowproducts] = useState(false);
  const [hoveringOnDept, setHoveringOnDept] = useState(false);
  const [hoveringOnMain, setHoveringOnmain] = useState(false);
  const [MainCatArr, setMaincatArr] = useState();
  const [subCatsArr, setSubccatsArr] = useState();
  const [deptname, setDeptname] = useState("Mechanical");
  const [mainCatName, setMainCatName] = useState("Agri and Food Processing SPM");
  const [subCatName, setSubCatName] = useState("Onedril (SSM)");
  const [displayProducts, setDisplayProducts] = useState();
  const [finalProductArr, setFinalProductArr] = useState();

  const DeptArr = productData?.map((item) => item.name);
  console.log(DeptArr, "DepartmentNames");

  // console.log(MainCatArrObj?.category);

  const HandleDeptHovever = (DeptName) => {
    // console.log("hovered");

    setDeptname(DeptName);
    const MainCatArrObj = productData?.find((item) => item.name === DeptName);
    console.log(MainCatArrObj,"MainCatArrObj")
    if (MainCatArrObj) {
      setMaincatArr(MainCatArrObj?.category?.map((item) => item.name));
    }
  };

  const HandleMainCatHover = (MainCat) => {
    // console.log(MainCat);

    const MainCatArrObj = productData?.find((item) => item.name=== deptname);
    // console.log(MainCatArrObj?.category);

    setMainCatName(MainCat);
    const subCatObj = MainCatArrObj?.category?.find(
      (item) => item.name === MainCat
    );
    console.log(subCatObj, "SubCategory");
    setFinalProductArr(subCatObj?.products);
    console.log(subCatObj?.products);

    if (subCatObj) {
      setShowSubCats([]);
      setSubccatsArr(
        subCatObj?.products?.map((eachSubCat) => eachSubCat.title)
      );
    }
    setShowSubCats(true);
  };
  console.log(subCatsArr, "SubCategoryArray");
  const HandleSubCatHover = (SubCat) => {
    setSubCatName(SubCat);
    // console.log(SubCat);
    // console.log(finalProductArr);

    // const subCatObj = productDropdownArr.find(
    //   (item) => item.Category === mainCatName
    // );
    // console.log(subCatObj);

    const ProductsFound = finalProductArr?.find(
      (item) => item.title === SubCat
    );
    console.log(ProductsFound,"ProductsFound")
    setDisplayProducts(ProductsFound);
    // console.log(displayProducts);

    setShowproducts(true);
  };
  // console.log(displayProducts);
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
      return null; // If product is not found
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
    return null; // If category is not found
  }

  const productCategoryNavigator = (categoryTitle) => {
    const result = findCategoryPath(productData, categoryTitle);
    if (result) {
      console.log("Department:", result.department);
      console.log("Category:", result.category);
      const CategoryKey = result.category.name.split(" ");
      console.log(CategoryKey);

      navigate(
        `/products/${result.department.name
          .split(" ")
          .join("-")}/${result.category.name.split(" ").join("-")}`
      );
    } else {
      console.log("Product not found");
    }
  };

  // Usage example

  const singleProductNavigator = (productTitle) => {
    // const productTitle = "CarBon";
    const result = findProductPath(productData, productTitle);

    if (result) {
      console.log("Department:", result.department);
      console.log("Category:", result.category);
      console.log("Product:", result.product);
      const productKey = productTitle.split(" ").join("-");
      console.log(productKey);

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
  
  // const result = findProductPath(productData, productTitle);

  return (
    <div className="NavProductComp-container">
      <div className="navProComp-container">
        <div className="navProComp-dept-container">
          <div className="navprocomp-items-heading">Department</div>
          <div className="navproComp-item-holder">
            <div className="navProComp-dot-container">
              {/* {hoveringOnDept &&
                DeptArr?.map((dot, i) => (
                  <div
                    key={i}
                    className={`navProComp-dot ${
                      dot === mainCatName ? "navProComp-dot-active" : ""
                    }`}
                  ></div>
                ))} */}
            </div>
            <div
              className="navProComp-mainCat-item-container"
              onMouseEnter={() => setHoveringOnDept(true)}
              onMouseLeave={() => setHoveringOnDept(false)}
            >
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
                    className={`navProComp-dept-item ${
                      eachCat === deptname ? "mainCat-active" : ""
                    }`}
                  >
                    {eachCat}
                  </div>
                  {eachCat === deptname && (
                    <div>
                      <img src={Star} alt="" style={{ width: "18px" }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {MainCatArr?.length && (
          <>
            <div className="navProComp-mainCat-container">
              <div className="navprocomp-items-heading">Industry</div>
              <div className="navproComp-item-holder">
                <div className="navProComp-dot-container">
                  {hoveringOnMain &&
                    MainCatArr?.map((dot, i) => (
                      <div
                        key={i}
                        className={`navProComp-dot ${
                          dot === mainCatName ? "navProComp-dot-active" : ""
                        }`}
                      ></div>
                    ))}
                </div>
                <div
                  className="navProComp-mainCat-item-container"
                  onMouseEnter={() => setHoveringOnmain(true)}
                  onMouseLeave={() => setHoveringOnmain(false)}
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
                        className={`navProComp-mainCat-item ${
                          eachCat === mainCatName ? "mainCat-active" : ""
                        }`}
                      >
                        {eachCat}
                      </div>
                      {eachCat === mainCatName && (
                        <div>
                          <img src={Star} alt="" style={{ width: "18px" }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
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
                      className={`navProComp-dot ${
                        dot === subCatName ? "navProComp-dot-active" : ""
                      }`}
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
                        // navigate(`/products/${eachItem}`);
                        singleProductNavigator(eachItem);
                        handleClose();
                      }}
                    >
                      <div
                        className={`navProComp-mainCat-item ${
                          eachItem === subCatName ? "mainCat-active" : ""
                        }`}
                      >
                        {eachItem}
                      </div>
                      {eachItem === subCatName && (
                        <div>
                          <img src={Star} alt="" style={{ width: "18px" }} />
                        </div>
                      )}
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
              {/* {finalProductArr?.slice(0, 1).map((eachPro, i) => ( */}
              <div>
                <div>
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
              {/* ))} */}
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
    // <>
    // <h1>NavProductComp</h1>
    // </>
  );
}

export default NavProductComp;
