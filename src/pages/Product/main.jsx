import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/breadcrumb";
import Categories from "./Categories/categories";
import ExistedBrand from "./ExistedBrand/existedBrand";
import Filter from "./Filter/filter";
import Heading from "./Heading/heading";
import ProductList from "./ProductList/productList";
import "./_product.scss";

function Product() {
  console.log("main");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  

  // get brands
  useEffect(() => {
    let brandList = [
      {
        quantityProduct: 11,
        name: "Asus",
      },
      {
        quantityProduct: 10,
        name: "Apple",
      },
      {
        quantityProduct: 15,
        name: "HP",
      },
      {
        quantityProduct: 19,
        name: "Razer",
      },
      {
        quantityProduct: 19,
        name: "Dell",
      },
      {
        quantityProduct: 20,
        name: "Asus",
      },
      {
        quantityProduct: 10,
        name: "Apple",
      },
    ];
    setBrands(brandList);
  }, []);

  // get categories
  useEffect(() => {
    let categoryList = [
      {
        name: "Smart Watch",
        slug: "smart-watch",
      },
      {
        name: "PC Accessories",
        slug: "pc-accessories",
      },
      {
        name: "Audio System",
        slug: "audio-system",
      },
      {
        name: "HeadPhone",
        slug: "headphone",
      },
      {
        name: "Mouse",
        slug: "mouse",
      },
      {
        name: "Gaming Desk/Chair",
        slug: "gaming-desk-chair",
      },
      {
        name: "Laptop",
        slug: "laptop",
      },
      {
        name: "Monitor",
        slug: "monitor",
      },
    ];
    setCategories(categoryList);
  }, []);

  return (
    <div className="wrapper-dashboard product-area">
      <div className="product-banner">
        <div className="breadcrumb-nav container">
          <Breadcrumb />
        </div>
      </div>
      <div className="product-grid-view">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 pl-0">
              <Filter />

              <Categories categories={categories} />
              <ExistedBrand brands={brands} />
            </div>
            <div className="col-md-9 pr-0">
              <Heading />
              <Route path="/products/:slug">
                <ProductList />
              </Route>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
