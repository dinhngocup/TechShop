import React from "react";
import "./_nav.scss";
import { NavLink, Link } from "react-router-dom";
import Search from "./Search/search";
function Nav(props) {
  return (
    <div className="nav-bar d-flex">
      <Search />
      <nav className="nav">
        <ul>
          <li>
            <NavLink activeClassName="active" to="/home" exact>
              Home
            </NavLink>
          </li>
          <li className='dropdown-switcher'>
            <NavLink
              activeClassName="active"
              to="/products"
            >
              Products
            </NavLink>
            <div className="dropdown">
              <div className="row">
                <div className="col">
                  <Link to='/'>Smart Watch</Link>
                  <Link to='/'>PC Accessories</Link>
                  <Link to='/'>Audio System</Link>
                  <Link to='/'>HeadPhone</Link>
                </div>
                <div className="col">
                  <Link to='/'>Mouse</Link>
                  <Link to='/'>Keyboard</Link>
                  <Link to='/'>Gaming Desk/Chair</Link>
                  <Link to='/'>Laptop </Link>
                </div>
                <div className="col">
                  <Link to='/'>Monitor</Link>
                  <Link to='/'>All</Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <NavLink activeClassName="active" to="/news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/sales">
              Sales
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contacts">
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
