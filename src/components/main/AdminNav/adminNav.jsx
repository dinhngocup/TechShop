import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AdminNavList } from "./type";
import "./_adminNav.scss";

function AdminNav(props) {
  const pathname = useLocation().pathname;
  return (
    <div className="body-content nav-wrapper">
      <div className="nav">
        <ul>
          {AdminNavList.map((nav) => (
            <li key={nav.href}>
              <NavLink to={nav.href} activeClassName="active">
                <span className="menu-tab-icon">
                  <i className={nav.icon}></i>
                </span>
                <span>{nav.name}</span>
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/admin/order/placed-order"
              activeClassName="active"
              className={`${
                pathname.startsWith("/admin/order") ? "active" : ""
              }`}
            >
              <span className="menu-tab-icon">
                <i className="fa fa-list"></i>
              </span>
              <span>Order</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

AdminNav.propTypes = {};

export default AdminNav;
