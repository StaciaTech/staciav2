import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/productSlice";
import StackCard from "../components/Home/StackCard";
import { useScroll } from "framer-motion";
import { FixedSizeList as List } from "react-window";

// ✅ Move this OUTSIDE the component to avoid redefining on re-renders
const proDetails = [
  {
    id: 1,
    background: "linear-gradient(259deg, #003362 -8.27%, #81497B 95.27%)",
  },
  {
    id: 2,
    background: "linear-gradient(259deg, #8566ea -8.27%, #d296fa 86.58%)",
  },
  {
    id: 3,
    background: "linear-gradient(259deg, #2A35B3 4.78%, #1485CB 94.3%)",
  },
  {
    id: 4,
    background: "linear-gradient(259deg, #CB2B5E -8.27%, #773987 86.58%)",
  },
  {
    id: 5,
    background: "linear-gradient(259deg, #260931 4.78%, #C9B0CE 94.3%)",
  },
  {
    id: 6,
    background: "linear-gradient(259deg, #232131 -8.27%, #8C87A4 86.58%)",
  },
];

const StackScroll = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.product);
  const homeProductData = homeData?.data || [];

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // height of each item (adjust based on card design)
  const itemHeight = 300;

  return (
    <div ref={containerRef} className="stack-scroll-container">
      <div className="stack-scroll">
        <List
          height={window.innerHeight}
          itemCount={homeProductData.length}
          itemSize={itemHeight}
          width={"100%"}
        >
          {({ index, style }) => {
            const eachHomeProduct = homeProductData[index];
            const targetScale = 1 - (homeProductData.length - index) * 0.05;

            return (
              <div style={style}>
                <StackCard
                  key={eachHomeProduct.id}
                  eachHomeProduct={eachHomeProduct}
                  i={index}
                  proDetails={proDetails}
                  range={[index * 0.16, 1]}
                  targetScale={targetScale}
                  progress={scrollYProgress}
                />
              </div>
            );
          }}
        </List>
      </div>
    </div>
  );
};

export default StackScroll;
