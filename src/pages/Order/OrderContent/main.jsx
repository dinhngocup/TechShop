import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Route, useLocation } from "react-router-dom";
import OrderApi from "../../../api/orderApi";
import ModalConfirm from '../../../components/Order/ModalConfirm/modalConfirm';
import OrderBody from "./OrderBody/orderBody";
import OrderDetail from "./OrderDetail/orderDetail";

function OrderContent(props) {
  const tabName = useLocation().pathname.replace("/your-orders", "");

  const [listOrder, setListOrder] = useState();

  const {modalType, orderId} = useSelector(state => state.orderModal);
  
  useEffect(() => {
    let invoiceStatus;
    const orderData = async () => {
      let response = await OrderApi.getListOrder(invoiceStatus);
      setListOrder(response);
    };

    switch (tabName) {
      case "":
        invoiceStatus = "all";
        break;
      case "/placed-order":
        invoiceStatus = "placedOrder";
        break;
      case "/handling":
        invoiceStatus = "handling";
        break;
      case "/shipped":
        invoiceStatus = "shipped";
        break;
      case "/deliveried":
        invoiceStatus = "deliveried";
        break;
      case "/cancelled":
        invoiceStatus = "cancelled";
        break;
      default:
        break;
    }
    orderData();
  }, [tabName]);

  return (
    <>
      <Route exact path="/your-orders/:orderStatus">
        {listOrder &&
          listOrder.map((order) => (
            <OrderBody key={order.orderId} order={order} />
          ))}
      </Route>
      <Route path="/your-orders/:orderStatus/:orderId">
        <OrderDetail/>
      </Route>
      <ModalConfirm modalType={modalType} orderId={orderId}/>
      
    </>
  );
}

OrderContent.propTypes = {};

export default OrderContent;
