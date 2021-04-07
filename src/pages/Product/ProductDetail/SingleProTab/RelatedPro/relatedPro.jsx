import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import HeaderSection from "../../../../../components/HeaderSection/headerSection";
import ProductModal from "../../../ProductModal/productModal";
import RelatedCategoryPro from "./RelatedCategoryPro/relatedCategoryPro";
import "./_relatedProduct.scss";


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
      <div className="related-products">
        <HeaderSection content="Related Products" />
        <RelatedCategoryPro {...categoryData} />
        <HeaderSection content="Same Brand Products" />
        <RelatedCategoryPro {...brandData} />
      </div>
      <ProductModal product={stateProductModal.data}/>
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
