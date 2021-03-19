import React, { useState, useEffect } from "react";

import Banner from "./Banner/banner";
import TrendingProduct from "./TrendingProduct/trendingProduct";
import TopProductGroup from "./TopProductGroup/topProductGroup";

import "./_home.scss";

function Home() {
  const [trendingProducts_1, setTrendingProducts_1] = useState("");
  const [trendingProducts_2, setTrendingProducts_2] = useState("");

  const [topProducts, setTopProducts] = useState("");
  const [filterTopProduct, setFilterTopProduct] = useState("top20");

  const TOP_PRODUCT_NUMBER_PER_GROUP = 3;
  // get trending Prods from DB
  useEffect(() => {
    // call api get data

    // temp data
    let products = [
      {
        img: "",
        name: "Apple Watch",
        price: "10.000.000đ",
      },
      {
        img: "",
        name: "IPhone X",
        price: "10.000.000đ",
      },

      {
        img: "",
        name: "IPhone XR",
        price: "10.000.000đ",
      },
      {
        img: "",
        name: "IPhone 12",
        price: "10.000.000đ",
      },
      {
        img: "",
        name: "Macbook Pro",
        price: "10.000.000đ",
      },
      {
        img: "",
        name: "Macbook Air",
        price: "10.000.000đ",
      },
      {
        img: "",
        name: "Airpod 2",
        price: "10.000.000đ",
      },
      {
        img: "",
        name: "Airpod pro",
        price: "10.000.000đ",
      },
    ];

    setTrendingProducts_1(products.slice(0, 4));
    setTrendingProducts_2(products.slice(4, 8));
  }, []);

  // get top purchased prods from DB depending on filterTopProd
  useEffect(() => {
    let products = "";
    // call api

    // temp data
    if (filterTopProduct === "top20") {
      products = [
        {
          img: "",
          name: "Apple Watch",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "IPhone X",
          price: "10.000.000đ",
        },
  
        {
          img: "",
          name: "IPhone XR",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "IPhone 12",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Macbook Pro",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Macbook Air",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Airpod 2",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Airpod pro",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Airpod 2",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Airpod pro",
          price: "10.000.000đ",
        },
      ];
    } else if (filterTopProduct === "keyboard") {
      products = [
        {
          img: "",
          name: "Keyboard 1",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Keyboard 2",
          price: "10.000.000đ",
        },
  
        {
          img: "",
          name: "Keyboard 3",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Keyboard 4",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Keyboard 5",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Keyboard 6",
          price: "10.000.000đ",
        },
      ];
    } else if (filterTopProduct === "mouse") {
      products = [
        {
          img: "",
          name: "Mouse 1",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Mouse 2",
          price: "10.000.000đ",
        },
  
        {
          img: "",
          name: "Mouse 3",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Mouse 4",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Mouse 5",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Mouse 6",
          price: "10.000.000đ",
        },
      ];
      
    } else if (filterTopProduct === "monitor") {
      products = [
        {
          img: "",
          name: "Monitor 1",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Monitor 2",
          price: "10.000.000đ",
        },
  
        {
          img: "",
          name: "Monitor 3",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Monitor 4",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Monitor 5",
          price: "10.000.000đ",
        },
        {
          img: "",
          name: "Monitor 6",
          price: "10.000.000đ",
        },
      ];
    }

    setTopProducts(products);
  }, [filterTopProduct]);

  const showTrendingProducts = (products) => {
    if (products.length === 0) return "";
    let row = products.map((product, index) => {
      return (
        <div className="col-sm-3" key={index}>
          <TrendingProduct product={product} />
        </div>
      );
    });

    return row;
  };

  const showCarouselIndicators = (length) => {
    let result = [];

    if (length === 0) return result;

    for (let i = 0; i < length; i++) {
      result.push(
        <li
          data-target="#top-dashboard"
          data-slide-to={i}
          className={i === 0 ? "active" : ""}
          key={i}
        ></li>
      );
    }
    return result;
  };

  const showCarouselItems = (items, productPerGroup) => {
    let tempArr = [];
    // the quantity of page
    let pageNumber = Math.ceil(items.length / productPerGroup);
   
    for (let i = 0; i < pageNumber; i++) {
      if (productPerGroup * (i + 1) <= items.length)
        tempArr.push(items.slice(productPerGroup * i, productPerGroup * (i + 1)));
      else tempArr.push(items.slice(productPerGroup * i));
    }
    
    let res = "";
    res = tempArr.map((arr, index) => {
      return (
        <div
          className={`carousel-item ${index === 0 ? "active" : ""}`}
          key={index}
        >
          <TopProductGroup group={arr} productPerGroup={productPerGroup}/>
        </div>
      );
    });
    
    return res;
  };

  const changeTypeTopProduct = (e) => {
    console.log(e.target.name);
    let filter = e.target.name;
    setFilterTopProduct(filter);
  }

  return (
    <div className="body-content">
      <Banner />
      <div className="wrapper-dashboard">
        <div className="trending-dashboard mt-5">
          <h3>Trending Products</h3>
          <div className="trending-row mt-4">
            <div className="row mb-3">
              {showTrendingProducts(trendingProducts_1)}
            </div>
            <div className="row mb-3">
              {showTrendingProducts(trendingProducts_2)}
            </div>
          </div>
        </div>
        <div className="trending-dashboard mt-5">
          <div className="header-top-dashboard">
            <h3>Top Purchased Products</h3>
            <div>
              <button type="button" className="btn btn-outline-secondary active" name="top20" onClick={changeTypeTopProduct}>
                Top 20
              </button>
              <button type="button" className="btn btn-outline-secondary" name="keyboard" onClick={changeTypeTopProduct}>
                Bàn phím
              </button>
              <button type="button" className="btn btn-outline-secondary" name="mouse" onClick={changeTypeTopProduct}>
                Chuột
              </button>
              <button type="button" className="btn btn-outline-secondary" name="monitor" onClick={changeTypeTopProduct}>
                Màn hình
              </button>
            </div>
          </div>

          <div
            id="top-dashboard"
            className="top-row carousel slide mt-4"
            data-ride="carousel"
            data-interval="false"
          >
            <ul className="carousel-indicators">
              {showCarouselIndicators(Math.ceil(topProducts.length / TOP_PRODUCT_NUMBER_PER_GROUP))}
            </ul>
            <div className="carousel-inner">
              {showCarouselItems(topProducts, TOP_PRODUCT_NUMBER_PER_GROUP)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
