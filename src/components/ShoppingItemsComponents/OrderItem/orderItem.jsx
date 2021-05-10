import React from "react";
import PropTypes from "prop-types";
import './_orderItem.scss'
import image from "assets/images/pic7.jpeg";
import handlePrice from "utilities/formatPrice";


function OrderItem(props) {
  const {product} = props
  return (
    <tr className="order-item">
      <td className='product-info'>
        <div>
          <img src={image} alt="" className="" />
        </div>
        <div className="short-info">{product.productName}</div>
      </td>
      <td>{handlePrice(product.productPrice)} <u>đ</u></td>
      <td>{product.quantity}</td>
      <td>{handlePrice(product.totalPrice)} <u>đ</u></td>
    </tr>
  );
}

OrderItem.propTypes = {
  product: PropTypes.object
};
OrderItem.defaultProps = {
  product: {},
};


export default OrderItem;
