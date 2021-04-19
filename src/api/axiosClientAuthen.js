/**
 * This instance is used to send axios request with access token in header
 */

import axios from "axios";
import { authHeader } from "helpers/authHeader";
import queryString from "query-string";

const axiosClientAuthen = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClientAuthen.interceptors.request.use(async (config) => {
  // handle token

  config.headers.Authorization = authHeader();
  return config;
});

axiosClientAuthen.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    
    return Promise.reject(error);
  }
);

export default axiosClientAuthen;
