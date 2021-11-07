import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Input, Label } from "reactstrap";
import OrderApi from "../../../api/orderApi";
import { OrderActionName } from "../../../pages/Order/type";
import ModalFooter from "../ModalFooter/modalFooter";
import { MESSAGE_ORDER } from "../type";

function ModalShipperInfo(props) {
  const { orderId, modalType } = props;
  const PREV_SHIPPER_INFO = useRef();
  const history = useHistory();

  const [shipperInfo, setShipperInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [isSucceed, setIsSucceed] = useState(false);

  useEffect(() => {
    const getShippingInfo = async () => {
      let response = await OrderApi.getShippingInfo(orderId);
      if (response) {
        setShipperInfo(response);
        PREV_SHIPPER_INFO.current = response;
      }
    };
    if (modalType === OrderActionName.EDIT_SHIPPER_INFO) {
      getShippingInfo();
    } else {
      setShipperInfo({});
    }
  }, [orderId, modalType]);

  useEffect(() => {
    if (isSucceed) {
      setIsSucceed(false);
    }
  }, [orderId, modalType]);

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setShipperInfo({
      ...shipperInfo,
      [e.target.name]: value,
    });
  };

  const renderBody = () => {
    if (!isSucceed) {
      return (
        <React.Fragment>
          <FormGroup>
            <Label for="exampleEmail">Shipper's Name</Label>
            <Input
              type="text"
              name="name"
              value={(shipperInfo && shipperInfo.name) || ""}
              onChange={handleChangeInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Shipper's Phone Number</Label>
            <Input
              type="number"
              name="phone"
              value={(shipperInfo && shipperInfo.phone) || ""}
              onChange={handleChangeInput}
            />
          </FormGroup>
        </React.Fragment>
      );
    } else {
      return (
        <div>
          Shipper's information is recorded. Please wait for the Shipper agent
          to pick up this order.
        </div>
      );
    }
  };

  const confirmRequest = async () => {
    if (
      modalType === OrderActionName.EDIT_SHIPPER_INFO &&
      shipperInfo.name === PREV_SHIPPER_INFO.current.name &&
      shipperInfo.phone === PREV_SHIPPER_INFO.current.phone
    ) {
      setIsSucceed(true);
      return;
    }

    let response;
    setLoading(true);
    response = await OrderApi.transferToShipper(orderId, shipperInfo);

    if (response) {
      setLoading(false);
      setIsSucceed(true);
    }
  };

  const redirect = () => {
    const url =
      modalType === OrderActionName.EDIT_SHIPPER_INFO
        ? history.location.pathname
        : "/admin/order/shipped";
    isSucceed && history.push(url);
  };

  return (
    <div
      className="modal fade modal-confirm"
      id="modalShipperInfo"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="menuModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">
              <b>
                {isSucceed
                  ? MESSAGE_ORDER.SUBMIT_SHIPPER_INFO_SUCCESS
                  : MESSAGE_ORDER.SUBMIT_SHIPPER_INFO}
              </b>
            </h6>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={redirect}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{renderBody()}</div>
          <div className="modal-footer">
            <ModalFooter
              isSucceed={isSucceed}
              loading={loading}
              confirmRequest={confirmRequest}
              isDisabled={
                !shipperInfo || !shipperInfo.name || !shipperInfo.phone
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ModalShipperInfo.propTypes = {};

export default ModalShipperInfo;
