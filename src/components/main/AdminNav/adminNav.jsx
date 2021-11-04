import React from "react";
import "./_adminNav.scss";
import { AdminNavList } from "./type";
import { NavLink } from "react-router-dom";

function AdminNav(props) {
  return (
    <div className="body-content nav-wrapper">
      <div className="nav">
        <ul>
          {AdminNavList.map((nav) => (
            <li key={nav.href}>
              <NavLink to={nav.href}  activeClassName="active">
                <span className="menu-tab-icon">
                  <i className={nav.icon}></i>
                </span>
                <span>{nav.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

AdminNav.propTypes = {};

export default AdminNav;
