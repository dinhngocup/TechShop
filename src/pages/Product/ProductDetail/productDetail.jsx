import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductApi from "../../../api/productApi";
import {
  addNewBreadcrumb,
  removeLastBreadcrumb
} from "../../../components/Breadcrumb/breadcrumbSlice";
import SingleProInfo from "./SingleProInfo/singleProInfo";
import SingleProTab from './SingleProTab/singleProTab'


function ProductDetail() {
  //console.log('detail')
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      let response = await ProductApi.getDetailedProduct(id);
      dispatch(
        addNewBreadcrumb({
          name: response.name,
          slug: "",
        })
      );
      setProduct(response);
    };
    fetchProduct();
    return () => {
      dispatch(removeLastBreadcrumb());
    };
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <SingleProInfo product={product}/>
      <SingleProTab product={product}/>
    </React.Fragment>
  );
}

//ProductDetail.propTypes = {};

export default ProductDetail;
