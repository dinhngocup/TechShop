import React, { useState, useEffect } from "react";
import HeaderSection from "components/common/HeaderSection/headerSection";
import "./_techDescrip.scss";
import ProductApi from "api/productApi";
function TechDescrip(props) {
  const { specs } = props;
  //const [generalInfo, setGeneralInfo] = useState([]);
  const [specsInfo, setSpecsInfo] = useState([]);

  // const renderGeneralInfo = (generalInfo) => {
  //   return generalInfo.length !== 0
  //     ? generalInfo.map((item, index) => (
  //         <div className="d-flex gen-info" key={index}>
  //           <div className="tag">{item.tag}:</div>
  //           <div>{item.content}</div>
  //         </div>
  //       ))
  //     : "";
  // };

  const renderSpecsInfo = (specsInfo) => {
    if(specsInfo != undefined){
      var specifications = specsInfo.replace(/'/g, '"');
      specifications = JSON.parse(specifications);
      return specifications.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div className="row specs" key={index}>
                <div className="col-4 specs-tag">{item.tag}</div>
                <div className="col-8 specs-content">{item.content}</div>
              </div>
            );
          } else {
            return (
              <div className="row specs specs-deco" key={index}>
                <div className="col-4 specs-tag">{item.tag}</div>
                <div className="col-8 specs-content">{item.content}</div>
              </div>
            );
          }
        });
    }
    return "";
  };

  return (
    <div className="row">
      {/* <div className="col-lg-5">
        <HeaderSection content="General Information" />
        {renderGeneralInfo(generalInfo)}
      </div> */}
      <div className="col-lg-12">
        <HeaderSection content="Product Specification" />
        {renderSpecsInfo(specs)}
      </div>
    </div>
  );
}

TechDescrip.propTypes = {};

export default TechDescrip;
