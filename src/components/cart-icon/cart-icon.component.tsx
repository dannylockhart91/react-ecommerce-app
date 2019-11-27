import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AppState } from '../../store/root.reducer';
import { toggleShowCart } from '../../store/cart/cart-actions';
import { getCartItemsCount } from '../../store/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/img/shopping-bag.svg';

import { CartIconContainer } from './cart-icon.styles';

interface CartIconProps {
	toggleShowCart: any;
	cartItemCount: number;
}

const CartIcon: React.FC<CartIconProps> = ({ toggleShowCart, cartItemCount }) => (
	<CartIconContainer className='cart-icon' onClick={toggleShowCart}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{cartItemCount}</span>
	</CartIconContainer>
);

const mapDispatchToProps = (dispatch: any) => ({
	toggleShowCart: () => dispatch(toggleShowCart())
});

interface cartIconSelectors {
	cartItemCount: number;
}
const mapStateToProps = createStructuredSelector<AppState, cartIconSelectors>({
	cartItemCount: getCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
