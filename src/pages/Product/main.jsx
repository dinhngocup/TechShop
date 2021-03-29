import React, { useEffect, useState } from "react";
import Categories from "./Categories/categories";
import ExistedBrand from "./ExistedBrand/existedBrand";
import Filter from "./Filter/filter";
import Heading from "./Heading/heading";
import ProductList from "./ProductList/productList";
import "./_product.scss";

function Product() {
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  // get brands
  useEffect(() => {
    let brandList = [
      {
        quantityProduct: 11,
        name: "Asus",
      },
      {
        quantityProduct: 10,
        name: "Apple",
      },
      {
        quantityProduct: 15,
        name: "HP",
      },
      {
        quantityProduct: 19,
        name: "Razer",
      },
      {
        quantityProduct: 19,
        name: "Dell",
      },
      {
        quantityProduct: 20,
        name: "Asus",
      },
      {
        quantityProduct: 10,
        name: "Apple",
      },
    ];
    setBrands(brandList);
  }, []);

  // get categories
  useEffect(() => {
    let categoryList = [
      {
        name: "Smart Watch",
      },
      {
        name: "PC Accessories",
      },
      {
        name: "Audio System",
      },
      {
        name: "HeadPhone",
      },
      {
        name: "Mouse",
      },
      {
        name: "Gaming Desk/Chair",
      },
      {
        name: "Laptop",
      },
      {
        name: "Monitor",
      },
      
    ];
    setCategories(categoryList);
  }, []);

  // get products
  useEffect(() => {
    let products = [
      {
        img: "",
        rate: 2.7,
        name: "Apple Watch",
        price: "10.000.000đ",
        shortDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam."
      },
      {
        img: "",
        rate: 3.1,
        name: "IPhone X",
        price: "10.000.000đ",
        shortDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam."
      },

      {
        img: "",
        rate: 3.4,
        name: "IPhone XR",
        price: "10.000.000đ",
        shortDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam."
      },
      {
        img: "",
        rate: 3.8,
        name: "IPhone 12",
        price: "10.000.000đ",
        shortDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam."
      },
      {
        img: "",
        rate: 4,
        name: "Macbook Pro",
        price: "10.000.000đ",
        shortDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam."
      },
      {
        img: "",
        rate: 4.1,
        name: "Macbook Air",
        price: "10.000.000đ",
        shortDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam."
      },
      {
        img: "",
        rate: 4.6,
        name: "Airpod 2",
        price: "10.000.000đ",
        shortDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam."
      },
      {
        img: "",
        rate: 4.8,
        name: "Airpod pro",
        price: "10.000.000đ",
        shortDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam."
      },
    ];
    setProducts(products);
  }, []);

  return (
    <div className="wrapper-dashboard product-area">
      <div className="product-banner">
        <div className="breadcrumb-nav container">
            <ul>
              <li>HOME</li>
              <li>PRODUCTS</li>
            </ul>
          </div>
      </div>
      <div className="product-grid-view">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 pl-0">
              <Filter />
              <Categories categories={categories} />
              <ExistedBrand brands={brands} />
            </div>
            <div className="col-md-9 pr-0">
              <Heading />
              <ProductList products={products}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Product);
