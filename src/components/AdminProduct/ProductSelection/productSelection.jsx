import React from "react";
import { Col, Input, Label } from "reactstrap";

function ProductSelection(props) {
  const { name, options, handleSelection } = props;
  return (
    <>
      <Label sm={1} className="text-capitalize">
        {name}
      </Label>
      <Col sm={3}>
        <Input
          type="select"
          name={name}
          onChange={handleSelection}
          defaultValue={"DEFAULT"}
        >
          <option disabled value={"DEFAULT"}>
            -- Select an option --
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </Input>
      </Col>
    </>
  );
}

ProductSelection.propTypes = {};

export default ProductSelection;
