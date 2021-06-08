import React from "react";
import PropTypes from "prop-types";
import image from "assets/images/pic3.jpg";
import { Link } from "react-router-dom";
import "./_result.scss";

Result.propTypes = {
  product: PropTypes.object.isRequired,
};
Result.defaultProps = {
  product: {},
};
function Result(props) {
  const { product } = props;
  //console.log(product.id);
  return (
    <Link className="result" to={`/products/${product.categorySlug}/${product.productID}`}>
      <img src={image} alt={product.productName} />
      <div className="info">
        <div className="name">{product.productName}</div>
        <div className="price">{product.productPrice}</div>
      </div>
    </Link>
  );
}

export default Result;
