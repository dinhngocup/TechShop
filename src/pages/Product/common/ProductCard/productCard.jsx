import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import image1 from "assets/images/product1.jpeg";
import { getProductModal } from "utilities/slices/productModalSlice";
import WishIcon from "components/common/WishIcon/wishIcon";
import "./_productCard.scss";
import { Link } from "react-router-dom";
import ProductRating from "components/common/ProductRating/productRating";
import { addToCart } from "utilities/slices/cartSlice";
import handlePrice from "helpers/formatPrice";

function ProductCard(props) {
  const { product } = props;

  const dispatch = useDispatch();
  const [content, setContent] = useState(<i className="fa fa-cart-plus"></i>);
  const [loading, setLoading] = useState(false);

  let timer = null;

  const alert = () => {
    window.clearTimeout(timer);
    setContent("Added");
    setLoading(true);
    timer = window.setTimeout(function () {
      setContent(<i className="fa fa-cart-plus"></i>);
      setLoading(false);
    }, 300);
  };

  const openModal = () => {
    const action = getProductModal(product);
    dispatch(action);
  };

  const handleAddToCart = (e, id, name, price) => {
    e.preventDefault();
    if (!loading) {
      dispatch(
        addToCart({
          id: id,
          quantity: 1,
          name: name,
          price: price,
        })
      );
      alert();
    }
  };
  return (
    <div className="product-card">
      <Link to={`/products/${product.categorySlug}/${product.productID}`}>
        <div className="product-photo">
          <img src={image1} alt="Apple watch" />
          <WishIcon id={product.productID} />
          <div
            className="product-action"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <button
              data-toggle="modal"
              data-target="#productModal"
              onClick={openModal}
            >
              <i className="fa fa-search-plus"></i>
            </button>
            <button
              onClick={(e) => {
                handleAddToCart(
                  e,
                  product.productID,
                  product.productName,
                  product.productPrice
                );
              }}
              disabled={loading}
            >
              {content}
            </button>
          </div>
        </div>
        <div className="product-info">
          <div className="mb-2">
            <div className="product-title">{product.productName}</div>
            <div className="product-brand">Brand: {product.brandName}</div>
          </div>
          <div className="product-sub-title">
            <div className="product-price">
              {handlePrice(product.productPrice)} <u>đ</u>
            </div>
            <ProductRating rate={product.productRate} />
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
