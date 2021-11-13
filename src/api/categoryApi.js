// import * as UrlConstant from "../utilities/UrlConstant";
// import axiosClient from "./axiosClient";
const CategoryApi = {
  getAll: async () => {
    // const url = `${UrlConstant.GET_ALL_CATEGORIES}`;
    // console.log('call api get category')
    // return axiosClient.get(url);
    return [
      {
        id: 1,
        name: "Smart Watch",
        slug: "smart-watch",
        exact: false,
      },
      {
        id: 2,
        name: "PC Accessories",
        slug: "pc-accessories",
        exact: false,
      },
      {
        id: 3,
        name: "Audio System",
        slug: "audio-system",
        exact: false,
      },
      {
        id: 4,
        name: "HeadPhone",
        slug: "headphone",
        exact: false,
      },
      {
        id: 5,
        name: "Mouse",
        slug: "mouse",
        exact: false,
      },
      {
        id: 6,
        name: "Gaming Desk/Chair",
        slug: "gaming-desk-chair",
        exact: false,
      },
      {
        id: 7,
        name: "Laptop",
        slug: "laptop",
        exact: false,
      },
      {
        id: 8,
        name: "Monitor",
        slug: "monitor",
        exact: false,
      },
      {
        id: 9,
        name: "Keyboard",
        slug: "keyboard",
        exact: false,
      },
      {
        id: 10,
        name: "Smart Phone",
        slug: "smart-phone",
        exact: false,
      },
      {
        id: 11,
        name: "All",
        slug: "",
        exact: true,
      },
    ];
  },
};
export default CategoryApi;
