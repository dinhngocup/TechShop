import { PropTypes } from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import ProductCard from "../ProductCard/productCard";
import ProductModal from '../ProductModal/productModal';

function ProductList(props) {
  const { products } = props;

  const stateProductModal = useSelector((state) => state.productModal);
  return (
    <React.Fragment>
      <Row>
        {products.map((product, index) => (
          <Col key={index} xs="12" sm="6" md="4" lg="4">
            <ProductCard product={product}/>
          </Col>
        ))}
      </Row>
      <ProductModal product={stateProductModal.data} />
    </React.Fragment>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
