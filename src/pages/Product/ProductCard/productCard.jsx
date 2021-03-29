import PropTypes from "prop-types";
import React from "react";
import image1 from "../../../assets/images/product1.jpeg";
import WishIcon from "../WishIcon/wishIcon";
import "./_productCard.scss";

function ProductCard(props) {
  const { product } = props;
  const renderRateProduct = (rate) => {
    let result = [];

    let fullStar = Math.floor(rate);
    let restStar = (rate * 10) % 10;

    let total = 0;

    for (let i = 0; i < fullStar; i++) {
      result.push(<i key={total} className="fas fa-star"></i>);
      total++;
    }

    if (3 < restStar && restStar <= 7) {
      result.push(<i key={total} className="fas fa-star-half-alt"></i>);
      total++;
    } else if (restStar > 7) {
      result.push(<i key={total} className="fas fa-star"></i>);
      total++;
    }
    if (total < 5) {
      for (let i = 0; i < 5 - total; i++) {
        result.push(<i key={total + i} className="far fa-star"></i>);
      }
    }
    return result;
  };
  return (
    <div className="product-card">
      <div className="product-photo">
        <img src={image1} alt="Apple watch" />
        <WishIcon />
        <div className="product-action">
          <i
            className="fa fa-search-plus"
            data-toggle="modal"
            data-target="#productModal"
          ></i>

          <i className="fa fa-cart-plus"></i>
        </div>
      </div>
      <div className="product-info">
        <div className="product-title mb-2">
          <span>{product.name}</span>
        </div>
        <div className="product-sub-title">
          <div className="product-price">{product.price}</div>
          <div className="product-rate">{renderRateProduct(product.rate)}</div>
        </div>
      </div>
      {/* <ProductModal product={product}/> */}
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
ProductCard.defaultProps = {
  product: {},
};
export default ProductCard;
