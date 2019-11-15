import React from "react";
import { connect } from 'react-redux';

import { toggleShowCart } from '../../store/cart/cart-actions';


import { ReactComponent as ShoppingIcon } from '../../assets/img/shopping-bag.svg';

import './cart-icon.styles.scss';

interface CartIconProps {
    toggleShowCart: any
}

const CartIcon: React.FC<CartIconProps> = ({toggleShowCart}) => (
    <div className='cart-icon' onClick={toggleShowCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = (dispatch: any) => ({
    toggleShowCart: () => dispatch(toggleShowCart())
});

export default connect(
    null,
    mapDispatchToProps
)(CartIcon);
