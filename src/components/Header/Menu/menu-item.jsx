import React from 'react'
import PropTypes from 'prop-types'
import { Route, NavLink } from "react-router-dom";

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    isHiddingMenu: PropTypes.bool.isRequired,
    handleHideMenu: PropTypes.func,
}

function MenuItem(props) {
    const {data, isHiddingMenu, handleHideMenu} = props;
    //console.log('3',isHiddingMenu)


    return (
        <Route
          path={data.to}
          exact={data.activeOnlyWhenExact}
          children={() => {
            if (isHiddingMenu) return <span>{data.label}</span>;
            return (
              <NavLink
                activeClassName="active"
                to={data.to}
                exact={data.activeOnlyWhenExact}
                onClick={handleHideMenu}
              >
                {data.label}
              </NavLink>
            );
          }}
        />
      );
}


export default MenuItem

