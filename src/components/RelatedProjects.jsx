import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import templatesData from "../Data/Templates.json";
import '../styles/ProductDetails.css'

function RelatedProjects({ depKey, category, RemainingProjects }) {

  // console.log(depKey,"PropsProjects")
  const params = useParams();
  
  console.log(category,"props");
  const catKey = category?.name.split(" ").join("-");

  // const  = category?.find((eachCat)=>eachCat?.name.split(" ").join("") === params.category)

  console.log(catKey,"catKey")

  const navigateTo = useNavigate();
  // const RemainingProjects= RemainingProjects
  
  return (
    <div className="remaining-products-card-container-holder">
    <div className="single-other-service-title">Related Projects</div>
    <div className="remaining-products-card-container">
      {RemainingProjects?.map((eachPro, i) => {
        const projectKey = eachPro?.title?.split(" ").join("-");
        return (
          <>
            {i < 6 && (
              <div key={i}>
                <div className="single-product-card">
                  <div
                    // style={{ width: "100%", height: "20rem" }}
                    className="single-product-card-img-container pointer"
                    onClick={() => {                      
                      navigateTo(
                        `/project/${depKey}/${catKey}/${projectKey}`
                      );
                      window.scrollTo(0, 0);
                    }}
                  >
                    <img
                      src={eachPro?.mainImageUrl}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div
                    className="single-product-card-title pointer test-seclection-blue"
                    onClick={() => {
                      navigateTo(
                        `/project/${depKey}/${catKey}/${projectKey}`
                      );
                      window.scrollTo(0, 0);
                    }}
                  >
                    {eachPro?.title}
                  </div>
                  <p className="single-product-card-des test-seclection-blue">
                    {eachPro?.mainDesc}
                  </p>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  </div>
  );
}

export default RelatedProjects;
