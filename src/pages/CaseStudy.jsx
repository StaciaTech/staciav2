// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/CaseStudy.css";
// import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
// import SideBar from "../components/SideBar";
// import MobileFooter from "../components/MobileFooter";
// import Star from "../components/Star";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// export default function CaseStudy() {
//   const apiUrl = process.env.REACT_APP_API_URL;
//   const params = useParams();

//   const [casestudyData, setCasestudyData] = useState();

//   const FetchCasestudy = async () => {
//     try {
//       const res = await axios.get(`${apiUrl}/case-study/list`);
//       setCasestudyData(res.data.docs);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     FetchCasestudy();
//   }, []);

//   const [activeDepartment, setActiveDepartment] = useState();
//   const [casestudyObj, setCasestudyObj] = useState();

//   useEffect(() => {
//     if (params.department) {
//       setActiveDepartment(params.department);
//     } else if (casestudyData) {
//       setActiveDepartment(casestudyData[0]?.name);
//     }
//   }, [casestudyData, params]);

//   useEffect(() => {
//     if ((activeDepartment, casestudyData)) {
//       setCasestudyObj(
//         casestudyData?.find((eachItem) => eachItem.name === activeDepartment)
//       );
//     }
//   }, [activeDepartment, casestudyData]);
//   console.log(casestudyData);

//   return (
//     <>
//       <NavBar />
//       <SideBar />
//       <div className="case-study-section1">
//         <div className="case-study-section-overlay">
//           <div className="case-study-title1">
//             <span style={{ userSelect: "none" }}>Case Study</span>
//             <Star />
//           </div>
//           {/* <div className="case-study-text">Case Study</div>
//           <div className="case-study-text">Lorem</div> */}
//         </div>
//       </div>{" "}
//       <div className="article-item-tabs-container">
//         {casestudyData?.map((eachItem, i) => {
//           return (
//             <div
//               key={i}
//               className={`article-item-tab ${
//                 eachItem.name === activeDepartment
//                   ? "article-item-tab-active"
//                   : ""
//               }`}
//               onClick={() => setActiveDepartment(eachItem.name)}
//             >
//               {eachItem.name}
//             </div>
//           );
//         })}
//       </div>
//       {/* <div className="case-study-section2">
//         <ResourceNavBar />

//       </div> */}
//       <div>
//         <ReUsableArticle data={casestudyObj?.data} path={"single-caseStudy"} />
//       </div>
//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }




import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/CaseStudy.css";
import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
import SideBar from "../components/SideBar";
import MobileFooter from "../components/MobileFooter";
import Star from "../components/Star";
import axios from "axios";
import { useParams } from "react-router-dom";

import caseStudy from "../Data/Casestudy.json";


export default function CaseStudy() {
  const params = useParams();
  const casestudyData = caseStudy.data || []; // Ensure it's an array

  const [activeDepartment, setActiveDepartment] = useState();
  const [casestudyObj, setCasestudyObj] = useState();

  useEffect(() => {
    if (casestudyData.length > 0) {
      if (params.department) {
        setActiveDepartment(params.department);
      } else {
        setActiveDepartment(casestudyData[0]?.departmentname);
      }
    }
  }, [params, casestudyData]);

  useEffect(() => {
    if (activeDepartment && casestudyData.length > 0) {
      setCasestudyObj(
        casestudyData.find((eachItem) => eachItem.departmentname === activeDepartment)
      );
    }
  }, [activeDepartment, casestudyData]);

  console.log(casestudyData); // Log to verify data




  return (
    <>
      <NavBar />
      <SideBar />
      <div className="case-study-section1">
        <div className="case-study-section-overlay">
          <div className="case-study-title1">
            <span style={{ userSelect: "none" }}>Case Study</span>
            <Star />
          </div>
          {/* <div className="case-study-text">Case Study</div>
          <div className="case-study-text">Lorem</div> */}
        </div>
      </div>{" "}
      <div className="article-item-tabs-container">
        {casestudyData?.map((eachItem, i) => {
          return (
            <div
              key={i}
              className={`article-item-tab ${eachItem.name === activeDepartment
                ? "article-item-tab-active"
                : ""
                }`}
              onClick={() => setActiveDepartment(eachItem.name)}
            >
              {eachItem.name}
            </div>
          );
        })}
      </div>
      {/* <div className="case-study-section2">
        <ResourceNavBar />

      </div> */}
      <div>
        <ReUsableArticle data={casestudyObj?.data} path={"single-caseStudy"} />
      </div>
      <Footer />
      <MobileFooter />
    </>
  );
}
