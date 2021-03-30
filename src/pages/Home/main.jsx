import React, { useEffect, useState } from "react";
import Banner from "./Banner/banner";
import BrandGroup from "./BrandGroup/brandGroup";
import HeaderSection from "./HeaderSection/headerSection";
import ProposedProductList from "./ProposedProduct/proposedProductList";
import Subscription from "./Subs/subscription";
import TopProductCarousel from "./TopProductGroup/TopProductCarousel/topProductCarousel";
import TrendingProductList from "./TrendingProduct/trendingProductList";
import "./_home.scss";

function Home() {
  //console.log('render home');
  const [trendingProducts, setTrendingProducts] = useState([]);

  const [proposedProducts, setProposedProducts] = useState([]);

  const [brands, setBrands] = useState([]);

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

  // get hot proposes from DB
  useEffect(() => {
    // call api get data

    // temp data
    let products = [
      {
        img: "",
        name: "Apple Watch",
        price: "10.000.000đ",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-04-01 00:00:00",
      },
      {
        img: "",
        name: "IPhone X",
        price: "10.000.000đ",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-04-02 00:00:00",
      },

      {
        img: "",
        name: "IPhone XR",
        price: "10.000.000đ",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-04-23 00:00:00",
      },
      {
        img: "",
        name: "IPhone 12",
        price: "10.000.000đ",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-04-01 00:00:00",
      },
      {
        img: "",
        name: "Macbook Pro",
        price: "10.000.000đ",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-04-04 00:00:00",
      },
      {
        img: "",
        name: "Macbook Air",
        price: "10.000.000đ",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-04-05 00:00:00",
      },
      {
        img: "",
        name: "Airpod 2",
        price: "10.000.000đ",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-04-04 00:00:00",
      },
    ];

    setProposedProducts(products);
  }, []);

  // get brands from DB
  useEffect(() => {
    // call api get data

    // temp data
    let brands = [
      {
        img: "",
        name: "Asus",
      },
      {
        img: "",
        name: "Asus",
      },
      {
        img: "",
        name: "Asus",
      },
      {
        img: "",
        name: "Asus",
      },
      {
        img: "",
        name: "Asus",
      },
      {
        img: "",
        name: "Asus",
      },
      {
        img: "",
        name: "Asus",
      },
      {
        img: "",
        name: "Asus",
      },
    ];

    setBrands(brands);
  }, []);

  return (
    <React.Fragment>
      <Banner />
      <div className="wrapper-dashboard">
        {/* Trending products*/}
        <div className="trending-dashboard mt-5">
          <HeaderSection content="Trending Products" />
          <div className="trending-row mt-4">
            <TrendingProductList products={trendingProducts} />
          </div>
        </div>

        {/* Top purchased products */}
        <div className="trending-dashboard mt-5">
          <TopProductCarousel />
        </div>

        {/* Hot proposes */}
        <div className="trending-dashboard mt-5">
          <div className="header-hot-proposes">
            <HeaderSection content="Hot Proposes" />
            <div>
              <a
                className=""
                href="#hot-proposes"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-arrow-left"></i>
              </a>

              <a
                className=""
                href="#hot-proposes"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <ProposedProductList products={proposedProducts} />
        </div>

        {/* Subscription */}
        <div className="subscription mt-5">
          <Subscription />
        </div>

        {/* Our supported brands */}
        <div className="supported-brand mt-5">
          <div className="content">
            <div className="sub-header">OUR SUPPORTED BRANDS</div>
            <h1 className="header">BEST OF THE BEST</h1>
            <div className="title-deco">
              <span></span>
            </div>
            <div className="brands m-5">
              <BrandGroup brands={brands} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(Home);
