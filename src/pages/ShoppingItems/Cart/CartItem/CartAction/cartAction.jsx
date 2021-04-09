import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../../../../app/cartSlice";
import "./_cartAction.scss";

function CartAction(props) {
  const { stockQuantity, cartStore } = props;
  //console.log("cart action");
  const [quantity, setQuantity] = useState(cartStore.quantity);
  console.log("quantity", quantity);
  const dispatch = useDispatch();
  const valueRef = useRef();

  //until component unmount we update quantity in cart store
  useEffect(() => {
    return () => {
      if (cartStore.quantity !== valueRef.current) {
        let data = { ...cartStore };
        data.quantity = valueRef.current;
        dispatch(updateQuantity(data));
      }
    };
  }, []);
  /**
   * In cleanup of useEffect, we cannot access quantityState
   * => we have to useRef to save value of quantityState during the lifecycle of component
   */

  useEffect(() => {
    valueRef.current = quantity;
  }, [quantity]);

  return (
    <div className="cart-action-wrapper">
      <div className="cart-action">
        <div
          className="quantity-btn flex"
          onClick={() => {
            if (quantity > 1) setQuantity(quantity - 1);
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
            if (e.target.value > stockQuantity || e.target.value < 1)
              setQuantity(1);
          }}
        />
        <div
          className="quantity-btn flex"
          onClick={() => {
            if (quantity < stockQuantity) setQuantity(quantity + 1);
          }}
        >
          <i className="fa fa-plus"></i>
        </div>
      </div>
    </div>
  );
}

CartAction.propTypes = {};

export default CartAction;
