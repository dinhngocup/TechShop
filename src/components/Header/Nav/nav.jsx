import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { getCategories } from "../Nav/categorySlice";
import Search from "./Search/search";
import "./_nav.scss";

function Nav(props) {
  //console.log('nav')
  const stateCategories = useSelector((state) => state.category);
  const dispatch = useDispatch();

  // get categories
  useEffect(() => {
    let categoryList = [
      {
        name: "Smart Watch",
        slug: "smart-watch",
      },
      {
        name: "PC Accessories",
        slug: "pc-accessories",
      },
      {
        name: "Audio System",
        slug: "audio-system",
      },
      {
        name: "HeadPhone",
        slug: "headphone",
      },
      {
        name: "Mouse",
        slug: "mouse",
      },
      {
        name: "Gaming Desk/Chair",
        slug: "gaming-desk-chair",
      },
      {
        name: "Laptop",
        slug: "laptop",
      },
      {
        name: "Monitor",
        slug: "monitor",
      },
      {
        name: "Keyboard",
        slug: "keyboard",
      },
      {
        name: "All",
        slug: "all",
      },
    ];
    const action = getCategories(categoryList);
    dispatch(action);
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
            <NavLink activeClassName="active" to="/products">
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
