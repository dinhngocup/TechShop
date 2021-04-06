import React, { useState } from "react";
import PropTypes from "prop-types";
import "./_productAction.scss";

ProductAction.propTypes = {
  status: PropTypes.object,
};
ProductAction.defaultProps = {
  status: {},
};

function ProductAction(props) {
  //console.log("action");
  const { status } = props;

  const [quantity, setQuantity] = useState(1);

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

      <div className="product-actions mt-4">
        <i className="fas fa-cart-plus"></i>
      </div>
    </React.Fragment>
  );
}

export default ProductAction;
