import * as UrlConstant from "../utilities/UrlConstant";
import axiosClient from "./axiosClient";
// import axiosClientAuthen from './axiosClientAuthen';

const CategoryApi = {
  getAll: async () => {
    const url = `${UrlConstant.GET_ALL_CATEGORIES}`;
    // console.log("call api get category");
    return axiosClient.get(url);
  },
  remove: async (id) => {
    // console.log("call api remove category");
    // const url = `${UrlConstant.REMOVE_CATEGORY}/${id}`;
    // return axiosClientAuthen.delete(url);
    return Promise.resolve();
  },
  update: async (category) => {
    // console.log("call api update category", category);
    // const url = `${UrlConstant.UPDATE_CATEGORY}/${id}`;
    // return axiosClientAuthen.put(url);
    return Promise.resolve();
  },
  add: async (category) => {
    // console.log("call api update category", category);
    // const url = `${UrlConstant.ADD_CATEGORY}/${id}`;
    // return axiosClientAuthen.post(url);
    return Promise.resolve();
  },
};
export default CategoryApi;
