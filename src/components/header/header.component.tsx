import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AppState } from '../../store/root.reducer';
import { getCurrentUser } from '../../store/user/user.selectors';
import { getIsCartHidden } from '../../store/cart/cart.selectors';

import { auth } from '../../shared/config/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/img/crown.svg';

import { HeaderContainer, LogoContainer, HeaderLinks, OptionLink } from './header.styles';

interface HeaderProps {
    currentUser: any;
    isHidden: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentUser, isHidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <HeaderLinks>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {currentUser ? (
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to={'/auth'}>
                    SIGN IN
                </OptionLink>
            )}
            <CartIcon/>
        </HeaderLinks>
        {isHidden ? null : <CartDropdown/>}
    </HeaderContainer>
);

interface headerSelectors {
    currentUser: any | null;
    isHidden: boolean;
}

const mapStateToProps = createStructuredSelector<AppState, headerSelectors>({
    currentUser: getCurrentUser,
    isHidden: getIsCartHidden
});

export default connect(mapStateToProps)(Header);
