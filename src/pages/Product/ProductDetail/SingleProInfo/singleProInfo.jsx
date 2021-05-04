import React, { useState } from "react";
import image4 from "assets/images/pic7.jpeg";
import image1 from "assets/images/product1.jpeg";
import image2 from "assets/images/product2.jpeg";
import image3 from "assets/images/product3.jpeg";
import ProductInfo from "../ProductInfo/productInfo";
import "./_singleProInfo.scss";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import WishIcon from "components/common/WishIcon/wishIcon";

SingleProInfo.propTypes = {
  product: PropTypes.object,
};
SingleProInfo.defaultProps = {
  products: {},
};

function SingleProInfo(props) {
  const { product } = props;
  const images = [{ image1 }, { image2 }, { image3 }, { image4 }];
  const [activeImage, setActiveImage] = useState({ image1 });

  const displayImage = (src) => {
    setActiveImage(src);
  };
  const renderImages = (images) => {
    return images.length !== 0
      ? images.map((image, index) => (
          <Col
            key={index}
            xs="6"
            sm="6"
            md="3"
            lg="3"
            className="product-slider"
          >
            <div
              className="small-image"
              onClick={() => {
                displayImage(image);
              }}
            >
              <img
                src={Object.values(image)[0]}
                alt="apple-watch"
                className=""
              />
            </div>
          </Col>
        ))
      : "";
  };
  return (
    <div className="single-pro-info">
      <div className="row">
        <div className="col-lg-5">
          <div className="single-pro-slider">
            <img src={Object.values(activeImage)[0]} alt="apple-watch" />
            <WishIcon id={product.id} />
          </div>
        </div>
        <div className="col-lg-7 product-info">
          <ProductInfo product={product} />

          <Row>{renderImages(images)}</Row>
        </div>
      </div>
    </div>
  );
}

export default SingleProInfo;
