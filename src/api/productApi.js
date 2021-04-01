import * as UrlConstant from "../utilities/UrlConstant";
import axiosClient from "./axiosClient";
const ProductApi = {
  getAll: (category) => {
    const url = `${UrlConstant.GET_ALL_PRODUCTS}?category=${category}`;
    return axiosClient.get(url);
  },
};
export default ProductApi;
