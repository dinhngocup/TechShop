import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import ProductApi from "api/productApi";
import ProductCard from "pages/Product/common/ProductCard/productCard";

function RelatedCategoryPro(props) {
  const { type, content } = props;
  
  let [productList, setProductList] = useState([]);
  useEffect(() => {
    switch (type) {
      case "category": {
        let fetchProduct = async (content) => {
          let response = await ProductApi.getRelatedCategoryPro(content);

          setProductList(response);
        };
        fetchProduct(content);
        break;
      }
      case "brand": {
        let fetchProduct = async (content) => {
          let response = await ProductApi.getRelatedBrandPro(content);
          setProductList(response);
        };
        fetchProduct(content);
        break;
      }
      default:
        break;
    }
  }, [type, content]);

  const renderProductList = (products) => {
    return (
      <Row>
        {products.length !== 0
          ? products.map((product, index) => {
              if (index >= 4) return "";
              return (
                <Col key={index} xs="6" sm="6" md="3" lg="3">
                  <ProductCard product={product} />
                </Col>
              );
            })
          : ""}
      </Row>
    );
  };
  return <React.Fragment>{renderProductList(productList)}</React.Fragment>;
}



export default React.memo(RelatedCategoryPro);
