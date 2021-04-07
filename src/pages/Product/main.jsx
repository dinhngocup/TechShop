import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/breadcrumb";
import {
  addNewBreadcrumb,
  removeLastBreadcrumb,
} from "../../components/Breadcrumb/breadcrumbSlice";
import ProductDetail from "./ProductDetail/productDetail";
import ProductGridView from "./ProductGridView/productGridView";
import "./_product.scss";
import ScrollToTop from "../../components/ScrollToTop/scrollToTopRouter";

function Product() {
  console.log("main");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      addNewBreadcrumb({
        name: "products",
        slug: "/products/smart-watch",
      })
    );
    return () => {
      dispatch(removeLastBreadcrumb());
    };
  }, [dispatch]);
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
            <ScrollToTop>
              <Route exact path="/products/:slug">
                <ProductGridView />
              </Route>
              <Route path="/products/:slug/:id">
                <ProductDetail />
              </Route>
            </ScrollToTop>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
