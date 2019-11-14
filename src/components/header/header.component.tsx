import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../shared/config/firebase.utils";

import { ReactComponent as Logo } from '../../assets/img/crown.svg';

import './header.styles.scss';

interface HeaderProps {
    currentUser: any;
}

const Header: React.FC<HeaderProps> = (props) => (
    <div className='header-container'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='header-links'>
            <Link className='link' to='/shop'>SHOP</Link>
            <Link className='link' to='/shop'>CONTACT</Link>
            {
                props.currentUser ? (
                    <div className='link' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className='link' to={'/auth'}>SIGN IN</Link>
                )
            }
        </div>
    </div>
);

export default Header;
