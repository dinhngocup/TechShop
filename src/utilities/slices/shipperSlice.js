/**
 * create action & reducer for shipper list
 * thunk for async function
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShipperApi from "../../api/shipperApi";

// thunk action to get list shipper
export const getShippers = createAsyncThunk("brand/getShippers", async () => {
  return ShipperApi.getAllShippers();
});

const shipper = createSlice({
  name: "shipper",
  initialState: {
    shippers: null,
  },
  extraReducers: {
    [getShippers.pending]: (state) => {
      //console.log('pending fetching list')
    },
    [getShippers.fulfilled]: (state, action) => {
      state.shippers = action.payload;
    },
    [getShippers.rejected]: (state) => {
      //console.log('false fetching list')
    },
  },
});
export default shipper.reducer;
