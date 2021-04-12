import React, { useState, useEffect } from "react";
import image from "../../../../assets/images/pic7.jpeg";
import CartAction from "./CartAction/cartAction";
import "./_cartItem.scss";
import { Link } from "react-router-dom";
import ProductApi from "../../../../api/productApi";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../cartSlice";

function CartItem(props) {
  const { productInCart } = props;
  const [product, setProduct] = useState({});
  //console.log('item', product.id)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetailedProduct = async (id) => {
      let response = await ProductApi.getDetailedProduct(id);
      //console.log(response);
      setProduct(response);
    };
    fetchDetailedProduct(productInCart.id);
  }, [productInCart.id]);

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
          stockQuantity={product.status?.stockQuantity}
          productInCart={productInCart}
        />
      </td>
      <td className="stock">{product.status?.stockQuantity}</td>
      <td className="total-price">10.000.000đ</td>
      <td className="btn-remove">
        <i
          className="fa fa-times"
          onClick={() => dispatch(removeFromCart({ id: product.id }))}
        ></i>
      </td>
    </tr>
  );
}

CartItem.propTypes = {};

export default React.memo(CartItem);
