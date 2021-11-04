import React, { useState, useEffect } from "react";
import "./_todoList.scss";
import { Row, Col } from "reactstrap";
import OrderApi from "../../../api/orderApi";
import OrderAction from "../../Order/OrderContent/OrderAction/orderAction";
import { OrderStatus } from "../../Order/type";
import { NavLink } from "react-router-dom";

function TodoList(props) {
  const [toDoList, setToDoList] = useState();

  useEffect(() => {
    const getToDoList = async () => {
      return OrderApi.getTodoList().then((res) => {
        const result = res.map((task) => {
          let taskName;
          let path;
          switch (task.orderStatus) {
            case OrderStatus.PLACED_ORDER:
              taskName = "Pending Confirm";
              path="/admin/order/pending"
              break;
            case OrderStatus.IN_HANDLING:
              taskName = "In Handling";
              path="/admin/order/handling"
              break;
            case OrderStatus.SHIPPED:
              taskName = "Shipped";
              path="/admin/order/shipped"
              break;
            case OrderStatus.DELIVERIED:
              taskName = "Completed";
              path="/admin/order/completed"
              break;
            case OrderStatus.CANCELLED:
              taskName = "Cancelled";
              path="/admin/order/cancelled"
              break;
            case OrderStatus.RETURN:
              taskName = "Request to return";
              path="/admin/order/refund"
              break;
            default:
              break;
          }
          return { ...task, taskName, path };
        });
        setToDoList(result);
      });
    };
    getToDoList();
  }, []);

  return (
    <div className="todo-list p-2">
      <h4>To Do List</h4>
      <p>You have to handle these orders as soon as possible</p>
      <div className="container-fluid">
        <Row className="text-center">
          {toDoList &&
            toDoList.map((task) => (
              <Col xs="6" sm="4" className="p-3" key={task.taskName}>
                <NavLink to={task.path} activeClassName="active" className="task-container">
                  <div className="quantity">{task.quantity}</div>
                  <div className="name pb-1">{task.taskName}</div>
                </NavLink>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}

TodoList.propTypes = {};

export default TodoList;
