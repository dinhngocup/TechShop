import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Banner from "./Banner/banner";
import BrandGroup from "./BrandGroup/brandGroup";
import HeaderSection from "./HeaderSection/headerSection";
import ProposedProduct from "./ProposedProduct/proposedProduct";
import TopProductGroup from "./TopProductGroup/topProductGroup";
import TrendingProduct from "./TrendingProduct/trendingProduct";
import "./_home.scss";

function Home() {
  //console.log('render home');
  const [trendingProducts_1, setTrendingProducts_1] = useState("");
  const [trendingProducts_2, setTrendingProducts_2] = useState("");

  const [topProducts, setTopProducts] = useState("");
  const [filterTopProduct, setFilterTopProduct] = useState("top20");
  const TOP_PRODUCT_NUMBER_PER_GROUP = 3;

  const [proposedProducts, setProposedProducts] = useState("");

  const [brands, setBrands] = useState("");

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
          key={nanoid()}
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
        tempArr.push(
          items.slice(productPerGroup * i, productPerGroup * (i + 1))
        );
      else tempArr.push(items.slice(productPerGroup * i));
    }

    let res = "";

    res = tempArr.map((arr, index) => {
      return (
        <div
          className={`carousel-item ${index === 0 ? "active" : ""}`}
          key={nanoid()}
        >
          <TopProductGroup group={arr} productPerGroup={productPerGroup} />
        </div>
      );
    });
    return res;
  };

  const changeTypeTopProduct = (e) => {
    let parent = e.target.parentElement;
    let buttons = parent.querySelectorAll("button");
    buttons.forEach((btn) => {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
    });

    let filter = e.target.name;
    e.target.classList.add("active");
    setFilterTopProduct(filter);
  };

  const showHotProposes = (products) => {
    let res = "";
    if (products.length === 0) return res;
    res = products.map((product, index) => {
      return (
        <div
          className={`carousel-item ${index === 0 ? "active" : ""}`}
          key={nanoid()}
        >
          <ProposedProduct product={product} />
        </div>
      );
    });
    return res;
  };

  const showBrands = (brands) => {
    let tempArr = [];
    if (brands.length === 0) return "";
    tempArr.push(brands.slice(0, 4));
    tempArr.push(brands.slice(4));
    let res = "";
    res = tempArr.map((arr, index) => {
      return (
        <div className="row" key={index}>
          <BrandGroup brands={arr} />
        </div>
      );
    });
    return res;
  };

  return (
    <React.Fragment>
      <Banner />
      <div className="wrapper-dashboard">
        {/* Trending products*/}
        <div className="trending-dashboard mt-5">
          <HeaderSection content="Trending Products" />
          <div className="trending-row mt-4">
            <div className="row mb-3">
              {showTrendingProducts(trendingProducts_1)}
            </div>
            <div className="row mb-3">
              {showTrendingProducts(trendingProducts_2)}
            </div>
          </div>
        </div>

        {/* Top purchased products */}
        <div className="trending-dashboard mt-5">
          <div className="header-top-dashboard">
            <HeaderSection content="Top Purchased Products" />
            <div>
              <button
                type="button"
                className="btn btn-outline-secondary active"
                name="top20"
                onClick={changeTypeTopProduct}
              >
                Top 20
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                name="keyboard"
                onClick={changeTypeTopProduct}
              >
                Keyboard
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                name="mouse"
                onClick={changeTypeTopProduct}
              >
                Mouse
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                name="monitor"
                onClick={changeTypeTopProduct}
              >
                Monitor
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
              {showCarouselIndicators(
                Math.ceil(topProducts.length / TOP_PRODUCT_NUMBER_PER_GROUP)
              )}
            </ul>
            <div className="carousel-inner">
              {showCarouselItems(topProducts, TOP_PRODUCT_NUMBER_PER_GROUP)}
            </div>
          </div>
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

          <div
            id="hot-proposes"
            className="carousel slide"
            data-ride="carousel"
            data-interval="false"
          >
            <div className="carousel-inner">
              {showHotProposes(proposedProducts)}
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="subscription mt-5">
          <div className="content">
            <div className="header-subs mb-4">
              <span>SPECIAL OFFERS</span> FOR SUBSCRIBERS
            </div>
            <h4>
              NEW OFFERS EVERY WEEK <span>+</span>{" "}
            </h4>
            <h4>
              DISCOUNT SYSTEM <span>+</span> BEST PRICES
            </h4>
            <div className="sub-content mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates eos obcaecati, aliquam amet dolore enim ab dolorum.
              Debitis voluptate, nam corporis sit pariatur perferendis nobis
              iure soluta inventore, ipsum ratione.
            </div>
            <form className="subs-input mt-4">
              <input />
              <button type="button">Submit</button>
            </form>
          </div>
        </div>

        {/* Our supported brands */}
        <div className="supported-brand mt-5">
          <div className="content">
            <div className="sub-header">OUR SUPPORTED BRANDS</div>
            <h1 className="header">BEST OF THE BEST</h1>
            <div className="title-deco">
              <span></span>
            </div>
            <div className="brands m-5">{showBrands(brands)}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(Home);
