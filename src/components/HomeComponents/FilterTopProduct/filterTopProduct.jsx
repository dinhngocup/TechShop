import React from "react";
import PropTypes from "prop-types";

function FilterTopProduct(props) {
  const { changeTypeTopProduct } = props;
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-secondary active"
        name="top20"
        onClick={changeTypeTopProduct}
      >
        Top 20
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        name="keyboard"
        onClick={changeTypeTopProduct}
      >
        Keyboard
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        name="mouse"
        onClick={changeTypeTopProduct}
      >
        Mouse
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        name="monitor"
        onClick={changeTypeTopProduct}
      >
        Monitor
      </button>
    </div>
  );
}

FilterTopProduct.propTypes = {
  changeTypeTopProduct: PropTypes.func,
};

export default FilterTopProduct;
