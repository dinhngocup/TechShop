import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, FormGroup, Spinner } from "reactstrap";
import ProductApi from "../../../api/productApi";
import ProductSelection from "../../../components/AdminProduct/ProductSelection/productSelection";
import SpecificationInputGroup from "./SpecificationInputGroup/specificationInputGroup";
import "./_productSpecification.scss";

function ProductSpecification(props) {
  console.log("specs");
  const stateCategories = useSelector((state) => state.category.data);
  const stateBrands = useSelector((state) => state.brand.data);
  
  const [filterSpecification, setFilterSpecification] = useState({});
  const [specsAttributes, setSpecsAttributes] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAttributes = async () => {
      let response = await ProductApi.getProductSpecificationAttribute({
        filterSpecification,
      });
      if (response) {
        setLoading(false);
        setSpecsAttributes(response);
      }
    };
    if (
      filterSpecification &&
      filterSpecification.category &&
      filterSpecification.brand
    ) {
      console.log("call api");
      setLoading(true);
      fetchAttributes();
    }
  }, [filterSpecification]);

  const handleSelection = (e) => {
    setFilterSpecification({
      ...filterSpecification,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="product-specification my-2">
      <div className="text-center header">Specification</div>
      <p className="text-center">
        <small>
          *Please choose category and brand of new product before adding
          specification attributes
        </small>
      </p>
      <FormGroup row>
        <ProductSelection
          name="category"
          options={stateCategories}
          handleSelection={handleSelection}
        />
        <Col sm={1}></Col>
        <ProductSelection
          name="brand"
          options={stateBrands}
          handleSelection={handleSelection}
        />
      </FormGroup>

      {loading ? (
        <div className="text-center">
          <Spinner color="primary" />
        </div>
      ) : specsAttributes ? (
        <SpecificationInputGroup specsAttributes={specsAttributes} />
      ) : (
        ""
      )}
    </div>
  );
}

ProductSpecification.propTypes = {};

export default ProductSpecification;
