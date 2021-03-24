import React from "react";
import image from "../../../assets/images/razer.png";
import "./_brandGroup.scss";
import PropTypes from "prop-types";

function BrandGroup(props) {
  const { brands } = props;
  const showBrandGroup = (brands) => {
    let res = "";
    if (brands.length === 0) return res;

    res = brands.map((brand, index) => {
      return (
        <div className="col" key={index}>
          <div className="brand-info">
            <div className="brand-img">
              <img src={image} alt={brand.name} />
            </div>
            <div className="brand-img">
              <img src={image} alt={brand.name} />
            </div>
          </div>
        </div>
      );
    });
    return res;
  };
  return <React.Fragment>{showBrandGroup(brands)}</React.Fragment>;
}

BrandGroup.propTypes = {
  brands: PropTypes.array.isRequired,
};

export default BrandGroup;
