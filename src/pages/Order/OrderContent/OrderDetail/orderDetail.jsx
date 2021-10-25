import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import OrderProduct from "../../../../components/Order/Product/orderProduct";
import handlePrice from "../../../../helpers/formatPrice";
import { Spinner } from "reactstrap";
import OrderAction from "../OrderAction/orderAction";
import "./_orderDetail.scss";
import OrderApi from "../../../../api/orderApi";

function OrderDetail(props) {
  const { orderId } = props;
  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(true);
  const progressList = [
    {
      orderStatusLabel: "Placed Order",
      icon: "fas fa-ellipsis-h",
      orderTime: "11:29 01-10-2021",
      active: "complete",
    },
    {
      orderStatusLabel: "In Handling",
      icon: "fas fa-check",
      orderTime: "11:29 01-10-2021",
      active: "complete",
    },
    {
      orderStatusLabel: "Shipped",
      icon: "fas fa-truck",
      orderTime: "11:29 01-10-2021",
      active: "active",
    },
    {
      orderStatusLabel: "Deliveried",
      icon: "fas fa-home",
      orderTime: "11:29 01-10-2021",
      active: "disable",
    },
  ];

  const renderProgress = () => {
    return progressList.map((progress) => (
      <div
        className={`col bs-wizard-step ${progress.active} p-0`}
        key={progress.icon}
      >
        <div className="text-center bs-wizard-stepnum text-dark order-status-label">
          {progress.orderStatusLabel}
        </div>
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
        <div className="bs-wizard-dot d-flex justify-content-center align-items-center">
          <i className={progress.icon}></i>
        </div>
        <div className="bs-wizard-info text-center order-time">
          {progress.orderTime}
        </div>
      </div>
    ));
  };

  useEffect(() => {
    const getDetailedOrder = async () => {
      setLoading(true);
      let response = await OrderApi.getOrder(orderId);
      setLoading(false);
      setOrder(response);
    };

    getDetailedOrder();
  }, [orderId]);

  return loading || !order ? (
    <div className="text-center loading-review">
      <Spinner color="primary" />
    </div>
  ) : (
    <div className="order-detail">
      <div className="d-flex justify-content-between py-3 px-4 text-uppercase header">
        <NavLink to="/your-orders">
          <i className="fas fa-chevron-left mr-2"></i>Back
        </NavLink>
        <div className="sub-title">
          <span className="pr-3">Order Id: {order.orderId}</span>
          <span className="pl-3 order-status">{order.orderStatus}</span>
        </div>
      </div>
      <div className="order-process px-4 py-5">
        <div className="container-fluid">
          <div className="row bs-wizard">{renderProgress()}</div>
        </div>
      </div>

      <div className="shipping-address p-4">
        <div className="d-flex justify-content-between">
          <h4>Shipping Address</h4>
          {order?.shipperInfo ? (
            <div className="shipper">
              <div>
                <small>Shipper: {order.shipperInfo.name}</small>
              </div>
              <div>
                <small>Shipper's phone number: {order.shipperInfo.phone}</small>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="row">
          <div className="col-4 buyer">
            <div className="buyer-name">{order.shippingInfo.fullname}</div>
            <div className="buyer-info">
              <small>
                <div>{order.shippingInfo.phone}</div>
                <div>{order.shippingInfo.address}</div>
              </small>
            </div>
          </div>
          <div className="col-8 order-action">
            <OrderAction
              orderStatus={order.orderStatus}
              isDetailedOrder={true}
            />
          </div>
        </div>
      </div>

      <div className="list-product px-4 pt-4">
        <h4>Your Order</h4>
        {order.products.map((product) => (
          <OrderProduct
            key={`${orderId}${product.productId}`}
            product={product}
          />
        ))}
      </div>

      <div className="total d-flex justify-content-end pr-4 align-items-center">
        <div className="total-order-label pr-3 py-2">Total Order</div>
        <div className="total-order py-2">
          {handlePrice(order.total)} <u>đ</u>
        </div>
      </div>
      {/* {order?.shipperInfo ? (
        <div className="total d-flex justify-content-end pr-4 align-items-center">
          <div className="total-order-label pr-3 py-2">Shipping Fee</div>
          <div className="total-order py-2">
            {handlePrice(order.shipperInfo.fee)} <u>đ</u>
          </div>
        </div>
      ) : (
        ""
      )} */}
      <div className="total d-flex justify-content-end pr-4 align-items-center">
        <div className="total-order-label pr-3 py-2">Coupon</div>
        <div className="total-order py-2">-10.000đ</div>
      </div>
      <div className="total d-flex justify-content-end pr-4 align-items-center">
        <div className="total-order-label pr-3 py-2">Total</div>
        <div className="total-order py-2 final-price">
          {handlePrice(order.total)} <u>đ</u>
        </div>
      </div>
    </div>
  );
}

OrderDetail.propTypes = {};

export default OrderDetail;
