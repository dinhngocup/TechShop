import * as UrlConstant from "../utilities/UrlConstant";
import axiosClientAuthen from "./axiosClientAuthen";
const OrderApi = {
  getDetailedOrder: async (id) => {
    const url = `${UrlConstant.GET_DETAILED_ORDER}/${id}`;
    return axiosClientAuthen.get(url);
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
  getAllUserOrders: async () => {
    const url = `${UrlConstant.GET_ALL_ORDERS}`;
    return axiosClientAuthen.get(url);
  },
  getOrder: async (id) => {
    const url = `${UrlConstant.GET_DETAILED_ORDER}/${id}`;
    return axiosClientAuthen.get(url);
  },
  cancelOrder: async (id, reasonCancelling) => {
    const url = `${UrlConstant.CANCEL_ORDER}/${id}`;

    return axiosClientAuthen
      .put(url, reasonCancelling.reasonContent)

      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => Promise.reject(error));
  },
  returnOrder: async (id) => {
    console.log(id);
    return Promise.resolve(1);
  },
  updateOrderStatus: async (id) => {
    const url = `${UrlConstant.UPDATE_ORDER_STATUS}/${id}`;

    return axiosClientAuthen
      .put(url)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  },
  getTodoList: async () => {
    return [
      {
        orderStatus: "Placed Order",
        quantity: 6,
      },
      {
        orderStatus: "In Handling",
        quantity: 3,
      },
      {
        orderStatus: "Shipped",
        quantity: 2,
      },
      {
        orderStatus: "Deliveried",
        quantity: 4,
      },
      {
        orderStatus: "Cancelled",
        quantity: 1,
      },
    ];
  },

  getAllAdminOrders: async () => {
    const url = `${UrlConstant.GET_ALL_ORDERS}`;
    return axiosClientAuthen.get(url);
    // return [
    //   {
    //     id: 1,
    //     status: "Placed Order",
    //     statusDetail: "Waiting to confirm by TechShop",
    //     totalItems: 3,
    //     total: 23000000,
    //     lastConfirm: "01/01/2020",
    //   },

    //   {
    //     id: 2,
    //     statusDetail: "Packaging and delivering to shipper",
    //     status: "In Handling",
    //     totalItems: 2,
    //     total: 12000000,
    //     lastConfirm: "01/01/2020",
    //   },

    //   {
    //     id: 3,
    //     statusDetail: "On the way",
    //     status: "Shipped",
    //     totalItems: 3,
    //     total: 23000000,
    //     lastConfirm: "01/01/2020",
    //   },
    //   {
    //     id: 4,
    //     statusDetail: "Deliveried Successfully",
    //     status: "Shipped",
    //     totalItems: 2,
    //     total: 5000000,
    //     lastConfirm: "01/01/2020",
    //   },

    //   {
    //     id: 5,
    //     statusDetail: "Received Package Successfuly",
    //     status: "Deliveried",
    //     totalItems: 3,
    //     total: 23000000,
    //     lastConfirm: "01/01/2020",
    //   },
    //   {
    //     id: 6,
    //     statusDetail: "Reviewed",
    //     status: "Deliveried",
    //     totalItems: 3,
    //     total: 23000000,
    //     lastConfirm: "01/01/2020",
    //     isReviewed: true,
    //   },

    //   {
    //     id: 7,
    //     statusDetail: "Cancelled",
    //     status: "Cancelled",
    //     totalItems: 3,
    //     total: 23000000,
    //     lastConfirm: "01/01/2020",
    //   },
    //   {
    //     id: 8,
    //     statusDetail: "Return package",
    //     status: "Cancelled",
    //     totalItems: 1,
    //     total: 1000000,
    //     lastConfirm: "01/01/2020",
    //   },
    //   {
    //     id: 9,
    //     statusDetail: "Cancelled",
    //     status: "Cancelled",
    //     totalItems: 3,
    //     total: 23000000,
    //     lastConfirm: "01/01/2020",
    //   },
    //   {
    //     id: 10,
    //     statusDetail: "Return package",
    //     status: "Cancelled",
    //     totalItems: 1,
    //     total: 1000000,
    //     lastConfirm: "01/01/2020",
    //   },
    //   {
    //     id: 11,
    //     statusDetail: "Cancelled",
    //     status: "Cancelled",
    //     totalItems: 3,
    //     total: 23000000,
    //     lastConfirm: "01/01/2020",
    //   },
    //   {
    //     id: 12,
    //     statusDetail: "Return package",
    //     status: "Cancelled",
    //     totalItems: 1,
    //     total: 1000000,
    //     lastConfirm: "01/01/2020",
    //   },
    // ];
  },
  transferToShipper: async (id, shipperInfo) => {
    console.log("call transfer", shipperInfo);
    const url = `${UrlConstant.UPDATE_ORDER_STATUS}/${id}`;

    return axiosClientAuthen
      .put(url)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  },
  getShippingInfo: async (id) => {
    return {
      name: "Le Minh Huy",
      phone: "0936498844",
    };
  },
};
export default OrderApi;
