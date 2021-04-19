import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

/**
 * payload of ADD TO CART action is {
 * id: ID OF PRODUCT,
 * quantity: QUANTITY OF PRODUCT,
 * name: NAME OF PRODUCT
 * }
 *
 * payload of actions is {
 * id: ID OF PRODUCT,
 * quantity: QUANTITY OF PRODUCT
 * }
 */

//singleton for cookies??
const cookies = new Cookies();

export const initialStateCart = () => {
  let result = cookies.get("cart");
  return result === undefined ? [] : result;
};

const cart = createSlice({
  name: "cart",
  initialState: {
    products: initialStateCart(),
  },
  reducers: {
    addToCart: (state, action) => {
      
      state.products =
        cookies.get("cart") === undefined ? [] : [...cookies.get("cart")];

      let existedProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existedProduct === undefined) {
        state.products.push(action.payload);
      } else {
        existedProduct.quantity += action.payload.quantity;
      }
      cookies.set("cart", JSON.stringify(state.products), { path: "/" });
    },
    removeFromCart: (state, action) => {
      if (
        JSON.stringify(cookies.get("cart")) !== JSON.stringify(state.products)
      )
        state.products = [...cookies.get("cart")];
      let existedProduct = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = [...existedProduct];

      cookies.set("cart", JSON.stringify(state.products), { path: "/" });
      //console.log("after remove", state.products);
    },
    updateQuantity: (state, action) => {
      state.products.find((product) => {
        if (product.id === action.payload.id)
          product.quantity = action.payload.quantity;
        return "";
      });
      cookies.set("cart", JSON.stringify(state.products), { path: "/" });
    },
    increaseQuantity: (state, action) => {
      // state.products =
      //   cookies.get("cart") === undefined ? [] : [...cookies.get("cart")];
      if (
        JSON.stringify(cookies.get("cart")) !== JSON.stringify(state.products)
      )
        state.products = [...cookies.get("cart")];

      //console.log(state.products);
      state.products.find((product) => {
        if (product.id === action.payload.id) product.quantity++;
        return "";
      });

      cookies.set("cart", JSON.stringify(state.products), { path: "/" });
      //console.log(JSON.stringify(state.products, undefined, 2));
    },
    decreaseQuantity: (state, action) => {
      if (
        JSON.stringify(cookies.get("cart")) !== JSON.stringify(state.products)
      )
        state.products = [...cookies.get("cart")];
      state.products.find((product) => {
        if (product.id === action.payload.id) product.quantity--;
        return "";
      });
      cookies.set("cart", JSON.stringify(state.products), { path: "/" });
    },
  },
});
export default cart.reducer;
export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
  setNewestPrice,
} = cart.actions;
