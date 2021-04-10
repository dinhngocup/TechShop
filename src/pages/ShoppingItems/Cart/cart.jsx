import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewBreadcrumb,
  removeLastBreadcrumb
} from "../../../components/Breadcrumb/breadcrumbSlice";
import CartItem from "./CartItem/cartItem";
import "./_cart.scss";

function Cart() {
  console.log("cart");
  const productsInCart = useSelector((state) => state.cart.products);
  console.log(productsInCart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      addNewBreadcrumb({
        name: "Cart",
        slug: "/shopping-cart",
      })
    );

    return () => {
      dispatch(removeLastBreadcrumb());
    };
  }, [dispatch]);

  useEffect(() => {}, []);
  return (
    <div className="cart">
      <div className="table-content">
        <table>
          <thead>
            <tr>
              <th className="">Product</th>
              <th className="">Price</th>
              <th className="">Quantity</th>
              <th className="">In Stock</th>
              <th className="">Total</th>
              <th className="">Remove</th>
            </tr>
          </thead>
          <tbody>
            {productsInCart.length !== 0
              ? productsInCart.map((product, index) => {
                  return <CartItem key={index} productInCart={product} />;
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
