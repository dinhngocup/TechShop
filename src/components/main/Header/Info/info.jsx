import React from "react";
import "./_info.scss";
import {
  NavLink,
} from "react-router-dom";
import CartIcon from './cartIcon';

function Info() {
    return (
        <div className="info-group d-flex">
           <CartIcon />
            <NavLink 
                activeClassName='active'
                to="/user-info">
                <i className="fa fa-user"></i>
            </NavLink>
        </div>
    );
}

export default Info;
