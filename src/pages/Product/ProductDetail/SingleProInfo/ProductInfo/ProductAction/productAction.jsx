import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./_productAction.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../ShoppingItems/Cart/cartSlice";

ProductAction.propTypes = {
  status: PropTypes.object,
};
ProductAction.defaultProps = {
  status: {},
};

function ProductAction(props) {
  const { status, id, name } = props;
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = (id, name) => {
    dispatch(
      addToCart({
        id: id,
        quantity: quantity,
        name: name
      })
    );
  };
  useEffect(() => {
    setQuantity(1);
  }, [id]);
  return (
    <React.Fragment>
      <div className="stock-status">
        <p>
          Status:{" "}
          <span className={status.stockStatus}>
            {status.stockStatus === "in-stock" ? "In Stock" : "Out of Stock"}
          </span>
        </p>
        {status.stockQuantity > 0 ? (
          <p>
            Stock: <span>{status.stockQuantity}</span>
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="product-quantity mt-4">
        <div
          className="quantity-btn flex"
          onClick={() => {
            if (quantity > 1) setQuantity(parseInt(quantity) - 1);
          }}
        >
          <i className="fa fa-minus"></i>
        </div>
        <input
          type="number"
          className="flex"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          onBlur={(e) => {
            if (e.target.value > status.stockQuantity || e.target.value < 1)
              setQuantity(1);
          }}
        />
        <div
          className="quantity-btn flex"
          onClick={() => {
            if (quantity < status.stockQuantity)
              setQuantity(parseInt(quantity) + 1);
          }}
        >
          <i className="fa fa-plus"></i>
        </div>
      </div>

      <div
        className="product-actions mt-4"
        onClick={() => {
          handleAddToCart(id, name);
        }}
      >
        <i className="fas fa-cart-plus"></i>
      </div>
    </React.Fragment>
  );
}

export default ProductAction;
