import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewBreadcrumb,
  removeLastBreadcrumb,
} from "../../../components/Breadcrumb/breadcrumbSlice";
import WishItem from "./WishItem/wishItem";

function WishList() {
  const productsInWishList = useSelector((state) => state.wishList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      addNewBreadcrumb({
        name: "Wish List",
        slug: "/wish-list",
      })
    );

    return () => {
      dispatch(removeLastBreadcrumb());
    };
  }, [dispatch]);
  return (
    <div className="table-wrapper">
      <div className="table-content">
        <table>
          <thead>
            <tr>
              <th className="">Product</th>
              <th className="">Price</th>
              <th className="">Stock Status</th>
              <th className="">Add To Cart</th>
              <th className="">Remove</th>
            </tr>
          </thead>
          <tbody>
            {productsInWishList.products.length !== 0
              ? productsInWishList.products.map((product, index) => {
                  return <WishItem key={index} productInWishList={product} />;
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WishList;
