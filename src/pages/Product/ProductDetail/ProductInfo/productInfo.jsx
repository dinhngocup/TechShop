import React from "react";
import PropTypes from "prop-types";
import ProductAction from "../ProductAction/productAction";
import ProductRating from "../../ProductRating/productRating";
import './_productInfo.scss'

ProductInfo.propTypes = {
  product: PropTypes.object,
};
ProductInfo.defaultProps = {
  products: {},
};

function ProductInfo(props) {
  const { product } = props;
  //console.log("info");
  return (
    <React.Fragment>
      <div className="title">
        <div className="product-name">{product.name}</div>
        <div className="product-rating">
          <ProductRating rate={product.rate} />
        </div>
      </div>
      <div className="title">
        <div className="product-price">{product.price}đ</div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-lg-7 short-tech-info">
          {product.shortTechInfo !== undefined
            ? product.shortTechInfo.map((info, index) => (
                <p key={index}>{info}</p>
              ))
            : ""}
        </div>
        <div className="col-lg-5">
          <ProductAction status={product.status} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(ProductInfo);
