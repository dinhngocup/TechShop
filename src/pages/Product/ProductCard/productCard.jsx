import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import image1 from "../../../assets/images/product1.jpeg";
import { getProductModal } from "../ProductModal/productModalSlice";
import WishIcon from "../WishIcon/wishIcon";
import "./_productCard.scss";
import { Link } from "react-router-dom";
import ProductRating from "../ProductRating/productRating";

function ProductCard(props) {
  const { product } = props;

  const dispatch = useDispatch();
  const openModal = () => {
    console.log('hi')
    const action = getProductModal(product);
    dispatch(action);
  };
  return (
    <div className="product-card">
      <Link to={`/products/${product.category}/${product.id}`}>
        <div className="product-photo">
          <img src={image1} alt="Apple watch" />
          <WishIcon />
          <div className="product-action" onClick={(e) => { e.preventDefault()}}>
            <i
              className="fa fa-search-plus"
              data-toggle="modal"
              data-target="#productModal"
              onClick={openModal}
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

            <ProductRating rate={product.rate} />
          </div>
        </div>
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
  getDataModal: PropTypes.func,
};
ProductCard.defaultProps = {
  product: {},
  getDataModal: null,
};
export default React.memo(ProductCard);
