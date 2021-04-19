import React from "react";
import PropTypes from "prop-types";
import image from "assets/images/city_7.jpg";
import BtnAdd from "components/common/Button/btnAdd";
import BtnMore from "components/common/Button/btnMore";
import "./_topProduct.scss";

function TopProduct(props) {
  const { product } = props;
  let productData = {
    id: product.id,
    name: product.name,
    price: product.price,
  };
  return (
    <div className="d-flex justify-content-center top-product">
      <div className="product-info">
        <img src={image} alt={product.name} />
        <div className="button">
          <BtnMore />
          <BtnAdd product={productData} />
        </div>
      </div>
      <div className="mt-2 product-name">
        <div className="name">{product.name}</div>
        <div className="price">{product.price}</div>
      </div>
    </div>
  );
}

TopProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default TopProduct;
