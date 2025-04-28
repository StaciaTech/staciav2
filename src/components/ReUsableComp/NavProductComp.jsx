import React, { useEffect, useRef, useState } from "react";
import "../../styles/NavProductComp.css";
import Star from "../../assets/loadingStar.svg";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import data from "../../Data/ProductPage.json";
import { FaLariSign } from "react-icons/fa6";

function NavProductComp({ handleClose }) {
  const navigate = useNavigate();
  const Details = data.department;

  const [productData, setProductData] = useState();
  const categoryContainerRef = useRef(null); // Ref for the main category container
  const subCategoryContainerRef = useRef(null); // Ref for the sub-category container

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
  const [showSubUpArrow, setShowSubUpArrow] = useState(false);
  const [showSubDownArrow, setShowSubDownArrow] = useState(false);

  const DeptArr = productData?.map((item) => item.name);

  const HandleDeptHovever = (DeptName) => {
    setDeptname(DeptName);
    const MainCatArrObj = productData?.find((item) => item.name === DeptName);
    if (MainCatArrObj) {
      const categories = MainCatArrObj.category || [];
      const firstCategory = categories[0];
      const firstProduct = firstCategory?.products[0];
      setMaincatArr(MainCatArrObj?.category?.map((item) => item.name));

      if (firstCategory) {
        setMainCatName(firstCategory?.name);
        setFinalProductArr(firstCategory?.products);
        const subCatTitles = firstCategory?.products?.map((pro) => pro.title);
        setSubccatsArr(subCatTitles);
        setShowSubCats(true);
        if (firstProduct) {
          setSubCatName(firstProduct.title);
          setDisplayProducts(firstProduct);
          setShowproducts(true);
        }
      }
    }
  };

  const HandleMainCatHover = (MainCat) => {
    const MainCatArrObj = productData?.find((item) => item.name === deptname);
    const subCatObj = MainCatArrObj?.category?.find(
      (item) => item.name === MainCat
    );

    // Check if the category has products
    if (subCatObj?.products?.length > 0) {
      setMainCatName(MainCat);
      setFinalProductArr(subCatObj?.products);
      if (subCatObj) {
        const productTitles = subCatObj?.products?.map(
          (eachSubCat) => eachSubCat.title
        );
        setSubccatsArr(productTitles);
        const firstProduct = subCatObj.products?.[0];
        if (firstProduct) {
          setSubCatName(firstProduct.title);
          setDisplayProducts(firstProduct);
          setShowproducts(true);
        }
      }
      setShowSubCats(true);
    }else{
      // Reset states if no products
      setShowSubCats(false)
      setShowproducts(false)
      setSubccatsArr([])
      setFinalProductArr([])
      setSubCatName(null)
      setDisplayProducts(null)
    }
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
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
      container.scrollTop -= itemHeight;
    }
  };

  const scrollDown = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
      container.scrollTop += itemHeight;
    }
  };

  const scrollSubUp = () => {
    if (subCategoryContainerRef.current) {
      const container = subCategoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
      container.scrollTop -= itemHeight;
    }
  };

  const scrollSubDown = () => {
    if (subCategoryContainerRef.current) {
      const container = subCategoryContainerRef.current;
      const itemHeight = container.firstChild?.offsetHeight || 40; // Default to 40px if no items
      container.scrollTop += itemHeight;
    }
  };

  const handleScroll = () => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const lastItem = container.lastChild;
      const lastItemOffset = lastItem
        ? lastItem.offsetTop + lastItem.offsetHeight
        : scrollHeight;
      setShowUpArrow(scrollTop > 0);
      setShowDownArrow(scrollTop + clientHeight < lastItemOffset);
    }
  };

  const handleSubScroll = () => {
    if (subCategoryContainerRef.current) {
      const container = subCategoryContainerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const lastItem = container.lastChild;
      const lastItemOffset = lastItem
        ? lastItem.offsetTop + lastItem.offsetHeight
        : scrollHeight;
      setShowSubUpArrow(scrollTop > 0);
      setShowSubDownArrow(scrollTop + clientHeight < lastItemOffset);
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
          .join("-")}/${result.category?.name.split(" ").join("-")}`
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
                    className={`navProComp-dept-item ${
                      eachCat === deptname ? "mainCat-active" : ""
                    }`}
                  >
                    {eachCat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {MainCatArr?.length && (
          <div className="navProComp-mainCat-container">
            <div className="navprocomp-items-heading">Categories</div>
            <div
              className="navproComp-item-holder"
              style={{ position: "relative", height: "100%" }}
            >
              <div className="navProComp-dot-container">
                {MainCatArr?.map((dot, i) => (
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {showSubCats && subCatsArr?.length && (
          <div className="navProComp-subCat-container">
            <div className="navprocomp-items-heading">Products</div>
            <div
              className="navproComp-item-holder"
              style={{ position: "relative", height: "100%" }}
            >
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
              <div
                className="navProComp-subCat-item-container"
                ref={subCategoryContainerRef}
                onScroll={handleSubScroll}
              >
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
                  </div>
                ))}
              </div>
            </div>
          </div>
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
