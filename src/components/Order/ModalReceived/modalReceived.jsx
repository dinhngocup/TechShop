import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import ModalFooter from "../ModalFooter/modalFooter";
import OrderApi from "../../../api/orderApi";
import { MESSAGE_ORDER } from "../type";

function ModalReceived(props) {
  const { orderId } = props;

  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [isSucceed, setIsSucceed] = useState(false);
  useEffect(() => {
    if (isSucceed) {
      setIsSucceed(false);
    }
  }, [orderId]);

  const redirectToCompletedOrder = () => {
    const url = history.location.pathname.startsWith("/admin")
    ? "/admin/order/deliveried"
    : "/your-orders/deliveried";
    console.log(url)
    isSucceed && history.push(url);
  };

  const renderBody = () => {
    if (!isSucceed) {
      return (
        <>
          <div className="text-center pb-2">
            <i className="far fa-check-circle success"></i>
          </div>
          <div>
            <b>Thank you for your purchase. </b>We are grateful if you take a
            few minutes to write your review.
          </div>
          <br />
          <div>
            <small>
              Note:{" "}
              <em>
                If you click OK, you cannot request a refund for this order.
              </em>
            </small>
          </div>
        </>
      );
    } else {
      return (
        <div>
          Your request is recorded by TechShop. If you have any questions,
          contact TechShop now!
        </div>
      );
    }
  };

  const confirmRequest = async () => {
    let response;
    setLoading(true);

    response = await OrderApi.receivedOrder(orderId);

    if (response) {
      setLoading(false);
      setIsSucceed(true);
    }
  };

  return (
    <div
      className="modal fade modal-confirm"
      id="modalReceived"
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
            <ModalFooter isSucceed={isSucceed} loading={loading} confirmRequest={confirmRequest}/>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalReceived.propTypes = {};

export default ModalReceived;
