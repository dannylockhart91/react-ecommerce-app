import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AppState } from '../../store/root.reducer';
import { signOut } from '../../store/user/user.actions';
import { getCurrentUser } from '../../store/user/user.selectors';
import { getIsCartHidden } from '../../store/cart/cart.selectors';

import { auth } from '../../shared/config/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/img/crown.svg';

import { HeaderContainer, LogoContainer, HeaderLinks, OptionLink, OptionDiv } from './header.styles';

interface HeaderProps {
    currentUser: any;
    isHidden: boolean;
    signOut: any
}

const Header: React.FC<HeaderProps> = ({ currentUser, isHidden, signOut }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <HeaderLinks>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {currentUser ? (
                <OptionDiv onClick={() => signOut}>SIGN OUT</OptionDiv>
            ) : (
                <OptionLink to={'/auth'}>SIGN IN</OptionLink>
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

const mapDispatchToProps = (dispatch: any) => ({
    signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
