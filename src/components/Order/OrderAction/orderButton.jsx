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
      history.push(`${currentPath}/${orderId}`, { from: currentPath });
    }
    dispatch(updateOrderModal({ btnName, orderId }));
  };

  const dataTargetButton = () => {
    switch (btnName) {
      case OrderActionName.CANCEL_ORDER:
      case OrderActionName.RETURN_PACKAGE:
      case OrderActionName.ADMIN_CANCEL_ORDER:
        return "#modalConfirm";
      case OrderActionName.RECEIVED:
        return "#modalReceived";
      case OrderActionName.RATE:
      case OrderActionName.VIEW_RATE:
        return "#reviewModal";
      case OrderActionName.TRANSFER_TO_SHIPPER:
      case OrderActionName.EDIT_SHIPPER_INFO:
        return "#modalShipperInfo";

      case OrderActionName.CONFIRMED:
        return "";
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
