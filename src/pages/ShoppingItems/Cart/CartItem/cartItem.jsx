import React from "react";
import image from "../../../../assets/images/pic7.jpeg";
import CartAction from "./CartAction/cartAction";
import "./_cartItem.scss";
import { Link } from "react-router-dom";

function CartItem(props) {
  const { product, cartStore } = props;
  console.log('cart items', product.id)
  
  return (
    <tr className="cart-item">
      <td className="product">
        <img src={image} alt="" className="" />
        <div className="short-info">
          <Link
            className="name"
            to={`/products/${product.category}/${product.id}`}
          >
            {product.name}
          </Link>
          <div className="brand">
            Brand: <i>{product.brand}</i>
          </div>
          <div className="color">
            Color: <i>Rose gold</i>
          </div>
        </div>
      </td>
      <td className="price">{product.price}</td>
      <td>
        <CartAction
          stockQuantity={product.status.stockQuantity}
          cartStore={cartStore}
        />
      </td>
      <td className="stock">{product.status.stockQuantity}</td>
      <td className="total-price">10.000.000đ</td>
      <td className="btn-remove">
        <i className="fa fa-times"></i>
      </td>
    </tr>
  );
}

CartItem.propTypes = {};

export default React.memo(CartItem);
