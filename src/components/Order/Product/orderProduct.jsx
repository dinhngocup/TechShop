import React from "react";

import Media from "react-bootstrap/Media";
import image1 from "../../../assets/images/headphone1.jpeg";
import "./_orderProduct.scss";
import handlePrice from "../../../helpers/formatPrice";

function OrderProduct(props) {
  const { product } = props;
  return (
    <Media className="py-3 product-info">
      <img alt="" className="mr-3" src={image1} />
      <Media.Body className="product-body">
        <h5>{product.name}</h5>
        <div className="sub-info">
          <small>Color: {product.color}</small>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            <small>x {product.quantity}</small>
          </p>
          <div>
            {product.oldPrice && (
              <span className="old-price mx-2">
                <small>
                  {handlePrice(product.oldPrice)} <u>đ</u>
                </small>
              </span>
            )}

            <span className="price">
              <small className="font-weight-bold">
                {handlePrice(product.salePrice)} <u>đ</u>
              </small>
            </span>
          </div>
        </div>
      </Media.Body>
    </Media>
  );
}

export default OrderProduct;
