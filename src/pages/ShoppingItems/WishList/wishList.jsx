import React, {useEffect} from "react";
import { useDispatch } from 'react-redux';
import {
  addNewBreadcrumb,
  removeLastBreadcrumb,
} from "../../../components/Breadcrumb/breadcrumbSlice";



function WishList(props) {
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
  return <div>wish list</div>;
}

WishList.propTypes = {};

export default WishList;
