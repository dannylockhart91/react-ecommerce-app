import React from 'react';
import { connect } from 'react-redux';

import { toggleShowCart } from '../../store/cart/cart-actions';

import { ReactComponent as ShoppingIcon } from '../../assets/img/shopping-bag.svg';

import './cart-icon.styles.scss';
import { AppState } from '../../store/root-reducer';
import { Item } from '../../store/cart/cart.types';

interface CartIconProps {
	toggleShowCart: any;
	cartItemCount: number;
}

const CartIcon: React.FC<CartIconProps> = ({
	toggleShowCart,
	cartItemCount
}) => (
	<div className='cart-icon' onClick={toggleShowCart}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{cartItemCount}</span>
	</div>
);


const mapDispatchToProps = (dispatch: any) => ({
	toggleShowCart: () => dispatch(toggleShowCart())
});

const mapStateToProps = ({ cart: { cartItems } }: AppState) => ({
	cartItemCount: cartItems.reduce((total, item) => {
		return item.quantity ? total + item.quantity : 0;
	}, 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
