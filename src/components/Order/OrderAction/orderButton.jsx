import React from "react";
import { useDispatch } from "react-redux";
import { OrderActionName } from "../../../pages/Order/type";
import { updateOrderModal } from "../../../utilities/slices/orderModalSlice";
import "./_orderButton.scss";
import { useLocation, useHistory } from "react-router-dom";

function OrderButton(props) {
  const { isMainBtn, btnName, orderId } = props;
  const dispatch = useDispatch();
  const currentPath = useLocation().pathname;
  const history = useHistory();

  const updateModalInfo = () => {
    if (btnName === OrderActionName.VIEW_DETAIL) {
      history.push(`${currentPath}/${orderId}`, { from: currentPath } );
    }
    dispatch(updateOrderModal({ btnName, orderId }));
  };

  const dataTargetButton = () => {
    switch (btnName) {
      case OrderActionName.CANCEL_ORDER:
      case OrderActionName.RECEIVED:
      case OrderActionName.RETURN_PACKAGE:
        return "#modalConfirm";
      case OrderActionName.RATE:
      case OrderActionName.VIEW_RATE:
        return "#reviewModal";
      default:
        break;
    }
  };
  return (
    <button
      data-toggle="modal"
      data-target={`${dataTargetButton()}`}
      className={`${isMainBtn ? "main-btn" : ""} btn`}
      onClick={updateModalInfo}
    >
      {btnName}
    </button>
  );
}

export default OrderButton;
