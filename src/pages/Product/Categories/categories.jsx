import React from "react";
import PropTypes from "prop-types";
import "./_categories.scss";
import { nanoid } from 'nanoid';


function Categories(props) {
  const { categories } = props;
  return (
    <div className="option-table">
      <div className="option-table-heading">CATEGORIES</div>
      <div className="option-table-content category-table ">
        <ul>
          {categories.map((category, index) => (
            <li className={index === 0 ? "active" : ""} key={nanoid()}>{category.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};
export default Categories;
