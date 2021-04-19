/**
 * create action & reducer for user
 * thunk for async function
 * data: {
 * isLoggedIn:false}
 */
/**
 * TODO: get token for initialStateUseLoggedIn from cookies not local storage
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "api/userApi";
import { Cookies } from "react-cookie";

// thunk action to login and get token
export const login = createAsyncThunk("user/login", async (params) => {
  const token = await UserApi.login(params);

  return token;
});
const cookies = new Cookies();


export const initialStateUseLoggedIn = () => {
  let result = cookies.get("user");
  return result === undefined || result === null ? false : true;
};

const user = createSlice({
  name: "user",
  initialState: {
    data: { isLoggedIn: initialStateUseLoggedIn(), error: "" },
  },
  reducers: {
    updateLoggedInStatus: (state, action) => {
      console.log('update')
      state.data.isLoggedIn = action.payload.isLoggedIn;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      console.log("pending get token");
    },
    [login.fulfilled]: (state, action) => {
      console.log("login success", action.payload);
      state.data.isLoggedIn = true;
      state.data.error = "";
    },
    [login.rejected]: (state) => {
      console.log("login failed");
      state.data.error = "Username or password is incorrect";
    },
  },
});
export default user.reducer;
export const { updateLoggedInStatus } = user.actions;
