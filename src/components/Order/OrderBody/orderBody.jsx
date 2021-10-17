import React from "react";
import Button from "react-bootstrap/Button";
import OrderProduct from "../Product/orderProduct";
import "./_orderBody.scss";

function OrderBody(props) {
  return (
    <div className="p-3 order-body mb-4">
      <div className="text-right order-status-container pb-2">
        <span className="order-detailed-status px-3">
          <i className="fas fa-truck"></i> Distributing for shipper
        </span>
        <span className="order-status pl-3">In handling</span>
      </div>
      <OrderProduct />
      <div className="other-products text-center">
        <small>and 3 other products</small>
      </div>
      <div className="total-container">
        <div className="text-right py-4 total">
          <small>Total:</small> <span>23.000.000đ</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="status-description">
            <small>Your order was already packaged up, ready to be sent.</small>
          </div>
          <div>
            <Button className="btn-details mx-3">View Details</Button>
            <Button className="btn-cancel">Cancel Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

OrderBody.propTypes = {};

export default OrderBody;
