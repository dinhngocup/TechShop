import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "reactstrap";
import ProductApi from "../../../../api/productApi";
import {
  showFailedMessage,
  showSuccessMessage,
} from "../../../../utilities/slices/notificationSlice";
import MainInfo from "./MainInfo/mainInfo";
import ProductSpecification from "./Specification/productSpecification";
import { useHistory } from "react-router-dom";
import { Spinner } from "reactstrap";

function ProductDetail(props) {
  const { id } = props;

  const [productDetail, setProductDetail] = useState();
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);
      return await ProductApi.getAdminDetailedProduct(id);
    };
    if (id) {
      fetchProductDetail()
        .then((res) => setProductDetail(res))
        .catch(() => setProductDetail(null))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleSubmit = async (event) => {
    const formData = new FormData(event.currentTarget);
    let mainInfo = {};
    event.preventDefault();

    const newSpecifications = [];
    const existedAttributes = [];
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
        const existedSpecsValue = key.replace("EXISTED_SPECS_", "").split("_");

        existedAttributes.push({
          id: existedSpecsValue[0],
          value,
          dataType: existedSpecsValue[1],
        });
      } else {
        mainInfo = { ...mainInfo, [key]: value };
      }
    }

    const body = {
      ...mainInfo,
      newSpecifications,
      existedAttributes,
    };
    let response;

    if (id) {
      console.log("update");
      response = ProductApi.updateProductInfo({ ...body, id })
        .then(() => {
          const fetchProductDetail = async () => {
            return await ProductApi.getAdminDetailedProduct(id);
          };

          fetchProductDetail().then((res) => setProductDetail(res));
          dispatch(showSuccessMessage());
          history.push("/admin/product");
        })
        .catch(() => dispatch(showFailedMessage()));
    } else {
      console.log("add");

      response = ProductApi.addProduct(body)
        .then(() => {
          dispatch(showSuccessMessage());
          history.push("/admin/product");
        })
        .catch(() => dispatch(showFailedMessage()));
    }
  };

  return (
    <>
      {loading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : !id || (id && productDetail) ? (
        <Form onSubmit={handleSubmit} className="px-3 pb-3">
          <MainInfo product={productDetail} />
          <ProductSpecification product={id ? productDetail : null} />
          <Button type="submit" className="w-100 btn-submit">
            {id ? "Update" : "Add"}
          </Button>
        </Form>
      ) : (
        <div className="text-center">No product is avaiable</div>
      )}
    </>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;
