import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  addNewBreadcrumb,
  removeLastBreadcrumb,
} from "utilities/slices/breadcrumbSlice";
import "./_detailedOrder.scss";

import OrderItem from "components/ShoppingItemsComponents/OrderItem/orderItem";
import { render } from "@testing-library/react";

function DetailedOrder(props) {
  const dispatch = useDispatch();
  const [detailedInfo, setDetailedInfo] = useState({});

  useEffect(() => {
    dispatch(
      addNewBreadcrumb({
        name: "12321",
        slug: "",
      })
    );

    return () => {
      dispatch(removeLastBreadcrumb());
    };
  }, [dispatch]);

  useEffect(() => {
    
    const tempData = {
      detailedInvoices: [
        {
          productID: 1,
          productPrice: 40000000,
          quantity: 1,
          totalPrice: 40000000,
          productName: "Smart Watch 1",
        },
        {
          productID: 2,
          productPrice: 60000000,
          quantity: 1,
          totalPrice: 60000000,
          productName: "Smart Watch 2",
        },
        {
          productID: 4,
          productPrice: 80000000,
          quantity: 1,
          totalPrice: 80000000,
          productName: "Smart Watch 4",
        },
        {
          productID: 6,
          productPrice: 10000000,
          quantity: 1,
          totalPrice: 10000000,
          productName: "PC Accessories 1",
        },
      ],
      shippingInfo: {
        fullname: "Đinh Ngọc Uyen Phuong ",
        phone: "0904588091",
        address: "39",
      },
      email: null,
      totalPrice: 190000000,
      note: null,
      statusInvoice: "PENDING",
      shippingDate: "2021-05-10",
      invoiceDate: "2021-05-07",
    };
    setDetailedInfo(tempData);
  }, []);

  const renderOrderItem = (detailedInvoices) => {
    if (detailedInvoices === undefined) return;
    return detailedInvoices.length !== 0
      ? detailedInvoices.map((detailedInvoice) => (
          <OrderItem
            key={detailedInvoice.productID}
            product={detailedInvoice}
          />
        ))
      : "";
  };
  return (
    <div className="detailed-order">
      <div className="row">
        <div className="col">
          <div className="title">Shipping Address</div>
          <div className="content">
            <div className="name">{detailedInfo.shippingInfo?.fullname}</div>
            <div className="basic-info">
              Address: {detailedInfo.shippingInfo?.address}
            </div>

            <div className="basic-info">
              Phone: {detailedInfo.shippingInfo?.phone}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Shipping Method</div>
          <div className="content">
            <div className="basic-info">
              Shipping date: {detailedInfo.shippingDate}
            </div>
            <div className="basic-info">Freeship</div>
            <div className="basic-info">
              Invoice creation date: {detailedInfo.invoiceDate}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Payment Method</div>
          <div className="content">
            <div className="basic-info">Cash On Delivery</div>
          </div>
        </div>
      </div>
      <div className="product-table mt-3">
        <table>
          <thead>
            <tr>
              <th className="">Product</th>
              <th className="">Price</th>
              <th className="">Quantity</th>
              <th className="">Total</th>
            </tr>
          </thead>
          <tbody>{renderOrderItem(detailedInfo.detailedInvoices)}</tbody>
        </table>
      </div>
    </div>
  );
}

DetailedOrder.propTypes = {};

export default DetailedOrder;
