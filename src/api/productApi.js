import * as UrlConstant from "../utilities/UrlConstant";
import axiosClient from "./axiosClient";
const ProductApi = {
  getProductsByCategory: async (params) => {
    let { category, order } = params;
    const url = `${UrlConstant.GET_PRODUCTS_BY_CATEGORY}?category=${category}&_sort=price&_order=${order}`;
    //console.log("call api get product by category");
    return axiosClient.get(url);
  },
  getTrendingProducts: async () => {
    const url = `${UrlConstant.GET_TRENDING_PRODUCTS}`;
    //console.log("call api get trending product");
    return axiosClient.get(url);
  },
  getProposedProducts: async () => {
    const url = `${UrlConstant.GET_PROPOSED_PRODUCTS}`;
    //console.log("call api get proposed product");
    return axiosClient.get(url);
  },
  getTopPurchasedProducts: async (filter) => {
    const url = `${UrlConstant.GET_TOP_PURCHASED_PRODUCTS}?filter=${filter}`;
    //console.log("call api get top purchased product");
    return axiosClient.get(url);
  },
  getDetailedProduct: async (id) => {
    const url = `${UrlConstant.GET_DETAILED_PRODUCT}/${id}`;
    return axiosClient.get(url);
  },
  getRelatedCategoryPro: async (category) => {
    const url = `${UrlConstant.GET_RELATED_CATEGORY_PRODUCT}?category=${category}`;
    return axiosClient.get(url);
  },
  getRelatedBrandPro: async (brand) => {
    const url = `${UrlConstant.GET_RELATED_BRAND_PRODUCT}?brand=${brand}`;
    return axiosClient.get(url);
  },
  getSpecsPro: async (id) => {
    const url = `${UrlConstant.GET_DETAILED_PRODUCT}/${id}`;
    return axiosClient.get(url);
  },
  getFullDescriptionPro: async (id) => {
    const url = `${UrlConstant.GET_FULL_DESCRIP_PRODUCT}/${id}`;
    return axiosClient.get(url);
  },
  getProductsInCart: async (items) => {
    let urlParam = "";
    items.forEach((item, index) => {
      if (index !== 0) {
        urlParam += `&id=${item.id}`;
      }
    });

    console.log(urlParam);
    const url = `${UrlConstant.GET_PRODUCTS_IN_CART}?id=${items[0].id}${urlParam}`;
    return axiosClient.get(url);
  },
};
export default ProductApi;
