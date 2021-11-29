import React from "react";
import "./_brandCategoryHeader.scss";

function BrandCategoryHeader(props) {
  const { active, prevActive, name, size, updateActiveTab } = props;

  return (
    <div
      className={`brand-category-header-container ${active ? "active" : ""} ${
        prevActive ? "prev-active" : ""
      }`}
      onClick={updateActiveTab}
    >
      <div className="header p-3">
        <i className="fas fa-tags mr-2"></i>
        {name} <span>{size}</span>
      </div>
    </div>
  );
}

BrandCategoryHeader.propTypes = {};

export default BrandCategoryHeader;
