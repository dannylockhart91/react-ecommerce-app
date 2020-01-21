import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { AppState } from '../../store/root.reducer';
import { getCartItems } from '../../store/cart/cart.selectors';
import { toggleShowCart } from '../../store/cart/cart-actions';
import { Item } from '../../store/cart/cart.types';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import { CartDropdownProps, cartDropdownSelectors } from './cart-dropdown.types';
import { CartDropdownContainer } from './cart-dropdown-styles';

export const CartDropdown: React.FC<CartDropdownProps> = ({ cartItems, dispatch, history }) => (
    <CartDropdownContainer className='cart-dropdown'>
        <div className='cart-items' id="cart-items">
            {cartItems.length ? (
                cartItems.map((item: Item) => <CartItem key={item.id} item={item}/>)
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )}
        </div>
        <CustomButton
            handleClick={() => {
                history.push('/checkout');
                dispatch(toggleShowCart());
            }}>
            GO TO CHECKOUT
        </CustomButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector<AppState, cartDropdownSelectors>({
    cartItems: getCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
