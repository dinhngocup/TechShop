import React from "react";
import { PropTypes } from "prop-types";

function PaymentDetail(props) {
    const { product } = props;
    //console.log(product.id)
  return (
    <tr className="payment-detail">
      <td>{product.name}</td>
      <td className="price">{product.price * product.quantity}</td>
    </tr>
  );
}

PaymentDetail.propTypes = {
  product: PropTypes.object,
};

export default React.memo(PaymentDetail);
