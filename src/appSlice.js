import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
    // name meaning ????
    name: 'app',
    initialState: {
        requestClose: false
    },
    reducers: {
        updateRequestClose: (state, action) => {
            state.requestClose = action.payload
        },
    }
})
const {reducer, actions} = app
export const {updateRequestClose} = actions
export default reducer