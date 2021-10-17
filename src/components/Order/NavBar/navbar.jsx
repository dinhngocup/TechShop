import React from "react";
import PropTypes from "prop-types";
import {
  NavIconContainer,
  Icon,
  LinkContainer,
  NavTitle,
  NavTitleBackground,
  NavTitleContainer,
  NavTitleWrapper,
  BorderTopRadius,
  BorderBottomRadius,
  EmptyComponent,
} from "./style";
import { NavLink, useLocation } from "react-router-dom";

function Navbar(props) {
  const orderStatus = [
    {
      icon: "fas fa-vote-yea",
      href: "/your-orders",
      title: "All",
    },
    {
      icon: "fas fa-ellipsis-h",
      href: "/your-orders/placed-order",
      title: "Placed order",
    },
    {
      icon: "far fa-check-circle",
      href: "/your-orders/handling",
      title: "In handling",
    },
    {
      icon: "fas fa-truck",
      href: "/your-orders/shipped",
      title: "Shipped",
    },
    {
      icon: "fas fa-home",
      href: "/your-orders/deliveried",
      title: "Deliveried",
    },
    {
      icon: "far fa-times-circle",
      href: "/your-orders/cancelled",
      title: "Cancelled",
    },
  ];

  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="container-fluid h-100">
      <div className="row h-100" style={NavTitleBackground}>
        <NavIconContainer className="col-2 p-0">
          <ul className="list-unstyled py-2 position-sticky" style={{top: '70px'}}>
            <EmptyComponent />
            {orderStatus.map((status) => (
              <LinkContainer
                className={getNavLinkClass(status.href)}
                key={status.href}
              >
                <NavLink to={status.href} className="py-2">
                  <Icon className={getNavLinkClass(status.href)}>
                    <i className={status.icon}></i>
                  </Icon>
                </NavLink>
              </LinkContainer>
            ))}
          </ul>
        </NavIconContainer>
        <div className="col-10 p-0">
          <ul
            className="list-unstyled  position-sticky"
            style={{ marginLeft: "2em", paddingTop: "0.8em", top: '70px' }}
          >
            {orderStatus.map((status, index) => {
              var nextTab =
                index < orderStatus.length - 1 && orderStatus[index + 1];
              var nextActiveTab =
                nextTab && nextTab.href === location.pathname
                  ? BorderBottomRadius
                  : null;
              var prevTab = index > 0 && orderStatus[index - 1];
              var prevActiveTab =
                prevTab && prevTab.href === location.pathname
                  ? BorderTopRadius
                  : null;

              return (
                <React.Fragment key={status.href}>
                  {index === 0 ? (
                    <NavTitleWrapper >
                      <NavTitleContainer
                        style={
                          status.href === location.pathname
                            ? BorderBottomRadius
                            : null
                        }
                      >
                        <EmptyComponent />
                      </NavTitleContainer>
                    </NavTitleWrapper>
                  ) : null}
                  <NavTitleWrapper
                    className={getNavLinkClass(status.href)}
                  >
                    <NavTitleContainer
                      className={getNavLinkClass(status.href)}
                      style={prevActiveTab || nextActiveTab}
                    >
                      <NavTitle to={status.href} exact>{status.title}</NavTitle>
                    </NavTitleContainer>
                  </NavTitleWrapper>
                  {index === orderStatus.length - 1 &&
                  status.href === location.pathname ? (
                    <NavTitleWrapper>
                      <NavTitleContainer style={BorderTopRadius}>
                        <EmptyComponent />
                      </NavTitleContainer>
                    </NavTitleWrapper>
                  ) : null}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
