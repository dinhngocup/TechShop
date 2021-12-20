/**
 * create action & reducer for customer list
 * thunk for async function
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CustomerApi from "../../api/customerApi";
import UserApi from "../../api/userApi";

// thunk action to get list cutomer
export const getCustomers = createAsyncThunk(
  "customer/getCustomers",
  async () => {
    const listCustomers = await CustomerApi.getAllCustomers();
    return listCustomers;
  }
);

const customer = createSlice({
  name: "customer",
  initialState: {
    customers: null,
  },
  extraReducers: {
    [getCustomers.pending]: (state) => {
      //console.log('pending fetching list')
    },
    [getCustomers.fulfilled]: (state, action) => {
      state.customers = action.payload;
    },
    [getCustomers.rejected]: (state) => {
      //console.log('false fetching list')
    },
  },
});
export default customer.reducer;
