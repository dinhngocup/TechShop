import parseImages from "../../../../helpers/parseImages";
import PropTypes from "prop-types";
import React from "react";
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
  const images = parseImages(product.images);
  return (
    <Link
      className="result"
      to={`/product/${product.categorySlug}/${product.id}`}
    >
      <img src={images[0]} alt={product.name} />
      <div className="info">
        <div className="name">{product.name}</div>
        <div className="price">{product.price}</div>
      </div>
    </Link>
  );
}

export default Result;
