import GeneralOrder from "pages/ShoppingItems/common/GeneralOrder/generalOrder";
import React from "react";
import './_order.scss'

function Order(props) {
  return (
    <React.Fragment>
      <div className="order-detail">
        <div>
          <h4>Your order</h4>
        </div>
        <GeneralOrder />
      </div>
      <div className="payment-methods">
        <div>
          <h4>Payment Method</h4>
          <select id="" name="">
            <option value="cod">COD</option>
            <option value="momo">MOMO</option>
          </select>
        </div>
      </div>
      <div className="btn-pay">
        <button>Pay</button>
      </div>
    </React.Fragment>
  );
}

Order.propTypes = {};

export default Order;
