/**
 * create action & reducer for brand list
 * thunk for async function
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import OrderApi from "../../api/orderApi";
import { OrderStatus } from "../../pages/Order/type";
import { AdminOrderUrl } from "../../pages/AdminOrder/adminOrderType";
const classifyAdminOrders = (listOrders) => {
  let filterResults = {
    [AdminOrderUrl.PENDING_CONFIRM]: [],
    [AdminOrderUrl.IN_HANDLING]: [],
    [AdminOrderUrl.SHIPPED]: [],
    [AdminOrderUrl.COMPLETED]: [],
    [AdminOrderUrl.CANCELLED]: [],
  };
  listOrders.forEach((order) => {
    switch (order.status) {
      case OrderStatus.PLACED_ORDER:
        filterResults[AdminOrderUrl.PENDING_CONFIRM].push(order);
        break;
      case OrderStatus.IN_HANDLING:
        filterResults[AdminOrderUrl.IN_HANDLING].push(order);
        break;
      case OrderStatus.DELIVERIED:
        filterResults[AdminOrderUrl.COMPLETED].push(order);
        break;
      case OrderStatus.SHIPPED:
        filterResults[AdminOrderUrl.SHIPPED].push(order);
        break;
      case OrderStatus.CANCELLED:
        filterResults[AdminOrderUrl.CANCELLED].push(order);
        break;
      default:
        break;
    }
  });
  return filterResults;
};

// thunk action to get all orders
export const getAllAdminOrders = createAsyncThunk(
  "adminOrder/getAllAdminOrders",
  async () => {
    const orders = await OrderApi.getAllAdminOrders();
    return classifyAdminOrders(orders);
  }
);

const adminOrder = createSlice({
  name: "adminOrder",
  initialState: {
    orders: null,
  },
  extraReducers: {
    [getAllAdminOrders.pending]: (state) => {
      //console.log('pending fetching list')
    },
    [getAllAdminOrders.fulfilled]: (state, action) => {
      state.orders = action.payload;
    },
    [getAllAdminOrders.rejected]: (state) => {
      //console.log('false fetching list')
    },
  },
});
export default adminOrder.reducer;
