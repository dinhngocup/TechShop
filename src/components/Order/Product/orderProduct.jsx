import React from "react";
import PropTypes from "prop-types";

import Media from "react-bootstrap/Media";
import image1 from "../../../assets/images/headphone1.jpeg";
import "./_orderProduct.scss";

function OrderProduct(props) {
  return (
    <Media className="py-3 product-info">
      <img alt="Sample Image" className="mr-3" src={image1} />
      <Media.Body className="product-body">
        <h5>Macbook Pro Retina 13-inch 512GB</h5>
        <div className="sub-info">
          <small>Color: Space Gray</small>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            <small>x 1</small>
          </p>
          <div>
            <span className="old-price mx-2">
              <small>23.000.000đ</small>
            </span>
            <span className="price">
              <small className="font-weight-bold">23.000.000đ</small>
            </span>
          </div>
        </div>
      </Media.Body>
    </Media>
  );
}

OrderProduct.propTypes = {};

export default OrderProduct;
