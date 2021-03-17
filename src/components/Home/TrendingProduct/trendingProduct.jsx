import React from "react";
import PropTypes from "prop-types";
import image from "../../../assets/images/city_2.jpg";
import './_trendingProduct.scss'

function TrendingProduct(props) {
  return (
    <div className="trending-product d-flex">
      <img src={image} />
      <div className="ml-3">
        <div className="name">Apple Watch</div>
        <div className="price">10.000.000đ</div>
      </div>
    </div>
  );
}

TrendingProduct.propTypes = {};

export default TrendingProduct;
