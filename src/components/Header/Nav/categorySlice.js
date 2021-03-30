import { createSlice } from "@reduxjs/toolkit";

const category = createSlice({
    name: 'category',
    initialState: {
        data: []
    },
    reducers: {
        getCategories: (state , action) => {
            state.data = action.payload
        },
    }
})
export const {getCategories} = category.actions
export default category.reducer