import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductApi from "api/productApi";
import image from "assets/images/pic7.jpeg";
import { removeFromCart } from "utilities/slices/cartSlice";
import CartAction from "components/ShoppingItemsComponents/CartAction/cartAction";

function CartItem(props) {
  const { productInCart } = props;

  const [product, setProduct] = useState({});

  //console.log("item", productInCart.id);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetailedProduct = async (id) => {
      let response = await ProductApi.getDetailedProduct(id);

      setProduct(response);
    };
    fetchDetailedProduct(productInCart.id);
  }, [productInCart.id]);

  return (
    <tr className="table-item">
      <td className="product">
        <img src={image} alt="" className="" />
        <div className="short-info">
          <Link
            className="name"
            to={`/products/${product.categorySlug}/${product.productID}`}
          >
            {product.productName}
          </Link>
          <div className="brand">
            Brand: <i>{product.brandName}</i>
          </div>
          <div className="color">
            Color: <i>Rose gold</i>
          </div>
        </div>
      </td>
      <td className="price">{product.productPrice}</td>
      <td>
        <CartAction
          stockQuantity={product.status?.stockQuantity}
          productInCart={productInCart}
        />
      </td>
      <td className={product.status?.stockStatus}>
        {product.status?.stockQuantity === 0
          ? "Out Of Stock"
          : product.status?.stockQuantity}
      </td>
      <td className="total-price">
        {productInCart.price * productInCart.quantity}
      </td>
      <td className="btn-remove">
        <i
          className="fa fa-times"
          onClick={() => dispatch(removeFromCart({ id: product.productID }))}
        ></i>
      </td>
    </tr>
  );
}

CartItem.propTypes = {};

export default React.memo(CartItem);
