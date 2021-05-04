import { cookiesService } from "helpers/cookiesService";
import * as UrlConstant from "utilities/UrlConstant";
import axiosClient from "./axiosClient";
import axiosClientAuthen from "./axiosClientAuthen";
/**
 *
 * TODO: modify url of GET_USER_SHIPPING_INFO: dont have to sent userID (/1)
 */
const UserApi = {
  login: async (params) => {
    let { email, password } = params;
    const url = `${UrlConstant.LOGIN}`;
    const data = JSON.stringify({ email, password });

    return axiosClient
      .post(url, data)

      .then((response) => {
        cookiesService.setCookies("user", JSON.stringify(response), 98);
        return response;
      })
      .catch((error) => {
        //console.log(error);
        return Promise.reject(error);
      });
  },
  getShippingInfo: async () => {
    const url = `${UrlConstant.GET_USER_SHIPPING_INFO}/1`;
    return axiosClientAuthen
      .get(url)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        //console.log(error.response);
        return Promise.reject(error);
      });
  },
  getShippingInfo2: async () => {
    const url = `${UrlConstant.GET_USER_SHIPPING_INFO}/2`;
    return axiosClientAuthen
      .get(url)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        //(error.response);
        return Promise.reject(error);
      });
  },
  placeOrder: async (params) => {
    
    const url = `${UrlConstant.PLACE_ORDER}`;
    const body = JSON.stringify(params);

    return axiosClientAuthen
      .post(url, body)

      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  },
};
export default UserApi;