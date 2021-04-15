import React, { useEffect } from "react";
import BillingDetails from "./BillingDetails/billingDetails";
import { useDispatch } from "react-redux";
import {
  addNewBreadcrumb,
  removeLastBreadcrumb,
} from "utilities/slices/breadcrumbSlice";
import "./_checkOut.scss";
import Order from "./Order/order";

function CheckOut(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      addNewBreadcrumb({
        name: "Check Out",
        slug: "/check-out",
      })
    );

    return () => {
      dispatch(removeLastBreadcrumb());
    };
  }, [dispatch]);

  return (
    <div className="table-wrapper check-out">
      <div className="row">
        <div className="col-lg-6">
          <BillingDetails />
        </div>
        <div className="col-lg-6 order">
          <Order />
        </div>
      </div>
    </div>
  );
}

CheckOut.propTypes = {};

export default CheckOut;
