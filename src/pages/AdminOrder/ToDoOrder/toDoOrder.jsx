import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderSummary from "../../../components/AdminOrder/OrderSummary/orderSummary";
import OrderApi from "../../../api/orderApi";
import "./_toDoOrder.scss";

function ToDoOrder(props) {
  const [orders, setOrders] = useState();
  const tabName = useParams().orderStatus;

  useEffect(() => {
    let invoiceStatus;
    switch (tabName) {
      case "placed-order":
        invoiceStatus = "placedOrder";
        break;
      case "handling":
        invoiceStatus = "handling";
        break;
      case "shipped":
        invoiceStatus = "shipped";
        break;
      case "deliveried":
        invoiceStatus = "deliveried";
        break;
      case "cancelled":
        invoiceStatus = "cancelled";
        break;
      default:
        break;
    }
    const orderData = async () => {
      let response = await OrderApi.getOrdersSummary(invoiceStatus);
      setOrders(response);
    };
    orderData();
  }, [tabName]);
  return (
    <div className="mt-4 to-do-order">
      <table className="w-100">
        <thead>
          <tr>
            <th className="">Order Id</th>
            <th className="">Last Confirmed</th>
            <th className="">Status Detail</th>
            <th className="">Total items</th>
            <th className="">Total</th>
            <th className="">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return <OrderSummary key={order.orderId} order={order} />;
            })}
        </tbody>
      </table>
    </div>
  );
}

ToDoOrder.propTypes = {};

export default ToDoOrder;
