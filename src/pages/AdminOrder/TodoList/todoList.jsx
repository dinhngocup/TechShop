import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Col, Input, Row } from "reactstrap";
import OrderApi from "../../../api/orderApi";
import { AdminOrderUrl } from "../../../pages/AdminOrder/adminOrderType";
import { OrderStatus } from "../../../pages/Order/type";
import { AdminOrderTypeLabel } from "../adminOrderType";
import TodoTable from "./TodoTable/todoTable";
import "./_todoList.scss";

function TodoList(props) {
  const [allOrders, setAllOrders] = useState();
  const [orders, setOrders] = useState();
  const [orderPeriod, setOrderPeriod] = useState();

  const tabName = useLocation().pathname.replace("/admin/order/", "");
  const classifyAdminOrders = (listOrders) => {
    let filterResults = {
      [AdminOrderUrl.PENDING_CONFIRM]: [],
      [AdminOrderUrl.IN_HANDLING]: [],
      [AdminOrderUrl.SHIPPED]: [],
      [AdminOrderUrl.COMPLETED]: [],
      [AdminOrderUrl.CANCELLED]: [],
    };
    listOrders.forEach((order) => {
      switch (order.status) {
        case OrderStatus.PLACED_ORDER:
          filterResults[AdminOrderUrl.PENDING_CONFIRM].push(order);
          break;
        case OrderStatus.IN_HANDLING:
          filterResults[AdminOrderUrl.IN_HANDLING].push(order);
          break;
        case OrderStatus.DELIVERIED:
          filterResults[AdminOrderUrl.COMPLETED].push(order);
          break;
        case OrderStatus.SHIPPED:
          filterResults[AdminOrderUrl.SHIPPED].push(order);
          break;
        case OrderStatus.CANCELLED:
          filterResults[AdminOrderUrl.CANCELLED].push(order);
          break;
        default:
          break;
      }
    });
    return filterResults;
  };

  useEffect(() => {
    async function fetchAllAdminOrders(parseDateTime) {
      const response = await OrderApi.getAllAdminOrders({
        month: parseDateTime[1],
        year: parseDateTime[0],
      });

      if (response) {
        const filterOrders = classifyAdminOrders(response);
        setAllOrders(filterOrders);
      }
    }
    if (orderPeriod) {
      const parseDateTime = orderPeriod.split("-");
      fetchAllAdminOrders(parseDateTime);
    }
  }, [orderPeriod]);

  useEffect(() => {
    // dispatch(resetOrderModal());
    if (allOrders) {
      setOrders(allOrders[tabName]);
    }
  }, [tabName, allOrders]);

  const renderToDoList = () => {
    let result = [];
    Object.entries(allOrders).forEach(([orderStatus, listOrders]) => {
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
        <Input
          type="month"
          name="month"
          min="2020-01"
          onChange={(e) => setOrderPeriod(e.target.value)}
          onKeyDown={() => false}
        />

        <div className="container-fluid">
          <Row className="text-center">{allOrders && renderToDoList()}</Row>
        </div>
      </div>
      <TodoTable orders={orders} />
    </>
  );
}

TodoList.propTypes = {};

export default React.memo(TodoList);
