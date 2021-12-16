/**
 * create action & reducer for user
 * thunk for async function
 * data: {
 * isLoggedIn:false}
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../../api/userApi";
import { cookiesService } from "../../helpers/cookiesService";
import OrderApi from "../../api/orderApi";
import { OrderStatus } from "../../pages/Order/type";

// thunk action to login and get token
export const login = createAsyncThunk("user/login", async (params) => {
  const token = await UserApi.login(params);
  return token;
});

const classifyOrder = (listOrders) => {
  let filterResults = {
    "placed-order": [],
    handling: [],
    deliveried: [],
    shipped: [],
    cancelled: [],
  };
  listOrders.forEach((order) => {
    switch (order.status) {
      case OrderStatus.PLACED_ORDER:
        filterResults["placed-order"].push(order);
        break;
      case OrderStatus.IN_HANDLING:
        filterResults["handling"].push(order);
        break;
      case OrderStatus.DELIVERIED:
        filterResults["deliveried"].push(order);
        break;
      case OrderStatus.SHIPPED:
        filterResults["shipped"].push(order);
        break;
      case OrderStatus.CANCELLED:
        filterResults["cancelled"].push(order);
        break;
      default:
        break;
    }
  });
  console.log(JSON.stringify(filterResults));
  return filterResults;
};

// thunk action to get list order
export const getAllUserOrders = createAsyncThunk(
  "user/getAllUserOrders",
  async () => {
    const orders = await OrderApi.getAllUserOrders();
    const result = classifyOrder(orders);
    return result;
  }
);

export const initialStateUseLoggedIn = () => {
  let result = cookiesService.getCookies("user");
  return result === undefined || result === null ? false : true;
};

const user = createSlice({
  name: "user",
  initialState: {
    data: {
      isLoggedIn: initialStateUseLoggedIn(),
      error: "",
      listOrders: null,
    },
  },
  reducers: {
    updateLoggedInStatus: (state, action) => {
      state.data.isLoggedIn = action.payload.isLoggedIn;
    },
    clearData: (state) => {
      state.data.isLoggedIn = false;
      state.data.listOrders = null;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      //console.log("pending get token");
    },
    [login.fulfilled]: (state, action) => {
      state.data.isLoggedIn = true;
      state.data.error = "";
    },
    [login.rejected]: (state) => {
      state.data.error = "Username or password is incorrect";
    },
    [getAllUserOrders.pending]: (state) => {
      //console.log("pending get token");
    },
    [getAllUserOrders.fulfilled]: (state, action) => {
      state.data.listOrders = action.payload;
    },
    [getAllUserOrders.rejected]: (state) => {},
  },
});
export default user.reducer;
export const { updateLoggedInStatus, clearData } = user.actions;
