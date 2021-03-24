import React from "react";
import PropTypes from "prop-types";

import "./_topProductGroup.scss";
import TopProduct from "./TopProduct/topProduct";

function TopProductGroup(props) {
  const { group, productPerGroup } = props;
  
  const showTopProduct = (products) => {
    let result = "";
    if (products.length === 0) return result;
    
    result = products.map((product, index) => {
      return (
        <div className={`col-sm-${12 / productPerGroup}`} key={index}>
          <TopProduct product={product}/>
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
