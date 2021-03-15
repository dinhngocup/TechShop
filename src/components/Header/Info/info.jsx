import React from "react";
import "./Info.scss";
import {
  NavLink,
} from "react-router-dom";

function Info() {
    return (
        <div className="info-group d-flex">
            <NavLink 
                activeClassName='active'
                to="/shopping-cart">
                <i className="fa fa-shopping-bag"></i>
            </NavLink>
            <NavLink 
                activeClassName='active'
                to="/user-info">
                <i className="fa fa-user"></i>
            </NavLink>
        </div>
    );
}

export default Info;
