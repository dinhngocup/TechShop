import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import handlePrice from "../../../helpers/formatPrice";

function OrderSummary(props) {
  const { order } = props;
  const history = useHistory();
  const currentPath = useLocation().pathname;

  const handleRowClick = () => {
    history.push(`${currentPath}/${order.orderId}`, { from: currentPath });
  };

  return (
    <tr className="table-item" onClick={handleRowClick}>
      <td className="">{order.orderId}</td>
      <td className="">{order.date}</td>

      <td className="order-status">{order.orderStatusDetail}</td>
      <td className="">{order.totalItems}</td>
      <td className="">{handlePrice(order.total)}</td>
      <td className="">
        <i className="far fa-eye"></i>
      </td>
    </tr>
  );
}

OrderSummary.propTypes = {};

export default OrderSummary;
