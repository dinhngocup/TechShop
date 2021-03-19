import React from "react";
import PropTypes from "prop-types";
import image from "../../../../assets/images/city_2.jpg";

import "./_topProduct.scss";

function TopProduct(props) {
  return (
    <div className="top-product d-flex">
      <img src={image} alt="apple watch" />
      <div className="mt-2">
        <div className="name">Apple Watch</div>
        <div className="price">10.000.000đ</div>
      </div>
    </div>
  );
}

TopProduct.propTypes = {};

export default TopProduct;
