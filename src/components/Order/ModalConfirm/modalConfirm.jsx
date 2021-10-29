import React from "react";
import { OrderActionName } from "../../../pages/Order/type";
import "./_modalConfirm.scss";

function ModalConfirm(props) {
  const { modalType, orderId } = props;

  const renderTitleStatement = () => {
    switch (modalType) {
      case OrderActionName.CANCEL_ORDER:
        return "Are you sure that you want to cancel this order?";
      case OrderActionName.RECEIVED:
        return "Do you receive your package successfully?";
      case OrderActionName.RETURN_PACKAGE:
        return "Are you sure you want to return this package?";
      default:
        break;
    }
  };
  const renderBody = () => {
    switch (modalType) {
      case OrderActionName.CANCEL_ORDER:
        return (
          <>
            <div className="text-center pb-2 cancel">
              <i className="far fa-times-circle"></i>
            </div>
            <div>If you click OK, this order will be cancelled right now.</div>
          </>
        );
      case OrderActionName.RECEIVED:
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
      case OrderActionName.RETURN_PACKAGE:
        return (
          <>
            <div className="text-center pb-2">
              <i className="fas fa-undo unsuccess"></i>
            </div>

            <div className="pb-2">
              Please write your complain about this package if any. We apologise
              for any inconvenience caused!
            </div>
            <textarea
              rows="5"
              placeholder="Your review"
              // value={review.reviewContent}
              // onChange={(e) => {
              //   setReview({
              //     reviewContent: e.target.value,
              //     rating: review.rating,
              //   });
              // }}
            ></textarea>
          </>
        );
      default:
        break;
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
              <b>{renderTitleStatement()}</b>
            </h6>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{renderBody()}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              OK
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalConfirm.propTypes = {};

export default React.memo(ModalConfirm);
