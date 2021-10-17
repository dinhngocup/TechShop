import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import OrderProduct from "../../../../components/Order/Product/orderProduct";
import "./_orderDetail.scss";

function OrderDetail(props) {
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
  return (
    <div className="order-detail">
      <div className="d-flex justify-content-between py-3 px-4 text-uppercase header">
        <NavLink to="/your-orders">
          <i className="fas fa-chevron-left mr-2"></i>Back
        </NavLink>
        <div className="sub-title">
          <span className="pr-3">Order Id: 3423948230X</span>
          <span className="pl-3 order-status">Delieveried</span>
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
          <div className="shipper">
            <small>Shipper: Mr Nguyen Van A</small>
          </div>
        </div>
        <div className="row">
          <div className="col-4 buyer">
            <div className="buyer-name">Dinh Ngoc Uyen Phuong</div>
            <div className="buyer-info">
              <small>
                <div>0904588091</div>
                <div>
                  28/27/44 Phan Tây Hồ, Phường 7, Quận Phú Nhuận, TP. Hồ Chí
                  Minh
                </div>
              </small>
            </div>
          </div>
          <div className="col-8 order-action">
          <div className='action-container'>
            <Button className='main-btn'>
              Received
            </Button>
          </div>
          <div className='action-container'>
            <Button>
              Request to Refund
            </Button>
          </div>
          <div className='action-container'>
            <Button>
              Cancel Order
            </Button>
          </div>
          </div>
        </div>
      </div>


      <div className="list-product px-4 pt-4">
        <h4>Your Order</h4>
        <OrderProduct />
        <OrderProduct />
      </div>
      
      
      
      <div className="total d-flex justify-content-end pr-4 align-items-center">
        <div className="total-order-label pr-3 py-2">Total Order</div>
        <div className="total-order py-2">23.000.000đ</div>
      </div>
      <div className="total d-flex justify-content-end pr-4 align-items-center">
        <div className="total-order-label pr-3 py-2">Shipping Code</div>
        <div className="total-order py-2">10.000đ</div>
      </div>
      <div className="total d-flex justify-content-end pr-4 align-items-center">
        <div className="total-order-label pr-3 py-2">Coupon</div>
        <div className="total-order py-2">-10.000đ</div>
      </div>
      <div className="total d-flex justify-content-end pr-4 align-items-center">
        <div className="total-order-label pr-3 py-2">Total</div>
        <div className="total-order py-2 final-price">23.000.000đ</div>
      </div>
    </div>
  );
}

OrderDetail.propTypes = {};

export default OrderDetail;
