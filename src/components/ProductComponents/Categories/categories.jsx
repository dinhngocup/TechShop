import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./_categories.scss";

function Categories() {
  // console.log('product item')
  const stateCategories = useSelector((state) => state.category);
  const renderCategoryTable = (categories) => {
    return categories.length !== 0
      ? categories.map((category, index) => (
          <NavLink
            activeClassName="active"
            to={`/products/${category.slug}`}
            key={category.id}
            exact={category.exact}
          >
            <li>{category.name}</li>
          </NavLink>
        ))
      : "";
  };
  return (
    <div className="option-table">
      <div className="option-table-heading">CATEGORIES</div>
      <div className="option-table-content category-table">
        <ul>{renderCategoryTable(stateCategories.data)}</ul>
      </div>
    </div>
  );
}
export default Categories;
