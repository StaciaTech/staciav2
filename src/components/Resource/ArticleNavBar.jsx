import { React, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ArticleCard from "../Articles/ArticleCard";
import "../../styles/articles.css";

import s1 from "../../assets/study1.png";
import s2 from "../../assets/study2.png";
import s3 from "../../assets/study3.png";
import s4 from "../../assets/study4.png";
import s5 from "../../assets/study5.png";
import s6 from "../../assets/study6.png";

const data = [
  {
    type: "technology",
    img: "https://media.cnn.com/api/v1/images/stellar/prod/211227135008-02-the-batman-trailer.jpg?q=h_1406,w_2500,x_0,y_0",
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "technology",
    img: s2,
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "culture",
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "technology",
    img: s3,
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "technology",
    img: s4,
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "entertainment",
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "agriculture",
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "culture",
    tags: ["Lorem", "Loading", "Loading"],
    title: "Lorem ipsum dolor sit omet",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "culture",
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "agriculture",
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "technology",
    title: "Lorem ipsum dolor sit omet",
    img: s5,
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "technology",
    title: "Lorem ipsum dolor sit omet",
    img: s6,
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
];

function ArticleNavBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articleTab, setArticleTab] = useState([]);
  const [params1, setParams1] = useState("technology");

  const setParams = (query) => {
    setSearchParams({ type: query });
    setParams1(query);
    setArticleTab(data.filter((data) => data.type === query));
  };
  useEffect(() => {
    setParams("technology");
  }, []);

  const [technologyActive, setTechnologyActive] = useState(false);
  const [agricultureActive, setAgricultureActive] = useState(false);
  const [cultureActive, setCultureActive] = useState(false);
  const [entertainmentActive, setEntertainmetActive] = useState(false);

  useEffect(() => {
    setTechnologyActive(true);
  }, []);

  const technologyHandler = () => {
    setParams("technology");
    setTechnologyActive(true);
    setAgricultureActive(false);
    setCultureActive(false);
    setEntertainmetActive(false);
  };
  const agricultureHandler = () => {
    setParams("agriculture");
    setAgricultureActive(true);
    setTechnologyActive(false);
    setCultureActive(false);
    setEntertainmetActive(false);
  };
  const cultureHandler = () => {
    setParams("culture");
    setAgricultureActive(false);
    setTechnologyActive(false);
    setCultureActive(true);
    setEntertainmetActive(false);
  };
  const entertainmentHandler = () => {
    setParams("entertainment");
    setAgricultureActive(false);
    setTechnologyActive(false);
    setCultureActive(false);
    setEntertainmetActive(true);
  };

  return (
    <div>
      <div className="article-nav-bar">
        <div className="article-nav-links">
          <div
            style={
              technologyActive
                ? {
                    textDecoration: "underline",
                    textUnderlineOffset: "10px",
                    textDecorationColor: "#0047FF",
                    textDecorationThickness: "3px",
                  }
                : {}
            }
            className="article-link"
            onClick={technologyHandler}
          >
            Technology
          </div>
          <div
            style={
              agricultureActive
                ? {
                    textDecoration: "underline",
                    textUnderlineOffset: "10px",
                    textDecorationColor: "#0047FF",
                    textDecorationThickness: "3px",
                  }
                : {}
            }
            className="article-link"
            onClick={agricultureHandler}
          >
            Agriculture
          </div>
          <div
            style={
              cultureActive
                ? {
                    textDecoration: "underline",
                    textUnderlineOffset: "10px",
                    textDecorationColor: "#0047FF",
                    textDecorationThickness: "3px",
                  }
                : {}
            }
            className="article-link"
            onClick={cultureHandler}
          >
            Culture
          </div>
          <div
            style={
              entertainmentActive
                ? {
                    textDecoration: "underline",
                    textUnderlineOffset: "10px",
                    textDecorationColor: "#0047FF",
                    textDecorationThickness: "3px",
                  }
                : {}
            }
            className="article-link"
            onClick={entertainmentHandler}
          >
            Entertainment
          </div>
        </div>
      </div>
      <div className="article-grid">
        {articleTab.map((data, index) => (
          <>
            <ArticleCard
              key={index}
              content={data.content}
              type={data.type}
              img={data.img}
              tags={data.tags}
              title={data.title}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default ArticleNavBar;
