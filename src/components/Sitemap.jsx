import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sitemap.css";
import ServiceData from "../Data/Services.json";
import ProductData from "../Data/ProductPage.json";
import ProjectsData from "../Data/ProjectsData.json";
import casedoc from "../Data/SingleCaseStudy.json";
import article from "../Data/Articles.json";

function Sitemap() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleClose = () => {
    navigate("/");
  };

  // Helper function to navigate to a service category
  const navigateToServiceCategory = (deptName, categoryName) => {
    navigate(
      `/services/${deptName.split(" ").join("-")}/${categoryName
        .split(" ")
        .join("-")}`
    );
    window.scrollTo(0, 0);
  };

  // Helper function to navigate to a specific service
  const navigateToService = (deptName, categoryName, serviceTitle) => {
    const productKey = serviceTitle.split(" ").join("-");
    navigate(
      `/services/${deptName.split(" ").join("-")}/${categoryName
        .split(" ")
        .join("-")}/${productKey}`
    );
    window.scrollTo(0, 0);
  };

  // Helper function to navigate to a product category
  const navigateToProductCategory = (deptName, categoryName) => {
    navigate(
      `/products/${deptName.split(" ").join("-")}/${categoryName
        .split(" ")
        .join("-")}`
    );
    window.scrollTo(0, 0);
  };

  // Helper function to navigate to a specific product
  const navigateToProduct = (deptName, categoryName, productTitle) => {
    const productKey = productTitle.split(" ").join("-");
    navigate(
      `/products/${deptName.split(" ").join("-")}/${categoryName
        .split(" ")
        .join("-")}/${productKey}`
    );
    window.scrollTo(0, 0);
  };

  // Helper function to navigate to a project category
  const navigateToProjectCategory = (deptName, categoryName) => {
    navigate(
      `/project/${deptName.split(" ").join("-")}/${categoryName
        .split(" ")
        .join("-")}`
    );
    window.scrollTo(0, 0);
  };

  // Helper function to navigate to a specific project
  const navigateToProject = (deptName, categoryName, projectTitle) => {
    const projectKey = projectTitle.split(" ").join("-");
    navigate(
      `/project/${deptName.split(" ").join("-")}/${categoryName
        .split(" ")
        .join("-")}/${projectKey}`
    );
    window.scrollTo(0, 0);
  };

  // Helper function to navigate to a case study category
  const navigateToCaseStudyCategory = (categoryName) => {
    const categorySlug = categoryName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/case-study/${categorySlug}`);
    window.scrollTo(0, 0);
  };

  // Helper function to navigate to a specific case study
  const navigateToCaseStudy = (categoryName, caseStudyId) => {
    navigate(`/case-study/single-caseStudy/${caseStudyId}`);
    window.scrollTo(0, 0);
  };

  // Resource data structure for Articles and Case Studies
  const resourceArr = [
    { name: "Article", cats: article?.docs || [] },
    { name: "Case Study", cats: casedoc?.singlecasestudy || [] },
  ];

  // Filter functions
  const filterItems = (items, query) => {
    if (!query) return items;
    const lowerQuery = query.toLowerCase();
    return items.filter((item) =>
      item.name.toLowerCase().includes(lowerQuery) ||
      (item.title && item.title.toLowerCase().includes(lowerQuery)) ||
      (item.categories && item.categories.some(cat =>
        cat.name.toLowerCase().includes(lowerQuery) ||
        (cat.services && cat.services.some(serv =>
          serv.title.toLowerCase().includes(lowerQuery)
        )) ||
        (cat.products && cat.products.some(prod =>
          prod.title.toLowerCase().includes(lowerQuery)
        )) ||
        (cat.projects && cat.projects.some(proj =>
          proj.title.toLowerCase().includes(lowerQuery)
        )) ||
        (cat.data && cat.data.some(data =>
          data.title.toLowerCase().includes(lowerQuery)
        ))
      ))
    );
  };

  // Filtered data
  const filteredServices = filterItems(ServiceData || [], searchQuery);
  const filteredProducts = filterItems(ProductData?.department || [], searchQuery);
  const filteredProjects = filterItems(ProjectsData?.Departments || [], searchQuery);
  const filteredArticles = filterItems(resourceArr[0]?.cats || [], searchQuery);
  const filteredCaseStudies = filterItems(resourceArr[1]?.cats || [], searchQuery);

  return (
    <div className="sitemap-page-container">
      <div className="sitemap-wrapper">
        <div className="sitemap-header">
          <div className="sitemap-breadcrumb">
            <span className="breadcrumb-home" onClick={() => navigate("/")}>
              Back to Website
            </span>{" "}
            ← Sitemap
          </div>
          <button className="sitemap-close-button" onClick={handleClose}>
            ✕
          </button>
        </div>
        <h1 className="sitemap-title">Sitemap</h1>
        <div className="sitemap-search">
          <input
            type="text"
            placeholder="Search sitemap..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="sitemap-search-input"
          />
        </div>
        <div className="sitemap-content">
          <div className="sitemap-section">
            <div className="sitemap-section-content">
              <div
                className="sitemap-link sitemap-link-bold"
                onClick={() => {
                  navigate("/services");
                  window.scrollTo(0, 0);
                }}
              >
                Services:
              </div>
              {Array.isArray(filteredServices) &&
              filteredServices.length > 0 ? (
                filteredServices.map((dept, deptIndex) => (
                  <div key={deptIndex} className="sitemap-nested-level-1">
                    <div
                      className="sitemap-link sitemap-link-bold"
                      onClick={() => {
                        navigate(`/services/${dept.name.split(" ").join("-")}`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {dept.name}
                    </div>
                    {Array.isArray(dept.categories) &&
                      dept.categories
                        .filter((category) =>
                          searchQuery
                            ? category.name
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase()) ||
                              category.services.some((service) =>
                                service.title
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase())
                              )
                            : true
                        )
                        .map((category, catIndex) => (
                          <div
                            key={catIndex}
                            className="sitemap-nested-level-2"
                          >
                            <div
                              className="sitemap-link"
                              onClick={() =>
                                navigateToServiceCategory(
                                  dept.name,
                                  category.name
                                )
                              }
                            >
                              {category.name}
                            </div>
                            {Array.isArray(category.services) &&
                              category.services
                                .filter((service) =>
                                  searchQuery
                                    ? service.title
                                        .toLowerCase()
                                        .includes(searchQuery.toLowerCase())
                                    : true
                                )
                                .map((service, servIndex) => (
                                  <div
                                    key={servIndex}
                                    className="sitemap-nested-level-3"
                                  >
                                    <div
                                      className="sitemap-link"
                                      onClick={() =>
                                        navigateToService(
                                          dept.name,
                                          category.name,
                                          service.title
                                        )
                                      }
                                    >
                                      {service.title}
                                    </div>
                                  </div>
                                ))}
                          </div>
                        ))}
                  </div>
                ))
              ) : (
                <div className="sitemap-no-data">
                  No services match your search
                </div>
              )}
            </div>
          </div>
          <div className="sitemap-section">
            <div className="sitemap-section-content">
              <div
                className="sitemap-link sitemap-link-bold"
                onClick={() => {
                  navigate("/products");
                  window.scrollTo(0, 0);
                }}
              >
                Products:
              </div>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((dept, deptIndex) => (
                  <div key={deptIndex} className="sitemap-nested-level-1">
                    <div
                      className="sitemap-link sitemap-link-bold"
                      onClick={() => {
                        navigate(`/products/${dept.name.split(" ").join("-")}`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {dept.name}
                    </div>
                    {Array.isArray(dept.category) &&
                      dept.category
                        .filter((category) =>
                          searchQuery
                            ? category.name
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase()) ||
                              category.products.some((product) =>
                                product.title
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase())
                              )
                            : true
                        )
                        .map((category, catIndex) => (
                          <div
                            key={catIndex}
                            className="sitemap-nested-level-2"
                          >
                            <div
                              className="sitemap-link"
                              onClick={() =>
                                navigateToProductCategory(
                                  dept.name,
                                  category.name
                                )
                              }
                            >
                              {category.name}
                            </div>
                            {Array.isArray(category.products) &&
                              category.products
                                .filter((product) =>
                                  searchQuery
                                    ? product.title
                                        .toLowerCase()
                                        .includes(searchQuery.toLowerCase())
                                    : true
                                )
                                .map((product, prodIndex) => (
                                  <div
                                    key={prodIndex}
                                    className="sitemap-nested-level-3"
                                  >
                                    <div
                                      className="sitemap-link"
                                      onClick={() =>
                                        navigateToProduct(
                                          dept.name,
                                          category.name,
                                          product.title
                                        )
                                      }
                                    >
                                      {product.title}
                                    </div>
                                  </div>
                                ))}
                          </div>
                        ))}
                  </div>
                ))
              ) : (
                <div className="sitemap-no-data">
                  No products match your search
                </div>
              )}
            </div>
          </div>
          <div className="sitemap-section">
            <div className="sitemap-section-content">
              <div
                className="sitemap-link sitemap-link-bold"
                onClick={() => {
                  navigate("/project");
                  window.scrollTo(0, 0);
                }}
              >
                Projects:
              </div>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((dept, deptIndex) => (
                  <div key={deptIndex} className="sitemap-nested-level-1">
                    <div
                      className="sitemap-link sitemap-link-bold"
                      onClick={() => {
                        navigate(`/project/${dept.name.split(" ").join("-")}`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {dept.name}
                    </div>
                    {Array.isArray(dept.categories) &&
                      dept.categories
                        .filter((category) =>
                          searchQuery
                            ? category.name
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase()) ||
                              category.projects.some((project) =>
                                project.title
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase())
                              )
                            : true
                        )
                        .map((category, catIndex) => (
                          <div
                            key={catIndex}
                            className="sitemap-nested-level-2"
                          >
                            <div
                              className="sitemap-link"
                              onClick={() =>
                                navigateToProjectCategory(
                                  dept.name,
                                  category.name
                                )
                              }
                            >
                              {category.name}
                            </div>
                            {Array.isArray(category.projects) &&
                              category.projects
                                .filter((project) =>
                                  searchQuery
                                    ? project.title
                                        .toLowerCase()
                                        .includes(searchQuery.toLowerCase())
                                    : true
                                )
                                .map((project, projIndex) => (
                                  <div
                                    key={projIndex}
                                    className="sitemap-nested-level-3"
                                  >
                                    <div
                                      className="sitemap-link"
                                      onClick={() =>
                                        navigateToProject(
                                          dept.name,
                                          category.name,
                                          project.title
                                        )
                                      }
                                    >
                                      {project.title}
                                    </div>
                                  </div>
                                ))}
                          </div>
                        ))}
                  </div>
                ))
              ) : (
                <div className="sitemap-no-data">
                  No projects match your search
                </div>
              )}
            </div>
          </div>
          <div className="sitemap-section">
            <p className="sitemap-link sitemap-link-bold">Resource:</p>
            <div
              className="sitemap-link sitemap-link-bold"
              onClick={() => {
                navigate("/article");
                window.scrollTo(0, 0);
              }}
            >
              Articles:
            </div>
            {filteredArticles.length > 0 ? (
              filteredArticles.map((category, catIndex) => (
                <div key={catIndex} className="sitemap-nested-level-1">
                  <div
                    className="sitemap-link"
                    onClick={() => {
                      const categorySlug = category.name
                        .toLowerCase()
                        .replace(/\s+/g, "-");
                      navigate(`/article/${categorySlug}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {category.name}
                  </div>
                  {Array.isArray(category.data) &&
                    category.data
                      .filter((article) =>
                        searchQuery
                          ? article.title
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase())
                          : true
                      )
                      .map((article, articleIndex) => (
                        <div
                          key={articleIndex}
                          className="sitemap-nested-level-2"
                        >
                          <div
                            className="sitemap-link"
                            onClick={() => {
                              const titleSlug = article.title
                                .toLowerCase()
                                .replace(/\s+/g, "-");
                              const categorySlug = category.name
                                .toLowerCase()
                                .replace(/\s+/g, "-");
                              navigate(`/article/${categorySlug}/${titleSlug}`);
                              window.scrollTo(0, 0);
                            }}
                          >
                            {article.title}
                          </div>
                        </div>
                      ))}
                </div>
              ))
            ) : (
              <div className="sitemap-no-data">
                No articles match your search
              </div>
            )}
            <div
              className="sitemap-link sitemap-link-bold sitemap-section-subheader"
              onClick={() => {
                navigate("/case-study");
                window.scrollTo(0, 0);
              }}
            >
              Case Studies:
            </div>
            {filteredCaseStudies.length > 0 ? (
              filteredCaseStudies.map((category, catIndex) => (
                <div key={catIndex} className="sitemap-nested-level-1">
                  <div
                    className="sitemap-link"
                    onClick={() => navigateToCaseStudyCategory(category.name)}
                  >
                    {category.name}
                  </div>
                  {Array.isArray(category.data) &&
                    category.data
                      .filter((caseStudy) =>
                        searchQuery
                          ? caseStudy.title
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase())
                          : true
                      )
                      .map((caseStudy, caseIndex) => (
                        <div key={caseIndex} className="sitemap-nested-level-2">
                          <div
                            className="sitemap-link"
                            onClick={() =>
                              navigateToCaseStudy(category.name, caseStudy.id)
                            }
                          >
                            {caseStudy.title}
                          </div>
                        </div>
                      ))}
                </div>
              ))
            ) : (
              <div className="sitemap-no-data">
                No case studies match your search
              </div>
            )}
            <div className="pk">
              {/* <div
                className="sitemap-link sitemap-link-bold sitemap-section-subheader"
                onClick={() => {
                  navigate("/whatsnew");
                  window.scrollTo(0, 0);
                }}
              >
                What's New:
              </div> */}
              {/* <div
                className=" whatsnew"
                onClick={() => {
                  navigate("/events");
                  window.scrollTo(0, 0);
                }}
              >
                Events
              </div> */}

              {/* <div
                className="whatsnew"
                onClick={() => {
                  navigate("/news");
                  window.scrollTo(0, 0);
                }}
              >
                Newsroom
              </div> */}
              {/* <div
                className=" whatsnew"
                onClick={() => {
                  navigate("/about");
                  window.scrollTo(0, 0);
                }}
              >
                About Us
              </div> */}
              {/* <div
                className="whatsnew"
                onClick={() => {
                  navigate("/about/our-team");
                  window.scrollTo(0, 0);
                }}
              >
                Our Team
              </div> */}
              {/* <div
                className=" whatsnew"
                onClick={() => {
                  navigate("/partners");
                  window.scrollTo(0, 0);
                }}
              >
                Partners
              </div> */}
              {/* <div
                className="whatsnew"
                onClick={() => {
                  navigate("/media-kit");
                  window.scrollTo(0, 0);
                }}
              >
                Media Kit
              </div> */}
              <div className="competition-con">
                {/* <div
                  className="sitemap-link sitemap-link-bold sitemap-section-subheader"
                  onClick={() => {
                    navigate("/competition");
                    window.scrollTo(0, 0);
                  }}
                >
                  Competition
                </div> */}
{/*
                <div
                  className="sitemap-link sitemap-link-bold sitemap-section-subheader"
                  onClick={() => {
                    navigate("/career");
                    window.scrollTo(0, 0);
                  }}
                >
                  Careers
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sitemap;