import React from "react";
import OrderButton from "../../../../components/Order/OrderAction/orderButton";
import { OrderActionName, OrderStatus } from "../../type";

function OrderAction(props) {
  const { orderStatus, isDetailedOrder, orderId } = props;

  const renderOrderActionButton = () => {
    let orderButtons = [];
    switch (orderStatus) {
      case OrderStatus.PLACED_ORDER:
      case OrderStatus.IN_HANDLING:
        orderButtons = [
          {
            btnName: OrderActionName.CANCEL_ORDER,
            isMainBtn: true,
          },
        ];
        break;
      case OrderStatus.SHIPPED:
        orderButtons = [
          {
            btnName: OrderActionName.RECEIVED,
            isMainBtn: true,
          },
          {
            btnName: OrderActionName.RETURN_PACKAGE,
            isMainBtn: false,
          },
        ];
        break;
      case OrderStatus.DELIVERIED:
        if (isDetailedOrder) {
          orderButtons = [
            {
              btnName: "Rate & Review",
              onclickFunc: () => {},
              isMainBtn: true,
            },
          ];
        }
        break;
      default:
        break;
    }
    const isMainButton = orderButtons.length === 0 ? true : false;
    if (!isDetailedOrder) {
      orderButtons.push({
        btnName: OrderActionName.VIEW_DETAIL,
        onclickFunc: () => {},
        isMainBtn: isMainButton,
      });
    }
    return orderButtons.map((button) =>
      isDetailedOrder ? (
        <div className="action-container" key={button.btnName}>
          <OrderButton
            orderId={orderId}
            isMainBtn={button.isMainBtn}
            btnName={button.btnName}
          />
        </div>
      ) : (
        <OrderButton
          orderId={orderId}
          key={button.btnName}
          isMainBtn={button.isMainBtn}
          btnName={button.btnName}
        />
      )
    );
  };
  return <div className="order-action">{renderOrderActionButton()}</div>;
}

OrderAction.propTypes = {};

export default OrderAction;
