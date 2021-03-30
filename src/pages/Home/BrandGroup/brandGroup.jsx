import React from "react";
import image from "../../../assets/images/razer.png";
import "./_brandGroup.scss";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

function BrandGroup(props) {
  const { brands } = props;
  
  return (
    <Row>
      {brands.length !== 0
        ? brands.map((brand, index) => (
            <Col key={index} xs="4" sm="4" md="3" lg="3">
              <div className="brand-info">
                <div className="brand-img">
                  <img src={image} alt={brand.name} />
                </div>
                <div className="brand-img">
                  <img src={image} alt={brand.name} />
                </div>
              </div>
            </Col>
          ))
        : ""}
    </Row>
  );
}

BrandGroup.propTypes = {
  brands: PropTypes.array.isRequired,
};

export default BrandGroup;
