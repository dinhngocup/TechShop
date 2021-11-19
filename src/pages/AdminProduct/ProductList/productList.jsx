import React from "react";
import "./_productList.scss";
import ProductRow from "./ProductRow/productRow";

function ProductList(props) {
  const productSaleEvent = {
    saleProgram: {
      type: "Sale Event",
      value: "In Sale Event",
    },
  };
  const productSaleProduct = {
    saleProgram: {
      type: "Sale Product",
      value: "40%",
    },
  };
  const productNoSale = {};
  return (
    <table className="w-100">
      <thead>
        <tr className="p-3">
          <th className="">Photo</th>
          <th className="">Name</th>
          <th className="">Price</th>
          <th className="">Category</th>
          <th className="text-center">Sale Program</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow product={productSaleEvent} />
        <ProductRow product={productSaleProduct} />
        <ProductRow product={productNoSale} />
      </tbody>
    </table>
  );
}

ProductList.propTypes = {};

export default ProductList;
