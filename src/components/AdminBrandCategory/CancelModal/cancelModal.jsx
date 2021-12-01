import React from "react";
import { useDispatch } from "react-redux";
import BrandApi from "../../../api/brandApi";
import CategoryApi from "../../../api/categoryApi";
import ProductApi from "../../../api/productApi";
import { getBrands } from "../../../utilities/slices/brandSlice";
import { getCategories } from "../../../utilities/slices/categorySlice";
import {
  showFailedMessage,
  showSuccessMessage,
} from "../../../utilities/slices/notificationSlice";

function CancelModal(props) {
  const { id, name } = props;
  const dispatch = useDispatch();

  const removeItem = async () => {
    let response;
    switch (name) {
      case "Categories":
        response = CategoryApi.remove(id).then(() => {dispatch(showSuccessMessage()); dispatch(getCategories())});
        break;
      case "Brands":
        response = BrandApi.remove(id).then(() => {dispatch(showSuccessMessage()); dispatch(getBrands())});
        break;
      case "product":
        response = ProductApi.remove(id).then(() => {dispatch(showSuccessMessage())});
        break;
      default:
        break;
    }
    response
      .catch(() => dispatch(showFailedMessage()));
  };

  return (
    <div
      className="modal fade modal-cancel"
      id="modalRemoveSuppiler"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="menuModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-sm"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">
              <b>Remove Item</b>
            </h6>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              //   onClick={redirectToCompletedOrder}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body d-flex">
            Are you sure you want to delete this item?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={removeItem}
              data-dismiss="modal"
            >
              Delete
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

CancelModal.propTypes = {};

export default CancelModal;
