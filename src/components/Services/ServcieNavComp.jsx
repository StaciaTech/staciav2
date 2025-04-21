// import React, { useEffect, useState } from "react";
// import "../../styles/NavProductComp.css";
// import Star from "../../assets/loadingStar.svg";
// import { IoIosArrowForward } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function ServcieNavComp({ handleClose }) {
//   const navigate = useNavigate();
//   const apiUrl = process.env.REACT_APP_API_URL;

//   const [serviceData, setServiceData] = useState();

//   const FetchServices = async () => {
//     try {
//       const res = await axios.get(`${apiUrl}/service/all-service-index`);
//       console.log(res.data.docs);
//       setServiceData(res.data.docs);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     FetchServices();
//   }, []);

//   const [showSubCats, setShowSubCats] = useState(false);
//   const [showServices, setShowServices] = useState(false);
//   const [hoveringOnDept, setHoveringOnDept] = useState(false);
//   const [hoveringOnMain, setHoveringOnmain] = useState(false);
//   const [MainCatArr, setMaincatArr] = useState();
//   const [subCatsArr, setSubccatsArr] = useState();
//   const [deptname, setDeptname] = useState();
//   const [mainCatName, setMainCatName] = useState();
//   const [subCatName, setSubCatName] = useState();
//   const [displayServices, setDisplayServices] = useState();
//   const [finalServiceArr, setFinalServiceArr] = useState();

//   const DeptArr = serviceData?.map((item) => item.name);
//   // console.log(DeptArr);

//   // console.log(MainCatArrObj?.categories);

//   const HandleDeptHovever = (DeptName) => {
//     // console.log("hovered");

//     setDeptname(DeptName);
//     const MainCatArrObj = serviceData?.find((item) => item.name === DeptName);
//     if (MainCatArrObj) {
//       setMaincatArr(MainCatArrObj?.categories?.map((item) => item.name));
//     }
//   };

//   const HandleMainCatHover = (MainCat) => {
//     // console.log(MainCat);

//     const MainCatArrObj = serviceData?.find((item) => item.name === deptname);
//     // console.log(MainCatArrObj?.categories);

//     setMainCatName(MainCat);
//     const subCatObj = MainCatArrObj?.categories?.find(
//       (item) => item.name === MainCat
//     );
//     // console.log(subCatObj);
//     setFinalServiceArr(subCatObj?.services);
//     // console.log(subCatObj?.products);

//     if (subCatObj) {
//       setShowSubCats([]);
//       setSubccatsArr(
//         subCatObj?.services?.map((eachSubCat) => eachSubCat.title)
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

//     const ProductsFound = finalServiceArr?.find(
//       (item) => item.title === SubCat
//     );
//     setDisplayServices(ProductsFound);
//     // console.log(displayProducts);

//     setShowServices(true);
//   };
//   console.log(displayServices);
//   function findServicePath(serviceData, productTitle) {
//     if (serviceData) {
//       for (let department of serviceData) {
//         for (let category of department.categories) {
//           for (let product of category.services) {
//             if (product.title === productTitle) {
//               return { department, category, product };
//             }
//           }
//         }
//       }
//       return null; // If product is not found
//     }
//   }

//   function findCategoryPath(serviceData, productCategory) {
//     if (serviceData) {
//       for (let department of serviceData) {
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
//     const result = findCategoryPath(serviceData, categoryTitle);
//     if (result) {
//       console.log("Department:", result.department);
//       console.log("Category:", result.category);
//       const CategoryKey = result.category.name.split(" ");
//       console.log(CategoryKey);

//       navigate(
//         `/services/${result.department.name
//           .split(" ")
//           .join("-")}/${result.category.name.split(" ").join("-")}`
//       );
//     } else {
//       console.log("Product not found");
//     }
//   };

//   // Usage example

//   const singleProductNavigator = (productTitle) => {
//     console.log(productTitle);

//     // const productTitle = "CarBon";
//     const result = findServicePath(serviceData, productTitle);

//     if (result) {
//       console.log("Department:", result.department);
//       console.log("Category:", result.category);
//       console.log("Product:", result.product);
//       const productKey = productTitle.split(" ").join("-");
//       console.log(productKey);

//       navigate(
//         `/services/${result.department.name
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
//                     navigate(`/services/${eachCat}`);
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
//               <div className="navprocomp-items-heading">Services</div>
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
//         {showServices && displayServices && (
//           <div className="navProComp-products-container">
//             <div className="navProComp-products-holder">
//               {/* {finalProductArr?.slice(0, 1).map((eachPro, i) => ( */}
//               <div>
//                 <div>
//                   <div className="navProComp-products-img">
//                     <img src={displayServices.imageUrl} alt="" />
//                   </div>
//                   <div className="navProComp-products-title">
//                     {displayServices.title}
//                   </div>
//                   <div className="navProComp-products-des">
//                     {displayServices.des}
//                   </div>
//                 </div>
//               </div>
//               {/* ))} */}
//             </div>
//             <div
//               className="navProComp-products-more"
//               onClick={() => {
//                 window.scrollTo(0, 0);
//                 singleProductNavigator(displayServices.title);
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

// export default ServcieNavComp;



import React, { useEffect, useRef, useState } from "react";
import "../../styles/NavProductComp.css";
import Star from "../../assets/loadingStar.svg";
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Data from "../../Data/Services.json"; // Import the static JSON data

function ServcieNavComp({ handleClose }) {
  const navigate = useNavigate();

  const [serviceData, setServiceData] = useState();
  const categoryContainerRef = useRef(null); // Ref for the main category container
  const subCategoryContainerRef = useRef(null); // Ref for the sub-category container

  useEffect(()=>{
    setServiceData(Data);

  const defaultDept = Data?.[0];
  const defaultCategory = defaultDept?.categories?.[0];
  const defaultService = defaultCategory?.services?.[0];

  console.log(defaultDept,defaultCategory,defaultService,"MosesData")

  if(defaultDept && defaultCategory && defaultService) {
    setDeptname(defaultDept.name);
    setMaincatArr(defaultDept.categories.map((cat)=>cat.name));
    setMainCatName(defaultCategory.name);
    setFinalServiceArr(defaultCategory.services);
    setSubccatsArr(defaultCategory.services.map((ser)=>ser.title));
    setSubCatName(defaultService.title);
    setDisplayServices(defaultService);
    setShowSubCats(true);
    setShowServices(true);
  }
  document.body.classList.add("no-scroll");

  return()=>{
    document.body.classList.remove("no-scroll")
  }
    
  },[])

  console.log(serviceData, "ServiceData")

  // Static data is directly imported, no need for useState to fetch it
  const [showSubCats, setShowSubCats] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [hoveringOnDept, setHoveringOnDept] = useState(false);
  const [hoveringOnMain, setHoveringOnmain] = useState(false);
  const [MainCatArr, setMaincatArr] = useState();
  const [subCatsArr, setSubccatsArr] = useState();
  const [deptname, setDeptname] = useState();
  const [mainCatName, setMainCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [displayServices, setDisplayServices] = useState();
  const [finalServiceArr, setFinalServiceArr] = useState();
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);
  const [showSubUpArrow, setShowSubUpArrow] = useState(false);
  const [showSubDownArrow, setShowSubDownArrow] = useState(false);

 
  const DeptArr = serviceData?.map((item) => item.name);
  console.log(DeptArr, "DepartmentNames");

  const HandleDeptHovever = (DeptName) => {
    setDeptname(DeptName);
    const MainCatArrObj = serviceData?.find((item) => item.name === DeptName);
    console.log(MainCatArrObj,"MainCatObjjServicePage");

    if (MainCatArrObj) {
      const categories = MainCatArrObj.categories || [];
      console.log(categories, "ServiceCategories");
      const firstCategory = categories[0];
      const firstService = firstCategory?.services[0];      
      
      setMaincatArr(MainCatArrObj?.categories?.map((item) => item.name));

      if(firstCategory){
        setMainCatName(firstCategory.name);
        setFinalServiceArr(firstCategory?.services);

        const subCatTitles = firstCategory?.services.map((ser)=>ser.title);
        setSubccatsArr(subCatTitles);
        setShowSubCats(true);
        if(firstService){
          setSubCatName(firstService.title);
          setDisplayServices(firstService);
          setShowServices(true)
        }
      }
    }
  };

  const HandleMainCatHover = (MainCat) => {
    const MainCatArrObj = serviceData?.find((item) => item.name === deptname);
    setMainCatName(MainCat);
    const subCatObj = MainCatArrObj?.categories?.find(
      (item) => item.name === MainCat
    );
    setFinalServiceArr(subCatObj?.services);
    if (subCatObj) {
      // Default
      const serviceTitles = subCatObj?.services?.map((eachSubCat) => eachSubCat.title)
      // setShowSubCats([]);
      // setSubccatsArr(
      //   subCatObj?.services?.map((eachSubCat) => eachSubCat.title)
      // );
    // }
    setSubccatsArr(serviceTitles);

    // Set default first service

    const firstService = subCatObj?.services?.[0];
    if(firstService){
      setSubCatName(firstService.title);
      setDisplayServices(firstService);
      setShowServices(true)
    }
  }
    setShowSubCats(true);
  };

  const HandleSubCatHover = (SubCat) => {
    setSubCatName(SubCat);
    const ProductsFound = finalServiceArr?.find(
      (item) => item.title === SubCat
    );
    setDisplayServices(ProductsFound);
    setShowServices(true);
  };

  const scrollUp = () =>{
    if(categoryContainerRef.current){
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40;// Default to 40px if no items
      container.scrollTop -= itemHeight;
    }
  }

  const scrollDown = () =>{
    if(categoryContainerRef.current){
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items;
      container.scrollTop += itemHeight
    }
  }

  const scrollSubUp = ()=>{
    if(subCategoryContainerRef.current){
      const container = subCategoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
      container.scrollTop -= itemHeight;
    }
  }

  const scrollSubDown = () =>{
    if(subCategoryContainerRef.current){
      const container = subCategoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
    }
  }

  const handleScroll = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const lastItem = container.lastChild;
      const lastItemOffset = lastItem ? lastItem.offsetTop + lastItem.offsetHeight : scrollHeight;
      setShowUpArrow(scrollTop > 0);
      setShowDownArrow(scrollTop + clientHeight < lastItemOffset);
    }
  };

  const handleSubScroll = () => {
    if (subCategoryContainerRef.current) {
      const container = subCategoryContainerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const lastItem = container.lastChild;
      const lastItemOffset = lastItem ? lastItem.offsetTop + lastItem.offsetHeight : scrollHeight;
      setShowSubUpArrow(scrollTop > 0);
      setShowSubDownArrow(scrollTop + clientHeight < lastItemOffset);
    }
  };

  function findServicePath(serviceData, productTitle) {
    if (serviceData) {
      for (let department of serviceData) {
        for (let category of department.categories) {
          for (let product of category.services) {
            if (product.title === productTitle) {
              return { department, category, product };
            }
          }
        }
      }
      return null; // If product is not found
    }
  }

  function findCategoryPath(serviceData, productCategory) {
    if (serviceData) {
      for (let department of serviceData) {
        for (let category of department.categories) {
          if (category.name === productCategory) {
            return { department, category };
          }
        }
      }
    }
    return null; // If category is not found
  }

  const productCategoryNavigator = (categoryTitle) => {
    const result = findCategoryPath(serviceData, categoryTitle);
    if (result) {
      navigate(
        `/services/${result.department.name
          .split(" ")
          .join("-")}/${result.category.name.split(" ").join("-")}`
      );
    } else {
      console.log("Category not found");
    }
  };

  const singleProductNavigator = (productTitle) => {
    const result = findServicePath(serviceData, productTitle);
    if (result) {
      const productKey = productTitle.split(" ").join("-");
      navigate(
        `/services/${result.department.name
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
                    navigate(`/services/${eachCat}`);
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
                  {/* {eachCat === deptname && (
                    <div>
                      <img src={Star} alt="" style={{ width: "18px" }} />
                    </div>
                  )} */}
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
                  {
                    MainCatArr?.map((dot, i) => (
                      <div
                        key={i}
                        className={`navProComp-dot ${
                          dot === mainCatName ? "navProComp-dot-active" : ""
                        }`}
                      ></div>
                    ))}
                </div>
                <div className="arrow-wrapper">
                                {showUpArrow && (
                                  <span
                                    onClick={scrollUp}
                                    className="arrow-up"
                                    aria-label="Scroll up"
                                  >
                                    <IoIosArrowUp />
                                  </span>
                                )}
                                {showDownArrow && (
                                  <span
                                    onClick={scrollDown}
                                    className="arrow-down"
                                    aria-label="Scroll down"
                                  >
                                    <IoIosArrowDown />
                                  </span>
                                )}
                              </div>
                <div
                  className="navProComp-mainCat-item-container"
                  onMouseEnter={() => setHoveringOnmain(true)}
                  onMouseLeave={() => setHoveringOnmain(false)}
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
                        className={`navProComp-mainCat-item ${
                          eachCat === mainCatName ? "mainCat-active" : ""
                        }`}
                      >
                        {eachCat}
                      </div>
                      {/* {eachCat === mainCatName && (
                        <div>
                          <img src={Star} alt="" style={{ width: "18px" }} />
                        </div>
                      )} */}
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
              <div className="navprocomp-items-heading">Services</div>
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
                <div className="arrow-wrapper">
                                {showSubUpArrow && (
                                  <span
                                    onClick={scrollSubUp}                    
                                    aria-label="Scroll sub up"
                                    className="arrow-up"
                                  >
                                    <IoIosArrowUp />
                                  </span>
                                )}
                                {showSubDownArrow && (
                                  <span
                                    onClick={scrollSubDown}                    
                                    aria-label="Scroll sub down"
                                    className="arrow-down"
                                  >
                                    <IoIosArrowDown />
                                  </span>
                                )}
                              </div>
                <div className="navProComp-subCat-item-container"
                ref={subCategoryContainerRef}
                onScroll={handleSubScroll}>
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
                        className={`navProComp-mainCat-item ${
                          eachItem === subCatName ? "mainCat-active" : ""
                        }`}
                      >
                        {eachItem}
                      </div>
                      {/* {eachItem === subCatName && (
                        <div>
                          <img src={Star} alt="" style={{ width: "18px" }} />
                        </div>
                      )} */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        {showServices && displayServices && (
          <div className="navProComp-products-container">
            <div className="navProComp-products-holder">
              <div>
                <div>
                  <div className="navProComp-products-img"
                   onClick={() => {
                    window.scrollTo(0, 0);
                    singleProductNavigator(displayServices.title);
                    handleClose();
                  }}
                  style={{cursor:"pointer"}}>
                    <img src={displayServices.imageUrl} alt="" />
                  </div>
                  <div className="navProComp-products-title">
                    {displayServices.title}
                  </div>
                  <div className="navProComp-products-des">
                    {displayServices.description} {/* Changed 'des' to 'description' to match JSON */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="navProComp-products-more"
              onClick={() => {
                window.scrollTo(0, 0);
                singleProductNavigator(displayServices.title);
                handleClose();
              }}
              style={{cursor:"pointer"}}
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

export default ServcieNavComp;
