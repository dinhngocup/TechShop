/**
 * create action & reducer for product list
 * thunk for async function
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductApi from '../../api/productApi';

// 'product/getListProduct' is prefix
export const getListProduct = createAsyncThunk('product/getListProduct', async(params, thunkAPI) => {
    const listProduct = await ProductApi.getProductsByCategory(params)
    return listProduct
})

const product = createSlice({
  name: "product",
  initialState: {
    data: [],
  },
  reducers :{},
  extraReducers: {
    [getListProduct.pending] : (state) => {
        //console.log('pending fetching list')
    },
    [getListProduct.fulfilled] : (state, action) => {
        //console.log('fetching successfully')
        state.data = action.payload
    },
    [getListProduct.rejected] : (state) => {
        //console.log('false fetching list')
    }
  },
});
//export const { getProducts } = product.actions;
export default product.reducer;
