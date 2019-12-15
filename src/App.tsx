import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AppState } from './store/root.reducer';
import { getCurrentUser } from './store/user/user.selectors';

import Header from './components/header/header.component';

import Authentication from './pages/authentication/authentication.component';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import './App.scss';

interface AppProps extends AppSelectors {
}

class App extends React.Component<AppProps> {

    componentDidMount(): void {
    }

    componentWillUnmount(): void {
    }

    render() {
        return (
            <div>
                <Header />
                <div className='page-container'>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={ShopPage} />
                        <Route exact path='/checkout' component={CheckoutPage} />
                        <Route
                            exact
                            path='/auth'
                            render={() => (this.props.currentUser ? <Redirect to={'/'} /> : <Authentication />)}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

interface AppSelectors {
    currentUser: any | null;
}
const mapStateToProps = createStructuredSelector<AppState, AppSelectors>({
    currentUser: getCurrentUser,
});

export default connect(mapStateToProps)(App);
