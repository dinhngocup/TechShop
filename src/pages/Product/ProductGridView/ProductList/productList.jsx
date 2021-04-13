import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import ProductApi from "../../../../api/productApi";
import ProductCard from "./ProductCard/productCard";
import ProductModal from "./ProductModal/productModal";

function ProductList() {
  const [products, setProducts] = useState([]);
  const stateProductModal = useSelector((state) => state.productModal);

  const { filter } = useSelector((state) => state.filter);
  /**
   * Firstly, I use {slug} to get params => filter of useEffect is a string.
   * But if filter is a string, when click repeatedly in 1 category,
   * useEffect is not fired to get new data
   * => I HAVE TO use params as an object.
   */

  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    async function fetchProduct() {
      let response = [];
      if (params.slug === undefined) {
        let searchTerm = new URLSearchParams(location.search).get("keyword");
        if (searchTerm === null) {
          response = await ProductApi.getAllProducts({
            order: filter,
          });
        } else {
          response = await ProductApi.searchProducts(searchTerm);
        }
      } else {
        response = await ProductApi.getProductsByCategory({
          category: params.slug,
          order: filter,
        });
      }
      setProducts(response);
    }
    fetchProduct();
  }, [params, filter, location]);

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
