import React from "react";
import "../../assets/styles/_childBanner.scss";
import Breadcrumb from "../../components/Breadcrumb/breadcrumb";
import NavShopping from "./NavShoppingItems/navShopping";
import "./_shoppingItems.scss";
import WishList from "./WishList/wishList";
import Cart from "./Cart/cart";
import {Route} from 'react-router-dom'

function ShoppingItems(props) {
  //console.log("cart main");
  
  return (
    <div className="wrapper-dashboard shopping-cart-area">
      <div className="child-banner shopping-cart-banner">
        <div className="breadcrumb-nav container">
          <Breadcrumb />
        </div>
      </div>
      <div className="shopping-cart-view">
        <div className="container-fluid">
          <NavShopping />

          <div className="row">
            <Route path="/shopping-cart">
              <Cart />
            </Route>
            <Route path="/wish-list">
              <WishList />
            </Route>
          </div>
        </div>
      </div>
    </div>
  );
}

ShoppingItems.propTypes = {};

export default React.memo(ShoppingItems);
