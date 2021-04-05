import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import ProductCard from "../ProductCard/productCard";
import ProductModal from "../ProductModal/productModal";
import { getListProduct } from "../productSlice";


function ProductList() {
  //console.log("list");
  const products = useSelector((state) => state.product.data);

  const stateProductModal = useSelector((state) => state.productModal);

  const {filter} = useSelector((state) => state.filter);
  /**
   * Firstly, I use {slug} to get params => filter of useEffect is a string.
   * But if filter is a string, when click repeatedly in 1 category,
   * useEffect is not fired to get new data
   * => I HAVE TO use params as an object.
   */

  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchProduct() {
      await dispatch(
        getListProduct({
          category: params.slug,
          order: filter,
        })
      );
      
    }
    fetchProduct();
  }, [params, dispatch, filter]);

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
