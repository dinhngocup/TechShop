import React from "react";
import PropTypes from "prop-types";
import image from "../../../../assets/images/city_7.jpg";
import BtnAdd from '../../Button/btnAdd'
import BtnMore from '../../Button/btnMore'
import "./_topProduct.scss";

function TopProduct(props) {
  const { product } = props;
  return (
    <div className="d-flex justify-content-center top-product">
      <div className="product-info">
        <img src={image} alt={product.name} />
        <div className="button">
          <BtnMore />
          <BtnAdd id={product.id}/>
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
