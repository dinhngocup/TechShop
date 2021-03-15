import React from 'react'
import './Menu.scss'
import {
    Link,
  } from "react-router-dom";

function Menu() {
    return (
       
        <div className="menu d-flex">
            <div className="menu-icon">
                <i className="fa fa-bars"></i>
            </div>
            <Link 
                className="shop-name"
                to='/home'>
                TechShop
            </Link>
        </div>
    )
}


export default Menu

