import React from "react";
import Categories from "../Categories/categories";
import ExistedBrand from "../ExistedBrand/existedBrand";
import Filter from "../Filter/filter";
import Heading from "../Heading/heading";
import ProductList from "../ProductList/productList";
import "./_productGridView.scss";


function ProductGridView() {
  
  return (
    <React.Fragment>
      <div className="col-lg-3 col-md-12 pl-0">
        <Filter />
        <Categories />
        <ExistedBrand />
      </div>
      <div className="col-lg-9 col-md-12 pr-0">
        <Heading />
        <ProductList />
      </div>
    </React.Fragment>
  );
}

export default ProductGridView;
