import React from "react";
import ProductCard from "../ProductCard/productCard";
import { PropTypes } from "prop-types";
import { Row, Col } from "reactstrap";
import { nanoid } from 'nanoid';

function ProductList(props) {
  const { products } = props;
  return (
    <Row>
      {products.map((product) => (
        <Col key={nanoid()} xs="12" sm="6" md="4" lg="4">
          <ProductCard product={product}/>
        </Col>
      ))}
    </Row>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
