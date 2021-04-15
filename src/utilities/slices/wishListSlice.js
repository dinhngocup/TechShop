import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
/**
 * payload of actions is ID OF PRODUCTS
 */

//singleton for cookies??
const cookies = new Cookies();

export const initialStateWishList = () => {
  let result = cookies.get("wishList");
  return result === undefined ? [] : result;
};

const wishList = createSlice({
  name: "wishList",
  initialState: {
    products: initialStateWishList(),
  },
  reducers: {
    editWishList: (state, action) => {
      state.products =
        cookies.get("wishList") === undefined
          ? []
          : [...cookies.get("wishList")];
      let isExisted = false;
      let newProdutcs = state.products.filter((product) => {
        if (product !== action.payload) {
          return product;
        } else {
          isExisted = true;
          return null;
        }
      });
      if (!isExisted) state.products.push(action.payload);
      else state.products = [...newProdutcs];
      
      cookies.set("wishList", JSON.stringify(state.products), { path: "/" });
    },
  },
});
export default wishList.reducer;
export const { editWishList } = wishList.actions;
