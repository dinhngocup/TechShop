import React from "react";
import { FormGroup, Input, Label, Col } from "reactstrap";
import { ATTRIBUTE_TYPE } from "../../../pages/AdminProduct/ProductDetail/Specification/type";
import "./_productAttributeInput.scss";

function ProductAttributeInput(props) {
  const {
    attribute,
    removeNewAttribute,
    handleValidation,
    listErrors,
    defaultValue,
  } = props;

  const editable = removeNewAttribute ? true : false;

  const renderInput = () => {
    switch (attribute.dataType) {
      case "VAR_CHAR":
        return (
          <Input
            type="text"
            name={`${editable ? "NEW_SPECS_" : "EXISTED_SPECS_"}${
              attribute.id
            }`}
            defaultValue={defaultValue || ""}
            onBlur={(e) => handleValidation(e, attribute)}
            invalid={listErrors && listErrors[attribute.id] ? true : false}
            required
          />
        );
      case "BOOL":
        return (
          <Input
            type="select"
            name={`${editable ? "NEW_SPECS_" : "EXISTED_SPECS_"}${
              attribute.id
            }`}
            onBlur={(e) => handleValidation(e, attribute)}
            invalid={listErrors && listErrors[attribute.id] ? true : false}
            required
          >
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </Input>
        );

      case "TEXT":
        return (
          <Input
            type="textarea"
            name={`${editable ? "NEW_SPECS_" : "EXISTED_SPECS_"}${
              attribute.id
            }`}
            onBlur={(e) => handleValidation(e, attribute)}
            invalid={listErrors && listErrors[attribute.id] ? true : false}
            defaultValue={defaultValue || ""}
            required
          />
        );

      case "INT":
        return (
          <Input
            type="number"
            name={`${editable ? "NEW_SPECS_" : "EXISTED_SPECS_"}${
              attribute.id
            }`}
            onBlur={(e) => handleValidation(e, attribute)}
            invalid={listErrors && listErrors[attribute.id] ? true : false}
            defaultValue={defaultValue || ""}
            required
          />
        );

      case "FLOAT":
        return (
          <Input
            type="number"
            name={`${editable ? "NEW_SPECS_" : "EXISTED_SPECS_"}${
              attribute.id
            }`}
            onBlur={(e) => handleValidation(e, attribute)}
            invalid={listErrors && listErrors[attribute.id] ? true : false}
            defaultValue={defaultValue || ""}
            required
          />
        );
      default:
        break;
    }
  };

  return (
    <FormGroup row className="align-items-center attribute mb-4">
      <Label sm={4}>
        <div className="name text-capitalize">{attribute.name}</div>
        <div className="data-type text-capitalize">
          ({ATTRIBUTE_TYPE[attribute.dataType]})
        </div>
      </Label>
      <Col sm={8} className="pl-0">
        {renderInput()}

        {editable ? (
          <i
            className="fas fa-times-circle"
            onClick={() => removeNewAttribute(attribute)}
          ></i>
        ) : (
          ""
        )}
        <div className="text-danger error">
          <small>
            {listErrors?.[`${attribute.name}${attribute.dataType}`]}
          </small>
        </div>
      </Col>
    </FormGroup>
  );
}

ProductAttributeInput.propTypes = {};

export default ProductAttributeInput;
