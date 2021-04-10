import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let existedProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existedProduct === undefined) state.products.push(action.payload);
      else {
        existedProduct.quantity += action.payload.quantity;
      }
      //console.log(JSON.stringify(state.products, undefined, 2));
    },
    removeFromCart: (state, action) => {
      let existedProduct = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = [...existedProduct];
      console.log("after remove", state.products);
    },
    updateQuantity: (state, action) => {
      //console.log('update')
      state.products.find((product) => {
        if (product.id === action.payload.id)
          product.quantity = action.payload.quantity;
        return "";
      });
    },
  },
});
export default cart.reducer;
export const { addToCart, removeFromCart, updateQuantity } = cart.actions;
