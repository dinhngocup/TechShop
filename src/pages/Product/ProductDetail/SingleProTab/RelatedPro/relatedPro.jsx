import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import HeaderSection from "../../../../../components/HeaderSection/headerSection";
import ProductModal from "../../../ProductGridView/ProductList/ProductModal/productModal";
import RelatedCategoryPro from "./RelatedCategoryPro/relatedCategoryPro";


function RelatedPro(props) {
  //console.log("related");
  const { category, brand } = props;

  const stateProductModal = useSelector((state) => state.productModal);

  const categoryData = {
    type: "category",
    content: category,
  };
  const brandData = {
    type: "brand",
    content: brand,
  };
  return (
    <React.Fragment>
      <HeaderSection content="Related Products" />
      <RelatedCategoryPro {...categoryData} />
      <HeaderSection content="Same Brand Products" />
      <RelatedCategoryPro {...brandData} />

      <ProductModal product={stateProductModal.data} />
    </React.Fragment>
  );
}

RelatedPro.propTypes = {
  category: PropTypes.string,
  brand: PropTypes.string,
};
RelatedPro.defaultProps = {
  category: "",
  brand: "",
};

export default RelatedPro;
