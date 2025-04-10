// import { React, useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../../src/styles/Product.css";
// import ProductComponent2 from "../components/Product/ProductComponent2";
// import MobileFooter from "../components/MobileFooter";
// import MobileProduct from "../components/Product/MobileProduct";
// // import { styled } from "styled-components";
// import SideBar from "../components/SideBar";
// import LoadingStar from "../components/LoadingStar";
// import Star from "../components/Star";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const productBg = [
//   "#F5F7FC",
//   "#F0F2F9",
//   "#EAEDF7",
//   "#E5E8F5",
//   "#E0E3F3",
//   "#DBDFF1",
//   "#D6DAEE",
//   "#D1D6EC",
//   "#CCD1EA",
//   "#C7CDE8",
//   "#C3C9E6",
//   "#BEC5E4",
//   "#B9C1E2",
//   "#B5BDE0",
//   "#B0B9DE",
//   "#ACB5DC",
//   "#A7B1DA",
//   "#A3ADD8",
//   "#9FA9D6",
//   "#9AA5D4",
//   "#96A2D2",
//   "#929ED0",
// ];
// function ProductPage() {
//   const params = useParams();
//   // console.log(params);
//   const apiUrl = process.env.REACT_APP_API_URL;
//   const [productData, setProductData] = useState();
//   const FetchProducts = async () => {
//     try {
//       const res = await axios.get(`${apiUrl}/product/all-products-index`);
//       // console.log(res.data.docs);
//       setProductData(res.data.docs);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     FetchProducts();
//   }, []);
//   const FoundDept = productData?.find(
//     (eachItem) => eachItem.name === params.department.split("-").join(" ")
//   );
//   // console.log(FoundDept);
//   const FoundCat = FoundDept?.categories.find(
//     (eachItem) => eachItem.name === params.category.split("-").join(" ")
//   );
//   // console.log(FoundCat?.products);
//   const proData = FoundCat?.products;
//   console.log(proData);
//   return (
//     <>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       <div style={{ position: "relative", zIndex: "" }}>
//         {!proData ? (
//           <div>
//             <LoadingStar />
//           </div>
//         ) : (
//           <>
//             <div className="product_container">
//               <div className="product_section">
//                 <div className="product_text">
//                   <span style={{ userSelect: "none" }}>{FoundCat?.name}</span>
//                   <Star />
//                 </div>
//                 <div className="product_description">
//                   <p className="test-seclection-white">
//                     <div style={{ userSelect: "none" }}>OverView</div>
//                     {FoundCat?.description}
//                   </p>
//                 </div>
//               </div>
//               <div className="mob-hidden">
//                 {proData.map((data, index) => {
//                   const wordArr = data?.title.split(" ");
//                   return (
//                     <div
//                       style={{
//                         zIndex: "1",
//                         height: "100vh",
//                         position: "sticky",
//                         top: 0,
//                       }}
//                     >
//                       {/* {data.position !== 1 && ( */}
//                       <ProductComponent2
//                         bigText1={wordArr[0]}
//                         productName={data.title}
//                         productImg={data.imageUrl}
//                         bigText2={wordArr[1] || wordArr[0]}
//                         FoundCat={FoundCat}
//                         FoundDept={FoundDept}
//                         des={data.des}
//                         id={data._id}
//                         bgColor={productBg[index % productBg.length]}
//                       />
//                       {/* )} */}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <MobileProduct
//               productData={proData}
//               FoundCat={FoundCat}
//               FoundDept={FoundDept}
//             />
//           </>
//         )}
//       </div>
//       {/* <div>
//         {data.isLoading ? (
//           <div>
//             <LoadingStar />
//           </div>
//         ) : (
//           <div
//             style={{
//               position: "sticky",
//               top: "80px",
//               background: "#fff",
//               zIndex: "-1",
//             }}
//           >
//             <div className="">
//               <span>Stacia Corp Products</span>
//               <Star />
//             </div>
//             <div className="">
//               <p>
//                 At Stacia Corp, we develop cutting-edge products that drive
//                 innovation across industries. From advanced agricultural
//                 machinery to smart home solutions and industrial automation, our
//                 products are designed to enhance efficiency, sustainability, and
//                 user convenience. Each product is crafted with precision to meet
//                 the unique needs of our customers, ensuring quality and
//                 performance at every level.
//               </p>
//             </div>
//           </div>
//         )}
//       </div> */}
//       <Footer />
//       <MobileFooter />
//     </>
//   );
// }
// export default ProductPage;














// Static

import { React, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../../src/styles/Product.css";
import ProductComponent2 from "../components/Product/ProductComponent2";
import MobileFooter from "../components/MobileFooter";
import MobileProduct from "../components/Product/MobileProduct";
// import { styled } from "styled-components";
import SideBar from "../components/SideBar";
import LoadingStar from "../components/LoadingStar";
import Star from "../components/Star";
import axios from "axios";
import { useParams } from "react-router-dom";
import data from '../Data/ProductPage.json'

const productBg = [
  "#F5F7FC",
  "#F0F2F9",
  "#EAEDF7",
  "#E5E8F5",
  "#E0E3F3",
  "#DBDFF1",
  "#D6DAEE",
  "#D1D6EC",
  "#CCD1EA",
  "#C7CDE8",
  "#C3C9E6",
  "#BEC5E4",
  "#B9C1E2",
  "#B5BDE0",
  "#B0B9DE",
  "#ACB5DC",
  "#A7B1DA",
  "#A3ADD8",
  "#9FA9D6",
  "#9AA5D4",
  "#96A2D2",
  "#929ED0",
];

function ProductPage() {
  const params = useParams();
  const depKey = params.department
  console.log(depKey, "DepartmentKey")
  const categoryKey = params.category
  console.log(categoryKey, "CategoryKey")
  const productKey = params.id
  console.log(productKey,"ProductKey")
  // const apiUrl = process.env.REACT_APP_API_URL;

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
    setProductData(data.department || [])
  }, []);

  // console.log(productData, "ProductPage**Data")

    const FoundDept = productData?.find(
      (eachItem)=>eachItem.name === params.department.split("-").join(" ") 
      )
      console.log(FoundDept,"Department");
    
    const FoundCat = FoundDept?.category.find(
      (eachItem)=> eachItem.name === params.category.split("-").join(" "))

      console.log(FoundCat ,"Category");

    const proData = FoundCat?.products;
    console.log(proData,"ProData")
      
    
    

  return (
    <>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      <div style={{ position: "relative", zIndex: "" }}>
        {!proData ? (
          <div>
            <LoadingStar />
          </div>
        ) : (
          <>
            <div className="product_container">
              <div className="product_section">
                <div className="product_text">
                  <span style={{ userSelect: "none" }}>{FoundCat?.name}</span>
                  <Star />
                </div>
                <div className="product_description">
                  <p className="test-seclection-white">
                    <div style={{ userSelect: "none" }}>OverView</div>
                    {FoundCat?.description} 
                  </p>
                </div>
              </div>
              <div className="mob-hidden">
                {proData?.map((eachPro, index) => {  
                  const wordArr = eachPro?.title.split(" ");
                  console.log(wordArr,"WordArr")
                  return (  
                    <div
                      style={{
                        zIndex: "1",
                        height: "100vh",
                        position: "sticky",
                        top: 0,
                      }}
                    >
                      {/* {data.position !== 1 && ( */}
                      <ProductComponent2
                        bigText1={wordArr[0]}
                        product={eachPro}
                        productName={eachPro?.title}
                        productImg={eachPro?.imageUrl}
                        bigText2={wordArr[1] || wordArr[0]}
                        FoundCat={FoundCat}
                        FoundDept={FoundDept}
                        des={eachPro?.description}
                        id={data._id}
                        bgColor={productBg[index % productBg.length]}
                      />
                      {/* )} */}
                    </div>
                  );
                })}
              </div>
            </div>
            <MobileProduct
              productData={proData}
              FoundCat={FoundCat}
              FoundDept={FoundDept}
            />
          </>
        )}
      </div>
      {/* <div>
        {data.isLoading ? (
          <div>
            <LoadingStar />
          </div>
        ) : (
          <div
            style={{
              position: "sticky",
              top: "80px",
              background: "#fff",
              zIndex: "-1",
            }}
          >
            <div className="">
              <span>Stacia Corp Products</span>
              <Star />
            </div>
            <div className="">
              <p>
                At Stacia Corp, we develop cutting-edge products that drive
                innovation across industries. From advanced agricultural
                machinery to smart home solutions and industrial automation, our
                products are designed to enhance efficiency, sustainability, and
                user convenience. Each product is crafted with precision to meet
                the unique needs of our customers, ensuring quality and
                performance at every level.
              </p>
            </div>
          </div>
        )}
      </div> */}
      <Footer />
      <MobileFooter />
    </>
  );
}

export default ProductPage;
