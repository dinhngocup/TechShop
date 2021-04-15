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
    <Link className="result" to={`/products/${product.category}/${product.id}`}>
      <img src={image} alt={product.name} />
      <div className="info">
        <div className="name">{product.name}</div>
        <div className="price">{product.price}</div>
      </div>
    </Link>
  );
}

export default Result;
