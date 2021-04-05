import React from "react";
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

              <Categories />
              <ExistedBrand />
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
