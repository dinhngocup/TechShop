import React from "react";
import { Button } from "reactstrap";
import SaleModal from "../../../components/AdminProduct/SaleModal/saleModal";
import ProductRow from "./ProductRow/productRow";
import "./_productTable.scss";

function ProductTable(props) {
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
    <div className="product-table">
      <div className="my-3 product-table-header">
        <h3 className="text-center">Products</h3>
        <Button className="btn-add">
          <b>Add new</b>
        </Button>
      </div>
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
      <SaleModal />
    </div>
  );
}

ProductTable.propTypes = {};

export default ProductTable;
