import React from "react";
import PropTypes from "prop-types";
import "./_orderItem.scss";
import image from "assets/images/pic7.jpeg";
import handlePrice from "helpers/formatPrice";

function OrderItem(props) {
  const { getProductModalInfo, product } = props;
  
  return (
    <tr className="order-item">
      <td className="product-info">
        <div>
          <img src={image} alt="" className="" />
        </div>
        <div className="short-info d-flex">
          <p className="product-name">{product.productName}</p>
          <p className="authen-tag">
            <span>Provided by</span> <i className="fas fa-check-circle"></i>
            TechShop
          </p>
          <div className="action">
            {product.isReviewed ? (
              ""
            ) : (
              <button
                data-toggle="modal"
                data-target="#reviewModal"
                onClick={() => {
                  getProductModalInfo({
                    productID: product.productID,
                    productName: product.productName,
                  });
                }}
              >
                Write your review
              </button>
            )}
            <button>Buy it again</button>
          </div>
        </div>
      </td>
      <td>
        {handlePrice(product.productPrice)} <u>đ</u>
      </td>
      <td>{product.quantity}</td>
      <td>
        {handlePrice(product.totalPrice)} <u>đ</u>
      </td>
    </tr>
  );
}

OrderItem.propTypes = {
  product: PropTypes.object,
};
OrderItem.defaultProps = {
  product: {},
};

export default OrderItem;
