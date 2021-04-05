import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import TrendingProduct from "./trendingProduct";
import ProductApi from "../../../api/productApi";

function TrendingProductList() {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      let response = await ProductApi.getTrendingProducts();
      setTrendingProducts(response)
    };
    fetchTrendingProducts();
  }, []);

  return (
    <Row>
      {trendingProducts.length !== 0
        ? trendingProducts.map((product, index) => (
            <Col key={index} xs="6" sm="6" md="3" lg="3" className="mb-3">
              <TrendingProduct product={product} />
            </Col>
          ))
        : ""}
    </Row>
  );
}

export default TrendingProductList;
