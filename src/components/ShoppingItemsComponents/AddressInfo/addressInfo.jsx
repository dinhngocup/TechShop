import { PropTypes } from "prop-types";
import React from "react";
import './_addressInfo.scss'

function AddressInfo(props) {
  const { info, confirm } = props;
 //console.log("address info");

  return (
    <div className="shipping-info">
      <div className="name">{info.name}</div>
      <div className="basic-info">Address: {info.address}</div>

      <div className="basic-info">Phone: {info.phone}</div>
      {confirm ? (
        <div className="basic-info confirm">Confirmed Address</div>
      ) : (
        ""
      )}
    </div>
  );
}

AddressInfo.propTypes = {
  info: PropTypes.object,
};

export default React.memo(AddressInfo);
