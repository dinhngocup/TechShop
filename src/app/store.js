import { configureStore } from "@reduxjs/toolkit";
import reducerBreadcrumb from "../components/Breadcrumb/breadcrumbSlice";
import reducerCategory from "../components/Header/Nav/categorySlice";
import reducerFilter from "../pages/Product/ProductGridView/Filter/filterSlice";
import reducerProductModal from "../pages/Product/ProductGridView/ProductList/ProductModal/productModalSlice";
import reducerProduct from "../pages/Product/productSlice";
import reducerCart from "../pages/ShoppingItems/Cart/cartSlice";
import reducerWishList from '../pages/ShoppingItems/WishList/wishListSlice';

const rootReducer = {
  productModal: reducerProductModal,
  category: reducerCategory,
  product: reducerProduct,
  filter: reducerFilter,
  breadcrumb: reducerBreadcrumb,
  cart: reducerCart,
  wishList: reducerWishList,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
