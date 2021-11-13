/**
 * create action & reducer for product list
 * thunk for async function
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductApi from "../../api/productApi";

const filterProducts = (products) => {
  let filterResults = {};
  products.forEach((product) => {
    const category = product.categorySlug;
    const brand = product.brandName;
    
    if (!filterResults[category]) {
      filterResults[category] = [];
    }
    filterResults[category].push(product);

    if (!filterResults[brand]) {
      filterResults[brand] = [];
    }
    filterResults[brand].push(product);
  });
  return filterResults;
};

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (params, thunkAPI) => {
    const listProduct = await ProductApi.getAllProducts(params);
    const filterProductsResult = filterProducts(listProduct);
    return {
      allProducts: listProduct,
      filterProducts: filterProductsResult,
    };
  }
);

const product = createSlice({
  name: "product",
  initialState: {
    products: {},
  },
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      //console.log('pending fetching list')
    },
    [getAllProducts.fulfilled]: (state, action) => {
      //console.log('fetching successfully')
      state.products = action.payload;
    },
    [getAllProducts.rejected]: (state) => {
      //console.log('false fetching list')
    },
  },
});
export default product.reducer;
