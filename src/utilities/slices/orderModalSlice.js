import { createSlice } from "@reduxjs/toolkit";

const orderModal = createSlice({
  name: "orderModal",
  initialState: {
    modalType: "",
    orderId: "",
    shipperInfo:""
  },
  reducers: {
    updateOrderModal: (state, action) => {
      state.orderId = action.payload.orderId;
      state.modalType= action.payload.btnName;
    },
  },
});
export const { updateOrderModal } = orderModal.actions;
export default orderModal.reducer;
