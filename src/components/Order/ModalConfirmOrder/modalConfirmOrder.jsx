import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import OrderApi from "../../../api/orderApi";
import { getAllAdminOrders } from "../../../utilities/slices/adminOrderSlice";
import ModalFooter from "../ModalFooter/modalFooter";
import { MESSAGE_ORDER } from "../type";

function ModalConfirmOrder(props) {
  const { orderId } = props;
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [isSucceed, setIsSucceed] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSucceed) {
      setIsSucceed(false);
    }
  }, [orderId]);

  const redirectToCompletedOrder = () => {
    isSucceed && history.push("/admin/order/handling");
  };

  const renderBody = () => {
    if (!isSucceed) {
      return (
        <>
          <div className="text-center pb-2">Handle order</div>
        </>
      );
    } else {
      return (
        <div>
          You have just confirmed to handle this order completely. Please
          package the order and tranfer to shipper as soon as possible.
        </div>
      );
    }
  };

  const confirmRequest = async () => {
    let response;
    setLoading(true);

    response = await OrderApi.updateOrderStatus(orderId);

    if (response) {
      setLoading(false);
      setIsSucceed(true);
      dispatch(getAllAdminOrders());
    }
  };
  return (
    <div
      className="modal fade modal-confirm"
      id="modalConfirm"
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
                  ? MESSAGE_ORDER.SUCCESSFUL_REQUEST
                  : MESSAGE_ORDER.RECEIVED_QUESTION}
              </b>
            </h6>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={redirectToCompletedOrder}
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ModalConfirmOrder.propTypes = {};

export default React.memo(ModalConfirmOrder);
