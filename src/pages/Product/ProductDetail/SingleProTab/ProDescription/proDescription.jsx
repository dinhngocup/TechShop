import React, { useState, useEffect } from "react";
import "./_proDescription.scss";
import image from "assets/images/footer.jpeg";
import image1 from "assets/images/white.png";
import ProductApi from "api/productApi";

const ProDescription = (props) => {
  const { id } = props;

  const [descrips, setDescrips] = useState([]);
  useEffect(() => {
    const fetchDescrip = async (id) => {
      let response = await ProductApi.getFullDescriptionPro(id);

      // TODO: fix API to get ONLY full description
      // below API gets the whole product info
      setDescrips(response.description);
    };
    if (id !== undefined) fetchDescrip(id);
  }, [id]);

  const renderDescrips = (descrips) => {
    return descrips.length !== 0
      ? descrips.map((item, index) => (
          <React.Fragment key={index}>
            <h4>{item.header}</h4>
            <p>{item.content}</p>
          </React.Fragment>
        ))
      : "";
  };

  return (
    <div className="row pro-descrip">
      <div className="col-lg-7 pro-descrip-pic">
        <img src={image} alt="apple-watch" />
        <img src={image1} alt="apple-watch" className="white-line" />
      </div>
      <div className="col-lg-5"></div>
      <div className="pro-descrip-content">
        {renderDescrips(descrips)}
      </div>
    </div>
  );
};

export default ProDescription;
