// import * as UrlConstant from "../utilities/UrlConstant";
// import axiosClient from "./axiosClient";
const BrandApi = {
  getBrands: async () => {
    // const url = `${UrlConstant.GET_ALL_BRANDS}`;
    // console.log('call api get all brands')
    // return axiosClient.get(url)
    return [
      { id: 1, name: "Asus", img: null },
      { id: 2, name: "Apple", img: null },
      { id: 3, name: "HP", img: null },
      { id: 4, name: "Dell", img: null },
      { id: 5, name: "Samsung", img: null },
      { id: 6, name: "Xiaomi", img: null },
      { id: 7, name: "Huawei", img: null },
      { id: 8, name: "MSI", img: null },
    ];
  },
};
export default BrandApi;
