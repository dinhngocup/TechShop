import React from "react";
import PropTypes from "prop-types";
import image from "assets/images/city_2.jpg";
import "./_trendingProduct.scss";
import handlePrice from "utilities/formatPrice";

function TrendingProduct(props) {
  const { product } = props;
  
  return (
    <div className="trending-product d-flex">
      <img src={image} alt={product.productName}/>
      <div className="ml-3">
        <div className="name">{product.productName}</div>
        <div className="price">{handlePrice(product.productPrice)} <u>đ</u></div>
      </div>
    </div>
  );
}

TrendingProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default React.memo(TrendingProduct);
