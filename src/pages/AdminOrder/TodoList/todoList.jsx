import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { Col, Row } from "reactstrap";
import OrderSummary from "../../../components/AdminOrder/OrderSummary/orderSummary";
import { getAllAdminOrders } from "../../../utilities/slices/adminOrderSlice";
import { AdminOrderTypeLabel } from "../adminOrderType";
import "./_todoList.scss";

function TodoList(props) {
  const stateAdminOrders = useSelector((state) => state.adminOrder.orders);

  const [orders, setOrders] = useState();

  const dispatch = useDispatch();
  const tabName = useLocation().pathname.replace("/admin/order/", "");

  useEffect(() => {
    async function fetchAllAdminOrders() {
      await dispatch(getAllAdminOrders());
    }
    if (!stateAdminOrders) {
      fetchAllAdminOrders();
    }
  }, [dispatch]);

  useEffect(() => {
    // dispatch(resetOrderModal());
    if (stateAdminOrders) {
      setOrders(stateAdminOrders[tabName]);
    }
  }, [tabName, stateAdminOrders]);

  const renderToDoList = () => {
    let result = [];
    Object.entries(stateAdminOrders).forEach(([orderStatus, listOrders]) => {
      result.push(
        <Col xs="6" sm="4" className="p-3" key={orderStatus}>
          <NavLink
            to={`/admin/order/${orderStatus}`}
            activeClassName="active"
            className="task-container"
            onClick={() => setOrders(listOrders)}
          >
            <div className="quantity">{listOrders.length}</div>
            <div className="name pb-1">{AdminOrderTypeLabel[orderStatus]}</div>
          </NavLink>
        </Col>
      );
    });
    return result;
  };

  return (
    <>
      <div className="todo-list p-2">
        <h4>To Do List</h4>
        <p>You have to handle these orders as soon as possible</p>
        <div className="container-fluid">
          <Row className="text-center">
            {stateAdminOrders && renderToDoList()}
          </Row>
        </div>
      </div>
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
                return <OrderSummary key={order.id} order={order} />;
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

TodoList.propTypes = {};

export default React.memo(TodoList);
