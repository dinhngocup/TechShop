import React from "react";
import "./_filter.scss";
//import PropTypes from 'prop-types';

const Filter = () => {
  return (
    <div className="product-heading filter">
      <div className="title">Sort By:</div>
      <select className="form-select" aria-label="Default select example">
        <option value="newest">Newest To Oldest</option>
        <option value="oldest">Oldest To Newest</option>
        <option value="asc">Price Low to High</option>
        <option value="desc">Price High to Low</option>
      </select>
      
    </div>
  );
};

// filter.propTypes = {

// };

export default Filter;
