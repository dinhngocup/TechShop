import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import OrderApi from "../../../../api/orderApi";
import OrderProduct from "../../../../components/Order/Product/orderProduct";
import ReviewModal from "../../../../components/Order/ReviewModal/reviewModal";
import handlePrice from "../../../../helpers/formatPrice";
import { OrderStatus } from "../../type";
import OrderAction from "../OrderAction/orderAction";
import "./_orderDetail.scss";

function OrderDetail(props) {
  const history = useHistory();
  const params = useParams();
  const orderId = params.orderId;

  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(true);

  let progressList = [
    {
      orderStatusLabel: OrderStatus.PLACED_ORDER,
      icon: "fas fa-ellipsis-h",
    },
    {
      orderStatusLabel: OrderStatus.IN_HANDLING,
      icon: "fas fa-check",
    },
    {
      orderStatusLabel: OrderStatus.SHIPPED,
      icon: "fas fa-truck",
    },
    {
      orderStatusLabel: OrderStatus.DELIVERIED,
      icon: "fas fa-home",
    },
  ];

  const renderProgress = (orderProgessDetail) => {
    if (orderProgessDetail.cancelled) {
      progressList = [
        {
          orderStatusLabel: OrderStatus.PLACED_ORDER,
          icon: "fas fa-ellipsis-h",
        },
        {
          orderStatusLabel: OrderStatus.CANCELLED,
          icon: "fas fa-times",
        },
      ];
    }
    const progressDetail = progressList.map((progress) => {
      switch (progress.orderStatusLabel) {
        case OrderStatus.PLACED_ORDER:
          progress.orderTime = orderProgessDetail.placedOrder;
          progress.active =
            orderProgessDetail.inHandling || orderProgessDetail.cancelled
              ? "complete"
              : "active";
          break;
        case OrderStatus.IN_HANDLING:
          progress.orderTime = orderProgessDetail.inHandling || "";
          progress.active = orderProgessDetail.inHandling
            ? orderProgessDetail.shipped
              ? "complete"
              : "active"
            : "disable";
          break;
        case OrderStatus.SHIPPED:
          progress.orderTime = orderProgessDetail.shipped || "";
          progress.active = orderProgessDetail.shipped
            ? orderProgessDetail.deliveried
              ? "complete"
              : "active"
            : "disable";
          break;
        case OrderStatus.DELIVERIED:
          progress.orderTime = orderProgessDetail.deliveried || "";
          progress.active = orderProgessDetail.deliveried
            ? "active"
            : "disable";
          break;
        case OrderStatus.CANCELLED:
          progress.orderTime = orderProgessDetail.cancelled || "";
          progress.active = "active";
          break;
        default:
          break;
      }
      return progress;
    });
    return progressDetail.map((progress) => (
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
        <NavLink
          to={history.location.state?.from || "/your-orders/placed-order"}
        >
          <i className="fas fa-chevron-left mr-2"></i>Back
        </NavLink>
        <div className="sub-title">
          <span className="pr-3">Order Id: {order.orderId}</span>
          <span className="pl-3 order-status">{order.orderStatus}</span>
        </div>
      </div>
      <div className="order-process px-4 py-5">
        <div className="container-fluid">
          <div className="row bs-wizard">
            {renderProgress(order.orderProgessDetail)}
          </div>
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
              orderId={order.orderId}
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
      {/* <div className="total d-flex justify-content-end pr-4 align-items-center">
        <div className="total-order-label pr-3 py-2">Coupon</div>
        <div className="total-order py-2">-10.000đ</div>
      </div> */}
      <div className="total d-flex justify-content-end pr-4 align-items-center">
        <div className="total-order-label pr-3 py-2">Total</div>
        <div className="total-order py-2 final-price">
          {handlePrice(order.total)} <u>đ</u>
        </div>
      </div>
      {order.orderStatus === OrderStatus.DELIVERIED ? <ReviewModal /> : ""}
    </div>
  );
}

OrderDetail.propTypes = {};

export default React.memo(OrderDetail);
