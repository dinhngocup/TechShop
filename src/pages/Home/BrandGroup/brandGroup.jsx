import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import image from "../../../assets/images/razer.png";
import "./_brandGroup.scss";
import { getBrands } from '../../../utilities/slices/brandSlice';

function BrandGroup() {
  const stateBrands = useSelector((state) => state.brand.data);
  const dispatch = useDispatch();

  // get brands
  useEffect(() => {
    async function fetchBrands() {
      await dispatch(getBrands());
    }

    if (!stateBrands.length) {
      fetchBrands();
    }
  }, [dispatch, stateBrands]);

  const renderBrandGroup = (brands) => {
    return brands.length !== 0
      ? brands.map((brand, index) => (
          <Col key={index} xs="4" sm="4" md="3" lg="3">
            <div className="brand-info">
              <div className="brand-img">
                <img src={image} alt={brand.brandName} />
              </div>
              <div className="brand-img">
                <img src={image} alt={brand.brandName} />
              </div>
            </div>
          </Col>
        ))
      : "";
  };
  return <Row>{renderBrandGroup(stateBrands)}</Row>;
}

export default BrandGroup;
