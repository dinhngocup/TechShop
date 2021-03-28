import React, { useEffect, useState } from "react";
import Categories from "./Categories/categories";
import ExistedBrand from "./ExistedBrand/existedBrand";
import "./_product.scss";

function Product() {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

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

  return (
    <div className="wrapper-dashboard product-area">
      <div className="product-grid-view">
        {/* Heading */}
        <div className="heading">
          <div className="breadcrumb-nav">
            <ul>
              <li>HOME</li>
              <li>PRODUCTS</li>
            </ul>
          </div>
          <div className="showing">Showing 01-09 of 17 Results</div>
        </div>

        {/* product content */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 pl-0">
              <Categories categories={categories} />
              <ExistedBrand brands={brands} />
            </div>
            <div className="col-md-9">product</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Product);
