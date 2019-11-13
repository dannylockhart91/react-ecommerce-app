import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/img/crown.svg';

import './header.styles.scss';

const Header: React.FC = () => (
    <div className='header-container'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='header-links'>
            <Link className='link' to='/shop'>SHOP</Link>
            <Link className='link' to='/shop'>CONTACT</Link>
        </div>
    </div>
);

export default Header;
