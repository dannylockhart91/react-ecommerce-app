import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AppState } from './store/root.reducer';
import { checkIsUserAuthenticated } from './store/user/user.actions';
import { getCurrentUser } from './store/user/user.selectors';

import Header from './components/header/header.component';

import AuthenticationContainer from './pages/authentication/authentication.container';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import ContactPage from './pages/contact/contactpage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import './App.scss';

interface AppProps extends AppSelectors {
	checkIsUserAuthenticated: any;
}

const App: React.FC<AppProps> = ({ currentUser, checkIsUserAuthenticated }) => {
	useEffect(() => {
		checkIsUserAuthenticated();
	}, [checkIsUserAuthenticated]);

	return (
		<div>
			<Header />
			<div className='page-container'>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/contact' component={ContactPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact
						path='/auth'
						// @ts-ignore
						render={() => (currentUser ? <Redirect to={'/'} /> : <AuthenticationContainer />)}
					/>
				</Switch>
			</div>
		</div>
	);
};

interface AppSelectors {
	currentUser: any;
}

const mapDispatchToProps = (dispatch: any) => ({
	checkIsUserAuthenticated: () => dispatch(checkIsUserAuthenticated())
});

const mapStateToProps = createStructuredSelector<AppState, AppSelectors>({
	currentUser: getCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
