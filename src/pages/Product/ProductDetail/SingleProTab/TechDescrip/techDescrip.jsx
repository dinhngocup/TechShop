import React, { useState, useEffect } from "react";
import HeaderSection from "../../../../../components/HeaderSection/headerSection";
import "./_techDescrip.scss";
import ProductApi from "../../../../../api/productApi";
function TechDescrip(props) {
  const { id } = props;
  const [generalInfo, setGeneralInfo] = useState([]);
  const [specsInfo, setSpecsInfo] = useState([]);
  useEffect(() => {
    const fetchSpecs = async (id) => {
      let response = await ProductApi.getSpecsPro(id);

      // TODO: fix API to get ONLY specs
      // below API gets the whole product info
      setGeneralInfo(response.specs.general);
      setSpecsInfo(response.specs.productSpecs);
    };
    fetchSpecs(id);
  }, [id]);

  return (
    <div className="row">
      <div className="col-lg-5">
        <HeaderSection content="General Information" />
        {/* <div className="d-flex gen-info">
          <div className="tag">Brand:</div>
          <div>Asus</div>
        </div>
        <div className="d-flex gen-info">
          <div className="tag">Warranty:</div>
          <div>36 months</div>
        </div> */}

        {generalInfo.length !== 0
          ? generalInfo.map((item, index) => (
              <div className="d-flex gen-info" key={index}>
                <div className="tag">{item.tag}:</div>
                <div>{item.content}</div>
              </div>
            ))
          : ""}
      </div>
      <div className="col-lg-7">
        <HeaderSection content="Product Specification" />

        {specsInfo.length !== 0
          ? specsInfo.map((item, index) => {
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
            })
          : ""}

        {/* <div className="row specs">
          <div className="col-4 specs-tag">Color</div>
          <div className="col-8 specs-content">Rose Gold</div>
        </div>
        <div className="row specs specs-deco">
          <div className="col-4 specs-tag">Brightness</div>
          <div className="col-8 specs-content">300 nits</div>
        </div>
        <div className="row specs">
          <div className="col-4 specs-tag">Display resolution</div>
          <div className="col-8 specs-content">24"</div>
        </div>
        <div className="row specs specs-deco">
          <div className="col-4 specs-tag">RAM</div>
          <div className="col-8 specs-content">
            1 x 4GB Onboard DDR4 2400MHz ( 1 Khe cắm / Hỗ trợ tối đa 12GB )
          </div>
        </div>
        <div className="row specs">
          <div className="col-4 specs-tag">Screen</div>
          <div className="col-8 specs-content">
            15.6" ( 1920 x 1080 ) Full HD IPS không cảm ứng , VGA webcam
          </div>
        </div>
        <div className="row specs specs-deco">
          <div className="col-4 specs-tag">Ports</div>
          <div className="col-8 specs-content">
            1 analog and digital audio-out; 3 USB 3.0 (1 upstream, 2 downstream)
          </div>
        </div> */}
      </div>
    </div>
  );
}

TechDescrip.propTypes = {};

export default TechDescrip;
