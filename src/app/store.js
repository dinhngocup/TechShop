import { configureStore } from "@reduxjs/toolkit"
import reducerMenu from '../components/Header/Menu/menuSlice'
import reducerApp from '../appSlice'
import reducerProductModal from '../pages/Product/ProductModal/productModalSlice'
import reducerCategory from '../components/Header/Nav/categorySlice'

const rootReducer = {
    menu: reducerMenu,
    app: reducerApp,
    productModal: reducerProductModal,
    category: reducerCategory,

}
const store = configureStore({
    reducer: rootReducer
})
export default store