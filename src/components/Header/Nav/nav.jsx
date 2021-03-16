import React from "react";
import './_nav.scss'
import {
  NavLink,
} from "react-router-dom";
import Search from './search'
function Nav(props) {
    return (
        
        <div>
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink 
                            activeClassName='active'
                            to="/home"
                            exact>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            activeClassName='active'
                            to="/products">
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            activeClassName='active'
                            to="/news">
                            News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            activeClassName='active'
                            to="/sales">
                            Sales
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            activeClassName='active'
                            to="/contacts">
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </nav>


        </div>
    );
}

export default Nav;
