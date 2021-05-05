import React from "react";
import PropTypes from "prop-types";
import ProductAction from "components/ProductComponents/ProductAction/productAction";
import ProductRating from "components/common/ProductRating/productRating";
import "./_productInfo.scss";

ProductInfo.propTypes = {
  product: PropTypes.object,
};
ProductInfo.defaultProps = {
  products: {},
};

const renderTechInfo = (productInfo) => {
  return productInfo !== undefined
    ? productInfo.map((info, index) => <p key={index}>{info}</p>)
    : "";
};

function ProductInfo(props) {
  const { product } = props;
  //console.log("info");
  return (
    <React.Fragment>
      <div className="title">
        <div className="product-name">{product.productName}</div>
        <div className="product-rating">
          <ProductRating rate={product.productRate} />
        </div>
      </div>
      <div className="title">
        <div className="product-price">{product.productPrice}đ</div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-lg-7 short-tech-info">
          {renderTechInfo(product.shortTechInfo)}
        </div>
        <div className="col-lg-5">
          <ProductAction status={product.status} id={product.productID} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(ProductInfo);
