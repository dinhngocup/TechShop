import React, { useState } from "react";
import { Button, Form } from "reactstrap";
import SaleModal from "../../components/AdminProduct/SaleModal/saleModal";
import ProductList from "./ProductList/productList";
import "./_main.scss";
import SearchBar from "./SearchBar/searchBar";
import FilterBar from "./FilterBar/filterBar";
import MainInfo from "./MainInfo/mainInfo";
import ProductSpecification from "./Specification/productSpecification";

function AdminProduct(props) {
  console.log("main");
  const [isProductList, setIsProductList] = useState(true);
  
  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };
  return (
    <div className="body-content">
      <div className="product-table" style={{ height: "4500px" }}>
        {isProductList ? (
          <>
            <SearchBar />
            <FilterBar />
          </>
        ) : (
          ""
        )}
        <div className="my-3 product-table-header">
          <h2 className="text-center">
            {isProductList ? "Products" : "New Product"}
          </h2>
          {isProductList ? (
            <Button onClick={() => setIsProductList(false)}>
              <b>Add new</b>
            </Button>
          ) : (
            <Button onClick={() => setIsProductList(true)}>
              <b>Back</b>
            </Button>
          )}
        </div>
        {isProductList ? (
          <ProductList />
        ) : (
          <>
            <Form onSubmit={handleSubmit}>
              <MainInfo />
              <ProductSpecification />
              <Button type="submit" className="w-100 btn-submit">
                Add
              </Button>
            </Form>
          </>
        )}
        <SaleModal />
      </div>
    </div>
  );
}

AdminProduct.propTypes = {};

export default AdminProduct;
