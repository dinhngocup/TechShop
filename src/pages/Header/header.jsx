import React from "react";
import { useLocation } from "react-router-dom";
import DateTime from "../../components/AdminHeader/DateTimeDisplay/dateTime";
import UserInfo from "../../components/AdminHeader/UserInfo/userInfo";
import Menu from "../../components/main/Header/Menu/menu";
import Info from "./Info/info";
import Nav from "./Nav/nav";
import "./_header.scss";

function Header() {
  const isAdminPage = useLocation().pathname.startsWith("/admin")
    ? true
    : false;
  return (
    <header
      className={`header d-flex fixed-top ${isAdminPage ? "" : "customer"}`}
    >
      <Menu />
      {isAdminPage ? (
        <>
          <DateTime />
          <UserInfo />
        </>
      ) : (
        <>
          <Nav />
          <Info />
        </>
      )}
    </header>
  );
}

export default React.memo(Header);
