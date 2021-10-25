import React from "react";
import Button from "react-bootstrap/Button";
import './_orderButton.scss'

function OrderButton(props) {
  const { isMainBtn, btnName, onclickFunc } = props;
  return (
      <Button
        className={`${isMainBtn ? "main-btn" : ""}`}
        onClick={onclickFunc}
      >
        {btnName}
      </Button>
  );
}

export default OrderButton;
