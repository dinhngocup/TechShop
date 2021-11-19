import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import AddAttributeModal from "../../../../components/AdminProduct/AddAttributeModal/addAttributeModal";
import ProductAttributeInput from "../../../../components/AdminProduct/ProductAttributeInput/productAttributeInput";

function SpecificationInputGroup(props) {
  console.log("specs input");
  const { specsAttributes } = props;

  const [newAttributes, setNewAttributes] = useState([]);
  const [listErrors, setListErrors] = useState();

  const removeNewAttribute = (attr) => {
    const newList = newAttributes.filter(
      (newAttr) =>
        attr.name !== newAttr.name || attr.dataType !== newAttr.dataType
    );
    setNewAttributes(newList);
  };

  const handleValidation = (e, attribute) => {
    const value = e.target.value;
    const newErrors = {};
    const errorName = attribute.name + attribute.dataType;
    switch (attribute.dataType) {
      case "VAR_CHAR":
      case "TEXT":
        if (!value) {
          newErrors[errorName] = "Cannot be empty.";
        } else {
          newErrors[errorName] = "";
        }
        break;
      case "INT":
        // only include digit
        if (!/^\d+$/.test(value)) {
          newErrors[errorName] = "Positive number only.";
        } else {
          newErrors[errorName] = "";
        }
        break;
      case "FLOAT":
        // TODO: only decimal number
        if (!/^\d+$/.test(value)) {
          newErrors[errorName] = "Decimal number only.";
        } else {
          newErrors[errorName] = "";
        }
        break;
      case "BOOL":
        if (!value) {
          newErrors[errorName] = "Cannot be empty";
        } else {
          newErrors[errorName] = "";
        }
        break;
      default:
        break;
    }
    setListErrors({ ...listErrors, ...newErrors });
  };

  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col xs={12} sm={5} className="pl-0 py-2">
            <h5 className="text-center">Existed Attributes</h5>
            {specsAttributes.map((attribute) => (
              <ProductAttributeInput
                attribute={attribute}
                key={attribute.id}
                handleValidation={handleValidation}
                listErrors={listErrors}
              />
            ))}
          </Col>
          <Col sm={1}></Col>
          <Col xs={12} sm={6} className="new-attribute py-2">
            <h5 className="text-center">New Attributes</h5>

            {newAttributes.map((attr) => (
              <ProductAttributeInput
                attribute={attr}
                key={attr.name + attr.dataType}
                removeNewAttribute={removeNewAttribute}
                handleValidation={handleValidation}
                listErrors={listErrors}
              />
            ))}

            <div className="text-right">
              <button
                type="button"
                className="btn btn-add-specs"
                data-toggle="modal"
                data-target="#addAttributeModal"
              >
                Add New
              </button>
            </div>
          </Col>
        </Row>
      </div>
      <AddAttributeModal
        addNewAttribute={(attr) => setNewAttributes([...newAttributes, attr])}
        existedAttributes={specsAttributes}
        newAttributes={newAttributes}
      />
    </>
  );
}

SpecificationInputGroup.propTypes = {};

export default SpecificationInputGroup;
