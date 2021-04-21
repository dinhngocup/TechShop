import UserApi from "api/userApi";
import EmptyItem from "components/ShoppingItemsComponents/EmptyItem/emptyItem";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  addNewBreadcrumb,
  removeLastBreadcrumb
} from "utilities/slices/breadcrumbSlice";
import BillingDetails from "./BillingDetails/billingDetails";
import Order from "./Order/order";
import "./_checkOut.scss";

function CheckOut(props) {
  const productsInCart = useSelector((state) => state.cart.products);
  const location = useLocation();
  const history = useHistory();
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

  const [shippingInfo, setShippingInfo] = useState(null);

  const updateShippingInfo = (info) => {
    setShippingInfo(info);
  };

  const placeOrder = (shippingInfo) => {
    
    let data = {
      userId: 1,
      orderInfo: productsInCart,
      shippingInfo: shippingInfo,
    };
    const placeOrder = async (data) => {
      return UserApi.placeOrder(data)
        .then((res) => console.log(res))
        .catch((err) => {
          // console.log(err)
          // return history.push({
          //   pathname: "/login",
          //   state: { referrer: location },
          // });
        });
    };
    placeOrder(data);
  };
  return (
    <div className="table-wrapper check-out">
      {productsInCart.length !== 0 ? (
        <div className="row">
          <div className="col-lg-6">
            <BillingDetails updateShippingInfo={updateShippingInfo} />
          </div>
          <div className="col-lg-6 order">
            <Order />
            <div className="btn-pay">
              <button
                onClick={() => {
                  placeOrder(shippingInfo);
                }}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      ) : (
        <EmptyItem title="check-out" />
      )}

      {/* <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div> */}
    </div>
  );
}

CheckOut.propTypes = {};

export default CheckOut;
