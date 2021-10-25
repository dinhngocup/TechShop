import React from "react";

import OrderProduct from "../../../../components/Order/Product/orderProduct";
import "./_orderBody.scss";
import handlePrice from "../../../../helpers/formatPrice";
import OrderAction from "../OrderAction/orderAction";

function OrderBody(props) {
  const { order } = props;
  return (
    <div className="p-3 order-body mb-4">
      <div className="text-right order-status-container pb-2">
        <span className="order-detailed-status px-3">
          <i className="fas fa-truck"></i> {order.orderStatusDetail}
        </span>
        <span className="order-status pl-3">{order.orderStatus}</span>
      </div>
      <OrderProduct product={order.firstProduct} />
      {order.totalItems > 1 ? (
        <div className="other-products text-center">
          <small>and {order.totalItems - 1} other product(s)</small>
        </div>
      ) : (
        ""
      )}
      <div className="total-container">
        <div className="text-right py-4 total">
          <small>Total:</small>{" "}
          <span>
            {handlePrice(order.total)} <u>đ</u>
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="status-description">
            <small>{order.orderStatusNote}</small>
          </div>
          <OrderAction orderStatus={order.orderStatus} isDetailedOrder={false}/>
        </div>
      </div>
    </div>
  );
}

OrderBody.propTypes = {};

export default OrderBody;
