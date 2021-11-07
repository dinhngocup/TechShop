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
              productId: "1",
              categorySlug: "smart-phone",
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
              categorySlug: "smart-phone",
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
              productId: "1",
              categorySlug: "smart-phone",
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
              productId: "1",
              categorySlug: "smart-phone",
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
            orderStatusNote: "Did you enjoy working with us? Leave a review!",
            firstProduct: {
              productId: "1",
              categorySlug: "smart-phone",
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
            orderId: "order8",
            orderStatusDetail: "Reviewed",
            orderStatus: "Deliveried",
            totalItems: 3,
            total: 23000000,
            orderStatusNote: "",
            firstProduct: {
              productId: "1",
              categorySlug: "smart-phone",
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
            orderId: "order6",
            orderStatusDetail: "Cancelled",
            orderStatus: "Cancelled",
            totalItems: 3,
            total: 23000000,
            orderStatusNote: "Product is taking too long to be delivered",
            firstProduct: {
              productId: "1",
              categorySlug: "smart-phone",
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
            orderId: "order7",
            orderStatusDetail: "Return Package",
            orderStatus: "Cancelled",
            totalItems: 3,
            total: 23000000,
            orderStatusNote: "The reason why you want to return package",
            firstProduct: {
              productId: "1",
              categorySlug: "smart-phone",
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
    switch (id) {
      case "order1":
        return {
          orderId: "order1",
          orderStatusDetail: "Waiting to confirm by TechShop",
          orderStatus: "Placed Order",
          totalItems: 3,
          total: 23000000,
          orderStatusNote: "Your order are being processed by TechShop",
          products: [
            {
              productId: "1",
              categorySlug: "smart-phone",
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
              categorySlug: "smart-phone",
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
              categorySlug: "smart-phone",
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
          orderProgessDetail: {
            placedOrder: "11:29 01-10-2021",
          },
        };
      case "order2":
        return {
          orderId: "order2",
          orderStatusDetail: "Packaging and delivering to shipper",
          orderStatus: "In Handling",
          totalItems: 2,
          total: 12000000,
          orderStatusNote: "Your order was already being packaged up.",
          products: [
            {
              productId: "1",
              categorySlug: "smart-phone",
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
              categorySlug: "smart-phone",
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
          orderProgessDetail: {
            placedOrder: "11:29 01-10-2021",
            inHandling: "13:09 02-10-2021",
            shipped: "",
            deliveried: "",
          },
        };
      case "order3":
        return {
          orderId: "order3",
          orderStatusDetail: "On the way",
          orderStatus: "Shipped",
          totalItems: 2,
          total: 23000000,
          orderStatusNote:
            "Your package is going to be delivered on the scheduled delivery date",
          products: [
            {
              productId: "1",
              categorySlug: "smart-phone",
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
              categorySlug: "smart-phone",
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
          orderProgessDetail: {
            placedOrder: "11:29 05-10-2021",
            inHandling: "10:03 06-10-2021",
            shipped: "10:03 07-10-2021",
            deliveried: "",
          },
        };
      case "order4":
        return {
          orderId: "order4",
          orderStatusDetail: "Deliveried Successfully",
          orderStatus: "Shipped",
          totalItems: 3,
          total: 23000000,
          orderStatusNote:
            "Your package is deliveried successfully. Please confirm it.",
          products: [
            {
              productId: "1",
              categorySlug: "smart-phone",
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
              categorySlug: "smart-phone",
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
          orderProgessDetail: {
            placedOrder: "11:29 01-10-2021",
            inHandling: "11:29 04-10-2021",
            shipped: "10:03 06-10-2021",
            deliveried: "",
          },
        };
      case "order5":
        return {
          orderId: "order5",
          orderStatusDetail: "Received Package Successfuly",
          orderStatus: "Deliveried",
          totalItems: 5,
          total: 23000000,
          orderStatusNote: "Did you enjoy working with us? Leave a review!",
          products: [
            {
              productId: "1",
              categorySlug: "smart-phone",
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
              categorySlug: "smart-phone",
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
          orderProgessDetail: {
            placedOrder: "11:29 01-10-2021",
            inHandling: "11:29 01-10-2021",
            shipped: "10:03 06-10-2021",
            deliveried: "10:03 06-10-2021",
          },
        };
      case "order7":
        return {
          orderId: "order7",
          orderStatusDetail: "Return Package",
          orderStatus: "Cancelled",
          totalItems: 3,
          total: 23000000,
          orderStatusNote: "Your cancelled order: Oct 14, 2021",
          products: [
            {
              productId: "1",
              categorySlug: "smart-phone",
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
              categorySlug: "smart-phone",
              name: "Macbook Pro Retina 13-inch 512GB",
              image: "",
              color: "Space Gray",
              quantity: 1,
              oldPrice: "23.000.000đ",
              salePrice: "23.000.000đ",
              total: "23.000.000đ",
            },
          ],
          shippingInfo: {
            fullname: "Dinh Ngoc Uyen Phuong",
            address:
              "28/27/44 Phan Tây Hồ, Phường 7, Quận Phú Nhuận, TP. Hồ Chí Minh",
            phone: "0904588091",
          },
          orderProgessDetail: {
            placedOrder: "11:29 01-10-2021",
            inHandling: "11:29 01-10-2021",
            shipped: "10:03 06-10-2021",
            cancelled: "11:29 04-15-2021",
          },
        };
      case "order6":
        return {
          orderId: "order6",
          orderStatusDetail: "Cancelled",
          orderStatus: "Cancelled",
          totalItems: 3,
          total: 23000000,
          orderStatusNote: "Your cancelled order: Oct 14, 2021",
          products: [
            {
              productId: "1",
              categorySlug: "smart-phone",
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
              categorySlug: "smart-phone",
              name: "Macbook Pro Retina 13-inch 512GB",
              image: "",
              color: "Space Gray",
              quantity: 1,
              oldPrice: "23.000.000đ",
              salePrice: "23.000.000đ",
              total: "23.000.000đ",
            },
          ],
          shippingInfo: {
            fullname: "Dinh Ngoc Uyen Phuong",
            address:
              "28/27/44 Phan Tây Hồ, Phường 7, Quận Phú Nhuận, TP. Hồ Chí Minh",
            phone: "0904588091",
          },
          orderProgessDetail: {
            placedOrder: "11:29 01-10-2021",
            cancelled: "11:29 04-10-2021",
          },
        };
      case "order8":
        return {
          orderId: "order8",
          orderStatusDetail: "Reviewed",
          orderStatus: "Deliveried",
          totalItems: 5,
          total: 23000000,
          orderStatusNote: "",
          isReviewed: true,
          products: [
            {
              productId: "1",
              categorySlug: "smart-phone",
              name: "Macbook Pro Retina 13-inch 512GB",
              image: "",
              color: "Space Gray",
              quantity: 1,
              oldPrice: "23.000.000đ",
              salePrice: "23.000.000đ",
              total: "23.000.000đ",
              reviewInfo: {
                reviewContent: "Nice product!",
                rating: 4,
              },
            },
            {
              productId: "2",
              categorySlug: "smart-phone",
              name: "Macbook Pro Retina 13-inch 512GB",
              image: "",
              color: "Space Gray",
              quantity: 1,
              oldPrice: "23.000.000đ",
              salePrice: "23.000.000đ",
              total: "23.000.000đ",
              reviewInfo: {
                reviewContent: "Incredible color",
                rating: 4,
              },
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
          orderProgessDetail: {
            placedOrder: "11:29 01-10-2021",
            inHandling: "11:29 01-10-2021",
            shipped: "10:03 06-10-2021",
            deliveried: "10:03 06-10-2021",
          },
        };
      default:
        break;
    }

    // call api from BE
    // const url = `${UrlConstant.GET_DETAILED_ORDER}/${id}`;
    // return axiosClientAuthen.get(url);
  },
  cancelOrder: async (id, reasonCancelling) => {
    console.log(id, reasonCancelling);
    return Promise.resolve(1);
  },
  returnOrder: async (id) => {
    console.log(id);
    return Promise.resolve(1);
  },
  receivedOrder: async (id) => {
    console.log(id);
    return Promise.resolve(1);
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
  getOrdersSummary: async (invoiceStatus) => {
    switch (invoiceStatus) {
      case "placedOrder":
        return [
          {
            orderId: "order1",
            orderStatus: "Placed Order",
            orderStatusDetail: "Waiting to confirm by TechShop",
            totalItems: 3,
            total: 23000000,
            date: "01/01/2020",
          },
        ];
      case "handling":
        return [
          {
            orderId: "order2",
            orderStatusDetail: "Packaging and delivering to shipper",
            orderStatus: "In Handling",
            totalItems: 2,
            total: 12000000,
            date: "01/01/2020",
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
            date: "01/01/2020",
          },
          {
            orderId: "order4",
            orderStatusDetail: "Deliveried Successfully",
            orderStatus: "Shipped",
            totalItems: 2,
            total: 5000000,
            date: "01/01/2020",
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
            date: "01/01/2020",
          },
          {
            orderId: "order8",
            orderStatusDetail: "Reviewed",
            orderStatus: "Deliveried",
            totalItems: 3,
            total: 23000000,
            date: "01/01/2020",
            isReviewed: true,
          },
        ];
      case "cancelled":
        return [
          {
            orderId: "order6",
            orderStatusDetail: "Cancelled",
            orderStatus: "Cancelled",
            totalItems: 3,
            total: 23000000,
            date: "01/01/2020",
          },
          {
            orderId: "order7",
            orderStatusDetail: "Return package",
            orderStatus: "Cancelled",
            totalItems: 1,
            total: 1000000,
            date: "01/01/2020",
          },
        ];
      default:
        return [];
    }
  },
  transferToShipper: async (id, shipperInfo) => {
    console.log("call transfer");
    return Promise.resolve(1);
  },
  getShippingInfo: async (id) => {
    return {
      name: "Le Minh Huy",
      phone: "0936498844"
    }
  }
};
export default OrderApi;
