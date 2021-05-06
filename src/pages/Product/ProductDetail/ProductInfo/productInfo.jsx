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

const renderTechInfo = (shortTech) => {
  if(shortTech !== undefined){
    var shortTechInfo = shortTech.replace(/'/g, '"');
    shortTechInfo = JSON.parse(shortTechInfo);
    return shortTechInfo.map((info, index) => <p key={index}>{info}</p>);
  }
  else 
    return "";
};
const handlePrice = (productPrice) => {
  if(productPrice !== undefined){
    var price = "";
    while(productPrice > 1000){
      productPrice = productPrice / 1000;
      price = price.concat(".000");
    }
    return productPrice.toString().concat(price);
  }
  return "";
}

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
        <div className="product-price">{handlePrice(product.productPrice)} <u>đ</u></div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-lg-7 short-tech-info">
          {renderTechInfo(product.shortTech)}
        </div>
        <div className="col-lg-5">
          <ProductAction stock={product.stock} stockStatus={product.stockStatus} id={product.productID} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(ProductInfo);
