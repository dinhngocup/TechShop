import React from "react";
import "./_proTab.scss";

function ProTab(props) {
  
  const { tagName, changeTab, activeTab, tagContent } = props;
  return (
    <div
      className={`col-lg-3 col-md-3 col-sm-3 col-xs-6 pro-tab ${
        activeTab === tagName ? "active" : ""
      }`}
      onClick={() => {
        changeTab(tagName);
      }}
    >
      {tagContent}
    </div>
  );
}

ProTab.propTypes = {};

export default ProTab;
