import React from "react";
import PropTypes from "prop-types";
import "./_existedBrand.scss";
import { nanoid } from "nanoid";

function ExistedBrand(props) {
  const { brands } = props;
  const renderListBrand = (brands) => {
    let res = "";
    if (brands.length === 0) return res;
    res = brands.map((brand, index) => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return (
        <li key={nanoid()}>
          <i
            className="fas fa-square-full"
            style={{ color: `#${randomColor}` }}
          ></i>
          <span>{brand.name}</span>
          <span>{brand.quantityProduct}</span>
        </li>
      );
    });
    return res;
  };
  return (
    <div className="option-table">
      <div className="option-table-heading">BRANDS</div>
      <div className="option-table-content brand-table">
        <ul>{renderListBrand(brands)}</ul>
      </div>
    </div>
  );
}

ExistedBrand.propTypes = {
  brands: PropTypes.array.isRequired,
};

export default ExistedBrand;
