import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useRouteMatch } from "react-router-dom";
import "./_categories.scss";

function Categories() {
  const { url } = useRouteMatch();
  const stateCategories = useSelector((state) => state.category);

  return (
    <div className="option-table">
      <div className="option-table-heading">CATEGORIES</div>
      <div className="option-table-content category-table">
        <ul>
          {stateCategories.data.length !== 0
            ? stateCategories.data.map((category, index) => (
                <NavLink
                  activeClassName="active"
                  to={`${url}/${category.slug}`}
                  key={index}
                >
                  <li>{category.name}</li>
                </NavLink>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
}
export default Categories;
