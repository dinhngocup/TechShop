import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewBreadcrumb,
  removeLastBreadcrumb,
} from "utilities/slices/breadcrumbSlice";
import EmptyItem from "components/ShoppingItemsComponents/EmptyItem/emptyItem";
import CartItem from "./CartItem/cartItem";
import Coupon from "./Coupon/coupon";

import GeneralOrder from "../common/GeneralOrder/generalOrder";

function Cart() {
  console.log("cart");
  const productsInCart = useSelector((state) => state.cart.products);

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

  return (
    <React.Fragment>
      <div className="table-wrapper">
        <div className="table-content">
          {productsInCart.length !== 0 ? (
            <React.Fragment>
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
                  {productsInCart.map((product, index) => {
                    return (
                      <CartItem key={product.id} productInCart={product} />
                    );
                  })}
                </tbody>
              </table>
            </React.Fragment>
          ) : (
            <EmptyItem title="cart" />
          )}
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-lg-6 pl-0">
            {productsInCart.length !== 0 ? (
              <div className="table-wrapper">
                <Coupon />
              </div>
            ) : null}
          </div>

          <div className="col-lg-6 pr-0">
            {productsInCart.length !== 0 ? (
              <div className="table-wrapper">
                <div>
                  <h4>Payment Details</h4>
                </div>
                <GeneralOrder />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Cart.propTypes = {};

export default Cart;
