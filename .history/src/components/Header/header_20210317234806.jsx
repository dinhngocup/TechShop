import React from 'react';
import './_header.scss'
import Menu from './Menu/menu'
import Nav from './Nav/nav'
import Info from './Info/info'

function Header() {
    return (
        <div className='header d-flex sticky-top'>
            <Menu />
            <Nav />
            <Info />
        </div>
    );
}

export default Header;