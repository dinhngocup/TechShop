import * as UrlConstant from "../utilities/UrlConstant";
import axiosClient from "./axiosClient";

const ProductApi = {
  getAllProducts: async (params) => {
    const url = `${UrlConstant.GET_ALL_PRODUCTS}`;
    return axiosClient.get(url);
  },
  remove: (id) => {
    // const url = `${UrlConstant.REMOVE_PRODUCT}/${id}`;
    // return axiosClient.delete(url);
    return Promise.resolve();
  },
  getProductsByCategory: async (params) => {
    let { category } = params;
    const url = `${UrlConstant.GET_PRODUCTS_BY_CATEGORY}/category/${category}`;
    return axiosClient.get(url);
  },
  getTrendingProducts: async () => {
    const url = `${UrlConstant.GET_TRENDING_PRODUCTS}`;
    //console.log("call api get trending product");
    return axiosClient.get(url);
  },
  getTopPurchasedProducts: async (filterTopProduct) => {
    const url = `${UrlConstant.GET_TOP_PURCHASED_PRODUCTS}/${filterTopProduct}`;
    //console.log("call api get top purchased product");
    return axiosClient.get(url);
  },

  getDetailedProduct: async (id) => {
    const url = `${UrlConstant.GET_DETAILED_PRODUCT}/${id}`;
    return axiosClient.get(url);
  },
  getRelatedCategoryPro: async (id) => {
    const url = `${UrlConstant.GET_RELATED_CATEGORY_PRODUCT}/${id}`;
    return axiosClient.get(url);
  },
  getRelatedBrandPro: async (id) => {
    const url = `${UrlConstant.GET_RELATED_BRAND_PRODUCT}/${id}`;
    return axiosClient.get(url);
  },

  getSpecsPro: async (id) => {
    const url = `${UrlConstant.GET_SPECS_PRODUCT}/${id}`;
    return axiosClient.get(url);
  },
  getFullDescriptionPro: async (id) => {
    const url = `${UrlConstant.GET_FULL_DESCRIP_PRODUCT}/${id}`;
    return axiosClient.get(url);
  },
  searchProducts: async (info) => {
    const url = `${UrlConstant.SEARCH_PRODUCTS}?q=${info}`;
    return axiosClient.get(url);
  },
  searchProductsIncludeFilter: async (params) => {
    let { keyword, order } = params;
    const url = `${UrlConstant.SEARCH_PRODUCTS}?q=${keyword}&sortOrder=${order}`;
    return axiosClient.get(url);
  },
  getProposedProducts: async () => {
    const result = [
      {
        id: "1",
        img: "",
        name: "Apple Watch",
        images:
          "['images/headphone4.jpeg','images/headphone6.jpeg','images/headphone8.jpeg','images/headphone1.jpeg']",
        price: 10000000,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-12-01 00:00:00",
      },
      {
        id: "2",
        img: "",
        name: "IPhone X",
        images:
          "['images/headphone1.jpeg','images/headphone6.jpeg','images/headphone8.jpeg','images/headphone1.jpeg']",
        price: 10000000,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-12-02 00:00:00",
      },
      {
        id: "3",
        img: "",
        name: "IPhone XR",
        images:
          "['images/headphone2.jpeg','images/headphone6.jpeg','images/headphone8.jpeg','images/headphone1.jpeg']",
        price: 10000000,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-12-23 00:00:00",
      },
      {
        id: "4",
        img: "",
        name: "IPhone 12",
        images:
          "['images/headphone3.jpeg','images/headphone6.jpeg','images/headphone8.jpeg','images/headphone1.jpeg']",
        price: 10000000,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-12-01 00:00:00",
      },
      {
        id: "5",
        img: "",
        name: "Macbook Pro",
        images:
          "['images/headphone6.jpeg','images/headphone6.jpeg','images/headphone8.jpeg','images/headphone1.jpeg']",
        price: 10000000,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-12-10 00:00:00",
      },
      {
        id: "6",
        img: "",
        name: "Macbook Air",
        images:
          "['images/headphone7.jpeg','images/headphone6.jpeg','images/headphone8.jpeg','images/headphone1.jpeg']",
        price: 10000000,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-12-05 00:00:00",
      },
      {
        id: "7",
        img: "",
        name: "Airpod 2",
        images:
          "['images/headphone8.jpeg','images/headphone6.jpeg','images/headphone8.jpeg','images/headphone1.jpeg']",
        price: 10000000,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, tempore veniam ullam hic architecto maiores! Laborum accusamus reiciendis magni consectetur incidunt, suscipit, unde qui assumenda ratione voluptas, esse fugiat ipsam.",
        EXP: "2021-12-10 00:00:00",
      },
    ];
    return result;
  },

  getProductSpecificationAttribute: async (params) => {
    const url = `${UrlConstant.GET_EXISTED_SPECIFICATION}/${params.category}/${params.brand}`;
    return axiosClient.get(url);
  },
  updateProductInfo: async (product) => {
  //   {
  //     "existedSpecifications": [
  //         {
  //             "id": "10VAR_CHAR",
  //             "value": "Black"
  //         },
  //         {
  //             "id": "7FLOAT",
  //             "value": "4"
  //         },
  //         {
  //             "id": "8FLOAT",
  //             "value": "12.6"
  //         },
  //         {
  //             "id": "4TEXT",
  //             "value": "hii"
  //         }
  //     ],
  //     "id": "6",
  //     "newSpecifications": [
  //         {
  //             "name": "ColorNew",
  //             "dataType": "VAR",
  //             "value": "hii"
  //         },
  //         {
  //             "name": "Color",
  //             "dataType": "BOOL",
  //             "value": "Yes"
  //         }
  //     ],
  //     "price": "1200000",
  //     "shortDescription": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, \r\naspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam",
  //     "stock": "50",
  //     "warranty": "2"
  // }
    return Promise.reject();
  },
  addProduct: async (product) => {
    //   {
    //     "brand": "e572dcea-479d-4d8a-bb40-ea638e43e756",
    //     "category": "4741b10d-a1de-4c9c-acaf-040185f58e85",
    //     "existedSpecifications": [
    //         {
    //             "id": "1",
    //             "value": "444"
    //         },
    //         {
    //             "id": "91",
    //             "value": "22"
    //         },
    //         {
    //             "id": "92",
    //             "value": "22"
    //         },
    //         {
    //             "id": "93",
    //             "value": "0"
    //         },
    //         {
    //             "id": "94",
    //             "value": "2"
    //         },
    //         {
    //             "id": "95",
    //             "value": "2"
    //         }
    //     ],
    //     "name": "productName",
    //     "newSpecifications": [
    //         {
    //             "name": "weightt",
    //             "dataType": "VAR",
    //             "value": "hii"
    //         }
    //     ],
    //     "price": "23",
    //     "shortDescription": "hi",
    //     "stock": "243",
    //     "warranty": "23"
    // }
    return Promise.resolve();
  },
};
export default ProductApi;
