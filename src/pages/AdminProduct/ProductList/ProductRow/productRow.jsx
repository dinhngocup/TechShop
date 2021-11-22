import React from "react";
import image from "../../../../assets/images/headphone1.jpeg";
import handlePrice from "../../../../helpers/formatPrice";
import "./_productRow.scss";

function ProductRow(props) {
  const { product } = props;
  return (
    <tr
      className="product-table-item"
      data-toggle="modal"
      data-target="#signOutModal"
    >
      <td className="">
        <img src={image} alt="" />
      </td>
      <td className="">
        <b>{product.name}</b>
      </td>

      <td className="">{handlePrice(product.price)}</td>
      <td className="">{product.brandName}</td>
      <td className="text-center sale-program">
        {product.saleProgram ? (
          <button
            className="sale-event btn"
            data-toggle="modal"
            data-target="#saleProductModal"

            // onClick={(e) => e.stopPropagation()}
          >
            {product.saleProgram.value}
          </button>
        ) : (
          <button className="no-sale btn" onClick={(e) => e.stopPropagation()}>
            Create Sale
          </button>
        )}
      </td>
      <td className="product-action ">
        <div className="d-flex justify-content-between align-items-center">
          <i className="far fa-eye"></i>
          <i className="fa fa-times"></i>
        </div>
      </td>
    </tr>
  );
}

ProductRow.propTypes = {};

export default ProductRow;
