import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import image1 from "../../../assets/images/product1.jpeg";
import { getProductModal } from "../ProductModal/productModalSlice";
import WishIcon from "../WishIcon/wishIcon";
import "./_productCard.scss";
import { Link } from "react-router-dom";
import ProductRating from "../ProductRating/productRating";
import { addToCart } from "../../ShoppingItems/Cart/cartSlice";

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

  const handleAddToCart = (e, id) => {
    e.preventDefault();
    if (!loading) {
      dispatch(
        addToCart({
          id: id,
          quantity: 1,
        })
      );
      alert();
    }
  };
  return (
    <div className="product-card">
      <Link to={`/products/${product.category}/${product.id}`}>
        <div className="product-photo">
          <img src={image1} alt="Apple watch" />
          <WishIcon id={product.id}/>
          <div
            className="product-action"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <button>
              <i
                className="fa fa-search-plus"
                data-toggle="modal"
                data-target="#productModal"
                onClick={openModal}
              ></i>
            </button>
            <button
              onClick={(e) => {
                handleAddToCart(e, product.id);
              }}
              disabled={loading}
            >
              {content}
            </button>
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
