import React from "react";
import "./_header.scss";
import Menu from "./Menu/menu";
import Nav from "./Nav/nav";
import Info from "./Info/info";

import PropTypes from "prop-types";

Header.propTypes = {
  updateMenuStatus: PropTypes.func.isRequired,
  requestCloseMenu: PropTypes.bool.isRequired,
};

function Header(props) {
  const { updateMenuStatus, requestCloseMenu } = props;
  return (
    <div className="header d-flex sticky-top">
      <Menu
        updateMenuStatus={updateMenuStatus}
        requestCloseMenu={requestCloseMenu}
      />
      <Nav />
      <Info />
    </div>
  );
}

export default Header;
