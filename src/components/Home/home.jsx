import React, { useState, useEffect } from "react";
import Banner from "./Banner/banner";
import TrendingProduct from "./TrendingProduct/trendingProduct";
import "./_home.scss";
function Home() {
  const [trendingProducts_1, setTrendingProducts_1] = useState("");
  const [trendingProducts_2, setTrendingProducts_2] = useState("");

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
  const showTrendingProducts = (products) => {
    if (products.length === 0) return "";
    let row = products.map((product, index) => {
      return (
        <div className="col-sm-3" key={index} >
          <TrendingProduct product={product} />
        </div>
      );
    });

    return row;
  };

  return (
    <div className="body-content">
      <Banner />
      <div className="wrapper-dashboard">
        <div className="trending-dashboard mt-5">
          <h3>Trending Products</h3>
          <div className="trending-row mt-3">
            <div className="row mb-3">
              {showTrendingProducts(trendingProducts_1)}
            </div>
            <div className="row mb-3">
              {showTrendingProducts(trendingProducts_2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
