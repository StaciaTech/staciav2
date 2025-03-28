// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import NavBar from "../NavBar";
// import Footer from "../Footer";
// import "../../styles/Services/SpecificServices.css";
// import WhatWeDoCard from "./WhatWeDoCard";
// import AccordionOpen from "../../assets/Expand.png";
// import AccordionClose from "../../assets/CloseAccordion.png";
// import WhatWeDoAccordion from "./WhatWeDoAccordion";
// import MobileFooter from "../MobileFooter";
// import { fetchServices } from "../../redux/slice/serviceSlice";
// import { useDispatch, useSelector } from "react-redux";
// import SideBar from "../SideBar";
// import LoadingStar from "../LoadingStar";
// import { useNavigate } from "react-router-dom";
// import Star from "../Star";
// import axios from "axios";

// import serviceData from "../../Data/Services.json";

// export default function SpecificService() {
//   const params = useParams();
//   console.log(params);

//   const navigateTo = useNavigate();

//   const [ServiceData, setServiceData] = useState();
//   // const apiUrl = process.env.REACT_APP_API_URL;

//   // const FetchServices = async () => {
//   //   try {
//   //     const res = await axios.get(`${apiUrl}/service/all-service-index`);
//   //     console.log(res.data.docs);
//   //     setServiceData(res.data.docs);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   // useEffect(() => {
//   //   FetchServices();
//   // }, []);

//      useEffect(() => {
//         // Simulate fetching data from a local JSON file
//         setServiceData(serviceData);
//       }, []);
  


//   const ServiceCategory = ServiceData?.find(
//     (eachServ) => eachServ.name === params.department.split("-").join(" ")
//   );

//   const singleService = ServiceCategory?.categories?.find(
//     (eachCat) => eachCat.name === params.category.split("-").join(" ")
//   );
//   // console.log(singleService);

//   // const RemainingServices = servData?.filter(
//   //   (eachServ) => eachServ.title !== paramsTitle
//   // );
//   const [accordion, setAccordion] = useState(null);

//   return (
//     <>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       <div>
//         <div className="service-hero-container">
//           <div>
//             <div className="service-title">
//               <Star />
//               <span style={{ userSelect: "none" }}>{singleService?.name}</span>
//             </div>
//             <div className="service-section1-content-box">
//               <div>
//                 <div className="service-overview-title">Overview</div>
//                 <p className="test-seclection-white service-cat-des">
//                   {singleService?.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="specific-service-section2">
//           <div className="whatwedo">What We Do ?</div>
//           <div className="what-we-do-grid">
//             {singleService?.services.map((data, i) => (
//               <WhatWeDoCard
//                 key={i}
//                 title={data?.title}
//                 desc={data?.des}
//                 department={params.department}
//                 category={params.category}
//               />
//             ))}
//           </div>
//           <div className="what-we-do-accordion-container">
//             {singleService?.services.map((data, i) => (
//               <WhatWeDoAccordion
//                 key={i}
//                 title={data?.title}
//                 desc={data?.des}
//                 department={params.department}
//                 category={params.category}
//                 i={i}
//                 setAccordion={setAccordion}
//                 accordion={accordion}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }




import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "../../styles/Services/SpecificServices.css";
import WhatWeDoCard from "./WhatWeDoCard";
import WhatWeDoAccordion from "./WhatWeDoAccordion";
import MobileFooter from "../MobileFooter";
import SideBar from "../SideBar";
import Star from "../Star";
import serviceData from "../../Data/Services.json";


export default function SpecificService() {
  const params = useParams();
  console.log("Params:", params);

  const [ServiceData, setServiceData] = useState([]);

  useEffect(() => {
    // Simulating fetching data from local JSON
    setServiceData(serviceData);
  }, []);

  const ServiceCategory = ServiceData?.find(
    (eachServ) => eachServ.name === params.department.split("-").join(" ")
  );

  const singleService = ServiceCategory?.categories?.find(
    (eachCat) => eachCat.name === params.category.split("-").join(" ")
  );

  console.log("ServiceCategory:", ServiceCategory);
  console.log("SingleService:", singleService);

  const [accordion, setAccordion] = useState(null);

  return (
    <>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      <div>
        <div className="service-hero-container">
          <div>
            <div className="service-title">
              <Star />
              <span style={{ userSelect: "none" }}>
                {singleService?.name || "Service Not Found"}
              </span>
            </div>
            <div className="service-section1-content-box">
              <div>
                <div className="service-overview-title">Overview</div>
                <p className="test-seclection-white service-cat-des">
                  {singleService?.description || "No description available."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="specific-service-section2">
          <div className="whatwedo">What We Do?</div>

          {/* Ensure services exist before mapping */}
          {singleService?.services && singleService.services.length > 0 ? (
            <>
              <div className="what-we-do-grid">
                {singleService.services.map((data, i) => (
                  <WhatWeDoCard
                    key={i}
                    title={data?.title}
                    desc={data?.description}
                    department={params.department}
                    category={params.category}
                  />
                ))}
              </div>

              <div className="what-we-do-accordion-container">
                {singleService.services.map((data, i) => (
                  <WhatWeDoAccordion
                    key={i}
                    title={data?.title}
                    desc={data?.des}
                    department={params.department}
                    category={params.category}
                    i={i}
                    setAccordion={setAccordion}
                    accordion={accordion}
                  />
                ))}
              </div>
            </>
          ) : (
            <p className="no-services">No services available for this category.</p>
          )}
        </div>
      </div>
      <Footer />
      <MobileFooter />
    </>
  );
}
