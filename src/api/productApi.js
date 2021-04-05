import * as UrlConstant from "../utilities/UrlConstant";
import axiosClient from "./axiosClient";
const ProductApi = {
  getProductsByCategory: async (params) => {
    let {category, order} = params
    const url = `${UrlConstant.GET_PRODUCTS_BY_CATEGORY}?category=${category}&_sort=price&_order=${order}`;
    console.log("call api get product by category");
    return axiosClient.get(url);
  },
  getTrendingProducts: async () => {
    const url = `${UrlConstant.GET_TRENDING_PRODUCTS}`;
    console.log("call api get trending product");
    return axiosClient.get(url);
  },
  getProposedProducts: async () => {
    const url = `${UrlConstant.GET_PROPOSED_PRODUCTS}`;
    console.log("call api get proposed product");
    return axiosClient.get(url);
  },
  getTopPurchasedProducts: async (filter) => {
    const url = `${UrlConstant.GET_TOP_PURCHASED_PRODUCTS}?filter=${filter}`;
    console.log("call api get top purchased product");
    return axiosClient.get(url);
  },
};
export default ProductApi;
