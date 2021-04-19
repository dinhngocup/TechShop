import * as UrlConstant from "utilities/UrlConstant";
import axiosClient from "./axiosClient";
import { Cookies } from "react-cookie";
import axiosClientAuthen from "./axiosClientAuthen";
/**
 * TODO: do not store token in cookies
 * Use samesite cookies instead
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
        const cookies = new Cookies();
        cookies.set("user", JSON.stringify(response));
        return response;
      })
      .catch((error) => Promise.reject(error));
  },
  getShippingInfo: async () => {
    const url = `${UrlConstant.GET_USER_SHIPPING_INFO}/1`;
    return axiosClientAuthen
      .get(url)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  },
  placeOrder: async (params) => {
    //console.log(params)
    const url = `${UrlConstant.PLACE_ORDER}`;
    const body = JSON.stringify(params);
    
    return axiosClientAuthen
      .post(url, body)

      .then((response) => {
        //console.log('res', response)
        return response;
      })
      .catch((error) => Promise.reject(error));
  },
};
export default UserApi;
