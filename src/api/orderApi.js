import * as UrlConstant from "../utilities/UrlConstant";
import axiosClientAuthen from "./axiosClientAuthen";
const OrderApi = {
  getAllCompletedOrders: async () => {
    const url = `${UrlConstant.GET_ALL_COMPLETED_ORDER}`;
    return axiosClientAuthen.get(url);
  },
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
  getListOrder: async (invoiceStatus) => {
    switch (invoiceStatus) {
      case "all":
        return [];
      case "placedOrder":
        return [
          {
            orderId: "order1",
            orderStatusDetail: "Waiting to confirm by TechShop",
            orderStatus: "Placed Order",
            totalItems: 3,
            total: 23000000,
            orderStatusNote: "Your order are being processed by TechShop",
            firstProduct: {
              name: "Macbook Pro Retina 13-inch 512GB",
              image: "",
              color: "Space Gray",
              quantity: 1,
              oldPrice: "23.000.000đ",
              salePrice: "23.000.000đ",
              total: "23.000.000đ",
            },
          },
        ];
      case "handling":
        return [
          {
            orderId: "order2",
            orderStatusDetail: "Packaging and delivering to shipper",
            orderStatus: "In Handling",
            totalItems: 3,
            total: 23000000,
            orderStatusNote: "Your order was already being packaged up.",
            firstProduct: {
              productId: "1",
              name: "Macbook Pro Retina 13-inch 512GB",
              image: "",
              color: "Space Gray",
              quantity: 1,
              oldPrice: "23.000.000đ",
              salePrice: "23.000.000đ",
              total: "23.000.000đ",
            },
          },
        ];
      case "shipped":
        return [
          {
            orderId: "order3",
            orderStatusDetail: "On the way",
            orderStatus: "Shipped",
            totalItems: 3,
            total: 23000000,
            orderStatusNote:
              "Your package is going to be delivered on the scheduled delivery date",
            firstProduct: {
              name: "Macbook Pro Retina 13-inch 512GB",
              image: "",
              color: "Space Gray",
              quantity: 1,
              oldPrice: "23.000.000đ",
              salePrice: "23.000.000đ",
              total: "23.000.000đ",
            },
          },
          {
            orderId: "order4",
            orderStatusDetail: "Deliveried Successfully",
            orderStatus: "Shipped",
            totalItems: 3,
            total: 23000000,
            orderStatusNote:
              "Your package is deliveried successfully. Please confirm it.",
            firstProduct: {
              name: "Macbook Pro Retina 13-inch 512GB",
              image: "",
              color: "Space Gray",
              quantity: 1,
              oldPrice: "23.000.000đ",
              salePrice: "23.000.000đ",
              total: "23.000.000đ",
            },
          },
        ];
      case "deliveried":
        return [
          {
            orderId: "order5",
            orderStatusDetail: "Received Package Successfuly",
            orderStatus: "Deliveried",
            totalItems: 3,
            total: 23000000,
            orderStatusNote: "",
            firstProduct: {
              name: "Macbook Pro Retina 13-inch 512GB",
              image: "",
              color: "Space Gray",
              quantity: 1,
              oldPrice: "23.000.000đ",
              salePrice: "23.000.000đ",
              total: "23.000.000đ",
            },
          },
          {
            orderId: "order6",
            orderStatusDetail: "Return Package",
            orderStatus: "Deliveried",
            totalItems: 3,
            total: 23000000,
            orderStatusNote: "The reason why you want to return package",
            firstProduct: {
              name: "Macbook Pro Retina 13-inch 512GB",
              image: "",
              color: "Space Gray",
              quantity: 1,
              oldPrice: "23.000.000đ",
              salePrice: "23.000.000đ",
              total: "23.000.000đ",
            },
          },
        ];
      case "cancelled":
        return [
          {
            orderId: "order7",
            orderStatusDetail: "Cancelled",
            orderStatus: "Cancelled",
            totalItems: 3,
            total: 23000000,
            orderStatusNote: "Your cancelled order: Oct 14, 2021",
            firstProduct: {
              name: "Macbook Pro Retina 13-inch 512GB",
              image: "",
              color: "Space Gray",
              quantity: 1,
              oldPrice: "23.000.000đ",
              salePrice: "23.000.000đ",
              total: "23.000.000đ",
            },
          },
        ];
      default:
        return [];
    }

    // call api from BE
    // const url = `${UrlConstant.GET_ALL_COMPLETED_ORDER}`;
    // return axiosClientAuthen.get(url, {
    //   params: { invoiceStatus: invoiceStatus },
    // });
  },
  getOrder: async (id) => {
    return {
      orderId: "3423948230X",
      orderStatusDetail: "Waiting to confirm by TechShop",
      orderStatus: "Placed Order",
      totalItems: 3,
      total: 23000000,
      orderStatusNote: "Your order are being processed by TechShop",
      products: [
        {
          productId: "1",
          name: "Macbook Pro Retina 13-inch 512GB",
          image: "",
          color: "Space Gray",
          quantity: 1,
          oldPrice: "23.000.000đ",
          salePrice: "23.000.000đ",
          total: "23.000.000đ",
        },
        {
          productId: "2",
          name: "Macbook Pro Retina 13-inch 512GB",
          image: "",
          color: "Space Gray",
          quantity: 1,
          oldPrice: "23.000.000đ",
          salePrice: "23.000.000đ",
          total: "23.000.000đ",
        },
        {
          productId: "3",
          name: "Macbook Pro Retina 13-inch 512GB",
          image: "",
          color: "Space Gray",
          quantity: 1,
          oldPrice: "23.000.000đ",
          salePrice: "23.000.000đ",
          total: "23.000.000đ",
        },
      ],
      shipperInfo: {
        name: "Mr Nguyen Van A",
        phone: "0904588091",
        fee: 10000,
      },
      shippingInfo: {
        fullname: "Dinh Ngoc Uyen Phuong",
        address:
          "28/27/44 Phan Tây Hồ, Phường 7, Quận Phú Nhuận, TP. Hồ Chí Minh",
        phone: "0904588091",
      },
    };

    // call api from BE
    // const url = `${UrlConstant.GET_DETAILED_ORDER}/${id}`;
    // return axiosClientAuthen.get(url);
  },
};
export default OrderApi;
