/**
 * create action & reducer for brand list
 * thunk for async function
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BrandApi from "../../api/brandApi";

// thunk action to get list brand
export const getBrands = createAsyncThunk("brand/getBrands", async () => {
  const listBrand = await BrandApi.getBrands();
  return listBrand.map((brand) => {
    return {
      ...brand,
      isCheckedByAdmin: false,
    };
  });
});

const brand = createSlice({
  name: "brand",
  initialState: {
    data: [],
  },
  reducers: {
    updateBrandFilter: (state, action) => {
      const { id, isCheckedAction } = action.payload;
      const changeItem = state.data.find((item) => item.id === id);
      if (changeItem) {
        changeItem.isCheckedByAdmin = isCheckedAction;
      }
    },
    removeAllBrandFilters: (state) => {
      state.data = state.data.map((brand) => {
        return { ...brand, isCheckedByAdmin: false };
      });
    },
  },
  extraReducers: {
    [getBrands.pending]: (state) => {
      //console.log('pending fetching list')
    },
    [getBrands.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [getBrands.rejected]: (state) => {
      //console.log('false fetching list')
    },
  },
});
export const { updateBrandFilter, removeAllBrandFilters } = brand.actions;
export default brand.reducer;
