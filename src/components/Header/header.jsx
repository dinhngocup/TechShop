import React from "react";
import "./_header.scss";
import Menu from "./Menu/menu";
import Nav from "./Nav/nav";
import Info from "./Info/info";

function Header() {
  //console.log('header');
  return (
    <header className="header d-flex fixed-top">
      <Menu />
      <Nav />
      <Info />
    </header>
  );
}

export default React.memo(Header);
