import { configureStore } from "@reduxjs/toolkit"
import reducerMenu from '../components/Header/Menu/menuSlice'
import reducerApp from '../appSlice'
import reducerProductModal from '../pages/Product/ProductModal/productModalSlice'
import reducerCategory from '../components/Header/Nav/categorySlice'
import reducerProduct from '../pages/Product/productSlice'
import reducerFilter from '../pages/Product/Filter/filterSlice'
import reducerBreadcrumb from '../components/Breadcrumb/breadcrumbSlice'

const rootReducer = {
    menu: reducerMenu,
    app: reducerApp,
    productModal: reducerProductModal,
    category: reducerCategory,
    product: reducerProduct,
    filter: reducerFilter,
    breadcrumb: reducerBreadcrumb,

}
const store = configureStore({
    reducer: rootReducer
})
export default store