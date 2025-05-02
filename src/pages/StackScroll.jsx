import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/productSlice";
// import Skeleton from "react-loading-skeleton";
import StackCard from "../components/Home/StackCard";
import { useScroll } from "framer-motion";
const StackScroll = () => {
  const proDetails = [
    {
      id: 1,
      background: "linear-gradient(259deg, #003362 -8.27%, #81497B 95.27%)",
      // background: "linear-gradient(259.24deg, #8501FF -8.27%, #052B8E 95.27%) ",
    },
    {
      id: 2,
      background: "linear-gradient(259deg, #8566ea -8.27%, #d296fa 86.58%)",
      // background: "linear-gradient(259.24deg, #DA06FF -8.27%, #052B8E 95.27%)",
    },
    {
      id: 3,
      background: "linear-gradient(259deg, #2A35B3 4.78%, #1485CB 94.3%)",
      // background: "linear-gradient(259.24deg, #03FFD5 -8.27%, #052B8E 95.27%)",
    },
    {
      id: 4,
      background: "linear-gradient(259deg, #CB2B5E -8.27%, #773987 86.58%)",
      // background: "linear-gradient(259.24deg, #FF035B -8.27%, #052B8E 95.27%)",
    },
    {
      id: 5,
      // background: "linear-gradient(259deg, #260931 4.78%, #C9B0CE 94.3%)",
      background: "linear-gradient(259deg, #260931 4.78%, #C9B0CE 94.3%)",
    },
    {
      id: 6,
      // background: "linear-gradient(259deg, #232131 -8.27%, #8C87A4 86.58%)",
      background: "linear-gradient(259deg, #232131 -8.27%, #8C87A4 86.58%)",
    },

    // {
    //   id: 1,
    //   background: "linear-gradient(259deg, rgb(0, 51, 98) -8.27%, rgb(129, 73, 123) 95.27%);",
    // },
    // {
    //   id: 2,
    //   background: "linear-gradient(259deg, rgb(133, 102, 234) -8.27%, rgb(210, 150, 250) 86.58%);",
    // },
    // {
    //   id: 3,
    //   background: "linear-gradient(259deg, rgb(42, 53, 179) 4.78%, rgb(20, 133, 203) 94.3%)",
    // },
    // {
    //   id: 4,
    //   background: "linear-gradient(259deg, rgb(203, 43, 94) -8.27%, rgb(119, 57, 135) 86.58%)",
    // },
    // {
    //   id: 5,
    //   background: "linear-gradient(259deg, rgb(38, 9, 49) 4.78%, rgb(201, 176, 206) 94.3%)",
    // },
    // {
    //   id: 6,
    //   background: "linear-gradient(259deg, rgb(35, 33, 49) -8.27%, rgb(140, 135, 164) 86.58%)",
    // },
  ];
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  // const homeProductData = homeData?.data?.productPSPosition || [];
  const homeProductData = homeData?.data || [];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  console.log(homeProductData);

  return (
    <div ref={containerRef} className="stack-scroll-container">
      <div className="stack-scroll">
        <ul id="cards">
          {homeProductData.map((eachHomeProduct, i) => {
            const targetScale = 1 - (homeProductData.length - i) * 0.01;
            return (
              <StackCard
                key={eachHomeProduct.id}
                eachHomeProduct={eachHomeProduct}
                i={i}
                proDetails={proDetails}
                range={[i * 0.16, 1]}
                targetScale={targetScale}
                progress={scrollYProgress}
              />
            );
          })}
          {/* dont remove below code */}
          <div
            style={{
              height: "60vh",
              position: "sticky",
              zIndex: "-1",
              top: `calc(100% - 90% + ${40 * homeProductData?.length + 1}px)`,
            }}
          ></div>
        </ul>
      </div>
    </div>
  );
};
export default StackScroll;
