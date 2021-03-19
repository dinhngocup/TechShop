import React from "react";
import PropTypes from "prop-types";

import "./_topProductGroup.scss";
import image from "../../../assets/images/city_7.jpg";

function TopProductGroup(props) {
  const { group, productPerGroup } = props;
  
  const showTopProduct = (products) => {
    let result = "";
    if (products.length === 0) return result;
    
    result = products.map((product, index) => {
      return (
        <div className={`col-sm-${12 / productPerGroup}`} key={index}>
          <div className="d-flex justify-content-center top-product">
            <img src={image} alt={product.name} />
            <div className="mt-2">
              <div className="name">{product.name}</div>
              <div className="price">{product.price}</div>
            </div>
          </div>
        </div>
      );
    });
    return result;
  };
  return <div className="top-group row">{showTopProduct(group)}</div>;
}

TopProductGroup.propTypes = {
  group: PropTypes.array.isRequired,
  productPerGroup: PropTypes.number,
};

export default React.memo(TopProductGroup);
