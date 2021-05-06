import React, { useState } from "react";
import { PropTypes } from "prop-types";
import AddressInfo from "components/ShoppingItemsComponents/AddressInfo/addressInfo";

function AnotherAddressForm(props) {
  //console.log("form");
  const { cancelAdd, updateInfo } = props;
  const [info, setInfo] = useState({});
  const [isAddAddress, setIsAddAddress] = useState(false);
  const handleChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = () => {
    setIsAddAddress(true);
    updateInfo(info);
  };
  const renderAddressInfo = (isAddAddress) => {
    return isAddAddress === false ? (
      <React.Fragment>
        <input
          placeholder="Your name here..."
          name="fullname"
          onChange={handleChangeInput}
          required
        />
        <input
          placeholder="Phone here..."
          name="phone"
          onChange={handleChangeInput}
          required
        />
        <textarea
          placeholder="Your address here..."
          name="address"
          onChange={handleChangeInput}
          required
        />
      </React.Fragment>
    ) : (
      <AddressInfo info={info} confirm={true} />
    );
  };

  const renderButtonSubmitAddress = (isAddAddress) => {
    return isAddAddress === false ? (
      <React.Fragment>
        <button onClick={cancelAdd}>Cancel</button>
        <button onClick={handleSubmit}>Add</button>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <button onClick={cancelAdd}>Delete</button>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {renderAddressInfo(isAddAddress)}
      <div>{renderButtonSubmitAddress(isAddAddress)}</div>
    </React.Fragment>
  );
}

AnotherAddressForm.propTypes = {
  handleChangeInput: PropTypes.func,
};

export default AnotherAddressForm;
