import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewBreadcrumb,
  removeLastBreadcrumb,
} from "../../../components/Breadcrumb/breadcrumbSlice";
import CartItem from "./CartItem/cartItem";
import "./_cart.scss";
import ProductApi from "../../../api/productApi";

function Cart(props) {
  console.log('cart')
  const [products, setProducts] = useState([]);
  const cartStore = useSelector((state) => state.cart.products);
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

  useEffect(() => {
    const fetchData = async (cartStore) => {
      let response = await ProductApi.getProductsInCart(cartStore);
      setProducts(response);
    };
    if (cartStore.length !== 0) fetchData(cartStore);
  }, [cartStore]);

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
            {products.length !== 0
              ? products.map((product, index) => {
                  let item = cartStore.find((item) => item.id === product.id);
                  return (
                    <CartItem key={index} product={product} cartStore={item} />
                  );
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
