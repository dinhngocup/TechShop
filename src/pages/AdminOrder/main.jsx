import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import ModalCancelOrder from "../../components/Order/ModalCancelOrder/modalCancelOrder";
import ModalReceived from "../../components/Order/ModalReceived/modalReceived";
import ModalShipperInfo from "../../components/Order/ModalShipperInfo/modalShipperInfo";
import OrderDetail from "../Order/OrderContent/OrderDetail/orderDetail";
import TodoList from "./TodoList/todoList";
import ToDoOrder from "./ToDoOrder/toDoOrder";

function AdminOrder(props) {
  const { orderId, modalType } = useSelector((state) => state.orderModal);

  return (
    <div className="body-content">
      <Route exact path="/admin/order/:orderStatus">
        <TodoList />
        <ToDoOrder />
      </Route>
      <Route path="/admin/order/:orderStatus/:orderId">
        <OrderDetail />
      </Route>
      <ModalCancelOrder orderId={orderId} />
      <ModalReceived orderId={orderId} />
      <ModalShipperInfo orderId={orderId} modalType={modalType} />
    </div>
  );
}

AdminOrder.propTypes = {};

export default AdminOrder;
