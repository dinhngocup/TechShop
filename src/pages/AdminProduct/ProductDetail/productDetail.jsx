import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "reactstrap";
import ProductApi from "../../../api/productApi";
import {
  showFailedMessage,
  showSuccessMessage,
} from "../../../utilities/slices/notificationSlice";
import MainInfo from "./MainInfo/mainInfo";
import ProductSpecification from "./Specification/productSpecification";

function ProductDetail(props) {
  const { id } = props;

  const [productDetail, setProductDetail] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetail = async () => {
      return await ProductApi.getDetailedProduct(id);
    };
    if (id) {
      fetchProductDetail()
        .then((res) => setProductDetail(res))
        .catch(() => setProductDetail(null));
    }
  }, [id]);

  const handleSubmit = async (event) => {
    const formData = new FormData(event.currentTarget);
    let mainInfo = {};
    event.preventDefault();

    const newSpecifications = [];
    const existedSpecifications = [];
    for (let [key, value] of formData.entries()) {
      if (key.startsWith("NEW_SPECS_")) {
        const newAttribute = key.replace("NEW_SPECS_", "").split("_");
        const newSpecs = {
          name: newAttribute[0],
          dataType: newAttribute[1],
          value,
        };
        newSpecifications.push(newSpecs);
      } else if (key.startsWith("EXISTED_SPECS_")) {
        const existedSpecsId = key.replace("EXISTED_SPECS_", "");
        existedSpecifications.push({ id: existedSpecsId, value });
      } else {
        mainInfo = { ...mainInfo, [key]: value };
      }
    }

    const body = {
      ...mainInfo,
      newSpecifications,
      existedSpecifications,
    };
    let response;
    if (id) {
      console.log("update");
      response = ProductApi.updateProductInfo({ ...body, id });
    } else {
      console.log("add");

      response = ProductApi.addProduct(body);
    }
    response
      .then(() => {
        dispatch(showSuccessMessage());
      })
      .catch(() => dispatch(showFailedMessage()));
  };

  return (
    <>
      {(id && productDetail) || !id ? (
        <Form onSubmit={handleSubmit}>
          <MainInfo product={productDetail} />
          <ProductSpecification product={id ? productDetail : null} />
          <Button type="submit" className="w-100 btn-submit">
            Add
          </Button>
        </Form>
      ) : (
        <div>No product is avaiable</div>
      )}
    </>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;
