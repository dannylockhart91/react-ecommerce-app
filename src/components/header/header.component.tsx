import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { AppState } from '../../store/root-reducer';

import { auth } from '../../shared/config/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/img/crown.svg';

import './header.styles.scss';

interface HeaderProps {
	currentUser: any;
	isHidden: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentUser, isHidden }) => (
	<div className='header-container'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='header-links'>
			<Link className='link' to='/shop'>
				SHOP
			</Link>
			<Link className='link' to='/shop'>
				CONTACT
			</Link>
			{currentUser ? (
				<div className='link' onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className='link' to={'/auth'}>
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{!isHidden ? <CartDropdown /> : null}
	</div>
);

const mapStateToProps = ({
	user: { currentUser },
	cart: { isHidden }
}: AppState) => ({
	currentUser,
	isHidden
});

export default connect(mapStateToProps)(Header);
