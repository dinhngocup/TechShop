import OrderApi from "api/orderApi";
import OrderItem from "components/ShoppingItemsComponents/OrderItem/orderItem";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  addNewBreadcrumb,
  removeLastBreadcrumb
} from "utilities/slices/breadcrumbSlice";
import "./_detailedOrder.scss";


function DetailedOrder(props) {
  const dispatch = useDispatch();
  const [detailedInfo, setDetailedInfo] = useState({});
  const { orderID } = useParams();

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
    const getDetailedOrder = async () => {
      let response = await OrderApi.getDetailedOrder(orderID);
      console.log(response);
      setDetailedInfo(response);
    }
    getDetailedOrder();
    
  }, [orderID]);

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
