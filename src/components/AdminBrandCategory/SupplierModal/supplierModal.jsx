import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FormGroup, Input, Label } from "reactstrap";
import BrandApi from "../../../api/brandApi";
import CategoryApi from "../../../api/categoryApi";
import image from "../../../assets/images/headphone1.jpeg";
import { getBrands } from "../../../utilities/slices/brandSlice";
import { getCategories } from "../../../utilities/slices/categorySlice";
import {
  showFailedMessage, showSuccessMessage
} from "../../../utilities/slices/notificationSlice";
import ProductImage from "../../AdminProduct/ProductImage/productImage";
import "./_supplierModal.scss";

function SupplierModal(props) {
  const { item, type, listItems } = props;

  const [itemInfo, setItemInfo] = useState();
  const [error, setError] = useState();

  const dispatch = useDispatch();
  const typingTimeoutRef = useRef(null);

  const updateItemInfo = (e) => {
    const value = e.target.value;
    setItemInfo(value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      handleValidation(value);
    }, 300);
  };

  const handleValidation = (value) => {
    let error = "";

    if (!value) {
      error = "Cannot be empty.";
    } else {
      const existedItemName = listItems.find(
        (item) => item.name.toLowerCase() === value.toLowerCase()
      );
      if (existedItemName) {
        error = "This item already existed.";
      }
    }
    setError(error);
  };

  const handleAddNewItem = () => {
    // generate slug
    const slug = "";
    return { name: itemInfo, slug };
  };

  const submitItemInfo = () => {
    let response;
    switch (type) {
      case "Categories":
        response = item
          ? CategoryApi.update({ id: item.id, slug: item.slug, name: itemInfo })
          : CategoryApi.add(handleAddNewItem());
        break;
      case "Brands":
        response = item
          ? BrandApi.update({ id: item.id, name: itemInfo })
          : BrandApi.add({ name: itemInfo });
        break;
      default:
        break;
    }

    response
      .then(() => {
        dispatch(showSuccessMessage());
        if (type === "Categories") {
          dispatch(getCategories());
        } else {
          dispatch(getBrands());
        }
      })
      .catch(() => dispatch(showFailedMessage()));
  };

  useEffect(() => {
    setItemInfo("");
    setError("");
  }, [item]);

  return (
    <div
      className="modal fade modal-supplier"
      id="modalSuppiler"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="menuModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-md"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">
              <b>{type} Information</b>
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
            <div className="image-upload">
              {!item ? (
                <div className="large-image mr-5 add-item">
                  <div className="content">
                    <i className="far fa-images"></i>
                    <div>+ Add Photo</div>
                  </div>
                </div>
              ) : (
                <div className="large-image mr-3">
                  <ProductImage image={image} />
                </div>
              )}
            </div>
            <div className="d-flex justify-content-between flex-column">
              {item ? (
                <>
                  <FormGroup>
                    <Label className="text-capitalize">Current Name</Label>
                    <Input type="text" name="name" value={item.name} disabled />
                  </FormGroup>
                  <FormGroup>
                    <Label className="text-capitalize">New Name</Label>
                    <Input
                      type="text"
                      name="name"
                      onChange={updateItemInfo}
                      value={itemInfo || ""}
                    />
                    <span className="text-danger">
                      <small>{error}</small>
                    </span>
                  </FormGroup>
                  <div className="date">
                    <div>
                      Created date: <b>May 13, 2021</b>
                    </div>
                    <div>
                      Last modified: <b>May 13, 2021</b>
                    </div>
                  </div>
                </>
              ) : (
                <FormGroup>
                  <Label className="text-capitalize">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    onChange={updateItemInfo}
                    value={itemInfo || ""}
                    onBlur={(e) =>
                      !e.target.value && setError("Cannot be empty.")
                    }
                  />
                  <span className="text-danger">
                    <small>{error}</small>
                  </span>
                </FormGroup>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={submitItemInfo}
              disabled={!itemInfo || error ? true : false}
            >
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

SupplierModal.propTypes = {};

export default SupplierModal;
