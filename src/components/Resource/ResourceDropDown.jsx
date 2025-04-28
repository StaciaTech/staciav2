
import React, { useEffect, useState, useRef } from "react";
import "../../styles/NavProductComp.css";
import {
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import casedoc from "../../Data/SingleCaseStudy.json";
import article from "../../Data/Articles.json";

function ResourceDropDown({ handleClose }) {
  const navigate = useNavigate();

  const categoryContainerRef = useRef(null); // Ref for the main category container
  const subCategoryContainerRef = useRef(null); // Ref for the sub-category container

  const [articlesData, setArticlesData] = useState([]);
  const [caseStudyData, setCaseStudyData] = useState([]);
  const [showSubCats, setShowSubCats] = useState(false);
  const [showProducts, setShowproducts] = useState(false);
  const [deptname, setDeptname] = useState();
  const [MainCatArr, setMaincatArr] = useState();
  const [mainCatName, setMainCatName] = useState();
  const [subCatsArr, setSubccatsArr] = useState();
  const [subCatName, setSubCatName] = useState();
  const [displayProducts, setDisplayProducts] = useState();
  const [finalProductArr, setFinalProductArr] = useState();
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);
  const [showSubUpArrow, setShowSubUpArrow] = useState(false);
  const [showSubDownArrow, setShowSubDownArrow] = useState(false);

  const ResourceArr = [
    { name: "Article", cats: articlesData },
    { name: "Case Study", cats: caseStudyData },
  ];
  const DeptArr = ResourceArr?.map((item) => item.name);

  useEffect(() => {
    setCaseStudyData(casedoc?.singlecasestudy || []);
    setArticlesData(article.docs || []);

    const defaultDept = ResourceArr?.[0];
    const defaultCategory = defaultDept?.cats?.[0];
    const defaultProduct = defaultCategory?.data?.[0];

    if (defaultDept && defaultCategory && defaultProduct) {
      setDeptname(defaultDept.name);
      setMaincatArr(defaultDept.cats.map((cat) => cat.name));
      setMainCatName(defaultCategory.name);
      setFinalProductArr(defaultCategory.data);
      setSubccatsArr(defaultCategory.data.map((item) => item.title));
      setSubCatName(defaultProduct.title);
      setDisplayProducts(defaultProduct);
      setShowSubCats(true);
      setShowproducts(true);
    }

    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [articlesData.length, caseStudyData.length]);

  const HandleDeptHovever = (DeptName) => {
    setDeptname(DeptName);
    const MainCatArrObj = ResourceArr?.find((item) => item.name === DeptName);
    if (MainCatArrObj) {
      const categories = MainCatArrObj.cats || [];
      const firstCategory = categories[0];
      const firstProduct = firstCategory?.data[0];

      setMaincatArr(MainCatArrObj.cats.map((item) => item.name));

      if (firstCategory) {
        setMainCatName(firstCategory.name);
        setFinalProductArr(firstCategory.data);
        const subCatTitles = firstCategory.data.map((item) => item.title);
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
    const MainCatArrObj = ResourceArr?.find((item) => item.name === deptname);
    setMainCatName(MainCat);
    const subCatObj = MainCatArrObj?.cats?.find(
      (item) => item.name === MainCat
    );

    setFinalProductArr(subCatObj?.data);
    if (subCatObj) {
      const productTitles = subCatObj.data.map(
        (eachSubCat) => eachSubCat.title
      );
      setSubccatsArr(productTitles);
      const firstProduct = subCatObj.data?.[0];
      if (firstProduct) {
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

  function findProductPath(resourceData, productTitle) {
    for (let section of resourceData) {
      for (let category of section.cats) {
        for (let item of category.data) {
          if (item.title === productTitle) {
            return { section, category, item };
          }
        }
      }
    }
    return null;
  }

  function findCategoryPath(resourceData, categoryName) {
    for (let section of resourceData) {
      for (let category of section.cats) {
        if (category.name === categoryName) {
          return { section, category };
        }
      }
    }
    return null;
  }

  const productCategoryNavigator = (categoryName) => {
    const result = findCategoryPath(ResourceArr, categoryName);
    if (result) {
      const resSlug = result.section.name.toLowerCase().replace(/\s+/g, "-");
      const deptSlug = result.category.name.replace(/\s+/g, "-");
      navigate(`/${resSlug}/${deptSlug}`);
      handleClose();
    }
  };

  const singleProductNavigator = (productTitle) => {
    const result = findProductPath(ResourceArr, productTitle);
    if (result) {
      const resSlug = result.section.name.toLowerCase().replace(/\s+/g, "-");
      const deptSlug = result.category.name.replace(/\s+/g, "-");
      if (result.section.name === "Case Study") {
        navigate(`/case-study/single-caseStudy/${result.item.id || ""}`);
      } else {
        const titleSlug = result.item.title.replace(/\s+/g, "-");
        navigate(`/${resSlug}/${deptSlug}/${titleSlug}`);
      }
      handleClose();
    }
  };

  return (
    <div className="NavProductComp-container">
      <div className="navProComp-container">
        <div className="navProComp-dept-container">
          <div className="navprocomp-items-heading">Sections</div>
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
                    navigate(`/${eachCat.toLowerCase().replace(/\s+/g, "-")}`);
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
            <div className="navprocomp-items-heading">Departments</div>
            <div className="navproComp-item-holder">
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
              <div className="navProComp-mainCat-item-container" 
              ref={categoryContainerRef}
              onScroll={handleScroll}>
                {MainCatArr?.map((eachCat, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => HandleMainCatHover(eachCat)}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      productCategoryNavigator(eachCat);
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
            <div className="navprocomp-items-heading">Resources</div>
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
                    onClick={() => {
                      window.scrollTo(0, 0);
                      singleProductNavigator(eachItem);
                    }}
                    className="pointer"
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
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="navProComp-products-img">
                    <img
                      src={
                        displayProducts.imageURL || displayProducts.mainImageUrl
                      }
                      alt={displayProducts.title}
                    />
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
