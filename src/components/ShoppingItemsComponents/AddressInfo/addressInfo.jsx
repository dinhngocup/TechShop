import { PropTypes } from "prop-types";
import React from "react";
import "./_addressInfo.scss";

function AddressInfo(props) {
  const { info, confirm } = props;
  //console.log("address info");
  const renderConfirmTag = (confirm) => {
    return confirm ? (
      <div className="basic-info confirm">Confirmed Address</div>
    ) : (
      ""
    );
  };
  return (
    <div className="shipping-info">
      <div className="name">{info.name}</div>
      <div className="basic-info">Address: {info.address}</div>

      <div className="basic-info">Phone: {info.phone}</div>
      {renderConfirmTag(confirm)}
    </div>
  );
}

AddressInfo.propTypes = {
  info: PropTypes.object,
};

export default React.memo(AddressInfo);
