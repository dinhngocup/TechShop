import React from "react";
import PropTypes from "prop-types";
import image from "../../../assets/images/city_2.jpg";
import "./_trendingProduct.scss";

function TrendingProduct(props) {
  const { product } = props;
  
  return (
    <div className="trending-product d-flex">
      <img src={image} alt={product.name}/>
      <div className="ml-3">
        <div className="name">{product.name}</div>
        <div className="price">{product.price}</div>
      </div>
    </div>
  );
}

TrendingProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default React.memo(TrendingProduct);
