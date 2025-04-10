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
// import caseStudy from "../Data/CaseStudy.json";

// const data = [
//   {
//     id: "6740072c9aaba7f2aa10d14e",
//     title: "caseStudy pk - 1",
//     description: "Analysis of electronics case study.",
//     image: {
//       imageUrl: "/assets/casestudy1.webp",
//     },
//     category: "All",
//     departmenttype: "Electronics",
//     departmentname: "Electronics",
//   },
//   {
//     id: "6740072c9aaba7f2aa10d14e",
//     title: "caseStudy pk - 1",
//     description: "Analysis of electronics case study.",
//     image: {
//       imageUrl: "/assets/casestudy1.webp",
//     },
//     category: "Mechanical",
//     departmenttype: "Electronics",
//     departmentname: "Electronics",
//   },
//   {
//     id: "6740092c3f91447edb16f9dd",
//     title: "case study - 2",
//     description: "There are many variations of passages of Lorem Ipsum.",
//     image: {
//       imageUrl: "/assets/casestudy2.webp",
//     },
//     category: "IT",
//     departmenttype: "Electronics",
//     departmentname: "Electronics",
//   },
//   {
//     id: "6740092c3f91447edb16f9de",
//     title: "case study - 3",
//     description: "Electrical case study.",
//     image: {
//       imageUrl: "/assets/casestudy3.webp",
//     },
//     category: "Electrical",
//     departmenttype: "Electronics",
//     departmentname: "Electronics",
//   },
// ];

// export default function CaseStudy() {
//   const apiUrl = process.env.REACT_APP_API_URL;
//   const params = useParams();

//   const [casestudyData, setCasestudyData] = useState([]);

//   // const FetchCasestudy = async () => {
//   //   try {
//   //     // const res = await axios.get(`${apiUrl}/case-study/list`);
//   //     setCasestudyData(res.data.docs);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   // useEffect(() => {
//   //   // FetchCasestudy();
//   //   setCasestudyData(JSON.stringify(caseStudy?.data));
//   // }, []);

//   const [activeDepartment, setActiveDepartment] = useState();
//   // const [casestudyObj, setCasestudyObj] = useState();

//   // console.log(caseStudy);

//   // useEffect(() => {
//   //   if (params.department) {
//   //     setActiveDepartment(params.department);
//   //   } else if (casestudyData) {
//   //     setActiveDepartment(casestudyData[0]?.name);
//   //   }
//   // }, [casestudyData, params]);

//   // useEffect(() => {
//   //   if ((activeDepartment, casestudyData)) {
//   //     setCasestudyObj(
//   //       casestudyData?.find((eachItem) => eachItem.name === activeDepartment)
//   //     );
//   //   }
//   // }, [activeDepartment, casestudyData]);
//   // // console.log(casestudyData);
//   console.log(activeDepartment);
//   const handleSelectArticle = () => {
//     const filteredData = data?.filter(
//       (article) => article?.category === activeDepartment //------
//     );
//     setCasestudyData(filteredData);
//     console.log(filteredData);
//   };

//   useEffect(() => {
//     handleSelectArticle();
//   }, [activeDepartment]);

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
//         {data?.map((eachItem, i) => {
//           return (
//             <div
//               key={i}
//               className={`article-item-tab ${
//                 eachItem.category === activeDepartment
//                   ? "article-item-tab-active"
//                   : ""
//               }`}
//               onClick={() => setActiveDepartment(eachItem.category)}
//             >
//               {eachItem?.category}
//             </div>
//           );
//         })}
//       </div>
//       {/* <div className="case-study-section2">
//         <ResourceNavBar />

//       </div> */}
//       <div>
//         <ReUsableArticle data={casestudyData} path={"single-caseStudy"} />
//       </div>
//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }

//Static

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/CaseStudy.css";
import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
import SideBar from "../components/SideBar";
import MobileFooter from "../components/MobileFooter";
import Star from "../components/Star";
import { useParams } from "react-router-dom";


const data = [
  {
    id: "Case Study-1",
    title: "Chili Ladling Machine-1",
    description: "Analysis of electronics case study.",
    image: { imageUrl: "/assets/caseStudy-1.webp" },
    category: "Mechanical",
  },
  {
    id: "Case Study-2",
    title: "Chili Ladling Machine-2",
    description: "Analysis of mechanical case study.",
    image: { imageUrl: "/assets/caseStudy-2.webp" },
    category: "Electronics",
  },
  {
    id: "Case Study-3",
    title: "Chili Ladling Machine-3",
    description: "Analysis of mechanical case study.",
    image: { imageUrl: "/assets/caseStudy-3.webp" },
    category: "IT",
  },
];

export default function CaseStudy() {
  const [casestudyData, setCasestudyData] = useState([]);
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [cursorVisible, setCursorVisible] = useState(false);
  

  const details = data.caseStudy;
  console.log(details,"Details");

  useEffect(() => {
    if (activeDepartment === "All") {
      const uniqueCategoryStudies = [];
      const addedCategories = new Set();

      data.forEach((article) => {
        if (!addedCategories.has(article.category)) {
          uniqueCategoryStudies.push(article);
          addedCategories.add(article.category);
        }
      });

      setCasestudyData(uniqueCategoryStudies);
    } else {
      setCasestudyData(
        data.filter((article) => article.category === activeDepartment)
      );
    }
  }, [activeDepartment]);

  const uniqueCategories = [
    "All",
    ...new Set(data?.map((item) => item.category)),
  ];

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
        </div>
      </div>

      <div className="article-item-tabs-container">
        {uniqueCategories?.map((category, i) => (
          <div
            key={i}
            className={`article-item-tab ${
              category === activeDepartment ? "article-item-tab-active" : ""
            }`}
            onClick={() => setActiveDepartment(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <div>
        <ReUsableArticle data={casestudyData} path={"single-caseStudy"}/>
      </div>

      <Footer />
      <MobileFooter />
    </>
  );
}
