import React from "react";
import PropTypes from "prop-types";
import TodoList from "./TodoList/todoList";

function AdminOrder(props) {
  return <div className="body-content" style={{background:"wheat"}}>
      <TodoList/>
  </div>;
}

AdminOrder.propTypes = {};

export default AdminOrder;
