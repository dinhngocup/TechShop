import React, { useState, useEffect } from "react";
import "./_proDescription.scss";
import image from "assets/images/footer.jpeg";
import image1 from "assets/images/white.png";
import ProductApi from "api/productApi";

const ProDescription = (props) => {
  const { longDescrip } = props;

  const renderDescrips = (descrips) => {
    if(descrips !== undefined){
      var description = descrips.replace(/'/g, '"');
      description = JSON.parse(description);
      return description.map((item, index) => (
          <React.Fragment key={index}>
            <h4>{item.header}</h4>
            <p>{item.content}</p>
          </React.Fragment>
        ));
    }
    return "";
  };

  return (
    <div className="row pro-descrip">
      <div className="col-lg-7 pro-descrip-pic">
        <img src={image} alt="apple-watch" />
        <img src={image1} alt="apple-watch" className="white-line" />
      </div>
      <div className="col-lg-5"></div>
      <div className="pro-descrip-content">
        {renderDescrips(longDescrip)}
      </div>
    </div>
  );
};

export default ProDescription;
