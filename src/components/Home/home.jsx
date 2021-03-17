import React, { useState, useEffect } from "react";
import Banner from "./Banner/banner";
import TrendingProduct from "./TrendingProduct/trendingProduct";
import "./_home.scss";
function Home() {
  const [trendingProducts, setTrendingProducts] = useState("");

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
    setTrendingProducts(products);
  }, []);

  const showTrendingProducts = (products) => {
    if (products.length === 0) return "";
    let arr = [...products];
    let row = arr.map((product, index) => {
      if (index > 3) return "";
      products.shift();
      return <TrendingProduct key={index} />;
    });
    console.log("products", products);
    console.log(row);
    return row;
  };

  return (
    <div className="body-content">
      <Banner />
      <div className="wrapper-dashboard">
        <div className="trending-dashboard mt-5">
          <h3>Trending Products</h3>
          <div className="trending-row mt-3">
            <TrendingProduct />
            <TrendingProduct />
            <TrendingProduct />
            <TrendingProduct />
          </div>
          <div className="trending-row mt-3">
            <TrendingProduct />
            <TrendingProduct />
            <TrendingProduct />
            <TrendingProduct />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
