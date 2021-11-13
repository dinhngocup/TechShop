import React from "react";
import FilterBar from "./FilterBar/filterBar";
import ProductTable from "./ProductTable/productTable";
import SearchBar from "./SearchBar/searchBar";

function AdminProduct(props) {
  return (
    <div className="body-content">
      <SearchBar />
      <FilterBar />
      <ProductTable/>
    </div>
  );
}

AdminProduct.propTypes = {};

export default AdminProduct;
