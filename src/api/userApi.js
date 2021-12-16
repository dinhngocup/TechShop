import { cookiesService } from "../helpers/cookiesService";
import * as UrlConstant from "../utilities/UrlConstant";
import axiosClient from "./axiosClient";
import axiosClientAuthen from "./axiosClientAuthen";
/**
 *
 * TODO: modify url of GET_USER_SHIPPING_INFO: dont have to sent userID (/1)
 */
const UserApi = {
  login: async (params) => {
    let { email, pswd } = params;
    const url = `${UrlConstant.LOGIN}`;
    const data = JSON.stringify({ email, pswd });

    return axiosClient
      .post(url, data)

      .then((response) => {
        cookiesService.setCookies("access", response.role, 24);
        cookiesService.setCookies("user", response.access_token, 24);
        return response;
      })
      .catch((error) => {
        //console.log(error);
        return Promise.reject(error);
      });
  },
  getShippingInfo: async () => {
    const url = `${UrlConstant.GET_USER_SHIPPING_INFO}`;
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
  signup: (userInfo) => {
    const url = `${UrlConstant.SIGNUP}`;
    const data = JSON.stringify(userInfo);

    return axiosClientAuthen
      .post(url, data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error.response) {
          return Promise.reject(error.response.data);
        } else {
          return Promise.reject(null);
        }
      });
  },
  getCustomerInfo: (id) => {
    return Promise.resolve({
      fullname: "Dinh Ngoc Uyen Phuong",
      email: "dinhngocuyenphuong1802@gmail.com",
      reward: "Diamond",
      dob: "2000-02-02",
      phone: "0904588091",
      gender: "Female",
      address: "9/4/37 Huynh Van Banh p17, quan Phu Nhuan",
      accumulativeOrder: 10,
      accumulativeSpending: 10000000,
      orders: {
        "placed-order": [],
        handling: [],
        deliveried: [
          {
            id: "07075a2d-043c-49a5-8015-c653717ac1af",
            statusDetail: "Reviewed",
            totalItems: 1,
            total: 800000,
            lastConfirm: "",
          },
          {
            id: "0755355a-bb39-4380-bf67-ffcfea45acce",
            statusNote: "We greatly appreciate your feedback.",
            statusDetail: "Reviewed",
            totalItems: 1,
            total: 1200000,
            lastConfirm: "",
          },
          {
            id: "65f0be47-c417-40bf-9519-a26eeb91b1b1",
            statusDetail: "Reviewed",
            totalItems: 2,
            total: 1500000,
            lastConfirm: "",
          },
          {
            id: "8e860dbb-5ebc-4322-b5b1-7ee81eec6762",
            statusDetail: "Received Package Successfuly",
            totalItems: 1,
            total: 9000000,
            lastConfirm: "",
          },
          {
            id: "981f2b1e-cdd6-4736-bdad-1fcbbf6a0e32",
            statusDetail: "Reviewed",
            totalItems: 1,
            total: 800000,
            lastConfirm: "",
          },
          {
            id: "b829691f-a139-453f-9657-6e5488988564",
            statusDetail: "Received Package Successfuly",
            totalItems: 1,
            total: 780000,
            lastConfirm: "",
          },
        ],
        shipped: [
          {
            id: "1cd03359-b726-470f-a4df-935fa01005f4",
            statusDetail: "Deliveried Successfully",
            totalItems: 1,
            total: 700000,
            lastConfirm: "",
          },
          {
            id: "216a34e2-95ab-4e27-831b-32a7deac15be",
            statusDetail: "Deliveried Successfully",
            totalItems: 1,
            total: 2000000,
            lastConfirm: "",
          },
          {
            id: "618f79d2-cd3d-41e7-9560-5a9e098e88c9",
            statusDetail: "Deliveried Successfully",
            totalItems: 1,
            total: 2000000,
          },
          {
            id: "75b78b08-9368-428d-afb6-3017777b3b8b",
            statusDetail: "On the way",
            totalItems: 1,
            total: 2000000,
            lastConfirm: "",
          },
          {
            id: "9559c05d-f5f7-4fbb-9470-4d77a25df7d2",
            statusDetail: "Deliveried Successfully",
            totalItems: 1,
            total: 2000000,
            lastConfirm: "",
          },
          {
            id: "9a5a377d-345c-4cad-9bb6-abda3d9e7a8b",
            statusDetail: "Deliveried Successfully",
            totalItems: 1,
            total: 600000,
            lastConfirm: "",
          },
          {
            id: "b7fe35d3-b0fb-4e85-ab07-c81cade34769",
            statusDetail: "On the way",
            totalItems: 1,
            total: 700000,
            lastConfirm: "",
          },
          {
            id: "bd6f4488-dc20-4efc-b94b-a9a1838bada1",
            statusDetail: "Deliveried Successfully",
            totalItems: 2,
            total: 2700000,
            lastConfirm: "",
          },
        ],
        cancelled: [
          {
            id: "67b9301b-dd2a-42cc-963d-d4cdc7eb394c",
            statusDetail: "Cancelled",
            reason: "Product is taking too long to be delivered",
            totalItems: 1,
            total: 700000,
            whoCancel: "admin",
            lastConfirm: "",
          },
        ],
      },
    });
  },
  getAllCustomers: () => {
    return Promise.resolve([
      {
        id: "21341-1234123-2123ds-234",
        fullname: "Nguyen Gia Phuong Thao",
        email: "dinhngocuyenphuong1802@gmail.com",
        phone: "0904588091",
        reward: "Diamond",
      },
      {
        id: "21341-1234123-2123ds-231",
        fullname: "Dinh Ngoc Uyen Phuong",
        email: "phuongdinh1802@gmail.com",
        phone: "0904588091",
        reward: "Silver",
      },
      {
        id: "21341-1234123-2123ds-233",
        fullname: "Le Minh Huy",
        email: "huyleminh@gmail.com",
        phone: "0904588091",
        reward: "Gold",
      },
      {
        id: "21341-1234123-2123ds-2348",
        fullname: "Nguyen Thuy Vy",
        email: "nguyenthuyvy0304@gmail.com",
        phone: "0904588091",
        reward: "Member",
      },
    ]);
  },
};
export default UserApi;
