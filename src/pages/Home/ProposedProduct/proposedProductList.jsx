import React from "react";
import PropTypes from "prop-types";
import ProposedProduct from './proposedProduct'
import { nanoid } from "nanoid";

function ProposedProductList(props) {
  const { products } = props;
  return (
    <div
      id="hot-proposes"
      className="carousel slide"
      data-ride="carousel"
      data-interval="false"
    >
      <div className="carousel-inner">
        {products.length !== 0
          ? products.map((product, index) => {
              return (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={nanoid()}
                >
                  <ProposedProduct product={product} />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

ProposedProductList.propTypes = {
  products: PropTypes.array,
};
ProposedProductList.defaultProps = {
  products: [],
};

export default ProposedProductList;
