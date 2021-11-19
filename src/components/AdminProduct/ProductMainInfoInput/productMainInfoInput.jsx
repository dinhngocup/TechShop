import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

function ProductMainInfoInput(props) {
  const { label, handleValidation, listErrors, dataType, name } = props;
  console.log(listErrors);
  console.log(name);
  return (
    <FormGroup>
      <Label className="text-capitalize">{label}</Label>
      <Input
        type={dataType}
        name={name}
        onBlur={handleValidation}
        invalid={listErrors && listErrors[name] ? true : false}
        required={handleValidation ? true : false}
      />
      <span className="text-danger">
        <small>{listErrors?.[name]}</small>
      </span>
    </FormGroup>
  );
}

ProductMainInfoInput.propTypes = {};

export default ProductMainInfoInput;
