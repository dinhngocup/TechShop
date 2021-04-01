import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import ProductCard from "../ProductCard/productCard";
import ProductModal from "../ProductModal/productModal";

function ProductList() {
  const products = useSelector((state) => state.product.data);

  

  const stateProductModal = useSelector((state) => state.productModal);
  return (
    <React.Fragment>
      <Row>
        {products.length !== 0
          ? products.map((product, index) => (
              <Col key={index} xs="12" sm="6" md="4" lg="4">
                <ProductCard product={product} />
              </Col>
            ))
          : ""}
      </Row>
      <ProductModal product={stateProductModal.data} />
    </React.Fragment>
  );
}

export default ProductList;
