import React from "react";
import { OrderStatus } from "../../type";
import OrderButton from "../../../../components/Order/OrderAction/orderButton";

function OrderAction(props) {
  const { orderStatus, isDetailedOrder } = props;
  const renderOrderActionButton = () => {
    let orderButtons;
    switch (orderStatus) {
      case OrderStatus.PLACED_ORDER:
      case OrderStatus.IN_HANDLING:
        orderButtons = [
          {
            btnName: "Cancel Order",
            onclickFunc: () => {},
            isMainBtn: true,
          },
        ];
        break;
      case OrderStatus.SHIPPED:
        orderButtons = [
          {
            btnName: "Received",
            onclickFunc: () => {},
            isMainBtn: true,
          },
          {
            btnName: "Return Package",
            onclickFunc: () => {},
            isMainBtn: false,
          },
        ];
        break;
      case OrderStatus.DELIVERIED:
        orderButtons = [
          {
            btnName: "Rate & Review",
            onclickFunc: () => {},
            isMainBtn: true,
          },
          {
            btnName: "Buy Again",
            onclickFunc: () => {},
            isMainBtn: false,
          },
        ];
        break;
      case OrderStatus.CANCELLED:
        orderButtons = [
          {
            btnName: "Buy Again",
            onclickFunc: () => {},
            isMainBtn: true,
          },
        ];
        break;
      default:
        break;
    }
    orderButtons.push({
      btnName: "View Details",
      onclickFunc: () => {},
      isMainBtn: false,
    });
    return orderButtons.map((button) =>
      isDetailedOrder ? (
        <div className="action-container" key={button.btnName}>
          <OrderButton
            isMainBtn={button.isMainBtn}
            btnName={button.btnName}
            onclickFunc={button.onclickFunc}
          />
        </div>
      ) : (
        <OrderButton
          key={button.btnName}
          isMainBtn={button.isMainBtn}
          btnName={button.btnName}
          onclickFunc={button.onclickFunc}
        />
      )
    );
  };
  return <div className="order-action">{renderOrderActionButton()}</div>;
}

OrderAction.propTypes = {};

export default OrderAction;
