import * as UrlConstant from "../utilities/UrlConstant";
import axiosClient from "./axiosClient";
// import axiosClientAuthen from './axiosClientAuthen';

const BrandApi = {
  getBrands: async () => {
    const url = `${UrlConstant.GET_ALL_BRANDS}`;
    // console.log("call api get all brands");
    return axiosClient.get(url);
  },
  remove: (id) => {
    // console.log("call api remove brand");
    // const url = `${UrlConstant.REMOVE_BRANDS}/${id}`;
    // return axiosClientAuthen.delete(url);
    return Promise.resolve();
  },
  update: async (brand) => {
    // console.log("call api update brand", brand);
    // const url = `${UrlConstant.UPDATE_BRANDS}/${id}`;
    // return axiosClientAuthen.put(url);
    return Promise.resolve();
  },
  add: async (brand) => {
    // console.log("call api update brand", brand);
    // const url = `${UrlConstant.ADD_BRANDS}/${id}`;
    // return axiosClientAuthen.post(url);
    return Promise.resolve();
  },
};
export default BrandApi;
