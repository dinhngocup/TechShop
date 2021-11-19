import * as UrlConstant from "../utilities/UrlConstant";
import axiosClient from "./axiosClient";

const ProductApi = {
  getAllProducts: async (params) => {
    const url = `${UrlConstant.GET_ALL_PRODUCTS}`;
    return axiosClient.get(url);
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

  getProductSpecificationAttribute: async (categoryId, brandId) => {
    return [
      {
        id: "1",
        name: "color",
        dataType: "VAR_CHAR",
      },
      {
        id: "2",
        name: "weight",
        dataType: "FLOAT",
      },
      {
        id: "3",
        name: "description",
        dataType: "TEXT",
      },
      {
        id: "4",
        name: "touch bar",
        dataType: "BOOL",
      },
      {
        id: "5",
        name: "battery",
        dataType: "INT",
      },
    ];
  },
};
export default ProductApi;
