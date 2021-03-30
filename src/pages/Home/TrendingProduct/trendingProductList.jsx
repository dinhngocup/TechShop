import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import TrendingProduct from "./trendingProduct";

function TrendingProductList(props) {
  const { products } = props;
  return (
    <Row>
      {products.length !== 0
        ? products.map((product, index) => (
            <Col key={index} xs="6" sm="6" md="3" lg="3" className="mb-3">
              <TrendingProduct product={product} />
            </Col>
          ))
        : ""}
    </Row>
  );
}

TrendingProductList.propTypes = {
  products: PropTypes.array,
};
TrendingProductList.defaultProps = {
  products: [],
};
export default TrendingProductList;
