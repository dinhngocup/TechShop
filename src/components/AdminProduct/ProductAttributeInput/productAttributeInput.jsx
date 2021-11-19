import React from "react";
import { FormGroup, Input, Label, Col } from "reactstrap";
import { ATTRIBUTE_TYPE } from "../../../pages/AdminProduct/Specification/type";
import "./_productAttributeInput.scss";

function ProductAttributeInput(props) {
  const { attribute, removeNewAttribute, handleValidation, listErrors } = props;

  const editable = removeNewAttribute ? true : false;

  const renderInput = () => {
    switch (attribute.dataType) {
      case "VAR_CHAR":
        return (
          <Input
            type="text"
            name={`${attribute.name}${editable ? "_VAR_CHAR" : ""}`}
            onBlur={(e) => handleValidation(e, attribute)}
            invalid={
              listErrors && listErrors[attribute.name + attribute.dataType]
                ? true
                : false
            }
            required
          />
        );
      case "BOOL":
        return (
          <Input
            type="select"
            name={`${attribute.name}${editable ? "_BOOL" : ""}`}
            onBlur={(e) => handleValidation(e, attribute)}
            invalid={
              listErrors && listErrors[attribute.name + attribute.dataType]
                ? true
                : false
            }
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
            name={`${attribute.name}${editable ? "_TEXT" : ""}`}
            onBlur={(e) => handleValidation(e, attribute)}
            invalid={
              listErrors && listErrors[attribute.name + attribute.dataType]
                ? true
                : false
            }
            required
          />
        );

      case "INT":
        return (
          <Input
            type="number"
            name={`${attribute.name}${editable ? "_INT" : ""}`}
            onBlur={(e) => handleValidation(e, attribute)}
            invalid={
              listErrors && listErrors[attribute.name + attribute.dataType]
                ? true
                : false
            }
            required
          />
        );

      case "FLOAT":
        return (
          <Input
            type="number"
            name={`${attribute.name}${editable ? "_FLOAT" : ""}`}
            onBlur={(e) => handleValidation(e, attribute)}
            invalid={
              listErrors && listErrors[attribute.name + attribute.dataType]
                ? true
                : false
            }
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
          <small>{listErrors?.[attribute.name + attribute.dataType]}</small>
        </div>
      </Col>
    </FormGroup>
  );
}

ProductAttributeInput.propTypes = {};

export default ProductAttributeInput;
