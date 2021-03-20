import { createSlice } from "@reduxjs/toolkit";

const menu = createSlice({
    name: 'menu',
    initialState: {
        isClosing: false
    },
    reducers: {
        updateMenuState: (state, action) => {
            state.isClosing = action.payload
        },
    }
})
const {reducer, actions} = menu
export const {updateMenuState} = actions
export default reducer