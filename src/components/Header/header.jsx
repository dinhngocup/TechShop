import React from "react";
import "./_header.scss";
import Menu from "./Menu/menu";
import Nav from "./Nav/nav";
import Info from "./Info/info";
import { Link } from "react-router-dom";

function Header() {
  //console.log('header');
  return (
    <header className="header d-flex fixed-top">
      <div className="header-top d-flex">
        <Menu />
        <div className="shop-name">
          <Link to="/home">TechShop</Link>
        </div>
        <Info />
      </div>
      <div className="header-bottom">
        <Nav />
      </div>
    </header>
  );
}

export default React.memo(Header);
