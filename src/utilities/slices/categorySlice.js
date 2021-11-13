/**
 * create action & reducer for category list
 * thunk for async function
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CategoryApi from "../../api/categoryApi";

// thunk action to get list category
export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    const listCategory = await CategoryApi.getAll();
    return listCategory.map((category) => {
      return {
        ...category,
        isCheckedByAdmin: false,
      };
    });
  }
);

const category = createSlice({
  name: "category",
  initialState: {
    data: [],
  },
  reducers: {
    updateCategoryFilter: (state, action) => {
      const { id, isCheckedAction } = action.payload;
      const changeItem = state.data.find((item) => item.id === id);
      if (changeItem) {
        changeItem.isCheckedByAdmin = isCheckedAction;
      }
    },
    removeAllCategoryFilters: (state) => {
      state.data = state.data.map((category) => {
        return { ...category, isCheckedByAdmin: false };
      });
    },
  },
  extraReducers: {
    [getCategories.pending]: (state) => {
      //console.log('pending fetching list')
    },
    [getCategories.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [getCategories.rejected]: (state) => {
      //console.log('false fetching list')
    },
  },
});
export const { updateCategoryFilter, removeAllCategoryFilters } =
  category.actions;
export default category.reducer;
