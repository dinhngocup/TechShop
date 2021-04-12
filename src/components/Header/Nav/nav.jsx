import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Search from "./Search/search";
import "./_nav.scss";
import { getCategories } from './categorySlice';

function Nav(props) {
  const stateCategories = useSelector((state) => state.category);
  const dispatch = useDispatch();

  // get categories
  useEffect(() => {
    async function fetchCategories() {
      await dispatch(getCategories());
    }
    fetchCategories();
  }, [dispatch]);




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
          <li className="dropdown-switcher">
            <NavLink activeClassName="active" to="/products/smart-watch">
              Products
            </NavLink>
            <div className="dropdown">
              <Row>
                {stateCategories.data.length !== 0
                  ? stateCategories.data.map((category, index) => (
                      <Col key={index} xs="4" sm="4" md="4" lg="4">
                        <NavLink
                          to={`/products/${category.slug}`}
                          activeClassName="active"
                        >
                          {category.name}
                        </NavLink>
                      </Col>
                    ))
                  : ""}
              </Row>
            </div>
          </li>
          <li>
            <NavLink activeClassName="active" to="/shopping-cart">
             
             Shopping Cart
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/wish-list">
              Wish List
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