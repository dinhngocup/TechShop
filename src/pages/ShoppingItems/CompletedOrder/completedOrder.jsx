import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import {
  addNewBreadcrumb,
  removeLastBreadcrumb,
} from "utilities/slices/breadcrumbSlice";
import OrderRow from "./orderRow";
import "./_completedOrder.scss";
import DetailedOrder from "./detailedOrder";
import { Route } from "react-router-dom";
import order from "../CheckOut/Order/order";

function CompletedOrder(props) {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    dispatch(
      addNewBreadcrumb({
        name: "Completed Order",
        slug: "/completed-order",
      })
    );

    return () => {
      dispatch(removeLastBreadcrumb());
    };
  }, [dispatch]);

  useEffect(() => {
    const tempData = [
      {
        invoiceID: 1,
        userID: 2,
        totalCost: 190000000,
        invoiceDate: "2021-05-07",
        shippingDate: "2021-05-10",
        note: null,
        otherShippingAddress: true,
        statusInvoice: "PENDING",
        userInvoiceIndex: "phuongdinh1802@gmail.com0",
      },
      {
        invoiceID: 2,
        userID: 2,
        totalCost: 210000000,
        invoiceDate: "2021-05-07",
        shippingDate: "2021-05-10",
        note: null,
        otherShippingAddress: false,
        statusInvoice: "PENDING",
        userInvoiceIndex: "phuongdinh1802@gmail.com1",
      },
      {
        invoiceID: 3,
        userID: 2,
        totalCost: 128400000,
        invoiceDate: "2021-05-09",
        shippingDate: "2021-05-12",
        note: null,
        otherShippingAddress: false,
        statusInvoice: "PENDING",
        userInvoiceIndex: "phuongdinh1802@gmail.com2",
      },
    ];
    setOrders(tempData);
  }, []);

  const renderOrders = (orders) => {
    return orders.length !== 0
      ? orders.map((order) => {
          return <OrderRow key={order.invoiceID} invoice={order} />;
        })
      : null;
  };

  return (
    <div className="table-wrapper completed-order">
      <div>
        <h4>Your Orders</h4>
      </div>
      <Route exact path="/completed-order">
        <div className="table-content">
          <table className="completed-order-table">
            <thead>
              <tr>
                <th className="">Order ID</th>
                <th className="">Order Date</th>
                {/* <th className="">Product</th> */}
                <th className="">Total</th>
                <th className="">Status</th>
              </tr>
            </thead>
            <tbody>
              <OrderRow />
              <OrderRow/>
              <OrderRow/>
              <OrderRow/>
            </tbody>
          </table>
        </div>
      </Route>
      <Route path="/completed-order/:orderID">
        <DetailedOrder />
      </Route>
    </div>
  );
}

CompletedOrder.propTypes = {};

export default CompletedOrder;
