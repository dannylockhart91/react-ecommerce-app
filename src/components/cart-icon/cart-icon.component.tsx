import React from 'react';
import { connect } from 'react-redux';


import { AppState } from '../../store/root-reducer';
import { toggleShowCart } from '../../store/cart/cart-actions';
import { getCartItemsCount } from '../../store/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/img/shopping-bag.svg';

import './cart-icon.styles.scss';

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

const mapStateToProps = (state: AppState) => ({
	cartItemCount: getCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
