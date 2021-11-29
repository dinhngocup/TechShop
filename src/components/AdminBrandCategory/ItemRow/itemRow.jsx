import React from "react";
import image from "../../../assets/images/headphone1.jpeg";

function ItemRow(props) {
  const { item, no, updateItemModal } = props;

  return (
    <tr className="product-table-item">
      <td>{no}</td>
      <td className="">
        <img src={image} alt="" />
      </td>
      <td className="text-center name">
        <div>
          <b>{item.name}</b>
        </div>
      </td>
      <td className="text-center ">
        <b>Dec 13, 2020</b>
      </td>
      <td className="text-center ">
        <b>May 13, 2020</b>
      </td>

      <td className="product-action">
        <div className="d-flex justify-content-between align-items-center">
          <i
            data-toggle="modal"
            data-target="#modalSuppiler"
            className="far fa-eye"
            onClick={() => updateItemModal({ item, action: "View" })}
          ></i>
          <i
            data-toggle="modal"
            data-target="#modalRemoveSuppiler"
            className="fa fa-times"
            onClick={() => updateItemModal({ item, action: "Remove" })}
          ></i>
        </div>
      </td>
    </tr>
  );
}

ItemRow.propTypes = {};

export default ItemRow;
