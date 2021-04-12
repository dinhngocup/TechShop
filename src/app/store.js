import { configureStore } from "@reduxjs/toolkit";
import reducerBreadcrumb from "../components/Breadcrumb/breadcrumbSlice";
import reducerCategory from "../components/Header/Nav/categorySlice";
import reducerFilter from "../pages/Product/Filter/filterSlice";
import reducerProductModal from "../pages/Product/ProductModal/productModalSlice";
import reducerProduct from "../pages/Product/productSlice";
import reducerCart from "../pages/ShoppingItems/Cart/cartSlice";

const rootReducer = {
  productModal: reducerProductModal,
  category: reducerCategory,
  product: reducerProduct,
  filter: reducerFilter,
  breadcrumb: reducerBreadcrumb,
  cart: reducerCart,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
