import { PropTypes } from "prop-types";
import React, { useState, useEffect } from "react";
import ProDescription from "./ProDescription/proDescription";
import ProReview from "./ProReview/proReview";
import ProTab from "./ProTab/proTab";
import RelatedPro from "./RelatedPro/relatedPro";
import TechDescrip from "./TechDescrip/techDescrip";
import "./_singleProTab.scss";

function SingleProTab(props) {
  const { product } = props;
  const [tabContent, setTabContent] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  const changeTab = (tagName) => {
    setActiveTab(tagName);
  };

  useEffect(() => {
    switch (activeTab) {
      case "description":
        setTabContent(<ProDescription id={product.id} />);
        break;
      case "review":
        setTabContent(<ProReview id={product.id} />);
        break;
      case "related":
        const data = { category: product.category, brand: product.brand };
        setTabContent(<RelatedPro {...data} />);
        break;
      case "specs":
        setTabContent(<TechDescrip id={product.id} />);
        break;
      default:
        setTabContent(<ProDescription id={product.id} />);
        break;
    }
  }, [activeTab, product]);

  return (
    <div className="single-pro-tab mt-4 container-fluid">
      <div className="row">
        <ProTab
          tagName="specs"
          changeTab={changeTab}
          activeTab={activeTab}
          tagContent="Specs"
        />

        <ProTab
          tagName="description"
          changeTab={changeTab}
          activeTab={activeTab}
          tagContent="Description"
        />

        <ProTab
          tagName="related"
          changeTab={changeTab}
          activeTab={activeTab}
          tagContent="Related Products"
        />

        <ProTab
          tagName="review"
          changeTab={changeTab}
          activeTab={activeTab}
          tagContent="Review"
        />
      </div>

      <div className="row">
        <div className="tab-content">
          {tabContent === null ? (
            <ProDescription id={product.id} />
          ) : (
            tabContent
          )}
        </div>
      </div>
    </div>
  );
}

SingleProTab.propTypes = {
  product: PropTypes.object,
};
SingleProTab.defaultProps = {
  product: {},
};

export default SingleProTab;