import { configureStore } from "@reduxjs/toolkit"
import reducerMenu from '../components/Header/Menu/menuSlice'
import reducerApp from '../appSlice'

const rootReducer = {
    menu: reducerMenu,
    app: reducerApp,
}
const store = configureStore({
    reducer: rootReducer
})
export default store